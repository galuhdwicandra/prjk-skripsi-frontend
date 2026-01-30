// src/components/category/CategoryTable.tsx
import type { Category } from "../../types/category";

type Props = {
  rows: Category[];
  onEdit: (row: Category) => void;
  onDelete: (row: Category) => void;
};

export default function CategoryTable({ rows, onEdit, onDelete }: Props) {
  const softText: React.CSSProperties = { color: "var(--color-text-soft)" };

  const thBase: React.CSSProperties = {
    whiteSpace: "nowrap",
  };

  const tdBase: React.CSSProperties = {
    verticalAlign: "top",
  };

  const mono: React.CSSProperties = {
    fontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    fontSize: 12,
  };

  const clamp2: React.CSSProperties = {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };

  return (
    <div
      style={{
        overflowX: "auto",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-md)",
      }}
    >
      <table className="table" style={{ margin: 0 }}>
        <thead>
          <tr>
            <th style={{ ...thBase, width: 64, textAlign: "right" }}>#</th>
            <th style={thBase}>Nama</th>
            <th style={{ ...thBase, width: 220 }}>Slug</th>
            <th style={thBase}>Deskripsi</th>
            <th style={{ ...thBase, width: 120, textAlign: "center" }}>Status</th>
            <th style={{ ...thBase, width: 180 }}>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={6} style={{ padding: "1rem" }}>
                <div
                  style={{
                    padding: "1rem",
                    textAlign: "center",
                    border: "1px dashed var(--color-border)",
                    borderRadius: "var(--radius-md)",
                    background: "var(--color-surface)",
                  }}
                >
                  <div style={{ fontWeight: 800 }}>Belum ada data</div>
                  <div style={{ ...softText, marginTop: ".25rem" }}>
                    Silakan tambah kategori baru untuk mulai mengisi data.
                  </div>
                </div>
              </td>
            </tr>
          ) : (
            rows.map((r, i) => (
              <tr key={r.id}>
                <td style={{ ...tdBase, textAlign: "right", ...softText }}>
                  {i + 1}
                </td>

                <td style={tdBase}>
                  <div style={{ fontWeight: 800, lineHeight: 1.25 }}>
                    {r.nama}
                  </div>
                  <div style={{ ...softText, marginTop: ".25rem", ...mono }}>
                    {r.slug}
                  </div>
                </td>

                <td style={{ ...tdBase, ...mono }}>
                  {r.slug}
                </td>

                <td style={tdBase}>
                  {r.deskripsi ? (
                    <div style={{ ...clamp2, lineHeight: 1.45 }}>
                      {r.deskripsi}
                    </div>
                  ) : (
                    <span style={softText}>—</span>
                  )}
                </td>

                <td style={{ ...tdBase, textAlign: "center" }}>
                  <span
                    className={`badge ${
                      r.is_active ? "badge-success" : "badge-danger"
                    }`}
                    style={{ display: "inline-flex", justifyContent: "center", minWidth: 84 }}
                  >
                    {r.is_active ? "Aktif" : "Nonaktif"}
                  </span>
                </td>

                <td style={tdBase}>
                  <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
                    <button
                      className="button button-outline"
                      onClick={() => onEdit(r)}
                      style={{ paddingInline: ".9rem" }}
                    >
                      Edit
                    </button>

                    <button
                      className="button"
                      onClick={() => onDelete(r)}
                      style={{
                        paddingInline: ".9rem",
                        borderColor: "rgba(220,38,38,.25)",
                        color: "var(--color-danger)",
                        background: "rgba(220,38,38,.06)",
                      }}
                    >
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
