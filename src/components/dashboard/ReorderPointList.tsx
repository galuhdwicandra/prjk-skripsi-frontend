import { useEffect, useState } from "react";
import { getRopList, type RopRow } from "../../api/stocks";

type Props = {
    gudangId?: number | string;
};

export default function ReorderPointList({ gudangId }: Props) {
    const [rows, setRows] = useState<RopRow[]>([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState<string | null>(null);

    useEffect(() => {
        let on = true;
        setLoading(true);
        setErr(null);
        getRopList({ gudang_id: gudangId })
            .then((list) => { if (on) setRows(list); })
            .catch((e: any) => { if (on) setErr(e?.message || "Gagal memuat data ROP."); })
            .finally(() => { if (on) setLoading(false); });
        return () => { on = false; };
    }, [gudangId]);

    return (
        <div className="card" style={{ padding: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Perlu Reorder (ROP)</div>

            {loading && <div aria-busy="true" style={{ height: 96, borderRadius: 8, background: "rgba(0,0,0,.05)" }} />}
            {!loading && err && <div className="alert alert-danger">{err}</div>}
            {!loading && !err && rows.length === 0 && <div className="alert">Aman — tidak ada item di bawah ROP.</div>}

            {!loading && !err && rows.length > 0 && (
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    {rows.map((r) => (
                        <li key={r.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0" }}>
                            <div>
                                <div style={{ fontWeight: 600 }}>{r.variant?.sku ?? "-"}</div>
                                <div style={{ fontSize: 12, opacity: 0.85 }}>{r.variant?.nama ?? "-"}</div>
                                <div style={{ fontSize: 12, marginTop: 2 }}>
                                    Stok: <b>{r.qty}</b> &nbsp;|&nbsp; ROP: <b>{r.reorder_point_eff ?? r.reorder_point ?? "-"}</b>
                                </div>
                            </div>
                            
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
