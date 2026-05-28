import { Link } from "react-router-dom";
import {
  PHONE_DISPLAY, PHONE_HREF,
  EMAIL_DISPLAY, EMAIL_HREF,
  COMPANY_NAME, TAGLINE,
} from "../constants/company";
import { NAV_LINKS } from "../constants/navigation";
const LOGO  = `${import.meta.env.BASE_URL}assets/usa-forensic.png`;

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src={LOGO} alt="USAForensic" className="footer__logo" />
          <p className="footer__tagline">{TAGLINE}</p>
        </div>

        <div className="footer__contact">
          <a href={PHONE_HREF} className="footer__contact-link">{PHONE_DISPLAY}</a>
          <span className="footer__dot">·</span>
          <a href={EMAIL_HREF} className="footer__contact-link">{EMAIL_DISPLAY}</a>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          {NAV_LINKS.map(({ label, to }) => (
            <Link key={to} to={to} className="footer__nav-link">{label}</Link>
          ))}
        </nav>

        <p className="footer__copy">© {year} {COMPANY_NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
}
