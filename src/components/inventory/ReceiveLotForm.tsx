import { useEffect, useMemo, useRef, useState } from "react";
import { useAuth } from "../../store/auth";
import { getAuthToken } from "../../api/client";
import { receiveStockLot, type ReceiveStockLotPayload } from "../../api/stocks";

/** ====== Util BASE & headers (selaras dengan src/api/stocks.ts) ====== */
const RAW =
  (import.meta.env as any).VITE_API_URL ?? (import.meta.env as any).VITE_API_BASE_URL;
if (!RAW) throw new Error("VITE_API_URL / VITE_API_BASE_URL belum diset.");
const BASE = RAW.replace(/\/+$/, "");

function authHeaders() {
  const token = getAuthToken();
  if (!token) throw new Error("Auth token tidak ditemukan.");
  return { Authorization: `Bearer ${token}` };
}
function toQuery(q?: Record<string, unknown>) {
  if (!q) return "";
  const p = new URLSearchParams();
  Object.entries(q).forEach(([k, v]) => {
    if (v === undefined || v === null || v === "") return;
    if (typeof v === "boolean") p.append(k, v ? "1" : "0");
    else p.append(k, String(v));
  });
  return p.toString() ? `?${p.toString()}` : "";
}

/** ====== Types lokal untuk dropdown & pencarian ====== */
type Warehouse = { id: number; nama: string };
type VariantSummary = { id: number; sku: string; nama: string };

type Props = {
  defaultGudangId?: number;
  defaultVariantId?: number;
  onSuccess?: (lotId: number) => void;
};

