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
        description="Thanks for your new business enquiry. Our Head of Projects team has received it and will get back to you within one business day."
      />

      <PageHero
        icon={<SuccessCheckmark />}
        rule="center-out"
        title="Thank You"
        description="Your new business enquiry has reached our Head of Projects team. We typically respond within one business day."
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
            className="btn-whatsapp"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>
      </PageHero>
    </>
  );
}
