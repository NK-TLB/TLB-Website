import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingCTA from "./FloatingCTA";
import { site } from "../data/site";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <h1 className="sr-only">
        The Laundry Bag (TLB), India&apos;s Leading Laundry Service Provider ·
        Commercial Laundry, Dry Cleaning &amp; Linen Management for Hotels &amp;
        Hospitals in Raipur, Chhattisgarh and across India · Founded by Shourya
        Jain
      </h1>
      <p className="sr-only">
        The Laundry Bag (TLB) is India&apos;s Leading Laundry Service Provider,
        founded in {site.founded} by Shourya Jain in Raipur, Chhattisgarh. We
        run commercial laundry, dry-cleaning and linen-management programmes for
        luxury hotels, resorts, hospitals and medical centres, on a
        fully-managed on-premise, central-processing or linen-rental model. From
        our Raipur headquarters and central processing unit we serve leading
        hotels and hospitals across 18 cities. Call {site.phoneDisplay} or
        visit {site.address.full}.
      </p>

      <div className="sr-only" aria-hidden="true">
        <p>
          India&apos;s Leading Laundry Service Provider, the laundry bag, TLB,
          thelaundrybag, commercial laundry India, hotel laundry service,
          hospital laundry service, luxury hotel laundry, hotel linen rental,
          hospital linen management, linen management India, on premise laundry,
          built own operate laundry, dry cleaning Raipur, laundry service India,
          laundry Raipur, laundry Chhattisgarh, Shourya Jain, Shourya Jain
          Raipur, Shourya Jain founder, founder of The Laundry Bag, India,
          Raipur, Chhattisgarh.
        </p>
      </div>

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <Navbar />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
