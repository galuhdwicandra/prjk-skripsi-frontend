// src/components/category/CategoryFilters.tsx
import { useEffect, useMemo, useState } from "react";
import type { CategoryQuery, SortCategory } from "../../types/category";

type Props = {
  value: CategoryQuery;
  onChange: (next: CategoryQuery) => void;
};

const SORT_OPTIONS: { label: string; value: SortCategory }[] = [
  { label: "Nama A→Z", value: "nama" },
  { label: "Nama Z→A", value: "-nama" },
  { label: "Terbaru", value: "-created_at" },
  { label: "Terlama", value: "created_at" },
];

export default function CategoryFilters({ value, onChange }: Props): React.ReactElement {
  const [search, setSearch] = useState(value.search ?? "");
  const [isActive, setIsActive] = useState<boolean | undefined>(value.is_active);
  const [sort, setSort] = useState<SortCategory>((value.sort as SortCategory) ?? "nama");

  useEffect(() => {
    setSearch(value.search ?? "");
    setIsActive(value.is_active);
    setSort((value.sort as SortCategory) ?? "nama");
  }, [value]);

  const softText: React.CSSProperties = { color: "var(--color-text-soft)" };

  const gridStyle: React.CSSProperties = useMemo(
    () => ({
      display: "grid",
      gridTemplateColumns: "1.3fr 0.8fr 0.9fr",
      gap: "0.85rem",
      alignItems: "end",
    }),
    []
  );

  const labelStyle: React.CSSProperties = useMemo(
    () => ({
      fontSize: 12,
      fontWeight: 700,
      marginBottom: 6,
      letterSpacing: ".02em",
      ...softText,
    }),
    [softText]
  );

  const actionsStyle: React.CSSProperties = useMemo(
    () => ({
      display: "flex",
      justifyContent: "flex-end",
      gap: "0.6rem",
      flexWrap: "wrap",
      marginTop: "0.9rem",
    }),
    []
  );

  const apply = () => {
    onChange({ ...value, search, sort, is_active: isActive, page: 1 });
  };

  const reset = () => {
    setSearch("");
    setIsActive(undefined);
    setSort("nama");
    onChange({ page: 1, per_page: value.per_page ?? 10, sort: "nama" });
  };

  return (
    <div>
      <div style={gridStyle}>
        {/* Search */}
        <div>
          <div style={labelStyle}>Pencarian</div>
          <input
            className="input"
            placeholder="Cari nama/slug…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") apply();
            }}
            style={{ width: "100%" }}
          />
          <div style={{ ...softText, fontSize: 12, marginTop: 6 }}>
            Tekan <b>Enter</b> atau klik <b>Terapkan</b>.
          </div>
        </div>

        {/* Status */}
        <div>
          <div style={labelStyle}>Status</div>
          <select
            className="select"
            value={String(isActive)}
            onChange={(e) => {
              const v = e.target.value;
              const next = v === "undefined" ? undefined : v === "true";
              setIsActive(next);
              // status: langsung apply (tetap pola Anda)
              onChange({ ...value, is_active: next, page: 1 });
            }}
            style={{ width: "100%" }}
          >
            <option value="undefined">Semua</option>
            <option value="true">Aktif</option>
            <option value="false">Nonaktif</option>
          </select>
        </div>

        {/* Sort */}
        <div>
          <div style={labelStyle}>Urutkan</div>
          <select
            className="select"
            value={sort}
            onChange={(e) => {
              const s = e.target.value as SortCategory;
              setSort(s);
              // sort: langsung apply (tetap pola Anda)
              onChange({ ...value, sort: s, page: 1 });
            }}
            style={{ width: "100%" }}
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div style={actionsStyle}>
        <button className="button button-outline" onClick={reset} type="button">
          Reset
        </button>
        <button className="button button-primary" onClick={apply} type="button">
          Terapkan
        </button>
      </div>

      {/* Responsif: 1 kolom di layar kecil */}
      <style>
        {`
          @media (max-width: 860px) {
            .category-filters-grid-fallback {
              display: block !important;
            }
          }
        `}
      </style>
    </div>
  );
}
