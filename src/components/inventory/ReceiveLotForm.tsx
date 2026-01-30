import { useEffect, useMemo, useRef, useState } from "react";
import { useAuth } from "../../store/auth";
import { getAuthToken } from "../../api/client";
import { receiveStockLot, type ReceiveStockLotPayload } from "../../api/stocks";

/** ====== Util BASE & headers (selaras dengan src/api/stocks.ts) ====== */
const RAW = (import.meta.env as any).VITE_API_URL ?? (import.meta.env as any).VITE_API_BASE_URL;
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

export default function ReceiveLotForm({ defaultGudangId, defaultVariantId, onSuccess }: Props) {
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

    /** ====== Form fields lain ====== */
    const [qty, setQty] = useState<number | string>("");
    function incQty(delta: number) {
        setQty((prev) => {
            const cur = typeof prev === "number" ? prev : 0;
            const next = Math.max(0, cur + delta);
            return next;
        });
    }
    const [lotNo, setLotNo] = useState("");
    const [autoLot, setAutoLot] = useState(true);
    const [receivedAt, setReceivedAt] = useState<string>(() => {
        // default: hari ini
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
            // GET /warehouses?cabang_id=...&per_page=50
            const url = `${BASE}/gudangs${toQuery({ cabang_id: cabangId, per_page: 50 })}`;
            const res = await fetch(url, { headers: authHeaders() });
            const json = await res.json();
            if (!on) return;
            const rows = Array.isArray(json?.data) ? json.data : Array.isArray(json) ? json : [];
            const list: Warehouse[] = rows.map((w: any) => ({ id: Number(w.id), nama: String(w.nama ?? w.name ?? `Gudang #${w.id}`) }));
            setWarehouses(list);
            // preselect
            if (!defaultGudangId && list.length > 0) setGudangId(list[0].id);
        })().catch(() => {
            if (on) setWarehouses([]);
        });
        return () => { on = false; };
    }, [cabangId, defaultGudangId]);

    /** ====== Pencarian Varian (autocomplete) ====== */
    const debounceRef = useRef<number | undefined>(undefined);
    const canSearchVariant = useMemo(() => String(variantQuery).trim().length >= 2 && Number(gudangId) > 0, [variantQuery, gudangId]);

    useEffect(() => {
        if (!canSearchVariant) {
            setVariantOpts([]);
            return;
        }
        if (debounceRef.current) window.clearTimeout(debounceRef.current);
        setVariantLoading(true);
        // debounce 250ms
        debounceRef.current = window.setTimeout(async () => {
            try {
                // GET /variants?q=...&gudang_id=...&per_page=12&page=1
                const url = `${BASE}/variants${toQuery({ q: variantQuery.trim(), warehouse_id: Number(gudangId), per_page: 12, page: 1 })}`;
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
        }, 250) as unknown as number;

        return () => { if (debounceRef.current) window.clearTimeout(debounceRef.current); };
    }, [variantQuery, gudangId, canSearchVariant]);

    /** ====== Generator Lot No otomatis ====== */
    function genLotNo(dt: string, sku: string): string {
        // LOT-YYYYMMDD-SKU-RAND4
        const yyyymmdd = dt.replaceAll("-", "");
        const rand = Math.random().toString().slice(2, 6); // 4 digit
        const cleanSku = sku.replace(/[^A-Za-z0-9]/g, "").slice(0, 12) || "SKU";
        return `LOT-${yyyymmdd}-${cleanSku}-${rand}`;
    }

    // Saat varian dipilih atau tanggal terima berubah → isi lot otomatis bila mode auto
    useEffect(() => {
        if (!autoLot) return;
        if (!receivedAt) return;
        const sku = variantPicked?.sku || "";
        if (!sku) return;
        setLotNo(genLotNo(receivedAt, sku));
    }, [autoLot, receivedAt, variantPicked?.sku]);

    /** ====== Validasi Submit ====== */
    const canSubmit = useMemo(() => {
        return cabangId > 0 && Number(gudangId) > 0 && Number(variantId) > 0 && Number(qty) > 0 && !!receivedAt && !busy;
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
            // reset kuantitas & input fleksibel, pertahankan gudang & varian agar cepat input batch
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

    /** ====== Render ====== */
    return (
        <form className="card" onSubmit={onSubmit} style={{ padding: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Penerimaan Stok (Lot)</div>

            {msg && (
                <div className={`alert ${msg.type === "err" ? "alert-danger" : "alert-success"}`} style={{ marginBottom: 12 }}>
                    {msg.text}
                </div>
            )}

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {/* Gudang: dropdown dari API */}
                <div>
                    <label>Gudang</label>
                    <select
                        value={gudangId}
                        onChange={(e) => setGudangId(e.target.value ? Number(e.target.value) : "")}
                        required
                    >
                        {warehouses.map((w) => (
                            <option key={w.id} value={w.id}>{w.nama}</option>
                        ))}
                    </select>
                </div>

                {/* Varian: autocomplete, pilih → ID otomatis */}
                <div>
                    <label>Cari Varian (SKU/Nama)</label>
                    <input
                        type="text"
                        placeholder="Ketik minimal 2 huruf…"
                        value={variantQuery}
                        onChange={(e) => {
                            setVariantQuery(e.target.value);
                            setVariantPicked(null);
                            setVariantId("");
                        }}
                    />
                    {variantLoading && <div className="alert" style={{ marginTop: 6 }}>Mencari varian…</div>}
                    {!variantLoading && variantOpts.length > 0 && (
                        <div className="card" style={{ marginTop: 6, padding: 8, maxHeight: 180, overflow: "auto" }}>
                            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                                {variantOpts.map((v) => (
                                    <li
                                        key={v.id}
                                        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 0" }}
                                    >
                                        <div>
                                            <div style={{ fontWeight: 600 }}>{v.sku}</div>
                                            <div style={{ fontSize: 12, opacity: .85 }}>{v.nama}</div>
                                        </div>
                                        <button
                                            type="button"
                                            className="button"
                                            onClick={() => {
                                                setVariantPicked(v);
                                                setVariantId(v.id);
                                                setVariantQuery(`${v.sku} — ${v.nama}`);
                                                if (autoLot && receivedAt) setLotNo(genLotNo(receivedAt, v.sku));
                                                // set qty default 1 saat varian dipilih jika belum diisi
                                                setQty((prev) => (prev === "" || Number(prev) === 0 ? 1 : prev));
                                            }}
                                        >
                                            Pilih
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <input type="hidden" value={variantId || ""} />
                </div>

                {/* Qty dengan tombol cepat */}
                <div>
                    <label>Qty</label>
                    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                        <div style={{ display: "flex", gap: 4 }}>
                            <button type="button" className="button" onClick={() => incQty(-10)}>-10</button>
                            <button type="button" className="button" onClick={() => incQty(-5)}>-5</button>
                            <button type="button" className="button" onClick={() => incQty(-1)}>-1</button>
                        </div>
                        <input
                            type="number"
                            min={1}
                            step={1}
                            value={qty}
                            onChange={(e) => setQty(e.target.value === "" ? "" : Math.max(1, Number(e.target.value)))}
                            required
                            style={{ width: 120, textAlign: "center" }}
                        />
                        <div style={{ display: "flex", gap: 4 }}>
                            <button type="button" className="button" onClick={() => incQty(+1)}>+1</button>
                            <button type="button" className="button" onClick={() => incQty(+5)}>+5</button>
                            <button type="button" className="button" onClick={() => incQty(+10)}>+10</button>
                        </div>
                    </div>
                    <div style={{ fontSize: 12, opacity: .75, marginTop: 4 }}>
                        Gunakan tombol cepat atau ketik manual. Minimal 1.
                    </div>
                </div>

                {/* Lot No (auto / editable) */}
                <div>
                    <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        Lot No
                        <span className="badge" style={{ cursor: "pointer" }} onClick={() => setAutoLot((v) => !v)}>
                            {autoLot ? "Auto" : "Manual"}
                        </span>
                    </label>
                    <input
                        type="text"
                        value={lotNo}
                        onChange={(e) => setLotNo(e.target.value)}
                        disabled={autoLot}
                        placeholder={autoLot ? "Terisi otomatis saat pilih varian & tanggal" : "Isi manual (opsional)"}
                    />
                </div>

                {/* Tanggal terima & kadaluarsa */}
                <div>
                    <label>Tanggal Terima</label>
                    <input type="date" value={receivedAt} onChange={(e) => setReceivedAt(e.target.value)} required />
                </div>
                <div>
                    <label>Kadaluarsa (opsional)</label>
                    <input type="date" value={expiresAt} onChange={(e) => setExpiresAt(e.target.value)} />
                </div>

                {/* Biaya & Catatan */}
                <div>
                    <label>Unit Cost (opsional)</label>
                    <input
                        type="number"
                        min={0}
                        step="0.01"
                        value={unitCost}
                        onChange={(e) => setUnitCost(e.target.value === "" ? "" : Number(e.target.value))}
                    />
                </div>
                <div>
                    <label>Catatan (opsional)</label>
                    <input type="text" value={note} onChange={(e) => setNote(e.target.value)} />
                </div>
            </div>

            <div style={{ marginTop: 12, display: "flex", justifyContent: "flex-end", gap: 8 }}>
                <button type="submit" className="button" disabled={!canSubmit || busy}>
                    {busy ? "Menyimpan…" : "Simpan Lot"}
                </button>
            </div>
        </form>
    );
}
