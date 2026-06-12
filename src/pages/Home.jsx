import { useState, useEffect } from "react";
import RevealSection from "../components/RevealSection";
import SectionHeader from "../components/SectionHeader";
import FeaturePanel  from "../components/FeaturePanel";
import CtaStrip      from "../components/CtaStrip";
import { Link }      from "react-router-dom";
import services      from "../data/services";
import { INTAKE_URL, PHONE_HREF, PHONE_DISPLAY, ATTORNEYS_NOTE, TAGLINE, COURTS } from "../constants/company";
import { LAB_IMG }   from "../constants/assets";

const STATS = [
  { number: "42",     label: "Years Combined Experience" },
  { number: "4,000+", label: "Cases as Forensic Experts" },
  { number: "7",      label: "Days a Week · Nationwide" },
];

const FEATURES = [
  {
    eyebrow: "Court-Certified Expertise",
    heading: "Testimony That Holds Up Under Cross-Examination",
    body: "Our experts have established Daubert Standard admissibility in both federal and state courts across 23 countries. When opposing counsel challenges the science, we've already been through it — and prevailed.",
    cta: { label: "Meet Our Experts", to: "/portfolio" },
    flip: false,
  },
  {
    eyebrow: "Chain of Custody",
    heading: "Evidence Handled With Absolute Integrity",
    body: "Every piece of evidence is documented, tracked, and analyzed using forensically sound procedures. Our findings are reproducible, our methodology is defensible, and our reports are written for the courtroom.",
    cta: { label: "View Resources", to: "/resources" },
    flip: true,
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrentIndex(p => (p + 1) % COURTS.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="home-page">

      {/* ── HERO ── */}
      <section className="home-hero" style={{ backgroundImage: `url(${LAB_IMG})` }}>
        <div className="home-hero__overlay" />
        <div className="home-hero__content">
          <p className="home-hero__eyebrow">
            Cell Phone · Tower · Audio · Photo · Video · Computer Forensics
          </p>
          <span className="home-hero__cert-label">Certified in:&nbsp;</span>
          <div className="home-hero__court-row">
            <span key={currentIndex} className="typewriter home-hero__court-name">
              {COURTS[currentIndex]}
            </span>
          </div>
          <p className="home-hero__sub">
            Forensic experts on over <strong className="home-hero__accent">4,000 cases</strong>
            {" "}· 7 days a week · Nationwide
          </p>
          <div className="home-hero__cta-row">
            <a href={INTAKE_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              Start a Case
            </a>
            <a href={PHONE_HREF} className="btn btn--outline home-hero__phone-btn">
              {PHONE_DISPLAY}
            </a>
          </div>
          <p className="home-hero__note">{ATTORNEYS_NOTE}</p>
          <div className="home-hero__dots">
            {COURTS.map((_, i) => (
              <span
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`home-hero__dot${i === currentIndex ? " home-hero__dot--active" : ""}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── PARALLAX DIVIDER ── */}
      <div
        className="lab-parallax-band lab-parallax-band--grayscale"
        style={{ backgroundImage: `url(${LAB_IMG})` }}
        aria-hidden="true"
      />

      {/* ── SERVICES GRID ── */}
      <section className="home-services">
        <RevealSection className="home-services__inner">
          <SectionHeader eyebrow="What We Do" heading="Forensic Services" />
          <div className="home-services__grid">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <Link key={svc.id} to={`/services#${svc.id}`} className="home-svc-card">
                  <span className="home-svc-card__icon"><Icon /></span>
                  <span className="home-svc-card__title">{svc.title}</span>
                  <span className="home-svc-card__desc">{svc.shortDesc}</span>
                </Link>
              );
            })}
          </div>
        </RevealSection>
      </section>

      {/* ── FEATURE PANELS ── */}
      {FEATURES.map((feature, i) => (
        <FeaturePanel key={i} bgImage={LAB_IMG} {...feature} />
      ))}
              {/* ── STATS BAR ── */}
      <section className="home-stats">
        <RevealSection className="home-stats__inner">
          {STATS.map(({ number, label }) => (
            <div key={label} className="home-stats__item">
              <span className="home-stats__number">{number}</span>
              <span className="home-stats__label">{label}</span>
            </div>
          ))}
        </RevealSection>
      </section>
    </div>
    
  );
}
