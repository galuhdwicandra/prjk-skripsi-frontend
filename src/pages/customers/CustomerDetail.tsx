// src/pages/customers/CustomerDetail.tsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  changeCustomerStage,
  getCustomer,
  getCustomerHistory,
  updateCustomer,
} from "../../api/customers";
import type {
  CustomerDetail as TDetail,
  CustomerTimelineEvent,
  CustomerStage,
} from "../../types/customers";
import CustomerStageBadge from "../../components/customers/CustomerStageBadge";
import CustomerTimeline from "../../components/customers/CustomerTimeline";
import { useAuth } from "../../store/auth";

type CustomerEditForm = {
  nama: string;
  phone: string;
  email: string;
  alamat: string;
  catatan: string;
};

export default function CustomerDetail(): React.ReactElement {
  const { id } = useParams();
  const nav = useNavigate();

  const cid = Number(id);
  const [detail, setDetail] = useState<TDetail | null>(null);
  const [timeline, setTimeline] = useState<CustomerTimelineEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [tlLoading, setTlLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [tlError, setTlError] = useState<string | null>(null);

  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [savingEdit, setSavingEdit] = useState<boolean>(false);
  const [editError, setEditError] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<CustomerEditForm>({
    nama: "",
    phone: "",
    email: "",
    alamat: "",
    catatan: "",
  });

  const { hasRole } = useAuth();
  const canChangeStage = hasRole("superadmin") || hasRole("admin_cabang");
  const canEditCustomer = hasRole("superadmin") || hasRole("admin_cabang");

  useEffect(() => {
    if (!Number.isFinite(cid)) {
      setError("Invalid customer id");
      setLoading(false);
      return;
    }
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const d = await getCustomer(cid);
        if (!cancelled) setDetail(d);
      } catch {
        if (!cancelled) setError("Failed to load customer");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [cid]);

  useEffect(() => {
    if (!Number.isFinite(cid)) {
      setTlError("Invalid customer id");
      setTlLoading(false);
      return;
    }
    let cancelled = false;
    (async () => {
      setTlLoading(true);
      setTlError(null);
      try {
        const h = await getCustomerHistory(cid);
        if (!cancelled) setTimeline(h);
      } catch {
        if (!cancelled) setTlError("Failed to load timeline");
      } finally {
        if (!cancelled) setTlLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [cid]);

  async function onChangeStage(s: CustomerStage): Promise<void> {
    if (!detail) return;
    try {
      const updated = await changeCustomerStage(detail.customer.id, s);
      setDetail((d) => (d ? { ...d, customer: updated } : d));
    } catch {
      // tempatkan toast global bila ada
    }
  }

  function openEditCustomer(): void {
    if (!detail) return;

    setEditForm({
      nama: detail.customer.nama ?? "",
      phone: detail.customer.phone ?? "",
      email: detail.customer.email ?? "",
      alamat: detail.customer.alamat ?? "",
      catatan: detail.customer.catatan ?? "",
    });

    setEditError(null);
    setEditOpen(true);
  }

  async function submitEditCustomer(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    if (!detail || savingEdit) return;

    const nama = editForm.nama.trim();
    const phone = editForm.phone.trim();

    if (!nama) {
      setEditError("Nama pelanggan wajib diisi.");
      return;
    }

    if (!phone) {
      setEditError("Nomor HP pelanggan wajib diisi.");
      return;
    }

    setSavingEdit(true);
    setEditError(null);

    try {
      const updated = await updateCustomer(detail.customer.id, {
        nama,
        phone,
        email: editForm.email.trim() || null,
        alamat: editForm.alamat.trim() || null,
        catatan: editForm.catatan.trim() || null,
      });

      setDetail((current) =>
        current
          ? {
            ...current,
            customer: updated,
          }
          : current
      );

      setEditOpen(false);
    } catch (err: unknown) {
      let msg = "Gagal menyimpan perubahan customer.";

      if (typeof err === "object" && err !== null) {
        const e = err as {
          response?: {
            data?: {
              message?: string;
              errors?: Record<string, string[]>;
            };
          };
          message?: string;
        };

        msg =
          e.response?.data?.message ??
          Object.values(e.response?.data?.errors ?? {})?.[0]?.[0] ??
          e.message ??
          msg;
      }

      setEditError(msg);
    } finally {
      setSavingEdit(false);
    }
  }

  // ====== UI helpers (tanpa ubah data/logika) ======
  const c = detail?.customer;

  const displayName = useMemo(() => {
    if (!c) return "—";
    return (
      (c as unknown as { nama?: string }).nama ??
      (c as unknown as { name?: string }).name ??
      "—"
    );
  }, [c]);

  const displayAddress = useMemo(() => {
    if (!c) return "—";
    return (
      (c as unknown as { alamat?: string | null }).alamat ??
      (c as unknown as { address?: string | null }).address ??
      "—"
    );
  }, [c]);

  const displayPhone = useMemo(() => {
    if (!c) return "—";
    return (c as unknown as { phone?: string | null }).phone ?? "—";
  }, [c]);

  const displayEmail = useMemo(() => {
    if (!c) return "—";
    return (c as unknown as { email?: string | null }).email ?? "—";
  }, [c]);

  // ====== States ======
  if (loading) {
    return (
      <div className="container">
        <div className="section">
          <div className="card p-4">Loading…</div>
        </div>
      </div>
    );
  }

  if (error || !detail || !c) {
    return (
      <div className="container">
        <div className="section">
          <div className="card p-4" style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <span className="badge badge-danger" style={{ verticalAlign: "middle" }}>
              Error
            </span>
            <span>{error ?? "Not found"}</span>
          </div>
        </div>
      </div>
    );
  }

  // ====== Layout ======
  return (
    <div className="container">
      <div className="section">
        {/* Top bar: back + title */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "1rem",
          }}
        >
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
            <button
              type="button"
              className="button button-outline"
              onClick={() => nav("/customers")}
              title="Back to customers"
              style={{ borderRadius: "999px" }}
            >
              ← Back
            </button>

            {canEditCustomer ? (
              <button
                type="button"
                className="button button-primary"
                onClick={openEditCustomer}
              >
                Edit Customer
              </button>
            ) : null}

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
                <h1 style={{ marginBottom: 0 }}>{displayName}</h1>
                <CustomerStageBadge stage={c.stage} />
              </div>
              <div className="muted" style={{ marginTop: 4 }}>
                {displayPhone} • {displayEmail}
              </div>
            </div>
          </div>

          {/* Right actions */}
          <div style={{ display: "flex", gap: "0.6rem", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge" title="Customer ID">
              ID: {c.id}
            </span>

            {canChangeStage ? (
              <div
                className="card"
                style={{
                  padding: "0.65rem 0.75rem",
                  display: "flex",
                  gap: "0.6rem",
                  alignItems: "center",
                }}
                title="Change stage"
              >
                <span className="muted" style={{ fontSize: "0.9rem" }}>
                  Stage
                </span>
                <select
                  className="select"
                  value={c.stage}
                  onChange={(e) => onChangeStage(e.target.value as CustomerStage)}
                  style={{ minWidth: 140 }}
                >
                  <option value="LEAD">LEAD</option>
                  <option value="ACTIVE">ACTIVE</option>
                  <option value="CHURN">CHURN</option>
                </select>
              </div>
            ) : null}
          </div>
        </div>

        {/* Summary cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          {/* Profile card */}
          <div className="card p-4">
            <h2 style={{ marginBottom: "0.5rem" }}>Profile</h2>

            <div className="muted" style={{ marginBottom: "0.75rem" }}>
              Informasi dasar pelanggan.
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "140px 1fr",
                gap: "0.6rem 1rem",
                alignItems: "start",
              }}
            >
              <div className="muted">Name</div>
              <div style={{ fontWeight: 700 }}>{displayName}</div>

              <div className="muted">Phone</div>
              <div>{displayPhone}</div>

              <div className="muted">Email</div>
              <div>{displayEmail}</div>

              <div className="muted">Address</div>
              <div style={{ lineHeight: 1.5 }}>{displayAddress}</div>
            </div>
          </div>

          {/* Quick stats */}
          <div className="card p-4">
            <h2 style={{ marginBottom: "0.5rem" }}>Summary</h2>
            <div className="muted" style={{ marginBottom: "0.75rem" }}>
              Ringkasan singkat.
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "0.6rem",
              }}
            >
              <div
                className="card"
                style={{
                  padding: "0.8rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span className="muted">Total Orders</span>
                <span style={{ fontWeight: 800 }}>{detail.orders.length}</span>
              </div>

              <div
                className="card"
                style={{
                  padding: "0.8rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span className="muted">Timeline Events</span>
                <span style={{ fontWeight: 800 }}>{timeline.length}</span>
              </div>

              <div
                className="card"
                style={{
                  padding: "0.8rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span className="muted">Current Stage</span>
                <span style={{ fontWeight: 800 }}>{c.stage}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Orders + Timeline */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "1rem",
          }}
        >
          {/* Recent Orders */}
          <section className="card p-4">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                flexWrap: "wrap",
                marginBottom: "0.75rem",
              }}
            >
              <div>
                <h2 style={{ marginBottom: "0.25rem" }}>Recent Orders</h2>
                <div className="muted">Riwayat order terbaru pelanggan.</div>
              </div>

              <span className="badge" title="Orders">
                {detail.orders.length} orders
              </span>
            </div>

            <div style={{ overflowX: "auto" }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Kode</th>
                    <th>Status</th>
                    <th>Grand Total</th>
                    <th>Ordered</th>
                  </tr>
                </thead>
                <tbody>
                  {detail.orders.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="muted" style={{ textAlign: "center" }}>
                        No orders yet.
                      </td>
                    </tr>
                  ) : (
                    detail.orders.map((o) => (
                      <tr key={o.id}>
                        <td>{(o as unknown as { code?: string }).code ?? "-"}</td>
                        <td>{(o as unknown as { status?: string }).status ?? "-"}</td>
                        <td>
                          {(o as unknown as { grand_total?: number | string }).grand_total ??
                            "-"}
                        </td>
                        <td>
                          {(() => {
                            const dt =
                              (o as unknown as { ordered_at?: string }).ordered_at ??
                              (o as unknown as { created_at?: string }).created_at ??
                              null;
                            return dt ? new Date(dt).toLocaleString() : "-";
                          })()}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* Timeline */}
          <section className="card p-4">
            <div style={{ marginBottom: "0.75rem" }}>
              <h2 style={{ marginBottom: "0.25rem" }}>Timeline</h2>
              <div className="muted">Aktivitas terkait customer.</div>
            </div>

            <CustomerTimeline items={timeline} loading={tlLoading} error={tlError} />
          </section>
        </div>

        {editOpen ? (
          <div className="modal-overlay" role="dialog" aria-modal="true">
            <div className="modal card">
              <div className="modal-header">
                <h2 className="modal-title">Edit Customer</h2>

                <button
                  type="button"
                  className="button button-outline"
                  onClick={() => setEditOpen(false)}
                  disabled={savingEdit}
                >
                  Tutup
                </button>
              </div>

              <form onSubmit={submitEditCustomer}>
                <div className="posx-modal-form">
                  {editError ? (
                    <div
                      className="toast"
                      style={{
                        borderLeftColor: "var(--color-danger)",
                        marginBottom: "1rem",
                      }}
                    >
                      {editError}
                    </div>
                  ) : null}

                  <div className="form-row form-row--2">
                    <label>
                      <span style={{ display: "block", fontWeight: 700, marginBottom: 6 }}>
                        Nama
                      </span>
                      <input
                        className="input"
                        value={editForm.nama}
                        onChange={(e) =>
                          setEditForm((f) => ({ ...f, nama: e.target.value }))
                        }
                        disabled={savingEdit}
                        required
                      />
                    </label>

                    <label>
                      <span style={{ display: "block", fontWeight: 700, marginBottom: 6 }}>
                        No HP
                      </span>
                      <input
                        className="input"
                        value={editForm.phone}
                        onChange={(e) =>
                          setEditForm((f) => ({ ...f, phone: e.target.value }))
                        }
                        disabled={savingEdit}
                        required
                      />
                    </label>
                  </div>

                  <div className="form-row" style={{ marginTop: "1rem" }}>
                    <label>
                      <span style={{ display: "block", fontWeight: 700, marginBottom: 6 }}>
                        Email
                      </span>
                      <input
                        className="input"
                        type="email"
                        value={editForm.email}
                        onChange={(e) =>
                          setEditForm((f) => ({ ...f, email: e.target.value }))
                        }
                        disabled={savingEdit}
                        placeholder="Opsional"
                      />
                    </label>
                  </div>

                  <div className="form-row" style={{ marginTop: "1rem" }}>
                    <label>
                      <span style={{ display: "block", fontWeight: 700, marginBottom: 6 }}>
                        Alamat
                      </span>
                      <textarea
                        className="textarea"
                        rows={4}
                        value={editForm.alamat}
                        onChange={(e) =>
                          setEditForm((f) => ({ ...f, alamat: e.target.value }))
                        }
                        disabled={savingEdit}
                        placeholder="Contoh: Jl. Melati No. 10, RT/RW, Kecamatan, Kota"
                      />
                    </label>
                  </div>

                  <div className="form-row" style={{ marginTop: "1rem" }}>
                    <label>
                      <span style={{ display: "block", fontWeight: 700, marginBottom: 6 }}>
                        Catatan
                      </span>
                      <textarea
                        className="textarea"
                        rows={3}
                        value={editForm.catatan}
                        onChange={(e) =>
                          setEditForm((f) => ({ ...f, catatan: e.target.value }))
                        }
                        disabled={savingEdit}
                        placeholder="Opsional"
                      />
                    </label>
                  </div>
                </div>

                <div className="modal-actions">
                  <button
                    type="button"
                    className="button button-outline"
                    onClick={() => setEditOpen(false)}
                    disabled={savingEdit}
                  >
                    Batal
                  </button>

                  <button
                    type="submit"
                    className="button button-primary"
                    disabled={savingEdit}
                  >
                    {savingEdit ? "Menyimpan..." : "Simpan Perubahan"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null}

        {/* Responsive tweaks */}
        <style>
          {`
            @media (max-width: 1024px) {
              .container .section > div[style*="grid-template-columns: 1.6fr 1fr"] {
                grid-template-columns: 1fr !important;
              }
              .container .section > div[style*="grid-template-columns: 1.2fr 0.8fr"] {
                grid-template-columns: 1fr !important;
              }
            }
            @media (max-width: 520px) {
              .container .section h1 {
                font-size: 1.4rem !important;
              }
            }
          `}
        </style>
      </div>
    </div>
  );
}
