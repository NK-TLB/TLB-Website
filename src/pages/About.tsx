import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import { counters, site, whyChooseUs } from "../data/site";

export default function About() {
  return (
    <>
      <SEO
        path="/about"
        title="Who we are"
        description="We are professionals in the laundry and dry-cleaning business — staying up to date on the latest technologies, cleaning methods and solutions for dealing with stains or delicate fabrics."
      />
      <div className="breadcrumb-strip">
        <div className="container-page py-3 text-xs text-ink-500">
          <Link to="/" className="hover:text-brand-700">Home</Link>{" "}
          <span className="mx-2">/</span>{" "}
          <span className="text-ink-700">Who we are</span>
        </div>
      </div>

      <PageHero
        eyebrow={`Since ${site.founded}`}
        title="A few words about us"
        description="We are professionals in the laundry and dry-cleaning business, which means we always stay up to date on the latest technologies, cleaning methods, and solutions for dealing with stains or delicate fabrics. Plus, we maintain the highest standards of business integrity by following local and national regulations and environmental safety rules!"
      />

      {/* === Why Choose Us =================================================== */}
      <section className="section">
        <div className="container-page">
          <h2 className="title-underline">Why Choose Us</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((r) => (
              <article key={r.title} className="card">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
                  <Icon name={r.icon} />
                </span>
                <h3 className="h3 mt-5">{r.title}</h3>
                <p className="mt-2 text-sm text-ink-600">{r.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === Counters ======================================================== */}
      <section
        className="parallax relative py-16 text-white sm:py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,156,220,0.88),rgba(51,214,91,0.88)), url(/images/parallax-img-02.jpg)",
        }}
      >
        <div className="container-page">
          <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {counters.map((c) => (
              <div key={c.label} className="text-center">
                <dd className="font-display text-4xl font-extrabold sm:text-5xl">
                  {c.value}
                </dd>
                <dt className="mt-2 text-sm font-semibold uppercase tracking-wider text-white/85">
                  {c.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* === Our Dream / story ============================================== */}
      <section className="section">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="title-underline-left">Our Dream</h2>
            <p className="lead mt-4">
              We follow a dream — to serve our customers in a way that far
              exceeds expectations. Being one of the leading laundry service
              providers, we know our customers&apos; mindset. It is not easy
              to come home from a hectic day at the office and rush to the
              nearest laundry service with your clothes. So, we have an
              array of services to make things easy for you.
            </p>
            <p className="mt-4 text-ink-700">
              You need not tolerate late deliveries, low standard of work
              merged with high prices. Our services cater to all your
              laundering and ironing, dry cleaning, shoe repairs, upholstery
              cleaning, etc. Our highly efficient employees ensure you face
              no difficulty, the technology we use is state of the art and
              the service we provide is incredibly good.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/services" className="btn-primary">
                For your Home
              </Link>
              <Link to="/commercial" className="btn-secondary">
                For your Business
              </Link>
            </div>
          </div>
          <div className="card">
            <h3 className="h3">News &amp; Press</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-700">
              {site.press.map((p) => (
                <li key={p.href}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand-700"
                  >
                    {p.title} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
