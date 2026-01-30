// src/components/warehouses/WarehouseFilters.tsx
import React, { useEffect, useMemo, useState } from "react";
import type { WarehouseQuery } from "../../types/warehouse";
import { listBranches } from "../../api/branches";
import { useAuth } from "../../store/auth";

type Props = {
  value: WarehouseQuery;
  onChange: (next: WarehouseQuery) => void;
  onSearch: () => void;
};

export default function WarehouseFilters({
  value,
  onChange,
  onSearch,
}: Props): React.ReactElement {
  const { user } = useAuth();

  const [cabs, setCabs] = useState<{ id: number; nama: string }[]>([]);
  const [loadingCabang, setLoadingCabang] = useState(false);

  useEffect(() => {
    let mounted = true;

    void (async () => {
      setLoadingCabang(true);
      try {
        const res = await listBranches({ is_active: true, per_page: 100 });
        if (!mounted) return;
        setCabs(res.data.map((b) => ({ id: b.id, nama: b.nama })));
      } finally {
        if (mounted) setLoadingCabang(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  const lockCabang = user?.role === "admin_cabang" && user.cabang_id;
  const cabangValue = useMemo(() => {
    if (lockCabang) return String(lockCabang);
    return String(value.cabang_id ?? "");
  }, [lockCabang, value.cabang_id]);

  return (
    <div>
      {/* Grid utama filter */}
      <div
        className="form-row form-row--3"
        style={{
          alignItems: "end",
          gap: 12,
        }}
      >
        {/* Cari */}
        <div className="form-field" style={{ minWidth: 220 }}>
          <label className="form-label" htmlFor="wh-q">
            Cari
          </label>
          <input
            id="wh-q"
            className="input"
            value={value.q ?? ""}
            onChange={(e) =>
              onChange({
                ...value,
                q: e.target.value,
                page: 1,
              })
            }
            placeholder="Cari nama gudang…"
            autoComplete="off"
          />
        </div>

        {/* Cabang */}
        <div className="form-field" style={{ minWidth: 220 }}>
          <label className="form-label" htmlFor="wh-cabang">
            Cabang
          </label>

          <select
            id="wh-cabang"
            className="select"
            value={cabangValue}
            onChange={(e) =>
              onChange({
                ...value,
                cabang_id: e.target.value ? Number(e.target.value) : undefined,
                page: 1,
              })
            }
            disabled={Boolean(lockCabang) || loadingCabang}
            aria-busy={loadingCabang ? "true" : "false"}
          >
            {!lockCabang && (
              <option value="">
                {loadingCabang ? "Memuat cabang…" : "Semua Cabang"}
              </option>
            )}

            {cabs.map((c) => (
              <option key={c.id} value={c.id}>
                {c.nama}
              </option>
            ))}
          </select>

          {lockCabang && (
            <div className="muted" style={{ marginTop: 6, fontSize: ".85rem" }}>
              Cabang dikunci sesuai akun admin cabang.
            </div>
          )}
        </div>

        {/* Aksi */}
        <div
          className="form-field"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          {/* Toggle aktif */}
          <label
            htmlFor="wh-active"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            <input
              id="wh-active"
              type="checkbox"
              checked={Boolean(value.is_active)}
              onChange={(e) =>
                onChange({
                  ...value,
                  is_active: e.target.checked ? true : undefined,
                  page: 1,
                })
              }
            />
            <span className="muted">Hanya aktif</span>
          </label>

          {/* Tombol aksi: Terapkan + Reset */}
          <div style={{ display: "flex", gap: 8, marginLeft: "auto" }}>
            <button
              type="button"
              className="button button-outline"
              onClick={() =>
                onChange({
                  ...value,
                  q: "",
                  cabang_id: lockCabang ? Number(lockCabang) : undefined,
                  is_active: undefined,
                  page: 1,
                })
              }
              title="Reset filter"
            >
              Reset
            </button>

            <button
              type="button"
              className="button button-primary"
              onClick={onSearch}
              title="Terapkan filter"
            >
              Terapkan
            </button>
          </div>
        </div>
      </div>

      {/* Catatan kecil (optional, tapi bikin tampilan lebih “premium”) */}
      <div className="muted" style={{ marginTop: 10, fontSize: ".85rem" }}>
        Tips: ketik kata kunci lalu klik <b>Terapkan</b>.
      </div>

      {/* Responsif: rapikan agar tidak "maksa 3 kolom" di layar kecil */}
      <style>
        {`
          @media (max-width: 900px) {
            .form-row.form-row--3 {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </div>
  );
}