export default function ReceiveLotForm({
  defaultGudangId,
  defaultVariantId,
  onSuccess,
}: Props): React.ReactElement {
  const { user } = useAuth();

  /** ====== State Gudang ====== */
  const cabangId = useMemo(() => Number(user?.cabang_id ?? 0), [user?.cabang_id]);
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
  const [gudangId, setGudangId] = useState<number | "">(defaultGudangId ?? "");

  /** ====== State Varian (autocomplete) ====== */
  const [variantQuery, setVariantQuery] = useState("");
  const [variantOpts, setVariantOpts] = useState<VariantSummary[]>([]);
  const [variantLoading, setVariantLoading] = useState(false);
  const [variantId, setVariantId] = useState<number | "">(defaultVariantId ?? "");
  const [variantPicked, setVariantPicked] = useState<VariantSummary | null>(null);

  // UI dropdown control (tanpa ubah logika API)
  const [variantOpen, setVariantOpen] = useState(false);
  const variantBoxRef = useRef<HTMLDivElement | null>(null);

  /** ====== Form fields lain ====== */
  const [qty, setQty] = useState<number | string>("");
  function incQty(delta: number) {
    setQty((prev) => {
      const cur = typeof prev === "number" ? prev : Number(prev) || 0;
      const next = Math.max(0, cur + delta);
      return next;
    });
  }

  const [lotNo, setLotNo] = useState("");
  const [autoLot, setAutoLot] = useState(true);
  const [receivedAt, setReceivedAt] = useState<string>(() => {
    const d = new Date();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${d.getFullYear()}-${mm}-${dd}`;
  });
  const [expiresAt, setExpiresAt] = useState<string>("");
  const [unitCost, setUnitCost] = useState<number | string>("");
  const [note, setNote] = useState("");

  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  /** ====== Load Gudang (dropdown) ====== */
  useEffect(() => {
    let on = true;
    if (!cabangId) return;

    (async () => {
      const url = `${BASE}/gudangs${toQuery({ cabang_id: cabangId, per_page: 50 })}`;
      const res = await fetch(url, { headers: authHeaders() });
      const json = await res.json();
      if (!on) return;

      const rows = Array.isArray(json?.data) ? json.data : Array.isArray(json) ? json : [];
      const list: Warehouse[] = rows.map((w: any) => ({
        id: Number(w.id),
        nama: String(w.nama ?? w.name ?? `Gudang #${w.id}`),
      }));

      setWarehouses(list);

      // preselect kalau tidak ada default dari querystring
      if (!defaultGudangId && list.length > 0) setGudangId(list[0].id);
    })().catch(() => {
      if (on) setWarehouses([]);
    });

    return () => {
      on = false;
    };
  }, [cabangId, defaultGudangId]);

  /** ====== Fetch varian (dipakai untuk prefetch & search) ====== */
  async function fetchVariants(q: string): Promise<void> {
    if (Number(gudangId) <= 0) {
      setVariantOpts([]);
      setVariantLoading(false);
      return;
    }

    setVariantLoading(true);
    try {
      const url = `${BASE}/variants${toQuery({
        q: q.trim(), // boleh kosong untuk prefetch daftar awal
        warehouse_id: Number(gudangId),
        per_page: 12,
        page: 1,
      })}`;

      const res = await fetch(url, { headers: authHeaders() });
      const json = await res.json();

      const raw = json?.data ?? json;
      const arr = Array.isArray(raw) ? raw : [];

      const list: VariantSummary[] = arr.map((v: any) => ({
        id: Number(v.id),
        sku: String(v.sku ?? v.SKU ?? ""),
        nama: String(v.nama ?? v.name ?? ""),
      }));

      setVariantOpts(list);
    } catch {
      setVariantOpts([]);
    } finally {
      setVariantLoading(false);
    }
  }

  /** ====== Pencarian Varian (autocomplete + prefetch saat fokus) ====== */
  const debounceRef = useRef<number | undefined>(undefined);

  const typedEnough = useMemo(
    () => String(variantQuery).trim().length >= 2 && Number(gudangId) > 0,
    [variantQuery, gudangId]
  );

  useEffect(() => {
    // dropdown tidak dibuka -> jangan fetch apa-apa
    if (!variantOpen) {
      // kalau user belum memenuhi syarat 2 huruf, kosongkan (tetap sesuai perilaku lama)
      if (!typedEnough) setVariantOpts([]);
      setVariantLoading(false);
      return;
    }

    // dropdown dibuka tapi gudang belum dipilih
    if (Number(gudangId) <= 0) {
      setVariantOpts([]);
      setVariantLoading(false);
      return;
    }

    // jika user mengetik >=2 huruf -> search debounced (perilaku lama)
    if (typedEnough) {
      if (debounceRef.current) window.clearTimeout(debounceRef.current);

      debounceRef.current = window.setTimeout(() => {
        fetchVariants(variantQuery);
      }, 250) as unknown as number;

      return () => {
        if (debounceRef.current) window.clearTimeout(debounceRef.current);
      };
    }

    // jika belum mengetik (atau <2 huruf) tapi dropdown terbuka -> prefetch daftar awal
    // supaya user bisa lihat varian tersedia tanpa menebak
    fetchVariants("");

    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variantQuery, gudangId, variantOpen, typedEnough]);

  /** ====== Click outside untuk menutup dropdown varian (UI only) ====== */
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const el = variantBoxRef.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) setVariantOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  /** ====== Generator Lot No otomatis ====== */
  function genLotNo(dt: string, sku: string): string {
    const yyyymmdd = dt.replaceAll("-", "");
    const rand = Math.random().toString().slice(2, 6);
    const cleanSku = sku.replace(/[^A-Za-z0-9]/g, "").slice(0, 12) || "SKU";
    return `LOT-${yyyymmdd}-${cleanSku}-${rand}`;
  }

  /** ====== Auto lot ketika varian / tanggal berubah ====== */
  useEffect(() => {
    if (!autoLot) return;
    if (!receivedAt) return;
    const sku = variantPicked?.sku || "";
    if (!sku) return;
    setLotNo(genLotNo(receivedAt, sku));
  }, [autoLot, receivedAt, variantPicked?.sku]);

  /** ====== Validasi Submit ====== */
  const canSubmit = useMemo(() => {
    return (
      cabangId > 0 &&
      Number(gudangId) > 0 &&
      Number(variantId) > 0 &&
      Number(qty) > 0 &&
      !!receivedAt &&
      !busy
    );
  }, [cabangId, gudangId, variantId, qty, receivedAt, busy]);

  /** ====== Submit ====== */
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setBusy(true);
    setMsg(null);

    try {
      const payload: ReceiveStockLotPayload = {
        cabang_id: cabangId,
        gudang_id: Number(gudangId),
        product_variant_id: Number(variantId),
        qty: Number(qty),
        lot_no: autoLot ? (lotNo || null) : (lotNo || null),
        received_at: receivedAt || null,
        expires_at: expiresAt || null,
        unit_cost: unitCost === "" ? null : Number(unitCost),
        note: note || null,
        ref_type: "PURCHASE",
        ref_id: null,
      };

      const res = await receiveStockLot(payload);

      setMsg({ type: "ok", text: `Berhasil: Lot #${res.data.id} ditambahkan.` });

      // reset field tertentu (tetap pertahankan gudang & varian untuk input batch)
      setQty("");
      if (autoLot && variantPicked?.sku) setLotNo(genLotNo(receivedAt, variantPicked.sku));
      else setLotNo("");
      setExpiresAt("");
      setUnitCost("");
      setNote("");

      if (onSuccess) onSuccess(res.data.id);
    } catch (err: any) {
      setMsg({ type: "err", text: err?.message || "Gagal menyimpan lot." });
    } finally {
      setBusy(false);
    }
  }

  /** ====== Helper pilih varian ====== */
  function pickVariant(v: VariantSummary) {
    setVariantPicked(v);
    setVariantId(v.id);
    setVariantQuery(`${v.sku} — ${v.nama}`);
    setVariantOpen(false);

    if (autoLot && receivedAt) setLotNo(genLotNo(receivedAt, v.sku));
    setQty((prev) => (prev === "" || Number(prev) === 0 ? 1 : prev));
  }

  /** ====== Render ====== */
  return (
    <form onSubmit={onSubmit} style={{ display: "grid", gap: 16 }}>
      {/* Info / alert */}
      {msg && (
        <div
          className={`alert ${msg.type === "err" ? "alert-danger" : "alert-success"}`}
          style={{ marginBottom: 4 }}
        >
          {msg.text}
        </div>
      )}

      {/* Section: Lokasi & Varian */}
      <section style={{ display: "grid", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <div style={{ fontWeight: 700 }}>Lokasi & Varian</div>
          <span className="badge" style={{ opacity: 0.9 }}>
            Cabang #{cabangId || "-"}
          </span>
        </div>

        <div className="rl-grid">
          {/* Gudang */}
          <div style={{ display: "grid", gap: 6 }}>
            <label className="text-sm font-medium">Gudang</label>
            <select
              className="input"
              value={gudangId}
              onChange={(e) => {
                const next = e.target.value ? Number(e.target.value) : "";
                setGudangId(next);
                // reset varian saat gudang berubah (ini tetap sesuai behavior lama)
                setVariantPicked(null);
                setVariantId("");
                setVariantQuery("");
                setVariantOpts([]);
                setVariantOpen(false);
              }}
              required
            >
              {warehouses.length === 0 ? (
                <option value="">Memuat gudang…</option>
              ) : (
                warehouses.map((w) => (
                  <option key={w.id} value={w.id}>
                    {w.nama}
                  </option>
                ))
              )}
            </select>
            <div style={{ fontSize: 12, opacity: 0.75 }}>
              Gudang menentukan konteks stok yang akan diterima.
            </div>
          </div>

          {/* Varian autocomplete */}
          <div ref={variantBoxRef} style={{ display: "grid", gap: 6, position: "relative" }}>
            <label className="text-sm font-medium">Cari Varian (SKU/Nama)</label>
            <input
              className="input"
              type="text"
              placeholder={Number(gudangId) > 0 ? "Klik untuk lihat varian, atau ketik SKU/Nama…" : "Pilih gudang terlebih dahulu"}
              value={variantQuery}
              onChange={(e) => {
                setVariantQuery(e.target.value);
                setVariantPicked(null);
                setVariantId("");
                setVariantOpen(true);
              }}
              onFocus={() => {
                setVariantOpen(true);
                // prefetch langsung terasa cepat (tanpa menunggu useEffect tick)
                if (Number(gudangId) > 0 && String(variantQuery).trim().length < 2) {
                  fetchVariants("");
                }
              }}
              disabled={Number(gudangId) <= 0}
            />

            {/* Hint status */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {variantPicked ? (
                <span className="badge" style={{ background: "rgba(0,0,0,.04)" }}>
                  Dipilih: {variantPicked.sku}
                </span>
              ) : (
                <span className="badge" style={{ background: "rgba(0,0,0,.04)", opacity: 0.9 }}>
                  Belum pilih varian
                </span>
              )}
              {variantLoading ? (
                <span className="badge" style={{ background: "rgba(0,0,0,.04)", opacity: 0.9 }}>
                  Mencari…
                </span>
              ) : null}
            </div>

            {/* Dropdown hasil */}
            {variantOpen && (variantLoading || variantOpts.length > 0) && (
              <div
                className="card"
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  left: 0,
                  right: 0,
                  zIndex: 50,
                  padding: 10,
                  maxHeight: 240,
                  overflow: "auto",
                }}
              >
                {variantLoading && (
                  <div className="alert" style={{ marginBottom: 8 }}>
                    Memuat varian…
                  </div>
                )}

                {!variantLoading && variantOpts.length > 0 ? (
                  <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 8 }}>
                    {variantOpts.map((v) => (
                      <li
                        key={v.id}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 10,
                          padding: "8px 6px",
                          borderRadius: 12,
                          border: "1px solid rgba(0,0,0,0.06)",
                          background: "rgba(0,0,0,0.01)",
                        }}
                      >
                        <div style={{ minWidth: 0 }}>
                          <div style={{ fontWeight: 700, lineHeight: 1.2 }}>{v.sku}</div>
                          <div
                            style={{
                              fontSize: 12,
                              opacity: 0.8,
                              marginTop: 2,
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {v.nama}
                          </div>
                        </div>

                        <button
                          type="button"
                          className="button button-primary"
                          onClick={() => pickVariant(v)}
                          style={{ borderRadius: 999, padding: "0.5rem 0.75rem" }}
                        >
                          Pilih
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {/* jika dropdown terbuka, query belum cukup, dan hasil kosong */}
                {!variantLoading && variantOpts.length === 0 && (
                  <div className="alert" style={{ opacity: 0.9 }}>
                    {String(variantQuery).trim().length >= 2
                      ? "Tidak ada varian ditemukan."
                      : "Mulai ketik untuk mempersempit, atau pilih dari daftar jika tersedia."}
                  </div>
                )}
              </div>
            )}

            <input type="hidden" value={variantId || ""} />
          </div>
        </div>
      </section>

      {/* Section: Kuantitas & Lot */}
      <section style={{ display: "grid", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <div style={{ fontWeight: 700 }}>Kuantitas & Lot</div>
          <span
            className="badge"
            style={{ cursor: "pointer" }}
            onClick={() => setAutoLot((v) => !v)}
            title="Klik untuk toggle mode lot"
          >
            Lot: {autoLot ? "Auto" : "Manual"}
          </span>
        </div>

        <div className="rl-grid">
          {/* Qty */}
          <div style={{ display: "grid", gap: 6 }}>
            <label className="text-sm font-medium">Qty</label>

            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                <button type="button" className="button button-ghost" onClick={() => incQty(-10)}>
                  -10
                </button>
                <button type="button" className="button button-ghost" onClick={() => incQty(-5)}>
                  -5
                </button>
                <button type="button" className="button button-ghost" onClick={() => incQty(-1)}>
                  -1
                </button>
              </div>

              <input
                className="input"
                type="number"
                min={1}
                step={1}
                value={qty}
                onChange={(e) => setQty(e.target.value === "" ? "" : Math.max(1, Number(e.target.value)))}
                required
                style={{ width: 140, textAlign: "center" }}
                placeholder="0"
              />

              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                <button type="button" className="button button-ghost" onClick={() => incQty(+1)}>
                  +1
                </button>
                <button type="button" className="button button-ghost" onClick={() => incQty(+5)}>
                  +5
                </button>
                <button type="button" className="button button-ghost" onClick={() => incQty(+10)}>
                  +10
                </button>
              </div>
            </div>

            <div style={{ fontSize: 12, opacity: 0.75 }}>
              Minimal 1. Tombol cepat hanya membantu input, tidak mengubah logika transaksi.
            </div>
          </div>

          {/* Lot No */}
          <div style={{ display: "grid", gap: 6 }}>
            <label className="text-sm font-medium">Lot No</label>
            <input
              className="input"
              type="text"
              value={lotNo}
              onChange={(e) => setLotNo(e.target.value)}
              disabled={autoLot}
              placeholder={autoLot ? "Terisi otomatis saat pilih varian & tanggal" : "Isi manual (opsional)"}
            />
            <div style={{ fontSize: 12, opacity: 0.75 }}>
              Mode Auto menghasilkan format LOT-YYYYMMDD-SKU-XXXX.
            </div>
          </div>
        </div>
      </section>

      {/* Section: Tanggal & Biaya */}
      <section style={{ display: "grid", gap: 10 }}>
        <div style={{ fontWeight: 700 }}>Tanggal & Biaya</div>

        <div className="rl-grid">
          <div style={{ display: "grid", gap: 6 }}>
            <label className="text-sm font-medium">Tanggal Terima</label>
            <input
              className="input"
              type="date"
              value={receivedAt}
              onChange={(e) => setReceivedAt(e.target.value)}
              required
            />
          </div>

          <div style={{ display: "grid", gap: 6 }}>
            <label className="text-sm font-medium">Kadaluarsa (opsional)</label>
            <input className="input" type="date" value={expiresAt} onChange={(e) => setExpiresAt(e.target.value)} />
          </div>

          <div style={{ display: "grid", gap: 6 }}>
            <label className="text-sm font-medium">Unit Cost (opsional)</label>
            <input
              className="input"
              type="number"
              min={0}
              step="0.01"
              value={unitCost}
              onChange={(e) => setUnitCost(e.target.value === "" ? "" : Number(e.target.value))}
              placeholder="0"
            />
          </div>

          <div style={{ display: "grid", gap: 6 }}>
            <label className="text-sm font-medium">Catatan (opsional)</label>
            <input
              className="input"
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Contoh: barang datang dari supplier A"
            />
          </div>
        </div>
      </section>

      {/* Actions */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
          flexWrap: "wrap",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          paddingTop: 12,
        }}
      >
        <div style={{ fontSize: 12, opacity: 0.75 }}>
          Pastikan gudang & varian sudah benar sebelum menyimpan lot.
        </div>

        <button
          type="submit"
          className="button button-primary"
          disabled={!canSubmit || busy}
          style={{ borderRadius: 999, padding: "0.7rem 1rem", minWidth: 160 }}
        >
          {busy ? "Menyimpan…" : "Simpan Lot"}
        </button>
      </div>

      {/* Responsif grid helper */}
      <style>
        {`
          .rl-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          @media (max-width: 900px) {
            .rl-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </form>
  );
}
