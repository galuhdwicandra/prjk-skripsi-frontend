// src/components/pos/CheckoutDialog.tsx
import React, { useMemo, useState, useEffect, useCallback } from "react";
import { useCart } from "../../store/cart";
import type { CheckoutPayload, PaymentMethod, Order, CashPosition } from "../../types/pos";
import { checkout } from "../../api/pos";

import CustomerSelect from "../customers/CustomerSelect";
import type { Customer } from "../../types/customers";

import { createCustomer } from "../../api/customers";
import { useAuth } from "../../store/auth";

type Props = {
  open: boolean;
  onClose: () => void;
  branchId: number;
  warehouseId: number;
  onSuccess: (order: Order) => void;
};

type PayMode = "FULL" | "DP" | "PENDING";

const FF_XENDIT = import.meta.env.VITE_FEATURE_XENDIT === "true";

const payMethods: PaymentMethod[] = FF_XENDIT ? ["CASH", "TRANSFER", "QRIS", "XENDIT"] : ["CASH", "TRANSFER", "QRIS"];

const CASH_POSITIONS: { label: string; value: CashPosition }[] = [
  { label: "Konsumen", value: "CUSTOMER" },
  { label: "Kasir", value: "CASHIER" },
  { label: "Sales", value: "SALES" },
  { label: "Admin", value: "ADMIN" },
];

const toIDR = (n: number) => (n ?? 0).toLocaleString("id-ID", { style: "currency", currency: "IDR" });

const toFloat = (v: unknown): number => {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
};

