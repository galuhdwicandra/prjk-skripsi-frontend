// src/components/pos/ProductGrid.tsx
import { useEffect, useMemo, useRef, useState } from "react";
import type { Product, ProductQuery } from "../../types/product";
import { listProducts } from "../../api/products";
import { ensureImageUrl } from "../../api/_files";
import { isAbortLike } from "../../utils/isAbortLike";

type Props = {
  onPick?: (p: Product) => void;
  perPage?: number;
  initialQuery?: ProductQuery;
  warehouseId?: number;
  /** Jika true, komponen tidak akan fetch sebelum warehouseId tersedia */
  requireWarehouse?: boolean;
};

type LaravelPaginator<T> = {
  data?: T[];
  current_page?: number;
  last_page?: number;
};

type JsonApiLike<T> = {
  data?: T[];
  meta?: { last_page?: number };
};

// ---------- Type-safe helpers (tanpa 'any') ----------
function isRecord(x: unknown): x is Record<string, unknown> {
  return typeof x === "object" && x !== null;
}
function isString(v: unknown): v is string {
  return typeof v === "string";
}
function isNumber(v: unknown): v is number {
  return typeof v === "number" && Number.isFinite(v);
}
function isLaravelPaginator<T>(v: unknown): v is LaravelPaginator<T> {
  if (!isRecord(v)) return false;
  if (!("data" in v)) return false;
  return Array.isArray((v as Record<string, unknown>).data);
}
function isJsonApiLike<T>(v: unknown): v is JsonApiLike<T> {
  if (!isRecord(v)) return false;
  const meta = v.meta;
  return isRecord(meta) && typeof meta.last_page === "number";
}
function extractData<T>(v: unknown): T[] {
  if (isLaravelPaginator<T>(v)) return v.data ?? [];
  if (isJsonApiLike<T>(v)) return v.data ?? [];
  return [];
}
function extractLastPage(v: unknown): number {
  if (isJsonApiLike(v)) {
    const meta = (v as JsonApiLike<unknown>).meta;
    const lp = meta?.last_page;
    if (typeof lp === "number" && Number.isFinite(lp)) return lp;
  }
  if (isLaravelPaginator(v)) {
    const lp = (v as LaravelPaginator<unknown>).last_page;
    if (typeof lp === "number" && Number.isFinite(lp)) return lp;
  }
  return 1;
}

type ApiErrorShape = { status?: number; message?: string; errors?: unknown };

function isApiErrorShape(x: unknown): x is ApiErrorShape {
  if (typeof x !== "object" || x === null) return false;
  const o = x as Record<string, unknown>;
  const okStatus =
    !("status" in o) || typeof o.status === "number" || typeof o.status === "undefined";
  const okMessage =
    !("message" in o) || typeof o.message === "string" || typeof o.message === "undefined";
  return okStatus && okMessage;
}

function getErrorMessage(e: unknown, fallback = "Gagal memuat produk."): string {
  if (typeof e === "string") return e;
  if (typeof e === "object" && e !== null) {
    const o = e as Record<string, unknown>;
    const m = o["message"];
    if (typeof m === "string" && m.trim() !== "") return m;
  }
  try {
    const s = String(e);
    if (s && s !== "[object Object]") return s;
  } catch {
    /* ignore */
  }
  return fallback;
}

// ---------- Debug helpers ----------
function hasQueryFlag(name: string): boolean {
  try {
    return (
      new URLSearchParams(window.location.search).getAll("debug").includes(name) ||
      new URLSearchParams(window.location.search).has(name)
    );
  } catch {
    return false;
  }
}
function isDebugOn(): boolean {
  if (import.meta.env.DEV === true) return true;
  try {
    if (localStorage.getItem("DEBUG_GRID") === "1") return true;
  } catch {
    /* ignore */
  }
  if (hasQueryFlag("grid") || (hasQueryFlag("debug") && hasQueryFlag("all"))) return true;
  return false;
}
const DEBUG = isDebugOn();

