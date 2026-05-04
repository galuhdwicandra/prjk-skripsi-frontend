// src/pages/pos/OrdersIndex.tsx
import React, { useEffect, useMemo, useState, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import {
  listOrders,
  getOrder,
  updateOrderItems,
  reprintReceipt,
  resendWhatsApp,
  addPayment,
  setOrderCashPosition,
} from "../../api/pos";
import type {
  ID,
  Order,
  OrderItem,
  OrdersQuery,
  UpdateOrderItemsPayload,
  OrderStatus,
  CheckoutPayment,
  CashPosition,
} from "../../types/pos";
import { createDelivery, assignCourier } from "../../api/deliveries";
import type { DeliveryType } from "../../types/delivery";
import { listCashHolders } from "../../api/cash";
import type { CashHolder } from "../../types/cash";
import { useAuth } from "../../store/auth";

const formatIDR = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);

/* ---------- FilterBar ---------- */
type FilterState = OrdersQuery & { local_q?: string; cash_position?: CashPosition };

type PaymentMethodOption = CheckoutPayment["method"];

type SettlementFormState = {
  method: PaymentMethodOption;
  amount: string;
  holder_id: string;
  ref_no: string;
};

function FilterBar(props: {
  value: FilterState;
  onChange: (next: FilterState) => void;
  onApply?: () => void;
}) {
  const { value, onChange } = props;
  const [search, setSearch] = useState(value.local_q ?? value.q ?? "");
  useEffect(() => setSearch(value.local_q ?? value.q ?? ""), [value.local_q, value.q]);

  return (
    <div className="card">
      <div className="posx-filter">
        <div className="form-row form-row--3">
          <div className="form-field">
            <label className="label">Cari</label>
            <input
              className="input"
              placeholder="kode/nama/telepon"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();

                  onChange({
                    ...value,
                    q: search.trim() || undefined,
                    local_q: search.trim() || undefined,
                    page: 1,
                  });
                }
              }}
            />
          </div>

          <div className="form-field">
            <label className="label">Cabang ID</label>
            <input
              type="number"
              className="input"
              value={value.cabang_id ?? ""}
              onChange={(e) =>
                onChange({
                  ...value,
                  cabang_id: e.target.value ? Number(e.target.value) : undefined,
                  page: 1,
                })
              }
            />
          </div>

          <div className="form-field">
            <label className="label">Status</label>
            <select
              className="select"
              value={value.status ?? ""}
              onChange={(e) =>
                onChange({
                  ...value,
                  status: (e.target.value || undefined) as OrderStatus | undefined,
                  page: 1,
                })
              }
            >
              <option value="">Semua</option>
              <option value="DRAFT">DRAFT</option>
              <option value="UNPAID">UNPAID</option>
              <option value="PAID">PAID</option>
              <option value="VOID">VOID</option>
              <option value="REFUND">REFUND</option>
            </select>
          </div>

          <div className="form-field">
            <label className="label">Posisi Uang</label>
            <select
              className="select"
              value={value.cash_position ?? ""}
              onChange={(e) =>
                onChange({
                  ...value,
                  cash_position: (e.target.value || undefined) as CashPosition | undefined,
                  page: 1,
                })
              }
            >
              <option value="">Semua</option>
              <option value="CUSTOMER">Konsumen</option>
              <option value="CASHIER">Kasir</option>
              <option value="SALES">Sales</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>

          <div className="form-field">
            <label className="label">Dari</label>
            <input
              type="date"
              className="input"
              value={value.date_from ?? ""}
              onChange={(e) => onChange({ ...value, date_from: e.target.value || undefined, page: 1 })}
            />
          </div>

          <div className="form-field">
            <label className="label">Sampai</label>
            <input
              type="date"
              className="input"
              value={value.date_to ?? ""}
              onChange={(e) => onChange({ ...value, date_to: e.target.value || undefined, page: 1 })}
            />
          </div>

          <div className="form-actions posx-filter-actions">
            <button
              className="button button-outline"
              onClick={() => {
                setSearch("");

                onChange({
                  page: 1,
                  per_page: value.per_page ?? 10,
                  sort: "-ordered_at",
                  q: undefined,
                  local_q: undefined,
                });
              }}
            >
              Reset
            </button>
            <button
              className="button button-primary"
              onClick={() => {
                onChange({
                  ...value,
                  q: search.trim() || undefined,
                  local_q: search.trim() || undefined,
                  page: 1,
                });
              }}
            >
              Terapkan
            </button>
          </div>
        </div>

        <div className="posx-filter-hint">
          Tips: tekan <span className="mono">Enter</span> di kolom Cari untuk menerapkan filter.
        </div>
      </div>
    </div>
  );
}

