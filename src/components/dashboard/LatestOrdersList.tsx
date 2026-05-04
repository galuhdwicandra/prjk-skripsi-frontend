// src/components/dashboard/LatestOrdersList.tsx
import type { CSSProperties } from 'react';
import type { LatestOrder } from '../../types/dashboard';

type Props = {
  data: LatestOrder[] | null;
  loading: boolean;
  error: string | null;
  onViewOrder?: (orderId: number) => void;
};

function fmtMoney(n: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(Number.isFinite(n) ? n : 0);
}

function fmtDateTime(value: string | null | undefined): string {
  if (!value) return '-';

  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;

  return new Intl.DateTimeFormat('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(d);
}

function statusClass(status: string): string {
  const s = status.toUpperCase();

  if (s === 'PAID') return 'badge badge-success';
  if (s === 'UNPAID' || s === 'DRAFT') return 'badge badge-warning';
  if (s === 'VOID' || s === 'REFUND') return 'badge badge-danger';

  return 'badge';
}

function cashPositionLabel(value: string | null): string {
  if (!value) return '-';

  const map: Record<string, string> = {
    CUSTOMER: 'Customer',
    CASHIER: 'Kasir',
    SALES: 'Sales',
    ADMIN: 'Admin',
  };

  return map[value] ?? value;
}

const tableWrap: CSSProperties = {
  width: '100%',
  overflowX: 'auto',
  WebkitOverflowScrolling: 'touch',
};

const table: CSSProperties = {
  width: '100%',
  minWidth: 920,
  borderCollapse: 'separate',
  borderSpacing: 0,
};

const th: CSSProperties = {
  textAlign: 'left',
  fontSize: 12,
  color: 'var(--color-text-soft)',
  fontWeight: 750,
  padding: '0.75rem 0.8rem',
  borderBottom: '1px solid rgba(0,0,0,0.08)',
  whiteSpace: 'nowrap',
};

const td: CSSProperties = {
  padding: '0.75rem 0.8rem',
  borderBottom: '1px solid rgba(0,0,0,0.05)',
  verticalAlign: 'middle',
  fontSize: 13,
  whiteSpace: 'nowrap',
};

const muted: CSSProperties = {
  fontSize: 12,
  color: 'var(--color-text-soft)',
  opacity: 0.85,
};

export default function LatestOrdersList({
  data,
  loading,
  error,
  onViewOrder,
}: Props): React.ReactElement {
  return (
    <div style={{ minWidth: 0 }}>
      {loading && (
        <div
          aria-hidden
          style={{
            height: 132,
            borderRadius: 14,
            background: 'rgba(0,0,0,.05)',
          }}
        />
      )}

      {error && (
        <div style={{ color: 'var(--color-danger)', fontSize: 13 }}>
          {error}
        </div>
      )}

      {!loading && !error && (!data || data.length === 0) && (
        <div style={{ fontSize: 13, color: 'var(--color-text-soft)' }}>
          Belum ada order terbaru.
        </div>
      )}

      {!loading && !error && data && data.length > 0 && (
        <div style={tableWrap}>
          <table style={table}>
            <thead>
              <tr>
                <th style={th}>Kode</th>
                <th style={th}>Pelanggan</th>
                <th style={th}>Cabang</th>
                <th style={th}>Status</th>
                <th style={th}>Posisi Uang</th>
                <th style={{ ...th, textAlign: 'right' }}>Grand Total</th>
                <th style={th}>Waktu</th>
                {onViewOrder && <th style={{ ...th, textAlign: 'right' }}>Aksi</th>}
              </tr>
            </thead>

            <tbody>
              {data.map((order) => (
                <tr key={order.id}>
                  <td style={td}>
                    <div style={{ fontWeight: 800, color: 'var(--color-text)' }}>
                      {order.kode}
                    </div>
                    <div style={muted}>#{order.id}</div>
                  </td>

                  <td style={td}>
                    <div style={{ fontWeight: 700, color: 'var(--color-text)' }}>
                      {order.customer_name || '-'}
                    </div>
                    <div style={muted}>{order.customer_phone || '-'}</div>
                  </td>

                  <td style={td}>
                    {order.cabang_nama || `Cabang #${order.cabang_id}`}
                  </td>

                  <td style={td}>
                    <span className={statusClass(order.status)}>
                      {order.status}
                    </span>
                  </td>

                  <td style={td}>
                    {cashPositionLabel(order.cash_position)}
                  </td>

                  <td style={{ ...td, textAlign: 'right', fontWeight: 800 }}>
                    {fmtMoney(order.grand_total)}
                  </td>

                  <td style={td}>
                    {fmtDateTime(order.ordered_at)}
                  </td>

                  {onViewOrder && (
                    <td style={{ ...td, textAlign: 'right' }}>
                      <button
                        type="button"
                        className="button button-ghost"
                        style={{ padding: '0.4rem 0.7rem', fontSize: 12 }}
                        onClick={() => onViewOrder(order.id)}
                      >
                        Detail
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}