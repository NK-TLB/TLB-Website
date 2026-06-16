import Icon from "./Icon";
import Reveal from "./Reveal";
import PageSection from "./PageSection";
import SectionHeading from "./SectionHeading";
import { whyChooseUs } from "../data/site";

export default function WhyChooseUsGrid() {
  return (
    <PageSection reveal={false}>
        <SectionHeading
          title="Because Quick can't Clean and Super lost it's shine."
          prominent
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <article className="card card-hover group relative h-full overflow-hidden">
                <div className="card-inner p-6 sm:p-8">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[2px] accent-line-h opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-100/40 blur-2xl transition duration-300 group-hover:bg-brand-200/50"
                />

                <div className="relative flex items-start justify-between gap-4">
                  <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-soft ring-1 ring-white/20">
                    <Icon name={item.icon} className="h-7 w-7" />
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-display text-3xl font-extrabold leading-none text-brand-100"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="h3 relative mt-6">
                  {item.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-ink-600">
                  {item.description}
                </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
    </PageSection>
  );
}
