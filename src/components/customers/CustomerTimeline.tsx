// src/components/customers/CustomerTimeline.tsx
import type { CustomerTimelineEvent } from "../../types/customers";

interface Props {
  items: CustomerTimelineEvent[];
  loading?: boolean;
  error?: string | null;
}

function formatEventType(v: string): string {
  // UI helper saja (tidak mengubah data/logika)
  return v
    .replaceAll("_", " ")
    .trim()
    .replace(/\s+/g, " ")
    .toUpperCase();
}

export default function CustomerTimeline({
  items,
  loading,
  error,
}: Props): React.ReactElement {
  if (loading) {
    return (
      <div
        className="text-sm"
        style={{
          padding: "0.75rem",
          border: "1px dashed var(--border)",
          borderRadius: "14px",
          color: "var(--muted-foreground)",
          background: "rgba(2,6,23,0.02)",
        }}
      >
        Loading timeline…
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="text-sm"
        style={{
          padding: "0.75rem",
          border: "1px solid rgba(239,68,68,0.30)",
          borderRadius: "14px",
          background: "rgba(239,68,68,0.06)",
          color: "var(--danger, #ef4444)",
        }}
      >
        {error}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div
        className="text-sm"
        style={{
          padding: "0.75rem",
          border: "1px dashed var(--border)",
          borderRadius: "14px",
          color: "var(--muted-foreground)",
          background: "rgba(2,6,23,0.02)",
        }}
      >
        No timeline yet.
      </div>
    );
  }

  return (
    <div style={{ marginTop: "0.75rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          marginBottom: "0.75rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span className="badge" style={{ height: 26 }}>
            Activity
          </span>
          <span style={{ fontSize: "0.95rem", opacity: 0.8 }}>
            Riwayat aktivitas pelanggan (terbaru ke terlama).
          </span>
        </div>

        <span
          className="badge"
          style={{
            height: 26,
            opacity: 0.85,
          }}
          title="Jumlah event"
        >
          {items.length} items
        </span>
      </div>

      <ol
        style={{
          position: "relative",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {items.map((ev, idx) => {
          const isLast = idx === items.length - 1;
          const happened = new Date(ev.happened_at);

          return (
            <li
              key={ev.id}
              style={{
                position: "relative",
                display: "grid",
                gridTemplateColumns: "28px 1fr",
                columnGap: "0.75rem",
                paddingBottom: isLast ? 0 : "0.85rem",
              }}
            >
              {/* Rail (dot + line) */}
              <div style={{ position: "relative" }} aria-hidden>
                <span
                  style={{
                    position: "absolute",
                    top: "0.55rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 12,
                    height: 12,
                    borderRadius: 9999,
                    background: "var(--background)",
                    border: "2px solid var(--muted-foreground)",
                    boxShadow: "0 0 0 4px rgba(2,6,23,0.04)",
                  }}
                />
                {!isLast ? (
                  <span
                    style={{
                      position: "absolute",
                      top: "1.2rem",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 2,
                      height: "calc(100% - 1.2rem)",
                      background: "var(--border)",
                      borderRadius: 999,
                    }}
                  />
                ) : null}
              </div>

              {/* Content card */}
              <div
                className="card"
                style={{
                  padding: "0.85rem 0.9rem",
                  borderRadius: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "0.75rem",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ minWidth: 220 }}>
                    <div
                      className="text-xs"
                      style={{
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--muted-foreground)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {formatEventType(ev.event_type)}
                    </div>

                    {ev.title ? (
                      <div style={{ fontWeight: 750, lineHeight: 1.25 }}>
                        {ev.title}
                      </div>
                    ) : null}
                  </div>

                  <div
                    className="text-xs"
                    style={{
                      color: "var(--muted-foreground)",
                      whiteSpace: "nowrap",
                    }}
                    title={happened.toISOString()}
                  >
                    {happened.toLocaleString()}
                  </div>
                </div>

                {ev.note ? (
                  <div
                    className="text-sm"
                    style={{
                      marginTop: "0.5rem",
                      lineHeight: 1.55,
                      opacity: 0.92,
                    }}
                  >
                    {ev.note}
                  </div>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
