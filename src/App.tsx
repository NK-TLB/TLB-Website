import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Commercial from "./pages/Commercial";
import Locations from "./pages/Locations";
import FAQ from "./pages/FAQ";
import AppDownload from "./pages/AppDownload";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DeleteMyAccount from "./pages/DeleteMyAccount";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/who-we-are" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/what-we-do" element={<Services />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/frequently-asked-questions" element={<FAQ />} />
        <Route path="/app" element={<AppDownload />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/delete-my-account" element={<DeleteMyAccount />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
