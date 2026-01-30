// src/pages/master/Cabangs.tsx
import React, { useMemo, useState } from "react";
import { useBranches } from "../../store/useBranches";
import BranchFilters from "../../components/cabangs/BranchFilters";
import BranchFormDialog from "../../components/cabangs/BranchFormDialog";
import BranchTable from "../../components/cabangs/BranchTable";
import type { Branch, BranchCreatePayload, BranchQuery } from "../../types/branch";
import RequireRole from "../../components/routing/RequireRole";

export default function CabangsPage(): React.ReactElement {
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
  } = useBranches();

  const [openForm, setOpenForm] = useState(false);
  const [editing, setEditing] = useState<Branch | null>(null);

  const title = useMemo(() => "Cabang", []);

  const submit = async (payload: BranchCreatePayload): Promise<boolean> => {
    const ok = editing ? await update(editing.id, payload) : await create(payload);
    if (ok) {
      setOpenForm(false);
      setEditing(null);
    }
    return ok;
  };

  const openCreate = (): void => {
    setEditing(null);
    setOpenForm(true);
  };

  const openEdit = (row: Branch): void => {
    setEditing(row);
    setOpenForm(true);
  };

  const confirmDelete = (row: Branch): void => {
    if (confirm(`Hapus cabang "${row.nama}"?`)) {
      void remove(row.id);
    }
  };

  const goPrev = (): void => pagination.setPage(Math.max(1, pagination.page - 1));
  const goNext = (): void => pagination.setPage(Math.min(pagination.last_page, pagination.page + 1));

  const isFirst = pagination.page <= 1;
  const isLast = pagination.page >= pagination.last_page;

  return (
    <RequireRole roles={["superadmin", "admin_cabang"]}>
      <div className="page">
        {/* PAGE HEADER */}
        <div
          className="card"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            padding: "1.25rem",
          }}
        >
          <div style={{ minWidth: 0 }}>
            <h1 className="h1" style={{ margin: 0 }}>
              {title}
            </h1>
            <p className="text-sm" style={{ margin: "0.35rem 0 0", opacity: 0.75 }}>
              Kelola data cabang, akses gudang per cabang, dan lakukan pemeliharaan data secara terpusat.
            </p>

            <div style={{ marginTop: "0.75rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <span className="badge" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <span style={{ opacity: 0.75 }}>Total:</span>
                <strong>{pagination.total}</strong>
              </span>
              <span className="badge" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <span style={{ opacity: 0.75 }}>Halaman:</span>
                <strong>
                  {pagination.page} / {pagination.last_page}
                </strong>
              </span>
              <span className="badge" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <span style={{ opacity: 0.75 }}>Per halaman:</span>
                <strong>{pagination.per_page}</strong>
              </span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
            <button className="button button-primary" onClick={openCreate}>
              Tambah Cabang
            </button>
          </div>
        </div>

        {/* MAIN WORKSPACE */}
        <div className="card" style={{ padding: "1.25rem" }}>
          {/* Workspace Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              marginBottom: "0.9rem",
            }}
          >
            <div style={{ minWidth: 0 }}>
              <div style={{ fontWeight: 800, letterSpacing: "-0.01em" }}>Daftar Cabang</div>
              <div className="text-sm" style={{ opacity: 0.75, marginTop: "0.25rem" }}>
                Gunakan filter untuk mempercepat pencarian data.
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
              <button
                className="button button-outline"
                onClick={() => fetchList()}
                disabled={loading}
                title="Muat ulang data"
              >
                Refresh
              </button>
            </div>
          </div>

          {/* Filters Area */}
          <div
            style={{
              borderRadius: 14,
              border: "1px solid rgba(0,0,0,0.06)",
              padding: "0.9rem",
              background: "rgba(0,0,0,0.01)",
            }}
          >
            <BranchFilters
              value={query as BranchQuery}
              onChange={(next) => fetchList(next)}
              onSearch={() => fetchList()}
            />
          </div>

          {/* Divider */}
          <div
            style={{
              height: 1,
              background: "rgba(0,0,0,0.06)",
              margin: "1rem 0",
            }}
          />

          {/* Error Banner */}
          {error && (
            <div
              className="card"
              style={{
                padding: "0.75rem 0.9rem",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: 10,
                borderRadius: 14,
              }}
            >
              <span className="badge badge-danger">Error</span>
              <span className="text-sm" style={{ opacity: 0.9 }}>
                {error}
              </span>
            </div>
          )}

          {/* Table / Loading */}
          {loading ? (
            <div className="text-sm" style={{ opacity: 0.75 }}>
              Memuat…
            </div>
          ) : (
            <BranchTable
              items={items}
              onEdit={openEdit}
              onDelete={confirmDelete}
              onOpenGudang={(row) => {
                window.location.href = `/master/warehouses?cabang_id=${row.id}`;
              }}
            />
          )}
        </div>

        {/* PAGINATION TOOLBAR */}
        <div
          className="card"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            padding: "1rem 1.25rem",
          }}
        >
          <div className="text-sm" style={{ opacity: 0.75 }}>
            Menampilkan halaman <strong>{pagination.page}</strong> dari <strong>{pagination.last_page}</strong> • Total{" "}
            <strong>{pagination.total}</strong>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <button className="button button-outline" onClick={goPrev} disabled={loading || isFirst}>
              Sebelumnya
            </button>
            <button className="button button-outline" onClick={goNext} disabled={loading || isLast}>
              Berikutnya
            </button>

            <select
              className="select"
              value={pagination.per_page}
              onChange={(e) => pagination.setPerPage(Number(e.target.value))}
              disabled={loading}
              title="Jumlah data per halaman"
            >
              <option value={10}>10 / halaman</option>
              <option value={25}>25 / halaman</option>
              <option value={50}>50 / halaman</option>
            </select>
          </div>
        </div>

        {/* Form Dialog */}
        <BranchFormDialog
          open={openForm}
          initial={editing ?? undefined}
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
