// src/components/products/ProductTable.tsx
import { Link } from "react-router-dom";
import type { Product } from "../../types/product";

type Props = {
  rows: Product[];
  loading?: boolean;
  page: number;
  perPage: number;
  total: number;
  onPageChange: (page: number) => void;
  onEdit: (row: Product) => void;
  onVariants: (row: Product) => void;
  onMedia: (row: Product) => void;
  onDelete: (row: Product) => void;
};

/** Bentuk payload opsional yang mungkin ikut dari API */
type WithCategory = {
  category?: { id?: number; nama?: string } | null;
  category_name?: string | null;
  category_id?: number | null;
};
type WithVariants = {
  variants_count?: number;
  variants?: unknown[] | null;
};
type WithMedia = {
  media_count?: number;
  media?: unknown[] | null;
};

/** Type guard util – tanpa `any` */
function hasCategory(x: Product): x is Product & WithCategory {
  const o = x as unknown as object;
  return "category" in o || "category_name" in o || "category_id" in o;
}
function hasVariants(x: Product): x is Product & WithVariants {
  const o = x as unknown as object;
  return "variants_count" in o || "variants" in o;
}
function hasMedia(x: Product): x is Product & WithMedia {
  const o = x as unknown as object;
  return "media_count" in o || "media" in o;
}

function resolveCategoryName(r: Product): string {
  if (hasCategory(r)) {
    if (r.category && typeof r.category.nama === "string" && r.category.nama.trim() !== "") {
      return r.category.nama;
    }
    if (typeof r.category_name === "string" && r.category_name.trim() !== "") {
      return r.category_name;
    }
    if (typeof r.category_id === "number") {
      return `#${r.category_id}`;
    }
  }
  return "–";
}

function resolveVariantsCount(r: Product): number {
  if (hasVariants(r)) {
    if (typeof r.variants_count === "number") return r.variants_count;
    if (Array.isArray(r.variants)) return r.variants.length;
  }
  return 0;
}

function resolveMediaCount(r: Product): number {
  if (hasMedia(r)) {
    if (typeof r.media_count === "number") return r.media_count;
    if (Array.isArray(r.media)) return r.media.length;
  }
  return 0;
}

function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n));
}

export default function ProductTable({
  rows,
  loading,
  page,
  perPage,
  total,
  onPageChange,
  onEdit,
  onVariants,
  onMedia,
  onDelete,
}: Props): React.ReactElement {
  const lastPage = Math.max(1, Math.ceil(total / perPage));
  const safePage = clamp(page, 1, lastPage);

  return (
    <div className="card" style={{ overflow: "hidden" }}>
      {/* Header / Toolbar */}
      <div
        style={{
          padding: "var(--space-4) var(--space-4)",
          borderBottom: "1px solid var(--color-border)",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "var(--space-4)",
          flexWrap: "wrap",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div style={{ fontWeight: 900, letterSpacing: "-0.01em" }}>Daftar Produk</div>
          <div className="text-dim" style={{ fontSize: ".9rem", marginTop: 4 }}>
            Total {total} produk • Halaman {safePage} dari {lastPage}
          </div>
        </div>
      </div>

      {/* Table */}
      <div style={{ width: "100%", overflowX: "auto" }}>
        <table className="table" style={{ minWidth: 760 }}>
          <thead>
            <tr>
              <th>Produk</th>
              <th>Kategori</th>
              <th>Status</th>
              <th style={{ textAlign: "right" }}>Varian</th>
              <th style={{ textAlign: "right" }}>Media</th>
              <th style={{ textAlign: "right", width: 360 }}>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="muted" style={{ textAlign: "center", padding: "1.25rem" }}>
                  Memuat…
                </td>
              </tr>
            ) : rows.length === 0 ? (
              <tr>
                <td colSpan={6} className="muted" style={{ textAlign: "center", padding: "1.25rem" }}>
                  Tidak ada data.
                </td>
              </tr>
            ) : (
              rows.map((r) => {
                const categoryLabel = resolveCategoryName(r);
                const variantsCount = resolveVariantsCount(r);
                const mediaCount = resolveMediaCount(r);

                return (
                  <tr key={r.id}>
                    {/* Produk */}
                    <td>
                      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                        <div className="text-strong" style={{ lineHeight: 1.2 }}>
                          <Link to={`/catalog/products/${r.id}`} className="link">
                            {r.nama}
                          </Link>
                        </div>
                        <div className="muted text-xs" style={{ wordBreak: "break-word" }}>
                          {r.slug}
                        </div>
                      </div>
                    </td>

                    {/* Kategori */}
                    <td>
                      <span className="muted" style={{ fontSize: ".95rem" }}>
                        {categoryLabel}
                      </span>
                    </td>

                    {/* Status */}
                    <td>
                      <span className={r.is_active ? "badge badge-success" : "badge"}>
                        {r.is_active ? "Aktif" : "Nonaktif"}
                      </span>
                    </td>

                    {/* Varian */}
                    <td style={{ textAlign: "right" }}>
                      <span className="badge" title="Jumlah varian">
                        {variantsCount}
                      </span>
                    </td>

                    {/* Media */}
                    <td style={{ textAlign: "right" }}>
                      <span className="badge" title="Jumlah media">
                        {mediaCount}
                      </span>
                    </td>

                    {/* Aksi */}
                    <td style={{ textAlign: "right" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          gap: "var(--space-2)",
                          flexWrap: "wrap",
                        }}
                      >
                        <button
                          type="button"
                          className="button"
                          onClick={() => onVariants(r)}
                          style={{ padding: "0.45rem 0.7rem" }}
                        >
                          Varian
                        </button>

                        <button
                          type="button"
                          className="button"
                          onClick={() => onMedia(r)}
                          style={{ padding: "0.45rem 0.7rem" }}
                        >
                          Media
                        </button>

                        <button
                          type="button"
                          className="button button-primary"
                          onClick={() => onEdit(r)}
                          style={{ padding: "0.45rem 0.85rem", fontWeight: 800 }}
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          className="button button-outline"
                          onClick={() => onDelete(r)}
                          style={{ padding: "0.45rem 0.85rem" }}
                        >
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Footer / Pagination */}
      <div
        style={{
          padding: "var(--space-3) var(--space-4)",
          borderTop: "1px solid var(--color-border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--space-3)",
          flexWrap: "wrap",
        }}
      >
        <div className="muted text-sm">
          Menampilkan halaman <b>{safePage}</b> dari <b>{lastPage}</b> • Total <b>{total}</b>
        </div>

        <div style={{ display: "flex", gap: "var(--space-2)" }}>
          <button
            type="button"
            className="button"
            disabled={safePage <= 1}
            onClick={() => onPageChange(safePage - 1)}
          >
            Prev
          </button>
          <button
            type="button"
            className="button"
            disabled={safePage >= lastPage}
            onClick={() => onPageChange(safePage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
