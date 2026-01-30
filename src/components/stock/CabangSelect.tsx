// src/components/stock/CabangSelect.tsx
import { useEffect, useMemo, useRef, useState } from "react";
import type { Branch, BranchQuery } from "../../types/branch";
import { listBranches } from "../../api/branches";
import { useAuth } from "../../store/auth";

type Props = {
  value?: number; // selected cabang_id (controlled by parent)
  onChange: (id: number | undefined) => void;
  disabled?: boolean;
  allowAll?: boolean; // show “Semua Cabang” option when not locked
};

function getErrMsg(e: unknown, fallback = "Gagal memuat cabang."): string {
  if (typeof e === "string") return e;
  if (e && typeof e === "object" && "message" in e) {
    const m = (e as { message?: unknown }).message;
    if (typeof m === "string") return m;
  }
  return fallback;
}

export default function CabangSelect({
  value,
  onChange,
  disabled,
  allowAll,
}: Props): React.ReactElement {
  const { user } = useAuth();
  const [rows, setRows] = useState<Branch[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Determine if user is locked to a cabang (admin_cabang / gudang)
  const lockedCabangId = useMemo<number | undefined>(() => {
    if (!user) return undefined;
    const role = user.role;
    if ((role === "admin_cabang" || role === "gudang") && user.cabang_id != null) {
      return user.cabang_id;
    }
    return undefined;
  }, [user]);

  // Fetch list of active branches (once)
  useEffect(() => {
    let alive = true;
    setLoading(true);
    setError(null);

    const q: BranchQuery = { is_active: true, per_page: 100 };

    listBranches(q)
      .then((res) => {
        if (!alive) return;
        setRows(res.data ?? []);
      })
      .catch((e: unknown) => {
        if (!alive) return;
        setError(getErrMsg(e));
      })
      .finally(() => {
        if (!alive) return;
        setLoading(false);
      });

    return () => {
      alive = false;
    };
  }, []);

  // If locked, ensure parent value matches lock, but emit only when it actually differs (once)
  const lastEmittedRef = useRef<number | undefined>(undefined);
  useEffect(() => {
    if (lockedCabangId == null) return;
    if (value === lockedCabangId) return;
    if (lastEmittedRef.current === lockedCabangId) return;

    lastEmittedRef.current = lockedCabangId;
    onChange(lockedCabangId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lockedCabangId, value]);

  // Stable, nicely sorted options
  const options = useMemo(() => {
    const sorted = [...rows].sort((a, b) => a.nama.localeCompare(b.nama, "id"));
    return sorted;
  }, [rows]);

  // Compute the current value for the <select>
  const selectedValue: number | "" =
    lockedCabangId != null ? lockedCabangId : value ?? "";

  // Disable when locked or loading or externally disabled
  const isDisabled = Boolean(disabled || loading || lockedCabangId != null);

  // Label kecil untuk status (locked / loading)
  const statusHint = useMemo(() => {
    if (loading) return "Memuat daftar cabang…";
    if (lockedCabangId != null) return "Cabang dikunci sesuai akun Anda.";
    return null;
  }, [loading, lockedCabangId]);

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div style={{ position: "relative" }}>
        <select
          className="select"
          value={selectedValue}
          disabled={isDisabled}
          aria-label="Pilih Cabang"
          aria-busy={loading}
          onChange={(e) => {
            const v = e.target.value;
            const next = v === "" ? undefined : Number(v);
            if (next === value) return;
            onChange(next);
          }}
          style={{
            width: "100%",
            paddingRight: "2.5rem", // ruang untuk ikon di kanan
            opacity: isDisabled ? 0.9 : 1,
          }}
        >
          {/* Placeholder saat belum ada pilihan (dan tidak lock) */}
          {lockedCabangId == null && !allowAll && (
            <option value="" disabled>
              Pilih cabang…
            </option>
          )}

          {/* “Semua Cabang” only when not locked */}
          {allowAll && lockedCabangId == null && <option value="">Semua Cabang</option>}

          {/* Loading placeholder (tetap tampil, tapi tidak ganggu opsi) */}
          {loading && (
            <option value="" disabled>
              Memuat cabang…
            </option>
          )}

          {/* If locked, show only the locked cabang */}
          {lockedCabangId != null
            ? options
                .filter((r) => r.id === lockedCabangId)
                .map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.nama}
                    {r.kota ? ` · ${r.kota}` : ""}
                  </option>
                ))
            : options.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.nama}
                  {r.kota ? ` · ${r.kota}` : ""}
                </option>
              ))}
        </select>

        {/* ikon status di kanan (tanpa library icon) */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            right: 10,
            top: "50%",
            transform: "translateY(-50%)",
            width: 18,
            height: 18,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 999,
            border: "1px solid rgba(0,0,0,0.10)",
            background: "rgba(0,0,0,0.03)",
            fontSize: 11,
            opacity: 0.8,
          }}
          title={lockedCabangId != null ? "Locked" : loading ? "Loading" : "Select"}
        >
          {lockedCabangId != null ? "🔒" : loading ? "…" : "⌄"}
        </span>
      </div>

      {/* Hint halus */}
      {statusHint && (
        <div className="text-dim" style={{ fontSize: ".85rem" }}>
          {statusHint}
        </div>
      )}

      {/* Error */}
      {error && (
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
            padding: "10px 12px",
            borderRadius: 12,
            border: "1px solid rgba(239,68,68,0.25)",
            background: "rgba(239,68,68,0.06)",
          }}
        >
          <span className="badge badge-danger">Error</span>
          <div style={{ lineHeight: 1.35 }}>{error}</div>
        </div>
      )}
    </div>
  );
}
