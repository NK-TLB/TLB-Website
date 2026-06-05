import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Crumb = { label: string; to?: string };

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  crumbs?: Crumb[];
};

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
  crumbs,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-hero-radial">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-sky2-200/40 blur-3xl"
      />
      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        {crumbs && crumbs.length > 0 && (
          <nav className="mb-6 text-xs text-ink-500" aria-label="Breadcrumb">
            {crumbs.map((c, i) => (
              <span key={`${c.label}-${i}`}>
                {c.to ? (
                  <Link to={c.to} className="hover:text-brand-700">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-ink-700">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <span className="mx-2">/</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <span className="eyebrow animate-fade-up">{eyebrow}</span>}
        <h1 className="h1 mt-4 max-w-4xl animate-fade-up">{title}</h1>
        {description && (
          <p className="lead mt-5 max-w-2xl animate-fade-up">{description}</p>
        )}
        {children && <div className="mt-8 animate-fade-up">{children}</div>}
      </div>
    </section>
  );
}
