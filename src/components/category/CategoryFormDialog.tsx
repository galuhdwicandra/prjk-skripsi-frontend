// src/components/category/CategoryFormDialog.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import type {
  Category,
  CategoryCreatePayload,
  CategoryUpdatePayload,
} from "../../types/category";
import { slugify } from "../../lib/slug";

type Props = {
  open: boolean;
  initial?: Category | null;
  onClose: () => void;
  onSubmit: (
    payload: CategoryCreatePayload | CategoryUpdatePayload
  ) => Promise<boolean>;
};

export default function CategoryFormDialog({
  open,
  initial,
  onClose,
  onSubmit,
}: Props) {
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState<string>("");
  const [isActive, setIsActive] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]> | null>(null);

  const dialogRef = useRef<HTMLDivElement | null>(null);
  const firstInputRef = useRef<HTMLInputElement | null>(null);

  const isEdit = Boolean(initial);
  const title = isEdit ? "Edit Kategori" : "Tambah Kategori";
  const subtitle = isEdit
    ? "Perbarui informasi kategori dengan rapi."
    : "Buat kategori baru untuk pengelompokan produk.";

  const fieldError = useMemo(() => {
    const get = (k: string) => (errors?.[k] ? errors?.[k].join(", ") : "");
    return {
      nama: get("nama"),
      deskripsi: get("deskripsi"),
      _error: get("_error"),
    };
  }, [errors]);

  useEffect(() => {
    if (open) {
      setNama(initial?.nama ?? "");
      setDeskripsi(initial?.deskripsi ?? "");
      setIsActive(initial?.is_active ?? true);
      setErrors(null);
      setSubmitting(false);
    }
  }, [open, initial]);

  // UX: lock scroll + esc close + auto focus
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    // fokus input pertama
    window.setTimeout(() => {
      firstInputRef.current?.focus();
    }, 0);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrors(null);

    const nextSlug =
      initial && initial.nama.trim() === nama.trim() ? initial.slug : slugify(nama);

    const payload: CategoryCreatePayload | CategoryUpdatePayload = initial
      ? { nama, deskripsi: deskripsi || null, is_active: isActive, slug: nextSlug }
      : { nama, deskripsi, is_active: isActive, slug: nextSlug };

    try {
      const ok = await onSubmit(payload);
      if (ok) onClose();
    } catch (err) {
      const e = err as {
        status?: number;
        message?: string;
        errors?: Record<string, string[]>;
      };
      if (e?.errors) setErrors(e.errors);
      else setErrors({ _error: [e?.message ?? "Gagal menyimpan."] });
    } finally {
      setSubmitting(false);
    }
  };

  const onOverlayMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // klik di luar dialog menutup modal
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      onMouseDown={onOverlayMouseDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="category-dialog-title"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        background: "rgba(0,0,0,0.45)",
        backdropFilter: "blur(2px)",
      }}
    >
      <div
        ref={dialogRef}
        className="card"
        style={{
          width: "100%",
          maxWidth: 720,
          borderRadius: "var(--radius-xl)",
          overflow: "hidden",
          boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "1rem 1.25rem",
            borderBottom: "1px solid var(--color-border)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <div style={{ minWidth: 0 }}>
            <div
              id="category-dialog-title"
              style={{
                margin: 0,
                fontWeight: 900,
                letterSpacing: "-0.015em",
                fontSize: "1.1rem",
                lineHeight: 1.2,
              }}
            >
              {title}
            </div>
            <div
              style={{
                marginTop: ".25rem",
                color: "var(--color-text-soft)",
                fontSize: ".9rem",
              }}
            >
              {subtitle}
            </div>
          </div>

          <button
            type="button"
            className="button button-ghost"
            onClick={onClose}
            aria-label="Tutup dialog"
            style={{
              borderRadius: "999px",
              padding: ".5rem .7rem",
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} style={{ padding: "1.25rem" }}>
          {/* Error global */}
          {fieldError._error ? (
            <div
              role="alert"
              style={{
                marginBottom: "1rem",
                padding: ".85rem 1rem",
                borderRadius: "var(--radius-md)",
                border: "1px solid rgba(220,38,38,.25)",
                background: "rgba(220,38,38,.06)",
                color: "var(--color-danger)",
                fontWeight: 700,
              }}
            >
              {fieldError._error}
            </div>
          ) : null}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr .8fr",
              gap: "1rem",
            }}
          >
            {/* Nama */}
            <div style={{ minWidth: 0 }}>
              <label
                htmlFor="nama"
                style={{
                  display: "block",
                  fontSize: ".9rem",
                  fontWeight: 700,
                }}
              >
                Nama <span style={{ color: "var(--color-danger)" }}>*</span>
              </label>
              <input
                ref={firstInputRef}
                id="nama"
                className="input"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                required
                placeholder="Contoh: Minuman"
                aria-invalid={fieldError.nama ? "true" : "false"}
                style={{
                  width: "100%",
                  marginTop: ".4rem",
                  borderColor: fieldError.nama ? "rgba(220,38,38,.45)" : undefined,
                }}
              />
              {fieldError.nama ? (
                <div
                  style={{
                    marginTop: ".4rem",
                    color: "var(--color-danger)",
                    fontSize: ".85rem",
                  }}
                >
                  {fieldError.nama}
                </div>
              ) : (
                <div
                  style={{
                    marginTop: ".4rem",
                    color: "var(--color-text-soft)",
                    fontSize: ".85rem",
                  }}
                >
                  Nama kategori harus jelas dan singkat.
                </div>
              )}
            </div>

            {/* Aktif */}
            <div
              style={{
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: ".9rem 1rem",
                background: "rgba(0,0,0,0.01)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: ".5rem",
              }}
            >
              <div style={{ fontWeight: 800 }}>Status</div>
              <label
                htmlFor="is_active"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".6rem",
                  cursor: "pointer",
                  userSelect: "none",
                }}
              >
                <input
                  id="is_active"
                  type="checkbox"
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                />
                <span style={{ fontWeight: 700 }}>Aktif</span>
              </label>
              <div style={{ color: "var(--color-text-soft)", fontSize: ".85rem" }}>
                Nonaktifkan jika kategori tidak dipakai sementara.
              </div>
            </div>
          </div>

          {/* Deskripsi */}
          <div style={{ marginTop: "1rem" }}>
            <label
              htmlFor="deskripsi"
              style={{
                display: "block",
                fontSize: ".9rem",
                fontWeight: 700,
              }}
            >
              Deskripsi
            </label>
            <textarea
              id="deskripsi"
              className="textarea"
              rows={4}
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              placeholder="Opsional. Catatan singkat tentang kategori ini."
              aria-invalid={fieldError.deskripsi ? "true" : "false"}
              style={{
                width: "100%",
                marginTop: ".4rem",
                borderColor: fieldError.deskripsi
                  ? "rgba(220,38,38,.45)"
                  : undefined,
              }}
            />
            {fieldError.deskripsi ? (
              <div
                style={{
                  marginTop: ".4rem",
                  color: "var(--color-danger)",
                  fontSize: ".85rem",
                }}
              >
                {fieldError.deskripsi}
              </div>
            ) : null}
          </div>

          {/* Footer actions */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: ".75rem",
              flexWrap: "wrap",
              marginTop: "1.25rem",
              paddingTop: "1rem",
              borderTop: "1px solid var(--color-border)",
            }}
          >
            <div style={{ color: "var(--color-text-soft)", fontSize: ".9rem" }}>
              Slug dibuat otomatis dari nama kategori.
            </div>

            <div style={{ display: "flex", gap: ".6rem", flexWrap: "wrap" }}>
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
                disabled={submitting}
                style={{ minWidth: 120 }}
              >
                {submitting ? "Menyimpan…" : "Simpan"}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Responsif: modal jadi 1 kolom pada layar kecil */}
      <style>
        {`
          @media (max-width: 720px) {
            form > div[style*="grid-template-columns"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </div>
  );
}
