// src/components/delivery/DeliveryTabs.tsx
import React from "react";
import type { DeliveryStatus } from "../../types/delivery";

type Tab = { key: DeliveryStatus | "ALL"; label: string };

const TABS: Tab[] = [
  { key: "ALL", label: "Semua" },
  { key: "REQUESTED", label: "Requested" },
  { key: "ASSIGNED", label: "Assigned" },
  { key: "PICKED_UP", label: "Picked" },
  { key: "ON_ROUTE", label: "On Route" },
  { key: "DELIVERED", label: "Delivered" },
  { key: "FAILED", label: "Failed" },
  { key: "CANCELLED", label: "Cancelled" },
];

type Props = {
  value: Tab["key"];
  onChange: (k: Tab["key"]) => void;
};

export default function DeliveryTabs({ value, onChange }: Props): React.ReactElement {
  return (
    <div aria-label="Delivery tabs" role="tablist">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          alignItems: "center",
        }}
      >
        {TABS.map((t) => {
          const active = value === t.key;

          return (
            <button
              key={t.key}
              role="tab"
              aria-selected={active}
              aria-pressed={active}
              onClick={() => onChange(t.key)}
              className={`button ${active ? "button-primary" : "button-ghost"}`}
              style={{
                borderRadius: "999px",
                padding: "0.45rem 0.85rem",
                fontSize: "0.85rem",
                fontWeight: active ? 700 : 600,
                lineHeight: 1.1,
                // aktif: lebih “solid”, non-aktif: lebih “subtle”
                border: active ? "1px solid rgba(0,0,0,0.06)" : "1px solid rgba(0,0,0,0.08)",
                background: active ? undefined : "rgba(0,0,0,0.02)",
                opacity: active ? 1 : 0.9,
                transition: "transform 120ms ease, opacity 120ms ease",
              }}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Fokus & hover halus (tanpa sentuh index.css) */}
      <style>
        {`
          [role="tab"] { outline: none; }
          [role="tab"]:active { transform: scale(0.98); }
          [role="tab"]:focus-visible {
            box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.25);
          }
        `}
      </style>
    </div>
  );
}
