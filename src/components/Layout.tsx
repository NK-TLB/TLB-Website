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
        The LaundryBag — On-Demand Laundry, Dry Cleaning &amp; Commercial
        Laundry Service in Raipur, Pune and Goa, India
      </h1>
      <p className="sr-only">
        The LaundryBag (TLB) is one of India&apos;s first on-demand laundry
        and dry-cleaning services, founded in {site.founded}. We provide
        wash, dry, iron and dry-clean services for homes, students, hotels,
        hospitals and businesses, with retail operations in Raipur and
        on-campus laundromats in Pune and Goa. Call {site.phoneDisplay} for
        free pickup and delivery, or visit {site.address.full}.
      </p>

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
