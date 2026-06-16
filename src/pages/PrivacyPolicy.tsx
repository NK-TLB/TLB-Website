import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import PageSection from "../components/PageSection";
import { site } from "../data/site";

const clauses = [
  {
    title: "Entire Agreement / Choice of Law",
    body: [
      "This agreement and any documents referred to herein constitute the complete, exclusive, and entire agreement between the parties, may not be modified except in writing signed by both parties, and shall be subject to Bangalore jurisdiction.",
    ],
  },
  {
    title: "Damaged Property",
    body: [
      "We exercise utmost care in cleaning and processing garments entrusted to us. Nevertheless, we cannot assume responsibility for inherent weaknesses or defects in materials which may result in tears or development of small holes in fabric that are not readily apparent prior to processing.",
      "We cannot guarantee against colour loss, colour bleeding, and shrinkage; or against damage to weak and tender fabrics. The Laundry Bag reserves the right to refuse cleaning any garment. The Laundry Bag does not guarantee removal of all stains. Any items determined to have been damaged by The Laundry Bag will be reimbursed in accordance with the International Fabricare Fair Claims Guide and shall not exceed ten (10) times our charge for cleaning that garment regardless of brand or condition.",
    ],
  },
  {
    title: "Lost Items",
    body: [
      `The customer must notify The Laundry Bag within 48 hours of receipt of a delivery by an email at ${site.emails.enquiries} of any lost items from that particular delivery; failure to do so constitutes waiver of a claim for any lost items from that delivery. The Laundry Bag makes its best reasonable effort to track every item that we process and will review all lost-item claims on a case-by-case basis. Any items determined to have been lost by The Laundry Bag will be reimbursed in accordance with the International Fabricare Fair Claims Guide and shall not exceed ten (10) times our charge for cleaning that garment regardless of brand or condition. The Laundry Bag is not responsible for items before we collect them and after we deliver them, it is the client's responsibility to ensure the safety of items during these times.`,
    ],
  },
  {
    title: "Loose Items",
    body: [
      "Although we try as hard as possible to track such items, we are not responsible for loose items such as jewellery, watches, cash, detachable buttons, cufflinks, etc. We request that customers empty pockets prior to leaving items with us. The customer is responsible for any and all damage caused by any items (lipstick, gum, pens, etc.) left in clothing or in the bags that cause any damage to the clothing, cleaning machines, or anything else.",
    ],
  },
  {
    title: "Personal Property",
    body: [
      "Any personal property placed in the store that appears to have value will be removed by The Laundry Bag and stored for 7 days. If items are unclaimed after 7 days, all property will be donated to charity.",
    ],
  },
  {
    title: "Turnaround Time",
    body: [
      "Service days and turnaround time vary by location. The Laundry Bag will make its best reasonable effort to adhere to our service schedule; however, we do not guarantee turnaround times and assume no responsibility for any damages that may occur due to a delay in service.",
    ],
  },
  {
    title: "Collection and Delivery",
    body: [
      "For managed and off-site programmes, The Laundry Bag collects and returns linen on a schedule agreed with the client. Collection and delivery will not take place on company holidays. The Laundry Bag reserves the right to determine collection and delivery times at its own discretion and to reschedule such times upon prior notice to the client.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        path="/privacy-policy"
        title="Privacy Policy"
        description="The Laundry Bag privacy policy, entire agreement, damaged property, lost items, loose items, personal property, turnaround time and collection & delivery terms."
      />

      <PageHero
        title="Privacy Policy"
        description={`Please read these terms carefully. By using ${site.name}'s services you agree to the policies below.`}
        crumbs={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]}
      />

      <PageSection containerClassName="container-page max-w-3xl" reveal={false}>
        {clauses.map((c, i) => (
          <Reveal key={c.title} delay={i * 50}>
            <div className={i > 0 ? "mt-10" : ""}>
              <h2 className="h2">{c.title}</h2>
              {c.body.map((p, pi) => (
                <p key={pi} className="mt-3 leading-relaxed text-ink-700">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        ))}
      </PageSection>
    </>
  );
}
