import Icon from "./Icon";
import Reveal from "./Reveal";
import { certifications } from "../data/site";

type Props = {
  /** Render on a dark/tinted surface (inverted text). */
  invert?: boolean;
  className?: string;
};

/**
 * Certifications, standards & equipment trust band — a compact grid of the
 * credentials that matter to B2B buyers (ISO, Electrolux, PERC-free, IFI…).
 */
export default function CertificationsBand({ invert = false, className = "" }: Props) {
  return (
    <div className={className}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 60}>
            <article
              className={`flex h-full items-start gap-4 rounded-3xl p-5 transition ${
                invert
                  ? "border border-white/15 bg-white/10 backdrop-blur"
                  : "border border-ink-100 bg-white shadow-soft hover:shadow-lift"
              }`}
            >
              <span
                className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
                  invert ? "bg-white/15 text-white" : "bg-brand-gradient text-white"
                }`}
              >
                <Icon name={c.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3
                  className={`font-display text-base font-bold ${
                    invert ? "text-white" : "text-ink-900"
                  }`}
                >
                  {c.title}
                </h3>
                <p className={`mt-1 text-sm ${invert ? "text-white/80" : "text-ink-600"}`}>
                  {c.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
