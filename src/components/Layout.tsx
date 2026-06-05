import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { site } from "../data/site";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <h1 className="sr-only">
        The Laundry Bag (TLB) — Commercial and Residential Laundry, Dry
        Cleaning &amp; Laundromat Services in Raipur, Chhattisgarh and across
        India · Founded by Shourya Jain
      </h1>
      <p className="sr-only">
        The Laundry Bag (TLB) is one of India&apos;s leading on-demand laundry
        and dry-cleaning services, founded in {site.founded} by Shourya Jain in
        Raipur, Chhattisgarh, with co-founders Nalin Agarwal and Honey Jain. We
        provide wash, dry, iron, dry-clean and linen-management services for
        homes, luxury hotels, resorts and hospitals, with retail operations in
        Raipur and laundry &amp; linen programmes for leading hotels and
        hospitals across 20+ cities. Call {site.phoneDisplay} for free pickup
        and delivery, or visit {site.address.full}.
      </p>

      <div className="sr-only" aria-hidden="true">
        <p>
          laundry, the laundry bag, laundry bag, TLB, thelaundrybag, best
          laundry, laundry near me, laundry service India, laundry Raipur,
          laundry Chhattisgarh, dry cleaning Raipur, on demand laundry,
          commercial laundry India, hotel laundry, hospital laundry, luxury
          hotel laundry, hotel linen rental, hospital linen management,
          laundromat Raipur, Shourya Jain, Shourya Jain Raipur, Shourya Jain
          founder, founder of The Laundry Bag, Nalin Agarwal, Honey Jain,
          India, Raipur, Chhattisgarh.
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
    </div>
  );
}
