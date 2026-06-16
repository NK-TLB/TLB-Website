import { useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import PageSection from "../components/PageSection";
import PremiumFrame from "../components/PremiumFrame";
import { site } from "../data/site";

const NETLIFY_FORM_NAME = "contact";

const encodeFormData = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join("&");

/** Netlify Forms stores the submission and sends the team notification email. */
const submitNetlifyForm = async (data: Record<string, string>) => {
  const res = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encodeFormData({ "form-name": NETLIFY_FORM_NAME, ...data }),
  });
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
};

const whatsappMessage =
  "Hi The Laundry Bag, I'd like to know more about your laundry & linen services.";
const whatsappHref = `https://wa.me/91${site.phoneRaw}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

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
    <div className="accent-box-2xl shadow-sm">
      <div className="accent-box-2xl-inner bg-gradient-to-br from-brand-50/40 via-white to-white p-5">
      <div className="flex gap-4">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-sm ring-1 ring-white/20">
          <Icon name={icon} className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="eyebrow-label">
            {label}
          </p>
          <div className="mt-2">{children}</div>
        </div>
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
      await submitNetlifyForm(data);
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
        title="Get In Touch"
        description="Tell us about your property and we'll recommend the right laundry or linen model for you."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <PageSection reveal={false}>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
              <Reveal className="lg:col-span-5">
              <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
                <PremiumFrame>
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
                      <span className="eyebrow-glass">
                        <Icon name="clock" className="h-3.5 w-3.5 text-brand-300" />
                        {site.hours}
                      </span>
                      <p className="eyebrow-accent mt-4">
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
                          className="btn-light btn-compact flex-1"
                        >
                          <Icon name="phone" className="h-4 w-4 text-brand-600" />
                          Call now
                        </a>
                        <a
                          href={whatsappHref}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-whatsapp btn-compact flex-1 shadow-lift"
                        >
                          <Icon name="whatsapp" className="h-4 w-4" />
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 p-5 sm:p-6">
                    <Reveal delay={60}>
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
                    </Reveal>

                    <Reveal delay={120}>
                    <ContactRow icon="mail" label="Who to contact">
                      <div className="space-y-4">
                        <div>
                          <p className="text-xs font-medium text-ink-500">
                            New business · {site.contacts.enquiries.role}
                          </p>
                          <p className="mt-0.5 text-xs leading-relaxed text-ink-500">
                            {site.contacts.enquiries.blurb}
                          </p>
                          <a
                            href={`mailto:${site.contacts.enquiries.email}`}
                            className="mt-1.5 block break-all text-sm font-semibold text-brand-700 transition hover:text-brand-800"
                          >
                            {site.contacts.enquiries.email}
                          </a>
                          <a
                            href={`tel:+91${site.contacts.enquiries.phoneRaw}`}
                            className="mt-1 block text-sm font-semibold text-brand-700 transition hover:text-brand-800"
                          >
                            {site.contacts.enquiries.phoneDisplay}
                          </a>
                        </div>
                        <div className="border-t border-brand-100/70 pt-4">
                          <p className="text-xs font-medium text-ink-500">
                            Careers · {site.contacts.careers.role}
                          </p>
                          <p className="mt-0.5 text-xs leading-relaxed text-ink-500">
                            {site.contacts.careers.blurb}
                          </p>
                          <a
                            href={`mailto:${site.contacts.careers.email}`}
                            className="mt-1.5 block break-all text-sm font-semibold text-brand-700 transition hover:text-brand-800"
                          >
                            {site.contacts.careers.email}
                          </a>
                        </div>
                      </div>
                    </ContactRow>
                    </Reveal>
                  </div>
                </PremiumFrame>
              </aside>
              </Reveal>

              <Reveal className="lg:col-span-7" delay={80}>
              <div>
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
                    <input
                      type="hidden"
                      name="subject"
                      data-remove-prefix
                      value="New Enquiry - The Laundry Bag"
                    />
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
                        <h2 className="h3">
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

                      <div className="accent-box-2xl">
                        <div className="accent-box-2xl-inner bg-gradient-to-r from-brand-50/50 via-white to-brand-50/30 p-5">
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
                              className="btn-primary btn-compact-sm"
                            >
                              <Icon name="phone" className="h-4 w-4" />
                              Call {site.phoneDisplay}
                            </a>
                            <a
                              href={whatsappHref}
                              target="_blank"
                              rel="noreferrer"
                              className="btn-whatsapp btn-compact-sm"
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
              </Reveal>
            </div>

          <Reveal className="mt-10" delay={140}>
          <div>
            <PremiumFrame>
              <div className="relative overflow-hidden">
                <iframe
                  title="The Laundry Bag, Raipur location"
                  src={site.address.mapsEmbedHref}
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="block h-[360px] min-h-[360px] w-full"
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
                    className="btn-outline btn-compact-sm"
                  >
                    Get directions
                    <Icon name="arrow" className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </PremiumFrame>
          </div>
          </Reveal>
      </PageSection>
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
