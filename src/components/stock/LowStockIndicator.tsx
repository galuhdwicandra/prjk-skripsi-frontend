// src/components/stock/LowStockIndicator.tsx
import React from "react";

export default function LowStockIndicator({
  low,
  isLow,
}: {
  low?: boolean;
  isLow?: boolean;
}): React.ReactElement | null {
  const flag = (typeof low === "boolean" ? low : isLow) ?? false;
  if (!flag) return null;

  // Gunakan style konsisten dengan "badge" project.
  // Tidak mengubah logika, hanya tampilan.
  return (
    <span
      className="badge"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "0.28rem 0.6rem",
        borderRadius: 999,
        fontSize: "0.78rem",
        lineHeight: 1,
        background: "rgba(245, 158, 11, 0.14)", // amber halus
        border: "1px solid rgba(245, 158, 11, 0.28)",
        color: "rgba(146, 64, 14, 0.95)", // amber gelap, tetap terbaca
        fontWeight: 700,
        whiteSpace: "nowrap",
      }}
      title="Stok berada di bawah Min Stok"
      aria-label="Low stock"
    >
      <span
        aria-hidden="true"
        style={{
          width: 8,
          height: 8,
          borderRadius: 999,
          background: "rgba(245, 158, 11, 0.95)",
          boxShadow: "0 0 0 4px rgba(245, 158, 11, 0.18)",
        }}
      />
      Low stock
    </span>
  );
}
