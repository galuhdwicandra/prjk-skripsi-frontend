import React from "react";
import { useAuth } from "../../store/auth";

type TopbarProps = {
  onMenuClick: () => void;
  onLogout?: () => void;
};

export default function Topbar({ onMenuClick, onLogout }: TopbarProps): React.ReactElement {
  const { user, logout } = useAuth();

  const initials =
    (user?.name ?? "")
      .split(" ")
      .filter(Boolean)
      .map((s) => s[0]?.toUpperCase())
      .slice(0, 2)
      .join("") || "U";

  const roleLabel = user?.role ?? "";

  const doLogout = () => {
    if (onLogout) {
      onLogout();
      return;
    }
    void logout();
  };

  return (
    <header className="topbar" aria-label="Topbar">
      <div className="topbar__inner">
        {/* Left: menu + brand */}
        <div className="topbar__left">
          <button
            type="button"
            onClick={onMenuClick}
            className="button button-ghost topbar__menuBtn"
            aria-label="Buka menu"
            title="Menu"
          >
            <span className="topbar__hamburger" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>

          <div className="topbar__brand" title="POS Prime">
            <span className="topbar__brandMuted">Sistem</span>
            <span className="topbar__brandTitle">POS Prime</span>
          </div>
        </div>

        {/* Middle: placeholder (search nanti) */}
        <div className="topbar__center" />

        {/* Right: user */}
        <div className="topbar__right">
          <span className="topbar__avatar" aria-hidden="true">
            {initials}
          </span>

          <div className="topbar__user">
            <span className="topbar__name" title={user?.name}>
              {user?.name ?? "-"}
            </span>

            {roleLabel ? (
              <span className="badge topbar__role" style={{ textTransform: "capitalize" }}>
                {roleLabel}
              </span>
            ) : null}
          </div>

          <button
            onClick={doLogout}
            className="button button-outline topbar__logout"
            title="Keluar"
            aria-label="Keluar"
          >
            Keluar
          </button>
        </div>
      </div>
    </header>
  );
}
