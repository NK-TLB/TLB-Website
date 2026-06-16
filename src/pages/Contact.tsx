import { useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { site } from "../data/site";

const NETLIFY_FORM_NAME = "contact";

const encodeFormData = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join("&");

/** Delivers enquiry emails via FormSubmit (team inbox + submitter auto-reply). */
const submitEnquiryEmail = async (data: Record<string, string>) => {
  const res = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(site.emails.contact)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        email: data.email,
        message: data.message,
        _subject: `Website enquiry from ${data.name}`,
        _template: "table",
        _captcha: "false",
        _autoresponse: `Hi ${data.name},\n\nThank you for contacting The Laundry Bag. We've received your enquiry and will get back to you within one business day.\n\n— The Laundry Bag Team`,
      }),
    },
  );

  const result = (await res.json()) as { success?: boolean | string };
  if (!res.ok || (result.success !== true && result.success !== "true")) {
    throw new Error("Email delivery failed");
  }
};

/** Keep a Netlify Forms record for the dashboard (best-effort, non-blocking). */
const recordNetlifySubmission = (data: Record<string, string>) =>
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encodeFormData({ "form-name": NETLIFY_FORM_NAME, ...data }),
  }).catch((err) => console.warn("Netlify form backup failed:", err));

const whatsappMessage =
  "Hi The Laundry Bag, I'd like to know more about your laundry & linen services.";
