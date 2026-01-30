// src/components/products/VariantManager.tsx
import { useCallback, useEffect, useMemo, useState } from "react";
import type {
  ProductVariant,
  VariantCreatePayload,
  VariantUpdatePayload,
} from "../../types/product";
import {
  createVariant,
  deleteVariant,
  listVariants,
  updateVariant,
} from "../../api/products";
import PriceInput from "./PriceInput";

type Props = { productId: number };

export default function VariantManager({ productId }: Props): React.ReactElement {
  const [rows, setRows] = useState<ProductVariant[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<number | "new" | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [draftNew, setDraftNew] = useState<VariantCreatePayload>({
    size: "",
    type: "",
    tester: "",
    sku: "",
    harga: 0,
    is_active: true,
  });

  const isBusy = savingId !== null;

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const arr = await listVariants(productId);
      setRows(arr);
    } catch (e: unknown) {
      setError((e as { message?: string })?.message || "Gagal memuat varian.");
    } finally {
      setLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  async function saveNew(): Promise<void> {
    setSavingId("new");
    setError(null);

    const payload: VariantCreatePayload = {
      ...draftNew,
      size: draftNew.size || null,
      type: draftNew.type || null,
      tester: draftNew.tester || null,
      sku: String(draftNew.sku || "").trim(),
      harga: Number(draftNew.harga || 0),
      is_active: draftNew.is_active ?? true,
    };

    try {
      await createVariant(productId, payload);
      setDraftNew({
        size: "",
        type: "",
        tester: "",
        sku: "",
        harga: 0,
        is_active: true,
      });
      await refresh();
    } catch (e: unknown) {
      setError((e as { message?: string })?.message || "Gagal menambah varian.");
    } finally {
      setSavingId(null);
    }
  }

  async function saveEdit(row: ProductVariant): Promise<void> {
    setSavingId(row.id);
    setError(null);

    const payload: VariantUpdatePayload = {
      size: row.size || null,
      type: row.type || null,
      tester: row.tester || null,
      sku: String(row.sku || "").trim(),
      harga: Number(row.harga || 0),
      is_active: !!row.is_active,
    };

    try {
      await updateVariant(productId, row.id, payload);
      await refresh();
    } catch (e: unknown) {
      setError((e as { message?: string })?.message || "Gagal menyimpan varian.");
    } finally {
      setSavingId(null);
    }
  }

  async function remove(row: ProductVariant): Promise<void> {
    if (!confirm(`Hapus varian ${row.sku}?`)) return;

    setSavingId(row.id);
    setError(null);

    try {
      await deleteVariant(productId, row.id);
      await refresh();
    } catch (e: unknown) {
      setError((e as { message?: string })?.message || "Gagal menghapus varian.");
    } finally {
      setSavingId(null);
    }
  }

  const canAdd = useMemo(() => {
    // UI-only: minimal gate agar tidak “nambah kosong”
    const skuOk = String(draftNew.sku || "").trim().length > 0;
    return skuOk && !isBusy;
  }, [draftNew.sku, isBusy]);

  if (loading) return <div className="card">Memuat varian…</div>;

  return (
    <div className="section">
      {/* Header */}
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
          <div style={{ fontWeight: 800, letterSpacing: "-0.01em" }}>Varian Produk</div>
          <div className="text-dim" style={{ fontSize: ".9rem", marginTop: 4 }}>
            Kelola SKU/atribut/aktivasi serta harga per varian.
          </div>
        </div>

        <button
          type="button"
          className="button button-outline"
          disabled={isBusy}
          onClick={() => void refresh()}
          style={{ whiteSpace: "nowrap" }}
          title="Refresh data varian"
        >
          Refresh
        </button>
      </div>

      {/* Add New Variant */}
      <div className="card" style={{ marginBottom: "var(--space-4)" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--space-3)",
            flexWrap: "wrap",
            marginBottom: "var(--space-3)",
          }}
        >
          <div style={{ fontWeight: 800 }}>Tambah Varian</div>
          <span className="text-dim" style={{ fontSize: ".85rem" }}>
            SKU wajib diisi
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr 1fr 1fr 0.8fr",
            gap: "var(--space-3)",
          }}
        >
          <div>
            <label className="text-dim" style={{ display: "block", fontSize: ".85rem", marginBottom: 6 }}>
              SKU
            </label>
            <input
              className="input"
              placeholder="SKU"
              value={draftNew.sku}
              onChange={(e) => setDraftNew((d) => ({ ...d, sku: e.target.value }))}
              disabled={isBusy}
            />
          </div>

          <div>
            <label className="text-dim" style={{ display: "block", fontSize: ".85rem", marginBottom: 6 }}>
              Size
            </label>
            <input
              className="input"
              placeholder="Size"
              value={draftNew.size ?? ""}
              onChange={(e) => setDraftNew((d) => ({ ...d, size: e.target.value }))}
              disabled={isBusy}
            />
          </div>

          <div>
            <label className="text-dim" style={{ display: "block", fontSize: ".85rem", marginBottom: 6 }}>
              Type
            </label>
            <input
              className="input"
              placeholder="Type"
              value={draftNew.type ?? ""}
              onChange={(e) => setDraftNew((d) => ({ ...d, type: e.target.value }))}
              disabled={isBusy}
            />
          </div>

          <div>
            <label className="text-dim" style={{ display: "block", fontSize: ".85rem", marginBottom: 6 }}>
              Tester
            </label>
            <input
              className="input"
              placeholder="Tester"
              value={draftNew.tester ?? ""}
              onChange={(e) => setDraftNew((d) => ({ ...d, tester: e.target.value }))}
              disabled={isBusy}
            />
          </div>

          <div>
            <label className="text-dim" style={{ display: "block", fontSize: ".85rem", marginBottom: 6 }}>
              Harga
            </label>
            <input
              type="number"
              className="input"
              placeholder="0"
              value={draftNew.harga}
              onChange={(e) =>
                setDraftNew((d) => ({ ...d, harga: Number(e.target.value || 0) }))
              }
              disabled={isBusy}
            />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "var(--space-2)",
              flexWrap: "wrap",
            }}
          >
            <label
              className="text-dim"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                userSelect: "none",
                marginBottom: 2,
                fontSize: ".9rem",
              }}
            >
              <input
                type="checkbox"
                checked={!!draftNew.is_active}
                onChange={(e) => setDraftNew((d) => ({ ...d, is_active: e.target.checked }))}
                disabled={isBusy}
              />
              Aktif
            </label>

            <button
              type="button"
              className="button button-primary"
              disabled={!canAdd || savingId === "new"}
              onClick={() => void saveNew()}
              style={{ width: "100%" }}
              title={!String(draftNew.sku || "").trim() ? "SKU wajib diisi" : "Tambah varian"}
            >
              {savingId === "new" ? "Menambah…" : "Tambah"}
            </button>
          </div>
        </div>

        {/* Responsive fallback */}
        <style>
          {`
            @media (max-width: 1000px) {
              .card > div[style*="grid-template-columns: 1.2fr 1fr 1fr 1fr 1fr 0.8fr"] {
                grid-template-columns: 1fr 1fr !important;
              }
            }
            @media (max-width: 560px) {
              .card > div[style*="grid-template-columns: 1fr 1fr"] {
                grid-template-columns: 1fr !important;
              }
            }
          `}
        </style>
      </div>

      {/* Table */}
      <div className="card">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--space-3)",
            flexWrap: "wrap",
            marginBottom: "var(--space-3)",
          }}
        >
          <div style={{ fontWeight: 800 }}>Daftar Varian</div>
          <span className="text-dim" style={{ fontSize: ".85rem" }}>
            Total: {(rows ?? []).length}
          </span>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table className="table" style={{ minWidth: 860 }}>
            <thead>
              <tr>
                <th style={{ width: 190 }}>SKU</th>
                <th style={{ width: 140 }}>Size</th>
                <th style={{ width: 140 }}>Type</th>
                <th style={{ width: 140 }}>Tester</th>
                <th className="text-right" style={{ width: 160 }}>
                  Harga
                </th>
                <th style={{ width: 90, textAlign: "center" }}>Aktif</th>
                <th className="text-right" style={{ width: 220 }}>
                  Aksi
                </th>
              </tr>
            </thead>

            <tbody>
              {(rows ?? []).map((r) => (
                <tr key={r.id} style={{ opacity: savingId === r.id ? 0.7 : 1 }}>
                  <td>
                    <input
                      className="input"
                      value={r.sku}
                      onChange={(e) =>
                        setRows((prev) =>
                          prev.map((x) => (x.id === r.id ? { ...x, sku: e.target.value } : x))
                        )
                      }
                      disabled={savingId === r.id}
                    />
                  </td>

                  <td>
                    <input
                      className="input"
                      value={r.size ?? ""}
                      onChange={(e) =>
                        setRows((prev) =>
                          prev.map((x) => (x.id === r.id ? { ...x, size: e.target.value } : x))
                        )
                      }
                      disabled={savingId === r.id}
                    />
                  </td>

                  <td>
                    <input
                      className="input"
                      value={r.type ?? ""}
                      onChange={(e) =>
                        setRows((prev) =>
                          prev.map((x) => (x.id === r.id ? { ...x, type: e.target.value } : x))
                        )
                      }
                      disabled={savingId === r.id}
                    />
                  </td>

                  <td>
                    <input
                      className="input"
                      value={r.tester ?? ""}
                      onChange={(e) =>
                        setRows((prev) =>
                          prev.map((x) => (x.id === r.id ? { ...x, tester: e.target.value } : x))
                        )
                      }
                      disabled={savingId === r.id}
                    />
                  </td>

                  <td className="text-right">
                    <PriceInput
                      value={r.harga}
                      onChange={(next) =>
                        setRows((prev) =>
                          prev.map((x) => (x.id === r.id ? { ...x, harga: next } : x))
                        )
                      }
                    />
                  </td>

                  <td style={{ textAlign: "center" }}>
                    <input
                      type="checkbox"
                      checked={!!r.is_active}
                      onChange={(e) =>
                        setRows((prev) =>
                          prev.map((x) =>
                            x.id === r.id ? { ...x, is_active: e.target.checked } : x
                          )
                        )
                      }
                      disabled={savingId === r.id}
                    />
                  </td>

                  <td className="text-right">
                    <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", flexWrap: "wrap" }}>
                      <button
                        type="button"
                        className="button button-primary"
                        disabled={savingId === r.id}
                        onClick={() => void saveEdit(r)}
                        style={{ minWidth: 110 }}
                      >
                        {savingId === r.id ? "Menyimpan…" : "Simpan"}
                      </button>
                      <button
                        type="button"
                        className="button button-outline"
                        disabled={savingId === r.id}
                        onClick={() => void remove(r)}
                        style={{ minWidth: 90 }}
                      >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {(rows ?? []).length === 0 && (
                <tr>
                  <td colSpan={7}>
                    <div className="text-dim" style={{ padding: "var(--space-4)", textAlign: "center" }}>
                      Belum ada varian.
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="card" style={{ marginTop: "var(--space-4)", borderColor: "rgba(192,70,87,.35)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <span className="badge badge-danger">Error</span>
            <span className="text-dim" style={{ fontSize: ".92rem" }}>
              {error}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
