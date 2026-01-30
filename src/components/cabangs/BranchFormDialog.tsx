// src/components/cabangs/BranchFormDialog.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import type { Branch, BranchCreatePayload } from "../../types/branch";

type Props = {
  open: boolean;
  initial?: Branch | null;
  onClose: () => void;
  onSubmit: (payload: BranchCreatePayload) => Promise<boolean>;
};

const HARI = [
  { v: "Senin–Jumat", label: "Senin–Jumat" },
  { v: "Senin–Sabtu", label: "Senin–Sabtu" },
  { v: "Senin–Minggu", label: "Senin–Minggu" },
] as const;

function parseJamOperasional(
  input?: string | null
): { hari: string; openAt: string; closeAt: string } | null {
  if (!input) return null;
  // Pola: "Senin–Minggu 08:00-21:00"
  const m = input.match(/^(.+?)\s+(\d{2}:\d{2})-(\d{2}:\d{2})$/);
  if (!m) return null;
  const [, hari, openAt, closeAt] = m;
  return { hari, openAt, closeAt };
}

export default function BranchFormDialog({
  open,
  initial,
  onClose,
  onSubmit,
}: Props): React.ReactElement | null {
  const [form, setForm] = useState<BranchCreatePayload>({
    nama: "",
    kota: "",
    alamat: "",
    telepon: "",
    jam_operasional: "",
    is_active: true,
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // State builder jam operasional
  const [hari, setHari] = useState<string>("Senin–Minggu");
  const [openAt, setOpenAt] = useState<string>("08:00");
  const [closeAt, setCloseAt] = useState<string>("21:00");

  const panelRef = useRef<HTMLDivElement | null>(null);

  // Gabungkan builder -> form.jam_operasional
  useEffect(() => {
    setForm((s) => ({ ...s, jam_operasional: `${hari} ${openAt}-${closeAt}` }));
  }, [hari, openAt, closeAt]);

  // Inisialisasi saat dialog dibuka (create/edit)
  useEffect(() => {
    if (!open) return;

    if (initial) {
      setForm({
        nama: initial.nama,
        kota: initial.kota,
        alamat: initial.alamat,
        telepon: initial.telepon ?? "",
        jam_operasional: initial.jam_operasional ?? "",
        is_active: initial.is_active,
      });

      const parsed = parseJamOperasional(initial.jam_operasional);
      if (parsed) {
        setHari(parsed.hari);
        setOpenAt(parsed.openAt);
        setCloseAt(parsed.closeAt);
      } else {
        setHari("Senin–Minggu");
        setOpenAt("08:00");
        setCloseAt("21:00");
      }
    } else {
      setForm({
        nama: "",
        kota: "",
        alamat: "",
        telepon: "",
        jam_operasional: "Senin–Minggu 08:00-21:00",
        is_active: true,
      });
      setHari("Senin–Minggu");
      setOpenAt("08:00");
      setCloseAt("21:00");
    }

    setError(null);

    // fokuskan ke panel modal agar UX enak (tanpa mengubah logika)
    setTimeout(() => {
      panelRef.current?.focus();
    }, 0);
  }, [open, initial]);

  // Tutup dengan ESC (UX standar)
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !saving) {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, saving, onClose]);

  const valid = useMemo(() => {
    if (!form.nama?.trim()) return false;
    if (!form.kota?.trim()) return false;
    if (!form.alamat?.trim()) return false;
    if (!/^\d{2}:\d{2}$/.test(openAt) || !/^\d{2}:\d{2}$/.test(closeAt)) return false;
    return openAt < closeAt; // string compare works for HH:MM
  }, [form.nama, form.kota, form.alamat, openAt, closeAt]);

  if (!open) return null;

  const submit = async (): Promise<void> => {
    setSaving(true);
    setError(null);
    try {
      if (!valid) {
        setSaving(false);
        setError(
          "Form belum valid. Pastikan nama/kota/alamat terisi dan jam buka < jam tutup."
        );
        return;
      }
      const ok = await onSubmit(form);
      setSaving(false);
      if (ok) onClose();
      else setError("Gagal menyimpan. Cek input.");
    } catch {
      setSaving(false);
      setError("Terjadi kesalahan saat menyimpan.");
    }
  };

  const title = initial ? "Edit Cabang" : "Tambah Cabang";
  const subtitle = initial
    ? "Perbarui informasi cabang. Pastikan jam operasional sesuai."
    : "Tambahkan cabang baru. Isi data dengan lengkap dan benar.";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        background: "rgba(2, 6, 23, 0.55)",
        backdropFilter: "blur(6px)",
      }}
      aria-modal="true"
      role="dialog"
      aria-label={title}
      onMouseDown={(e) => {
        // Klik backdrop untuk tutup (tanpa ganggu interaksi dalam panel)
        if (e.target === e.currentTarget && !saving) onClose();
      }}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        className="card"
        style={{
          width: "100%",
          maxWidth: 720,
          borderRadius: 18,
          padding: 0,
          overflow: "hidden",
          outline: "none",
          boxShadow: "0 24px 80px rgba(0,0,0,0.35)",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "1.1rem 1.1rem",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 12,
            borderBottom: "1px solid rgba(0,0,0,0.06)",
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.00))",
          }}
        >
          <div style={{ minWidth: 0 }}>
            <div className="h3" style={{ margin: 0 }}>
              {title}
            </div>
            <div className="text-sm" style={{ marginTop: 6, opacity: 0.75 }}>
              {subtitle}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            <button
              className="button button-outline"
              onClick={onClose}
              disabled={saving}
              title="Tutup"
              style={{ borderRadius: 12 }}
            >
              Tutup
            </button>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "1.1rem" }}>
          {/* Error banner */}
          {error && (
            <div
              className="card"
              style={{
                padding: "0.75rem 0.9rem",
                borderRadius: 14,
                marginBottom: "0.9rem",
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
              }}
            >
              <span className="badge badge-danger">Error</span>
              <div style={{ fontSize: 14, opacity: 0.95, lineHeight: 1.45 }}>
                {error}
              </div>
            </div>
          )}

          {/* Section: Identitas Cabang */}
          <div style={{ marginBottom: "1rem" }}>
            <div style={{ fontWeight: 800, letterSpacing: "-0.01em" }}>
              Informasi Cabang
            </div>
            <div className="text-sm" style={{ marginTop: 4, opacity: 0.72 }}>
              Data dasar untuk identifikasi cabang.
            </div>

            <div
              style={{
                marginTop: "0.85rem",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.8rem",
              }}
            >
              <div>
                <label className="label">Nama</label>
                <input
                  className="input"
                  placeholder="Contoh: Cabang Utama"
                  value={form.nama}
                  onChange={(e) => setForm({ ...form, nama: e.target.value })}
                />
              </div>

              <div>
                <label className="label">Kota</label>
                <input
                  className="input"
                  placeholder="Contoh: Bandung"
                  value={form.kota}
                  onChange={(e) => setForm({ ...form, kota: e.target.value })}
                />
              </div>

              <div style={{ gridColumn: "1 / -1" }}>
                <label className="label">Alamat</label>
                <input
                  className="input"
                  placeholder="Alamat lengkap cabang"
                  value={form.alamat}
                  onChange={(e) => setForm({ ...form, alamat: e.target.value })}
                />
              </div>

              <div>
                <label className="label">Telepon</label>
                <input
                  className="input"
                  placeholder="Opsional"
                  value={form.telepon ?? ""}
                  onChange={(e) => setForm({ ...form, telepon: e.target.value })}
                />
              </div>

              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <label
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    userSelect: "none",
                    padding: "0.6rem 0.75rem",
                    borderRadius: 14,
                    border: "1px solid rgba(0,0,0,0.08)",
                    background: "rgba(0,0,0,0.02)",
                    width: "100%",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={Boolean(form.is_active)}
                    onChange={(e) =>
                      setForm({ ...form, is_active: e.target.checked })
                    }
                  />
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontWeight: 700, lineHeight: 1.2 }}>Aktif</div>
                    <div className="text-sm" style={{ opacity: 0.7, marginTop: 2 }}>
                      Nonaktifkan jika cabang tidak beroperasi.
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Section Divider */}
          <div style={{ height: 1, background: "rgba(0,0,0,0.06)", margin: "1rem 0" }} />

          {/* Section: Jam Operasional */}
          <div>
            <div style={{ fontWeight: 800, letterSpacing: "-0.01em" }}>Jam Operasional</div>
            <div className="text-sm" style={{ marginTop: 4, opacity: 0.72 }}>
              Nilai akan tersimpan sebagai format tunggal.
            </div>

            <div
              style={{
                marginTop: "0.85rem",
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr 1fr",
                gap: "0.8rem",
              }}
            >
              <div>
                <label className="label">Hari</label>
                <select className="select" value={hari} onChange={(e) => setHari(e.target.value)}>
                  {HARI.map((h) => (
                    <option key={h.v} value={h.v}>
                      {h.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="label">Buka</label>
                <input
                  type="time"
                  className="input"
                  value={openAt}
                  onChange={(e) => setOpenAt(e.target.value)}
                />
              </div>

              <div>
                <label className="label">Tutup</label>
                <input
                  type="time"
                  className="input"
                  value={closeAt}
                  onChange={(e) => setCloseAt(e.target.value)}
                />
              </div>

              <div
                style={{
                  gridColumn: "1 / -1",
                  borderRadius: 14,
                  border: "1px solid rgba(0,0,0,0.06)",
                  background: "rgba(0,0,0,0.02)",
                  padding: "0.75rem 0.9rem",
                }}
              >
                <div className="text-sm" style={{ opacity: 0.7 }}>
                  Tersimpan sebagai
                </div>
                <div
                  style={{
                    marginTop: 6,
                    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                    fontSize: 13,
                    opacity: 0.9,
                    wordBreak: "break-word",
                  }}
                >
                  {form.jam_operasional || "-"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div
          style={{
            padding: "1rem 1.1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            borderTop: "1px solid rgba(0,0,0,0.06)",
            background: "rgba(0,0,0,0.01)",
          }}
        >
          <div className="text-sm" style={{ opacity: 0.7 }}>
            {saving ? "Menyimpan perubahan…" : valid ? "Siap disimpan." : "Lengkapi form untuk menyimpan."}
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
            <button className="button button-outline" onClick={onClose} disabled={saving}>
              Batal
            </button>
            <button className="button button-primary" onClick={submit} disabled={saving || !valid}>
              {saving ? "Menyimpan..." : "Simpan"}
            </button>
          </div>
        </div>

        {/* Responsif */}
        <style>
          {`
            @media (max-width: 720px) {
              .card[style*="max-width: 720"] { border-radius: 16px !important; }
            }
            @media (max-width: 640px) {
              /* Grid 2 kolom -> 1 kolom */
              div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
              div[style*="grid-template-columns: 1.2fr 1fr 1fr"] { grid-template-columns: 1fr !important; }
            }
          `}
        </style>
      </div>
    </div>
  );
}
