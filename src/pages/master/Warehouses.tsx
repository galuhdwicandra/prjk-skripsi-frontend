// src/pages/master/Warehouses.tsx
import React, { useMemo, useState } from "react";
import { useWarehouses } from "../../store/useWarehouses";
import WarehouseFilters from "../../components/warehouses/WarehouseFilters";
import WarehouseFormDialog from "../../components/warehouses/WarehouseFormDialog";
import WarehouseTable from "../../components/warehouses/WarehouseTable";
import type {
  Warehouse,
  WarehouseCreatePayload,
  WarehouseQuery,
} from "../../types/warehouse";
import RequireRole from "../../components/routing/RequireRole";

export default function WarehousesPage(): React.ReactElement {
  const url = new URL(window.location.href);
  const cabangFromUrl = url.searchParams.get("cabang_id");
  const initialCabang = cabangFromUrl ? Number(cabangFromUrl) : undefined;

  // fetch otomatis berdasarkan cabang_id awal (tetap)
  const {
    items,
    loading,
    error,
    query,
    fetchList,
    create,
    update,
    remove,
    pagination,
  } = useWarehouses({ cabang_id: initialCabang });

  const [openForm, setOpenForm] = useState(false);
  const [editing, setEditing] = useState<Warehouse | null>(null);

  const title = useMemo(() => "Gudang", []);

  const submit = async (payload: WarehouseCreatePayload): Promise<boolean> => {
    const ok = editing ? await update(editing.id, payload) : await create(payload);
    if (ok) {
      setOpenForm(false);
      setEditing(null);
    }
    return ok;
  };

  return (
    <RequireRole roles={["superadmin", "admin_cabang", "gudang"]}>
      <div className="page">
        {/* ===== Toolbar / Header (lebih rapi & responsif) ===== */}
        <div
          className="card"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ minWidth: 240 }}>
            <h1 className="card-title" style={{ marginBottom: ".25rem" }}>
              {title}
            </h1>

            <div
              className="muted"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              <span>Kelola data gudang dan penempatan stok per cabang.</span>

              {typeof initialCabang === "number" && (
                <span className="badge" title="Filter cabang dari URL">
                  Cabang ID: {initialCabang}
                </span>
              )}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              flexWrap: "wrap",
              justifyContent: "flex-end",
              marginLeft: "auto",
            }}
          >
            <button
              className="button button-outline"
              type="button"
              onClick={() => fetchList()}
              title="Refresh data"
            >
              Refresh
            </button>

            <button
              className="button button-primary"
              type="button"
              onClick={() => {
                setEditing(null);
                setOpenForm(true);
              }}
            >
              Tambah
            </button>
          </div>
        </div>

        {/* ===== Filters (tetap komponen Anda, hanya dibungkus rapi) ===== */}
        <div className="card" style={{ marginTop: "1rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: "0.75rem",
            }}
          >
            <div style={{ minWidth: 240 }}>
              <div style={{ fontWeight: 700, marginBottom: 2 }}>Filter</div>
              <div className="muted" style={{ fontSize: ".9rem" }}>
                Gunakan filter untuk mempersempit data.
              </div>
            </div>

            <div className="muted" style={{ fontSize: ".9rem" }}>
              Total: <b>{pagination.total}</b>
            </div>
          </div>

          <WarehouseFilters
            value={query as WarehouseQuery}
            onChange={(next) => fetchList(next)}
            onSearch={() => fetchList()}
          />
        </div>

        {/* ===== Error ===== */}
        {error && (
          <div
            className="card"
            role="alert"
            style={{
              marginTop: "1rem",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span className="badge badge-danger">Error</span>
            <span className="text-sm">{error}</span>
          </div>
        )}

        {/* ===== Table ===== */}
        <div className="card" style={{ marginTop: "1rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: "0.75rem",
            }}
          >
            <div style={{ fontWeight: 700 }}>Daftar Gudang</div>

            <div className="muted" style={{ fontSize: ".9rem" }}>
              Halaman {pagination.page} / {pagination.last_page}
            </div>
          </div>

          {loading ? (
            <div className="loading">Memuat…</div>
          ) : (
            <WarehouseTable
              items={items}
              onEdit={(row) => {
                setEditing(row);
                setOpenForm(true);
              }}
              onDelete={(row) => {
                if (confirm(`Hapus gudang "${row.nama}"?`)) {
                  void remove(row.id);
                }
              }}
            />
          )}
        </div>

        {/* ===== Pagination (lebih konsisten, tombol outline) ===== */}
        <div
          className="card"
          style={{
            marginTop: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <div className="muted">
            Halaman {pagination.page} / {pagination.last_page} • Total{" "}
            {pagination.total}
          </div>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <button
              className="button button-outline"
              type="button"
              onClick={() => pagination.setPage(Math.max(1, pagination.page - 1))}
              disabled={pagination.page <= 1}
            >
              Sebelumnya
            </button>

            <button
              className="button button-outline"
              type="button"
              onClick={() =>
                pagination.setPage(Math.min(pagination.last_page, pagination.page + 1))
              }
              disabled={pagination.page >= pagination.last_page}
            >
              Berikutnya
            </button>

            <select
              className="select"
              value={pagination.per_page}
              onChange={(e) => pagination.setPerPage(Number(e.target.value))}
              aria-label="Jumlah data per halaman"
              style={{ width: 110 }}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>

        {/* ===== Form Dialog (tetap) ===== */}
        <WarehouseFormDialog
          open={openForm}
          initial={editing ?? undefined}
          defaultCabangId={initialCabang}
          onClose={() => {
            setOpenForm(false);
            setEditing(null);
          }}
          onSubmit={submit}
        />
      </div>
    </RequireRole>
  );
}