const whatsappHref = `https://wa.me/91${site.phoneRaw}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

function PremiumFrame({
  children,
  accent = "brand",
}: {
  children: ReactNode;
  accent?: "brand" | "ink";
}) {
  const bar =
    accent === "ink"
      ? "bg-gradient-to-r from-ink-800 via-brand-600 to-accent-500"
      : "bg-brand-gradient";

  return (
    <article className="relative overflow-hidden rounded-[2rem] p-[1.5px] shadow-lift">
      <span aria-hidden="true" className="absolute inset-0 bg-brand-gradient opacity-90" />
      <div className="relative overflow-hidden rounded-[calc(2rem-1.5px)] border border-white/70 bg-white">
        <span aria-hidden="true" className={`block h-1.5 ${bar}`} />
        {children}
      </div>
    </article>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-brand-100/70 bg-gradient-to-br from-brand-50/40 via-white to-white p-5 shadow-sm ring-1 ring-brand-50/80">
      <div className="flex gap-4">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-sm ring-1 ring-white/20">
          <Icon name={icon} className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-brand-600">
            {label}
          </p>
          <div className="mt-2">{children}</div>
        </div>
      </div>
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-brand-100/80 bg-white px-4 py-3 text-sm text-ink-900 shadow-sm transition-[border-color,background-color,box-shadow] duration-300 placeholder:text-ink-400 focus:border-brand-300 focus:outline-none focus:ring-0";

const inputFocusedClass =
  "border-brand-300 bg-brand-50/50 shadow-[inset_3px_0_0_0_rgb(var(--brand-500))]";

export default function Contact() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(
      new FormData(form).entries(),
    ) as Record<string, string>;

    try {
      await submitEnquiryEmail(data);
      void recordNetlifySubmission(data);
      form.reset();
      navigate("/contact/thank-you");
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setStatus("error");
    }
  };

  return (
    <>
      <SEO
        path="/contact"
        title="Contact"
        description={`Call ${site.phoneDisplay}. Visit our corporate office at ${site.address.full}. Open ${site.hours}.`}
      />

      <PageHero
        eyebrow="Contact"
        title="Get In Touch"
        description="Tell us about your property and we'll recommend the right laundry or linen model for you."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="section">
        <div className="container-page">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
              <aside className="space-y-4 lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
                <PremiumFrame accent="ink">
                  <div className="relative overflow-hidden bg-ink-950 px-6 py-8 sm:px-8">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-ink-mesh opacity-25"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-brand-500/25 blur-3xl"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-12 top-0 h-40 w-40 rounded-full bg-accent-400/15 blur-3xl"
                    />

                    <div className="relative">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/85 backdrop-blur-md">
                        <Icon name="clock" className="h-3.5 w-3.5 text-brand-300" />
                        {site.hours}
                      </span>
                      <p className="mt-4 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-brand-300">
                        Call or WhatsApp
                      </p>
                      <a
                        href={`tel:+91${site.phoneRaw}`}
                        className="mt-2 block font-display text-2xl font-bold tracking-tight text-white transition hover:text-brand-200 sm:text-[1.75rem]"
                      >
                        {site.phoneDisplay}
                      </a>
                      <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                        <a
                          href={`tel:+91${site.phoneRaw}`}
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-ink-900 shadow-lift transition hover:-translate-y-0.5"
                        >
                          <Icon name="phone" className="h-4 w-4 text-brand-600" />
                          Call now
                        </a>
                        <a
                          href={whatsappHref}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-[#1ebe5b]"
                        >
                          <Icon name="whatsapp" className="h-4 w-4" />
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 p-5 sm:p-6">
                    <ContactRow icon="pin" label="Office address">
                      <p className="text-sm font-semibold leading-relaxed text-ink-900">
                        {site.address.street}
                      </p>
                      <p className="mt-1 text-sm text-ink-600">
                        {site.address.city}, {site.address.region}{" "}
                        {site.address.postalCode}, {site.address.country}
                      </p>
                      <a
                        href={site.address.mapsHref}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition hover:text-brand-800"
                      >
                        Open in Google Maps
                        <Icon name="arrow" className="h-4 w-4" />
                      </a>
                    </ContactRow>

                    <ContactRow icon="mail" label="Email">
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs font-medium text-ink-500">Enquiries</p>
                          <a
                            href={`mailto:${site.emails.contact}`}
                            className="mt-0.5 block break-all text-sm font-semibold text-brand-700 transition hover:text-brand-800"
                          >
                            {site.emails.contact}
                          </a>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-ink-500">Careers</p>
                          <a
                            href={`mailto:${site.emails.hr}`}
                            className="mt-0.5 block break-all text-sm font-semibold text-brand-700 transition hover:text-brand-800"
                          >
                            {site.emails.hr}
                          </a>
                        </div>
                      </div>
                    </ContactRow>
                  </div>
                </PremiumFrame>
              </aside>

              <div className="lg:col-span-7">
                <PremiumFrame>
                  <form
                    name={NETLIFY_FORM_NAME}
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={onSubmit}
                    className="p-6 sm:p-8 lg:p-10"
                  >
                    <input type="hidden" name="form-name" value={NETLIFY_FORM_NAME} />
                    <p className="hidden">
                      <label>
                        Don&apos;t fill this out if you&apos;re human:{" "}
                        <input name="bot-field" tabIndex={-1} autoComplete="off" />
                      </label>
                    </p>

                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                        <Icon name="mail" className="h-5 w-5" />
                      </span>
                      <div>
                        <h2 className="font-display text-xl font-bold tracking-tight text-ink-900 sm:text-2xl">
                          Send an enquiry
                        </h2>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                          Tell us about your property and linen needs — on-premise, off-site,
                          or rental.
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field name="name" label="Name" placeholder="Your name" />
                        <Field name="phone" label="Phone" type="tel" placeholder="+91 …" />
                      </div>
                      <Field
                        name="email"
                        label="Email"
                        type="email"
                        placeholder="you@example.com"
                      />
                      <MessageField />

                      <div className="rounded-2xl border border-brand-100/70 bg-gradient-to-r from-brand-50/50 via-white to-brand-50/30 p-5">
                        <button
                          type="submit"
                          className="btn-primary w-full justify-center"
                          disabled={status === "sending"}
                        >
                          {status === "sending" ? "Sending…" : "Submit enquiry"}
                          {status !== "sending" && (
                            <Icon name="arrow" className="h-4 w-4" />
                          )}
                        </button>
                        <p className="mt-3 text-center text-xs leading-relaxed text-ink-500">
                          By submitting, you agree to be contacted about your enquiry.
                        </p>
                      </div>

                      {status === "error" && (
                        <div className="rounded-2xl border border-red-200/80 bg-red-50/80 p-4 text-sm text-red-700">
                          <p className="font-semibold">
                            We couldn&apos;t send your message right now.
                          </p>
                          <p className="mt-1">Please try again or reach us directly:</p>
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
                    </div>
                  </form>
                </PremiumFrame>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-10" delay={80}>
            <PremiumFrame>
              <div className="relative overflow-hidden">
                <iframe
                  title="The Laundry Bag, Raipur location"
                  src={`https://www.google.com/maps?q=${site.address.geo.lat},${site.address.geo.lng}&z=14&output=embed`}
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="block w-full grayscale-[20%] contrast-[1.02] transition duration-500 hover:grayscale-0"
                />
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-brand-100/70 bg-gradient-to-r from-brand-50/50 via-white to-brand-50/30 px-6 py-4 sm:px-8">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                      <Icon name="pin" className="h-4 w-4" />
                    </span>
                    <p className="text-sm text-ink-600">
                      <span className="font-semibold text-ink-900">
                        {site.address.street}
                      </span>
                      {" · "}
                      {site.address.city}, {site.address.region}
                    </p>
                  </div>
                  <a
                    href={site.address.mapsHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-brand-200/80 bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm transition hover:border-brand-300 hover:text-brand-800"
                  >
                    Get directions
                    <Icon name="arrow" className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </PremiumFrame>
          </Reveal>
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
  const [focused, setFocused] = useState(false);

  return (
    <div>
      <label
        htmlFor={name}
        className={`text-sm font-semibold transition-colors duration-300 ${
          focused ? "text-brand-700" : "text-ink-800"
        }`}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className={`mt-2 ${inputClass} ${focused ? inputFocusedClass : ""}`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}

function MessageField() {
  const [focused, setFocused] = useState(false);

  return (
    <>
      <label
        htmlFor="message"
        className={`text-sm font-semibold transition-colors duration-300 ${
          focused ? "text-brand-700" : "text-ink-800"
        }`}
      >
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={5}
        required
        placeholder="Property type, location, and estimated linen volumes."
        className={`mt-2 ${inputClass} ${focused ? inputFocusedClass : ""}`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </>
  );
}
