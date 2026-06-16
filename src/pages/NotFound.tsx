import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";

export default function NotFound() {
  return (
    <>
      <SEO path="/404" title="Page not found" noindex />
      <section className="relative overflow-hidden bg-hero-radial">
        <Reveal>
          <div className="container-page flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
            <p className="font-display text-7xl font-extrabold text-gradient sm:text-8xl">404</p>
            <h1 className="h2 mt-4">This page went out for a wash</h1>
            <p className="lead mt-4 max-w-md">
              The page you&apos;re looking for couldn&apos;t be found. Let&apos;s get
              you back to clean clothes.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/" className="btn-primary">
                <Icon name="arrow" className="h-4 w-4" />
                Back to home
              </Link>
              <Link to="/contact" className="btn-secondary">Contact us</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