export default function CheckoutDialog({
  open,
  onClose,
  branchId,
  warehouseId,
  onSuccess,
}: Props): React.ReactElement | null {
  const { items, quote, clear } = useCart();

  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  // Customer (opsional)
  const [nama, setNama] = useState("");
  const [phone, setPhone] = useState("");
  const [alamat, setAlamat] = useState("");

  // Mode pembayaran: FULL / DP / PENDING
  const [mode, setMode] = useState<PayMode>("FULL");

  // Metode & nominal
  const [method, setMethod] = useState<PaymentMethod>("CASH");
  const grand = useMemo(() => toFloat(quote?.totals?.grand_total ?? 0), [quote]);

  // Nominal untuk FULL & DP
  const [bayar, setBayar] = useState<number>(grand); // untuk FULL
  const [dpAmount, setDpAmount] = useState<number>(0); // untuk DP

  // Posisi Uang
  const [cashPosition, setCashPosition] = useState<CashPosition>("CASHIER");

  // State proses
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const { hasRole } = useAuth();

  const canCreateCustomer =
    hasRole("superadmin") ||
    hasRole("admin_cabang") ||
    hasRole("kasir") ||
    hasRole("sales");

  const [creatingCustomer, setCreatingCustomer] = useState(false);

  const handleCreateCustomer = useCallback(async () => {
    if (!canCreateCustomer || creatingCustomer) return;

    const namaBaru = window.prompt("Nama pelanggan?")?.trim();
    if (!namaBaru) return;

    const phoneBaru = window.prompt("No HP (contoh 08xxxxxxxxxx)?")?.trim();
    if (!phoneBaru) return;

    setCreatingCustomer(true);
    setErr(null);

    try {
      const c = await createCustomer({
        branch_id: branchId,     // penting: supaya customer masuk cabang yang sedang diproses
        nama: namaBaru,
        phone: phoneBaru,
      });

      setSelectedCustomer(c);

      // opsional: prefilling juga langsung (biar terasa “langsung kepilih”)
      setNama((v) => v || c.nama || "");
      setPhone((v) => v || c.phone || "");
      setAlamat((v) => v || c.alamat || "");
    } catch (e) {
      const msg = (e as Error)?.message || "Gagal membuat pelanggan.";
      setErr(msg);
    } finally {
      setCreatingCustomer(false);
    }
  }, [canCreateCustomer, creatingCustomer, branchId]);


  // Sinkronisasi jumlah saat total berubah
  useEffect(() => {
    if (!open) return;
    setBayar(grand);
    setDpAmount(0);
    setErr(null);
  }, [grand, open]);

  // Validasi dasar
  const hasItems = (items?.length ?? 0) > 0;
  const totalReady = Number.isFinite(grand) && grand >= 0;

  // Validasi per mode
  const fullValid = useMemo(() => {
    if (mode !== "FULL") return true;
    if (!totalReady) return false;
    if (bayar < 0) return false;
    return bayar >= grand;
  }, [mode, bayar, grand, totalReady]);

  const dpValid = useMemo(() => {
    if (mode !== "DP") return true;
    if (!totalReady) return false;
    return dpAmount > 0 && dpAmount < grand;
  }, [mode, dpAmount, grand, totalReady]);

  const pendingValid = useMemo(() => {
    if (mode !== "PENDING") return true;
    return totalReady;
  }, [mode, totalReady]);

  const formValid = fullValid && dpValid && pendingValid && hasItems && totalReady;

  // Kembalian (hanya FULL + CASH)
  const change = useMemo(() => {
    if (mode !== "FULL" || method !== "CASH") return 0;
    return Math.max(0, bayar - grand);
  }, [mode, method, bayar, grand]);

  useEffect(() => {
    if (selectedCustomer) {
      setNama((v) => v || selectedCustomer.nama || "");
      setPhone((v) => v || selectedCustomer.phone || "");
      setAlamat((v) => v || selectedCustomer.alamat || "");
    }
  }, [selectedCustomer]);

  // Alasan tombol disable (UX)
  const disableReason = useMemo(() => {
    if (!hasItems) return "Tambahkan item ke keranjang.";
    if (!totalReady) return "Total belum siap. Coba lagi.";
    if (mode === "FULL") {
      if (bayar < 0) return "Nominal bayar tidak boleh negatif.";
      if (!fullValid) {
        if (method === "CASH") return "Nominal bayar harus ≥ total.";
        return "Nominal bayar minimal sama dengan total.";
      }
    }
    if (mode === "DP" && !dpValid) return "Nominal DP harus > 0 dan < total.";
    return null;
  }, [hasItems, totalReady, mode, bayar, method, fullValid, dpValid]);

  const submit = useCallback(async () => {
    if (!formValid || loading) return;
    setLoading(true);
    setErr(null);
    try {
      const payload: CheckoutPayload = {
        items,
        branch_id: branchId,
        warehouse_id: warehouseId,
        customer_id: selectedCustomer?.id,
        customer: nama || phone || alamat || selectedCustomer
          ? {
            nama: nama || selectedCustomer?.nama || "",
            phone: phone || selectedCustomer?.phone || "",
            alamat: alamat || selectedCustomer?.alamat || "",
          }
          : undefined,
        cash_position: cashPosition,
      };

      if (mode === "FULL") {
        payload.payment = { method, amount: bayar };
      } else if (mode === "DP") {
        payload.payment = { method, amount: dpAmount };
      }

      const order = await checkout(payload);

      if (FF_XENDIT && method === "XENDIT") {
        const xp = order.payments?.find((p) => p.method === "XENDIT" && p.status === "PENDING");
        const link = xp?.ref_no;
        if (link && /^https?:\/\//i.test(link)) {
          window.open(link, "_blank", "noopener,noreferrer");
        }
      }

      clear();
      onSuccess(order);
    } catch (e) {
      const msg = (e as Error)?.message || "Gagal memproses pembayaran.";
      setErr(msg);
    } finally {
      setLoading(false);
    }
  }, [
    formValid,
    loading,
    items,
    branchId,
    warehouseId,
    selectedCustomer,
    nama,
    phone,
    alamat,
    cashPosition,
    mode,
    method,
    bayar,
    dpAmount,
    clear,
    onSuccess,
  ]);

  // Keyboard: Enter submit, Esc tutup
  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") {
        if (!loading) onClose();
        return;
      }
      if (ev.key === "Enter") {
        if (formValid && !loading) {
          ev.preventDefault();
          void submit();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [formValid, loading, submit, onClose]);

  if (!open) return null;

  const onBayarChange = (v: string) => {
    const n = toFloat(v);
    setBayar(n < 0 ? 0 : n);
  };
  const onDpChange = (v: string) => {
    const n = toFloat(v);
    setDpAmount(n < 0 ? 0 : n);
  };

  const showMethodBlock = mode !== "PENDING";
  const rightTitle =
    mode === "PENDING" ? "Ringkasan (Pending)" : mode === "DP" ? "Ringkasan (DP)" : "Ringkasan (Full)";

  return (
    <div className="modal-overlay">
      <style>{`
        /* Layout rapi khusus CheckoutDialog */
        .pos-checkout.modal{
          width: min(1040px, calc(100vw - 28px));
          max-height: calc(100dvh - 28px);
          overflow: auto;
          border-radius: 18px;
        }

        .pos-checkout__header{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap: 12px;
          position: sticky;
          top: 0;
          z-index: 2;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(0,0,0,0.06);
          padding-bottom: 10px;
          margin-bottom: 12px;
        }

        .pos-checkout__titlewrap{
          display:flex;
          flex-direction:column;
          gap: 4px;
          min-width: 0;
        }

        .pos-checkout__subtitle{
          font-size: 12px;
          opacity: .72;
        }

        .pos-checkout__body{
          display:grid;
          gap: 12px;
        }

        @media (min-width: 980px){
          .pos-checkout__body{
            grid-template-columns: minmax(0, 1fr) 360px;
            align-items:start;
          }
        }

        .pos-checkout__left{
          display:flex;
          flex-direction:column;
          gap: 12px;
          min-width: 0;
        }

        .pos-checkout__right{
          display:flex;
          flex-direction:column;
          gap: 12px;
        }

        @media (min-width: 980px){
          .pos-checkout__right{
            position: sticky;
            top: 68px;
          }
        }

        .pos-checkout__actions{
          display:flex;
          gap: 10px;
          justify-content:flex-end;
          align-items:center;
          margin-top: 2px;
        }

        .pos-checkout__actions .button{
          border-radius: 999px;
        }

        .pos-checkout__primary{
          min-width: 220px;
        }

        @media (max-width: 520px){
          .pos-checkout__actions{
            flex-direction: column-reverse;
            align-items: stretch;
          }
          .pos-checkout__primary{
            min-width: unset;
            width: 100%;
          }
        }

        .pos-checkout__hint{
          margin-top: 6px;
        }

        .pos-chiprow{
          display:flex;
          align-items:center;
          gap: 8px;
          flex-wrap: wrap;
        }
      `}</style>

      <div className="modal card pos-checkout" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
        {/* Header */}
        <div className="pos-checkout__header">
          <div className="pos-checkout__titlewrap">
            <h3 id="dialog-title" className="modal-title" style={{ margin: 0 }}>
              Bayar
            </h3>
            <div className="pos-chiprow">
              <span className="badge badge-success">Cabang #{branchId}</span>
              <span className="badge badge-info">Gudang #{warehouseId}</span>
              <span className="badge badge-warning">
                Mode: {mode === "FULL" ? "Full" : mode === "DP" ? "DP" : "Pending"}
              </span>
              {showMethodBlock && <span className="badge badge-secondary">Metode: {method}</span>}
            </div>
            <div className="pos-checkout__subtitle">Tekan Enter untuk proses, Esc untuk tutup.</div>
          </div>

          <button className="button button-ghost" onClick={onClose} disabled={loading}>
            Tutup
          </button>
        </div>

        {/* Body */}
        <div className="pos-checkout__body">
          {/* Left column */}
          <div className="pos-checkout__left">
            {/* Customer (opsional) */}
            <div className="card soft">
              <div className="form-row">
                <div className="form-field" style={{ width: "100%" }}>
                  <label className="label">Pelanggan Terdaftar</label>

                  <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <CustomerSelect branchId={branchId} value={selectedCustomer} onChange={setSelectedCustomer} />
                    </div>

                    {canCreateCustomer && (
                      <button
                        type="button"
                        className="button button-outline"
                        onClick={() => void handleCreateCustomer()}
                        disabled={creatingCustomer || loading}
                        aria-disabled={creatingCustomer || loading}
                        title="Buat pelanggan baru tanpa pindah halaman"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {creatingCustomer ? "Membuat…" : "+ Pelanggan Baru"}
                      </button>
                    )}
                  </div>

                  <div className="muted text-xs" style={{ marginTop: 6 }}>
                    Pilih pelanggan untuk mem-prefill nama/HP/alamat. Data ini akan di-snapshot ke order.
                  </div>
                </div>
              </div>

              <div className="form-row form-row--2">
                <div className="form-field">
                  <label className="label">Nama (opsional)</label>
                  <input
                    className="input"
                    placeholder="Nama pelanggan"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    autoFocus
                  />
                </div>
                <div className="form-field">
                  <label className="label">HP (opsional)</label>
                  <input
                    className="input"
                    placeholder="08xx / 62xx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    inputMode="tel"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label className="label">Alamat (opsional)</label>
                  <input className="input" placeholder="Alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} />
                </div>
              </div>
            </div>

            {/* Posisi Uang */}
            <div className="card soft">
              <div className="form-row">
                <div className="form-field" style={{ width: "100%" }}>
                  <label className="label">Posisi Uang</label>
                  <select
                    className="select"
                    value={cashPosition}
                    onChange={(e) => setCashPosition(e.target.value as CashPosition)}
                    aria-label="Posisi uang saat ini"
                  >
                    {CASH_POSITIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <div className="muted text-xs" style={{ marginTop: 6 }}>
                    Menandai siapa yang memegang uang cash untuk pesanan ini.
                  </div>
                </div>
              </div>
            </div>

            {/* Mode Pembayaran */}
            <div className="card soft">
              <div className="form-row form-row--3">
                <label className="checkbox">
                  <input
                    type="radio"
                    name="paymode"
                    value="FULL"
                    checked={mode === "FULL"}
                    onChange={() => setMode("FULL")}
                  />
                  <span>Full</span>
                </label>

                <label className="checkbox">
                  <input
                    type="radio"
                    name="paymode"
                    value="DP"
                    checked={mode === "DP"}
                    onChange={() => setMode("DP")}
                  />
                  <span>Down Payment</span>
                </label>

                <label className="checkbox">
                  <input
                    type="radio"
                    name="paymode"
                    value="PENDING"
                    checked={mode === "PENDING"}
                    onChange={() => setMode("PENDING")}
                  />
                  <span>Pending</span>
                </label>
              </div>
            </div>

            {/* Metode & Nominal (kecuali PENDING) */}
            {showMethodBlock && (
              <div className="card soft">
                <div className="form-row form-row--2">
                  <div className="form-field">
                    <label className="label">Metode</label>
                    <select
                      className="select"
                      value={method}
                      onChange={(e) => setMethod(e.target.value as PaymentMethod)}
                      aria-label="Metode pembayaran"
                    >
                      {payMethods.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>

                    {method === "XENDIT" && FF_XENDIT && (
                      <div className="muted text-xs" style={{ marginTop: 6 }}>
                        Setelah klik <em>Proses Bayar</em>, Anda akan diarahkan ke halaman pembayaran Xendit.
                      </div>
                    )}
                  </div>

                  <div className="form-field">
                    <label className="label">{mode === "FULL" ? "Nominal Bayar" : "Nominal DP"}</label>
                    {mode === "FULL" ? (
                      <input
                        type="number"
                        className="input text-right"
                        min={0}
                        step="0.01"
                        value={Number.isFinite(bayar) ? bayar : 0}
                        onChange={(e) => onBayarChange(e.target.value)}
                        inputMode="decimal"
                        aria-label="Nominal bayar (Full)"
                      />
                    ) : (
                      <input
                        type="number"
                        className="input text-right"
                        min={0}
                        step="0.01"
                        value={Number.isFinite(dpAmount) ? dpAmount : 0}
                        onChange={(e) => onDpChange(e.target.value)}
                        inputMode="decimal"
                        aria-label="Nominal DP"
                      />
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Actions (desktop tetap di bawah kiri agar natural setelah isi form) */}
            <div className="card soft">
              {!formValid && disableReason && (
                <div className="alert alert-warning" style={{ marginBottom: 10 }}>
                  {disableReason}
                </div>
              )}

              {err && (
                <div className="alert alert-danger" role="alert" style={{ marginBottom: 10 }}>
                  {err}
                </div>
              )}

              <div className="pos-checkout__actions">
                <button className="button button-outline" onClick={onClose} disabled={loading}>
                  Batal
                </button>
                <button
                  className="button button-primary pos-checkout__primary"
                  onClick={() => void submit()}
                  disabled={loading || !formValid}
                  aria-disabled={loading || !formValid}
                >
                  {loading ? "Memproses…" : mode === "PENDING" ? "Simpan (Belum Bayar)" : "Proses Bayar"}
                </button>
              </div>

              <div className="muted text-xs pos-checkout__hint">
                Tekan <kbd className="kbd">Enter</kbd> untuk submit, <kbd className="kbd">Esc</kbd> untuk tutup.
              </div>
            </div>
          </div>

          {/* Right column: Ringkasan sticky */}
          <div className="pos-checkout__right">
            <div className="card soft">
              <div style={{ fontWeight: 800, marginBottom: 10 }}>{rightTitle}</div>

              <div className="kv-grid">
                <div className="kv">
                  <span className="kv-key">Total</span>
                  <span className="kv-val">
                    <strong>{toIDR(grand)}</strong>
                  </span>
                </div>

                {mode === "FULL" && method === "CASH" && bayar >= grand && (
                  <div className="kv">
                    <span className="kv-key">Kembalian</span>
                    <span className="kv-val">{toIDR(change)}</span>
                  </div>
                )}

                {mode === "DP" && dpAmount > 0 && dpAmount < grand && (
                  <div className="kv">
                    <span className="kv-key">Sisa Tagihan</span>
                    <span className="kv-val">{toIDR(Math.max(0, grand - dpAmount))}</span>
                  </div>
                )}
              </div>

              <div style={{ marginTop: 10, opacity: 0.75, fontSize: 12, lineHeight: 1.55 }}>
                • Full: pembayaran lunas (CASH bisa kembalian). <br />
                • DP: bayar sebagian, sisa ditagihkan nanti. <br />
                • Pending: simpan order tanpa payment.
              </div>
            </div>

            {/* Status kecil agar “terlihat” ketika error / loading */}
            <div className="card soft">
              <div className="kv-grid">
                <div className="kv">
                  <span className="kv-key">Item</span>
                  <span className="kv-val">{items?.length ?? 0}</span>
                </div>
                <div className="kv">
                  <span className="kv-key">Valid</span>
                  <span className="kv-val">{formValid ? "Ya" : "Tidak"}</span>
                </div>
              </div>

              {!formValid && disableReason && (
                <div className="muted text-xs" style={{ marginTop: 8 }}>
                  {disableReason}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
