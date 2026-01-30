import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import ReceiveLotForm from "../../components/inventory/ReceiveLotForm";

export default function ReceiveLotPage() {
  const loc = useLocation();
  const qs = useMemo(() => new URLSearchParams(loc.search), [loc.search]);

  const defaultGudangId = qs.get("gudang_id") ? Number(qs.get("gudang_id")) : undefined;
  const defaultVariantId = qs.get("variant_id") ? Number(qs.get("variant_id")) : undefined;

  return (
    <div className="container" style={{ display: "grid", gap: 16 }}>
      <h2>Inventory » Penerimaan Stok (Lot)</h2>
      <ReceiveLotForm
        defaultGudangId={defaultGudangId}
        defaultVariantId={defaultVariantId}
      />
    </div>
  );
}
