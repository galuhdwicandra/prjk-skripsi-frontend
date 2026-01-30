// src/pages/DashboardHome.tsx
import { useEffect, useMemo, useState } from 'react';
import { useAuth } from '../store/auth';
import { getKPIs, getChart7d, getTopProducts, getLowStock, getQuickActions } from '../api/dashboard';
import type { KPIs, Chart7DayPoint, TopProduct, LowStockRow, QuickAction } from '../types/dashboard';
import KPIStatCards from '../components/dashboard/KPIStatCards';
import Sales7DaysChart from '../components/dashboard/Sales7DaysChart';
import TopProductsList from '../components/dashboard/TopProductsList';
import LowStockList from '../components/dashboard/LowStockList';
import QuickActions from '../components/dashboard/QuickActions';
import ReorderPointList from '../components/dashboard/ReorderPointList';

export default function DashboardHome(): React.ReactElement {
  const { user, hasRole } = useAuth();

  const branchId = user?.cabang_id ?? null;
  const isSuperadmin = hasRole('superadmin');
  const effectiveCabangId = useMemo(
    () => (isSuperadmin ? (branchId ?? undefined) : (user?.cabang_id ?? undefined)),
    [isSuperadmin, branchId, user?.cabang_id]
  );

  const canView = useMemo(() => hasRole('superadmin', 'admin_cabang', 'kasir'), [hasRole]);

  const [kpi, setKpi] = useState<KPIs | null>(null);
  const [chart, setChart] = useState<Chart7DayPoint[] | null>(null);
  const [top, setTop] = useState<TopProduct[] | null>(null);
  const [low, setLow] = useState<LowStockRow[] | null>(null);
  const [acts, setActs] = useState<QuickAction[] | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const run = async (): Promise<void> => {
      if (!canView) return;
      setLoading(true);
      setErr(null);

      try {
        const now = new Date();
        const to = new Date(now); to.setHours(23, 59, 59, 999);
        const from = new Date(now); from.setDate(now.getDate() - 6); from.setHours(0, 0, 0, 0);

        const [k, c, t, l, a] = await Promise.all([
          getKPIs({ cabang_id: effectiveCabangId, from: from.toISOString(), to: to.toISOString() }),
          getChart7d({ cabang_id: effectiveCabangId }),
          getTopProducts({ cabang_id: effectiveCabangId, limit: 5 }),
          getLowStock({ cabang_id: effectiveCabangId }),
          getQuickActions({ cabang_id: effectiveCabangId }),
        ]);

        if (!cancelled) {
          setKpi(k); setChart(c); setTop(t); setLow(l); setActs(a);
        }
      } catch (e) {
        if (!cancelled) {
          const anyErr = e as { response?: { status?: number; data?: unknown } };
          const serverMsg =
            anyErr?.response?.data &&
            typeof anyErr.response.data === 'object' &&
            (anyErr.response.data as Record<string, unknown>)?.message;

          const msg =
            anyErr?.response?.status === 403
              ? (typeof serverMsg === 'string'
                ? `403 Forbidden — ${serverMsg}`
                : '403 Forbidden — Policy backend menolak akses.')
              : (e instanceof Error ? e.message : 'Failed to load dashboard');

          setErr(msg);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    void run();
    return () => { cancelled = true; };
  }, [effectiveCabangId, canView]);

  // ====== Guard (tetap) ======
  if (!canView) {
    return (
      <div className="card" style={{ padding: 16 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
          <span className="badge badge-warning">Akses</span>
          <div style={{ opacity: 0.85 }}>You don’t have permission to view the dashboard.</div>
        </div>
      </div>
    );
  }

  if (!isSuperadmin && !user?.cabang_id) {
    return (
      <div className="card" style={{ padding: 16 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
          <span className="badge badge-warning">Perlu Tindakan</span>
          <div style={{ opacity: 0.95 }}>
            Akun Anda belum terikat ke cabang. Hubungi admin pusat.
          </div>
        </div>
      </div>
    );
  }

  // ====== UI styles ======
  const pageStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 18,
    width: 'min(1280px, 96%)',
    margin: '0 auto',
    paddingBottom: 6,
  };

  const headerWrap: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 2,
  };

  const headerMeta: React.CSSProperties = {
    fontSize: 12,
    opacity: 0.7,
    marginBottom: 6,
    letterSpacing: '.02em',
    textTransform: 'uppercase',
  };

  const headerTitle: React.CSSProperties = {
    margin: 0,
    fontSize: 20,
    fontWeight: 800,
    letterSpacing: '-0.01em',
    color: 'var(--color-text)',
    lineHeight: 1.2,
  };

  const headerDesc: React.CSSProperties = {
    marginTop: 6,
    marginBottom: 0,
    fontSize: 14,
    color: 'var(--color-text-soft)',
  };

  const headerRight: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  };

  const cardHeadRow: React.CSSProperties = {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gap: 10,
  };

  const cardTitle: React.CSSProperties = {
    fontWeight: 750,
    color: 'var(--color-text)',
    margin: 0,
    fontSize: 14,
    letterSpacing: '.01em',
  };

  const cardHint: React.CSSProperties = {
    fontSize: 12,
    color: 'var(--color-text-soft)',
    margin: 0,
    opacity: 0.9,
  };

  const divider: React.CSSProperties = {
    borderTop: '1px solid rgba(0,0,0,0.06)',
    marginTop: 10,
    paddingTop: 12,
  };

  // Grid 3 kartu di bawah chart
  const triGrid: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: 18,
    alignItems: 'start',
  };

  const responsiveCss = `
    @media (max-width: 1100px) {
      .dash-3 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
    }
    @media (max-width: 720px) {
      .dash-3 { grid-template-columns: 1fr !important; }
    }
  `;

  return (
    <div style={pageStyle}>
      {/* Header */}
      <div style={headerWrap}>
        <div style={{ minWidth: 0 }}>
          <div style={headerMeta}>Dashboard</div>
          <h1 style={headerTitle}>Ringkasan aktivitas & performa toko</h1>
          <p style={headerDesc}>
            KPI, tren 7 hari, produk terlaris, indikator reorder (ROP), dan peringatan stok rendah.
          </p>
        </div>

        <div style={headerRight}>
          {err ? (
            <span className="badge badge-danger" title={err}>Error</span>
          ) : loading ? (
            <span className="badge">Loading</span>
          ) : (
            <span className="badge badge-success">Up to date</span>
          )}
        </div>
      </div>

      {/* KPI */}
      <KPIStatCards data={kpi} loading={loading} error={err} />

      {/* Chart: sekarang full width */}
      <section className="card" style={{ padding: 'var(--space-5)', minWidth: 0 }}>
        <div style={cardHeadRow}>
          <h2 style={cardTitle}>Trend Penjualan 7 Hari</h2>
          <p style={cardHint}>Update otomatis berdasarkan cabang & role</p>
        </div>
        <div style={divider}>
          <Sales7DaysChart data={chart} loading={loading} error={err} />
        </div>
      </section>

      {/* 3 kartu: Top Produk, ROP, Stok Rendah (di bawah chart) */}
      <div className="dash-3" style={triGrid}>
        <section className="card" style={{ padding: 'var(--space-5)', minWidth: 0 }}>
          <div style={cardHeadRow}>
            <h2 style={cardTitle}>Produk Terlaris</h2>
            <p style={cardHint}>Top 5</p>
          </div>
          <div style={divider}>
            <TopProductsList data={top} loading={loading} error={err} />
          </div>
        </section>

        <section className="card" style={{ padding: 'var(--space-5)', minWidth: 0 }}>
          <div style={cardHeadRow}>
            <h2 style={cardTitle}>Perlu Reorder (ROP)</h2>
            <p style={cardHint}>Prioritas restok</p>
          </div>
          <div style={divider}>
            <ReorderPointList />
          </div>
        </section>

        <section className="card" style={{ padding: 'var(--space-5)', minWidth: 0 }}>
          <div style={cardHeadRow}>
            <h2 style={cardTitle}>Stok Rendah</h2>
            <p style={cardHint}>Butuh tindakan cepat</p>
          </div>
          <div style={divider}>
            <LowStockList data={low} loading={loading} error={err} />
          </div>
        </section>
      </div>

      {/* Alert bar */}
      {Array.isArray(low) && low.length > 0 && (
        <div
          className="card"
          style={{
            padding: 14,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="badge badge-warning">Peringatan</span>
            <div style={{ fontSize: 14, color: 'var(--color-text)' }}>
              Ada <strong>{low.length}</strong> item stok rendah. Cek kartu <strong>Stok Rendah</strong>.
            </div>
          </div>

          <button
            type="button"
            className="button button-outline"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Lihat Ringkasan
          </button>
        </div>
      )}

      {/* Quick actions */}
      <section className="card" style={{ padding: 'var(--space-5)' }}>
        <div style={cardHeadRow}>
          <h2 style={cardTitle}>Tindakan Cepat</h2>
          <p style={cardHint}>Shortcut operasional</p>
        </div>
        <div style={divider}>
          <QuickActions
            data={acts}
            loading={loading}
            error={err}
            onRun={(a) => {
              if (a.type === 'LOW_STOCK') alert(`Low stock count: ${a.payload?.count ?? 0}`);
              if (a.type === 'PAYMENT_CHECK') alert('Buka daftar pembayaran untuk cek transaksi PENDING/FAILED.');
            }}
          />
        </div>
      </section>

      <style>{responsiveCss}</style>
    </div>
  );
}
