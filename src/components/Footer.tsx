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
    <footer className="mt-10 bg-brand-950 text-white/70">
      <div className="container-page grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Logo className="h-14 w-auto brightness-0 invert sm:h-16" />
          <p className="mt-4 max-w-xs text-sm text-white/60">
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
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
              >
                <Icon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50">
            Company
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link className="transition hover:text-white" to="/commercial">Services</Link></li>
            <li><Link className="transition hover:text-white" to="/about">Our Story</Link></li>
            <li><Link className="transition hover:text-white" to="/locations">Locations</Link></li>
            <li><Link className="transition hover:text-white" to="/clients">Clients</Link></li>
            <li><Link className="transition hover:text-white" to="/press">Press</Link></li>
            <li><Link className="transition hover:text-white" to="/faq">FAQ</Link></li>
            <li><Link className="transition hover:text-white" to="/contact">Contact</Link></li>
            <li><Link className="transition hover:text-white" to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50">
            Contact
          </h4>
          <address className="not-italic">
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                For a Job:{" "}
                <a className="transition hover:text-white" href={`mailto:${site.emails.hr}`}>{site.emails.hr}</a>
              </li>
              <li>{site.phoneDisplay}</li>
              <li className="pt-2 text-white/50">
                {site.address.street}<br />
                {site.address.city}, {site.address.region} {site.address.postalCode}<br />
                {site.hours}
              </li>
            </ul>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-start justify-between gap-4 py-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {site.legalName}. All Rights Reserved.</p>
          <p className="order-last sm:order-none">{site.motto}</p>
          <TemplateSwitcher />
        </div>
      </div>
    </footer>
  );
}
