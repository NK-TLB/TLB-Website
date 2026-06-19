import { Link, useSearchParams } from "react-router-dom";
import Icon from "../components/Icon";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import PageSection from "../components/PageSection";
import TeamMemberCard from "../components/TeamMemberCard";
import { headOfficeTeam, site } from "../data/site";

export default function OurTeam() {
  const [searchParams] = useSearchParams();
  const frameEditMode = import.meta.env.DEV && searchParams.has("frame");

  return (
    <>
      <SEO
        path="/our-team"
        title="Our Team"
        description={`Meet the head office team behind The Laundry Bag in ${headOfficeTeam.location} — leadership, operations, commercial and support functions steering our laundry network across India.`}
      />

      <PageHero
        title="Pillars of our organisation"
        description={
          <>
            <strong className="font-semibold text-ink-900">
              The Laundry Bag™
            </strong>
            {headOfficeTeam.intro.slice("The Laundry Bag™".length)}
          </>
        }
        crumbs={[{ label: "Home", to: "/" }, { label: "Our Team" }]}
      />

      <PageSection reveal={false}>
        {frameEditMode && (
          <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
            <strong className="font-semibold">Portrait frame editor</strong> — adjust each
            card below, then copy the snippet into{" "}
            <code className="rounded bg-white/80 px-1.5 py-0.5 text-xs">portraitFrame</code> in{" "}
            <code className="rounded bg-white/80 px-1.5 py-0.5 text-xs">src/data/site.ts</code>.
            Remove <code className="rounded bg-white/80 px-1.5 py-0.5 text-xs">?frame</code> from
            the URL when done.
          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {headOfficeTeam.members.map((member, i) => (
            <Reveal key={member.id} delay={i * 60}>
              <TeamMemberCard member={member} frameEditMode={frameEditMode} />
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection className="section-tint section" reveal={false}>
        <Reveal>
        <div className="accent-box-2xl mx-auto max-w-3xl">
          <div className="accent-box-2xl-inner p-8 text-center sm:p-10">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-soft ring-1 ring-white/20">
              <Icon name="users" className="h-6 w-6" />
            </span>
            <h2 className="h2 mt-5">
              Join our head office team
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink-600 sm:text-base">
              We are always looking for driven people in operations, engineering,
              commercial and support roles. Reach out to our HR team or send a
              general enquiry through contact.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a href={`mailto:${site.emails.careers}`} className="btn-primary">
                <Icon name="mail" className="h-4 w-4" />
                {site.emails.careers}
              </a>
              <Link to="/contact" className="btn-secondary">
                Contact us
              </Link>
            </div>
          </div>
        </div>
        </Reveal>
      </PageSection>
    </>
  );
}
