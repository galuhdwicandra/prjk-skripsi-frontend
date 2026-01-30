// src/components/warehouses/WarehouseTable.tsx
import React from "react";
import type { Warehouse } from "../../types/warehouse";

type Props = {
  items: Warehouse[];
  onEdit: (row: Warehouse) => void;
  onDelete: (row: Warehouse) => void;
};

export default function WarehouseTable({
  items,
  onEdit,
  onDelete,
}: Props): React.ReactElement {
  return (
    <div style={{ overflowX: "auto" }}>
      <table className="table" style={{ minWidth: 860 }}>
        <thead>
          <tr>
            <th style={{ width: 80 }}>ID</th>
            <th style={{ width: 220 }}>Cabang</th>
            <th>Gudang</th>
            <th style={{ width: 120, textAlign: "center" }}>Default</th>
            <th style={{ width: 120, textAlign: "center" }}>Status</th>
            <th style={{ width: 190 }}>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {items.map((r) => {
            const cabangLabel = r.cabang?.nama ?? `Cabang #${r.cabang_id}`;
            return (
              <tr key={r.id}>
                <td style={{ whiteSpace: "nowrap" }}>{r.id}</td>

                <td style={{ minWidth: 200 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <span style={{ fontWeight: 600 }}>{cabangLabel}</span>
                    <span className="muted" style={{ fontSize: ".85rem" }}>
                      ID Cabang: {r.cabang_id}
                    </span>
                  </div>
                </td>

                <td>
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <span style={{ fontWeight: 700 }}>{r.nama}</span>
                    <span className="muted" style={{ fontSize: ".85rem" }}>
                      Gudang penyimpanan stok
                    </span>
                  </div>
                </td>

                <td style={{ textAlign: "center" }}>
                  {r.is_default ? (
                    <span className="badge badge-success">Default</span>
                  ) : (
                    <span className="badge">—</span>
                  )}
                </td>

                <td style={{ textAlign: "center" }}>
                  {r.is_active ? (
                    <span className="badge badge-success">Aktif</span>
                  ) : (
                    <span className="badge badge-danger">Nonaktif</span>
                  )}
                </td>

                <td>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <button
                      className="button button-outline"
                      type="button"
                      onClick={() => onEdit(r)}
                      style={{ padding: ".45rem .7rem" }}
                    >
                      Edit
                    </button>

                    <button
                      className="button button-outline"
                      type="button"
                      onClick={() => onDelete(r)}
                      style={{
                        padding: ".45rem .7rem",
                        borderColor: "rgba(239,68,68,.45)",
                        color: "rgb(239,68,68)",
                      }}
                    >
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}

          {items.length === 0 && (
            <tr>
              <td colSpan={6} style={{ textAlign: "center", padding: "1.25rem" }}>
                <div style={{ display: "grid", gap: 6 }}>
                  <span style={{ fontWeight: 700 }}>Belum ada data gudang</span>
                  <span className="muted" style={{ fontSize: ".9rem" }}>
                    Silakan klik tombol <b>Tambah</b> untuk membuat gudang baru.
                  </span>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