function pickStatus(e: unknown): number | undefined {
  if (!isRecord(e)) return undefined;
  const resp = isRecord((e as Record<string, unknown>).response)
    ? ((e as Record<string, unknown>).response as Record<string, unknown>)
    : undefined;

  const st =
    resp && isNumber(resp.status)
      ? (resp.status as number)
      : isNumber((e as Record<string, unknown>).status)
        ? ((e as Record<string, unknown>).status as number)
        : undefined;

  return st;
}
function pickServerMessage(e: unknown): string | undefined {
  if (!isRecord(e)) return undefined;
  const resp = isRecord((e as Record<string, unknown>).response)
    ? ((e as Record<string, unknown>).response as Record<string, unknown>)
    : undefined;

  const data =
    resp && isRecord(resp.data) ? (resp.data as Record<string, unknown>) : undefined;

  const msg = data && isString(data.message) ? (data.message as string) : undefined;
  return msg;
}
function debugStart(reqId: number, q: ProductQuery) {
  if (!DEBUG) return;
  const qLog = {
    page: q.page,
    per_page: q.per_page,
    sort: q.sort,
    is_active: q.is_active,
    gudang_id: (q as Record<string, unknown>)["gudang_id"],
    cabang_id: (q as Record<string, unknown>)["cabang_id"],
    has_search: Boolean((q as Record<string, unknown>)["search"] ?? (q as Record<string, unknown>)["q"]),
  };
  console.groupCollapsed(`[ProductGrid] ▶ request #${reqId} /products`);
  console.log("query:", qLog);
  console.groupEnd();
}
function debugSuccess(reqId: number, res: unknown, dataLen: number, lastPage: number) {
  if (!DEBUG) return;
  console.groupCollapsed(`[ProductGrid] ✅ success #${reqId} /products`);
  console.log("raw:", res);
  console.log("data.length:", dataLen, "lastPage:", lastPage);
  console.groupEnd();
}
function debugError(reqId: number, err: unknown) {
  if (!DEBUG) return;
  console.groupCollapsed(`[ProductGrid] ❌ error #${reqId} /products`);
  console.log("raw error:", err);
  console.log("status (detected):", pickStatus(err));
  console.log("server message (detected):", pickServerMessage(err));
  console.groupEnd();
}

function formatIDR(n: number): string {
  if (!Number.isFinite(n)) return "0";
  return n.toLocaleString("id-ID");
}

function getMinVariantPrice(p: Product): number | null {
  if (!Array.isArray(p.variants) || p.variants.length === 0) return null;

  const nums = p.variants
    .map((v) => Number(v.harga ?? 0)) // ✅ akses langsung, tanpa cast Record
    .filter((x) => Number.isFinite(x));

  if (nums.length === 0) return null;
  return Math.min(...nums);
}


function ProductCardSkeleton({ keyId }: { keyId: string }): React.ReactElement {
  return (
    <div
      key={keyId}
      className="pg-card"
      aria-hidden="true"
      style={{
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-lg)",
        background: "var(--color-surface)",
        boxShadow: "var(--shadow-xs)",
        padding: "10px",
      }}
    >
      <div
        style={{
          width: "100%",
          paddingTop: "100%",
          borderRadius: "12px",
          background:
            "linear-gradient(90deg, rgba(0,0,0,.04), rgba(0,0,0,.07), rgba(0,0,0,.04))",
          backgroundSize: "200% 100%",
          animation: "pg-shimmer 1.2s ease-in-out infinite",
        }}
      />
      <div style={{ height: 10, marginTop: 10, borderRadius: 8, background: "rgba(0,0,0,.06)" }} />
      <div style={{ height: 10, marginTop: 6, width: "60%", borderRadius: 8, background: "rgba(0,0,0,.06)" }} />
    </div>
  );
}

