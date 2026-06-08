import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks, site } from "../data/site";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-brand-100/70 bg-white/85 shadow-sm backdrop-blur-xl"
          : "bg-white/55 backdrop-blur-md"
      }`}
    >
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-3 lg:h-24 lg:gap-[calc(0.75rem*1.1)]">
        <Link
          to="/"
          aria-label="The Laundry Bag — India's Leading Laundry Service Provider"
          title="The Laundry Bag — India's Leading Laundry Service Provider"
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

        {/* Invisible logo-width spacer balances the left logo so the nav sits
            in the true horizontal centre of the header on desktop. */}
        <div aria-hidden="true" className="hidden shrink-0 lg:block">
          <Logo className="h-[4rem] w-auto opacity-0 sm:h-[4.25rem] lg:h-20" />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:+91${site.phoneRaw}`}
            className="hidden h-10 items-center justify-center rounded-full bg-brand-gradient px-4 text-sm font-semibold text-white shadow-soft sm:inline-flex"
            aria-label={`Call ${site.phoneDisplay}`}
          >
            Call
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ink-200 text-ink-700"
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

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-ink-100 bg-white shadow-lift lg:hidden"
        >
          <div className="container-page flex max-h-[calc(100vh-4.5rem)] flex-col gap-1 overflow-y-auto py-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-semibold ${
                    isActive
                      ? "bg-brand-50 text-brand-700"
                      : "text-ink-700 hover:bg-ink-50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <a
              href={`tel:+91${site.phoneRaw}`}
              className="btn-primary mt-2 w-full"
              onClick={closeMenu}
            >
              Call us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
