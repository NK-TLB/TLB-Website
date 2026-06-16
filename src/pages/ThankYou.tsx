import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import SEO from "../components/SEO";
import SuccessCheckmark from "../components/SuccessCheckmark";
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
        title="Thank You"
        description="Thanks for contacting The Laundry Bag. We've received your enquiry and will get back to you within one business day."
      />

      <PageHero
        icon={<SuccessCheckmark />}
        rule="center-out"
        title="Thank You"
        description="Your enquiry has reached our team. We typically respond within one business day."
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Contact", to: "/contact" },
          { label: "Thank you" },
        ]}
      >
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
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
      </PageHero>
    </>
  );
}
