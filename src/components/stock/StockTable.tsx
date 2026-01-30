// src/components/stock/StockTable.tsx
import type { Stock } from "../../types/stock";
import LowStockIndicator from "./LowStockIndicator";

function fmt(n: number) {
  return new Intl.NumberFormat("id-ID").format(n);
}

type Props = {
  rows: Stock[];
  loading?: boolean;
  onEditMin?: (row: Stock) => void;
};

export default function StockTable({ rows, loading, onEditMin }: Props) {
  // Loading state yang lebih rapi (tanpa ubah logic)
  if (loading) {
    return (
      <div
        style={{
          padding: "14px 12px",
          borderRadius: 14,
          border: "1px solid rgba(0,0,0,0.08)",
          background: "rgba(0,0,0,0.02)",
        }}
      >
        <div style={{ fontWeight: 800, marginBottom: 6 }}>Memuat stok…</div>
        <div className="text-dim" style={{ fontSize: ".9rem" }}>
          Mohon tunggu sebentar.
        </div>
      </div>
    );
  }

  // Empty state yang lebih rapi
  if (!rows?.length) {
    return (
      <div
        style={{
          padding: "14px 12px",
          borderRadius: 14,
          border: "1px dashed rgba(0,0,0,0.18)",
          background: "rgba(0,0,0,0.01)",
        }}
      >
        <div style={{ fontWeight: 800, marginBottom: 6 }}>Belum ada data stok</div>
        <div className="text-dim" style={{ fontSize: ".9rem" }}>
          Coba ubah filter cabang/gudang/varian atau cek kembali data stok.
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Wrapper agar tabel aman di mobile (scroll horizontal, tidak merusak layout) */}
      <div style={{ overflowX: "auto" }}>
        <table className="table" style={{ minWidth: 860 }}>
          <thead>
            <tr>
              <th style={{ width: "52%" }}>Variant</th>
              <th className="text-right" style={{ width: "12%" }}>
                Qty
              </th>
              <th className="text-right" style={{ width: "12%" }}>
                Min
              </th>
              <th style={{ width: "12%" }}>Status</th>
              <th className="text-right" style={{ width: "12%" }}>
                Aksi
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r) => {
              const isLow =
                !!r.is_low_stock ||
                (typeof r.qty === "number" &&
                  typeof r.min_stok === "number" &&
                  r.qty < r.min_stok);

              const nama = r.variant?.nama_produk ?? `Variant #${r.product_variant_id}`;
              const sku = r.variant?.sku ?? "-";
              const cabang = r.cabang?.nama ?? `#${r.cabang_id}`;
              const gudang = r.gudang?.nama ?? `#${r.gudang_id}`;

              return (
                <tr key={r.id}>
                  {/* VARIANT + META */}
                  <td style={{ verticalAlign: "top" }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      {/* Accent dot untuk visual (tidak mengubah logic) */}
                      <span
                        aria-hidden="true"
                        style={{
                          marginTop: 6,
                          width: 10,
                          height: 10,
                          borderRadius: 999,
                          background: isLow ? "rgba(239,68,68,0.9)" : "rgba(16,185,129,0.9)",
                          boxShadow: isLow
                            ? "0 0 0 4px rgba(239,68,68,0.15)"
                            : "0 0 0 4px rgba(16,185,129,0.15)",
                          flex: "0 0 auto",
                        }}
                      />

                      <div style={{ minWidth: 0 }}>
                        <div
                          className="font-medium"
                          style={{
                            fontWeight: 800,
                            lineHeight: 1.25,
                            wordBreak: "break-word",
                          }}
                        >
                          {nama}
                        </div>

                        <div
                          style={{
                            marginTop: 8,
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 8,
                            alignItems: "center",
                          }}
                        >
                          <span className="badge" title="SKU">
                            SKU: {sku}
                          </span>

                          <span className="badge" title="Cabang">
                            Cabang: {cabang}
                          </span>

                          <span className="badge" title="Gudang">
                            Gudang: {gudang}
                          </span>
                        </div>

                        {isLow && (
                          <div className="text-dim" style={{ marginTop: 8, fontSize: ".88rem" }}>
                            Qty di bawah Min Stok. Pertimbangkan restok.
                          </div>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* QTY */}
                  <td className="text-right" style={{ verticalAlign: "top" }}>
                    <div style={{ fontWeight: 800 }}>{fmt(r.qty)}</div>
                    <div className="text-dim" style={{ fontSize: ".85rem", marginTop: 4 }}>
                      Unit
                    </div>
                  </td>

                  {/* MIN */}
                  <td className="text-right" style={{ verticalAlign: "top" }}>
                    <div style={{ fontWeight: 800 }}>{fmt(r.min_stok)}</div>
                    <div className="text-dim" style={{ fontSize: ".85rem", marginTop: 4 }}>
                      Batas
                    </div>
                  </td>

                  {/* STATUS */}
                  <td style={{ verticalAlign: "top" }}>
                    <LowStockIndicator low={isLow} />
                  </td>

                  {/* AKSI */}
                  <td className="text-right" style={{ verticalAlign: "top" }}>
                    {onEditMin ? (
                      <button
                        className="button button-outline"
                        onClick={() => onEditMin(r)}
                        title="Ubah Min Stok"
                        aria-label={`Ubah Min Stok untuk ${
                          r.variant?.sku ?? `Variant ${r.product_variant_id}`
                        }`}
                        style={{
                          whiteSpace: "nowrap",
                          borderRadius: 999,
                          padding: "0.5rem 0.75rem",
                          fontWeight: 700,
                        }}
                      >
                        Ubah Min
                      </button>
                    ) : (
                      <span className="text-dim" style={{ fontSize: ".9rem" }}>
                        -
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Hint untuk mobile */}
      <div className="text-dim" style={{ fontSize: ".85rem", marginTop: 10 }}>
        Jika di layar kecil, geser tabel ke kanan/kiri untuk melihat kolom lain.
      </div>
    </div>
  );
}