export default function ProductGrid({
  onPick,
  perPage = 24,
  initialQuery,
  warehouseId,
  requireWarehouse = false,
}: Props) {
  const [items, setItems] = useState<Product[]>([]);
  const lastGoodRef = useRef<Product[]>([]);
  const reqSeqRef = useRef<number>(0);
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const query: ProductQuery = useMemo(
    () => ({
      per_page: perPage,
      page,
      sort: "nama",
      is_active: true,
      ...(initialQuery ?? {}),
      ...(warehouseId ? { gudang_id: warehouseId } : {}),
    }),
    [page, perPage, initialQuery, warehouseId]
  );

  // Reset halaman saat filter/gudang berubah
  useEffect(() => {
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perPage, warehouseId, JSON.stringify(initialQuery ?? {})]);

  useEffect(() => {
    if (requireWarehouse && !warehouseId) {
      setItems([]);
      setLastPage(1);
      setLoading(false);
      setError(null);
      return;
    }

    abortRef.current?.abort();
    const ac = new AbortController();
    abortRef.current = ac;

    const myReqId = ++reqSeqRef.current;

    setLoading(true);
    setError(null);

    debugStart(myReqId, query);
    if (import.meta.env.DEV) console.time?.(`[ProductGrid] #${myReqId} /products`);

    listProducts(query, { signal: ac.signal })
      .then((res) => {
        if (myReqId !== reqSeqRef.current) return;
        const data = extractData<Product>(res);
        const lp = extractLastPage(res);
        setItems(data);
        lastGoodRef.current = data;
        setLastPage(lp);
        setError(null);
        debugSuccess(myReqId, res, data.length, lp);
      })
      .catch((e: unknown) => {
        if (isAbortLike(e)) return;
        if (myReqId !== reqSeqRef.current) return;
        debugError(myReqId, e);

        const msg = isApiErrorShape(e) ? e.message ?? "Gagal memuat produk." : getErrorMessage(e);
        if (lastGoodRef.current.length > 0) {
          // tetap tampilkan data terakhir yang valid, tapi warning ditampilkan di bawah
          setError(msg);
          return;
        }
        setError(msg);
        setItems([]);
        setLastPage(1);
      })
      .finally(() => {
        if (import.meta.env.DEV) console.timeEnd?.(`[ProductGrid] #${myReqId} /products`);
        if (myReqId === reqSeqRef.current) setLoading(false);
      });

    return () => ac.abort();
  }, [query, requireWarehouse, warehouseId]);

  const showBlockingError = Boolean(error) && items.length === 0;

  // CSS lokal ProductGrid supaya konsisten dan tidak tergantung class global yang belum ada
  // (Tidak mengubah logika sama sekali)
  const styles = (
    <style>{`
      @keyframes pg-shimmer {
        0% { background-position: 0% 0; }
        100% { background-position: -200% 0; }
      }

      .pg-wrap { width: 100%; }

      .pg-head{
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap: 10px;
        flex-wrap: wrap;
        margin-bottom: 12px;
      }
      .pg-title{
        display:flex;
        align-items:baseline;
        gap: 10px;
        min-width: 0;
      }
      .pg-title h3{
        margin: 0;
        font-size: 14px;
        font-weight: 800;
        letter-spacing: -0.01em;
      }
      .pg-meta{
        font-size: 12px;
        opacity: .72;
        white-space: nowrap;
      }

      .pg-grid{
        display:grid;
        gap: 12px;
        grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
      }

      .pg-card{
        display:flex;
        flex-direction:column;
        text-align:left;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: var(--color-surface);
        box-shadow: var(--shadow-xs);
        padding: 10px;
        cursor:pointer;
        transition: transform .06s ease, box-shadow .2s ease;
      }
      .pg-card:hover{
        transform: translateY(-1px);
        box-shadow: var(--shadow-md);
      }
      .pg-card:active{
        transform: translateY(0px);
      }

      .pg-thumb{
        position:relative;
        width:100%;
        padding-top: 100%;
        overflow:hidden;
        border-radius: 12px;
        background: rgba(0,0,0,.04);
        border: 1px solid rgba(0,0,0,.04);
      }
      .pg-thumb img{
        position:absolute;
        inset:0;
        width:100%;
        height:100%;
        object-fit:cover;
      }
      .pg-noimg{
        position:absolute;
        inset:0;
        display:grid;
        place-items:center;
        font-size: 12px;
        opacity: .6;
      }

      .pg-body{ margin-top: 10px; display:flex; flex-direction:column; gap: 6px; }
      .pg-name{
        font-weight: 750;
        font-size: 13px;
        line-height: 1.25;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow:hidden;
        min-height: calc(13px * 1.25 * 2);
      }
      .pg-row{
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap: 8px;
      }
      .pg-price{
        font-weight: 800;
        font-size: 12px;
        color: var(--color-primary);
        background: rgba(192,70,87,.10);
        border: 1px solid rgba(192,70,87,.18);
        padding: 4px 8px;
        border-radius: var(--radius-pill);
        white-space: nowrap;
      }
      .pg-variant{
        font-size: 12px;
        opacity: .7;
        white-space: nowrap;
      }

      .pg-footer{
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap: 10px;
        flex-wrap: wrap;
        margin-top: 14px;
        padding-top: 12px;
        border-top: 1px solid rgba(0,0,0,.06);
      }
      .pg-pager{
        display:flex;
        align-items:center;
        gap: 8px;
      }
      .pg-note{
        font-size: 12px;
        opacity: .72;
      }

      .pg-empty{
        padding: 14px;
        border-radius: var(--radius-lg);
        border: 1px dashed rgba(0,0,0,.12);
        background: rgba(255,255,255,.6);
        color: var(--color-text-soft);
      }
    `}</style>
  );

  return (
    <div className="pg-wrap">
      {styles}

      {showBlockingError && (
        <div className="card">
          <div className="alert alert-danger" style={{ fontSize: 13 }}>
            Tidak dapat memuat produk. {error}
          </div>
        </div>
      )}

      {!showBlockingError && (
        <div className="card">
          {/* Header kecil (rapi + informatif) */}
          <div className="pg-head">
            <div className="pg-title">
              <h3>Katalog Produk</h3>
              <span className="pg-meta">
                Hal. {page} / {lastPage}
                {warehouseId ? ` • Gudang #${warehouseId}` : ""}
              </span>
            </div>

            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              {loading ? (
                <span className="badge badge-warning">Memuat…</span>
              ) : (
                <span className="badge badge-success">{items.length} item</span>
              )}
            </div>
          </div>

          {/* Grid */}
          {loading && items.length === 0 ? (
            <div className="pg-grid" aria-busy="true" aria-label="Memuat katalog">
              {Array.from({ length: Math.min(12, perPage) }).map((_, i) => (
                <ProductCardSkeleton key={`sk-${i}`} keyId={`sk-${i}`} />
              ))}
            </div>
          ) : !loading && items.length === 0 ? (
            <div className="pg-empty">Belum ada produk aktif.</div>
          ) : (
            <div className="pg-grid">
              {items.map((p) => {
                const fallbackPath =
                  p.media?.find((m) => m.is_primary)?.path || p.media?.[0]?.path || null;
                const img = ensureImageUrl(p.image_url ?? null, fallbackPath);

                const minPrice = getMinVariantPrice(p);
                const minFromBackend = Number(
                  (p as unknown as { min_variant_harga?: number | string }).min_variant_harga
                );

                const shown =
                  Number.isFinite(minPrice ?? NaN)
                    ? (minPrice as number)
                    : (Number.isFinite(minFromBackend) ? minFromBackend : 0);
                const hasVariants = Array.isArray(p.variants) && p.variants.length > 0;

                return (
                  <button
                    key={p.id}
                    onClick={() => onPick?.(p)}
                    className="pg-card"
                    type="button"
                    aria-label={`Tambah ${p.nama} ke keranjang`}
                  >
                    <div className="pg-thumb">
                      {img ? (
                        <img
                          src={img}
                          alt={p.nama}
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            e.currentTarget.src = "/no-image.svg";
                          }}
                        />
                      ) : (
                        <div className="pg-noimg">No Image</div>
                      )}
                    </div>

                    <div className="pg-body">
                      <div className="pg-name">{p.nama}</div>

                      <div className="pg-row">
                        <div className="pg-price">
                          Rp{formatIDR(shown)}
                        </div>
                        <div className="pg-variant">
                          {hasVariants ? `${p.variants!.length} varian` : "—"}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Pagination */}
          {!showBlockingError && (
            <div className="pg-footer">
              <div className="pg-note">
                Klik kartu produk untuk tambah cepat ke keranjang.
              </div>

              <div className="pg-pager">
                <button
                  className="button button-outline"
                  onClick={() => setPage((curr) => Math.max(1, curr - 1))}
                  disabled={page <= 1}
                  type="button"
                >
                  ← Sebelumnya
                </button>
                <button
                  className="button button-outline"
                  onClick={() => setPage((curr) => Math.min(lastPage, curr + 1))}
                  disabled={page >= lastPage}
                  type="button"
                >
                  Selanjutnya →
                </button>
              </div>
            </div>
          )}

          {/* Non-blocking warning (masih tampil data terakhir) */}
          {error && items.length > 0 && (
            <div className="alert alert-warning" style={{ marginTop: 10, fontSize: 12 }}>
              Terjadi kendala sementara: {error}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
