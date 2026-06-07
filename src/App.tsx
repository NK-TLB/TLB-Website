import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Commercial from "./pages/Commercial";
import Locations from "./pages/Locations";
import Clients from "./pages/Clients";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
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
        <Route path="/commercial" element={<Commercial />} />
        {/* Legacy B2C routes now fold into the B2B services page */}
        <Route path="/services" element={<Navigate to="/commercial" replace />} />
        <Route path="/what-we-do" element={<Navigate to="/commercial" replace />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/frequently-asked-questions" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
