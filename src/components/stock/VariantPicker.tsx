// src/components/stock/VariantPicker.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { listProducts, listVariants } from "../../api/products";
import type { Product, ProductVariant } from "../../types/product";

// tiny debounce hook (stable for 2025)
function useDebounced<T>(value: T, ms: number): T {
  const [deb, setDeb] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDeb(value), ms);
    return () => clearTimeout(id);
  }, [value, ms]);
  return deb;
}

type Props = {
  value?: number; // product_variant_id (controlled by parent)
  onChange: (variantId: number | undefined) => void;
  autoSelectFirst?: boolean; // default: false
};

function VariantPicker({ value, onChange, autoSelectFirst = false }: Props) {
  const [search, setSearch] = useState("");
  const debSearch = useDebounced(search, 250);

  const [products, setProducts] = useState<Product[]>([]);
  const [productId, setProductId] = useState<number | undefined>(undefined);

  const [variants, setVariants] = useState<ProductVariant[]>([]);
  const [loadingP, setLoadingP] = useState(false);
  const [loadingV, setLoadingV] = useState(false);
  const [errP, setErrP] = useState<string | null>(null);
  const [errV, setErrV] = useState<string | null>(null);

  // ── Fetch products (debounced, abortable)
  useEffect(() => {
    const ctrl = new AbortController();
    setLoadingP(true);
    setErrP(null);

    listProducts({ search: debSearch, per_page: 10 }, { signal: ctrl.signal })
      .then((res) => setProducts(res.data ?? []))
      .catch((e: unknown) => {
        if ((e as { name?: string }).name !== "AbortError") {
          setErrP((e as Error)?.message ?? "Gagal memuat produk.");
        }
      })
      .finally(() => {
        if (!ctrl.signal.aborted) setLoadingP(false);
      });

    return () => ctrl.abort();
  }, [debSearch]);

  // Reset variants immediately when product changes
  useEffect(() => {
    setVariants([]);
  }, [productId]);

  // ── Fetch variants for selected product (abortable)
  useEffect(() => {
    if (!productId) return;
    const ctrl = new AbortController();
    setLoadingV(true);
    setErrV(null);

    listVariants(productId, { signal: ctrl.signal })
      .then((rows) => setVariants(rows ?? []))
      .catch((e: unknown) => {
        if ((e as { name?: string }).name !== "AbortError") {
          setErrV((e as Error)?.message ?? "Gagal memuat varian.");
        }
      })
      .finally(() => {
        if (!ctrl.signal.aborted) setLoadingV(false);
      });

    return () => ctrl.abort();
  }, [productId]);

  // ── If the current selected variant is not present after variants load, clear it ONCE
  const clearedRef = useRef(false);
  useEffect(() => {
    if (!variants.length) return;
    if (value == null) return;

    const stillExists = variants.some((v) => v.id === value);
    if (stillExists) {
      clearedRef.current = false;
      return;
    }

    if (!clearedRef.current) {
      clearedRef.current = true;
      onChange(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variants, value]);

  // ── Optional: auto-select first variant ONCE per options set
  const autoEmitRef = useRef<number | undefined>(undefined);
  useEffect(() => {
    if (!autoSelectFirst) return;
    if (!variants.length) return;

    const firstId = variants[0].id;
    if (value === firstId) return;
    if (autoEmitRef.current === firstId) return;

    autoEmitRef.current = firstId;
    onChange(firstId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoSelectFirst, variants, value]);

  // Better UX: keep product dropdown stable and sorted
  const productOptions = useMemo(
    () => [...products].sort((a, b) => a.nama.localeCompare(b.nama, "id")),
    [products]
  );

  const variantOptions = useMemo(() => {
    // Tidak mengubah data, hanya membangun label yang rapi.
    return variants.map((v) => {
      const parts: string[] = [];
      parts.push(v.sku);
      if (v.size) parts.push(v.size);
      if (v.type) parts.push(v.type);
      if (v.tester) parts.push(String(v.tester));
      return { id: v.id, label: parts.join(" · ") };
    });
  }, [variants]);

  const canReset = Boolean(search || productId || value);

  return (
    <div>
      {/* Inline style kecil agar layout selalu rapi tanpa mengandalkan CSS eksternal */}
      <style>
        {`
          .vp-grid{
            display:grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 12px;
          }
          .vp-grid2{
            display:grid;
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .vp-rowhead{
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:10px;
            flex-wrap:wrap;
            margin-bottom:10px;
          }
          .vp-help{
            font-size:.85rem;
            opacity:.75;
            margin-top:6px;
          }
          .vp-meta{
            display:flex;
            gap:8px;
            align-items:center;
            flex-wrap:wrap;
          }
          @media (max-width: 760px){
            .vp-grid{ grid-template-columns: 1fr; }
          }
        `}
      </style>

      {/* Header kecil: status + reset */}
      <div className="vp-rowhead">
        <div className="vp-meta">
          <span className="badge" title="Status">
            {loadingP || loadingV ? "Memuat…" : "Siap"}
          </span>
          {productId ? (
            <span className="badge" title="Produk terpilih">
              Produk: {productId}
            </span>
          ) : (
            <span className="badge" title="Produk terpilih">
              Produk: —
            </span>
          )}
          <span className="badge" title="Jumlah varian">
            Varian: {variants.length}
          </span>
        </div>

        <button
          type="button"
          className="button button-ghost"
          disabled={!canReset}
          onClick={() => {
            // UI-only reset; tidak mengubah logic fetch di luar yang sudah ada
            setSearch("");
            setProductId(undefined);
            setVariants([]);
            if (value !== undefined) onChange(undefined);
            setErrP(null);
            setErrV(null);
          }}
          style={{ whiteSpace: "nowrap" }}
        >
          Reset
        </button>
      </div>

      {/* Row 1: Search + Product */}
      <div className="vp-grid">
        <div>
          <label htmlFor="vp-search" className="mb-2" style={{ display: "block", fontWeight: 700 }}>
            Cari Produk
          </label>

          <div style={{ position: "relative" }}>
            <input
              id="vp-search"
              className="input"
              placeholder="Ketik nama/SKU produk…"
              value={search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
              aria-label="Cari produk"
              style={{ paddingRight: search ? "3.25rem" : undefined }}
            />

            {search ? (
              <button
                type="button"
                className="button button-ghost"
                aria-label="Hapus pencarian"
                onClick={() => setSearch("")}
                style={{
                  position: "absolute",
                  right: 6,
                  top: "50%",
                  transform: "translateY(-50%)",
                  padding: "0.25rem 0.5rem",
                  borderRadius: 999,
                  fontSize: ".8rem",
                }}
              >
                Clear
              </button>
            ) : null}
          </div>

          <div className="vp-help">
            {loadingP ? "Mencari produk…" : "Tips: cari dengan nama atau SKU."}
          </div>

          {errP && <div className="help help--error">{errP}</div>}
        </div>

        <div>
          <label htmlFor="vp-product" className="mb-2" style={{ display: "block", fontWeight: 700 }}>
            Produk
          </label>
          <select
            id="vp-product"
            className="select"
            value={productId ?? ""}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              const next = e.target.value ? Number(e.target.value) : undefined;
              if (next === productId) return;
              setProductId(next);
              if (value !== undefined) onChange(undefined);
            }}
            disabled={loadingP}
            aria-label="Pilih Produk"
          >
            <option value="">{loadingP ? "Memuat produk…" : "Pilih produk…"}</option>
            {productOptions.map((p) => (
              <option key={p.id} value={p.id}>
                {p.nama}
              </option>
            ))}
          </select>
          <div className="vp-help">
            {productId ? "Produk terpilih, lanjut pilih varian." : "Pilih produk untuk memuat varian."}
          </div>
        </div>
      </div>

      {/* Divider halus */}
      <div style={{ height: 1, background: "rgba(0,0,0,0.06)", margin: "14px 0" }} />

      {/* Row 2: Variant */}
      <div className="vp-grid2">
        <div>
          <label htmlFor="vp-variant" className="mb-2" style={{ display: "block", fontWeight: 700 }}>
            Varian
          </label>
          <select
            id="vp-variant"
            className="select"
            value={value ?? ""}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              const next = e.target.value ? Number(e.target.value) : undefined;
              if (next === value) return;
              onChange(next);
            }}
            disabled={!productId || loadingV}
            aria-label="Pilih Varian"
          >
            <option value="">
              {!productId ? "Pilih produk dulu" : loadingV ? "Memuat varian…" : "Pilih varian…"}
            </option>
            {variantOptions.map((v) => (
              <option key={v.id} value={v.id}>
                {v.label}
              </option>
            ))}
          </select>

          <div className="vp-help">
            {!productId
              ? "Varian akan muncul setelah produk dipilih."
              : loadingV
              ? "Sedang memuat varian…"
              : variants.length
              ? "Pilih varian untuk menerapkan filter."
              : "Tidak ada varian untuk produk ini."}
          </div>

          {errV && <div className="help help--error">{errV}</div>}
        </div>
      </div>
    </div>
  );
}

export default React.memo(VariantPicker);
