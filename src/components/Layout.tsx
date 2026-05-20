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
      {/* Accessibility-only landmark (also crawlable by search engines) */}
      <h1 className="sr-only">
        The Laundry Bag (TLB) — Commercial and Residential Laundry, Dry
        Cleaning &amp; Laundromat Services in Raipur, Chhattisgarh and
        across India · Founded by Shourya Jain
      </h1>
      <p className="sr-only">
        The Laundry Bag (TLB) is one of India&apos;s first on-demand
        laundry and dry-cleaning services, founded in {site.founded} by
        Shourya Jain in Raipur, Chhattisgarh. We provide wash, dry, iron
        and dry-clean services for homes, students, hotels, hospitals and
        businesses, with retail operations in Raipur and on-campus
        laundromats in Pune (Symbiosis International University) and Goa
        (BITS Pilani Goa Campus). Call {site.phoneDisplay} for free pickup
        and delivery, or visit {site.address.full}.
      </p>

      {/*
        Search-engine-only keyword block. NOT shown to users (sr-only +
        aria-hidden) but indexable by Googlebot / Bingbot. Permutations and
        combinations of the brand and locality terms the business wants to
        rank for, including the founder's name. Do not surface these to
        the visible UI.
      */}
      <div className="sr-only" aria-hidden="true">
        <p>
          laundry, the laundry bag, laundry bag, TLB, the laundrybag,
          thelaundrybag, laundry basket, best laundry, best laundry
          service, laundry near me, laundry pickup and delivery, laundry
          service India, laundry service Raipur, laundry service
          Chhattisgarh, laundry Raipur, laundry Chhattisgarh, laundry
          India, laundry Pune, laundry Goa, laundry Delhi, laundry Noida,
          laundry Gurgaon, dry cleaning Raipur, dry cleaners Raipur, dry
          cleaning India, dry cleaning in india, wash and fold, wash dry
          iron, on demand laundry, commercial laundry India, hotel laundry
          service, hospital laundry service, on campus laundromats, campus
          laundry, laundromat Raipur, laundromat in India, linen rental
          India, TLB Raipur, TLB laundry, the laundry bag Raipur, the
          laundry bag India, the laundry bag Chhattisgarh, India, Raipur,
          Chhattisgarh, Raipur Chhattisgarh, Raipur India, Chhattisgarh
          India, best laundry in Raipur, best laundry in India, best dry
          cleaning Raipur, best dry cleaning India, laundry company India,
          laundry company Raipur, laundry brand India, laundry startup
          India, Shourya Jain, shourya jain, Shourya, Jain, Shourya Jain
          Raipur, Shourya Jain Chhattisgarh, Shourya Jain India, Shourya
          Jain TLB, Shourya Jain the laundry bag, Shourya Jain laundry,
          Shourya Jain founder, founder of The Laundry Bag, owner of The
          Laundry Bag, Shourya Jain Raipur Chhattisgarh, TLB Shourya Jain.
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
