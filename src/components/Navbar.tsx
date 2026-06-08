import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../data/site";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const frame = requestAnimationFrame(() => closeMenu());
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  // Lock scrolling on the document element (NOT <body>): setting overflow on
  // <body> turns it into the scroll container, which re-roots `position: sticky`
  // and makes the header drop out of view while the menu is open.
  useEffect(() => {
    if (!open) return;
    const el = document.documentElement;
    const original = el.style.overflow;
    el.style.overflow = "hidden";
    return () => {
      el.style.overflow = original;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const mobileMenu =
    open &&
    createPortal(
      <>
        <div
          className="fixed inset-x-0 bottom-0 top-[4.5rem] z-[100] animate-backdrop-fade bg-ink-950/20 backdrop-blur-[2px] lg:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="fixed inset-x-4 top-[calc(4.5rem+0.75rem)] z-[101] animate-menu-slide-down overflow-hidden rounded-3xl border border-white/80 bg-gradient-to-b from-white/98 to-brand-50/95 shadow-[0_24px_60px_-20px_rgb(var(--shadow-rgb)/0.35)] backdrop-blur-2xl lg:hidden"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-brand-gradient"
          />

          <div className="flex items-center justify-between border-b border-brand-100/60 px-4 py-3">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-700">
              Menu
            </span>
            <button
              type="button"
              onClick={closeMenu}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-700 ring-1 ring-brand-200/70 transition hover:bg-brand-gradient hover:text-white hover:ring-transparent focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-label="Close menu"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
          </div>

          <ul className="flex max-h-[min(26rem,calc(100dvh-9rem))] flex-col gap-1 overflow-y-auto p-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-2xl px-4 py-3.5 text-[0.95rem] font-semibold transition duration-200 ${
                      isActive
                        ? "bg-brand-gradient text-white shadow-soft"
                        : "text-ink-700 hover:bg-white/90 hover:text-brand-700"
                    }`
                  }
                >
                  {link.label}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 opacity-60"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </>,
      document.body,
    );

  return (
    <>
      <header
        className={`sticky top-0 z-[110] w-full bg-brand-50/90 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? "shadow-[0_4px_20px_-10px_rgb(var(--shadow-rgb)/0.15)]" : ""
        }`}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-300/70 to-transparent"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-[15%] bottom-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent blur-[1px]"
        />
        <div className="container-page flex h-[4.5rem] items-center justify-between gap-3 lg:h-24 lg:gap-[calc(0.75rem*1.1)]">
          <Link
            to="/"
            aria-label="The Laundry Bag, India's Leading Laundry Service Provider"
            title="The Laundry Bag, India's Leading Laundry Service Provider"
            className="shrink-0"
            onClick={closeMenu}
          >
            <Logo className="h-[4rem] w-auto sm:h-[4.25rem] lg:h-20" />
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition xl:px-5 ${
                    isActive
                      ? "bg-brand-50 text-brand-700"
                      : "text-ink-700 hover:bg-ink-50 hover:text-ink-900"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                open
                  ? "bg-brand-gradient text-white shadow-soft"
                  : "bg-white/80 text-ink-700 shadow-sm ring-1 ring-brand-100/60 hover:bg-white"
              }`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      {mobileMenu}
    </>
  );
}
