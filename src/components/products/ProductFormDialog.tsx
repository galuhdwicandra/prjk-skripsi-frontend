// src/components/products/ProductFormDialog.tsx
import React, { useEffect, useMemo, useState } from "react";
import type {
  Product,
  ProductCreatePayload,
  ProductUpdatePayload,
} from "../../types/product";

type Props = {
  open: boolean;
  initial?: Product | null;
  categories: Array<{ id: number; nama: string }>;
  onClose: () => void;
  onSubmit: (
    payload: ProductCreatePayload | ProductUpdatePayload
  ) => Promise<boolean>;
};

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export default function ProductFormDialog({
  open,
  initial,
  categories,
  onClose,
  onSubmit,
}: Props): React.ReactElement | null {
  const isEdit = !!initial?.id;

  const [form, setForm] = useState<ProductCreatePayload>({
    category_id: initial?.category_id ?? (categories[0]?.id ?? 0),
    nama: initial?.nama ?? "",
    slug: initial?.slug ?? "",
    deskripsi: initial?.deskripsi ?? "",
    is_active: initial?.is_active ?? true,
  });

  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      setForm({
        category_id: initial?.category_id ?? (categories[0]?.id ?? 0),
        nama: initial?.nama ?? "",
        slug: initial?.slug ?? "",
        deskripsi: initial?.deskripsi ?? "",
        is_active: initial?.is_active ?? true,
      });
      setErr(null);
    }
  }, [open, initial, categories]);

  const autoSlug = useMemo(
    () => (form.nama ? slugify(form.nama) : ""),
    [form.nama]
  );

  // Lock scroll + ESC close (UI-only improvement)
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setErr(null);

    const payload: ProductCreatePayload | ProductUpdatePayload = {
      category_id: form.category_id,
      nama: form.nama.trim(),
      slug: (form.slug && form.slug.trim()) || autoSlug,
      deskripsi: form.deskripsi || null,
      is_active: form.is_active,
    };

    const ok = await onSubmit(payload).catch((e) => {
      setErr(e?.message || "Gagal menyimpan.");
      return false;
    });

    setSaving(false);
    if (ok) onClose();
  }

  if (!open) return null;

  const titleText = isEdit ? "Edit Produk" : "Tambah Produk";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-form-title"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background:
          "radial-gradient(900px 500px at 20% 10%, rgba(192,70,87,0.18), transparent 55%), rgba(0,0,0,0.42)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(10px, 2vw, 16px)",
      }}
      onMouseDown={(e) => {
        // click on overlay closes; click inside should not
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="card"
        onMouseDown={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: 760,
          padding: 0,
          overflow: "hidden",
          borderRadius: "var(--radius-xl)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "var(--space-4) var(--space-5)",
            borderBottom: "1px solid var(--color-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--space-3)",
          }}
        >
          <div style={{ minWidth: 0 }}>
            <div
              id="product-form-title"
              style={{
                fontWeight: 900,
                letterSpacing: "-0.01em",
                fontSize: "1.05rem",
                lineHeight: 1.2,
              }}
            >
              {titleText}
            </div>
            <div className="text-dim" style={{ fontSize: ".9rem", marginTop: 4 }}>
              Isi detail produk dengan rapi. Slug dapat dibuat otomatis.
            </div>
          </div>

          <button
            type="button"
            className="button button-ghost"
            onClick={onClose}
            aria-label="Tutup dialog"
            style={{
              borderRadius: "999px",
              padding: "0.5rem 0.75rem",
              whiteSpace: "nowrap",
            }}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: "var(--space-5)" }}>
          <div className="form-row form-row--2">
            <label className="form-field">
              <span className="label">Kategori</span>
              <select
                className="select"
                value={form.category_id}
                onChange={(e) =>
                  setForm((f) => ({ ...f, category_id: Number(e.target.value) }))
                }
                required
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.nama}
                  </option>
                ))}
              </select>
            </label>

            <label className="form-field">
              <span className="label">Nama</span>
              <input
                className="input"
                value={form.nama}
                onChange={(e) =>
                  setForm((f) => ({ ...f, nama: e.target.value }))
                }
                required
                placeholder="Contoh: Kopi Susu 250ml"
              />
            </label>
          </div>

          <div className="form-row" style={{ marginTop: "var(--space-3)" }}>
            <label className="form-field" style={{ width: "100%" }}>
              <span className="label">Slug</span>

              <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
                <input
                  className="input"
                  placeholder={autoSlug}
                  value={form.slug ?? ""}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, slug: e.target.value }))
                  }
                  style={{ flex: 1, minWidth: 240 }}
                />

                <button
                  type="button"
                  className="button button-outline"
                  disabled={!autoSlug || saving}
                  onClick={() =>
                    setForm((f) => ({ ...f, slug: autoSlug }))
                  }
                  style={{ whiteSpace: "nowrap" }}
                  title="Gunakan slug otomatis"
                >
                  Pakai Otomatis
                </button>
              </div>

              <span className="help-text">
                Kosongkan untuk otomatis: <b>{autoSlug || "-"}</b>
              </span>
            </label>
          </div>

          <div className="form-row" style={{ marginTop: "var(--space-3)" }}>
            <label className="form-field" style={{ width: "100%" }}>
              <span className="label">Deskripsi</span>
              <textarea
                className="textarea"
                rows={4}
                value={form.deskripsi ?? ""}
                onChange={(e) =>
                  setForm((f) => ({ ...f, deskripsi: e.target.value }))
                }
                placeholder="Opsional. Tambahkan informasi singkat tentang produk."
              />
            </label>
          </div>

          <div
            style={{
              marginTop: "var(--space-3)",
              padding: "var(--space-3)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-lg)",
              background: "rgba(15,23,42,0.015)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "var(--space-3)",
              flexWrap: "wrap",
            }}
          >
            <div style={{ minWidth: 0 }}>
              <div style={{ fontWeight: 800 }}>Status Produk</div>
              <div className="text-dim" style={{ fontSize: ".9rem", marginTop: 2 }}>
                Nonaktifkan jika produk tidak ingin ditampilkan/dijual.
              </div>
            </div>

            <label
              className="form-field"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                margin: 0,
              }}
            >
              <input
                type="checkbox"
                checked={!!form.is_active}
                onChange={(e) =>
                  setForm((f) => ({ ...f, is_active: e.target.checked }))
                }
              />
              <span style={{ fontWeight: 700 }}>
                {form.is_active ? "Aktif" : "Nonaktif"}
              </span>
            </label>
          </div>

          {err && (
            <div
              className="card"
              style={{
                marginTop: "var(--space-4)",
                borderColor: "rgba(192,70,87,.35)",
                background: "rgba(192,70,87,0.06)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span className="badge badge-danger">Error</span>
                <span className="text-dim" style={{ fontSize: ".92rem" }}>
                  Periksa input atau koneksi Anda.
                </span>
              </div>
              <div style={{ marginTop: 8, fontWeight: 700 }}>{err}</div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            padding: "var(--space-4) var(--space-5)",
            borderTop: "1px solid var(--color-border)",
            display: "flex",
            justifyContent: "flex-end",
            gap: "var(--space-2)",
            flexWrap: "wrap",
            background: "rgba(255,255,255,0.65)",
          }}
        >
          <button type="button" onClick={onClose} className="button" disabled={saving}>
            Batal
          </button>

          <button
            disabled={saving}
            className="button button-primary"
            aria-busy={saving}
            style={{ minWidth: 140 }}
          >
            {saving ? "Menyimpan…" : "Simpan"}
          </button>
        </div>
      </form>
    </div>
  );
}
