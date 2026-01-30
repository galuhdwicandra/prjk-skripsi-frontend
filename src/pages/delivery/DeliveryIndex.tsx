// src/pages/delivery/DeliveryIndex.tsx
import React, { useEffect, useMemo, useState } from "react";
import {
  listDeliveries,
  assignCourier,
  updateStatus,
  sendWaybillWhatsapp,
  getWaybillHtml,
} from "../../api/deliveries";
import type { Delivery, DeliveryQuery } from "../../types/delivery";
import DeliveryTabs from "../../components/delivery/DeliveryTabs";
import AssignCourierSelect from "../../components/delivery/AssignCourierSelect";
import DeliveryStatusStepper from "../../components/delivery/DeliveryStatusStepper";
import { Link } from "react-router-dom";
import { isAxiosError } from "axios";
import { useAuth } from "../../store/auth";

export default function DeliveryIndex(): React.ReactElement {
  const { user, hasRole } = useAuth();

  const [query, setQuery] = useState<DeliveryQuery>({
    per_page: 10,
    page: 1,
    sort: "-requested_at",
  });
  const [tab, setTab] = useState<DeliveryQuery["status"] | "ALL">("ALL");
  const [items, setItems] = useState<Delivery[]>([]);
  const [loading, setLoading] = useState(false);
  const [meta, setMeta] = useState({
    current_page: 1,
    per_page: 10,
    total: 0,
    last_page: 1,
  });

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

  const appliedQuery = useMemo(() => {
    const base: DeliveryQuery = { ...query };
    if (tab && tab !== "ALL") base.status = tab;
    if (hasRole("kurir") && user) base.mine = 1;
    return base;
  }, [query, tab, hasRole, user]);

  useEffect(() => {
    let live = true;
    setLoading(true);
    listDeliveries(appliedQuery)
      .then((p) => {
        if (!live) return;
        setItems(p.data);
        setMeta(p.meta);
        setLoading(false);
      })
      .catch(() => setLoading(false));
    return () => {
      live = false;
    };
  }, [appliedQuery]);

  async function openWaybill(id: number) {
    try {
      const html = await getWaybillHtml(id);
      const w = window.open("", "_blank", "noopener,noreferrer");
      if (w) {
        w.document.open();
        w.document.write(html);
        w.document.close();
      } else {
        alert("Popup diblokir. Izinkan pop-up untuk melihat surat jalan.");
      }
    } catch (e) {
      alert((e as Error).message || "Gagal memuat surat jalan.");
    }
  }

  function renderTypeChip(type: string | null | undefined): React.ReactElement {
    const t = (type ?? "-").toString();
    return (
      <span
        className="badge"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          padding: "0.25rem 0.55rem",
          borderRadius: "999px",
          fontSize: "0.78rem",
          lineHeight: 1.2,
          opacity: 0.9,
        }}
      >
        {t}
      </span>
    );
  }

  function renderStatusLabel(status: Delivery["status"]): React.ReactElement {
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
          opacity: 0.9,
          border: "1px solid rgba(0,0,0,0.08)",
          background: "rgba(0,0,0,0.03)",
          marginTop: "0.35rem",
        }}
      >
        {status}
      </span>
    );
  }

  return (
    <div className="page">
      {/* Header: lebih “rapi” + ada info ringkas */}
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
            Pickup &amp; Delivery
          </h1>
          <div className="text-muted" style={{ fontSize: "0.95rem" }}>
            Kelola permintaan pickup/delivery, assign kurir, update status, dan surat jalan.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <span className="badge" style={{ borderRadius: "999px" }}>
            Total: <b style={{ marginLeft: 6 }}>{meta.total}</b>
          </span>
          <button
            type="button"
            className="button button-outline"
            onClick={() => setQuery((q) => ({ ...q, page: 1 }))}
            disabled={loading}
          >
            Refresh
          </button>
        </div>
      </div>

      {/* Toolbar: tabs + search + per page (lebih konsisten, tidak mepet) */}
      <div className="card" style={{ marginBottom: "0.9rem" }}>
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
          <div className="toolbar-left" style={{ minWidth: 260 }}>
            <DeliveryTabs
              value={tab ?? "ALL"}
              onChange={(k) => setTab(k === "ALL" ? "ALL" : k)}
            />
          </div>

          <div
            className="toolbar-right"
            style={{
              display: "flex",
              gap: "0.6rem",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "flex-end",
              flex: 1,
            }}
          >
            <input
              className="input"
              placeholder="Cari kode / alamat…"
              value={query.q ?? ""}
              onChange={(e) =>
                setQuery((q) => ({ ...q, q: e.target.value, page: 1 }))
              }
              style={{ minWidth: 240 }}
            />

            <select
              className="input"
              value={query.per_page ?? 10}
              onChange={(e) =>
                setQuery((q) => ({
                  ...q,
                  per_page: Number(e.target.value),
                  page: 1,
                }))
              }
              style={{ width: 130 }}
              aria-label="Per page"
            >
              <option value={10}>10 / page</option>
              <option value={20}>20 / page</option>
              <option value={50}>50 / page</option>
            </select>
          </div>
        </div>
      </div>

      {/* List: Tabel lebih “stabil” (kolom punya lebar, aksi wrap) */}
      <div className="card">
        <div className="table-responsive">
          <table className="table table-hover" style={{ tableLayout: "fixed" }}>
            <thead>
              <tr>
                <th style={{ width: 150 }}>Kode</th>
                <th style={{ width: 110 }}>Jenis</th>
                <th style={{ width: 260 }}>Kurir</th>
                <th style={{ width: 230 }}>Status</th>
                <th>Alamat</th>
                <th className="text-center" style={{ width: 340 }}>
                  Aksi
                </th>
              </tr>
            </thead>

            <tbody>
              {loading && (
                <tr>
                  <td colSpan={6} style={{ padding: "1.25rem" }}>
                    Memuat…
                  </td>
                </tr>
              )}

              {!loading && items.length === 0 && (
                <tr>
                  <td colSpan={6} style={{ padding: "1.25rem" }}>
                    Tidak ada data.
                  </td>
                </tr>
              )}

              {items.map((d) => {
                const canShowAssign =
                  canAssign && ["REQUESTED", "ASSIGNED"].includes(d.status);

                const canShowProgress =
                  canProgress &&
                  ["ASSIGNED", "PICKED_UP", "ON_ROUTE"].includes(d.status);

                const canShowWaybill =
                  !!d.assigned_to &&
                  ["ASSIGNED", "PICKED_UP", "ON_ROUTE", "DELIVERED"].includes(
                    d.status
                  );

                return (
                  <tr key={d.id}>
                    {/* Kode */}
                    <td className="mono">
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                        <Link to={`/delivery/${d.id}`} className="link">
                          {d.order_code ?? `#${d.order_id}`}
                        </Link>
                        <span className="text-muted" style={{ fontSize: "0.8rem" }}>
                          ID: {d.id}
                        </span>
                      </div>
                    </td>

                    {/* Jenis */}
                    <td>{renderTypeChip(d.type)}</td>

                    {/* Kurir + Assign */}
                    <td>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          justifyContent: "space-between",
                          flexWrap: "wrap",
                        }}
                      >
                        <div style={{ minWidth: 140 }}>
                          <div style={{ fontWeight: 600 }}>
                            {d.courier_name ?? "-"}
                          </div>
                          <div className="text-muted" style={{ fontSize: "0.82rem" }}>
                            {d.assigned_to ? "Sudah di-assign" : "Belum di-assign"}
                          </div>
                        </div>

                        {canShowAssign && (
                          <div style={{ minWidth: 160 }}>
                            <AssignCourierSelect
                              value={d.assigned_to ?? null}
                              allowAuto
                              onChange={async (val) => {
                                const auto = val === -1;
                                try {
                                  if (auto) {
                                    await assignCourier(d.id, { auto: true });
                                    setItems((arr) =>
                                      arr.map((x) => (x.id === d.id ? { ...x } : x))
                                    );
                                  } else {
                                    const payload = val !== null ? { assigned_to: val } : {};
                                    await assignCourier(d.id, payload);
                                    setItems((arr) =>
                                      arr.map((x) =>
                                        x.id === d.id ? { ...x, assigned_to: val } : x
                                      )
                                    );
                                  }
                                } catch (err: unknown) {
                                  if (isAxiosError(err)) {
                                    if (err.response?.status === 403) {
                                      alert("Anda tidak memiliki izin untuk assign kurir di cabang ini.");
                                    } else {
                                      const serverMsg = (
                                        err.response?.data as { message?: string } | undefined
                                      )?.message;
                                      alert(serverMsg ?? err.message ?? "Gagal assign kurir.");
                                    }
                                  } else {
                                    alert((err as Error).message);
                                  }
                                }
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </td>

                    {/* Status */}
                    <td>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                        <DeliveryStatusStepper status={d.status} />
                        {renderStatusLabel(d.status)}
                      </div>
                    </td>

                    {/* Alamat */}
                    <td>
                      <div className="truncate-1" style={{ fontWeight: 600 }}>
                        {(d.pickup_address || d.delivery_address)
                          ? `${d.pickup_address ?? ""}${
                              d.delivery_address ? " → " + d.delivery_address : ""
                            }`
                          : "-"}
                      </div>
                    </td>

                    {/* Aksi */}
                    <td className="text-center">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "0.5rem",
                          flexWrap: "wrap",
                        }}
                      >
                        {/* Progress buttons */}
                        {canShowProgress && d.status === "ASSIGNED" && (
                          <button
                            className="button button-outline"
                            onClick={async () => {
                              await updateStatus(d.id, { status: "PICKED_UP" as const });
                              setItems((xs) =>
                                xs.map((x) =>
                                  x.id === d.id ? { ...x, status: "PICKED_UP" } : x
                                )
                              );
                            }}
                          >
                            Mark Picked
                          </button>
                        )}

                        {canShowProgress && d.status === "PICKED_UP" && (
                          <button
                            className="button button-outline"
                            onClick={async () => {
                              await updateStatus(d.id, { status: "ON_ROUTE" as const });
                              setItems((xs) =>
                                xs.map((x) =>
                                  x.id === d.id ? { ...x, status: "ON_ROUTE" } : x
                                )
                              );
                            }}
                          >
                            On Route
                          </button>
                        )}

                        {canShowProgress && d.status === "ON_ROUTE" && (
                          <button
                            className="button button-primary"
                            onClick={async () => {
                              await updateStatus(d.id, { status: "DELIVERED" as const });
                              setItems((xs) =>
                                xs.map((x) =>
                                  x.id === d.id ? { ...x, status: "DELIVERED" } : x
                                )
                              );
                            }}
                          >
                            Delivered
                          </button>
                        )}

                        {/* Surat Jalan */}
                        {canShowWaybill && (
                          <>
                            <button
                              className="button button-outline"
                              onClick={() => openWaybill(d.id)}
                            >
                              Lihat / Print SJ
                            </button>

                            <button
                              className="button button-outline"
                              onClick={async () => {
                                try {
                                  const { wa_url } = await sendWaybillWhatsapp(d.id);
                                  window.open(wa_url, "_blank", "noopener");
                                } catch (e) {
                                  alert((e as Error).message || "Gagal menyiapkan WhatsApp.");
                                }
                              }}
                            >
                              WA Surat Jalan
                            </button>
                          </>
                        )}

                        {/* Link detail: selalu ada, jadi user tidak “bingung” */}
                        <Link to={`/delivery/${d.id}`} className="button button-ghost">
                          Detail
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination: dibuat lebih konsisten, tidak terlalu “kosong” */}
      <div className="card" style={{ marginTop: "0.9rem" }}>
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
          <div className="text-muted">
            Page <b>{meta.current_page}</b> / <b>{meta.last_page}</b> • Total{" "}
            <b>{meta.total}</b>
          </div>

          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <button
              className="button"
              disabled={meta.current_page <= 1}
              onClick={() =>
                setQuery((q) => ({ ...q, page: Math.max(1, (q.page ?? 1) - 1) }))
              }
            >
              Prev
            </button>
            <button
              className="button"
              disabled={meta.current_page >= meta.last_page}
              onClick={() => setQuery((q) => ({ ...q, page: (q.page ?? 1) + 1 }))}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
