// src/pages/fees/FeeMaster.tsx
import React, { useEffect, useMemo, useState } from "react";
import type {
  Fee, FeeBase, FeeCalcType, FeeCreatePayload, FeeKind, FeeQuery, PaginatedResponse
} from "../../types/fees";
import { listFees, createFee, updateFee, deleteFee } from "../../api/fees";
import { listBranches } from "../../api/branches";
import type { Branch } from "../../types/branch";

type CabangOption = {
  id: number;
  name: string;
  kota?: string | null;
};

const KIND_OPTIONS: FeeKind[] = ["SALES", "CASHIER", "COURIER"];
const CALC_OPTIONS: FeeCalcType[] = ["PERCENT", "FIXED"];
const BASE_OPTIONS: FeeBase[] = ["GRAND_TOTAL", "DELIVERY"];

function useAsync<T>(fn: () => Promise<T>, deps: React.DependencyList) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setErr(null);
    fn()
      .then((res) => mounted && setData(res))
      .catch((e: unknown) => mounted && setErr(e instanceof Error ? e.message : "Error"))
      .finally(() => mounted && setLoading(false));
    return () => { mounted = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, loading, err, setData };
}

/* ---------- Form Dialog ---------- */
type FormMode = { type: "create" } | { type: "edit"; row: Fee };

function FeeFormDialog(props: {
  open: boolean;
  onClose: () => void;
  mode: FormMode;
  cabangOptions: CabangOption[];
  onSaved: (saved: Fee) => void;
}) {
  const { open, onClose, mode, cabangOptions, onSaved } = props;

  const initial: FeeCreatePayload = useMemo(() => {
    if (mode.type === "edit") {
      const r = mode.row;
      return {
        cabang_id: r.cabang_id,
        name: r.name,
        kind: r.kind,
        calc_type: r.calc_type,
        rate: r.rate,
        base: r.base,
        is_active: r.is_active,
      };
    }
    return {
      cabang_id: cabangOptions[0]?.id ?? 0,
      name: "",
      kind: "CASHIER",
      calc_type: "PERCENT",
      rate: 0,
      base: "GRAND_TOTAL",
      is_active: true,
    };
  }, [mode, cabangOptions]);

  const [values, setValues] = useState<FeeCreatePayload>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => { setValues(initial); setError(null); }, [initial, open]);

  function onChange<K extends keyof FeeCreatePayload>(key: K, val: FeeCreatePayload[K]) {
    setValues((v) => ({ ...v, [key]: val }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      if (!values.cabang_id || values.cabang_id <= 0) {
        throw new Error("Pilih cabang terlebih dahulu.");
      }

      if (values.calc_type === "PERCENT" && values.rate > 100) {
        throw new Error("Rate persentase tidak boleh lebih dari 100.");
      }
      const saved =
        mode.type === "edit"
          ? await updateFee(mode.row.id, values)
          : await createFee(values);
      onSaved(saved);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal menyimpan fee");
    } finally {
      setSubmitting(false);
    }
  }

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 40,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "rgba(0,0,0,.3)"
      }}
      aria-modal
      role="dialog"
    >
      <div className="card" style={{ width: "100%", maxWidth: 640 }}>
        <h2> {mode.type === "edit" ? "Edit Fee" : "Tambah Fee"} </h2>

        {error && (
          <div className="badge badge-danger" style={{ marginBottom: 8 }}>
            {error}
          </div>
        )}

        <form onSubmit={onSubmit}>
          <div className="form-row form-row--2">
            <div>
              <label>Cabang</label>
              <select
                className="select"
                value={values.cabang_id || ""}
                onChange={(e) => onChange("cabang_id", Number(e.target.value))}
                required
              >
                <option value="" disabled>
                  Pilih cabang
                </option>

                {cabangOptions.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                    {c.kota ? ` · ${c.kota}` : ""}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Nama</label>
              <input
                className="input"
                value={values.name}
                onChange={(e) => onChange("name", e.target.value)}
                required
                maxLength={100}
              />
            </div>
          </div>

          <div className="form-row form-row--3">
            <div>
              <label>Kind</label>
              <select
                className="select"
                value={values.kind}
                onChange={(e) => onChange("kind", e.target.value as typeof values.kind)}
              >
                {KIND_OPTIONS.map((k) => <option key={k} value={k}>{k}</option>)}
              </select>
            </div>

            <div>
              <label>Calc</label>
              <select
                className="select"
                value={values.calc_type}
                onChange={(e) => onChange("calc_type", e.target.value as typeof values.calc_type)}
              >
                {CALC_OPTIONS.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div>
              <label>Base</label>
              <select
                className="select"
                value={values.base}
                onChange={(e) => onChange("base", e.target.value as typeof values.base)}
              >
                {BASE_OPTIONS.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>
          </div>

          <div className="form-row form-row--2">
            <div>
              <label>{values.calc_type === "PERCENT" ? "Rate (%)" : "Rate (Rp)"}</label>
              <input
                type="number"
                step="0.01"
                min={0}
                className="input"
                value={values.rate}
                onChange={(e) => onChange("rate", Number(e.target.value))}
                required
              />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 8, paddingTop: 22 }}>
              <input
                id="fee-active"
                type="checkbox"
                checked={values.is_active}
                onChange={(e) => onChange("is_active", e.target.checked)}
              />
              <label htmlFor="fee-active" style={{ margin: 0 }}>Aktif</label>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 8 }}>
            <button
              type="button"
              className="button button-outline"
              onClick={onClose}
              disabled={submitting}
            >
              Batal
            </button>

            <button
              type="submit"
              className="button button-primary"
              disabled={submitting || cabangOptions.length === 0}
            >
              {submitting ? "Menyimpan..." : "Simpan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ---------- Table Row Actions ---------- */
function RowActions(props: {
  row: Fee;
  onEdit: (row: Fee) => void;
  onDelete: (row: Fee) => void;
}) {
  const { row, onEdit, onDelete } = props;
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      <button className="button button-outline" onClick={() => onEdit(row)}>Edit</button>
      <button className="button button-outline" onClick={() => onDelete(row)}>Delete</button>
    </div>
  );
}

