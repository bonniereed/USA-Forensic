import { Link }       from "react-router-dom";
import ParallaxHero  from "../components/ParallaxHero";
import FeaturePanel  from "../components/FeaturePanel";
import RevealSection from "../components/RevealSection";
import CtaStrip      from "../components/CtaStrip";
import { LAB_IMG }   from "../constants/assets";
import { INTAKE_URL } from "../constants/company";

const FEATURES = [
  {
    eyebrow: "Certified Environments",
    heading: "ISO-Class Cleanroom Workstations",
    body: "Our forensic workstations operate in controlled environments designed to prevent contamination of digital evidence. Each station maintains strict chain-of-custody documentation from intake through analysis and final report delivery.",
    flip: false,
  },
  {
    eyebrow: "Chain of Custody",
    heading: "Evidence Handling & Integrity Protocols",
    body: "Every piece of evidence is logged, photographed, and tracked through a documented chain of custody. Our handling procedures comply with federal rules of evidence and have been validated in courts across 23 countries.",
    flip: true,
  },
  {
    eyebrow: "Nationwide Reach",
    heading: "Phoenix, AZ & Detroit, MI Facilities",
    body: "Two fully equipped forensic labs — staffed seven days a week for urgent case support, court-deadline rushes, remote acquisition work, and on-site testimony preparation across all federal and state jurisdictions.",
    flip: false,
  },
];

export default function Lab() {
  return (
    <div className="lab-page">

      {/* ── Parallax Hero ── */}
      <ParallaxHero bgImage={LAB_IMG} eyebrow="USA FORENSIC Lab" showScrollHint>
        <h1 className="parallax-hero__heading">Where Evidence<br />Becomes Truth</h1>
        <p className="parallax-hero__sub">
          State-of-the-art forensic infrastructure built for the demands of modern litigation.
        </p>
      </ParallaxHero>

      {/* ── Feature sections ── */}
      <RevealSection>
        {FEATURES.map((feature, i) => (
          <FeaturePanel key={i} bgImage={LAB_IMG} {...feature} />
        ))}
      </RevealSection>

      {/* ── CTA band ── */}
      <CtaStrip
        bgImage={LAB_IMG}
        heading="Ready to put the lab to work?"
        subtext="Submit a case intake or call us directly — available 7 days a week."
        primaryLabel="Start a Case"
        primaryHref={INTAKE_URL}
        secondaryLabel="View Resources"
        secondaryHref="#/resources"
      />

    </div>
  );
}
