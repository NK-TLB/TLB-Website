import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import PageSection from "../components/PageSection";
import TeamMemberCard from "../components/TeamMemberCard";
import { headOfficeTeam, site } from "../data/site";

export default function OurTeam() {
  return (
    <>
      <SEO
        path="/our-team"
        title="Our Team"
        description={`Meet the head office team behind The Laundry Bag in ${headOfficeTeam.location} — leadership, operations, commercial and support functions steering our laundry network across India.`}
      />

      <PageHero
        title="Pillars of our organisation"
        description={headOfficeTeam.intro}
        crumbs={[{ label: "Home", to: "/" }, { label: "Our Team" }]}
      />

      <PageSection reveal={false}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {headOfficeTeam.members.map((member, i) => (
            <Reveal key={member.id} delay={i * 60}>
              <TeamMemberCard member={member} />
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
            <h2 className="mt-5 font-display text-2xl font-bold text-ink-900 sm:text-3xl">
              Join our head office team
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink-600 sm:text-base">
              We are always looking for driven people in operations, engineering,
              commercial and support roles. Reach out to our HR team or send a
              general enquiry through contact.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a href={`mailto:${site.emails.hr}`} className="btn-primary">
                <Icon name="mail" className="h-4 w-4" />
                {site.emails.hr}
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
