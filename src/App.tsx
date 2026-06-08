import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Locations from "./pages/Locations";
import Clients from "./pages/Clients";
import Press from "./pages/Press";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/who-we-are" element={<About />} />
        <Route path="/our-story" element={<About />} />
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
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
