// src/components/pos/CartPanel.tsx
import React from "react";
import { useCart } from "../../store/cart";
import { rupiah } from "../../utils/rupiah";

export default function CartPanel(): React.ReactElement {
  const { items, setQty, remove, quote, quoting, error } = useCart();

  const itemCount = items.reduce((acc, it) => acc + (Number.isFinite(it.qty) ? it.qty : 0), 0);

  return (
    <div>
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 12,
          marginBottom: 10,
        }}
      >
        <div>
          <div className="card-title" style={{ marginBottom: 2 }}>
            Keranjang
          </div>
          <div className="muted" style={{ fontSize: 12 }}>
            {items.length === 0 ? "Belum ada item" : `${items.length} item • ${itemCount} qty`}
          </div>
        </div>

        {/* Status kecil saat recalculation */}
        {quoting ? (
          <span className="badge" style={{ opacity: 0.8 }}>
            Hitung ulang…
          </span>
        ) : null}
      </div>

      {/* Body */}
      {items.length === 0 ? (
        <div className="empty-state">Belum ada item</div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {items.map((row) => {
            const label = row.name ?? `Var#${row.variant_id}`;
            const price = row.price_hint ? rupiah(row.price_hint) : "-";

            return (
              <div
                key={row.variant_id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: 10,
                  padding: "10px 10px",
                  borderRadius: 14,
                  border: "1px solid rgba(0,0,0,0.06)",
                  background: "rgba(0,0,0,0.01)",
                }}
              >
                {/* Left: name + price */}
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      marginBottom: 4,
                    }}
                    title={label}
                  >
                    {label}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 10,
                    }}
                  >
                    <span className="muted" style={{ fontSize: 12 }}>
                      Harga
                    </span>
                    <span className="mono" style={{ whiteSpace: "nowrap" }}>
                      {price}
                    </span>
                  </div>
                </div>

                {/* Right: qty + delete */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: 8,
                    justifyContent: "space-between",
                  }}
                >
                  <input
                    type="number"
                    min={1}
                    value={row.qty}
                    className="input text-right"
                    style={{
                      width: 78,
                      height: 36,
                      padding: "6px 10px",
                      borderRadius: 12,
                    }}
                    onChange={(e) =>
                      setQty(row.variant_id, Math.max(1, Number(e.target.value)))
                    }
                    aria-label={`Qty ${label}`}
                  />

                  <button
                    className="button button-ghost"
                    style={{
                      padding: "6px 10px",
                      borderRadius: 999,
                      fontSize: 12,
                      lineHeight: 1,
                      opacity: 0.9,
                    }}
                    onClick={() => remove(row.variant_id)}
                    aria-label={`Hapus ${label}`}
                    type="button"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="divider" style={{ margin: "14px 0" }} />

      {/* Totals */}
      <div aria-live="polite">
        {quote ? (
          <div>
            <Row label="Subtotal" value={rupiah(quote.totals.subtotal)} />
            <Row label="Diskon" value={rupiah(quote.totals.discount)} />
            <Row label="PPN" value={rupiah(quote.totals.tax)} />
            <div className="divider" style={{ margin: "10px 0" }} />
            <Row
              label="Total"
              value={rupiah(quote.totals.grand_total)}
              strong
              bigger
            />
          </div>
        ) : (
          <div className="muted">Tambahkan item untuk melihat total.</div>
        )}

        {error && (
          <div className="alert alert-danger" style={{ marginTop: 10 }}>
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

function Row(props: {
  label: string;
  value: string;
  strong?: boolean;
  bigger?: boolean;
}): React.ReactElement {
  const { label, value, strong, bigger } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 10,
        marginBottom: bigger ? 0 : 6,
        fontWeight: strong ? 700 : 500,
        fontSize: bigger ? 16 : 13,
      }}
    >
      <span style={{ opacity: strong ? 0.9 : 0.78 }}>{label}</span>
      <span className="mono" style={{ whiteSpace: "nowrap" }}>
        {value}
      </span>
    </div>
  );
}
