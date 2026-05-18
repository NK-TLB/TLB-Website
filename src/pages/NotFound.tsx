import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
    <SEO path="/404" title="Page not found" noindex />
    <section className="bg-hero-gradient">
      <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <span className="eyebrow">404</span>
        <h1 className="h1 mt-4">This page took a tumble in the dryer.</h1>
        <p className="lead mt-4 max-w-xl">
          We couldn't find what you were looking for. Let's get you back to
          something clean.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary">
            Back to home
          </Link>
          <Link to="/contact" className="btn-secondary">
            Contact us
          </Link>
        </div>
      </div>
    </section>
    </>
  );
}
