import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { site } from "../data/site";
import Logo from "./Logo";
import Icon from "./Icon";

const companyLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Our Journey" },
  { to: "/our-team", label: "Our Team" },
  { to: "/locations", label: "Locations" },
  { to: "/clients", label: "Clients" },
  { to: "/press", label: "Press" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

function FooterHoverLink({
  to,
  children,
  className = "",
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`group relative inline-flex items-center gap-2.5 text-white/65 transition hover:text-white ${className}`}
    >
      <span className="text-brand-400/70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-brand-300">
        <svg
          viewBox="0 0 24 24"
          className="h-3 w-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
      </span>
      <span className="relative">
        {children}
        <span
          aria-hidden="true"
          className="absolute -bottom-0.5 left-1/2 h-px w-0 -translate-x-1/2 bg-brand-300/90 transition-[width] duration-300 group-hover:w-full motion-reduce:transition-none"
        />
      </span>
    </Link>
  );
}

function FooterHoverAnchor({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group relative inline-block text-white/65 transition hover:text-white ${className}`}
    >
      <span className="relative">
        {children}
        <span
          aria-hidden="true"
          className="absolute -bottom-0.5 left-1/2 h-px w-0 -translate-x-1/2 bg-brand-300/90 transition-[width] duration-300 group-hover:w-full motion-reduce:transition-none"
        />
      </span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden bg-brand-950 text-white/70">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[2px] accent-line-h"
      />
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px accent-line-hairline-h"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 right-0 h-72 w-72 rounded-full bg-brand-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl"
      />

      <div className="container-page relative grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.3fr]">
        {/* Brand */}
        <div>
          <Logo className="h-14 w-auto brightness-0 invert sm:h-16" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
            India&apos;s Leading Laundry Service Provider, commercial laundry,
            dry cleaning and linen management for hotels, resorts and hospitals
            across India since {site.founded}.
          </p>
          <Link
            to="/contact"
            className="btn-light btn-compact group mt-7"
          >
            Contact Us
            <Icon
              name="arrow"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Company */}
        <div>
          <h4 className="eyebrow-label-dark">
            Company
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {companyLinks.map((l) => (
              <li key={l.to}>
                <FooterHoverLink to={l.to}>{l.label}</FooterHoverLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="eyebrow-label-dark">
            Get in touch
          </h4>
          <address className="not-italic">
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-200 ring-1 ring-white/10">
                  <Icon name="pin" className="h-4 w-4" />
                </span>
                <span className="text-white/65">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.region}{" "}
                  {site.address.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-200 ring-1 ring-white/10">
                  <Icon name="phone" className="h-4 w-4" />
                </span>
                <FooterHoverAnchor href={`tel:${site.phone}`}>
                  {site.phoneDisplay}
                </FooterHoverAnchor>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-200 ring-1 ring-white/10">
                  <Icon name="mail" className="h-4 w-4" />
                </span>
                <FooterHoverAnchor href={`mailto:${site.emails.enquiries}`}>
                  {site.emails.enquiries}
                </FooterHoverAnchor>
              </li>
            </ul>
          </address>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[2px] accent-line-h opacity-40"
        />
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/45 sm:flex-row">
          <p className="tracking-wide">
            © {new Date().getFullYear()} {site.legalName}. All Rights Reserved.
          </p>
          <p className="inline-flex items-center gap-2 font-semibold uppercase tracking-[0.16em] text-white/60 sm:text-right">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            {site.motto}
          </p>
        </div>
      </div>
    </footer>
  );
}
