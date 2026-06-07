import { Link } from "react-router-dom";
import { site } from "../data/site";
import Logo from "./Logo";
import Icon from "./Icon";
import TemplateSwitcher from "./TemplateSwitcher";

const socials = [
  { href: site.socials.facebook, label: "Facebook", icon: "facebook" },
  { href: site.socials.twitter, label: "Twitter", icon: "twitter" },
  { href: site.socials.instagram, label: "Instagram", icon: "instagram" },
  { href: site.socials.linkedin, label: "LinkedIn", icon: "linkedin" },
];

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-ink-100 bg-ink-50/60">
      <div className="container-page grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Logo className="h-14 w-auto sm:h-16" />
          <p className="mt-4 max-w-xs text-sm text-ink-600">
            India&apos;s Leading Laundry Service Provider — commercial laundry,
            dry cleaning and linen management for hotels, resorts and hospitals
            across India since {site.founded}.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-700 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
              >
                <Icon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-500">
            Company
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-ink-700">
            <li><Link className="hover:text-brand-700" to="/commercial">Services</Link></li>
            <li><Link className="hover:text-brand-700" to="/about">Our Story</Link></li>
            <li><Link className="hover:text-brand-700" to="/locations">Locations</Link></li>
            <li><Link className="hover:text-brand-700" to="/clients">Clients &amp; Press</Link></li>
            <li><Link className="hover:text-brand-700" to="/faq">FAQ</Link></li>
            <li><Link className="hover:text-brand-700" to="/contact">Contact</Link></li>
            <li><Link className="hover:text-brand-700" to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-500">
            Contact
          </h4>
          <address className="not-italic">
            <ul className="mt-4 space-y-2 text-sm text-ink-700">
              <li>
                For a Job:{" "}
                <a className="hover:text-brand-700" href={`mailto:${site.emails.hr}`}>{site.emails.hr}</a>
              </li>
              <li>{site.phoneDisplay}</li>
              <li className="pt-2 text-ink-500">
                {site.address.street}<br />
                {site.address.city}, {site.address.region} {site.address.postalCode}<br />
                {site.hours}
              </li>
            </ul>
          </address>
        </div>
      </div>
      <div className="border-t border-ink-100">
        <div className="container-page flex flex-col items-start justify-between gap-4 py-6 text-xs text-ink-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {site.legalName}. All Rights Reserved.</p>
          <p className="order-last sm:order-none">{site.motto}</p>
          <TemplateSwitcher />
        </div>
      </div>
    </footer>
  );
}
