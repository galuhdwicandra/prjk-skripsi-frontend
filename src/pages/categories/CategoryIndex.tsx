// src/pages/categories/CategoryIndex.tsx
import React, { useCallback, useEffect, useMemo, useState } from "react";
import type {
  Category,
  CategoryCreatePayload,
  CategoryQuery,
  CategoryUpdatePayload,
  PaginatedResponse,
  ApiError,
} from "../../types/category";
import {
  listCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../../api/categories";
import CategoryFilters from "../../components/category/CategoryFilters";
import CategoryFormDialog from "../../components/category/CategoryFormDialog";
import CategoryTable from "../../components/category/CategoryTable";

function usePagination(total: number, perPage: number, current: number) {
  const pages = Math.max(1, Math.ceil(total / Math.max(1, perPage)));
  const clamped = Math.min(Math.max(1, current), pages);

  const items = useMemo(() => {
    const arr: number[] = [];
    let start = Math.max(1, clamped - 2);
    const end = Math.min(pages, start + 4);
    start = Math.max(1, end - 4);
    for (let i = start; i <= end; i++) arr.push(i);
    return arr;
  }, [pages, clamped]);

  return { pages, current: clamped, items };
}

function isApiError(e: unknown): e is ApiError {
  return typeof e === "object" && e !== null && "status" in e && "message" in e;
}

export default function CategoryIndex(): React.ReactElement {
  const [query, setQuery] = useState<CategoryQuery>({
    page: 1,
    per_page: 10,
    sort: "nama",
  });
  const [rows, setRows] = useState<Category[]>([]);
  const [meta, setMeta] = useState<{
    total: number;
    last_page: number;
    current_page: number;
    per_page: number;
  }>({
    total: 0,
    last_page: 1,
    current_page: 1,
    per_page: 10,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [openForm, setOpenForm] = useState(false);
  const [editItem, setEditItem] = useState<Category | null>(null);

  const { items: pageItems, current } = usePagination(
    meta.total,
    meta.per_page,
    meta.current_page
  );

  const fetchData = useCallback(
    async (q: CategoryQuery = query) => {
      setLoading(true);
      setError(null);
      try {
        const res: PaginatedResponse<Category> = await listCategories(q);
        setRows(res.data);
        setMeta(res.meta);
      } catch (e: unknown) {
        setError(isApiError(e) ? e.message : "Gagal memuat data");
      } finally {
        setLoading(false);
      }
    },
    [query]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    fetchData(query);
  }, [query, fetchData]);

  const openCreate = () => {
    setEditItem(null);
    setOpenForm(true);
  };

  const openEdit = (row: Category) => {
    setEditItem(row);
    setOpenForm(true);
  };

  const handleSubmit = async (
    payload: CategoryCreatePayload | CategoryUpdatePayload
  ): Promise<boolean> => {
    if (editItem) {
      await updateCategory(editItem.id, payload as CategoryUpdatePayload);
    } else {
      await createCategory(payload as CategoryCreatePayload);
    }
    await fetchData(query);
    return true;
  };

  const handleDelete = async (row: Category) => {
    const ok = window.confirm(
      `Hapus kategori "${row.nama}"? Tindakan ini tidak dapat dibatalkan.`
    );
    if (!ok) return;

    try {
      await deleteCategory(row.id);
      if (rows.length === 1 && meta.current_page > 1) {
        setQuery({ ...query, page: (query.page ?? 1) - 1 });
      } else {
        await fetchData(query);
      }
    } catch (e: unknown) {
      const msg = isApiError(e) ? e.message : "Gagal menghapus";
      alert(msg);
    }
  };

  const softText: React.CSSProperties = { color: "var(--color-text-soft)" };
  const divider: React.CSSProperties = { borderTop: "1px solid var(--color-border)" };

  return (
    <div className="container">
      {/* HEADER */}
      <div className="section">
        <div className="card" style={{ padding: "1rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <div style={{ minWidth: 220 }}>
              <h1 style={{ margin: 0, lineHeight: 1.15 }}>Kategori</h1>
              <div style={{ ...softText, marginTop: ".35rem" }}>
                Kelola kategori produk.
              </div>

              <div
                style={{
                  display: "flex",
                  gap: ".5rem",
                  flexWrap: "wrap",
                  marginTop: ".8rem",
                }}
              >
                <span className="badge" title="Total data">
                  Total: {meta.total}
                </span>
                <span className="badge" title="Per halaman">
                  Per halaman: {query.per_page ?? 10}
                </span>
                <span className="badge" title="Urutan">
                  Sort: {query.sort ?? "nama"}
                </span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: ".6rem",
                flexWrap: "wrap",
                justifyContent: "flex-end",
              }}
            >
              <select
                className="select"
                value={query.per_page ?? 10}
                onChange={(e) =>
                  setQuery({
                    ...query,
                    per_page: Number(e.target.value),
                    page: 1,
                  })
                }
                style={{ minWidth: 140 }}
              >
                {[10, 20, 50].map((n) => (
                  <option key={n} value={n}>
                    {n} / halaman
                  </option>
                ))}
              </select>

              <button className="button button-primary" onClick={openCreate}>
                + Tambah Kategori
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="section">
        <div className="card" style={{ padding: 0, overflow: "hidden" }}>
          {/* Toolbar: Filters */}
          <div
            style={{
              padding: "1rem",
              background: "rgba(0,0,0,0.015)",
              borderBottom: "1px solid var(--color-border)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: ".75rem", flexWrap: "wrap" }}>
              <div style={{ fontWeight: 700 }}>Filter</div>
              <div style={{ ...softText, fontSize: 14 }}>
                Gunakan pencarian/sort untuk mempercepat pengelolaan data.
              </div>
            </div>

            <div style={{ marginTop: ".8rem" }}>
              <CategoryFilters value={query} onChange={setQuery} />
            </div>
          </div>

          {/* Body: Table / State */}
          <div style={{ padding: "1rem" }}>
            {loading ? (
              <div
                style={{
                  padding: "1.25rem",
                  textAlign: "center",
                  ...softText,
                  border: "1px dashed var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  background: "var(--color-surface)",
                }}
              >
                Memuat data kategori…
              </div>
            ) : error ? (
              <div
                style={{
                  padding: "1rem",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid rgba(220,38,38,.25)",
                  background: "rgba(220,38,38,.06)",
                  color: "var(--color-danger)",
                  textAlign: "center",
                  fontWeight: 700,
                }}
              >
                {error}
              </div>
            ) : rows.length === 0 ? (
              <div
                style={{
                  padding: "1.25rem",
                  textAlign: "center",
                  border: "1px dashed var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  background: "var(--color-surface)",
                }}
              >
                <div style={{ fontWeight: 800 }}>Belum ada kategori</div>
                <div style={{ ...softText, marginTop: ".35rem" }}>
                  Klik tombol <b>Tambah Kategori</b> untuk membuat data baru.
                </div>
              </div>
            ) : (
              <CategoryTable rows={rows} onEdit={openEdit} onDelete={handleDelete} />
            )}
          </div>

          {/* Footer: Pagination */}
          <div style={{ padding: "0.9rem 1rem", ...divider }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: ".75rem",
                flexWrap: "wrap",
              }}
            >
              <div style={{ ...softText, fontSize: 14 }}>
                Halaman <b>{meta.current_page}</b> dari <b>{meta.last_page}</b> • Total{" "}
                <b>{meta.total}</b> data
              </div>

              <div style={{ display: "flex", gap: ".4rem", flexWrap: "wrap" }}>
                <button
                  className="button button-outline"
                  disabled={current <= 1}
                  onClick={() =>
                    setQuery({ ...query, page: Math.max(1, (query.page ?? 1) - 1) })
                  }
                >
                  Prev
                </button>

                {pageItems.map((p) => (
                  <button
                    key={p}
                    className={p === meta.current_page ? "button button-primary" : "button button-outline"}
                    onClick={() => setQuery({ ...query, page: p })}
                    style={{ minWidth: 44, paddingInline: ".85rem" }}
                  >
                    {p}
                  </button>
                ))}

                <button
                  className="button button-outline"
                  disabled={current >= meta.last_page}
                  onClick={() =>
                    setQuery({
                      ...query,
                      page: Math.min(meta.last_page, (query.page ?? 1) + 1),
                    })
                  }
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CategoryFormDialog
        open={openForm}
        initial={editItem}
        onClose={() => setOpenForm(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
