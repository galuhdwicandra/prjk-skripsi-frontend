// src/pages/delivery/DeliveryDetail.tsx
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  damageClaim,
  getDelivery,
  updateStatus,
  assignCourier,
  getWaybillHtml,
  sendWaybillWhatsapp,
} from "../../api/deliveries";
import type { DeliveryDetail } from "../../types/delivery";
import DeliveryStatusStepper from "../../components/delivery/DeliveryStatusStepper";
import AssignCourierSelect from "../../components/delivery/AssignCourierSelect";
import DamageClaimDialog from "../../components/delivery/DamageClaimDialog";
import WaybillPreview from "../../components/delivery/WaybillPreview";
import { isAxiosError } from "axios";
import { useAuth } from "../../store/auth";

export default function DeliveryDetail(): React.ReactElement {
  const { id } = useParams();
  const nav = useNavigate();
  const { hasRole } = useAuth();

  const [data, setData] = useState<DeliveryDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [openClaim, setOpenClaim] = useState(false);

  const [wbOpen, setWbOpen] = useState(false);
  const [wbHtml, setWbHtml] = useState<string>("");

  const canAssign =
    hasRole("superadmin") ||
    hasRole("admin_cabang") ||
    hasRole("kasir") ||
    hasRole("gudang");

  const canProgress =
    hasRole("superadmin") ||
    hasRole("admin_cabang") ||
    hasRole("kurir") ||
    hasRole("kasir") ||
    hasRole("gudang");

  useEffect(() => {
    if (!id) return;
    let live = true;
    setLoading(true);
    getDelivery(Number(id))
      .then((d) => {
        if (!live) return;
        setData(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
    return () => {
      live = false;
    };
  }, [id]);

  async function onOpenWaybill() {
    try {
      const html = await getWaybillHtml(data!.id);
      setWbHtml(html);
      setWbOpen(true);
    } catch (e) {
      alert((e as Error).message || "Gagal memuat surat jalan.");
    }
  }

  async function onSendToCourier() {
    try {
      const { wa_url } = await sendWaybillWhatsapp(data!.id);
      window.open(wa_url, "_blank", "noopener");
    } catch (e) {
      alert((e as Error).message || "Gagal menyiapkan WhatsApp.");
    }
  }

  function fmt(ts: string | null | undefined): string {
    if (!ts) return "-";
    try {
      return new Date(ts).toLocaleString();
    } catch {
      return ts;
    }
  }

  function TypeChip({ type }: { type: string | null | undefined }): React.ReactElement {
    const t = (type ?? "-").toString();
    return (
      <span
        className="badge"
        style={{
          display: "inline-flex",
          alignItems: "center",
          padding: "0.25rem 0.55rem",
          borderRadius: "999px",
          fontSize: "0.78rem",
          lineHeight: 1.2,
          border: "1px solid rgba(0,0,0,0.08)",
          background: "rgba(0,0,0,0.03)",
          opacity: 0.9,
        }}
      >
        {t}
      </span>
    );
  }

  if (loading) {
    return (
      <div className="page">
        <div className="card" style={{ padding: "1.25rem" }}>
          <div className="text-muted">Memuat…</div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="page">
        <div className="card" style={{ padding: "1.25rem" }}>
          <div style={{ marginBottom: "0.75rem" }}>Data tidak ditemukan.</div>
          <button className="button" onClick={() => nav(-1)}>
            Kembali
          </button>
        </div>
      </div>
    );
  }

  const showAssignBlock = canAssign && ["REQUESTED", "ASSIGNED"].includes(data.status);
  const showProgressBlock = canProgress && ["ASSIGNED", "PICKED_UP", "ON_ROUTE"].includes(data.status);

  const showWaybillBlock =
    !!data.assigned_to &&
    ["ASSIGNED", "PICKED_UP", "ON_ROUTE", "DELIVERED"].includes(data.status);

  return (
    <div className="page">
      {/* Header lebih rapi */}
      <div
        className="page-header"
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div style={{ minWidth: 260 }}>
          <h1 className="page-title" style={{ marginBottom: "0.25rem" }}>
            Delivery Detail
          </h1>
          <div className="text-muted" style={{ fontSize: "0.95rem" }}>
            Detail permintaan pickup/delivery, status, kurir, surat jalan, dan timeline.
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
          <Link className="button button-outline" to="/delivery">
            Kembali ke daftar
          </Link>
          <button className="button" onClick={() => nav(-1)}>
            Back
          </button>
        </div>
      </div>

      {/* Ringkasan + status */}
      <div className="card" style={{ marginBottom: "0.9rem" }}>
        {/* Top summary bar */}
        <div
          className="toolbar"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            <div className="mono" style={{ fontWeight: 700 }}>
              Order: {data.order_code ?? `#${data.order_id}`}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
              <TypeChip type={data.type} />
              <span
                className="badge"
                style={{ borderRadius: "999px" }}
              >
                Status: <b style={{ marginLeft: 6 }}>{data.status}</b>
              </span>
            </div>
          </div>

          <div style={{ minWidth: 240 }}>
            <DeliveryStatusStepper status={data.status} />
          </div>
        </div>

        {/* Info grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.9rem",
            paddingTop: "0.25rem",
          }}
        >
          {/* Card sub: Info utama */}
          <div className="card card--sub" style={{ padding: "1rem" }}>
            <div className="card-header" style={{ marginBottom: "0.6rem" }}>
              Informasi Utama
            </div>

            <div className="details">
              <div className="details-row">
                <span className="text-muted">Kurir:</span>
                <span style={{ fontWeight: 600 }}>{data.courier_name ?? "-"}</span>
              </div>
              <div className="details-row">
                <span className="text-muted">Requested:</span>
                <span>{fmt(data.requested_at)}</span>
              </div>
              <div className="details-row">
                <span className="text-muted">Completed:</span>
                <span>{fmt(data.completed_at)}</span>
              </div>
            </div>
          </div>

          {/* Card sub: Alamat */}
          <div className="card card--sub" style={{ padding: "1rem" }}>
            <div className="card-header" style={{ marginBottom: "0.6rem" }}>
              Alamat
            </div>

            <div className="details">
              <div className="details-row">
                <span className="text-muted">Pickup:</span>
                <span className="truncate-1" title={data.pickup_address ?? ""}>
                  {data.pickup_address ?? "-"}
                </span>
              </div>
              <div className="details-row">
                <span className="text-muted">Delivery:</span>
                <span className="truncate-1" title={data.delivery_address ?? ""}>
                  {data.delivery_address ?? "-"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Assign courier */}
        {showAssignBlock && (
          <div
            className="card card--sub"
            style={{
              marginTop: "0.9rem",
              padding: "1rem",
            }}
          >
            <div
              className="toolbar"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "0.9rem",
                flexWrap: "wrap",
              }}
            >
              <div style={{ minWidth: 260 }}>
                <div style={{ fontWeight: 700, marginBottom: "0.25rem" }}>
                  Assign Kurir
                </div>
                <div className="text-muted text-sm">
                  Pilih kurir atau gunakan Auto-assign.
                </div>
              </div>

              <div style={{ minWidth: 240 }}>
                <AssignCourierSelect
                  value={data.assigned_to ?? null}
                  allowAuto
                  onChange={async (val) => {
                    const auto = val === -1;
                    try {
                      if (auto) {
                        await assignCourier(data.id, { auto: true });
                      } else {
                        const payload = val !== null ? { assigned_to: val } : {};
                        await assignCourier(data.id, payload);
                      }
                      const fresh = await getDelivery(data.id);
                      setData(fresh);
                    } catch (err: unknown) {
                      if (isAxiosError(err)) {
                        if (err.response?.status === 403) {
                          alert("Anda tidak memiliki izin untuk assign kurir di cabang ini.");
                        } else {
                          const serverMsg = (err.response?.data as { message?: string } | undefined)?.message;
                          alert(serverMsg ?? err.message ?? "Gagal assign kurir.");
                        }
                      } else {
                        alert((err as Error).message);
                      }
                    }
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Progress actions */}
        {showProgressBlock && (
          <div
            className="card card--sub"
            style={{
              marginTop: "0.9rem",
              padding: "1rem",
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: "0.6rem" }}>
              Aksi Status
            </div>

            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {data.status === "ASSIGNED" && (
                <button
                  className="button button-outline"
                  onClick={async () => {
                    await updateStatus(data.id, { status: "PICKED_UP" });
                    setData(await getDelivery(data.id));
                  }}
                >
                  Mark Picked
                </button>
              )}

              {data.status === "PICKED_UP" && (
                <button
                  className="button button-outline"
                  onClick={async () => {
                    await updateStatus(data.id, { status: "ON_ROUTE" });
                    setData(await getDelivery(data.id));
                  }}
                >
                  On Route
                </button>
              )}

              {data.status === "ON_ROUTE" && (
                <button
                  className="button button-primary"
                  onClick={async () => {
                    await updateStatus(data.id, { status: "DELIVERED" });
                    setData(await getDelivery(data.id));
                  }}
                >
                  Delivered
                </button>
              )}

              <button className="button" onClick={() => setOpenClaim(true)}>
                Klaim Kerusakan…
              </button>

              <span className="text-muted text-sm" style={{ marginLeft: "0.25rem" }}>
                (Aksi muncul sesuai status &amp; role.)
              </span>
            </div>
          </div>
        )}

        {/* Surat Jalan: dimasukkan ke dalam card agar tidak menggantung */}
        {showWaybillBlock && (
          <div
            className="card card--sub"
            style={{
              marginTop: "0.9rem",
              padding: "1rem",
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: "0.6rem" }}>Surat Jalan</div>

            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <button className="button button-outline" onClick={onOpenWaybill}>
                Lihat / Print Surat Jalan
              </button>
              <button className="button" onClick={onSendToCourier}>
                Kirim ke WhatsApp Kurir
              </button>
              <span className="text-muted text-sm">
                Tersedia setelah kurir di-assign.
              </span>
            </div>
          </div>
        )}

        {/* Responsif grid info */}
        <style>
          {`
            @media (max-width: 900px) {
              .page .card[style*="grid-template-columns: 1fr 1fr"] {
                grid-template-columns: 1fr !important;
              }
            }
          `}
        </style>
      </div>

      {/* Timeline */}
      <div className="card">
        <div
          className="toolbar"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <div className="card-header" style={{ margin: 0 }}>
            Timeline
          </div>
          <span className="text-muted text-sm">
            Total event: <b>{data.events.length}</b>
          </span>
        </div>

        <ul className="list" style={{ paddingTop: "0.25rem" }}>
          {data.events.length === 0 && (
            <li className="text-muted" style={{ padding: "0.75rem 0.25rem" }}>
              Belum ada event.
            </li>
          )}

          {data.events.map((ev) => (
            <li
              key={ev.id}
              className="card card--sub"
              style={{
                padding: "1rem",
                marginBottom: "0.6rem",
              }}
            >
              <div
                className="toolbar"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "0.75rem",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ minWidth: 220 }}>
                  <div className="strong" style={{ fontWeight: 800 }}>
                    {ev.status}
                  </div>
                  <div className="text-muted text-sm">{fmt(ev.occurred_at)}</div>
                </div>

                {ev.photo_url && (
                  <a
                    href={ev.photo_url}
                    target="_blank"
                    rel="noreferrer"
                    className="button button-outline"
                    style={{ textDecoration: "none" }}
                  >
                    Lihat Foto
                  </a>
                )}
              </div>

              {ev.note && (
                <div style={{ marginTop: "0.5rem", lineHeight: 1.6 }}>
                  {ev.note}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <DamageClaimDialog
        open={openClaim}
        onClose={() => setOpenClaim(false)}
        onSubmit={async ({ note, file }) => {
          await damageClaim(data.id, { note: note ?? undefined, file: file ?? undefined });
          setOpenClaim(false);
          setData(await getDelivery(data.id));
        }}
      />

      {wbOpen && <WaybillPreview html={wbHtml} onClose={() => setWbOpen(false)} />}
    </div>
  );
}
