// src/components/customers/CustomerSelect.tsx
import { useEffect, useMemo, useRef, useState } from "react";
import { listCustomers } from "../../api/customers";
import type { Customer } from "../../types/customers";

type Props = {
  branchId: number | string;
  value: Customer | null;
  onChange: (c: Customer | null) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
};

/**
 * CustomerSelect
 * Autocomplete pelanggan terdaftar berdasarkan cabang.
 * - Ketik nama / no HP => fetch 10 teratas
 * - Klik salah satu => onChange(Customer)
 * - Nilai terpilih ditampilkan sebagai "Nama (No HP)"
 *
 * Catatan:
 * - UI dirapikan agar konsisten dengan design system index.css (card/input/button/badge).
 * - Logika utama tidak diubah.
 */
export default function CustomerSelect({
  branchId,
  value,
  onChange,
  placeholder = "Cari nama / no HP terdaftar…",
  disabled = false,
  className = "",
}: Props): React.ReactElement {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const timer = useRef<number | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  // tutup dropdown saat klik di luar
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // fetch dengan debounce ketika q berubah
  useEffect(() => {
    if (!q) {
      setRows([]);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    if (timer.current) window.clearTimeout(timer.current);

    timer.current = window.setTimeout(async () => {
      try {
        const res = await listCustomers({
          q,
          cabang_id: branchId,
          per_page: 10,
          page: 1,
        });
        setRows(res.data ?? []);
      } catch (err: unknown) {
        let msg = "Gagal memuat pelanggan";
        if (typeof err === "object" && err !== null) {
          // @ts-expect-error akses opsional
          msg = err?.message ?? msg;
        }
        setError(msg);
      } finally {
        setLoading(false);
      }
    }, 250);

    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [q, branchId]);

  const displayText = useMemo(() => {
    if (value) {
      const nama = value.nama ?? "-";
      const phone = value.phone ? ` (${value.phone})` : "";
      return `${nama}${phone}`;
    }
    return q;
  }, [value, q]);

  const showEmpty = !loading && !error && rows.length === 0 && Boolean(q);

  return (
    <div ref={wrapRef} className={`relative ${className}`}>
      {/* Input + indikator */}
      <div style={{ position: "relative" }}>
        <input
          className="input w-full"
          placeholder={placeholder}
          value={displayText}
          onChange={(e) => {
            setQ(e.target.value);
            onChange(null);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          disabled={disabled}
          aria-expanded={open ? "true" : "false"}
          aria-autocomplete="list"
          aria-haspopup="listbox"
        />

        {/* Indicator kanan (loading / selected) */}
        <div
          style={{
            position: "absolute",
            right: "0.6rem",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            pointerEvents: "none",
          }}
        >
          {loading ? (
            <span className="badge" style={{ height: 22 }}>
              Loading
            </span>
          ) : value ? (
            <span className="badge" style={{ height: 22 }}>
              Selected
            </span>
          ) : null}
        </div>
      </div>

      {/* Dropdown */}
      {open && (
        <div
          className="card"
          role="listbox"
          style={{
            position: "absolute",
            zIndex: 30,
            marginTop: "0.5rem",
            width: "100%",
            maxHeight: "16rem",
            overflow: "auto",
            padding: "0.35rem",
            borderRadius: "14px",
          }}
        >
          {/* Status: loading / error / empty */}
          {loading && (
            <div
              style={{
                padding: "0.6rem 0.75rem",
                fontSize: "0.9rem",
                opacity: 0.75,
              }}
            >
              Memuat…
            </div>
          )}

          {error && (
            <div
              className="badge badge-danger"
              style={{
                display: "block",
                padding: "0.6rem 0.75rem",
                borderRadius: "12px",
                margin: "0.35rem",
              }}
            >
              {error}
            </div>
          )}

          {showEmpty && (
            <div
              style={{
                padding: "0.6rem 0.75rem",
                fontSize: "0.9rem",
                opacity: 0.75,
              }}
            >
              Tidak ada hasil untuk “{q}”
            </div>
          )}

          {/* List */}
          {!loading &&
            !error &&
            rows.map((c) => {
              const nama = c.nama ?? "(tanpa nama)";
              const phone = c.phone ?? "-";
              const alamat = c.alamat ?? "-";

              return (
                <button
                  key={c.id}
                  type="button"
                  className="button button-ghost"
                  onMouseDown={(e) => e.preventDefault()} // agar input tidak blur sebelum click
                  onClick={() => {
                    onChange(c);
                    setOpen(false);
                    setQ("");
                  }}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "0.65rem 0.75rem",
                    borderRadius: "12px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "0.25rem",
                    // hover visual halus tanpa mengandalkan tailwind
                    background: "transparent",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      gap: "0.75rem",
                    }}
                  >
                    <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>
                      {nama}
                    </span>
                    <span className="badge" style={{ height: 22 }}>
                      {phone}
                    </span>
                  </div>

                  <div style={{ fontSize: "0.85rem", opacity: 0.75 }}>
                    {alamat}
                  </div>
                </button>
              );
            })}

          {/* Footer hint */}
          {!loading && !error && rows.length > 0 && (
            <div
              style={{
                marginTop: "0.25rem",
                padding: "0.45rem 0.65rem 0.35rem 0.65rem",
                fontSize: "0.8rem",
                opacity: 0.65,
              }}
            >
              Tip: ketik minimal 2–3 huruf agar hasil lebih relevan.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
