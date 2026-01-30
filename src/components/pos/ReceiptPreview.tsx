// src/components/pos/ReceiptPreview.tsx
import React, { useEffect, useMemo, useState } from "react";
import { getReceiptHtml } from "../../api/pos";

type Props = { orderId: number; phone?: string | null };

export default function ReceiptPreview({ orderId, phone }: Props): React.ReactElement {
  const [html, setHtml] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        setError(null);
        setHtml("");

        // HTML thermal 58/80mm
        const res = await getReceiptHtml(orderId);
        if (!alive) return;
        setHtml(res);
      } catch (e) {
        if (!alive) return;
        setError((e as Error).message);
      } finally {
        if (!alive) return;
        setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, [orderId]);

  function doPrint(): void {
    if (!html) return;
    const win = window.open("", "_blank", "width=420,height=640");
    if (!win) return;
    win.document.open();
    win.document.write(html);
    win.document.close();
    win.focus();
    win.print();
  }

  const waHref = useMemo<string | null>(() => {
    if (!phone) return null;
    const text = `Order #${orderId}\nTerima kasih. Struk pembelian terlampir.`;
    return `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
  }, [phone, orderId]);

  const canPrint = Boolean(html) && !loading && !error;

  return (
    <div className="card">
      {/* Header card (lebih konsisten daripada modal-header) */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <div style={{ minWidth: 220 }}>
          <div style={{ fontWeight: 800, fontSize: 16, lineHeight: 1.2 }}>Struk</div>
          <div style={{ marginTop: 4, fontSize: 12, opacity: 0.75 }}>
            Order #{orderId} • Preview thermal (58/80mm)
          </div>
        </div>

        <div className="btn-group" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button
            className="button button-outline"
            onClick={doPrint}
            disabled={!canPrint}
            aria-disabled={!canPrint}
            title={!canPrint ? "Struk belum siap untuk dicetak" : "Cetak struk"}
          >
            Print
          </button>

          {waHref && (
            <a className="button button-primary" href={waHref} target="_blank" rel="noreferrer">
              Kirim WA
            </a>
          )}
        </div>
      </div>

      {/* Spacing divider halus */}
      <div style={{ height: 1, background: "rgba(0,0,0,.06)", margin: "12px 0" }} />

      {error && <div className="alert alert-danger">{error}</div>}

      {!error && (
        <div className="card soft" style={{ padding: 12 }}>
          {/* Loading state */}
          {loading && (
            <div style={{ padding: 12 }}>
              <div className="text-sm opacity-70">Memuat struk…</div>
              <div style={{ height: 10 }} />
              <div
                style={{
                  height: 320,
                  borderRadius: 12,
                  background: "rgba(0,0,0,.05)",
                }}
              />
            </div>
          )}

          {!loading && html && (
            <div
              style={{
                borderRadius: 14,
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,.06)",
                background: "#fff",
              }}
            >
              {/* iframe clean agar fokus ke konten struk */}
              <iframe
                title="Receipt"
                srcDoc={html}
                style={{
                  width: "100%",
                  height: "26rem",
                  border: "none",
                  display: "block",
                }}
              />
            </div>
          )}

          {!loading && !html && (
            <div className="empty-state">Struk belum tersedia.</div>
          )}
        </div>
      )}
    </div>
  );
}
