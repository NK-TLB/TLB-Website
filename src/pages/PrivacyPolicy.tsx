import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import { site } from "../data/site";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        path="/privacy-policy"
        title="Privacy Policy"
        description="The Laundry Bag privacy policy — entire agreement, damaged property, lost items, loose items, personal property, turnaround time and pick-up & drop-off terms."
      />
      <div className="breadcrumb-strip">
        <div className="container-page py-3 text-xs text-ink-500">
          <Link to="/" className="hover:text-brand-700">Home</Link>{" "}
          <span className="mx-2">/</span>{" "}
          <span className="text-ink-700">Privacy Policy</span>
        </div>
      </div>

      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Please read these terms carefully. By using The Laundry Bag's services you agree to the policies below."
      />

      <section className="section">
        <div className="container-page prose prose-ink max-w-3xl text-ink-800">
          <h2 className="font-display text-2xl font-bold">Entire Agreement / Choice of Law</h2>
          <p className="mt-3 leading-relaxed text-ink-700">
            This agreement and any documents referred to herein constitute
            the complete, exclusive, and entire agreement between the
            parties, may not be modified except in writing signed by both
            parties, and shall be subject to Bangalore jurisdiction.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold">Damaged Property</h2>
          <p className="mt-3 leading-relaxed text-ink-700">
            We exercise utmost care in cleaning and processing garments
            entrusted to us. Nevertheless, we cannot assume responsibility
            for inherent weaknesses or defects in materials which may result
            in tears or development of small holes in fabric that are not
            readily apparent prior to processing.
          </p>
          <p className="mt-3 leading-relaxed text-ink-700">
            We cannot guarantee against colour loss, colour bleeding, and
            shrinkage; or against damage to weak and tender fabrics. The
            Laundry Bag reserves the right to refuse cleaning any garment.
            The Laundry Bag does not guarantee removal of all stains. Any
            items determined to have been damaged by The Laundry Bag will
            be reimbursed in accordance with the International Fabricare
            Fair Claims Guide and shall not exceed ten (10) times our
            charge for cleaning that garment regardless of brand or
            condition.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold">Lost Items</h2>
          <p className="mt-3 leading-relaxed text-ink-700">
            The customer must notify The Laundry Bag within 48 hours of
            receipt of a delivery by an email at{" "}
            <a className="text-brand-700 hover:text-brand-800" href={`mailto:${site.emails.contact}`}>
              {site.emails.contact}
            </a>{" "}
            of any lost items from that particular delivery; failure to do
            so constitutes waiver of a claim for any lost items from that
            delivery. The Laundry Bag makes its best reasonable effort to
            track every item that we process and will review all lost-item
            claims on a case-by-case basis. Any items determined to have
            been lost by The Laundry Bag will be reimbursed in accordance
            with the International Fabricare Fair Claims Guide and shall
            not exceed ten (10) times our charge for cleaning that garment
            regardless of brand or condition. The Laundry Bag is not
            responsible for your items before we pick them up and after we
            drop them off — it is your responsibility to ensure the safety
            of your items during these times.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold">Loose Items</h2>
          <p className="mt-3 leading-relaxed text-ink-700">
            Although we try as hard as possible to track such items, we are
            not responsible for loose items such as jewellery, watches,
            cash, detachable buttons, cufflinks, etc. We request that
            customers empty pockets prior to leaving items with us. The
            customer is responsible for any and all damage caused by any
            items (lipstick, gum, pens, etc.) left in clothing or in the
            bags that cause any damage to the clothing, cleaning machines,
            or anything else.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold">Personal Property</h2>
          <p className="mt-3 leading-relaxed text-ink-700">
            Any personal property placed in the store that appears to have
            value will be removed by The Laundry Bag and stored for 7
            days. If items are unclaimed after 7 days, all property will be
            donated to charity.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold">Turnaround Time</h2>
          <p className="mt-3 leading-relaxed text-ink-700">
            Service days and turnaround time vary by location. The Laundry
            Bag will make its best reasonable effort to adhere to our
            service schedule; however, we do not guarantee turnaround times
            and assume no responsibility for any damages that may occur due
            to a delay in service.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold">Pick-Up and Drop-Off</h2>
          <p className="mt-3 leading-relaxed text-ink-700">
            The Laundry Bag pick-up &amp; delivery service will pick up the
            customer&apos;s laundry bag upon the customer&apos;s request.
            The Laundry Bag pick-up &amp; delivery service will not take
            place on company holidays. The Laundry Bag pick-up &amp;
            delivery service reserves the right to determine the pick-up
            and drop-off times at its own discretion and reserves the right
            to reschedule such times upon prior notice to the customer.
          </p>
        </div>
      </section>
    </>
  );
}
