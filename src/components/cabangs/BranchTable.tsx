// src/components/cabangs/BranchTable.tsx
import React, { useMemo } from "react";
import type { Branch } from "../../types/branch";

type Props = {
  items: Branch[];
  onEdit: (row: Branch) => void;
  onDelete: (row: Branch) => void;
  onOpenGudang: (row: Branch) => void;
};

export default function BranchTable({
  items,
  onEdit,
  onDelete,
  onOpenGudang,
}: Props): React.ReactElement {
  const minWidth = useMemo(() => 860, []);

  return (
    <div
      style={{
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: 14,
        overflow: "hidden",
        background: "rgba(255,255,255,0.9)",
      }}
    >
      <div style={{ overflowX: "auto" }}>
        <table className="table" style={{ minWidth, width: "100%" }}>
          <thead>
            <tr>
              <th style={{ width: 80 }}>ID</th>
              <th>Nama</th>
              <th style={{ width: 160 }}>Kota</th>
              <th style={{ width: 180 }}>Telepon</th>
              <th style={{ width: 120 }}>Status</th>
              <th style={{ width: 260 }}>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {items.map((r) => (
              <tr key={r.id}>
                <td style={{ whiteSpace: "nowrap", opacity: 0.9 }}>{r.id}</td>

                <td style={{ minWidth: 220 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <span style={{ fontWeight: 800, letterSpacing: "-0.01em" }}>{r.nama}</span>
                    <span className="text-sm" style={{ opacity: 0.7 }}>
                      Cabang ID #{r.id}
                    </span>
                  </div>
                </td>

                <td style={{ whiteSpace: "nowrap" }}>{r.kota}</td>

                <td style={{ whiteSpace: "nowrap" }}>{r.telepon ?? "-"}</td>

                <td style={{ whiteSpace: "nowrap" }}>
                  {r.is_active ? (
                    <span className="badge badge-success">Aktif</span>
                  ) : (
                    <span className="badge badge-danger">Nonaktif</span>
                  )}
                </td>

                <td>
                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                      alignItems: "center",
                      justifyContent: "flex-start",
                      flexWrap: "wrap",
                    }}
                  >
                    <button
                      className="button button-outline"
                      onClick={() => onOpenGudang(r)}
                      style={{ borderRadius: 999, padding: "0.45rem 0.75rem" }}
                      title="Buka manajemen gudang untuk cabang ini"
                    >
                      Gudang
                    </button>

                    <button
                      className="button button-outline"
                      onClick={() => onEdit(r)}
                      style={{ borderRadius: 999, padding: "0.45rem 0.75rem" }}
                      title="Edit data cabang"
                    >
                      Edit
                    </button>

                    <button
                      className="button button-outline"
                      onClick={() => onDelete(r)}
                      style={{
                        borderRadius: 999,
                        padding: "0.45rem 0.75rem",
                        borderColor: "rgba(239,68,68,0.35)",
                      }}
                      title="Hapus cabang"
                    >
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {items.length === 0 && (
              <tr>
                <td colSpan={6} style={{ padding: "22px" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                      textAlign: "center",
                      opacity: 0.8,
                    }}
                  >
                    <div style={{ fontWeight: 800, letterSpacing: "-0.01em" }}>
                      Belum ada data cabang
                    </div>
                    <div className="text-sm" style={{ opacity: 0.75 }}>
                      Silakan klik tombol <strong>Tambah Cabang</strong> untuk membuat data baru.
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}
