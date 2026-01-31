// src/pages/accounting/AccountingReports.tsx
import { useEffect, useState, useCallback } from "react";
import { getTrialBalance, getGeneralLedger, getProfitLoss, getBalanceSheet } from "../../api/accounting";
import type { TrialBalanceRow, GLRow, ID } from "../../types/accounting";
import type { BalanceSheetAgg, ProfitLossAgg } from "../../types/accounting";
import { useAuth } from "../../store/auth";

export default function AccountingReports() {
  const { user } = useAuth();
  const [tab, setTab] = useState<"TB" | "GL" | "PL" | "BS">("TB");

  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [accountId, setAccountId] = useState<ID | null>(null);

  const [tb, setTb] = useState<TrialBalanceRow[] | null>(null);
  const [gl, setGl] = useState<GLRow[] | null>(null);
  const [pl, setPl] = useState<ProfitLossAgg | null>(null);
  const [bs, setBs] = useState<BalanceSheetAgg | null>(null);
  const [error, setError] = useState<string | null>(null);

  // formatter uang (tanpa koma desimal, konsisten dengan style id-ID)
  const fmt = useCallback((n: number) => {
    const num = Number.isFinite(n) ? n : Number(n) || 0;
    return new Intl.NumberFormat("id-ID", { maximumFractionDigits: 0 }).format(num);
  }, []);

  // Ambil cabang_id toleran berbagai shape user
  const getCabangId = useCallback((): number => {
    if (!user) return 0;
    // @ts-expect-error: toleransi variasi field cabang
    const maybe = user.branch_id ?? user.branchId ?? user.cabang_id ?? user.cabangId ?? (user)?.branch?.id;
    return typeof maybe === "number" && Number.isFinite(maybe) ? maybe : 0;
  }, [user]);

  const refresh = useCallback(async () => {
    const cabang_id = getCabangId();
    setError(null);

    if (!cabang_id) {
      setError("Cabang tidak terdeteksi. Pastikan user memiliki cabang_id (branch/cabang) yang valid.");
      setTb([]); setGl([]); setPl({}); setBs({});
      return;
    }

    try {
      if (tab === "TB") {
        const data = await getTrialBalance({ cabang_id, year, month });
        setTb(data); setGl(null); setPl(null); setBs(null);
        return;
      }
      if (tab === "GL") {
        if (!accountId) {
          setGl([]); setTb(null); setPl(null); setBs(null);
          return;
        }
        const data = await getGeneralLedger({ cabang_id, year, month, account_id: accountId });
        setGl(data); setTb(null); setPl(null); setBs(null);
        return;
      }
      if (tab === "PL") {
        const data = await getProfitLoss({ cabang_id, year, month });
        setPl(data); setTb(null); setGl(null); setBs(null);
        return;
      }
      if (tab === "BS") {
        const data = await getBalanceSheet({ cabang_id, year, month });
        setBs(data); setTb(null); setGl(null); setPl(null);
        return;
      }
    } catch (e: any) {
      // tampilkan error apa adanya kalau ada response message dari backend
      const msg =
        e?.response?.data?.message ||
        e?.message ||
        "Gagal memuat report. Cek Network/Console (401/403/500) dan pastikan ada jurnal POSTED di periode ini.";
      setError(String(msg));
      // set ke empty supaya UI tetap konsisten
      if (tab === "TB") setTb([]);
      if (tab === "GL") setGl([]);
      if (tab === "PL") setPl({});
      if (tab === "BS") setBs({});
    }
  }, [getCabangId, tab, year, month, accountId]);

  useEffect(() => { void refresh(); }, [refresh]);

  return (
    <div>
      {/* Header & Filter */}
      <div className="card" style={{ marginBottom: 12 }}>
        <div className="card__body">
          <div className="toolbar">
            <h1 className="page-title">Laporan Akuntansi</h1>
            <div className="toolbar__spacer" />
            <div className="toolbar__group">
              <select
                className="select"
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                aria-label="Tahun"
              >
                {Array.from({ length: 6 }).map((_, i) => {
                  const y = new Date().getFullYear() - i;
                  return <option key={y} value={y}>{y}</option>;
                })}
              </select>

              <select
                className="select"
                value={month}
                onChange={(e) => setMonth(Number(e.target.value))}
                aria-label="Bulan"
              >
                {Array.from({ length: 12 }).map((_, i) => {
                  const m = i + 1;
                  return <option key={m} value={m}>{m.toString().padStart(2, "0")}</option>;
                })}
              </select>

              {/* Tab sebagai button group: aktif=button-primary, lain=button-outline */}
              <div className="button-group">
                <button
                  className={tab === "TB" ? "button button-primary" : "button button-outline"}
                  onClick={() => setTab("TB")}
                  aria-pressed={tab === "TB"}
                >Trial Balance</button>
                <button
                  className={tab === "GL" ? "button button-primary" : "button button-outline"}
                  onClick={() => setTab("GL")}
                  aria-pressed={tab === "GL"}
                >General Ledger</button>
                <button
                  className={tab === "PL" ? "button button-primary" : "button button-outline"}
                  onClick={() => setTab("PL")}
                  aria-pressed={tab === "PL"}
                >P&amp;L</button>
                <button
                  className={tab === "BS" ? "button button-primary" : "button button-outline"}
                  onClick={() => setTab("BS")}
                  aria-pressed={tab === "BS"}
                >Balance Sheet</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {error && (
        <div className="alert alert-danger" style={{ marginBottom: 12 }}>
          {error}
        </div>
      )}

      {/* Trial Balance */}
      {tab === "TB" && (
        <div className="card" style={{ marginBottom: 12 }}>
          <div className="card__body" style={{ padding: 0 }}>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Kode</th>
                    <th>Nama</th>
                    <th className="text-right">Debit</th>
                    <th className="text-right">Kredit</th>
                  </tr>
                </thead>
                <tbody>
                  {(tb ?? []).map((r) => (
                    <tr key={r.id}>
                      <td>{r.code}</td>
                      <td>{r.name}</td>
                      <td className="text-right">{fmt(Number(r.debit))}</td>
                      <td className="text-right">{fmt(Number(r.credit))}</td>
                    </tr>
                  ))}
                  {(tb ?? []).length === 0 && (
                    <tr>
                      <td colSpan={4}>
                        <div className="empty text-muted">Tidak ada data.</div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* General Ledger */}
      {tab === "GL" && (
        <div className="card" style={{ marginBottom: 12 }}>
          <div className="card__body">
            <div className="form-row">
              <div className="form-field">
                <label className="form-label">Account ID</label>
                <input
                  type="number"
                  className="input"
                  placeholder="Masukkan Account ID…"
                  value={accountId ?? ""}
                  onChange={(e) => setAccountId(e.target.value ? Number(e.target.value) : null)}
                  min={1}
                />
              </div>
            </div>

            <div className="table-responsive" style={{ marginTop: 8 }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Tanggal</th>
                    <th>Nomor</th>
                    <th className="text-right">Debit</th>
                    <th className="text-right">Kredit</th>
                    <th>Ref</th>
                  </tr>
                </thead>
                <tbody>
                  {(gl ?? []).map((r, i) => (
                    <tr key={i}>
                      <td>{r.journal_date}</td>
                      <td>{r.number}</td>
                      <td className="text-right">{fmt(Number(r.debit))}</td>
                      <td className="text-right">{fmt(Number(r.credit))}</td>
                      <td className="text-xs">{r.ref_type ? `${r.ref_type}#${r.ref_id}` : "—"}</td>
                    </tr>
                  ))}
                  {(gl ?? []).length === 0 && (
                    <tr>
                      <td colSpan={5}>
                        <div className="empty text-muted">Tidak ada data.</div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Profit & Loss */}
      {tab === "PL" && (
        <div className="card" style={{ marginBottom: 12 }}>
          <div className="card__body" style={{ padding: 0 }}>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Kelompok</th>
                    <th className="text-right">Debit</th>
                    <th className="text-right">Kredit</th>
                    <th className="text-right">Net</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(pl ?? {}).map(([k, v]) => {
                    const debit = Number(v?.debit ?? 0);
                    const credit = Number(v?.credit ?? 0);
                    const net = credit - debit; // revenue normal credit, expense normal debit; ini tetap “indikatif”
                    return (
                      <tr key={k}>
                        <td>{k}</td>
                        <td className="text-right">{fmt(debit)}</td>
                        <td className="text-right">{fmt(credit)}</td>
                        <td className="text-right">{fmt(net)}</td>
                      </tr>
                    );
                  })}
                  {Object.keys(pl ?? {}).length === 0 && (
                    <tr>
                      <td colSpan={4}>
                        <div className="empty text-muted">
                          Tidak ada data. Pastikan ada jurnal berstatus POSTED untuk periode ini.
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Balance Sheet */}
      {tab === "BS" && (
        <div className="card" style={{ marginBottom: 12 }}>
          <div className="card__body" style={{ padding: 0 }}>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Kelompok</th>
                    <th className="text-right">Debit</th>
                    <th className="text-right">Kredit</th>
                    <th className="text-right">Saldo (Net)</th>
                  </tr>
                </thead>
                <tbody>
                  {(["Asset", "Liability", "Equity"] as const).map((k) => {
                    const row = (bs as any)?.[k];
                    const debit = Number(row?.debit ?? 0);
                    const credit = Number(row?.credit ?? 0);
                    const net = k === "Asset" ? debit - credit : credit - debit; // normal balance
                    return (
                      <tr key={k}>
                        <td>{k}</td>
                        <td className="text-right">{fmt(debit)}</td>
                        <td className="text-right">{fmt(credit)}</td>
                        <td className="text-right">{fmt(net)}</td>
                      </tr>
                    );
                  })}

                  {(() => {
                    const a = (bs as any)?.Asset;
                    const l = (bs as any)?.Liability;
                    const e = (bs as any)?.Equity;
                    const asset = (Number(a?.debit ?? 0) - Number(a?.credit ?? 0));
                    const lia = (Number(l?.credit ?? 0) - Number(l?.debit ?? 0));
                    const eq = (Number(e?.credit ?? 0) - Number(e?.debit ?? 0));
                    const diff = asset - (lia + eq);

                    const empty = !bs || Object.keys(bs as any).length === 0;
                    if (empty) return (
                      <tr>
                        <td colSpan={4}>
                          <div className="empty text-muted">
                            Tidak ada data. Pastikan ada jurnal berstatus POSTED untuk periode ini.
                          </div>
                        </td>
                      </tr>
                    );

                    return (
                      <tr>
                        <td><strong>Selisih (Asset - (Liability + Equity))</strong></td>
                        <td colSpan={3} className="text-right"><strong>{fmt(diff)}</strong></td>
                      </tr>
                    );
                  })()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
