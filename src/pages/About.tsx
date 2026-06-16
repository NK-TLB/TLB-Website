import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import PageSection from "../components/PageSection";
import TimelineModern from "../components/TimelineModern";
import Leadership from "../components/Leadership";
import SectionHeading from "../components/SectionHeading";

export default function About() {
  return (
    <>
      <SEO
        path="/about"
        title="Our Journey"
        description="The Laundry Bag was founded in 2013 by Shourya Jain in Raipur, Chhattisgarh, today India's Leading Laundry Service Provider and a trusted commercial laundry & linen partner for leading hotels and hospitals across India."
      />

      <PageHero
        title="Milestones that shaped The Laundry Bag™"
        description="From our first campus setup to a nationwide network — the key moments that built The Laundry Bag."
        crumbs={[{ label: "Home", to: "/" }, { label: "Our Journey" }]}
      />

      <PageSection
        className="section-tint section relative overflow-hidden"
        reveal={false}
        decorations={
          <>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-brand-200/20 blur-3xl"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-24 bottom-32 h-72 w-72 rounded-full bg-accent-400/10 blur-3xl"
            />
          </>
        }
      >
        <TimelineModern />
      </PageSection>

      {/* Founder / leadership — hidden visually, kept in DOM for SEO */}
      <section className="sr-only" aria-label="Leadership">
        <div className="container-page">
          <SectionHeading
            title="The founder behind The Laundry Bag"
            description="Built on a simple promise, never mix one client's linen with anyone else's."
          />
          <Leadership />
        </div>
      </section>
    </>
  );
}
