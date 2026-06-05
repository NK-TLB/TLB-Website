import { useState } from "react";
import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import SEO from "../components/SEO";
import { site } from "../data/site";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 700);
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
        title="Let's talk laundry"
        description="Tell us a bit about what you need and we'll get back to you with timings, pricing and a free pickup slot."
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
              <h2 className="mt-4 font-display text-lg font-bold text-ink-900">Call us</h2>
              <p className="mt-2 text-sm font-semibold text-brand-700">
                {site.phoneDisplay}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-ink-500">{site.hours}</p>
            </div>

            <div className="card">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name="mail" />
              </span>
              <h2 className="mt-4 font-display text-lg font-bold text-ink-900">Email us</h2>
              <ul className="mt-2 space-y-1.5 text-sm text-ink-700">
                <li>For a Job: <a className="text-brand-700 hover:text-brand-800" href={`mailto:${site.emails.hr}`}>{site.emails.hr}</a></li>
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-3">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={onSubmit}
              className="card space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>Don&apos;t fill this out: <input name="bot-field" /></label>
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
                  placeholder="Tell us about your laundry needs, preferred pickup time, or anything else."
                  className="mt-1 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : status === "sent" ? "Sent — we'll be in touch!" : "Send message"}
              </button>
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
