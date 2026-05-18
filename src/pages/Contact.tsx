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
        title="Contact &amp; Schedule a Pickup — Raipur"
        description={`Call ${site.phoneDisplay} or email ${site.email}. Visit our flagship outlet at Jain Mandir Campus, T V Tower Road, Opposite Cafe 9, Raipur, Chhattisgarh 492004. Open Mon–Sun, 9 AM – 9 PM.`}
      />
      <PageHero
        eyebrow="Contact"
        title="Let's get your laundry sorted."
        description="Tell us a bit about what you need and we'll get back to you with timings, pricing and a free pickup slot."
      />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-5">
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
                <label>
                  Don&apos;t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field name="name" label="Your name" placeholder="Jane Doe" />
                <Field
                  name="phone"
                  label="Phone"
                  type="tel"
                  placeholder="+91 ..."
                />
              </div>
              <Field
                name="email"
                label="Email"
                type="email"
                placeholder="you@example.com"
              />
              <div>
                <label className="text-sm font-semibold text-ink-800">
                  Service
                </label>
                <select
                  name="service"
                  className="mt-1 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                  defaultValue="Wash & fold"
                >
                  {[
                    "Wash & fold",
                    "Wash, fold & iron",
                    "Dry cleaning",
                    "Shoe & bag cleaning",
                    "Commercial / B2B",
                    "Other",
                  ].map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-ink-800">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your laundry needs, preferred pickup time, or anything else."
                  className="mt-1 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full sm:w-auto"
                disabled={status === "sending"}
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                    ? "Sent — we'll be in touch!"
                    : "Send message"}
              </button>
              <p className="text-xs text-ink-500">
                By submitting, you agree to be contacted by The LaundryBag
                about your enquiry.
              </p>
            </form>
          </div>

          <aside className="lg:col-span-2">
            <div className="card">
              <h2 className="h3">Reach us directly</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <ContactRow
                  icon="phone"
                  label="Phone"
                  value={site.phone}
                  href={site.phoneHref}
                />
                <ContactRow
                  icon="mail"
                  label="Email"
                  value={site.email}
                  href={`mailto:${site.email}`}
                />
                <ContactRow
                  icon="check"
                  label="WhatsApp"
                  value="Chat with us"
                  href={site.whatsappHref}
                />
                <ContactRow
                  icon="pin"
                  label="Flagship outlet"
                  value={`${site.address.street}, ${site.address.landmark}, ${site.address.city} ${site.address.postalCode}`}
                  href={site.address.mapsHref}
                />
                <ContactRow
                  icon="clock"
                  label="Hours"
                  value={site.hours}
                />
              </ul>
            </div>

            <div className="card mt-6 bg-brand-700 text-white">
              <h3 className="font-display text-xl font-bold">
                Looking for commercial laundry?
              </h3>
              <p className="mt-2 text-sm text-white/85">
                Hotels, hospitals, hostels, salons and businesses — get a
                custom B2B plan with linen rentals and managed pickup cycles.
              </p>
              <a
                href={`mailto:${site.email}?subject=B2B%20laundry%20enquiry`}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-50"
              >
                Email our sales team
              </a>
            </div>
          </aside>
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

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <span className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
        <Icon name={icon} className="h-4 w-4" />
      </span>
      <span>
        <span className="block text-xs uppercase tracking-wider text-ink-500">
          {label}
        </span>
        <span className="block font-semibold text-ink-900">{value}</span>
      </span>
    </span>
  );
  return (
    <li>
      {href ? (
        <a
          href={href}
          className="block hover:text-brand-700"
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
        >
          {inner}
        </a>
      ) : (
        inner
      )}
    </li>
  );
}
