// src/pages/ProductDetail.tsx
import { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import type { Product } from "../../types/product";
import { getProduct, updateProduct, deleteProduct } from "../../api/products";
import VariantManager from "../../components/products/VariantManager";
import ImageDropzone from "../../components/products/ImageDropzone";

type TabKey = "info" | "variant-stock";

type HttpErrorShape = {
  message?: string;
  response?: {
    status?: number;
    data?: {
      message?: string;
      [k: string]: unknown;
    };
  };
};

function getErrorMessage(err: unknown, fallback = "Terjadi kesalahan."): string {
  if (typeof err === "string") return err;
  if (err && typeof err === "object") {
    const e = err as HttpErrorShape;
    return e.response?.data?.message || e.message || fallback;
  }
  return fallback;
}

function getStatus(err: unknown): number | undefined {
  if (err && typeof err === "object") {
    const e = err as HttpErrorShape;
    return e.response?.status;
  }
  return undefined;
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

function isPositiveInt(n: unknown): n is number {
  return typeof n === "number" && Number.isInteger(n) && n > 0;
}

export default function ProductDetail(): React.ReactElement {
  const { id: rawId } = useParams();
  const navigate = useNavigate();
  const id = Number(rawId);

  const [tab, setTab] = useState<TabKey>("info");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [row, setRow] = useState<Product | null>(null);

  const autoSlug = useMemo(
    () => (row?.nama ? slugify(row.nama) : ""),
    [row?.nama]
  );

  async function refresh(): Promise<void> {
    if (!isPositiveInt(id)) {
      setRow(null);
      setErr("Parameter ID tidak valid.");
      setLoading(false);
      return;
    }
    setLoading(true);
    setErr(null);
    try {
      const product = await getProduct(id);
      setRow(product);
    } catch (e: unknown) {
      const status = getStatus(e);
      const msg =
        status === 404
          ? "Produk tidak ditemukan (404)."
          : getErrorMessage(e, "Gagal memuat produk.");
      setRow(null);
      setErr(msg);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function onSaveInfo(): Promise<void> {
    if (!row) return;
    setSaving(true);
    setErr(null);
    try {
      await updateProduct(row.id, {
        category_id: row.category_id,
        nama: row.nama.trim(),
        slug: row.slug?.trim() || autoSlug,
        deskripsi: row.deskripsi ?? null,
        is_active: row.is_active,
      });
      await refresh();
    } catch (e: unknown) {
      setErr(getErrorMessage(e, "Gagal menyimpan."));
    } finally {
      setSaving(false);
    }
  }

  async function onDelete(): Promise<void> {
    if (!row) return;
    if (!confirm(`Hapus produk "${row.nama}"? Tindakan ini tidak bisa dibatalkan.`)) return;
    try {
      await deleteProduct(row.id);
      navigate("/catalog/products");
    } catch (e: unknown) {
      alert(getErrorMessage(e, "Gagal menghapus produk."));
    }
  }

  // ====== UI styles (layout only, no logic changes) ======
  const headerWrap: React.CSSProperties = {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: "1rem",
    flexWrap: "wrap",
  };

  const titleStyle: React.CSSProperties = {
    margin: 0,
    fontSize: "1.55rem",
    fontWeight: 800,
    letterSpacing: "-0.02em",
    lineHeight: 1.2,
    color: "var(--color-text)",
  };

  const crumbStyle: React.CSSProperties = {
    fontSize: "0.95rem",
    opacity: 0.75,
    marginBottom: "0.35rem",
  };

  const tabWrap: React.CSSProperties = {
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap",
    alignItems: "center",
  };

  const twoColGrid: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: "1rem",
  };

  const fieldGroup: React.CSSProperties = {
    display: "grid",
    gap: "0.9rem",
  };

  const fieldLabel: React.CSSProperties = {
    display: "grid",
    gap: "0.35rem",
  };

  const helpText: React.CSSProperties = {
    fontSize: "0.85rem",
    opacity: 0.7,
  };

  const actionsRow: React.CSSProperties = {
    display: "flex",
    justifyContent: "flex-end",
    gap: "0.6rem",
    flexWrap: "wrap",
    marginTop: "0.25rem",
  };

  // ====== States ======
  if (loading) {
    return (
      <div className="container">
        <div className="section">
          <div className="card p-5">Memuat produk…</div>
        </div>
      </div>
    );
  }

  if (err && !row) {
    return (
      <div className="container">
        <div className="section">
          <div className="card p-5">
            <div className="badge badge-danger" style={{ display: "inline-block", marginBottom: "0.8rem" }}>
              {err}
            </div>
            <div>
              <NavLink to="/catalog/products" className="link">
                ← Kembali ke daftar produk
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!row) {
    return (
      <div className="container">
        <div className="section">
          <div className="card p-5">
            <div style={{ marginBottom: "0.6rem" }}>Produk tidak ditemukan.</div>
            <div>
              <NavLink to="/catalog/products" className="link">
                ← Kembali ke daftar produk
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ====== Main ======
  return (
    <div className="container">
      {/* ====== Header ====== */}
      <div className="section">
        <div style={headerWrap}>
          <div style={{ minWidth: 260 }}>
            <div style={crumbStyle}>
              <NavLink to="/catalog/products" className="link">
                Produk
              </NavLink>{" "}
              <span style={{ opacity: 0.6 }}>/</span> Detail
            </div>
            <h1 style={titleStyle}>{row.nama}</h1>
          </div>

          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            <button
              className="button button-outline"
              type="button"
              onClick={() => void refresh()}
              disabled={saving}
              style={{ borderRadius: "999px" }}
            >
              Refresh
            </button>

            <button
              className="button button-danger"
              type="button"
              onClick={() => void onDelete()}
              style={{ borderRadius: "999px" }}
            >
              Hapus
            </button>
          </div>
        </div>
      </div>

      {/* ====== Tabs ====== */}
      <div className="section">
        <div className="card p-5">
          <div style={tabWrap}>
            <button
              className={tab === "info" ? "button button-primary" : "button button-outline"}
              onClick={() => setTab("info")}
              type="button"
              style={{ borderRadius: "999px" }}
            >
              Info
            </button>

            <button
              className={tab === "variant-stock" ? "button button-primary" : "button button-outline"}
              onClick={() => setTab("variant-stock")}
              type="button"
              style={{ borderRadius: "999px" }}
            >
              Varian &amp; Stok
            </button>

            <span style={{ marginLeft: "auto" }} />

            <span className="badge" style={{ borderRadius: "999px" }}>
              ID: {row.id}
            </span>
            <span
              className={row.is_active ? "badge badge-success" : "badge badge-warning"}
              style={{ borderRadius: "999px" }}
            >
              {row.is_active ? "Aktif" : "Nonaktif"}
            </span>
          </div>
        </div>
      </div>

      {/* ====== Content ====== */}
      {tab === "info" ? (
        <div className="section">
          <div className="card p-5">
            <div style={twoColGrid}>
              {/* Left: form */}
              <div style={fieldGroup}>
                <label style={fieldLabel}>
                  <span style={{ fontWeight: 700 }}>Nama</span>
                  <input
                    className="input"
                    value={row.nama}
                    onChange={(e) =>
                      setRow({ ...(row as Product), nama: e.target.value })
                    }
                    placeholder="Nama produk"
                  />
                </label>

                <label style={fieldLabel}>
                  <span style={{ fontWeight: 700 }}>Slug</span>
                  <input
                    className="input"
                    placeholder={autoSlug}
                    value={row.slug ?? ""}
                    onChange={(e) =>
                      setRow({ ...(row as Product), slug: e.target.value })
                    }
                  />
                  <span style={helpText}>
                    Kosongkan untuk otomatis: <b>{autoSlug || "-"}</b>
                  </span>
                </label>

                <label style={fieldLabel}>
                  <span style={{ fontWeight: 700 }}>Deskripsi</span>
                  <textarea
                    className="textarea"
                    rows={4}
                    value={row.deskripsi ?? ""}
                    onChange={(e) =>
                      setRow({ ...(row as Product), deskripsi: e.target.value })
                    }
                    placeholder="Deskripsi singkat produk"
                  />
                </label>

                {err && (
                  <div
                    className="badge badge-danger"
                    style={{ display: "block", padding: "0.7rem 0.85rem", borderRadius: "14px" }}
                  >
                    {err}
                  </div>
                )}

                <div style={actionsRow}>
                  <button
                    className="button button-outline"
                    type="button"
                    onClick={() => void refresh()}
                    disabled={saving}
                    style={{ borderRadius: "999px" }}
                  >
                    Reset
                  </button>
                  <button
                    className="button button-primary"
                    type="button"
                    onClick={() => void onSaveInfo()}
                    disabled={saving}
                    style={{ borderRadius: "999px" }}
                  >
                    {saving ? "Menyimpan…" : "Simpan"}
                  </button>
                </div>
              </div>

              {/* Right: status card */}
              <div style={{ display: "grid", gap: "0.75rem" }}>
                <div
                  className="card"
                  style={{
                    padding: "1rem",
                    borderRadius: "16px",
                    border: "1px solid rgba(15, 23, 42, 0.06)",
                    background: "rgba(15, 23, 42, 0.02)",
                  }}
                >
                  <div style={{ fontWeight: 800, marginBottom: "0.5rem" }}>
                    Status Produk
                  </div>

                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={!!row.is_active}
                      onChange={(e) =>
                        setRow({ ...(row as Product), is_active: e.target.checked })
                      }
                    />
                    <span>Aktif</span>
                  </label>

                  <div style={{ marginTop: "0.75rem", fontSize: "0.9rem", opacity: 0.8 }}>
                    Produk nonaktif tidak ditampilkan pada area katalog/penjualan (tergantung aturan project Anda).
                  </div>
                </div>

                <div
                  className="card"
                  style={{
                    padding: "1rem",
                    borderRadius: "16px",
                    border: "1px solid rgba(15, 23, 42, 0.06)",
                  }}
                >
                  <div style={{ fontWeight: 800, marginBottom: "0.5rem" }}>
                    Aksi Cepat
                  </div>

                  <div style={{ display: "grid", gap: "0.5rem" }}>
                    <button
                      className="button button-outline"
                      type="button"
                      onClick={() => setTab("variant-stock")}
                      style={{ borderRadius: "999px", width: "100%" }}
                    >
                      Kelola Varian & Stok
                    </button>

                    <button
                      className="button button-outline"
                      type="button"
                      onClick={() => setTab("variant-stock")}
                      style={{ borderRadius: "999px", width: "100%" }}
                    >
                      Kelola Media Gambar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* responsive */}
            <style>
              {`
                @media (max-width: 980px) {
                  .container .section div[style*="grid-template-columns: 1.2fr 0.8fr"]{
                    grid-template-columns: 1fr !important;
                  }
                }
              `}
            </style>
          </div>
        </div>
      ) : (
        <div className="section">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1rem",
            }}
          >
            <div className="card p-5">
              <div style={{ fontWeight: 800, marginBottom: "0.75rem" }}>
                Varian &amp; Stok
              </div>
              <VariantManager productId={row.id} />
            </div>

            <div className="card p-5">
              <div style={{ fontWeight: 800, marginBottom: "0.75rem" }}>
                Media Gambar
              </div>
              <ImageDropzone productId={row.id} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
