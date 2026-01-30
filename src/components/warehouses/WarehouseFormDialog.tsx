// src/components/warehouses/WarehouseFormDialog.tsx
import React, { useEffect, useMemo, useState } from "react";
import type { Warehouse, WarehouseCreatePayload } from "../../types/warehouse";
import { useAuth } from "../../store/auth";
import { listBranches } from "../../api/branches";

type Props = {
  open: boolean;
  initial?: Warehouse | null;
  defaultCabangId?: number;
  onClose: () => void;
  onSubmit: (payload: WarehouseCreatePayload) => Promise<boolean>;
};

export default function WarehouseFormDialog({
  open,
  initial,
  defaultCabangId,
  onClose,
  onSubmit,
}: Props): React.ReactElement | null {
  const { user } = useAuth();
  const lockCabang = user?.role === "admin_cabang" && user.cabang_id;

  const [form, setForm] = useState<WarehouseCreatePayload>({
    cabang_id: defaultCabangId ?? 0,
    nama: "",
    is_default: false,
    is_active: true,
  });

  const [cabangs, setCabangs] = useState<{ id: number; nama: string }[]>([]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const title = useMemo(() => (initial ? "Edit Gudang" : "Tambah Gudang"), [initial]);

  // Load cabang saat dialog dibuka
  useEffect(() => {
    if (!open) return;
    void (async () => {
      const res = await listBranches({ is_active: true, per_page: 100 });
      setCabangs(res.data.map((b) => ({ id: b.id, nama: b.nama })));
    })();
  }, [open]);

  // Set preferensi cabang saat tambah (bukan edit)
  useEffect(() => {
    if (!open || initial) return;
    const prefer = (lockCabang as number) ?? (defaultCabangId ?? 0);
    setForm((s) => ({ ...s, cabang_id: prefer }));
  }, [open, initial, lockCabang, defaultCabangId]);

  // Isi form saat edit
  useEffect(() => {
    if (!open || !initial) return;
    setForm({
      cabang_id: initial.cabang_id,
      nama: initial.nama,
      is_default: Boolean(initial.is_default),
      is_active: Boolean(initial.is_active),
    });
  }, [open, initial]);

  // UX modal: lock scroll + ESC close
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const submit = async () => {
    setSaving(true);
    setError(null);

    if (!form.cabang_id) {
      setError("Cabang harus diisi.");
      setSaving(false);
      return;
    }
    if (!form.nama?.trim()) {
      setError("Nama gudang harus diisi.");
      setSaving(false);
      return;
    }

    const ok = await onSubmit({
      ...form,
      nama: form.nama.trim(),
    });

    setSaving(false);

    if (ok) onClose();
    else setError("Gagal menyimpan. Cek input.");
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="warehouse-dialog-title"
      onMouseDown={(e) => {
        // klik backdrop untuk tutup (tanpa ganggu klik di dalam card)
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        zIndex: 50,
      }}
    >
      <div
        className="card"
        style={{
          width: "100%",
          maxWidth: 720,
          borderRadius: 18,
          overflow: "hidden",
        }}
        onMouseDown={(e) => {
          // cegah backdrop handler ikut kepanggil ketika klik di dalam
          e.stopPropagation();
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 12,
            padding: "16px 18px",
            borderBottom: "1px solid rgba(0,0,0,.06)",
          }}
        >
          <div style={{ minWidth: 0 }}>
            <h3
              id="warehouse-dialog-title"
              className="card-title"
              style={{ margin: 0, lineHeight: 1.2 }}
            >
              {title}
            </h3>
            <div className="muted" style={{ marginTop: 6, fontSize: ".9rem" }}>
              Isi data gudang dengan benar. Cabang dapat terkunci sesuai role.
            </div>
          </div>

          <button
            type="button"
            className="button button-ghost"
            onClick={onClose}
            disabled={saving}
            aria-label="Tutup"
            title="Tutup"
            style={{
              padding: "0.35rem 0.6rem",
              borderRadius: 12,
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: "16px 18px" }}>
          <div className="form-row form-row--2" style={{ gap: 14 }}>
            <div>
              <label className="label">Cabang</label>
              <select
                className="select"
                value={form.cabang_id || ""}
                onChange={(e) =>
                  setForm({ ...form, cabang_id: Number(e.target.value) })
                }
                disabled={Boolean(lockCabang)}
                aria-disabled={Boolean(lockCabang)}
              >
                <option value="" disabled>
                  Pilih Cabang
                </option>
                {cabangs.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.nama}
                  </option>
                ))}
              </select>
              {Boolean(lockCabang) && (
                <div className="muted" style={{ marginTop: 6, fontSize: ".85rem" }}>
                  Cabang dikunci oleh role Anda.
                </div>
              )}
            </div>

            <div>
              <label className="label">Nama Gudang</label>
              <input
                className="input"
                placeholder="Contoh: Gudang Utama"
                value={form.nama}
                onChange={(e) => setForm({ ...form, nama: e.target.value })}
              />
            </div>

            {/* Switch-style rows */}
            <div
              style={{
                gridColumn: "1 / -1",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 10,
                  padding: "10px 12px",
                  border: "1px solid rgba(0,0,0,.08)",
                  borderRadius: 14,
                  background: "rgba(0,0,0,.02)",
                }}
              >
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: 700, lineHeight: 1.2 }}>Default</div>
                  <div className="muted" style={{ fontSize: ".85rem", marginTop: 4 }}>
                    Jadikan gudang default untuk cabang terpilih.
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={Boolean(form.is_default)}
                  onChange={(e) => setForm({ ...form, is_default: e.target.checked })}
                />
              </label>

              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 10,
                  padding: "10px 12px",
                  border: "1px solid rgba(0,0,0,.08)",
                  borderRadius: 14,
                  background: "rgba(0,0,0,.02)",
                }}
              >
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: 700, lineHeight: 1.2 }}>Aktif</div>
                  <div className="muted" style={{ fontSize: ".85rem", marginTop: 4 }}>
                    Nonaktifkan jika gudang tidak digunakan.
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={Boolean(form.is_active)}
                  onChange={(e) => setForm({ ...form, is_active: e.target.checked })}
                />
              </label>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div
              style={{
                marginTop: 12,
                display: "flex",
                alignItems: "flex-start",
                gap: 8,
              }}
              role="alert"
            >
              <span className="badge badge-danger">Error</span>
              <div style={{ lineHeight: 1.4 }}>{error}</div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div
          style={{
            padding: "14px 18px",
            borderTop: "1px solid rgba(0,0,0,.06)",
            display: "flex",
            justifyContent: "flex-end",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          <button className="button button-outline" onClick={onClose} disabled={saving}>
            Batal
          </button>
          <button className="button button-primary" onClick={submit} disabled={saving}>
            {saving ? "Menyimpan..." : "Simpan"}
          </button>
        </div>

        {/* Responsif: pada layar kecil, kartu checkbox jadi 1 kolom */}
        <style>
          {`
            @media (max-width: 640px) {
              [role="dialog"] .card div[style*="grid-template-columns: 1fr 1fr"] {
                grid-template-columns: 1fr !important;
              }
            }
          `}
        </style>
      </div>
    </div>
  );
}
