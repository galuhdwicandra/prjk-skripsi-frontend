// src/pages/pos/Orders.tsx
import React, { useEffect, useMemo, useState, useCallback } from "react";
import ProductSearch from "../../components/pos/ProductSearch";
import ProductGrid from "../../components/pos/ProductGrid";
import CartPanel from "../../components/pos/CartPanel";
import CheckoutDialog from "../../components/pos/CheckoutDialog";
import ReceiptPreview from "../../components/pos/ReceiptPreview";
import { useCart } from "../../store/cart";
import type { Order } from "../../types/pos";
import type { Product } from "../../types/product";
import { listVariants } from "../../api/products";

/** Helpers */
const getInt = (v: unknown): number | null => {
  const n = Number(v);
  return Number.isFinite(n) && n > 0 ? n : null;
};
const setScope = (branchId: number, warehouseId: number): void => {
  localStorage.setItem("active_branch_id", String(branchId));
  localStorage.setItem("active_warehouse_id", String(warehouseId));
  window.dispatchEvent(new Event("scope:changed"));
};

/** ✅ Reactive scope + auto-pick default (first branch & warehouse) */
function useActiveScope(): {
  branch: { id: number } | null;
  warehouse: { id: number } | null;
} {
  const [branchId, setBranchId] = useState<number | null>(null);
  const [warehouseId, setWarehouseId] = useState<number | null>(null);

  const read = useCallback((): void => {
    setBranchId(getInt(localStorage.getItem("active_branch_id")));
    setWarehouseId(getInt(localStorage.getItem("active_warehouse_id")));
  }, []);

  useEffect(() => {
    read();
    const onScopeChanged = (): void => read();
    window.addEventListener("scope:changed", onScopeChanged);
    window.addEventListener("storage", onScopeChanged);
    return () => {
      window.removeEventListener("scope:changed", onScopeChanged);
      window.removeEventListener("storage", onScopeChanged);
    };
  }, [read]);

  useEffect(() => {
    if (branchId && warehouseId) return;
    (async () => {
      try {
        const branchesApi = await import("../../api/branches");
        const warehousesApi = await import("../../api/warehouses");
        const branches = await branchesApi.listBranches({ per_page: 1 });
        const b = branches?.data?.[0] as { id: number } | undefined;
        if (!b) return;
        const warehouses = await warehousesApi.listWarehouses({
          cabang_id: b.id,
          per_page: 1,
        });
        const w = warehouses?.data?.[0] as { id: number } | undefined;
        if (!w) return;
        setScope(b.id, w.id);
      } catch {
        // no-op; banner will handle manual selection
      }
    })();
  }, [branchId, warehouseId]);

  return {
    branch: branchId ? { id: branchId } : null,
    warehouse: warehouseId ? { id: warehouseId } : null,
  };
}

