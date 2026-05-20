import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks, site } from "../data/site";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  const newsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the News dropdown on outside-click (touch / keyboard users).
  useEffect(() => {
    if (!newsOpen) return;
    const onClick = (e: MouseEvent) => {
      if (newsRef.current && !newsRef.current.contains(e.target as Node)) {
        setNewsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [newsOpen]);

  // Lock body scroll when the mobile drawer is open.
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition ${
        scrolled
          ? "border-b border-ink-100 bg-white/95 shadow-sm backdrop-blur"
          : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-3 sm:h-20 lg:h-24">
        <Link
          to="/"
          aria-label={site.name}
          title="The Laundry Bag — Commercial and Residential Laundry and Dry Cleaning"
          className="shrink-0"
        >
          <Logo className="h-9 w-auto sm:h-11 lg:h-14" />
        </Link>

        {/* === Desktop nav (>= xl / 1280px). Below xl the hamburger shows. ===== */}
        <nav className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-brand-50 text-brand-700"
                    : "text-ink-700 hover:bg-ink-50 hover:text-ink-900"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* Legacy nav element: News dropdown */}
          <div
            ref={newsRef}
            className="relative"
            onMouseEnter={() => setNewsOpen(true)}
            onMouseLeave={() => setNewsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setNewsOpen((v) => !v)}
              onFocus={() => setNewsOpen(true)}
              className="inline-flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-ink-700 transition hover:bg-ink-50 hover:text-ink-900"
              aria-haspopup="menu"
              aria-expanded={newsOpen}
            >
              News
              <svg
                viewBox="0 0 24 24"
                className={`h-3.5 w-3.5 transition-transform ${
                  newsOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {newsOpen && (
              <div
                role="menu"
                className="absolute right-0 top-full mt-2 w-80 overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft"
              >
                {site.press.map((p) => (
                  <a
                    key={p.href}
                    role="menuitem"
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block px-4 py-3 text-sm text-ink-700 hover:bg-ink-50"
                  >
                    {p.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* === Desktop CTAs (>= xl) ============================================ */}
        <div className="hidden items-center gap-2 xl:flex">
          <a
            href={site.phoneHref}
            className="btn-secondary !px-4 !py-2 !text-sm"
            aria-label={`Call ${site.phoneDisplay}`}
          >
            Call us
          </a>
          <a
            href={site.android}
            target="_blank"
            rel="noreferrer"
            className="btn-primary !px-4 !py-2 !text-sm"
          >
            Get the App
          </a>
        </div>

        {/* === Mobile / tablet CTA — single Call button + hamburger ============ */}
        <div className="flex items-center gap-2 xl:hidden">
          <a
            href={site.phoneHref}
            className="hidden h-10 items-center justify-center rounded-full bg-brand-400 px-4 text-sm font-semibold text-white shadow-soft hover:bg-brand-500 sm:inline-flex"
            aria-label={`Call ${site.phoneDisplay}`}
          >
            Call
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 text-ink-700"
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
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* === Mobile drawer =================================================== */}
      {open && (
        <div
          id="mobile-nav"
          className="border-t border-ink-100 bg-white shadow-soft xl:hidden"
        >
          <div className="container-page flex max-h-[calc(100vh-4rem)] flex-col gap-1 overflow-y-auto py-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-sm font-semibold ${
                    isActive
                      ? "bg-brand-50 text-brand-700"
                      : "text-ink-700 hover:bg-ink-50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="mt-1 rounded-lg border border-ink-100 bg-white">
              <p className="px-4 pb-1 pt-3 text-xs font-semibold uppercase tracking-wider text-ink-500">
                News
              </p>
              <div className="flex flex-col pb-2">
                {site.press.map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 text-sm font-semibold text-ink-700 hover:bg-ink-50"
                  >
                    {p.title}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-2 grid grid-cols-2 gap-2">
              <a
                href={site.phoneHref}
                className="btn-secondary w-full"
                onClick={closeMenu}
              >
                Call us
              </a>
              <a
                href={site.android}
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full"
                onClick={closeMenu}
              >
                Get the App
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
