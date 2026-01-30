// src/pages/products/ProductsPage.tsx
import { useEffect, useMemo, useState, useCallback } from "react";
import type {
  Product,
  ProductQuery,
  ProductCreatePayload,
  ProductUpdatePayload,
} from "../../types/product";
import {
  createProduct,
  deleteProduct,
  listProducts,
  updateProduct,
} from "../../api/products";

import { listCategories } from "../../api/categories";
import type { Category } from "../../types/category";

import ProductFilters from "../../components/products/ProductFilters";
import ProductTable from "../../components/products/ProductTable";
import ProductFormDialog from "../../components/products/ProductFormDialog";
import VariantManager from "../../components/products/VariantManager";
import ImageDropzone from "../../components/products/ImageDropzone";

type CategoryLite = Pick<Category, "id" | "nama">;

export default function ProductsPage() {
  const [categories, setCategories] = useState<CategoryLite[]>([]);
  const [query, setQuery] = useState<ProductQuery>({
    page: 1,
    per_page: 10,
    sort: "-created_at",
  });
  const [rows, setRows] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);

  const [variantsFor, setVariantsFor] = useState<Product | null>(null);
  const [mediaFor, setMediaFor] = useState<Product | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const r = await listProducts(query);
      setRows(r.data);
      setTotal(r.meta?.total ?? r.data.length);
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  useEffect(() => {
    (async () => {
      try {
        const r = await listCategories({ page: 1, per_page: 100 });
        setCategories(r.data.map((c: Category) => ({ id: c.id, nama: c.nama })));
      } catch {
        // diamkan; filter kategori tetap bisa jalan dengan opsi default "Semua"
      }
    })();
  }, []);

  const page = useMemo(() => query.page ?? 1, [query]);
  const perPage = useMemo(() => query.per_page ?? 10, [query]);

  async function handleSubmit(
    payload: ProductCreatePayload | ProductUpdatePayload
  ) {
    if (editing?.id) {
      await updateProduct(editing.id, payload);
    } else {
      await createProduct(payload as ProductCreatePayload);
    }
    await refresh();
    return true;
  }

  function onDelete(row: Product) {
    if (!confirm(`Hapus produk "${row.nama}"?`)) return;
    deleteProduct(row.id).then(refresh);
  }

  const headerWrap: React.CSSProperties = {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: "1rem",
    flexWrap: "wrap",
  };

  const titleStyle: React.CSSProperties = {
    margin: 0,
    fontSize: "1.6rem",
    fontWeight: 800,
    letterSpacing: "-0.02em",
    lineHeight: 1.2,
    color: "var(--color-text)",
  };

  const subStyle: React.CSSProperties = {
    margin: "0.35rem 0 0 0",
    fontSize: "0.95rem",
    opacity: 0.75,
  };

  const cardHeader: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
    flexWrap: "wrap",
    marginBottom: "0.9rem",
  };

  const cardTitle: React.CSSProperties = {
    fontWeight: 800,
    letterSpacing: "-0.01em",
  };

  const metaPillsWrap: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    flexWrap: "wrap",
  };

  return (
    <div className="container">
      {/* ====== Page Header ====== */}
      <div className="section">
        <div style={headerWrap}>
          <div style={{ minWidth: 240 }}>
            <h1 style={titleStyle}>Produk</h1>
            <p style={subStyle}>
              Kelola data produk, varian, dan media. Tampilan dirapikan tanpa
              mengubah logika.
            </p>
          </div>

          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            <button
              className="button button-outline"
              type="button"
              onClick={refresh}
              disabled={loading}
              style={{ borderRadius: "999px" }}
            >
              {loading ? "Memuat…" : "Refresh"}
            </button>

            <button
              className="button button-primary"
              type="button"
              onClick={() => {
                setEditing(null);
                setDialogOpen(true);
              }}
              style={{ borderRadius: "999px" }}
            >
              Tambah Produk
            </button>
          </div>
        </div>
      </div>

      {/* ====== Filters Card ====== */}
      <div className="section">
        <div className="card p-5">
          <div style={cardHeader}>
            <div style={cardTitle}>Filter Produk</div>
            <div style={metaPillsWrap}>
              <span className="badge" style={{ borderRadius: "999px" }}>
                Total: {total}
              </span>
              <span className="badge" style={{ borderRadius: "999px" }}>
                Per halaman: {perPage}
              </span>
              <span className="badge" style={{ borderRadius: "999px" }}>
                Halaman: {page}
              </span>
            </div>
          </div>

          <ProductFilters value={query} categories={categories} onChange={setQuery} />
        </div>
      </div>

      {/* ====== Table Card ====== */}
      <div className="section">
        <div className="card p-5">
          <div style={cardHeader}>
            <div style={cardTitle}>Daftar Produk</div>

            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <span
                className={loading ? "badge badge-warning" : "badge badge-success"}
                style={{ borderRadius: "999px" }}
              >
                {loading ? "Loading" : "Ready"}
              </span>
            </div>
          </div>

          <ProductTable
            rows={rows}
            loading={loading}
            page={page}
            perPage={perPage}
            total={total}
            onPageChange={(p) => setQuery((q) => ({ ...q, page: p }))}
            onEdit={(r) => {
              setEditing(r);
              setDialogOpen(true);
            }}
            onVariants={(r) => setVariantsFor(r)}
            onMedia={(r) => setMediaFor(r)}
            onDelete={onDelete}
          />
        </div>
      </div>

      {/* ====== Variants Dialog ====== */}
      {variantsFor && (
        <div className="dialog is-open" role="dialog" aria-modal="true">
          <div className="dialog__overlay" onClick={() => setVariantsFor(null)} />
          <div className="dialog__content card card--lg">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                flexWrap: "wrap",
                marginBottom: "0.75rem",
              }}
            >
              <div className="title-sm">Varian — {variantsFor.nama}</div>
              <button
                className="button button-outline"
                style={{ borderRadius: "999px" }}
                onClick={() => setVariantsFor(null)}
              >
                Tutup
              </button>
            </div>
            <VariantManager productId={variantsFor.id} />
          </div>
        </div>
      )}

      {/* ====== Media Dialog ====== */}
      {mediaFor && (
        <div className="dialog is-open" role="dialog" aria-modal="true">
          <div className="dialog__overlay" onClick={() => setMediaFor(null)} />
          <div className="dialog__content card card--lg">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                flexWrap: "wrap",
                marginBottom: "0.75rem",
              }}
            >
              <div className="title-sm">Media — {mediaFor.nama}</div>
              <button
                className="button button-outline"
                style={{ borderRadius: "999px" }}
                onClick={() => setMediaFor(null)}
              >
                Tutup
              </button>
            </div>
            <ImageDropzone productId={mediaFor.id} />
          </div>
        </div>
      )}

      {/* ====== Create/Update Dialog ====== */}
      <ProductFormDialog
        open={dialogOpen}
        initial={editing}
        categories={categories}
        onClose={() => setDialogOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
