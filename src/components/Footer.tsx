import { Link } from "react-router-dom";
import { site } from "../data/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-ink-100 bg-ink-50/60">
      <div className="container-page grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="h-12 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-ink-600">
            On-demand laundry and dry cleaning for homes, students, hotels,
            hospitals and businesses across India since {site.founded}.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <SocialIcon
              href={site.socials.facebook}
              label="Facebook"
              path="M13.5 22v-8h3l.5-4h-3.5V7.5c0-1.2.3-2 2-2H17V2.2c-.3 0-1.4-.2-2.7-.2-2.7 0-4.5 1.6-4.5 4.6V10H6v4h3.8v8h3.7z"
            />
            <SocialIcon
              href={site.socials.twitter}
              label="Twitter"
              path="M22 5.9a8.2 8.2 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.3 8.3 0 0 1-2.6 1A4.1 4.1 0 0 0 11.7 9 11.7 11.7 0 0 1 3 4.5a4.1 4.1 0 0 0 1.3 5.5 4 4 0 0 1-1.9-.5v.1a4.1 4.1 0 0 0 3.3 4 4.2 4.2 0 0 1-1.8.1 4.1 4.1 0 0 0 3.9 2.9A8.2 8.2 0 0 1 2 18.3 11.6 11.6 0 0 0 8.3 20c7.5 0 11.6-6.3 11.6-11.6v-.5A8.3 8.3 0 0 0 22 5.9z"
            />
            <SocialIcon
              href={site.socials.instagram}
              label="Instagram"
              path="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.97.24 2.66.51a5.4 5.4 0 0 1 1.95 1.27 5.4 5.4 0 0 1 1.27 1.95c.27.69.46 1.49.51 2.66.07 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.05 1.17-.24 1.97-.51 2.66a5.4 5.4 0 0 1-1.27 1.95 5.4 5.4 0 0 1-1.95 1.27c-.69.27-1.49.46-2.66.51-1.25.07-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.97-.24-2.66-.51a5.4 5.4 0 0 1-1.95-1.27 5.4 5.4 0 0 1-1.27-1.95c-.27-.69-.46-1.49-.51-2.66C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.05-1.17.24-1.97.51-2.66a5.4 5.4 0 0 1 1.27-1.95A5.4 5.4 0 0 1 6 1.27c.69-.27 1.49-.46 2.66-.51C9.91 1.7 10.31 1.7 13.5 1.7m0 1.95H12c-3.16 0-3.53 0-4.78.07-1.07.05-1.65.23-2.04.38-.51.2-.88.44-1.27.83-.39.39-.63.76-.83 1.27-.15.39-.33.97-.38 2.04-.07 1.25-.07 1.62-.07 4.78s0 3.53.07 4.78c.05 1.07.23 1.65.38 2.04.2.51.44.88.83 1.27.39.39.76.63 1.27.83.39.15.97.33 2.04.38 1.25.07 1.62.07 4.78.07s3.53 0 4.78-.07c1.07-.05 1.65-.23 2.04-.38.51-.2.88-.44 1.27-.83.39-.39.63-.76.83-1.27.15-.39.33-.97.38-2.04.07-1.25.07-1.62.07-4.78s0-3.53-.07-4.78c-.05-1.07-.23-1.65-.38-2.04-.2-.51-.44-.88-.83-1.27-.39-.39-.76-.63-1.27-.83-.39-.15-.97-.33-2.04-.38C15.53 3.65 15.16 3.65 12 3.65zM12 7.4a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2zm0 1.95a2.65 2.65 0 1 0 0 5.3 2.65 2.65 0 0 0 0-5.3zm5.8-2.4a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z"
            />
            <SocialIcon
              href={site.socials.linkedin}
              label="LinkedIn"
              path="M4.6 3a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6zM3 8.5h3.2V21H3V8.5zM9 8.5h3.1v1.7c.5-.9 1.6-1.95 3.5-1.95 3.7 0 4.4 2.4 4.4 5.6V21h-3.2v-5.6c0-1.3 0-3-1.85-3-1.85 0-2.15 1.45-2.15 2.9V21H9V8.5z"
            />
            <SocialIcon
              href={site.whatsappHref}
              label="WhatsApp"
              path="M20.5 3.5A10.5 10.5 0 0 0 3.2 16.3L2 22l5.85-1.18A10.5 10.5 0 1 0 20.5 3.5zM12 20.05a8.05 8.05 0 0 1-4.1-1.13l-.29-.17-3.47.7.74-3.37-.19-.31a8.05 8.05 0 1 1 7.31 4.28zm4.42-6.04c-.24-.12-1.43-.71-1.66-.79-.22-.08-.38-.12-.55.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.37-1.93-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.1-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.75-1.81-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.59 4.12 3.63.58.25 1.03.4 1.38.51.58.18 1.11.16 1.52.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.05.14-1.14-.06-.1-.22-.16-.46-.28z"
            />
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-500">
            Company
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-ink-700">
            <li><Link className="hover:text-brand-700" to="/about">Who we are</Link></li>
            <li><Link className="hover:text-brand-700" to="/services">For your Home</Link></li>
            <li><Link className="hover:text-brand-700" to="/commercial">For your Business</Link></li>
            <li><Link className="hover:text-brand-700" to="/locations">Locations</Link></li>
            <li><Link className="hover:text-brand-700" to="/faq">FAQ</Link></li>
            <li><Link className="hover:text-brand-700" to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-500">
            Get the app
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-ink-700">
            <li><a href={site.android} target="_blank" rel="noreferrer" className="hover:text-brand-700">Android (Play Store)</a></li>
            <li><a href={site.ios} target="_blank" rel="noreferrer" className="hover:text-brand-700">iOS (App Store)</a></li>
            <li><Link className="hover:text-brand-700" to="/app">App download page</Link></li>
            <li><Link className="hover:text-brand-700" to="/delete-my-account">Delete my account</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-500">
            Contact
          </h4>
          <address className="not-italic">
            <ul className="mt-4 space-y-2 text-sm text-ink-700">
              <li>
                For Query:{" "}
                <a className="hover:text-brand-700" href={`mailto:${site.emails.query}`}>
                  {site.emails.query}
                </a>
              </li>
              <li>
                For Commercial:{" "}
                <a className="hover:text-brand-700" href={`mailto:${site.emails.contact}`}>
                  {site.emails.contact}
                </a>
              </li>
              <li>
                For Franchise:{" "}
                <a className="hover:text-brand-700" href={`mailto:${site.emails.franchise}`}>
                  {site.emails.franchise}
                </a>
              </li>
              <li>
                For a Job:{" "}
                <a className="hover:text-brand-700" href={`mailto:${site.emails.hr}`}>
                  {site.emails.hr}
                </a>
              </li>
              <li>
                <a className="hover:text-brand-700" href={site.phoneHref}>
                  {site.phoneDisplay}
                </a>
              </li>
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
        <div className="container-page flex flex-col items-start justify-between gap-3 py-6 text-xs text-ink-500 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All Rights Reserved.
          </p>
          <p>{site.motto}</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  path,
}: {
  href: string;
  label: string;
  path: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-700 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d={path} />
      </svg>
    </a>
  );
}
