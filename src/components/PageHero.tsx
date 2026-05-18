type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <div className="container-page py-16 sm:py-20 lg:py-24">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="h1 mt-4 max-w-3xl">{title}</h1>
        {description && (
          <p className="lead mt-5 max-w-2xl">{description}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-200/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-300/40 blur-3xl"
      />
    </section>
  );
}
