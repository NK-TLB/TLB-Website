import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks, site } from "../data/site";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition ${
        scrolled
          ? "border-b border-ink-100 bg-white/90 shadow-sm backdrop-blur"
          : "bg-white/70 backdrop-blur"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between sm:h-24">
        <Link to="/" aria-label={site.name} title="The Laundry Bag — Commercial and Residential Laundry and Dry Cleaning">
          <Logo className="h-12 w-auto sm:h-14" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition ${
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
            className="relative"
            onMouseEnter={() => setNewsOpen(true)}
            onMouseLeave={() => setNewsOpen(false)}
          >
            <button
              type="button"
              className="rounded-full px-4 py-2 text-sm font-semibold text-ink-700 transition hover:bg-ink-50 hover:text-ink-900"
              aria-haspopup="menu"
              aria-expanded={newsOpen}
            >
              News
            </button>
            {newsOpen && (
              <div
                role="menu"
                className="absolute left-0 top-full mt-2 w-80 overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft"
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

        <div className="hidden items-center gap-3 lg:flex">
          <a href={site.phoneHref} className="btn-secondary">
            Call us
          </a>
          <a
            href={site.android}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Get the App
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 text-ink-700 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-100 bg-white lg:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
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
              <a href={site.phoneHref} className="btn-secondary">
                Call us
              </a>
              <a
                href={site.android}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Get App
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