export default function OrdersPage(): React.ReactElement {
  const { branch, warehouse } = useActiveScope();
  const [openPay, setOpenPay] = useState<boolean>(false);
  const [lastOrder, setLastOrder] = useState<Order | null>(null);

  // ✅ Ambil state/aksi via selector (tanpa any/unknown)
  const items = useCart((s) => s.items);
  const quote = useCart((s) => s.quote);
  const add = useCart((s) => s.add);

  type Variant = { id: number; nama?: string; sku?: string; is_active?: boolean };

  const [variantOpen, setVariantOpen] = useState(false);
  const [variantProductName, setVariantProductName] = useState<string>("");
  const [variantOptions, setVariantOptions] = useState<Variant[]>([]);

  const hasItems = items.length > 0;
  const scoped = Boolean(warehouse?.id && branch?.id);
  const grand = quote?.totals?.grand_total ?? 0;
  const grandOk = Number.isFinite(grand) && grand >= 0;

  const canCheckout = useMemo<boolean>(
    () => hasItems && scoped && grandOk,
    [hasItems, scoped, grandOk]
  );

  const disableReason = useMemo<string | null>(() => {
    if (!hasItems) return "Tambahkan item ke keranjang.";
    if (!scoped) return "Pilih Cabang & Gudang terlebih dahulu.";
    if (!grandOk) return "Total belum siap. Coba lagi sebentar.";
    return null;
  }, [hasItems, scoped, grandOk]);

  // Enter → buka dialog bayar jika siap
  useEffect(() => {
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Enter" && canCheckout) setOpenPay(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [canCheckout]);

  // Klik kartu produk → tambah 1 ke cart (ambil varian pertama bila ada)
  const onPickProduct = async (p: Product): Promise<void> => {
    let variants: Variant[] =
      Array.isArray(p.variants) && p.variants.length > 0
        ? (p.variants as unknown as Variant[])
        : [];

    if (variants.length === 0) {
      const apiVariants = await listVariants(p.id);
      variants = Array.isArray(apiVariants) ? (apiVariants as unknown as Variant[]) : [];
    }

    if (variants.length > 1) {
      setVariantProductName((p as any)?.nama ?? "Produk");
      setVariantOptions(variants);
      setVariantOpen(true);
      return;
    }

    const v = variants.find((x) => x.is_active) ?? variants[0];
    const variantId = v ? Number(v.id) : null;

    if (!variantId || !Number.isFinite(variantId)) {
      console.warn("Tidak bisa menambahkan item: produk tidak memiliki variant yang valid.");
      return;
    }

    add({ variant_id: variantId, qty: 1 });
  };


  return (
    <div className="page">
      {/* CSS lokal khusus Orders (tidak mengganggu halaman lain) */}
      <style>{`
        .pos-shell{
          display:grid;
          gap: 16px;
          align-items:start;
        }
        /* desktop: 2 kolom */
        @media (min-width: 1024px){
          .pos-shell{
            grid-template-columns: minmax(0, 1fr) 380px;
          }
        }

        .pos-header{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap: 12px;
          flex-wrap: wrap;
        }
        .pos-header__left{
          display:flex;
          align-items:baseline;
          gap: 10px;
          min-width: 0;
        }
        .pos-title{
          font-size: 18px;
          font-weight: 800;
          margin: 0;
          line-height: 1.1;
        }
        .pos-sub{
          font-size: 12px;
          opacity: .72;
          white-space: nowrap;
        }
        .pos-header__right{
          display:flex;
          align-items:center;
          gap: 8px;
          flex-wrap: wrap;
          justify-content:flex-end;
        }

        .pos-stack{
          display:flex;
          flex-direction:column;
          gap: 12px;
        }

        .pos-aside{
          display:flex;
          flex-direction:column;
          gap: 12px;
        }
        @media (min-width: 1024px){
          .pos-aside{
            position: sticky;
            top: 14px;
          }
        }

        .pos-paybtn{
          width: 100%;
        }

        .pos-divider{
          height: 1px;
          background: rgba(0,0,0,.06);
          margin: 10px 0 0;
        }
      `}</style>

      {/* Header ringkas agar terasa rapi & konsisten */}
      <div className="card" style={{ marginBottom: 12 }}>
        <div className="pos-header">
          <div className="pos-header__left">
            <h1 className="pos-title">Orders</h1>
            <span className="pos-sub">Enter = Bayar (jika siap)</span>
          </div>

          <div className="pos-header__right">
            {scoped ? (
              <span className="badge badge-success">
                Scope: Cabang #{branch!.id} • Gudang #{warehouse!.id}
              </span>
            ) : (
              <span className="badge badge-warning">Scope belum dipilih</span>
            )}
          </div>
        </div>
        <div className="pos-divider" />
        <div style={{ marginTop: 10, opacity: 0.8, fontSize: 12 }}>
          Cari produk → klik kartu untuk tambah cepat ke keranjang. Katalog muncul setelah Gudang dipilih.
        </div>
      </div>

      <div className="pos-shell">
        {/* MAIN (kiri): Scope + Search + Grid */}
        <div className="pos-stack">
          {!scoped && <ScopePickerBanner />}

          <div className="card">
            <ProductSearch warehouseId={warehouse?.id ?? 0} />
          </div>

          {warehouse?.id ? (
            <div className="card">
              <ProductGrid
                onPick={onPickProduct}
                perPage={24}
                warehouseId={warehouse.id}
                requireWarehouse
              />
            </div>
          ) : (
            <div className="card">
              <div className="empty-state">Pilih Cabang &amp; Gudang untuk melihat katalog.</div>
            </div>
          )}
        </div>

        {/* ASIDE (kanan): Cart + tombol bayar (sticky desktop) */}
        <aside className="pos-aside">
          <div className="card">
            <CartPanel />
          </div>

          <div className="card">
            <div className="form-actions" style={{ justifyContent: "stretch" }}>
              <button
                className="button button-primary pos-paybtn"
                onClick={() => setOpenPay(true)}
                disabled={!canCheckout}
                aria-disabled={!canCheckout}
                aria-label="Bayar pesanan"
                data-testid="btn-pay"
              >
                Bayar
              </button>
            </div>

            {!canCheckout && disableReason && (
              <div className="alert alert-warning" style={{ marginTop: 8 }}>
                {disableReason}
              </div>
            )}
          </div>
        </aside>
      </div>

      {openPay && branch && warehouse && (
        <CheckoutDialog
          open={openPay}
          onClose={() => setOpenPay(false)}
          branchId={branch.id}
          warehouseId={warehouse.id}
          onSuccess={(o: Order): void => {
            setLastOrder(o);
            setOpenPay(false);
          }}
        />
      )}

      {lastOrder && (
        <div className="card" style={{ marginTop: 16 }}>
          <ReceiptPreview orderId={lastOrder.id} phone={undefined} />
        </div>
      )}
      {variantOpen && (
        <div
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setVariantOpen(false);
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
          }}
        >
          <div className="card" style={{ width: "100%", maxWidth: 640 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontWeight: 900, fontSize: 16 }}>Pilih Variant</div>
                <div style={{ fontSize: 12, opacity: 0.75 }}>{variantProductName}</div>
              </div>
              <button className="button button-ghost" onClick={() => setVariantOpen(false)} type="button">
                ✕
              </button>
            </div>

            <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
              {variantOptions.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  className="button"
                  onClick={() => {
                    const variantId = Number(v.id);
                    if (!Number.isFinite(variantId)) return;
                    add({ variant_id: variantId, qty: 1 });
                    setVariantOpen(false);
                  }}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 14px",
                    borderRadius: 14,
                  }}
                >
                  <div style={{ textAlign: "left", minWidth: 0 }}>
                    <div style={{ fontWeight: 800, lineHeight: 1.1 }}>
                      {v.nama ?? v.sku ?? `Variant #${v.id}`}
                    </div>
                    <div style={{ fontSize: 12, opacity: 0.75, marginTop: 4 }}>
                      {v.sku ? `SKU: ${v.sku}` : ""}
                    </div>
                  </div>
                  <span className="badge">Pilih</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/** 🔸 Scope picker (inline) dengan loading states yang jelas */
function ScopePickerBanner(): React.ReactElement {
  type IdNama = { id: number; nama: string };

  const [branches, setBranches] = useState<IdNama[]>([]);
  const [warehouses, setWarehouses] = useState<IdNama[]>([]);
  const [bId, setBId] = useState<number | "">("");
  const [wId, setWId] = useState<number | "">("");
  const [loadingB, setLoadingB] = useState<boolean>(true);
  const [loadingW, setLoadingW] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const api = await import("../../api/branches");
        setLoadingB(true);
        const res = await api.listBranches({ per_page: 50 });
        const data = (res?.data ?? []) as IdNama[];
        setBranches(Array.isArray(data) ? data : []);
      } finally {
        setLoadingB(false);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (!bId) {
        setWarehouses([]);
        setWId("");
        return;
      }
      try {
        const api = await import("../../api/warehouses");
        setLoadingW(true);
        const res = await api.listWarehouses({ cabang_id: Number(bId), per_page: 50 });
        const data = (res?.data ?? []) as IdNama[];
        setWarehouses(Array.isArray(data) ? data : []);
        setWId(data.length > 0 ? data[0].id : "");
      } finally {
        setLoadingW(false);
      }
    })();
  }, [bId]);

  const apply = (): void => {
    if (!bId || !wId) return;
    setScope(Number(bId), Number(wId));
  };

  return (
    <div className="card soft">
      <div className="badge badge-warning" style={{ marginBottom: 8 }}>
        Scope belum dipilih
      </div>

      <div className="form-row form-row--3">
        <div className="form-field">
          <label className="label">Cabang</label>
          <select
            className="select"
            value={bId}
            onChange={(e) => setBId(e.target.value ? Number(e.target.value) : "")}
            aria-label="Pilih cabang"
          >
            <option value="">{loadingB ? "Memuat cabang…" : "Pilih cabang…"}</option>
            {!loadingB && branches.length === 0 && <option value="">Tidak ada cabang</option>}
            {branches.map((b) => (
              <option key={b.id} value={b.id}>
                {b.nama}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label className="label">Gudang</label>
          <select
            className="select"
            value={wId}
            onChange={(e) => setWId(e.target.value ? Number(e.target.value) : "")}
            disabled={!bId || loadingW}
            aria-label="Pilih gudang"
          >
            <option value="">
              {!bId ? "Pilih cabang dahulu" : loadingW ? "Memuat gudang…" : "Pilih gudang…"}
            </option>
            {warehouses.map((w) => (
              <option key={w.id} value={w.id}>
                {w.nama}
              </option>
            ))}
          </select>
        </div>

        <div className="form-actions" style={{ alignItems: "end" }}>
          <button
            className="button button-primary"
            disabled={!bId || !wId}
            onClick={apply}
            aria-disabled={!bId || !wId}
          >
            Terapkan
          </button>
        </div>
      </div>
    </div>
  );
}
