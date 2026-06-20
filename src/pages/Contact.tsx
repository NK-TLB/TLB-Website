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

function ContactPathCard({
  badge,
  role,
  blurb,
  email,
  accent = "brand",
}: {
  badge: string;
  role: string;
  blurb: string;
  email: string;
  accent?: "brand" | "accent";
}) {
  const accentBar =
    accent === "accent"
      ? "from-accent-400 to-accent-600"
      : "from-brand-400 to-brand-600";

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-100/80 bg-white p-4 shadow-sm transition duration-300 hover:border-brand-200 hover:shadow-md sm:p-5">
      <span
        aria-hidden="true"
        className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${accentBar}`}
      />
      <span className="eyebrow w-fit">{badge}</span>
      <p className="mt-2.5 font-display text-[0.95rem] font-bold leading-snug tracking-tight text-ink-900 sm:text-base">
        {role}
      </p>
      <p className="mt-1.5 flex-1 text-xs leading-relaxed text-ink-600 sm:text-sm">
        {blurb}
      </p>
      <a
        href={`mailto:${email}`}
        className="btn-outline btn-compact-sm mt-4 w-full justify-center gap-2"
        title={email}
      >
        <Icon name="mail" className="h-3.5 w-3.5 shrink-0" />
        <span className="truncate text-xs sm:text-sm">{email}</span>
      </a>
    </div>
  );
}

function ContactSidebarSection({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`p-5 sm:p-6 ${className}`}>
      <p className="eyebrow-label">{label}</p>
      <div className="mt-4">{children}</div>
    </section>
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
        description={`Call ${site.phoneDisplay}. Visit our corporate office at ${site.address.full}.`}
      />

      <PageHero
        title="Get In Touch"
        description="Call or WhatsApp our Raipur HQ, or submit a new business enquiry for hotels, hospitals and commercial properties."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <PageSection reveal={false}>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
              <Reveal className="lg:col-span-5">
              <aside className="lg:sticky lg:top-28 lg:self-start">
                <PremiumFrame className="overflow-hidden">
                  <div className="relative overflow-hidden bg-ink-950 px-5 py-7 sm:px-7 sm:py-8">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-ink-mesh opacity-25"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-brand-500/30 blur-3xl"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-accent-400/20 blur-3xl"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-6 top-6 hidden h-16 w-16 rounded-full border border-white/10 bg-white/5 sm:block"
                    />

                    <div className="relative">
                      <span className="eyebrow-glass">
                        <Icon name="phone" className="h-3.5 w-3.5 text-brand-300" />
                        Call or WhatsApp
                      </span>
                      <a
                        href={`tel:+91${site.phoneRaw}`}
                        className="mt-3 block font-display text-2xl font-bold tracking-tight text-white transition hover:text-brand-200 sm:text-[1.85rem]"
                      >
                        {site.phoneDisplay}
                      </a>
                      <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/60">
                        Reach our Raipur HQ for commercial laundry &amp; linen enquiries.
                      </p>
                      <div className="mt-5 grid grid-cols-2 gap-2.5">
                        <a
                          href={`tel:+91${site.phoneRaw}`}
                          className="btn-light btn-compact justify-center"
                        >
                          <Icon name="phone" className="h-4 w-4 text-brand-600" />
                          Call
                        </a>
                        <a
                          href={whatsappHref}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-whatsapp btn-compact justify-center shadow-lift"
                        >
                          <Icon name="whatsapp" className="h-4 w-4" />
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-brand-100/70 bg-gradient-to-br from-brand-50/30 via-white to-white">
                    <ContactSidebarSection label="Who to contact">
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                        <ContactPathCard
                          badge="New business"
                          role={site.contacts.enquiries.role}
                          blurb={`${site.contacts.enquiries.blurb} Use the form to send a proposal request.`}
                          email={site.contacts.enquiries.email}
                        />
                        <ContactPathCard
                          badge="Careers"
                          role={site.contacts.careers.role}
                          blurb={`${site.contacts.careers.blurb} Email HR directly — the form is for new business only.`}
                          email={site.contacts.careers.email}
                          accent="accent"
                        />
                      </div>
                    </ContactSidebarSection>
                  </div>
                </PremiumFrame>
              </aside>
              </Reveal>

              <Reveal className="lg:col-span-7" delay={80}>
              <PremiumFrame>
                <form
                  name={NETLIFY_FORM_NAME}
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={onSubmit}
                  className="overflow-hidden"
                >
                  <input type="hidden" name="form-name" value={NETLIFY_FORM_NAME} />
                  <input
                    type="hidden"
                    name="subject"
                    data-remove-prefix
                    value="New Business Enquiry - The Laundry Bag"
                  />
                  <input type="hidden" name="enquiry-type" value="new-business" />
                  <input
                    type="hidden"
                    name="recipient"
                    value={site.contacts.enquiries.email}
                  />
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out if you&apos;re human:{" "}
                      <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </p>

                  <div className="relative overflow-hidden border-b border-brand-100/70 bg-gradient-to-br from-brand-50/60 via-white to-white px-5 py-6 sm:px-8 sm:py-8">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-12 top-0 h-40 w-40 rounded-full bg-brand-100/40 blur-3xl"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-accent-100/30 blur-3xl"
                    />

                    <div className="relative flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                      <div className="flex min-w-0 gap-4">
                        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-soft ring-1 ring-white/20">
                          <Icon name="mail" className="h-5 w-5" />
                        </span>
                        <div className="min-w-0">
                          <span className="eyebrow w-fit">New business</span>
                          <h2 className="mt-2 h3">New business enquiry</h2>
                          <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-600">
                            For hotels, hospitals and businesses that want to work
                            with us. Tell us about your property and linen needs —
                            on-premise, off-site, or rental.
                          </p>
                        </div>
                      </div>

                      <div className="relative shrink-0 overflow-hidden rounded-2xl border border-brand-100/80 bg-white/90 px-4 py-3.5 shadow-sm backdrop-blur-sm sm:px-5">
                        <span
                          aria-hidden="true"
                          className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand-400 to-brand-600"
                        />
                        <p className="pl-3 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-brand-600">
                          Routed to
                        </p>
                        <p className="mt-1 pl-3 font-display text-sm font-bold tracking-tight text-ink-900">
                          {site.contacts.enquiries.role}
                        </p>
                        <p className="mt-1 pl-3 text-xs text-ink-500">
                          {site.contacts.enquiries.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5 px-5 py-6 sm:px-8 sm:py-7">
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

                    <div className="rounded-2xl border border-brand-100/80 bg-gradient-to-r from-brand-50/40 via-white to-brand-50/20 p-5">
                      <button
                        type="submit"
                        className="btn-primary w-full justify-center"
                        disabled={status === "sending"}
                      >
                        {status === "sending"
                          ? "Sending to Head of Projects…"
                          : "Submit new business enquiry"}
                        {status !== "sending" && (
                          <Icon name="arrow" className="h-4 w-4" />
                        )}
                      </button>
                      <p className="mt-3 text-center text-xs leading-relaxed text-ink-500">
                        Sent to {site.contacts.enquiries.role} at{" "}
                        {site.contacts.enquiries.email}. For careers, email{" "}
                        <a
                          href={`mailto:${site.contacts.careers.email}`}
                          className="font-semibold text-brand-700 underline decoration-brand-200 underline-offset-2 hover:text-brand-800"
                        >
                          {site.contacts.careers.email}
                        </a>
                        .
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
              </Reveal>
            </div>

          <Reveal className="mt-10" delay={140}>
          <PremiumFrame>
            <div className="border-b border-brand-100/70 bg-gradient-to-br from-brand-50/40 via-white to-white p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-sm ring-1 ring-white/20">
                    <Icon name="pin" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="eyebrow-label">Office address</p>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-ink-900">
                      {site.address.street}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-600">
                      {site.address.city}, {site.address.region},{" "}
                      {site.address.postalCode}, {site.address.country}
                    </p>
                  </div>
                </div>
                <a
                  href={site.address.mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline btn-compact shrink-0 justify-center sm:mt-1"
                >
                  Get directions
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            </div>
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
          </PremiumFrame>
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
