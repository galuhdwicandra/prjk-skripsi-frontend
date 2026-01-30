// src/pages/customers/CustomersIndex.tsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../store/auth";
import { createCustomer } from "../../api/customers";
import CustomerTable from "../../components/customers/CustomerTable";
import type { Customer } from "../../types/customers";

export default function CustomersIndex(): React.ReactElement {
  const nav = useNavigate();
  const { hasRole } = useAuth();

  const canCreate =
    hasRole("superadmin") ||
    hasRole("admin_cabang") ||
    hasRole("kasir") ||
    hasRole("sales");

  const [version, setVersion] = useState<number>(0);

  async function handleCreate(): Promise<void> {
    const nameInput = window.prompt("Customer name?")?.trim();
    if (!nameInput) return;

    const phone = window.prompt("Phone (e.g. 08xxxxxxxxxx)?")?.trim();
    if (!phone) return;

    try {
      // sesuai tipe saat ini (CustomerUpsertPayload pakai "nama")
      const c = await createCustomer({ nama: nameInput, phone });
      setVersion((v) => v + 1); // refresh table by remount
      nav(`/customers/${c.id}`);
    } catch (err: unknown) {
      let msg = "Failed to create customer";
      if (typeof err === "object" && err !== null) {
        // @ts-expect-error akses opsional, tetap tanpa any
        msg = err?.response?.data?.message ?? (err as Error).message ?? msg;
      }
      alert(msg);
    }
  }

  return (
    <div className="container">
      <div className="section">
        {/* Header + Toolbar */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "1rem",
          }}
        >
          <div style={{ minWidth: 240 }}>
            <h1 style={{ marginBottom: "0.35rem" }}>Customers</h1>
            <p style={{ marginBottom: 0 }}>
              Kelola data pelanggan dan akses detail transaksi per pelanggan.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              flexWrap: "wrap",
            }}
          >
            <span className="badge" title="Modul">
              CRM
            </span>

            {/* Aksi utama */}
            {canCreate ? (
              <button
                type="button"
                className="button button-primary"
                onClick={handleCreate}
              >
                + New Customer
              </button>
            ) : null}

            {/* Aksi sekunder: contoh tombol kecil untuk konsistensi UI */}
            <button
              type="button"
              className="button button-outline"
              onClick={() => setVersion((v) => v + 1)}
              title="Refresh list"
            >
              Refresh
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="card" style={{ padding: "1rem" }}>
          {/* Area penjelas kecil + hint */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              flexWrap: "wrap",
              padding: "0.25rem 0.25rem 0.75rem 0.25rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span className="badge" style={{ height: 26 }}>
                List
              </span>
              <span style={{ fontSize: "0.95rem", opacity: 0.8 }}>
                Klik baris untuk membuka detail customer.
              </span>
            </div>

            {/* Placeholder kanan atas jika suatu saat Anda mau taruh filter global */}
            <div style={{ opacity: 0.7, fontSize: "0.9rem" }}>
              {/* biarkan kosong / atau isi info singkat */}
            </div>
          </div>

          <CustomerTable
            key={version}
            canCreate={canCreate}
            onCreate={handleCreate}
            onRowClick={(c: Customer) => nav(`/customers/${c.id}`)}
          />
        </div>
      </div>
    </div>
  );
}
