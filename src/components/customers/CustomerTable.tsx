// src/components/customers/CustomerTable.tsx
import { useEffect, useMemo, useState } from "react";
import type {
  Customer,
  CustomerQuery,
  CustomerStage,
  LaravelPaginator,
} from "../../types/customers";
import { listCustomers } from "../../api/customers";
import CustomerStageBadge from "./CustomerStageBadge";

interface Props {
  onRowClick?: (c: Customer) => void;
  canCreate?: boolean;
  onCreate?: () => void;
}

// ✅ Selaras backend
const stages: CustomerStage[] = ["LEAD", "ACTIVE", "CHURN"];

// ✅ Helper tanpa `any`: dukung backend yang kadang kirim `nama` atau `name`
type CustomerRow = Customer & { nama?: string; name?: string };
const getDisplayName = (c: CustomerRow) => c.nama ?? c.name ?? "";

export default function CustomerTable({
  onRowClick,
  canCreate = false,
  onCreate,
}: Props): React.ReactElement {
  const [query, setQuery] = useState<CustomerQuery>({ page: 1, per_page: 10 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rows, setRows] = useState<LaravelPaginator<Customer> | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await listCustomers(query);
        if (!cancelled) setRows(data);
      } catch {
        if (!cancelled) setError("Failed to load customers");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [query]);

  const empty = useMemo(() => (rows?.data.length ?? 0) === 0, [rows]);
  const page = rows?.current_page ?? 1;
  const lastPage = rows?.last_page ?? 1;

  const canPrev = Boolean(rows) && page > 1 && !loading;
  const canNext = Boolean(rows) && page < lastPage && !loading;

  return (
    <div>
      {/* Toolbar (Filters + Actions) */}
      <div className="card" style={{ padding: "1rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          {/* Filters */}
          <div style={{ flex: "1 1 640px", minWidth: 260 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr 1fr",
                gap: "0.85rem",
              }}
            >
              <div style={{ minWidth: 220 }}>
                <label className="form-label">Search</label>
                <input
                  className="input w-full"
                  placeholder="Nama / 08xx / email"
                  value={query.q ?? ""}
                  onChange={(ev) =>
                    setQuery((q) => ({ ...q, q: ev.target.value, page: 1 }))
                  }
                />
              </div>

              <div>
                <label className="form-label">Stage</label>
                <select
                  className="select w-full"
                  value={query.stage ?? ""}
                  onChange={(ev) =>
                    setQuery((q) => ({
                      ...q,
                      stage:
                        (ev.target.value as CustomerStage) || undefined,
                      page: 1,
                    }))
                  }
                >
                  <option value="">All</option>
                  {stages.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="form-label">From</label>
                <input
                  type="date"
                  className="input w-full"
                  value={query.from ?? ""}
                  onChange={(ev) =>
                    setQuery((q) => ({
                      ...q,
                      from: ev.target.value || undefined,
                      page: 1,
                    }))
                  }
                />
              </div>

              <div>
                <label className="form-label">To</label>
                <input
                  type="date"
                  className="input w-full"
                  value={query.to ?? ""}
                  onChange={(ev) =>
                    setQuery((q) => ({
                      ...q,
                      to: ev.target.value || undefined,
                      page: 1,
                    }))
                  }
                />
              </div>
            </div>

            {/* mini helper */}
            <div style={{ marginTop: "0.75rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <span className="badge">Tip</span>
              <span style={{ fontSize: "0.9rem", opacity: 0.75 }}>
                Klik baris tabel untuk membuka detail customer.
              </span>
              {loading ? (
                <span className="badge" style={{ opacity: 0.8 }}>
                  Loading…
                </span>
              ) : null}
            </div>
          </div>

          {/* Actions */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              justifyContent: "flex-end",
              flex: "0 1 auto",
            }}
          >
            {canCreate ? (
              <button
                type="button"
                className="button button-primary"
                onClick={() => onCreate?.()}
                disabled={loading}
              >
                + New Customer
              </button>
            ) : null}

            <button
              type="button"
              className="button button-outline"
              onClick={() => setQuery((q) => ({ ...q, page: 1 }))}
              disabled={loading}
              title="Reset ke halaman 1"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Responsive: grid jadi 1 kolom di layar kecil */}
        <style>
          {`
            @media (max-width: 900px) {
              .card div[style*="grid-template-columns: 2fr 1fr 1fr 1fr"] {
                grid-template-columns: 1fr !important;
              }
            }
          `}
        </style>
      </div>

      {/* Table + Pagination dalam 1 card agar tidak terpecah */}
      <div className="card" style={{ padding: "0.75rem 0.75rem 0.5rem 0.75rem" }}>
        <div style={{ overflowX: "auto" }}>
          <table className="table" style={{ minWidth: 860 }}>
            <thead>
              <tr>
                <th className="text-left">Name</th>
                <th className="text-left">Phone</th>
                <th className="text-left">Email</th>
                <th className="text-left">Stage</th>
                <th className="text-left">Last Order</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td className="text-center muted" colSpan={5}>
                    Loading…
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td className="text-center danger" colSpan={5}>
                    {error}
                  </td>
                </tr>
              ) : rows ? (
                rows.data.map((c) => {
                  const row = c as CustomerRow;

                  return (
                    <tr
                      key={c.id}
                      onClick={() => onRowClick?.(c)}
                      style={{
                        cursor: onRowClick ? "pointer" : "default",
                      }}
                      title={onRowClick ? "Open customer detail" : undefined}
                    >
                      <td className="font-medium">{getDisplayName(row)}</td>
                      <td>{row.phone}</td>
                      <td>{row.email ?? "-"}</td>
                      <td>
                        <CustomerStageBadge stage={row.stage} />
                      </td>
                      <td>
                        {row.last_order_at
                          ? new Date(row.last_order_at).toLocaleString()
                          : "-"}
                      </td>
                    </tr>
                  );
                })
              ) : null}

              {rows && empty && !loading && !error ? (
                <tr>
                  <td className="text-center muted" colSpan={5}>
                    No customers found.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>

        {/* Divider halus */}
        <div
          style={{
            height: 1,
            background: "rgba(2,6,23,0.06)",
            margin: "0.75rem 0.25rem",
          }}
        />

        {/* Pagination */}
        <div
          className="toolbar"
          style={{
            padding: "0 0.25rem 0.25rem 0.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.75rem",
            flexWrap: "wrap",
          }}
        >
          <div className="muted text-xs">
            Page {page} / {lastPage}
            {rows ? (
              <span style={{ marginLeft: "0.5rem", opacity: 0.8 }}>
                • Total: {rows.total ?? rows.data.length}
              </span>
            ) : null}
          </div>

          <div
            className="toolbar-actions"
            style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
          >
            <button
              className="button button-outline"
              disabled={!canPrev}
              onClick={() =>
                setQuery((q) => ({
                  ...q,
                  page: Math.max(1, (q.page ?? 1) - 1),
                }))
              }
            >
              Prev
            </button>

            <button
              className="button button-outline"
              disabled={!canNext}
              onClick={() =>
                setQuery((q) => ({
                  ...q,
                  page: Math.min(lastPage, (q.page ?? 1) + 1),
                }))
              }
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
