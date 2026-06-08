import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import SEO from "../components/SEO";
import { site } from "../data/site";

// Enquiries are handled by Netlify Forms (no third-party backend, no API key).
// A matching hidden static form lives in index.html so Netlify's build bot can
// register the "contact" form; here we submit it via AJAX so the visitor never
// leaves our site — on success we route to the on-site thank-you page, and on
// failure we show an inline fallback (call / WhatsApp).
//
// NOTE: Netlify Forms only works on the deployed Netlify site, not on localhost.
// Configure the email notification (to prakhar@thelaundrybag.co.in) in the
// Netlify dashboard: Site settings → Forms → Form notifications → Email.
const NETLIFY_FORM_NAME = "contact";

const encodeFormData = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join("&");

const whatsappMessage =
  "Hi The Laundry Bag, I'd like to know more about your laundry & linen services.";
const whatsappHref = `https://wa.me/91${site.phoneRaw}?text=${encodeURIComponent(
  whatsappMessage
)}`;

export default function Contact() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(
      new FormData(form).entries()
    ) as Record<string, string>;

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData({ "form-name": NETLIFY_FORM_NAME, ...data }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      form.reset();
      navigate("/contact/thank-you");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <SEO
        path="/contact"
        title="Contact Us"
        description={`Call ${site.phoneDisplay}. Visit our corporate office at ${site.address.full}. Open ${site.hours}.`}
      />

      <PageHero
        eyebrow="Contact"
        title="Let's talk linen"
        description="Tell us about your property, volumes and space, and we'll get back to you with the right model — on-premise, off-site or linen rental — along with timings and pricing."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-5">
          <aside className="space-y-6 lg:col-span-2">
            <div className="card">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name="pin" />
              </span>
              <h2 className="mt-4 font-display text-lg font-bold text-ink-900">Our address</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region}, {site.address.country} - {site.address.postalCode}
              </p>
            </div>

            <div className="card">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name="phone" />
              </span>
              <h2 className="mt-4 font-display text-lg font-bold text-ink-900">Call or WhatsApp</h2>
              <p className="mt-2 text-sm font-semibold text-brand-700">
                {site.phoneDisplay}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-ink-500">{site.hours}</p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <a
                  href={`tel:+91${site.phoneRaw}`}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
                >
                  <Icon name="phone" className="h-4 w-4" />
                  Call now
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#1ebe5b]"
                >
                  <Icon name="whatsapp" className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="card">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name="mail" />
              </span>
              <h2 className="mt-4 font-display text-lg font-bold text-ink-900">Email us</h2>
              <ul className="mt-2 space-y-1.5 text-sm text-ink-700">
                <li>
                  Enquiries:{" "}
                  <a
                    className="text-brand-700 hover:text-brand-800"
                    href={`mailto:${site.emails.contact}`}
                  >
                    {site.emails.contact}
                  </a>
                </li>
                <li>
                  Careers:{" "}
                  <a
                    className="text-brand-700 hover:text-brand-800"
                    href={`mailto:${site.emails.hr}`}
                  >
                    {site.emails.hr}
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-3">
            <form
              name={NETLIFY_FORM_NAME}
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={onSubmit}
              className="card space-y-5"
            >
              <input type="hidden" name="form-name" value={NETLIFY_FORM_NAME} />
              {/* Honeypot — bots fill this, humans never see it */}
              <p className="hidden">
                <label>
                  Don&apos;t fill this out if you&apos;re human:{" "}
                  <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field name="name" label="Name" placeholder="Your name" />
                <Field name="phone" label="Phone" type="tel" placeholder="+91 ..." />
              </div>
              <Field name="email" label="E-mail" type="email" placeholder="you@example.com" />
              <div>
                <label className="text-sm font-semibold text-ink-800">Message</label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us about your property or institution, approximate linen volumes, and whether you'd like an on-premise, off-site or linen-rental programme."
                  className="mt-1 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Submit"}
              </button>
              {status === "error" && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                  <p className="font-semibold">
                    We couldn&apos;t send your message right now.
                  </p>
                  <p className="mt-1">
                    Please try again in a moment, or reach us directly:
                  </p>
                  <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                    <a
                      href={`tel:+91${site.phoneRaw}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-white"
                    >
                      <Icon name="phone" className="h-4 w-4" />
                      Call {site.phoneDisplay}
                    </a>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white"
                    >
                      <Icon name="whatsapp" className="h-4 w-4" />
                      WhatsApp us
                    </a>
                  </div>
                </div>
              )}
              <p className="text-xs text-ink-500">
                By submitting, you agree to be contacted by The Laundry Bag about your enquiry.
              </p>
            </form>
          </div>
        </div>

        <div className="container-page mt-12">
          <div className="overflow-hidden rounded-4xl shadow-soft">
            <iframe
              title="The Laundry Bag — Raipur location"
              src={`https://www.google.com/maps?q=${site.address.geo.lat},${site.address.geo.lng}&z=14&output=embed`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-ink-800">{label}</label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
      />
    </div>
  );
}
