import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Locations = lazy(() => import("./pages/Locations"));
const Clients = lazy(() => import("./pages/Clients"));
const Press = lazy(() => import("./pages/Press"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/Contact"));
const OurTeam = lazy(() => import("./pages/OurTeam"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/who-we-are" element={<About />} />
        <Route path="/our-story" element={<About />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/team" element={<Navigate to="/our-team" replace />} />
        <Route path="/our-teams" element={<Navigate to="/our-team" replace />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/clients-and-press" element={<Navigate to="/clients" replace />} />
        <Route path="/press" element={<Press />} />
        <Route path="/press-coverage" element={<Navigate to="/press" replace />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/frequently-asked-questions" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/contact/thank-you" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
