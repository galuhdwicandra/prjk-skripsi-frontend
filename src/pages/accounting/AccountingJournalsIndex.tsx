// src/pages/accounting/AccountingJournalsIndex.tsx
import { useEffect, useState, useCallback } from "react";
import type { JournalEntry, JournalLine } from "../../types/accounting";
import { listJournals, createJournal, postJournal, listAccounts } from "../../api/accounting";
import { useAuth } from "../../store/auth";
import JournalEditor from "../../components/accounting/JournalEditor";

export default function AccountingJournalsIndex() {
  const { hasRole, user } = useAuth();
  const canWrite = hasRole("superadmin", "admin_cabang");

  const getCabangId = useCallback((): number => {
    if (!user) return 0;
    // di project Anda, field yang valid adalah cabang_id (lihat types/user.ts)
    const raw = (user as unknown as { cabang_id?: number | string }).cabang_id;
    const n = typeof raw === "string" ? Number(raw) : raw;
    return Number.isFinite(n) && Number(n) > 0 ? Number(n) : 0;
  }, [user]);

  const [tab, setTab] = useState<"DRAFT" | "POSTED">("DRAFT");
  const [rows, setRows] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  // === NEW: state untuk POST ALL ===
  const [postingAll, setPostingAll] = useState(false);
  const [postAllDone, setPostAllDone] = useState(0);
  const [postAllTotal, setPostAllTotal] = useState(0);

  const [editorOpen, setEditorOpen] = useState(false);
  const [lines, setLines] = useState<JournalLine[]>([]);
  const [accounts, setAccounts] = useState<{ id: number; code: string; name: string }[]>([]);
  const [journalNumber, setJournalNumber] = useState<string>("");
  const [journalNumberOptions, setJournalNumberOptions] = useState<string[]>([]);

  useEffect(() => {
    if (!editorOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setEditorOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [editorOpen]);

  useEffect(() => {
    if (!editorOpen) return;

    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const base = `JRNL-${y}${m}${day}`;
    const options = Array.from({ length: 10 }, (_, i) => `${base}-${String(i + 1).padStart(4, "0")}`);

    setJournalNumber(options[0]);
    setJournalNumberOptions(options);
  }, [editorOpen]);


  // helper refresh (biar tidak duplikasi panggilan list)
  const refresh = useCallback(async () => {
    const cid = getCabangId();
    const j = await listJournals({ cabang_id: cid, status: tab, page: 1, per_page: 10 });
    setRows(j.data);
  }, [getCabangId, tab]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setErr(null);
        const cid = getCabangId();
        const [j, a] = await Promise.all([
          listJournals({ cabang_id: cid, status: tab, page: 1, per_page: 10 }),
          (async () => {
            const res = await listAccounts({
              per_page: 500,
              ...(cid ? { cabang_id: cid } : {}), // kalau cid = 0, jangan kirim cabang_id
            });
            return res.data.map((x) => ({ id: x.id, code: x.code, name: x.name }));
          })(),
        ]);
        setRows(j.data);
        const sorted = a.slice().sort((x, y) => (x.code || "").localeCompare(y.code || ""));
        setAccounts(sorted);
      } catch {
        setErr("Gagal memuat jurnal.");
      } finally {
        setLoading(false);
      }
    })();
  }, [tab, getCabangId]);

  function onCreate() {
    setEditorOpen(true);
    setLines([
      {
        account_id: 0,
        cabang_id: getCabangId(),
        debit: 0,
        credit: 0,
        ref_type: null,
        ref_id: null,
      },
    ]);
  }

  async function onSave(date: string, number: string, description?: string | null) {
    try {
      const cid = getCabangId();
      await createJournal({
        cabang_id: cid,
        journal_date: date,
        number,
        description: description ?? null,
        lines: (lines ?? []).map((l) => ({ ...l, cabang_id: cid })),
      });
      setEditorOpen(false);
      setLines([]);
      await refresh();
    } catch {
      setErr("Gagal menyimpan jurnal (cek 422/403/409).");
    }
  }

  async function onPost(id: number) {
    if (!confirm("Post jurnal ini? Setelah POSTED, tidak bisa diubah.")) return;
    try {
      await postJournal(id);
      await refresh();
    } catch {
      setErr("Gagal POST jurnal (cek 409 period closed atau unbalanced).");
    }
  }

  // === NEW: POST SEMUA (ambil semua DRAFT by paging, lalu post satu per satu) ===
  async function onPostAll() {
    if (!canWrite) return;
    const cid = getCabangId();
    if (!cid) {
      setErr("Cabang tidak terdeteksi. Login ulang atau cek data user.");
      return;
    }

    const ok = confirm(
      "POST semua jurnal DRAFT untuk cabang ini?\n\nCatatan: Setelah POSTED, jurnal tidak bisa diubah."
    );
    if (!ok) return;

    setPostingAll(true);
    setErr(null);
    setPostAllDone(0);
    setPostAllTotal(0);

    const failed: Array<{ id: number; reason: string }> = [];

    try {
      // 1) kumpulkan semua id DRAFT via paging
      const ids: number[] = [];
      let page = 1;
      let lastPage = 1;

      do {
        const res = await listJournals({ cabang_id: cid, status: "DRAFT", page, per_page: 20 });
        ids.push(...res.data.map((x) => x.id));
        lastPage = res.meta?.last_page ?? 1;
        page += 1;
      } while (page <= lastPage);

      if (ids.length === 0) {
        setErr("Tidak ada jurnal DRAFT yang bisa di-post.");
        return;
      }

      setPostAllTotal(ids.length);

      // 2) post satu per satu (lebih aman untuk menangani error per item)
      for (let i = 0; i < ids.length; i++) {
        const id = ids[i];
        try {
          await postJournal(id);
        } catch {
          failed.push({ id, reason: "Gagal POST (periode closed / unbalanced / unauthorized / konflik)." });
        } finally {
          setPostAllDone(i + 1);
        }
      }

      // 3) refresh tab DRAFT agar terlihat berkurang/habis
      await refresh();

      // 4) ringkasan
      if (failed.length > 0) {
        const sample = failed.slice(0, 8).map((x) => `#${x.id}`).join(", ");
        setErr(
          `POST semua selesai, tetapi ada yang gagal: ${failed.length} dari ${ids.length}. ` +
          `Contoh ID gagal: ${sample}${failed.length > 8 ? ", ..." : ""}`
        );
      }
    } finally {
      setPostingAll(false);
    }
  }

  const renderStatus = (s: "DRAFT" | "POSTED") => (
    <span className={`badge ${s === "POSTED" ? "badge-success" : "badge-warning"}`}>{s}</span>
  );

  if (loading) {
    return (
      <div className="card">
        <div className="card__body">Loading…</div>
      </div>
    );
  }
  if (err) {
    return <div className="alert alert-danger">{err}</div>;
  }

  return (
    <div>
      {/* Header & actions */}
      <div className="card" style={{ marginBottom: 12 }}>
        <div className="card__body">
          <div className="toolbar">
            <h1 className="page-title">Jurnal</h1>
            <div className="toolbar__spacer" />
            <div className="btn-group">
              <button
                className={`button ${tab === "DRAFT" ? "button-primary" : "button-outline"}`}
                onClick={() => setTab("DRAFT")}
                disabled={postingAll}
                aria-disabled={postingAll}
              >
                DRAFT
              </button>
              <button
                className={`button ${tab === "POSTED" ? "button-primary" : "button-outline"}`}
                onClick={() => setTab("POSTED")}
                disabled={postingAll}
                aria-disabled={postingAll}
              >
                POSTED
              </button>

              {/* NEW: Tombol POST SEMUA hanya saat tab DRAFT */}
              {tab === "DRAFT" && (
                <button
                  className="button button-outline"
                  onClick={onPostAll}
                  disabled={!canWrite || postingAll || accounts.length === 0}
                  aria-disabled={!canWrite || postingAll || accounts.length === 0}
                  title={!canWrite ? "Tidak punya akses" : "Post semua jurnal DRAFT"}
                >
                  {postingAll ? `POSTING… (${postAllDone}/${postAllTotal || "?"})` : "POST SEMUA"}
                </button>
              )}

              <button
                className="button button-primary"
                onClick={onCreate}
                disabled={!canWrite || postingAll}
                aria-disabled={!canWrite || postingAll}
              >
                Jurnal Baru
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="card" style={{ marginBottom: 12 }}>
        <div className="card__body" style={{ padding: 0 }}>
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: 140 }}>Tanggal</th>
                <th>Nomor</th>
                <th>Deskripsi</th>
                <th style={{ width: 120, textAlign: "center" }}>Status</th>
                <th style={{ width: 120 }} />
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id}>
                  <td>{r.journal_date}</td>
                  <td>{r.number}</td>
                  <td>{r.description ?? "—"}</td>
                  <td style={{ textAlign: "center" }}>{renderStatus(r.status)}</td>
                  <td style={{ textAlign: "right" }}>
                    {r.status === "DRAFT" && (
                      <button
                        className="button button-outline"
                        onClick={() => onPost(r.id)}
                        disabled={!canWrite || postingAll}
                        aria-disabled={!canWrite || postingAll}
                      >
                        POST
                      </button>
                    )}
                  </td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ textAlign: "center", padding: "28px 12px", color: "var(--muted-foreground)" }}>
                    Tidak ada data.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Popup (Modal) - Jurnal Baru */}
      {editorOpen && (
        <div
          className="modal-overlay"
          onMouseDown={(e) => {
            // klik backdrop => tutup
            if (e.target === e.currentTarget) setEditorOpen(false);
          }}
        >
          <div
            className="modal card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="journal-dialog-title"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2 className="modal-title" id="journal-dialog-title">
                Jurnal Baru
              </h2>

              <button
                className="button button-ghost"
                type="button"
                onClick={() => setEditorOpen(false)}
              >
                Tutup
              </button>
            </div>

            <div className="card__body">
              <div className="form-row form-row--3" style={{ marginBottom: 12 }}>
                <div className="form-field">
                  <label className="form-label" htmlFor="je-date">Tanggal</label>
                  <input
                    type="date"
                    className="input"
                    id="je-date"
                    defaultValue={new Date().toISOString().slice(0, 10)}
                  />
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="je-number">Nomor</label>

                  <select
                    id="je-number"
                    className="input"
                    value={journalNumber}
                    onChange={(e) => setJournalNumber(e.target.value)}
                  >
                    {journalNumberOptions.map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>

                  <div className="help-text" style={{ marginTop: 6 }}>
                    Pilih nomor jurnal dari daftar (format konsisten).
                  </div>
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="je-desc">Deskripsi</label>
                  <input type="text" className="input" id="je-desc" placeholder="Deskripsi (opsional)" />
                </div>
              </div>

              {accounts.length === 0 && (
                <div className="alert alert-danger" style={{ marginBottom: 12 }}>
                  COA/Akun belum termuat. Pastikan user memiliki <b>cabang_id</b> yang valid dan data akun tersedia.
                </div>
              )}

              <JournalEditor lines={lines} onChange={setLines} accounts={accounts} />
            </div>

            <div className="modal-actions">
              <button
                className="button button-primary"
                type="button"
                onClick={() =>
                  onSave(
                    (document.getElementById("je-date") as HTMLInputElement).value,
                    journalNumber,
                    (document.getElementById("je-desc") as HTMLInputElement).value || null
                  )
                }
              >
                Simpan
              </button>

              <button className="button" type="button" onClick={() => setEditorOpen(false)}>
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
