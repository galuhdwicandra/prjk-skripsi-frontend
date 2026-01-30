// src/components/nav/Sidebar.tsx
import React, { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../store/auth";
import {
  filterMenuByRole,
  GROUP_ORDER,
  groupOf,
  type GroupKey,
} from "../../nav-config";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

const LS_KEY = "pos-prime.sidebar.openGroups";

export default function Sidebar({ open, onClose }: SidebarProps): React.ReactElement {
  const { hasRole } = useAuth();
  const items = filterMenuByRole(hasRole); // data asli (bukan dummy)

  const sections = useMemo(
    () =>
      GROUP_ORDER
        .map((grp) => ({
          group: grp,
          items: items.filter((it) => groupOf(it.key) === grp),
        }))
        .filter((s) => s.items.length > 0),
    [items]
  );

  const defaultOpen: Record<GroupKey, boolean> = GROUP_ORDER.reduce((acc, g) => {
    acc[g as GroupKey] = g === "Umum" || g === "POS";
    return acc;
  }, {} as Record<GroupKey, boolean>);

  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(defaultOpen);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Record<string, boolean>;
        setOpenGroups((prev) => ({ ...prev, ...parsed }));
      }
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(openGroups));
    } catch {}
  }, [openGroups]);

  function toggleGroup(grp: GroupKey) {
    setOpenGroups((s) => ({ ...s, [grp]: !s[grp] }));
  }

  return (
    <>
      {open && (
        <button
          type="button"
          className="sidebar-overlay"
          onClick={onClose}
          aria-label="Tutup sidebar"
        />
      )}

      <aside
        aria-label="Navigasi"
        className={"sidebar" + (open ? " sidebar--open" : "")}
      >
        {/* Brand (sticky) */}
        <div className="sidebar-brand">
          <div className="sidebar-brand__left">
            <div className="sidebar-brand__logo" aria-hidden="true">
              P
            </div>
            <div className="sidebar-brand__text">
              <div className="sidebar-brand__title">POS Prime</div>
              <div className="sidebar-brand__subtitle">Katalog & Sistem POS</div>
            </div>
          </div>

          <button
            type="button"
            className="sidebar-brand__close button button-ghost"
            onClick={onClose}
            aria-label="Tutup"
            title="Tutup"
          >
            ✕
          </button>
        </div>

        {/* Menu */}
        <nav className="nav" aria-label="Menu utama">
          <div className="navlist">
            {sections.map((sec) => {
              const isOpen = !!openGroups[sec.group];

              return (
                <section className="navsection" key={sec.group}>
                  <button
                    type="button"
                    className="navgroup"
                    onClick={() => toggleGroup(sec.group)}
                    aria-expanded={isOpen}
                    aria-controls={`grp-${sec.group}`}
                    title={sec.group}
                  >
                    <span className="navgroup__title">{sec.group}</span>
                    <span
                      className={"navgroup__chev" + (isOpen ? " is-open" : "")}
                      aria-hidden="true"
                    >
                      ▶
                    </span>
                  </button>

                  <div
                    id={`grp-${sec.group}`}
                    role="region"
                    aria-label={sec.group}
                    className={"navgroup__items" + (isOpen ? " is-open" : "")}
                  >
                    {sec.items.map((item) => (
                      <NavLink
                        key={item.key}
                        to={item.to}
                        className={({ isActive }) => "navitem" + (isActive ? " is-active" : "")}
                        onClick={onClose}
                        title={item.label}
                      >
                        <span className="navitem__label">{item.label}</span>
                      </NavLink>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </nav>

        {/* Footer kecil (opsional, tetap UI-only) */}
        <div className="sidebar-footer">
          <div className="sidebar-footer__hint">
            © {new Date().getFullYear()} POS Prime
          </div>
        </div>
      </aside>
    </>
  );
}
