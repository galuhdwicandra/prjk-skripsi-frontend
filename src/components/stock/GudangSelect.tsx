// src/components/stock/GudangSelect.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import type { Warehouse as BaseWarehouse } from "../../types/warehouse";
import { listWarehouses } from "../../api/warehouses";

type Warehouse = BaseWarehouse & { is_default?: boolean | null };

type Props = {
  cabangId?: number;
  value?: number;
  onChange: (id: number | undefined) => void;
  disabled?: boolean;
  allowAll?: boolean;
  autoSelectFirst?: boolean;
};

export default React.memo(function GudangSelect({
  cabangId,
  value,
  onChange,
  disabled,
  allowAll = false,
  autoSelectFirst = true,
}: Props) {
  const [rows, setRows] = useState<Warehouse[]>([]);
  const [loading, setLoading] = useState(false);

  // rows yang sedang berlaku untuk cabang mana
  const rowsForCabangRef = useRef<number | undefined>(undefined);
  // catat cabang yang sudah pernah auto-select (sekali per cabang)
  const lastAutoSelectedCabangRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    setRows([]);
    rowsForCabangRef.current = undefined;
    lastAutoSelectedCabangRef.current = undefined;

    if (!cabangId || cabangId <= 0) return;

    let alive = true;
    setLoading(true);

    listWarehouses({ cabang_id: cabangId, is_active: true, per_page: 100 })
      .then((res) => {
        if (!alive) return;
        const data = (res?.data ?? []) as Warehouse[];
        rowsForCabangRef.current = cabangId;
        setRows(data);
      })
      .catch(() => {
        // dropdown: fail-soft (tidak menampilkan error di sini)
      })
      .finally(() => {
        if (alive) setLoading(false);
      });

    return () => {
      alive = false;
    };
  }, [cabangId]);

  // auto-select default/first (opsional)
  useEffect(() => {
    if (!cabangId || cabangId <= 0) return;
    if (!rows.length) return;
    if (!autoSelectFirst) return;
    if (allowAll) return;
    if (typeof value === "number" && value > 0) return;
    if (rowsForCabangRef.current !== cabangId) return;
    if (lastAutoSelectedCabangRef.current === cabangId) return;

    const def = rows.find((r) => !!r.is_default) ?? rows[0];
    if (!def?.id) return;
    if (def.id === value) return;

    lastAutoSelectedCabangRef.current = cabangId;
    onChange(def.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows, cabangId, value, allowAll, autoSelectFirst]);

  const opts = useMemo(() => {
    // sort konsisten (id locale)
    return [...rows].sort((a, b) => a.nama.localeCompare(b.nama, "id"));
  }, [rows]);

  const selected = typeof value === "number" && value > 0 ? String(value) : "";

  const cabangReady = Boolean(cabangId && cabangId > 0);
  const isDisabled = Boolean(disabled || !cabangReady || loading);

  // placeholder label yang lebih jelas
  const placeholder = !cabangReady
    ? "Pilih cabang dulu"
    : loading
      ? "Memuat gudang…"
      : allowAll
        ? "Semua Gudang"
        : "Pilih gudang";

  return (
    <select
      className="select"
      value={selected}
      disabled={isDisabled}
      onChange={(e) => {
        const next = e.target.value ? Number(e.target.value) : undefined;
        if (next === value) return;
        onChange(next);
      }}
      aria-label="Pilih Gudang"
    >
      {/* Placeholder: selalu tampil sebagai opsi kosong untuk UX yang konsisten */}
      <option value="">{placeholder}</option>

      {/* Jika allowAll=true, placeholder di atas sudah mewakili "Semua Gudang" */}
      {/* Jika allowAll=false, placeholder di atas mewakili "Pilih gudang" */}

      {opts.map((g) => {
        const label = `${g.nama}${g.is_default ? " (default)" : ""}`;
        return (
          <option
            key={g.id}
            value={String(g.id)}
            title={g.is_default ? "Gudang default" : undefined}
          >
            {label}
          </option>
        );
      })}
    </select>
  );
});
