// src/components/products/ImageDropzone.tsx
import { useCallback, useEffect, useRef, useState } from "react";
import type { ProductMedia } from "../../types/product";
import { deleteMedia, listMedia, setPrimaryMedia, uploadMedia } from "../../api/products";

type Props = { productId: number };

/* =========================
   Helpers ENV & URL (tanpa `as any`)
   ========================= */
function getEnvStr(v: unknown): string {
  return typeof v === "string" ? v : "";
}
function rtrimSlash(s: string): string {
  return s.replace(/\/+$/, "");
}
function getApiOrigin(): string {
  const ENV = import.meta.env;
  const rawBase = getEnvStr(ENV.VITE_API_URL) || getEnvStr(ENV.VITE_API_BASE_URL) || "";
  const trimmed = rtrimSlash(rawBase);
  const noApi = trimmed.replace(/\/api(\/v\d+)?$/i, "");
  try {
    if (noApi) return new URL(noApi).origin;
  } catch {
    /* noop */
  }
  if (typeof window !== "undefined") return window.location.origin;
  return "";
}
const API_ORIGIN = getApiOrigin();

function resolveMediaUrl(m: ProductMedia): string {
  const direct = m.thumb_url || m.url;
  if (direct) {
    if (/^https?:\/\//i.test(direct)) return direct;
    return `${API_ORIGIN}${direct.startsWith("/") ? "" : "/"}${direct}`;
  }
  const path = m.path ? `/storage/${m.path}` : "";
  if (!path) return "";
  return `${API_ORIGIN}${path}`;
}

export default function ImageDropzone({ productId }: Props): React.ReactElement {
  const [rows, setRows] = useState<ProductMedia[]>([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const ref = useRef<HTMLInputElement | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await listMedia(productId)
        .then((r) => setRows(r))
        .catch((e) => setError(e?.message || "Gagal memuat media."))
        .finally(() => setLoading(false));
    } catch (e) {
      const msg = (e as { message?: string })?.message ?? "Gagal memuat media.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  type ApiErr = { message?: string; errors?: Record<string, string[]> };
  const renderErrors = useCallback((e: ApiErr | null): string | null => {
    if (!e) return null;
    if (e.errors && Object.keys(e.errors).length) {
      const arr = Object.entries(e.errors).flatMap(([k, v]) => (v ?? []).map((msg) => `${k}: ${msg}`));
      return arr.join("\n");
    }
    return e.message ?? null;
  }, []);

  const onFiles = useCallback(
    async (files: File[]) => {
      if (!files.length) return;

      const MAX_MB = 5;
      const bad = files.find((f) => !f.type.startsWith("image/") || f.size > MAX_MB * 1024 * 1024);
      if (bad) {
        setError(!bad.type.startsWith("image/") ? "File harus berupa gambar." : `Ukuran gambar maksimal ${MAX_MB}MB per file.`);
        return;
      }

      setBusy(true);
      setError(null);
      try {
        await uploadMedia(productId, files);
        await refresh();
      } catch (e) {
        const api = e as ApiErr;
        setError(renderErrors(api) ?? "Gagal upload media.");
      } finally {
        setBusy(false);
      }
    },
    [productId, refresh, renderErrors]
  );

  function handleBrowse(): void {
    ref.current?.click();
  }

  const makePrimary = useCallback(
    async (m: ProductMedia) => {
      setBusy(true);
      try {
        await setPrimaryMedia(productId, m.id);
        await refresh();
      } catch (e) {
        setError((e as { message?: string })?.message ?? "Gagal set primary.");
      } finally {
        setBusy(false);
      }
    },
    [productId, refresh]
  );

  const removeItem = useCallback(
    async (m: ProductMedia) => {
      if (!confirm("Hapus gambar ini?")) return;
      setBusy(true);
      try {
        await deleteMedia(productId, m.id);
        await refresh();
      } catch (e) {
        setError((e as { message?: string })?.message ?? "Gagal menghapus media.");
      } finally {
        setBusy(false);
      }
    },
    [productId, refresh]
  );

  return (
    <div className="section">
      {/* Header area */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "var(--space-4)",
          flexWrap: "wrap",
          marginBottom: "var(--space-3)",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div style={{ fontWeight: 800, letterSpacing: "-0.01em" }}>Media Produk</div>
          <div className="text-dim" style={{ fontSize: ".9rem", marginTop: 4 }}>
            Upload beberapa gambar. Tandai salah satu sebagai <b>Primary</b> untuk tampil utama.
          </div>
        </div>

        <button
          type="button"
          className="button button-outline"
          disabled={busy}
          onClick={handleBrowse}
          style={{ whiteSpace: "nowrap" }}
        >
          Pilih Gambar
        </button>
      </div>

      {/* Dropzone */}
      <div
        className={`card ${busy ? "opacity-50" : ""}`}
        role="button"
        tabIndex={0}
        aria-disabled={busy ? "true" : "false"}
        onClick={handleBrowse}
        onKeyDown={(e) => {
          if (busy) return;
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleBrowse();
          }
        }}
        onDragEnter={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setDragOver(false);
        }}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          const files = Array.from(e.dataTransfer.files || []).filter((f) => f.type.startsWith("image/"));
          void onFiles(files);
        }}
        style={{
          padding: "var(--space-5)",
          cursor: busy ? "not-allowed" : "pointer",
          border: dragOver ? "2px dashed var(--color-primary)" : "2px dashed var(--color-border)",
          background: dragOver ? "rgba(192,70,87,0.06)" : "var(--color-surface)",
          transition: "border-color .15s ease, background .15s ease, transform .06s ease",
          transform: dragOver ? "scale(0.995)" : "scale(1)",
          textAlign: "center",
        }}
      >
        <input
          ref={ref}
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => {
            const files = Array.from(e.target.files || []);
            void onFiles(files);
            e.currentTarget.value = "";
          }}
          style={{ display: "none" }}
        />

        <div
          style={{
            width: 52,
            height: 52,
            margin: "0 auto",
            borderRadius: "999px",
            border: "1px solid var(--color-border)",
            display: "grid",
            placeItems: "center",
            boxShadow: "var(--shadow-xs)",
            background: "#fff",
          }}
          aria-hidden="true"
        >
          <span style={{ fontSize: 22, lineHeight: 1 }}>⬆️</span>
        </div>

        <div style={{ marginTop: "var(--space-3)", fontWeight: 800 }}>
          {dragOver ? "Lepaskan untuk upload" : "Tarik & letakkan gambar di sini"}
        </div>
        <div className="text-dim" style={{ fontSize: ".9rem", marginTop: 6 }}>
          atau klik untuk memilih file (maks. 5MB per gambar)
        </div>
      </div>

      {/* Gallery */}
      <div style={{ marginTop: "var(--space-4)" }}>
        {loading ? (
          <div className="card">Memuat…</div>
        ) : (rows?.length ?? 0) === 0 ? (
          <div className="card text-dim" style={{ fontSize: ".9rem" }}>
            Belum ada media.
          </div>
        ) : (
          <div className="form-row form-row--3">
            {(rows ?? []).map((m) => {
              const url = resolveMediaUrl(m);

              return (
                <div key={m.id} className="card" style={{ padding: "var(--space-4)" }}>
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        width: "100%",
                        aspectRatio: "1 / 1",
                        borderRadius: "calc(var(--radius-lg) - 2px)",
                        overflow: "hidden",
                        border: "1px solid var(--color-border)",
                        background: "#fafafa",
                      }}
                    >
                      <img
                        src={url}
                        alt=""
                        loading="lazy"
                        onError={(e) => {
                          const el = e.currentTarget as HTMLImageElement;
                          if (!el.dataset.fallback && m.path) {
                            el.dataset.fallback = "1";
                            el.src = `/storage/${m.path}`;
                          }
                        }}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </div>

                    {m.is_primary && (
                      <div style={{ position: "absolute", left: 10, top: 10 }}>
                        <span className="badge badge-success">Primary</span>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div style={{ marginTop: "var(--space-3)" }}>
                    <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
                      <button
                        type="button"
                        className={`button ${m.is_primary ? "" : "button-primary"}`}
                        disabled={busy || m.is_primary}
                        onClick={() => void makePrimary(m)}
                        style={{
                          flex: 1,
                          minWidth: 140,
                          opacity: m.is_primary ? 0.7 : 1,
                        }}
                        title={m.is_primary ? "Sudah Primary" : "Jadikan sebagai Primary"}
                      >
                        {m.is_primary ? "Primary" : "Jadikan Utama"}
                      </button>

                      <button
                        type="button"
                        className="button button-outline"
                        disabled={busy}
                        onClick={() => void removeItem(m)}
                        style={{ flex: 1, minWidth: 120 }}
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Error */}
      {error && (
        <div className="card" style={{ borderColor: "rgba(192,70,87,.35)", marginTop: "var(--space-4)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <span className="badge badge-danger">Error</span>
            <span className="text-dim" style={{ fontSize: ".92rem" }}>
              Terjadi kesalahan.
            </span>
          </div>
          <pre className="text-dim" style={{ whiteSpace: "pre-wrap", marginTop: 10, marginBottom: 0 }}>
            {error}
          </pre>
        </div>
      )}
    </div>
  );
}
