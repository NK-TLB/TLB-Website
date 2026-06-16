import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink, useLocation } from "react-router-dom";
import Icon from "./Icon";
import { navLinks, site } from "../data/site";
import Logo from "./Logo";

function navLinkActive(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

function HeaderSeparator({ progress }: { progress: number }) {
  const active = progress > 0.4;
  const half = progress / 2;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[3px]"
    >
      {/* Full-width baseline — always visible, fades at edges */}
      <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ink-900/[0.07] to-transparent" />
      <span
        className={`absolute inset-x-[4%] bottom-0 h-px accent-line-hairline-h transition-opacity duration-700 sm:inset-x-[8%] ${
          active ? "opacity-35" : "opacity-100"
        }`}
      />

      {/* Scroll lines — expand from centre outward; dot stays fixed above */}
      <div className="absolute inset-x-0 bottom-0 z-[1]">
        {/* Track — sky-blue tint when scrolling (footer brand-500 glow) */}
        <span
          className={`absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-brand-500/5 via-brand-500/20 to-brand-500/5 transition-opacity duration-500 ${
            active ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Glow beneath active portions — footer ambient (brand-500 + accent) */}
        <span
          className="absolute bottom-0 h-4 bg-gradient-to-l from-brand-500/30 via-brand-400/15 to-transparent blur-md transition-[width] duration-100 ease-out motion-reduce:transition-none"
          style={{ right: "50%", width: `${half}%` }}
        />
        <span
          className="absolute bottom-0 left-1/2 h-4 bg-gradient-to-r from-accent-500/20 via-brand-400/10 to-transparent blur-md transition-[width] duration-100 ease-out motion-reduce:transition-none"
          style={{ width: `${half}%` }}
        />

        {/* Fill — dark at centre, lighter toward the tips */}
        <span
          className="absolute bottom-0 h-[2px] rounded-l-full accent-line-h-l transition-[width] duration-100 ease-out motion-reduce:transition-none"
          style={{ right: "50%", width: `${half}%` }}
        />
        <span
          className="absolute bottom-0 left-1/2 h-[2px] rounded-r-full accent-line-h-r transition-[width] duration-100 ease-out motion-reduce:transition-none"
          style={{ width: `${half}%` }}
        />

        {/* Footer-style centre hairline highlight */}
        <span
          className="absolute bottom-[1px] left-1/2 h-px w-8 max-w-[40%] -translate-x-1/2 accent-line-hairline-h transition-opacity duration-100 motion-reduce:transition-none"
          style={{ opacity: half > 2 ? 1 : 0 }}
        />

        {/* Specular highlights */}
        <span
          className="absolute bottom-[1px] h-px rounded-l-full bg-gradient-to-l from-white/50 via-white/15 to-transparent transition-[width] duration-100 ease-out motion-reduce:transition-none"
          style={{
            right: "50%",
            width: `${Math.max(0, half - 0.25)}%`,
          }}
        />
        <span
          className="absolute bottom-[1px] left-1/2 h-px rounded-r-full bg-gradient-to-r from-white/50 via-white/15 to-transparent transition-[width] duration-100 ease-out motion-reduce:transition-none"
          style={{
            width: `${Math.max(0, half - 0.25)}%`,
          }}
        />
      </div>

      {/* Fixed centre dot — never moves or fades */}
      <span className="absolute bottom-0 left-1/2 z-[3] -translate-x-1/2 translate-y-1/2">
        <span className="relative flex h-1.5 w-1.5 items-center justify-center">
          <span className="absolute -inset-1 rounded-full bg-brand-500/30 blur-[3px]" />
          <span className="relative h-1.5 w-1.5 rounded-full bg-brand-800 ring-[3px] ring-brand-300/80" />
        </span>
      </span>

      {/* Container-aligned inner hairline on large screens */}
      <span className="absolute inset-x-0 bottom-0 mx-auto hidden h-px max-w-7xl bg-gradient-to-r from-transparent via-brand-400/40 to-transparent lg:block lg:px-10" />
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [navIndicator, setNavIndicator] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const navLinkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const { pathname } = useLocation();
  const closeMenu = () => setOpen(false);
  const scrolled = scrollProgress > 0.5;
  const activeNavIndex = navLinks.findIndex((link) =>
    navLinkActive(pathname, link.to),
  );

  useEffect(() => {
    const nav = navRef.current;
    const link = navLinkRefs.current[activeNavIndex];
    if (!nav || !link || activeNavIndex < 0) {
      setNavIndicator({ left: 0, width: 0 });
      return;
    }

    const update = () => {
      const navRect = nav.getBoundingClientRect();
      const linkRect = link.getBoundingClientRect();
      setNavIndicator({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
      });
    };

    const frame = requestAnimationFrame(update);
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", update);
    };
  }, [activeNavIndex, pathname]);

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

          <nav className="hidden flex-1 items-center justify-center lg:flex">
            <div
              ref={navRef}
              className="relative flex items-center gap-0.5 rounded-full border border-brand-100/70 bg-white/45 p-1.5 shadow-[inset_0_1px_0_rgb(255_255_255/0.7),0_1px_2px_rgb(var(--shadow-rgb)/0.06)] backdrop-blur-md xl:gap-1"
            >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 h-[calc(100%-12px)] -translate-y-1/2 rounded-full bg-white shadow-[0_6px_18px_-8px_rgb(var(--shadow-rgb)/0.32)] ring-1 ring-brand-100/70 transition-all duration-300 ease-out motion-reduce:transition-none"
              style={{
                left: navIndicator.left,
                width: navIndicator.width,
                opacity: navIndicator.width > 0 ? 1 : 0,
              }}
            />
            {navLinks.map((link, i) => (
              <NavLink
                key={link.to}
                ref={(el) => {
                  navLinkRefs.current[i] = el;
                }}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `relative z-[1] whitespace-nowrap rounded-full px-3.5 py-2 text-[0.8125rem] font-semibold tracking-[0.005em] transition-colors duration-200 xl:px-4 ${
                    isActive
                      ? "text-brand-800"
                      : "text-ink-600 hover:text-brand-700"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            </div>
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
