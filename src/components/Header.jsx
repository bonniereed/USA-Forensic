import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../constants/navigation";

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <nav className={`nav${scrolled ? " nav--scrolled" : ""}`}>
      <Link to="/" onClick={close} className="nav__logo">USA FORENSIC</Link>
      <div className={`nav__links${menuOpen ? " nav__links--open" : ""}`}>
        {NAV_LINKS.map(({ label, to }) => (
          <Link key={to} to={to} onClick={close}>{label}</Link>
        ))}
      </div>
      <button
        className="nav__hamburger"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </nav>
  );
}
