// src/components/products/ProductFilters.tsx
import type { ProductQuery } from "../../types/product";

type Props = {
  value: ProductQuery;
  categories: Array<{ id: number; nama: string }>;
  onChange: (next: ProductQuery) => void;
};

const SORTS: Array<{ v: ProductQuery["sort"]; label: string }> = [
  { v: "-created_at", label: "Terbaru" },
  { v: "created_at", label: "Terlama" },
  { v: "nama", label: "Nama (A–Z)" },
  { v: "-nama", label: "Nama (Z–A)" },
];

const PER_PAGES = [10, 25, 50, 100];

function isDefault(value: ProductQuery): boolean {
  const searchEmpty = (value.search ?? "").trim() === "";
  const catEmpty = !value.category_id;
  const sortDefault = (value.sort ?? "-created_at") === "-created_at";
  const perDefault = (value.per_page ?? 10) === 10;
  const activeOff = !value.is_active;
  return searchEmpty && catEmpty && sortDefault && perDefault && activeOff;
}

export default function ProductFilters({ value, categories, onChange }: Props): React.ReactElement {
  const canReset = !isDefault(value);

  function reset(): void {
    // hanya reset filter UI; tidak mengubah struktur query lain yang mungkin Anda pakai
    onChange({
      ...value,
      page: 1,
      search: "",
      category_id: undefined,
      sort: "-created_at",
      per_page: 10,
      is_active: false,
    });
  }

  return (
    <div className="card" style={{ padding: "var(--space-5)" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "var(--space-3)",
          flexWrap: "wrap",
          marginBottom: "var(--space-4)",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div style={{ fontWeight: 800, letterSpacing: "-0.01em" }}>Filter Produk</div>
          <div className="text-dim" style={{ fontSize: ".9rem", marginTop: 4 }}>
            Cari, pilih kategori, dan atur urutan tampilan.
          </div>
        </div>

        <button
          type="button"
          className="button button-outline"
          onClick={reset}
          disabled={!canReset}
          style={{ whiteSpace: "nowrap" }}
          title={!canReset ? "Filter sudah default" : "Reset semua filter"}
        >
          Reset
        </button>
      </div>

      {/* Baris utama: Search, Kategori, Sort */}
      <div className="form-row form-row--3">
        <div style={{ display: "grid", gap: 6 }}>
          <label className="text-dim" style={{ fontSize: ".85rem" }}>
            Pencarian
          </label>
          <input
            className="input"
            placeholder="Cari nama produk…"
            value={value.search ?? ""}
            onChange={(e) => onChange({ ...value, page: 1, search: e.target.value })}
          />
        </div>

        <div style={{ display: "grid", gap: 6 }}>
          <label className="text-dim" style={{ fontSize: ".85rem" }}>
            Kategori
          </label>
          <select
            className="select"
            value={value.category_id ?? ""}
            onChange={(e) =>
              onChange({
                ...value,
                page: 1,
                category_id: e.target.value ? Number(e.target.value) : undefined,
              })
            }
          >
            <option value="">Semua Kategori</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.nama}
              </option>
            ))}
          </select>
        </div>

        <div style={{ display: "grid", gap: 6 }}>
          <label className="text-dim" style={{ fontSize: ".85rem" }}>
            Urutkan
          </label>
          <select
            className="select"
            value={value.sort ?? "-created_at"}
            onChange={(e) =>
              onChange({
                ...value,
                page: 1,
                sort: e.target.value as ProductQuery["sort"],
              })
            }
          >
            {SORTS.map((s) => (
              <option key={s.v} value={s.v ?? ""}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Baris sekunder: chips + per_page */}
      <div
        className="row row--between"
        style={{
          marginTop: "var(--space-4)",
          paddingTop: "var(--space-4)",
          borderTop: "1px solid var(--color-border)",
          gap: "var(--space-3)",
          flexWrap: "wrap",
        }}
      >
        {/* Left: toggle aktif */}
        <label
          htmlFor="only-active"
          className="row row--center"
          style={{
            gap: "0.6rem",
            userSelect: "none",
            padding: "0.45rem 0.65rem",
            borderRadius: "999px",
            border: "1px solid var(--color-border)",
            background: "var(--color-surface)",
          }}
        >
          <input
            id="only-active"
            type="checkbox"
            className="checkbox"
            checked={!!value.is_active}
            onChange={(e) => onChange({ ...value, page: 1, is_active: e.target.checked })}
          />
          <span className="text-dim" style={{ fontSize: ".9rem" }}>
            Hanya aktif
          </span>
        </label>

        {/* Right: per page */}
        <div className="row row--center" style={{ gap: "0.6rem" }}>
          <span className="text-dim" style={{ fontSize: ".9rem" }}>
            Per halaman
          </span>
          <select
            className="select select--sm"
            value={value.per_page ?? 10}
            onChange={(e) => onChange({ ...value, page: 1, per_page: Number(e.target.value) })}
            style={{ minWidth: 92 }}
          >
            {PER_PAGES.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Optional: status ringkas (biar tidak terasa "kosong") */}
      <div style={{ marginTop: "var(--space-3)" }}>
        <div className="text-dim" style={{ fontSize: ".85rem" }}>
          Status:{" "}
          <b style={{ color: "var(--color-text)" }}>
            {canReset ? "Filter diterapkan" : "Default"}
          </b>
        </div>
      </div>
    </div>
  );
}
