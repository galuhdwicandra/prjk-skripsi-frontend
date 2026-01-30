// src/pages/stock/StockIndex.tsx
import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import type { Stock, StockQuery, UpdateMinStockPayload } from "../../types/stock";
import { listStocks, updateMinStock } from "../../api/stocks";
import StockTable from "../../components/stock/StockTable";
import SetInitialStockDialog from "../../components/stock/SetInitialStockDialog";
import CabangSelect from "../../components/stock/CabangSelect";
import GudangSelect from "../../components/stock/GudangSelect";
import VariantPicker from "../../components/stock/VariantPicker";
import { shallowEqual } from "../../utils/shallowEqual";

function getErrorMessage(err: unknown, fallback = "Terjadi kesalahan."): string {
  if (typeof err === "string") return err;
  if (err && typeof err === "object") {
    const maybe = (err as { message?: unknown }).message;
    if (typeof maybe === "string") return maybe;
  }
  return fallback;
}

type QueryUpdater = (patch: Partial<StockQuery>) => void;

function useQueryState() {
  const [q, setQ] = useState<StockQuery>({ page: 1, per_page: 10, low: false });

  const update: QueryUpdater = useCallback((patch) => {
    setQ((prev) => {
      const next = { ...prev, ...patch };
      const resetPage =
        (patch.cabang_id !== undefined && patch.cabang_id !== prev.cabang_id) ||
        (patch.gudang_id !== undefined && patch.gudang_id !== prev.gudang_id) ||
        (patch.product_variant_id !== undefined &&
          patch.product_variant_id !== prev.product_variant_id) ||
        (patch.low !== undefined && patch.low !== prev.low) ||
        (patch.per_page !== undefined && patch.per_page !== prev.per_page);

      if (resetPage) next.page = 1;
      return shallowEqual(prev, next) ? prev : next;
    });
  }, []);

  const setQDirect = useCallback((next: StockQuery) => {
    setQ((prev) => (shallowEqual(prev, next) ? prev : next));
  }, []);

  return { q, update, setQ: setQDirect };
}

function useDebounced<T>(value: T, delayMs: number): T {
  const [debounced, setDebounced] = useState<T>(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delayMs);
    return () => clearTimeout(id);
  }, [value, delayMs]);
  return debounced;
}

