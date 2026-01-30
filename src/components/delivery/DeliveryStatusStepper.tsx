// src/components/delivery/DeliveryStatusStepper.tsx
import React from "react";
import type { DeliveryStatus } from "../../types/delivery";

const ORDER: DeliveryStatus[] = ["REQUESTED", "ASSIGNED", "PICKED_UP", "ON_ROUTE", "DELIVERED"];

type Props = {
  status: DeliveryStatus;
};

function labelOf(s: DeliveryStatus): string {
  switch (s) {
    case "REQUESTED":
      return "Request";
    case "ASSIGNED":
      return "Assigned";
    case "PICKED_UP":
      return "Picked";
    case "ON_ROUTE":
      return "On Route";
    case "DELIVERED":
      return "Done";
    default:
      return s;
  }
}

export default function DeliveryStatusStepper({ status }: Props): React.ReactElement {
  const idx = ORDER.indexOf(status as DeliveryStatus);

  const isTerminalBad = status === "FAILED" || status === "CANCELLED";

  // Untuk status terminal buruk: tampilkan badge tegas, tidak perlu stepper
  if (isTerminalBad) {
    return (
      <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
        <span
          className="badge badge-danger"
          style={{ borderRadius: "999px", padding: "0.3rem 0.6rem", fontSize: "0.78rem" }}
        >
          {status}
        </span>
      </div>
    );
  }

  // Jika status tidak ditemukan di ORDER (defensif): tampilkan badge netral
  if (idx === -1) {
    return (
      <span className="badge" style={{ borderRadius: "999px", padding: "0.3rem 0.6rem", fontSize: "0.78rem" }}>
        {status}
      </span>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.65rem",
        flexWrap: "wrap",
        lineHeight: 1.2,
      }}
      aria-label={`Delivery status: ${status}`}
    >
      {/* Stepper bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.45rem",
          flexWrap: "nowrap",
        }}
      >
        {ORDER.map((s, i) => {
          const done = i < idx;
          const current = i === idx;
          const upcoming = i > idx;

          const dotStyle: React.CSSProperties = {
            width: 12,
            height: 12,
            borderRadius: 999,
            border: "1px solid rgba(0,0,0,0.18)",
            background: "rgba(0,0,0,0.06)",
          };

          if (done) {
            dotStyle.background = "rgba(16,185,129,0.95)"; // hijau halus
            dotStyle.border = "1px solid rgba(16,185,129,0.35)";
          }
          if (current) {
            dotStyle.background = "rgba(59,130,246,0.95)"; // biru halus
            dotStyle.border = "1px solid rgba(59,130,246,0.35)";
            dotStyle.boxShadow = "0 0 0 4px rgba(59,130,246,0.18)";
          }
          if (upcoming) {
            dotStyle.background = "rgba(0,0,0,0.05)";
            dotStyle.border = "1px solid rgba(0,0,0,0.12)";
          }

          const lineStyle: React.CSSProperties = {
            width: 18,
            height: 2,
            borderRadius: 999,
            background: "rgba(0,0,0,0.10)",
          };

          if (i < idx) lineStyle.background = "rgba(16,185,129,0.55)";
          if (i === idx - 1) lineStyle.background = "rgba(59,130,246,0.35)";

          return (
            <React.Fragment key={s}>
              <span
                title={s}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  ...dotStyle,
                }}
                aria-current={current ? "step" : undefined}
              />
              {i < ORDER.length - 1 && <span aria-hidden="true" style={lineStyle} />}
            </React.Fragment>
          );
        })}
      </div>

      {/* Label status saat ini (lebih rapi daripada menampilkan semua badge) */}
      <span
        className="badge"
        style={{
          borderRadius: "999px",
          padding: "0.3rem 0.6rem",
          fontSize: "0.78rem",
          border: "1px solid rgba(0,0,0,0.10)",
          background: "rgba(0,0,0,0.03)",
        }}
        title={status}
      >
        {labelOf(status)}
      </span>
    </div>
  );
}
