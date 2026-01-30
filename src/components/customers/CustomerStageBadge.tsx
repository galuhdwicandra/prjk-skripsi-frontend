// src/components/customers/CustomerStageBadge.tsx
import { memo } from "react";
import type { CustomerStage } from "../../types/customers";

type StageInfo = {
  label: string;
  className: string;
  title: string;
};

const STAGE_INFO: Record<CustomerStage, StageInfo> = {
  LEAD: {
    label: "Lead",
    className: "badge badge-warning",
    title: "Prospek (belum aktif transaksi rutin)",
  },
  ACTIVE: {
    label: "Active",
    className: "badge badge-success",
    title: "Pelanggan aktif",
  },
  CHURN: {
    label: "Churn",
    className: "badge badge-danger",
    title: "Pelanggan tidak aktif / berhenti",
  },
} as const;

interface Props {
  stage: CustomerStage;
}

function CustomerStageBadge({ stage }: Props): React.ReactElement {
  // Defensive UI: kalau suatu saat backend nambah enum baru tapi frontend belum update,
  // badge tetap tampil rapi (tidak memecahkan UI).
  const info = STAGE_INFO[stage] ?? {
    label: String(stage ?? "Unknown"),
    className: "badge",
    title: "Status pelanggan",
  };

  return (
    <span
      className={info.className}
      title={info.title}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.35rem",
        padding: "0.28rem 0.55rem",
        borderRadius: "999px",
        fontSize: "0.78rem",
        lineHeight: 1,
        whiteSpace: "nowrap",
      }}
    >
      {/* titik indikator kecil agar lebih “modern” dan terbaca cepat */}
      <span
        aria-hidden="true"
        style={{
          width: 7,
          height: 7,
          borderRadius: 999,
          background: "currentColor",
          opacity: 0.55,
        }}
      />
      {info.label}
    </span>
  );
}

export default memo(CustomerStageBadge);
