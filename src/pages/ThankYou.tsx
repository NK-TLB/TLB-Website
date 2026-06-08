import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import SEO from "../components/SEO";
import { site } from "../data/site";

const whatsappMessage =
  "Hi The Laundry Bag, I just submitted an enquiry on your website and would like to talk about your laundry & linen services.";
const whatsappHref = `https://wa.me/91${site.phoneRaw}?text=${encodeURIComponent(
  whatsappMessage
)}`;

export default function ThankYou() {
  return (
    <>
      <SEO
        path="/contact/thank-you"
        title="Thank you — we've received your enquiry"
        description="Thanks for contacting The Laundry Bag. We've received your enquiry and will get back to you within one business day."
      />

      <PageHero
        eyebrow="Message received"
        title="Thank you — we'll be in touch"
        description="Your enquiry has reached our team. We typically respond within one business day. A confirmation email is on its way to your inbox."
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Contact", to: "/contact" },
          { label: "Thank you" },
        ]}
      />

      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl">
            <div className="card text-center">
              <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <Icon name="check" className="h-8 w-8" />
              </span>
              <h2 className="mt-6 font-display text-2xl font-bold text-ink-900">
                Your enquiry is on its way
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">
                Thank you for reaching out to {site.name}. A member of our team
                will review your requirements and respond shortly with the right
                model — on-premise, off-site or linen rental — along with timings
                and pricing. For anything urgent, reach us directly below.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a href={`tel:+91${site.phoneRaw}`} className="btn-primary">
                  <Icon name="phone" className="h-4 w-4" />
                  Call {site.phoneDisplay}
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#1ebe5b]"
                >
                  <Icon name="whatsapp" className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="mt-6">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
                >
                  Back to home
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