export default function StockIndex() {
  const { q, update } = useQueryState();
  const debouncedQ = useDebounced(q, 150);

  const [rows, setRows] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(false);
  const [openSet, setOpenSet] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onCabangChange = useCallback(
    (id: number | undefined) => update({ cabang_id: id, gudang_id: undefined }),
    [update]
  );

  const onGudangChange = useCallback(
    (id: number | undefined) => update({ gudang_id: id }),
    [update]
  );

  const onVariantChange = useCallback(
    (variantId: number | undefined) => update({ product_variant_id: variantId }),
    [update]
  );

  function normalizeQuery(q: StockQuery): StockQuery {
    return {
      page: q.page ?? 1,
      per_page: q.per_page ?? 10,
      low: !!q.low,
      cabang_id: q.cabang_id ?? undefined,
      gudang_id: q.gudang_id ?? undefined,
      product_variant_id: q.product_variant_id ?? undefined,
    };
  }

  const stableQuery = useMemo<StockQuery>(() => normalizeQuery(debouncedQ), [debouncedQ]);

  const abortRef = useRef<AbortController | null>(null);
  const lastQS = useRef<string>("");

  const reload = useCallback(async () => {
    setError(null);

    const qs = new URLSearchParams(
      Object.entries(stableQuery).reduce<Record<string, string>>((acc, [k, v]) => {
        if (v == null) return acc;
        if (typeof v === "boolean") {
          acc[k] = v ? "1" : "0";
          return acc;
        }
        if (typeof v === "number") {
          if (!Number.isNaN(v)) acc[k] = String(v);
          return acc;
        }
        const s = String(v);
        if (s !== "") acc[k] = s;
        return acc;
      }, {})
    ).toString();

    if (qs === lastQS.current) return;
    lastQS.current = qs;

    setLoading(true);
    abortRef.current?.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;

    try {
      const res = await listStocks(stableQuery, { signal: ctrl.signal });
      setRows(res.data);
    } catch (err: unknown) {
      if ((err as { name?: string }).name !== "AbortError") {
        setError(getErrorMessage(err, "Gagal memuat stok."));
      }
    } finally {
      if (!ctrl.signal.aborted) setLoading(false);
    }
  }, [stableQuery]);

  const mountedOnce = useRef(false);

  useEffect(() => {
    if (mountedOnce.current) return;
    mountedOnce.current = true;
    void reload();
    return () => {
      abortRef.current?.abort();
    };
  }, [reload]);

  useEffect(() => {
    if (!mountedOnce.current) return;
    void reload();
    return () => {
      abortRef.current?.abort();
    };
  }, [reload]);

  const onEditMin = useCallback(
    async (row: Stock) => {
      const current = row.variant?.sku ?? String(row.product_variant_id);
      const val = window.prompt(`Ubah Min Stok untuk SKU ${current}`, String(row.min_stok));
      if (val == null) return;

      const parsed = Number(val);
      const payload: UpdateMinStockPayload = { min_stok: Number.isFinite(parsed) ? parsed : 0 };

      try {
        await updateMinStock(row.id, payload);
        void reload();
      } catch (e: unknown) {
        window.alert(getErrorMessage(e, "Gagal update min stok"));
      }
    },
    [reload]
  );

  // --- UI helpers (tanpa ubah logika) ---
  const totalText = useMemo(() => {
    const n = rows?.length ?? 0;
    return `${n} baris`;
  }, [rows]);

  return (
    <div className="container">
      {/* Header page: judul + aksi utama */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
          marginBottom: 12,
        }}
      >
        <div style={{ minWidth: 260 }}>
          <h2 style={{ marginBottom: 4 }}>Manajemen Stok</h2>
          <div className="text-dim" style={{ fontSize: ".92rem" }}>
            Atur filter cabang/gudang/varian, pantau low stock, dan set stok awal.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <span className="badge" title="Jumlah baris saat ini">
            {loading ? "Memuat…" : totalText}
          </span>

          <button
            onClick={() => setOpenSet(true)}
            className="button button-primary"
            style={{ whiteSpace: "nowrap" }}
          >
            Set Stok Awal
          </button>
        </div>
      </div>

      {/* Filters card */}
      <div className="card mb-4">
        {/* Baris 1: Cabang | Gudang | Per Page */}
        <div className="form-row form-row--3 mb-3">
          <div>
            <label className="mb-2" style={{ display: "block", fontWeight: 700 }}>
              Cabang
            </label>
            <CabangSelect allowAll value={q.cabang_id} onChange={onCabangChange} />
            <div className="text-dim" style={{ fontSize: ".85rem", marginTop: 6 }}>
              Pilih cabang untuk memfilter gudang & stok.
            </div>
          </div>

          <div>
            <label className="mb-2" style={{ display: "block", fontWeight: 700 }}>
              Gudang
            </label>
            <GudangSelect
              allowAll
              cabangId={q.cabang_id}
              value={q.gudang_id}
              onChange={onGudangChange}
            />
            <div className="text-dim" style={{ fontSize: ".85rem", marginTop: 6 }}>
              Gudang mengikuti cabang yang dipilih.
            </div>
          </div>

          <div>
            <label className="mb-2" style={{ display: "block", fontWeight: 700 }}>
              Per Page
            </label>
            <select
              className="select"
              value={q.per_page ?? 10}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                update({ per_page: Number(e.target.value) })
              }
            >
              {[10, 20, 50].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
            <div className="text-dim" style={{ fontSize: ".85rem", marginTop: 6 }}>
              Mengatur jumlah data per halaman.
            </div>
          </div>
        </div>

        {/* Divider halus (tanpa perlu CSS baru) */}
        <div
          style={{
            height: 1,
            background: "rgba(0,0,0,0.06)",
            margin: "12px 0",
          }}
        />

        {/* Baris 2: Varian (lebar) | Filter Low Stock */}
        <div className="form-row form-row--3">
          <div style={{ gridColumn: "1 / -1" }}>
            <label className="mb-2" style={{ display: "block", fontWeight: 700 }}>
              Varian Produk
            </label>
            <VariantPicker value={q.product_variant_id} onChange={onVariantChange} />
            <div className="text-dim" style={{ fontSize: ".85rem", marginTop: 6 }}>
              Opsional. Pilih varian untuk mempersempit hasil.
            </div>
          </div>

          <div style={{ gridColumn: "1 / -1" }}>
            <label className="mb-2" style={{ display: "block", fontWeight: 700 }}>
              Filter
            </label>

            <label
              htmlFor="low"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 12px",
                border: "1px solid rgba(0,0,0,0.10)",
                borderRadius: 12,
                background: "rgba(0,0,0,0.02)",
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              <input
                id="low"
                type="checkbox"
                checked={Boolean(q.low)}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  update({ low: e.target.checked })
                }
              />
              <div>
                <div style={{ fontWeight: 700, lineHeight: 1.2 }}>Hanya Low Stock</div>
                <div className="text-dim" style={{ fontSize: ".85rem", marginTop: 2 }}>
                  Tampilkan stok yang berada di bawah min stok.
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="card mb-4">
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <span className="badge badge-danger">Error</span>
            <span>{error}</span>
            <button
              className="button button-outline"
              onClick={() => void reload()}
              style={{ marginLeft: "auto" }}
            >
              Coba lagi
            </button>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="card">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 12,
          }}
        >
          <div style={{ fontWeight: 800 }}>Daftar Stok</div>
          <div className="text-dim" style={{ fontSize: ".9rem" }}>
            {loading ? "Sedang memuat data…" : "Klik aksi pada tabel untuk ubah Min Stok."}
          </div>
        </div>

        <StockTable rows={rows} loading={loading} onEditMin={onEditMin} />
      </div>

      {/* Dialog */}
      {openSet && (
        <SetInitialStockDialog open={openSet} onClose={() => setOpenSet(false)} onSuccess={reload} />
      )}
    </div>
  );
}
