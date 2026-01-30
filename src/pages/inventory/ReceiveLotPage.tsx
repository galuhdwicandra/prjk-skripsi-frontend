// src/pages/inventory/ReceiveLotPage.tsx
import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import ReceiveLotForm from "../../components/inventory/ReceiveLotForm";

export default function ReceiveLotPage(): React.ReactElement {
  const loc = useLocation();
  const qs = useMemo(() => new URLSearchParams(loc.search), [loc.search]);

  const defaultGudangId = qs.get("gudang_id") ? Number(qs.get("gudang_id")) : undefined;
  const defaultVariantId = qs.get("variant_id") ? Number(qs.get("variant_id")) : undefined;

  const hasPrefill = Boolean(defaultGudangId || defaultVariantId);

  return (
    <div className="container" style={{ display: "grid", gap: 16 }}>
      {/* Header */}
      <div
        className="card"
        style={{
          padding: "1.25rem 1.25rem",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span className="badge">Inventory</span>
            <span style={{ opacity: 0.6 }}>›</span>
            <span className="badge" style={{ background: "rgba(0,0,0,.04)", color: "var(--color-text)" }}>
              Penerimaan Stok (Lot)
            </span>
            {hasPrefill && (
              <span className="badge" style={{ background: "rgba(22,163,74,.10)", color: "var(--color-success)" }}>
                Prefill aktif
              </span>
            )}
          </div>

          <h2 style={{ marginTop: 10, marginBottom: 6 }}>Penerimaan Stok (Lot)</h2>
          <p style={{ margin: 0 }}>
            Input barang masuk per lot untuk menjaga akurasi stok dan histori penerimaan.
          </p>

          {hasPrefill && (
            <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
              {defaultGudangId ? (
                <span className="badge" style={{ background: "rgba(0,0,0,.04)", color: "var(--color-text)" }}>
                  Gudang: #{defaultGudangId}
                </span>
              ) : null}
              {defaultVariantId ? (
                <span className="badge" style={{ background: "rgba(0,0,0,.04)", color: "var(--color-text)" }}>
                  Variant: #{defaultVariantId}
                </span>
              ) : null}
            </div>
          )}
        </div>

        {/* Actions (opsional, tetap aman karena hanya UI) */}
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <Link
            to="/inventory"
            className="button button-outline"
            style={{ textDecoration: "none" }}
          >
            Kembali
          </Link>

          <Link
            to="/inventory/lots"
            className="button button-ghost"
            style={{ textDecoration: "none" }}
          >
            Lihat Lot
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="card" style={{ padding: "1.25rem" }}>
        <ReceiveLotForm
          defaultGudangId={defaultGudangId}
          defaultVariantId={defaultVariantId}
        />
      </div>
    </div>
  );
}