/* ---------- Main Page ---------- */
export default function FeeMaster(): React.ReactElement {
  const [branches, setBranches] = useState<Branch[]>([]);
  const [branchesLoading, setBranchesLoading] = useState<boolean>(false);
  const [branchesError, setBranchesError] = useState<string | null>(null);

  const cabangOptions: CabangOption[] = useMemo(() => {
    return branches
      .filter((branch) => branch.is_active)
      .sort((a, b) => a.nama.localeCompare(b.nama, "id"))
      .map((branch) => ({
        id: branch.id,
        name: branch.nama,
        kota: branch.kota,
      }));
  }, [branches]);

  const [q, setQ] = useState<FeeQuery>({
    page: 1,
    per_page: 10,
    sort: "-created_at",
    cabang_id: undefined,
    is_active: undefined,
    kind: undefined,
    base: undefined,
    q: "",
  });

  const { data, loading, err, setData } = useAsync<PaginatedResponse<Fee>>(
    () => listFees(q),
    [q.page, q.per_page, q.sort, q.q, q.cabang_id, q.is_active, q.kind, q.base]
  );

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<FormMode>({ type: "create" });

  useEffect(() => {
    let alive = true;

    setBranchesLoading(true);
    setBranchesError(null);

    listBranches({
      is_active: true,
      per_page: 100,
      sort: "nama",
    })
      .then((res) => {
        if (!alive) return;
        setBranches(res.data ?? []);
      })
      .catch((e: unknown) => {
        if (!alive) return;
        setBranches([]);
        setBranchesError(
          e instanceof Error ? e.message : "Gagal memuat data cabang."
        );
      })
      .finally(() => {
        if (!alive) return;
        setBranchesLoading(false);
      });

    return () => {
      alive = false;
    };
  }, []);

  const cabangNameById = useMemo(() => {
    const map = new Map<number, string>();

    cabangOptions.forEach((cabang) => {
      map.set(
        cabang.id,
        `${cabang.name}${cabang.kota ? ` · ${cabang.kota}` : ""}`
      );
    });

    return map;
  }, [cabangOptions]);

  function refresh() {
    setQ((s) => ({ ...s }));
  }

  function onSaved(saved: Fee) {
    setData((prev) => {
      if (!prev) return prev;
      const idx = prev.data.findIndex((x) => x.id === saved.id);
      if (idx === -1) return prev;
      const next = { ...prev, data: [...prev.data] };
      next.data[idx] = saved;
      return next;
    });
    if (mode.type === "create") {
      setQ((s) => ({ ...s, page: 1, sort: "-created_at" }));
    }
  }

  async function onConfirmDelete(row: Fee) {
    if (!confirm(`Hapus fee "${row.name}"?`)) return;
    await deleteFee(row.id);
    refresh();
  }

  const total = data?.meta.total ?? 0;
  const current = data?.meta.current_page ?? 1;
  const last = data?.meta.last_page ?? 1;

  return (
    <div>
      {/* Header */}
      <div className="card" style={{ marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <h1>Fees (Master)</h1>
          <button
            className="button button-primary"
            onClick={() => { setMode({ type: "create" }); setOpen(true); }}
          >
            + Tambah
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="card" style={{ marginBottom: 12 }}>
        <div className="form-row form-row--3">
          <div>
            <label>Cabang</label>
            <select
              className="select"
              value={q.cabang_id ?? ""}
              disabled={branchesLoading}
              onChange={(e) =>
                setQ((s) => ({
                  ...s,
                  page: 1,
                  cabang_id: e.target.value ? Number(e.target.value) : undefined,
                }))
              }
            >
              <option value="">
                {branchesLoading ? "Memuat cabang..." : "Semua Cabang"}
              </option>

              {cabangOptions.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                  {c.kota ? ` · ${c.kota}` : ""}
                </option>
              ))}
            </select>

            {branchesError && (
              <div style={{ marginTop: 6, color: "var(--color-danger, #b91c1c)", fontSize: 13 }}>
                {branchesError}
              </div>
            )}
          </div>

          <div>
            <label>Kind</label>
            <select
              className="select"
              value={q.kind ?? ""}
              onChange={(e) =>
                setQ((s) => ({ ...s, page: 1, kind: e.target.value ? (e.target.value as typeof s.kind) : undefined }))
              }
            >
              <option value="">(All)</option>
              {KIND_OPTIONS.map((k) => <option key={k} value={k}>{k}</option>)}
            </select>
          </div>

          <div>
            <label>Base</label>
            <select
              className="select"
              value={q.base ?? ""}
              onChange={(e) =>
                setQ((s) => ({ ...s, page: 1, base: e.target.value ? (e.target.value as typeof s.base) : undefined }))
              }
            >
              <option value="">(All)</option>
              {BASE_OPTIONS.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>
        </div>

        <div className="form-row form-row--2" style={{ marginTop: 8 }}>
          <div>
            <label>Status</label>
            <select
              className="select"
              value={q.is_active === undefined ? "" : q.is_active ? "1" : "0"}
              onChange={(e) => {
                const v = e.target.value;
                setQ((s) => ({ ...s, page: 1, is_active: v === "" ? undefined : v === "1" }));
              }}
            >
              <option value="">(All)</option>
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>
          </div>

          <div>
            <label>Search</label>
            <input
              className="input"
              placeholder="Cari nama…"
              value={q.q ?? ""}
              onChange={(e) => setQ((s) => ({ ...s, page: 1, q: e.target.value }))}
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="card">
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Cabang</th>
                <th>Nama</th>
                <th>Kind</th>
                <th>Calc</th>
                <th style={{ textAlign: "right" }}>Rate</th>
                <th>Base</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr><td colSpan={8}>Loading…</td></tr>
              )}
              {err && !loading && (
                <tr><td colSpan={8} style={{ color: "var(--color-danger, #b91c1c)" }}>{err}</td></tr>
              )}
              {!loading && !err && (data?.data.length ?? 0) === 0 && (
                <tr><td colSpan={8}>Tidak ada data.</td></tr>
              )}

              {data?.data.map((r) => (
                <tr key={r.id}>
                  <td>
                    {cabangNameById.get(r.cabang_id) ?? `Cabang #${r.cabang_id}`}
                  </td>
                  <td>{r.name}</td>
                  <td>{r.kind}</td>
                  <td>{r.calc_type}</td>
                  <td style={{ textAlign: "right" }}>
                    {r.calc_type === "PERCENT" ? `${r.rate}%` : new Intl.NumberFormat("id-ID").format(r.rate)}
                  </td>
                  <td>{r.base}</td>
                  <td>
                    {r.is_active ? (
                      <span className="badge badge-success">Active</span>
                    ) : (
                      <span className="badge badge-danger">Inactive</span>
                    )}
                  </td>
                  <td>
                    <RowActions
                      row={r}
                      onEdit={(row) => { setMode({ type: "edit", row }); setOpen(true); }}
                      onDelete={onConfirmDelete}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="card" style={{ marginTop: 12 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <div>Total: {total}</div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <button
              className="button"
              onClick={() => setQ((s) => ({ ...s, page: Math.max(1, (s.page ?? 1) - 1) }))}
              disabled={current <= 1}
            >
              Prev
            </button>
            <div>Page {current} / {last}</div>
            <button
              className="button"
              onClick={() => setQ((s) => ({ ...s, page: Math.min(last, (s.page ?? 1) + 1) }))}
              disabled={current >= last}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Form */}
      <FeeFormDialog
        open={open}
        onClose={() => setOpen(false)}
        mode={mode}
        cabangOptions={cabangOptions}
        onSaved={onSaved}
      />
    </div>
  );
}
