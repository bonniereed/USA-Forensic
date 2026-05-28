import { useState, useEffect } from "react";
import { INTAKE_URL, PHONE_HREF, PHONE_DISPLAY, ATTORNEYS_NOTE } from "../constants/company";

const courts = [
  "US District Courts",
  "Federal Courts",
  "State Courts",
  "Civil Courts",
  "Military & Aviation Courts",
];

export default function Landing() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % courts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="page-banner landing-banner">

      {/* Eyebrow */}
      <p className="page-banner__eyebrow">
        Cell Phone · Tower · Audio · Photo · Video · Computer Forensics
      </p>

      {/* Animated court type */}
      <span className="landing-cert-label">Certified In:&nbsp;</span>
      <div className="landing-court-row">
        <span key={currentIndex} className="typewriter landing-court-name">
          {courts[currentIndex]}
        </span>
      </div>

      {/* Stat line */}
      <p className="page-banner__subtitle landing-stat">
        Forensic experts on over <strong className="landing-accent">1,000 cases</strong> · 7 days a week · Nationwide
      </p>

      {/* CTA buttons */}
      <div className="landing-cta-row">
        <a href={INTAKE_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
          New Case Intake Form
        </a>
        <a href={PHONE_HREF} className="btn btn--outline landing-phone-btn">
          {PHONE_DISPLAY}
        </a>
      </div>

      {/* Note */}
      <p className="landing-note">{ATTORNEYS_NOTE}</p>

      {/* Dot navigation */}
      <div className="landing-dots">
        {courts.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`landing-dot${i === currentIndex ? " landing-dot--active" : ""}`}
          />
        ))}
      </div>

    </div>
  );
}
