import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import SEO from "../components/SEO";
import { site } from "../data/site";

const features = [
  {
    icon: "truck",
    title: "Schedule a pickup",
    description:
      "Pick a slot that works for you — we'll be there, on time, free of cost.",
  },
  {
    icon: "check",
    title: "Track every order",
    description:
      "Real-time status from pickup to delivery so you're never in the dark.",
  },
  {
    icon: "shield",
    title: "Pay securely",
    description:
      "UPI, cards and wallets — all from inside the app, with digital receipts.",
  },
  {
    icon: "sparkle",
    title: "Earn rewards",
    description:
      "Loyalty points, referral bonuses and seasonal offers — only on the app.",
  },
];

export default function AppDownload() {
  return (
    <>
      <SEO
        path="/app"
        title="Download the App — Schedule pickups, pay &amp; track orders"
        description="The LaundryBag app — schedule laundry pickups, pay securely, track every order and reach support. Available on Android and iOS."
      />
      <PageHero
        eyebrow="Our app"
        title="The Laundry Bag in your pocket."
        description="Schedule pickups, pay, track orders and reach support — all from one app. Available on Android and iOS."
      >
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <a
            href={site.android}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center"
          >
            <img
              src="/images/Get_it_on_Google_play.svg"
              alt="Get it on Google Play"
              className="h-12 w-auto"
            />
          </a>
          <a
            href={site.ios}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center"
          >
            <img
              src="/images/apple_btn_135x40.svg"
              alt="Download on the App Store"
              className="h-12 w-auto"
            />
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 grid gap-6 sm:grid-cols-2 lg:order-1">
            {features.map((f) => (
              <article key={f.title} className="card">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
                  <Icon name={f.icon} />
                </span>
                <h3 className="h3 mt-5">{f.title}</h3>
                <p className="mt-2 text-sm text-ink-600">{f.description}</p>
              </article>
            ))}
          </div>

          <div className="order-1 mx-auto w-full max-w-sm lg:order-2">
            <div className="relative aspect-[9/16] rounded-[2.5rem] border-8 border-ink-900 bg-ink-900 shadow-soft">
              <div className="absolute inset-2 overflow-hidden rounded-[2rem] bg-hero-gradient">
                <div className="absolute left-1/2 top-3 h-5 w-24 -translate-x-1/2 rounded-full bg-ink-900" />
                <div className="px-5 pt-14">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                    Good evening, Nikhil
                  </p>
                  <h3 className="font-display text-2xl font-extrabold text-ink-900">
                    Schedule a pickup
                  </h3>
                  <div className="mt-4 rounded-2xl bg-white p-4 shadow-soft">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider text-ink-500">
                        Today · 5:30 PM
                      </span>
                      <span className="text-xs font-semibold text-accent-600">
                        Free pickup
                      </span>
                    </div>
                    <p className="mt-2 font-display text-lg font-bold text-ink-900">
                      Wash & fold · 4.2 kg
                    </p>
                    <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-ink-100">
                      <div className="h-full w-2/3 rounded-full bg-brand-600" />
                    </div>
                    <p className="mt-1 text-xs text-ink-500">
                      Driver on the way — ETA 12 min
                    </p>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {["Wash", "Iron", "Dry Clean"].map((label) => (
                      <div
                        key={label}
                        className="rounded-xl bg-white p-3 text-center text-xs font-semibold text-ink-700 shadow-soft"
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