/* ---------- helpers ---------- */
function statusBadgeClass(status: OrderStatus): string {
  switch (status) {
    case "PAID":
      return "badge badge-success";
    case "UNPAID":
      return "badge badge-warning";
    case "VOID":
    case "REFUND":
      return "badge badge-danger";
    default:
      return "badge";
  }
}

function normalizePhoneForWa(raw?: string | null): string | null {
  if (!raw) return null;
  let digits = raw.replace(/\D/g, "");
  if (!digits) return null;
  if (digits.startsWith("0")) digits = "62" + digits.slice(1);
  if (digits.startsWith("62")) return digits;
  return digits;
}

const CASH_POSITION_OPTIONS: { value: CashPosition; label: string }[] = [
  { value: "CUSTOMER", label: "Konsumen" },
  { value: "CASHIER", label: "Kasir" },
  { value: "SALES", label: "Sales" },
  { value: "ADMIN", label: "Admin" },
];

function CashPositionCell({
  order,
  onChanged,
}: {
  order: Order;
  onChanged: (updated: Order) => void;
}) {
  const [val, setVal] = React.useState<CashPosition>(order.cash_position ?? "CASHIER");
  const [saving, setSaving] = React.useState(false);

  async function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const next = e.target.value as CashPosition;
    setVal(next);
    setSaving(true);
    try {
      const updated = await setOrderCashPosition(order.id, next);
      onChanged(updated);
    } catch (err) {
      setVal(order.cash_position ?? "CASHIER");
      alert((err as Error)?.message ?? "Gagal mengubah Posisi Uang.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <select className="select" value={val} onChange={handleChange} disabled={saving} style={{ minWidth: 140 }}>
      {CASH_POSITION_OPTIONS.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

/* ---------- OrdersTable ---------- */
function OrdersTable(props: {
  rows: Order[];
  onOpenDetail: (id: ID) => void;
  page: number;
  per_page: number;
  total: number;
  onPage: (p: number) => void;
  onCashPositionChanged: (updated: Order) => void;
}) {
  const { rows, onOpenDetail, page, per_page, total, onPage, onCashPositionChanged } = props;
  const last = Math.max(1, Math.ceil(total / Math.max(1, per_page || 10)));

  return (
    <div className="card">
      <div className="posx-table-head">
        <div className="muted text-sm">
          Halaman {page} dari {last} • Total {total} data
        </div>

        <div className="btn-group">
          <button className="button button-outline" disabled={page <= 1} onClick={() => onPage(page - 1)}>
            Prev
          </button>
          <button className="button button-outline" disabled={page >= last} onClick={() => onPage(page + 1)}>
            Next
          </button>
        </div>
      </div>

      {rows.length === 0 ? (
        <div className="posx-empty">
          <div className="posx-empty-title">Belum ada pesanan</div>
          <div className="muted text-sm">Data pesanan tidak ditemukan dari filter yang dipilih.</div>
        </div>
      ) : (
        <>
          {/* Desktop / tablet besar */}
          <div className="table-responsive posx-table-wrap posx-orders-desktop">
            <table className="table posx-table">
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>Kode</th>
                  <th>Pelanggan</th>
                  <th className="posx-col-phone">No HP</th>
                  <th className="posx-col-address">Alamat</th>
                  <th>Status</th>
                  <th className="text-right">Subtotal</th>
                  <th className="text-right posx-col-discount">Diskon</th>
                  <th className="text-right">Grand Total</th>
                  <th className="text-right posx-col-paid">Dibayar</th>
                  <th>Posisi Uang</th>
                  <th className="w-1">Aksi</th>
                </tr>
              </thead>

              <tbody>
                {rows.map((o) => (
                  <tr key={o.id}>
                    <td>{new Date(o.ordered_at).toLocaleString("id-ID")}</td>

                    <td>
                      <span className="mono">{o.kode}</span>
                    </td>

                    <td>{o.customer_name ?? "-"}</td>

                    <td className="posx-col-phone">{o.customer_phone ?? "-"}</td>

                    <td className="posx-col-address">
                      <span className="posx-clip" title={o.customer_address ?? ""}>
                        {o.customer_address ?? "-"}
                      </span>
                    </td>

                    <td>
                      <span className={`badge ${o.status === "PAID" ? "badge-success" : o.status === "VOID" ? "badge-danger" : "badge-warning"}`}>
                        {o.status}
                      </span>
                    </td>

                    <td className="text-right">{formatIDR(Number(o.subtotal ?? 0))}</td>
                    <td className="text-right posx-col-discount">{formatIDR(Number(o.discount ?? 0))}</td>
                    <td className="text-right font-semibold">{formatIDR(Number(o.grand_total ?? 0))}</td>
                    <td className="text-right posx-col-paid">{formatIDR(Number(o.paid_total ?? 0))}</td>

                    <td>
                      <CashPositionCell
                        order={o}
                        onChanged={onCashPositionChanged}
                      />
                    </td>

                    <td>
                      <button className="button button-outline" onClick={() => onOpenDetail(o.id)}>
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="posx-orders-mobile">
            {rows.map((o) => (
              <div className="posx-order-card" key={o.id}>
                <div className="posx-order-card-head">
                  <div className="min-w-0">
                    <div className="posx-order-code mono">{o.kode}</div>
                    <div className="muted text-xs">
                      {new Date(o.ordered_at).toLocaleString("id-ID")}
                    </div>
                  </div>

                  <span className={`badge ${o.status === "PAID" ? "badge-success" : o.status === "VOID" ? "badge-danger" : "badge-warning"}`}>
                    {o.status}
                  </span>
                </div>

                <div className="posx-order-customer">
                  <div className="posx-order-customer-name">{o.customer_name ?? "Tanpa nama pelanggan"}</div>
                  <div className="muted text-sm">{o.customer_phone ?? "No HP tidak tersedia"}</div>
                  {o.customer_address ? (
                    <div className="muted text-xs posx-order-address">{o.customer_address}</div>
                  ) : null}
                </div>

                <div className="posx-order-grid">
                  <div>
                    <span className="muted text-xs">Subtotal</span>
                    <strong>{formatIDR(Number(o.subtotal ?? 0))}</strong>
                  </div>

                  <div>
                    <span className="muted text-xs">Diskon</span>
                    <strong>{formatIDR(Number(o.discount ?? 0))}</strong>
                  </div>

                  <div>
                    <span className="muted text-xs">Grand Total</span>
                    <strong>{formatIDR(Number(o.grand_total ?? 0))}</strong>
                  </div>

                  <div>
                    <span className="muted text-xs">Dibayar</span>
                    <strong>{formatIDR(Number(o.paid_total ?? 0))}</strong>
                  </div>
                </div>

                <div className="posx-order-card-footer">
                  <div className="posx-order-cash">
                    <label className="muted text-xs">Posisi Uang</label>
                    <CashPositionCell
                      order={o}
                      onChanged={onCashPositionChanged}
                    />
                  </div>

                  <button className="button button-outline posx-order-detail-btn" onClick={() => onOpenDetail(o.id)}>
                    Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ---------- shared inline styles for modal ---------- */
const overlayStyle: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.45)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px",
  zIndex: 1000,
};

const modalStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: 980,
  borderRadius: 18,
  boxShadow: "0 18px 60px rgba(0,0,0,0.25)",
  overflow: "hidden",
};

/* ---------- Detail Dialog (Portal) ---------- */
function OrderDetailDialog(props: {
  open: boolean;
  order: Order | null;
  onClose: () => void;
  onEdit: (o: Order) => void;
  onReprint: (id: ID, format: "58" | "80") => void;
  onResendWa: (id: ID) => void;
  onPaymentSaved: (updated: Order) => void;
}) {
  const { open, order, onClose, onEdit, onReprint, onResendWa, onPaymentSaved } = props;

  const [dlOpen, setDlOpen] = useState(false);
  const [dlType, setDlType] = useState<DeliveryType>("DELIVERY");
  const [dlAuto, setDlAuto] = useState<boolean>(true);
  const [dlSubmitting, setDlSubmitting] = useState<boolean>(false);
  const [dlError, setDlError] = useState<string | null>(null);
  const [settlementOpen, setSettlementOpen] = useState(false);

  const sisa = Math.max(0, (order?.grand_total ?? 0) - (order?.paid_total ?? 0));
  if (!open || !order) return null;
  const o: Order = order;

  async function doCreateDelivery(): Promise<void> {
    setDlSubmitting(true);
    setDlError(null);
    try {
      const res = await createDelivery({ order_id: o.id, type: dlType });
      if (dlAuto) {
        try {
          await assignCourier(res.data.id, { auto: true });
        } catch {
          /* noop */
        }
      }
      alert("Delivery berhasil dibuat.");
      setDlOpen(false);
      onClose();
    } catch (e) {
      setDlError((e as Error)?.message ?? "Gagal membuat delivery.");
    } finally {
      setDlSubmitting(false);
    }
  }

  return createPortal(
    <div style={overlayStyle}>
      <div className="card" style={modalStyle} role="dialog" aria-modal="true">
        <div className="posx-modal-head">
          <div>
            <div className="posx-modal-title">
              Detail Pesanan — <span className="mono">{o.kode}</span>
            </div>
            <div className="muted text-sm">{new Date(o.ordered_at).toLocaleString("id-ID")}</div>
          </div>
          <button className="button button-ghost" onClick={onClose}>
            Tutup
          </button>
        </div>

        <div className="divider" />

        <div className="kv-grid posx-kv-pad">
          <div className="kv">
            <span className="kv-key">Status</span>
            <span className="kv-val">
              <span className={statusBadgeClass(o.status)}>{o.status}</span>
            </span>
          </div>
          <div className="kv">
            <span className="kv-key">Subtotal</span>
            <span className="kv-val">{formatIDR(o.subtotal)}</span>
          </div>
          <div className="kv">
            <span className="kv-key">Diskon</span>
            <span className="kv-val">{formatIDR(o.discount)}</span>
          </div>
          <div className="kv">
            <span className="kv-key">Total</span>
            <span className="kv-val">
              <strong>{formatIDR(o.grand_total)}</strong>
            </span>
          </div>
          <div className="kv">
            <span className="kv-key">Dibayar</span>
            <span className="kv-val">{formatIDR(o.paid_total)}</span>
          </div>
          <div className="kv">
            <span className="kv-key">Sisa</span>
            <span className="kv-val">
              <strong>{formatIDR(sisa)}</strong>
            </span>
          </div>
        </div>

        <div className="card soft posx-modal-section">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th className="text-right">Harga</th>
                  <th className="text-right">Diskon</th>
                  <th className="text-right">Qty</th>
                  <th className="text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {o.items.map((it) => {
                  const fifoAllocations = it.fifo_allocations ?? [];

                  return (
                    <React.Fragment key={it.id}>
                      <tr>
                        <td>{it.name_snapshot}</td>
                        <td className="text-right">{formatIDR(it.price)}</td>
                        <td className="text-right">{formatIDR(it.discount)}</td>
                        <td className="text-right">{it.qty}</td>
                        <td className="text-right">{formatIDR(it.line_total)}</td>
                      </tr>

                      <tr>
                        <td colSpan={5}>
                          <div
                            style={{
                              border: "1px solid rgba(37,99,235,.18)",
                              background: "rgba(37,99,235,.06)",
                              borderRadius: 12,
                              padding: 10,
                            }}
                          >
                            <div style={{ fontWeight: 800, marginBottom: 6 }}>
                              Lot FIFO Terpakai
                            </div>

                            {fifoAllocations.length === 0 ? (
                              <div className="muted" style={{ fontSize: 12 }}>
                                Belum ada alokasi lot. Biasanya muncul setelah pesanan berstatus PAID
                                dan stok dipotong melalui FIFO.
                              </div>
                            ) : (
                              <div style={{ display: "grid", gap: 6 }}>
                                {fifoAllocations.map((a) => {
                                  const lot = a.lot;
                                  const received = lot?.received_at
                                    ? new Date(lot.received_at).toLocaleDateString("id-ID")
                                    : "-";

                                  return (
                                    <div
                                      key={a.id}
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        gap: 10,
                                        flexWrap: "wrap",
                                        fontSize: 13,
                                      }}
                                    >
                                      <div>
                                        <strong>{lot?.lot_no ?? `LOT-${a.stock_lot_id}`}</strong>
                                        <span className="muted"> • Tanggal masuk: {received}</span>
                                      </div>

                                      <div>
                                        <span className="badge">
                                          Keluar: {a.qty_allocated}
                                        </span>

                                        <span
                                          className="badge"
                                          style={{
                                            marginLeft: 6,
                                            background: "rgba(0,0,0,.05)",
                                            color: "var(--color-text)",
                                          }}
                                        >
                                          Sisa lot: {lot?.qty_remaining ?? "-"}
                                        </span>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    </React.Fragment>
                  );
                })}
                {o.items.length === 0 && (
                  <tr>
                    <td colSpan={5}>
                      <div className="empty-state">Tidak ada item.</div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="posx-modal-actions">
          {o.status === "UNPAID" && sisa > 0 && (
            <button
              className="button button-primary"
              onClick={() => setSettlementOpen(true)}
            >
              Pelunasan
            </button>
          )}

          <button className="button button-outline" onClick={() => onEdit(o)}>
            Edit Item
          </button>
          <button className="button button-outline" onClick={() => onReprint(o.id, "58")}>
            Reprint 58
          </button>
          <button className="button button-outline" onClick={() => onReprint(o.id, "80")}>
            Reprint 80
          </button>
          <button className="button" onClick={() => onResendWa(o.id)}>
            Kirim WA
          </button>
          <button className="button button-primary" onClick={() => setDlOpen(true)}>
            Buat Delivery…
          </button>
        </div>

        {dlOpen &&
          createPortal(
            <div style={{ ...overlayStyle, zIndex: 1100 }}>
              <div className="card" style={{ ...modalStyle, maxWidth: 560 }} role="dialog" aria-modal="true">
                <div className="posx-modal-head">
                  <div className="posx-modal-title">Buat Pickup/Delivery</div>
                  <button className="button button-ghost" onClick={() => setDlOpen(false)}>
                    Tutup
                  </button>
                </div>

                <div className="divider" />

                <div className="form-row posx-modal-form">
                  <div className="form-field">
                    <label className="label">Jenis</label>
                    <select className="select" value={dlType} onChange={(e) => setDlType(e.target.value as DeliveryType)}>
                      <option value="PICKUP">PICKUP (Jemput)</option>
                      <option value="DELIVERY">DELIVERY (Antar)</option>
                      <option value="BOTH">BOTH (Jemput & Antar)</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label className="checkbox">
                      <input type="checkbox" checked={dlAuto} onChange={(e) => setDlAuto(e.target.checked)} />
                      <span>Auto-assign kurir</span>
                    </label>
                  </div>

                  {dlError && <div className="alert alert-danger">{dlError}</div>}

                  <div className="form-actions posx-modal-actions-row">
                    <button className="button button-outline" onClick={() => setDlOpen(false)} disabled={dlSubmitting}>
                      Batal
                    </button>
                    <button className="button button-primary" onClick={doCreateDelivery} disabled={dlSubmitting}>
                      {dlSubmitting ? "Membuat…" : "Buat"}
                    </button>
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )}
        <SettlementDialog
          open={settlementOpen}
          order={o}
          remaining={sisa}
          onClose={() => setSettlementOpen(false)}
          onSaved={(updated) => {
            setSettlementOpen(false);
            onPaymentSaved(updated);
          }}
        />
      </div>
    </div>,
    document.body
  );
}

/* ---------- Edit Dialog (Portal) ---------- */
function EditOrderDialog(props: {
  open: boolean;
  order: Order | null;
  onClose: () => void;
  onSaved: (updated: Order) => void;
}) {
  const { open, order, onClose, onSaved } = props;
  const [rows, setRows] = useState<OrderItem[]>([]);
  const [note, setNote] = useState<string>("");
  const [saving, setSaving] = useState(false);

  const totals = useMemo(() => {
    const subtotal = rows.reduce((acc, r) => acc + (r.price - r.discount) * r.qty, 0);
    return { subtotal, discount: 0, tax: 0, service_fee: 0, grand_total: subtotal };
  }, [rows]);

  useEffect(() => {
    if (open && order) {
      setRows(order.items.map((i) => ({ ...i })));
      setNote("");
    }
  }, [open, order]);

  if (!open || !order) return null;

  const updateRow = (id: ID, patch: Partial<OrderItem>) => {
    setRows((list) => list.map((r) => (r.id === id ? { ...r, ...patch } : r)));
  };

  const save = async () => {
    setSaving(true);
    try {
      const payload: UpdateOrderItemsPayload = {
        note: note || null,
        items: rows.map((r) => ({
          id: r.id,
          price: Number(r.price),
          discount: Number(r.discount),
          qty: Number(r.qty),
        })),
      };
      const updated = await updateOrderItems(order.id, payload);
      onSaved(updated);
    } catch (e) {
      alert((e as Error).message || "Gagal menyimpan perubahan.");
    } finally {
      setSaving(false);
    }
  };

  return createPortal(
    <div style={overlayStyle}>
      <div className="card" style={modalStyle} role="dialog" aria-modal="true">
        <div className="posx-modal-head">
          <div className="posx-modal-title">
            Edit Item — <span className="mono">{order.kode}</span>
          </div>
          <button className="button button-ghost" onClick={onClose}>
            Tutup
          </button>
        </div>

        <div className="divider" />

        <div className="card soft posx-modal-section">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th className="text-right">Harga</th>
                  <th className="text-right">Diskon</th>
                  <th className="text-right">Qty</th>
                  <th className="text-right">Line Total</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => {
                  const lt = (Number(r.price) - Number(r.discount)) * Number(r.qty);
                  return (
                    <tr key={r.id}>
                      <td>{r.name_snapshot}</td>
                      <td className="text-right">
                        <input
                          className="input text-right"
                          type="number"
                          inputMode="numeric"
                          value={r.price}
                          onChange={(e) => updateRow(r.id, { price: Number(e.target.value || 0) })}
                        />
                      </td>
                      <td className="text-right">
                        <input
                          className="input text-right"
                          type="number"
                          inputMode="numeric"
                          value={r.discount}
                          onChange={(e) => updateRow(r.id, { discount: Number(e.target.value || 0) })}
                        />
                      </td>
                      <td className="text-right">
                        <input
                          className="input text-right"
                          type="number"
                          inputMode="numeric"
                          value={r.qty}
                          onChange={(e) => updateRow(r.id, { qty: Number(e.target.value || 0) })}
                        />
                      </td>
                      <td className="text-right">{formatIDR(lt)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="form-row posx-modal-form">
          <div className="form-field">
            <label className="label">Catatan Koreksi (opsional)</label>
            <input className="input" value={note} onChange={(e) => setNote(e.target.value)} />
          </div>

          <div className="form-field posx-totals">
            <div>
              Subtotal (preview): <strong>{formatIDR(totals.subtotal)}</strong>
            </div>
            <div>
              Total (preview): <strong>{formatIDR(totals.grand_total)}</strong>
            </div>
            <div className="muted text-xs">Total final mengikuti hasil server setelah simpan.</div>
          </div>
        </div>

        <div className="posx-modal-actions">
          <button className="button button-outline" onClick={onClose} disabled={saving}>
            Batal
          </button>
          <button className="button button-primary" onClick={save} disabled={saving}>
            {saving ? "Menyimpan…" : "Simpan Perubahan"}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

/* ---------- Page ---------- */
export default function OrdersIndex(): React.ReactElement {
  useAuth();

  const [q, setQ] = useState<FilterState>({
    page: 1,
    per_page: 10,
    sort: "-ordered_at",
  });
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState<Order[]>([]);
  const [meta, setMeta] = useState<{ current_page: number; per_page: number; total: number; last_page: number }>({
    current_page: 1,
    per_page: 10,
    total: 0,
    last_page: 1,
  });

  const [detailOpen, setDetailOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [detail, setDetail] = useState<Order | null>(null);
  const autoOpenedOrderId = useRef<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await listOrders({
        page: q.page,
        per_page: q.per_page,
        q: q.q,
        cabang_id: q.cabang_id,
        status: q.status,
        date_from: q.date_from,
        date_to: q.date_to,
        sort: q.sort,
        cash_position: q.cash_position,
      });

      setRows(res.data);
      setMeta({
        current_page: res.meta.current_page,
        per_page: res.meta.per_page,
        total: res.meta.total,
        last_page: res.meta.last_page,
      });

      const per = Math.max(1, res.meta.per_page || 10);
      const pgLast = Math.max(1, Math.ceil(res.meta.total / per));
      if ((q.page ?? 1) > pgLast) {
        setQ((s) => ({ ...s, page: pgLast }));
      }
    } catch (e) {
      alert((e as Error).message || "Gagal memuat pesanan.");
    } finally {
      setLoading(false);
    }
  }, [q.page, q.per_page, q.q, q.cabang_id, q.status, q.date_from, q.date_to, q.sort, q.cash_position]);

  useEffect(() => {
    load();
  }, [load]);

  const openDetail = async (id: ID) => {
    try {
      const o = await getOrder(id);
      setDetail(o);
      setDetailOpen(true);
    } catch (e) {
      alert((e as Error).message || "Gagal memuat detail.");
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const openOrderId = params.get("open_order_id");

    if (!openOrderId) return;
    if (autoOpenedOrderId.current === openOrderId) return;

    const parsedOrderId = Number(openOrderId);

    if (!Number.isFinite(parsedOrderId) || parsedOrderId <= 0) return;

    autoOpenedOrderId.current = openOrderId;
    void openDetail(parsedOrderId);
  }, []);

  const onReprint = async (id: ID, format: "58" | "80") => {
    try {
      await reprintReceipt(id, { format });
      alert(`Berhasil reprint (${format}mm).`);
    } catch (e) {
      alert((e as Error).message || "Gagal reprint.");
    }
  };

  const onResendWa = async (id: ID) => {
    const snapPhone = detail?.customer_phone ?? rows.find((r) => r.id === id)?.customer_phone ?? null;
    const normalized = normalizePhoneForWa(snapPhone);

    if (normalized) {
      try {
        const res = await resendWhatsApp(id, { phone: normalized });
        if (res.wa_url) window.open(res.wa_url, "_blank", "noopener,noreferrer");
        else alert("Pesan WA diproses.");
        return;
      } catch (e) {
        alert((e as Error).message || "Gagal kirim WA.");
        return;
      }
    }

    const manual = prompt("Nomor WhatsApp (628xxxxxxxxxx):")?.trim();
    const normalizedManual = normalizePhoneForWa(manual ?? "");
    if (!normalizedManual) return;

    try {
      const res = await resendWhatsApp(id, { phone: normalizedManual });
      if (res.wa_url) window.open(res.wa_url, "_blank", "noopener,noreferrer");
      else alert("Pesan WA diproses.");
    } catch (e) {
      alert((e as Error).message || "Gagal kirim WA.");
    }
  };

  const onCashPositionChanged = useCallback((updated: Order) => {
    setRows((prev) => prev.map((r) => (r.id === updated.id ? { ...r, cash_position: updated.cash_position } : r)));
    setDetail((cur) => (cur && cur.id === updated.id ? ({ ...cur, cash_position: updated.cash_position } as Order) : cur));
  }, []);

  // ringkasan cepat (hanya UI)
  const summary = useMemo(() => {
    const totalRows = rows.length;
    const paid = rows.filter((r) => r.status === "PAID").length;
    const unpaid = rows.filter((r) => r.status === "UNPAID").length;
    const voided = rows.filter((r) => r.status === "VOID" || r.status === "REFUND").length;
    return { totalRows, paid, unpaid, voided };
  }, [rows]);

  return (
    <div className="page">

      <div className="posx-top">
        <div>
          <h2 className="posx-title">Daftar Pesanan</h2>
          <div className="posx-sub">Filter, lihat detail, edit item, reprint, kirim WhatsApp, dan buat delivery.</div>
        </div>

        <div className="posx-stats">
          <div className="posx-stat">
            <div className="k">Rows tampil</div>
            <div className="v">{summary.totalRows}</div>
          </div>
          <div className="posx-stat">
            <div className="k">PAID</div>
            <div className="v">{summary.paid}</div>
          </div>
          <div className="posx-stat">
            <div className="k">UNPAID</div>
            <div className="v">{summary.unpaid}</div>
          </div>
          <div className="posx-stat">
            <div className="k">VOID/REFUND</div>
            <div className="v">{summary.voided}</div>
          </div>
        </div>
      </div>

      <FilterBar value={q} onChange={setQ} onApply={load} />

      {loading ? (
        <div className="card">
          <div className="skeleton h-64" />
        </div>
      ) : (
        <OrdersTable
          rows={rows}
          onOpenDetail={openDetail}
          page={meta.current_page}
          per_page={meta.per_page}
          total={meta.total}
          onPage={(p) => setQ((s) => ({ ...s, page: p }))}
          onCashPositionChanged={onCashPositionChanged}
        />
      )}

      <OrderDetailDialog
        open={detailOpen}
        order={detail}
        onClose={() => setDetailOpen(false)}
        onEdit={(o) => {
          setDetail(o);
          setEditOpen(true);
        }}
        onReprint={onReprint}
        onResendWa={onResendWa}
        onPaymentSaved={(updated) => {
          setDetail(updated);
          setRows((prev) => prev.map((row) => (row.id === updated.id ? updated : row)));
          load();
          alert("Pelunasan berhasil disimpan.");
        }}
      />

      <EditOrderDialog
        open={editOpen}
        order={detail}
        onClose={() => setEditOpen(false)}
        onSaved={() => {
          setEditOpen(false);
          setDetailOpen(false);
          setDetail(null);
          setQ((s) => ({ ...s })); // refresh (tetap)
        }}
      />
    </div>
  );
}

function SettlementDialog(props: {
  open: boolean;
  order: Order;
  remaining: number;
  onClose: () => void;
  onSaved: (updated: Order) => void;
}) {
  const { open, order, remaining, onClose, onSaved } = props;

  const [form, setForm] = useState<SettlementFormState>({
    method: "CASH",
    amount: String(Math.round(remaining)),
    holder_id: "",
    ref_no: "",
  });

  const [holders, setHolders] = useState<CashHolder[]>([]);
  const [loadingHolders, setLoadingHolders] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const amountNumber = Number(form.amount || 0);
  const isCash = form.method === "CASH";
  const isAmountValid =
    Number.isFinite(amountNumber) && amountNumber > 0 && amountNumber <= remaining;

  useEffect(() => {
    if (!open) return;

    setForm({
      method: "CASH",
      amount: String(Math.round(remaining)),
      holder_id: "",
      ref_no: "",
    });
    setError(null);
  }, [open, remaining]);

  useEffect(() => {
    if (!open || form.method !== "CASH") return;

    let alive = true;

    async function loadHolders() {
      setLoadingHolders(true);
      try {
        const resp = await listCashHolders({ per_page: 100 });
        if (!alive) return;

        const list = Array.isArray(resp.data) ? resp.data : [];
        setHolders(list);

        if (list.length === 1) {
          setForm((prev) => ({ ...prev, holder_id: String(list[0].id) }));
        }
      } catch (e) {
        if (!alive) return;
        setError((e as Error)?.message ?? "Gagal memuat cash holder.");
      } finally {
        if (alive) setLoadingHolders(false);
      }
    }

    loadHolders();

    return () => {
      alive = false;
    };
  }, [open, form.method]);

  if (!open) return null;

  async function submitSettlement(): Promise<void> {
    setError(null);

    if (!isAmountValid) {
      setError(`Nominal harus lebih dari 0 dan tidak boleh melebihi sisa ${formatIDR(remaining)}.`);
      return;
    }

    if (isCash && !form.holder_id) {
      setError("Pilih cash holder penerima untuk pembayaran tunai.");
      return;
    }

    const payment: CheckoutPayment = {
      method: form.method,
      amount: amountNumber,
      ref_no: form.ref_no.trim() || null,
    };

    if (isCash) {
      payment.payload_json = {
        holder_id: Number(form.holder_id),
        collected_by: "CASHIER",
        collected_at: new Date().toISOString(),
      };
    }

    setSubmitting(true);
    try {
      const updated = await addPayment(order.id, payment);
      onSaved(updated);
    } catch (e) {
      setError((e as Error)?.message ?? "Gagal menambahkan pembayaran.");
    } finally {
      setSubmitting(false);
    }
  }

  return createPortal(
    <div className="settle-overlay" role="presentation">
      <div className="settle-dialog" role="dialog" aria-modal="true" aria-labelledby="settle-title">
        <div className="settle-head">
          <div>
            <div className="settle-eyebrow">Pelunasan Pesanan</div>
            <h3 id="settle-title" className="settle-title">
              {order.kode}
            </h3>
            <div className="settle-sub">
              {order.customer_name ?? "Tanpa nama pelanggan"} · {order.customer_phone ?? "No HP tidak tersedia"}
            </div>
          </div>

          <button className="button button-ghost" onClick={onClose} disabled={submitting}>
            Tutup
          </button>
        </div>

        <div className="settle-body">
          <div className="settle-summary">
            <div>
              <span>Total Tagihan</span>
              <strong>{formatIDR(Number(order.grand_total ?? 0))}</strong>
            </div>
            <div>
              <span>Sudah Dibayar</span>
              <strong>{formatIDR(Number(order.paid_total ?? 0))}</strong>
            </div>
            <div className="settle-summary-due">
              <span>Sisa Bayar</span>
              <strong>{formatIDR(remaining)}</strong>
            </div>
          </div>

          <div className="settle-form">
            <div className="form-field">
              <label className="label">Metode Pembayaran</label>
              <div className="settle-methods">
                {(["CASH", "QRIS", "TRANSFER"] as PaymentMethodOption[]).map((method) => (
                  <button
                    key={method}
                    type="button"
                    className={`settle-method ${form.method === method ? "is-active" : ""}`}
                    onClick={() =>
                      setForm((prev) => ({
                        ...prev,
                        method,
                        holder_id: method === "CASH" ? prev.holder_id : "",
                      }))
                    }
                    disabled={submitting}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-row form-row--2">
              <div className="form-field">
                <label className="label">Nominal Bayar</label>
                <input
                  className="input"
                  type="number"
                  min={1}
                  max={Math.round(remaining)}
                  value={form.amount}
                  onChange={(e) => setForm((prev) => ({ ...prev, amount: e.target.value }))}
                  disabled={submitting}
                />
                <button
                  type="button"
                  className="settle-pay-full"
                  onClick={() => setForm((prev) => ({ ...prev, amount: String(Math.round(remaining)) }))}
                  disabled={submitting}
                >
                  Isi sesuai sisa bayar
                </button>
              </div>

              <div className="form-field">
                <label className="label">Nomor Referensi</label>
                <input
                  className="input"
                  placeholder={form.method === "CASH" ? "Opsional" : "Contoh: TRX/QRIS/VA"}
                  value={form.ref_no}
                  onChange={(e) => setForm((prev) => ({ ...prev, ref_no: e.target.value }))}
                  disabled={submitting}
                />
              </div>
            </div>

            {isCash && (
              <div className="form-field">
                <label className="label">Cash Holder Penerima</label>
                <select
                  className="select"
                  value={form.holder_id}
                  onChange={(e) => setForm((prev) => ({ ...prev, holder_id: e.target.value }))}
                  disabled={submitting || loadingHolders}
                >
                  <option value="">
                    {loadingHolders ? "Memuat cash holder…" : "Pilih cash holder"}
                  </option>
                  {holders.map((holder) => (
                    <option key={holder.id} value={holder.id}>
                      {holder.name} — {formatIDR(Number(holder.balance ?? 0))}
                    </option>
                  ))}
                </select>
                <div className="settle-note">
                  Pembayaran tunai akan dicatat ke cash session kasir melalui holder yang dipilih.
                </div>
              </div>
            )}

            {form.method === "TRANSFER" && (
              <div className="settle-alert">
                Catatan: di backend project ini, pembayaran TRANSFER dibuat dengan status awal PENDING. Jika ingin langsung lunas, gunakan CASH atau QRIS.
              </div>
            )}

            {error && <div className="settle-error">{error}</div>}
          </div>
        </div>

        <div className="settle-actions">
          <button className="button button-outline" onClick={onClose} disabled={submitting}>
            Batal
          </button>
          <button
            className="button button-primary"
            onClick={submitSettlement}
            disabled={submitting || !isAmountValid || (isCash && !form.holder_id)}
          >
            {submitting ? "Memproses…" : `Simpan Pembayaran ${formatIDR(amountNumber || 0)}`}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
