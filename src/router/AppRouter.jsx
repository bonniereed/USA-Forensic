import { Routes, Route } from "react-router-dom";
import Home      from "../pages/Home";
import Contact     from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Services  from "../pages/Services";
import Resources from "../pages/Resources";
import Labs      from "../pages/Labs"

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/"           element={<Home />} />
      <Route path="/contact"    element={<Contact />} />
      <Route path="/portfolio"  element={<Portfolio />} />
      <Route path="/services"   element={<Services />} />
      <Route path="/resources"  element={<Resources />} />
      <Route path="/labs"       element={<Labs />} />
    </Routes>
  );
}
