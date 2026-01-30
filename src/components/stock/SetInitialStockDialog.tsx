// src/components/stock/SetInitialStockDialog.tsx
import React, { useEffect, useMemo, useState, useCallback, useRef } from "react";
import CabangSelect from "./CabangSelect";
import GudangSelect from "./GudangSelect";
import VariantPicker from "./VariantPicker";
import { setInitialStock } from "../../api/stocks";

type Props = { open: boolean; onClose: () => void; onSuccess: () => void };

function getErrorMessage(err: unknown, fallback = "Terjadi kesalahan."): string {
  if (typeof err === "string") return err;
  if (err && typeof err === "object") {
    const maybe = (err as { message?: unknown }).message;
    if (typeof maybe === "string") return maybe;
  }
  return fallback;
}

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null;
}

/** Robust parser untuk berbagai bentuk nilai (number/string/object) tanpa `any` */
function parseId(v: unknown): number | undefined {
  if (v == null) return undefined;

  if (typeof v === "number") {
    return Number.isFinite(v) && v > 0 ? v : undefined;
  }

  if (typeof v === "string") {
    const n = Number(v);
    return Number.isFinite(n) && n > 0 ? n : undefined;
  }

  if (isRecord(v)) {
    const candidates = [
      "id",
      "value",
      "gudang_id",
      "gudangId",
      "cabang_id",
      "cabangId",
      "product_variant_id",
      "variantId",
    ];
    for (const key of candidates) {
      if (key in v) {
        const raw = (v as Record<string, unknown>)[key];
        if (typeof raw === "number") {
          if (Number.isFinite(raw) && raw > 0) return raw;
        } else if (typeof raw === "string") {
          const n = Number(raw);
          if (Number.isFinite(n) && n > 0) return n;
        }
      }
    }
  }

  return undefined;
}

