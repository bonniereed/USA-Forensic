import { Routes, Route } from "react-router-dom";
import Home      from "../pages/Home";
import About     from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Services  from "../pages/Services";
import Resources from "../pages/Resources";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/"          element={<Home />} />
      <Route path="/about"     element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/services"  element={<Services />} />
      <Route path="/resources" element={<Resources />} />
    </Routes>
  );
}
