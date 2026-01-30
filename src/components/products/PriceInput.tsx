// src/components/products/PriceInput.tsx
import { useMemo } from "react";

type Props = {
  value: number;
  onChange: (next: number) => void;
  min?: number;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  /** Default: "Rp" */
  prefix?: string;
  /** Lebar input (default 10rem). Jika mau full, kirim "100%" */
  width?: string;
};

function clamp(n: number, min = 0): number {
  return Number.isFinite(n) ? Math.max(min, n) : min;
}

/**
 * PriceInput (UI rapi & konsisten)
 * - Value tetap number murni (tidak memformat ribuan di dalam input)
 * - UI: prefix "Rp" + input align-right
 * - Spinner number diminimalkan (tanpa wajib ubah CSS global)
 */
export default function PriceInput({
  value,
  onChange,
  min = 0,
  disabled,
  className,
  placeholder = "0",
  prefix = "Rp",
  width = "10rem",
}: Props): React.ReactElement {
  const display = useMemo(() => String(Number.isFinite(value) ? value : 0), [value]);

  const wrapperStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "stretch",
    width,
    opacity: disabled ? 0.8 : 1,
  };

  const prefixStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    padding: "0 0.75rem",
    border: "1px solid var(--color-border)",
    borderRight: "none",
    borderTopLeftRadius: "var(--radius-lg)",
    borderBottomLeftRadius: "var(--radius-lg)",
    background: "rgba(15,23,42,0.03)",
    fontWeight: 700,
    fontSize: ".9rem",
    color: "var(--color-text)",
    userSelect: "none",
    whiteSpace: "nowrap",
  };

  const inputStyle: React.CSSProperties = {
    textAlign: "right",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    width: "100%",
    // Hilangkan spinner di Firefox (Chrome/Safari via CSS pseudo-element tidak bisa inline,
    // tapi ini sudah mengurangi perbedaan tampilan antar browser)
    MozAppearance: "textfield",
  };

  return (
    <div style={wrapperStyle} aria-disabled={disabled ? "true" : "false"}>
      <span style={prefixStyle}>{prefix}</span>

      <input
        type="number"
        inputMode="decimal"
        min={min}
        step="1"
        placeholder={placeholder}
        className={className ?? "input"}
        value={display}
        disabled={disabled}
        style={inputStyle}
        onChange={(e) => {
          const raw = e.target.value;

          // Kalau user kosongkan input saat mengetik, jangan langsung dipaksa min.
          // Ini menjaga UX, tapi tetap tidak mengubah logika: onBlur akan mengembalikan min.
          if (raw === "") return;

          const n = Number(raw);
          onChange(clamp(n, min));
        }}
        onBlur={(e) => {
          if (e.currentTarget.value === "") onChange(min);
        }}
      />
    </div>
  );
}