export default function SetInitialStockDialog({ open, onClose, onSuccess }: Props) {
  const [cabangId, setCabangId] = useState<number | undefined>();
  const [gudangId, setGudangId] = useState<number | undefined>();
  const [variantId, setVariantId] = useState<number | undefined>();
  const [qty, setQty] = useState<number>(0);
  const [minStok, setMinStok] = useState<number | undefined>(10);
  const [saving, setSaving] = useState(false);

  const panelRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (!open) return;
    setGudangId(undefined);
    setVariantId(undefined);
    setQty(0);
    setMinStok(10);
  }, [open]);

  useEffect(() => {
    setGudangId(undefined);
  }, [cabangId]);

  // ESC to close (UI improvement; does not change business logic)
  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  const onCabangChange = (raw: unknown) => setCabangId(parseId(raw));
  const onGudangChange = (raw: unknown) => setGudangId(parseId(raw));
  const onVariantChange = (raw: unknown) => setVariantId(parseId(raw));

  const onQtyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const n = raw === "" ? 0 : Number(raw);
    setQty(n);
  };

  const onMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const n = raw === "" ? 0 : Number(raw);
    setMinStok(n);
  };

  const valid = useMemo(() => {
    const gidOk = Number.isFinite(gudangId) && Number(gudangId) > 0;
    const vidOk = Number.isFinite(variantId) && Number(variantId) > 0;
    const qtyOk = Number.isFinite(qty) && qty >= 0;
    return gidOk && vidOk && qtyOk;
  }, [gudangId, variantId, qty]);

  const disabledReason = useMemo(() => {
    const reasons: string[] = [];
    if (!(Number.isFinite(gudangId) && Number(gudangId) > 0)) reasons.push("Pilih gudang.");
    if (!(Number.isFinite(variantId) && Number(variantId) > 0)) reasons.push("Pilih varian.");
    if (!(Number.isFinite(qty) && qty >= 0)) reasons.push("Qty harus ≥ 0.");
    return reasons.join(" ");
  }, [gudangId, variantId, qty]);

  const handleSubmit = useCallback(async () => {
    if (!valid) return;

    const gid = Number(gudangId);
    const vid = Number(variantId);
    const q = Number(qty);
    const m = minStok != null ? Number(minStok) : undefined;

    if (!Number.isFinite(gid) || gid <= 0) return;
    if (!Number.isFinite(vid) || vid <= 0) return;
    if (!Number.isFinite(q) || q < 0) return;

    setSaving(true);
    try {
      await setInitialStock({
        gudang_id: gid,
        product_variant_id: vid,
        qty: q,
        min_stok: m,
      });
      onSuccess();
      onClose();
    } catch (err: unknown) {
      const msg = getErrorMessage(err, "Gagal set stok awal.");
      alert(msg);
    } finally {
      setSaving(false);
    }
  }, [valid, gudangId, variantId, qty, minStok, onSuccess, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Set stok awal"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        padding: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(2,6,23,0.55)",
        backdropFilter: "blur(4px)",
      }}
      onMouseDown={(e) => {
        // click backdrop to close, but ignore clicks inside panel
        if (!panelRef.current) return;
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <form
        ref={panelRef}
        className="card"
        style={{
          width: "100%",
          maxWidth: 720,
          borderRadius: 22,
          overflow: "hidden",
          boxShadow: "0 30px 90px rgba(0,0,0,0.35)",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          void handleSubmit();
        }}
        data-testid="set-initial-stock-form"
      >
        {/* Header */}
        <div
          style={{
            padding: "18px 18px 14px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <div>
            <h3 style={{ margin: 0, marginBottom: 6, fontWeight: 800 }}>
              Set Stok Awal
            </h3>
            <div className="text-dim" style={{ fontSize: ".92rem", lineHeight: 1.5 }}>
              Tentukan gudang, varian, qty awal, dan min stok untuk kebutuhan peringatan low stock.
            </div>
          </div>

          <button
            type="button"
            className="button button-ghost"
            onClick={onClose}
            disabled={saving}
            aria-label="Tutup dialog"
            style={{
              width: 38,
              height: 38,
              borderRadius: 999,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              lineHeight: 1,
            }}
            title="Tutup"
          >
            ×
          </button>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(0,0,0,0.06)" }} />

        {/* Body */}
        <div style={{ padding: 18 }}>
          {/* Cabang + Gudang */}
          <div className="form-row form-row--2" style={{ marginBottom: 14 }}>
            <div>
              <label style={{ display: "block", fontWeight: 700, marginBottom: 8 }}>
                Cabang
              </label>
              <CabangSelect value={cabangId} onChange={onCabangChange} />
              <div className="text-dim" style={{ fontSize: ".85rem", marginTop: 6 }}>
                Pilih cabang untuk memfilter daftar gudang.
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontWeight: 700, marginBottom: 8 }}>
                Gudang
              </label>
              <GudangSelect cabangId={cabangId} value={gudangId} onChange={onGudangChange} />
              <div className="text-dim" style={{ fontSize: ".85rem", marginTop: 6 }}>
                Gudang wajib dipilih agar stok tercatat pada lokasi yang benar.
              </div>
            </div>
          </div>

          {/* Varian full */}
          <div style={{ marginBottom: 14 }}>
            <label style={{ display: "block", fontWeight: 700, marginBottom: 8 }}>
              Varian Produk
            </label>
            <VariantPicker value={variantId} onChange={onVariantChange} />
            <div className="text-dim" style={{ fontSize: ".85rem", marginTop: 6 }}>
              Pilih SKU/varian yang akan diisi stok awalnya.
            </div>
          </div>

          {/* Qty + Min */}
          <div className="form-row form-row--2" style={{ marginBottom: 10 }}>
            <div>
              <label style={{ display: "block", fontWeight: 700, marginBottom: 8 }}>
                Qty Awal
              </label>
              <input
                type="number"
                min={0}
                className="input"
                value={Number.isFinite(qty) ? qty : 0}
                onChange={onQtyChange}
                required
                placeholder="0"
              />
              <div className="text-dim" style={{ fontSize: ".85rem", marginTop: 6 }}>
                Nilai awal boleh 0 jika memang belum ada stok.
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontWeight: 700, marginBottom: 8 }}>
                Min. Stok
              </label>
              <input
                type="number"
                min={0}
                className="input"
                value={minStok ?? 0}
                onChange={onMinChange}
                placeholder="10"
              />
              <div className="text-dim" style={{ fontSize: ".85rem", marginTop: 6 }}>
                Digunakan untuk penanda low stock (peringatan).
              </div>
            </div>
          </div>

          {/* Hint invalid */}
          {!valid && (
            <div
              style={{
                marginTop: 12,
                padding: "10px 12px",
                borderRadius: 12,
                border: "1px solid rgba(245,158,11,0.25)",
                background: "rgba(245,158,11,0.10)",
                fontSize: ".9rem",
              }}
            >
              <strong style={{ fontWeight: 800 }}>Belum bisa simpan.</strong>{" "}
              <span>{disabledReason || "Lengkapi data yang diperlukan."}</span>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div style={{ height: 1, background: "rgba(0,0,0,0.06)" }} />
        <div
          style={{
            padding: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          <div className="text-dim" style={{ fontSize: ".85rem" }}>
            Tip: tekan <strong>ESC</strong> untuk menutup dialog.
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            <button type="button" className="button" onClick={onClose} disabled={saving}>
              Batal
            </button>
            <button
              type="submit"
              className="button button-primary"
              disabled={!valid || saving}
              style={{ minWidth: 120 }}
              title={!valid ? disabledReason : ""}
            >
              {saving ? "Menyimpan…" : "Simpan"}
            </button>
          </div>
        </div>
      </form>

      {/* Responsif: agar tetap rapi di mobile */}
      <style>
        {`
          @media (max-width: 640px) {
            form.card[style*="max-width: 720px"] {
              border-radius: 16px !important;
            }
          }
        `}
      </style>
    </div>
  );
}
