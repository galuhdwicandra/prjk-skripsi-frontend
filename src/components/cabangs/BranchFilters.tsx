// src/components/cabangs/BranchFilters.tsx
import React, { useMemo } from "react";
import type { BranchQuery } from "../../types/branch";

type Props = {
  value: BranchQuery;
  onChange: (next: BranchQuery) => void;
  onSearch: () => void;
};

export default function BranchFilters({
  value,
  onChange,
  onSearch,
}: Props): React.ReactElement {
  // Default query untuk tombol reset (hanya properti yang dipakai di filter ini)
  const resetValue = useMemo<BranchQuery>(
    () => ({
      ...value,
      q: undefined,
      kota: undefined,
      is_active: undefined,
      page: 1,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch();
    }
  };

  return (
    <div
      onKeyDown={onKeyDown}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: "0.9rem",
        alignItems: "end",
      }}
    >
      {/* Cari */}
      <div>
        <label className="label" htmlFor="q">
          Cari
        </label>
        <input
          id="q"
          className="input"
          value={value.q ?? ""}
          onChange={(e) => onChange({ ...value, q: e.target.value, page: 1 })}
          placeholder="Nama / alamat / telepon"
          autoComplete="off"
        />
      </div>

      {/* Kota */}
      <div>
        <label className="label" htmlFor="kota">
          Kota
        </label>
        <input
          id="kota"
          className="input"
          value={value.kota ?? ""}
          onChange={(e) =>
            onChange({
              ...value,
              kota: e.target.value || undefined,
              page: 1,
            })
          }
          placeholder="Contoh: Bandung"
          autoComplete="off"
        />
      </div>

      {/* Action Group */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.65rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.75rem",
          }}
        >
          {/* Toggle aktif */}
          <label
            htmlFor="branch-active"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            <input
              id="branch-active"
              type="checkbox"
              checked={Boolean(value.is_active)}
              onChange={(e) =>
                onChange({
                  ...value,
                  is_active: e.target.checked ? true : undefined,
                  page: 1,
                })
              }
              aria-label="Hanya aktif"
            />
            <span className="text-sm" style={{ opacity: 0.9 }}>
              Hanya aktif
            </span>
          </label>

          {/* Reset (opsional) */}
          <button
            type="button"
            className="button button-ghost"
            onClick={() => {
              onChange(resetValue);
              onSearch();
            }}
            style={{
              padding: "0.4rem 0.6rem",
              borderRadius: 12,
              fontSize: "0.85rem",
            }}
            title="Reset filter"
          >
            Reset
          </button>
        </div>

        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button
            type="button"
            className="button button-primary"
            onClick={onSearch}
            style={{ width: "100%", borderRadius: 12 }}
          >
            Terapkan
          </button>
        </div>
      </div>

      {/* Responsif: 2 kolom di layar sedang, 1 kolom di mobile */}
      <style>
        {`
          @media (max-width: 900px) {
            div[style*="grid-template-columns: repeat(3"] {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }
          @media (max-width: 640px) {
            div[style*="grid-template-columns: repeat(3"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </div>
  );
}
