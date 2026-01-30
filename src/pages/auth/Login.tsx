// src/pages/auth/Login.tsx
import { useEffect } from "react";
import { useAuth } from "../../store/auth";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/auth/LoginForm";

export default function LoginPage(): React.ReactElement {
  const { isAuthenticated, status } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  // Layout: split card (visual kiri + form kanan)
  const pageStyle: React.CSSProperties = {
    minHeight: "100dvh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1.5rem",
    // background halus, tetap netral agar cocok dengan tema project Anda
    background:
      "radial-gradient(1200px 600px at 10% 10%, rgba(99,102,241,0.18), transparent 55%), radial-gradient(900px 500px at 90% 20%, rgba(16,185,129,0.12), transparent 50%), linear-gradient(180deg, rgba(15,23,42,0.04), rgba(15,23,42,0.02))",
  };

  const shellStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "980px",
  };

  // kartu besar dengan radius besar
  const splitCardStyle: React.CSSProperties = {
    borderRadius: "28px",
    overflow: "hidden",
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    minHeight: "560px",
  };

  // Responsif via inline: pakai media query tidak bisa di inline,
  // jadi kita buat dua layout: desktop grid, mobile stack menggunakan CSS sederhana lewat style + className.
  // Solusi: gunakan wrapper dengan className untuk kontrol responsif di CSS global jika Anda mau.
  // Tapi agar langsung jalan tanpa ubah CSS global, kita set fallback: bila layar kecil, grid akan wrap dengan auto rows.
  // (Sebagian browser tetap oke; jika Anda ingin 100% presisi, nanti kita pindah ke CSS index.css.)

  const leftPanelStyle: React.CSSProperties = {
    position: "relative",
    padding: "1.25rem",
    // gunakan image/gradient. Anda bisa ganti url(...) ke aset project Anda.
    backgroundImage:
      "linear-gradient(135deg, rgba(2,6,23,0.72), rgba(2,6,23,0.35)), radial-gradient(900px 400px at 20% 20%, rgba(99,102,241,0.55), transparent 55%), radial-gradient(700px 420px at 80% 30%, rgba(16,185,129,0.35), transparent 52%), radial-gradient(600px 420px at 30% 85%, rgba(244,63,94,0.25), transparent 55%)",
    color: "rgba(255,255,255,0.92)",
  };

  const mockFrameStyle: React.CSSProperties = {
    position: "absolute",
    inset: "18px",
    borderRadius: "22px",
    border: "1px solid rgba(255,255,255,0.20)",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.03))",
    boxShadow: "0 22px 60px rgba(0,0,0,0.35)",
    overflow: "hidden",
  };

  const leftContentStyle: React.CSSProperties = {
    position: "relative",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "1.25rem",
  };

  const topNavStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
  };

  const badgeStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.35rem 0.6rem",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.18)",
    background: "rgba(255,255,255,0.10)",
    fontSize: "0.78rem",
  };

  const leftFooterStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
  };

  const profileStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    minWidth: 0,
  };

  const avatarStyle: React.CSSProperties = {
    width: "40px",
    height: "40px",
    borderRadius: "999px",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.35), rgba(255,255,255,0.12))",
    border: "1px solid rgba(255,255,255,0.22)",
    display: "grid",
    placeItems: "center",
    fontWeight: 700,
  };

  const formPanelStyle: React.CSSProperties = {
    padding: "2.25rem 2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "rgba(255,255,255,0.92)",
    backdropFilter: "blur(8px)",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "2.0rem",
    fontWeight: 800,
    letterSpacing: "-0.02em",
    margin: 0,
  };

  const subtitleStyle: React.CSSProperties = {
    marginTop: "0.5rem",
    marginBottom: "1.5rem",
    opacity: 0.75,
    fontSize: "0.95rem",
  };

  // skeleton ringan saat cek sesi
  if (status === "idle" || status === "loading") {
    return (
      <div style={pageStyle}>
        <div style={shellStyle}>
          <div className="card" style={{ borderRadius: "28px", padding: "1.5rem" }}>
            <p className="text-sm opacity-70">Memeriksa sesi…</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <div style={shellStyle}>
        {/* gunakan style card Anda, tapi kita buat split layout di dalamnya */}
        <div className="card" style={splitCardStyle}>
          {/* LEFT: Visual */}
          <section style={leftPanelStyle}>
            <div style={mockFrameStyle} />

            <div style={leftContentStyle}>
              <div style={topNavStyle}>
                <div style={badgeStyle}>
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 999,
                      background: "rgba(16,185,129,0.9)",
                      boxShadow: "0 0 0 4px rgba(16,185,129,0.18)",
                    }}
                  />
                  <span>POS Prime • Multi Cabang</span>
                </div>
              </div>

              <div style={{ marginTop: "2.5rem" }}>
                <h2
                  style={{
                    margin: 0,
                    fontSize: "2.2rem",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                    color: "#ffffff"
                  }}
                >
                  Kelola Penjualan,
                  <br />
                  Stok, dan Kas
                  <br />
                  Lebih Mudah
                </h2>
                <p
                  style={{
                    marginTop: "0.9rem",
                    maxWidth: "28rem",
                    opacity: 0.82,
                    lineHeight: 1.6,
                    color: "#ffffff"
                  }}
                >
                  Masuk untuk mengakses 
                  POS Prime dan optimalkan 
                  operasional toko Anda dengan
                  sistem point-of-sale terbaik.
                </p>
              </div>

              <div style={leftFooterStyle}>
                <div style={profileStyle}>
                  <div style={avatarStyle}>P</div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontWeight: 700, lineHeight: 1.2 }}>
                      POS Prime
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* RIGHT: Form */}
          <section style={formPanelStyle}>
            <div style={{ maxWidth: "420px", width: "100%", margin: "0 auto" }}>
              <div style={{ marginBottom: "1rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                  }}
                >
                  <div style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
                    POS Prime
                  </div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.35rem 0.6rem",
                      borderRadius: "999px",
                      border: "1px solid rgba(2,6,23,0.08)",
                      background: "rgba(2,6,23,0.02)",
                      fontSize: "0.78rem",
                      opacity: 0.85,
                    }}
                  >
                    <span
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: 999,
                        border: "1px solid rgba(2,6,23,0.10)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.7rem",
                      }}
                    >
                      ID
                    </span>
                    <span>Indonesia</span>
                  </div>
                </div>
              </div>

              <h1 style={titleStyle}>Hallo, Selamat Datang</h1>
              <p style={subtitleStyle}>Silakan masuk untuk melanjutkan.</p>

              <LoginForm />

              <div style={{ marginTop: "1.25rem", fontSize: "0.85rem", opacity: 0.75 }}>
                Dengan masuk, Anda menyetujui kebijakan operasional aplikasi.
              </div>
            </div>
          </section>
        </div>

        {/* Responsif: fallback sederhana untuk layar kecil */}
        <style>
          {`
            @media (max-width: 900px) {
              .card[style*="grid-template-columns"] {
                grid-template-columns: 1fr !important;
                min-height: unset !important;
              }
            }
          `}
        </style>
      </div>
    </div>
  );
}
