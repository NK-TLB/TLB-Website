import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink, useLocation } from "react-router-dom";
import Icon from "./Icon";
import { navLinks, site } from "../data/site";
import Logo from "./Logo";

function HeaderSeparator({ progress }: { progress: number }) {
  const active = progress > 0.4;
  const complete = progress >= 99.8;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[3px]"
    >
      {/* Full-width baseline — always visible, fades at edges */}
      <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ink-900/[0.07] to-transparent" />
      <span
        className={`absolute inset-x-[4%] bottom-0 h-px bg-gradient-to-r from-transparent via-brand-300/55 to-transparent transition-opacity duration-700 sm:inset-x-[8%] ${
          active ? "opacity-30" : "opacity-100"
        }`}
      />

      {/* Resting centre mark — visible before scroll */}
      <span
        className={`absolute bottom-0 left-1/2 z-[2] flex -translate-x-1/2 translate-y-1/2 items-center gap-1.5 transition-all duration-700 motion-reduce:transition-none ${
          active ? "scale-90 opacity-0" : "opacity-100"
        }`}
      >
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-brand-400/70 sm:w-12" />
        <span className="relative flex h-1.5 w-1.5 items-center justify-center">
          <span className="absolute inset-0 rounded-full bg-brand-400/25 blur-[2px]" />
          <span className="relative h-1.5 w-1.5 rounded-full bg-brand-gradient ring-[3px] ring-brand-50/90" />
        </span>
        <span className="h-px w-10 bg-gradient-to-l from-transparent to-brand-400/70 sm:w-12" />
      </span>

      {/* Scroll progress */}
      <div
        className={`absolute inset-x-0 bottom-0 transition-opacity duration-500 ${
          active ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Track */}
        <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-brand-100/10 via-brand-100/35 to-brand-100/10" />

        {/* Glow beneath active portion */}
        <span
          className="absolute bottom-0 left-0 h-3 bg-gradient-to-r from-brand-400/25 via-brand-400/10 to-transparent blur-md transition-[width] duration-100 ease-out motion-reduce:transition-none"
          style={{ width: `${progress}%` }}
        />

        {/* Fill */}
        <span
          className="absolute bottom-0 left-0 h-[2px] origin-left rounded-r-full bg-brand-gradient transition-[width] duration-100 ease-out motion-reduce:transition-none"
          style={{ width: `${progress}%` }}
        />

        {/* Specular highlight */}
        <span
          className="absolute bottom-[1px] left-0 h-px rounded-r-full bg-gradient-to-r from-white/50 via-white/15 to-transparent transition-[width] duration-100 ease-out motion-reduce:transition-none"
          style={{ width: `${Math.max(0, progress - 0.5)}%` }}
        />

        {/* Leading tip — soft luminescence, hidden at completion */}
        {active && !complete && (
          <span
            className="absolute bottom-0 z-[1] -translate-x-1/2 translate-y-1/2"
            style={{ left: `${progress}%` }}
          >
            <span className="block h-2 w-2 rounded-full bg-brand-300/90 shadow-[0_0_10px_2px_rgb(var(--brand-400)/0.45)] ring-2 ring-brand-50/95" />
          </span>
        )}
      </div>

      {/* Container-aligned inner hairline on large screens */}
      <span className="absolute inset-x-0 bottom-0 mx-auto hidden h-px max-w-7xl bg-gradient-to-r from-transparent via-brand-200/25 to-transparent lg:block lg:px-10" />
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { pathname } = useLocation();
  const closeMenu = () => setOpen(false);
  const scrolled = scrollProgress > 0.5;

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const pct = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, pct)));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

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
        className={`relative sticky top-0 z-[110] w-full border-b border-transparent bg-brand-50/90 backdrop-blur-xl transition-all duration-500 ${
          scrolled
            ? "border-brand-100/40 bg-brand-50/[0.97] shadow-[0_8px_32px_-12px_rgb(var(--shadow-rgb)/0.18)]"
            : ""
        }`}
      >
        <HeaderSeparator progress={scrollProgress} />
        <div className="container-page flex h-[4.5rem] items-center justify-between gap-3 lg:h-20 lg:gap-6">
          <Link
            to="/"
            aria-label="The Laundry Bag, India's Leading Laundry Service Provider"
            title="The Laundry Bag, India's Leading Laundry Service Provider"
            className="group relative shrink-0 rounded-xl transition duration-300 hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
            onClick={closeMenu}
          >
            <Logo className="h-[3.25rem] w-auto transition duration-300 group-hover:scale-[1.01] sm:h-14 lg:h-[3.75rem]" />
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

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href={`tel:+91${site.phoneRaw}`}
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-brand-100/80 bg-white/80 text-brand-700 shadow-sm ring-1 ring-brand-50/80 transition hover:border-brand-200 hover:bg-white hover:text-brand-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 xl:inline-flex"
              aria-label={`Call ${site.phoneDisplay}`}
            >
              <Icon name="phone" className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 lg:hidden ${
                open
                  ? "bg-brand-gradient text-white shadow-soft"
                  : "border border-brand-100/80 bg-white/80 text-ink-700 shadow-sm ring-1 ring-brand-50/80 hover:border-brand-200 hover:bg-white"
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
