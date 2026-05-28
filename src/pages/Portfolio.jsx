import { useState } from "react";
import { BsCheck2 } from "react-icons/bs";
import PageBanner from "../components/PageBanner";
import CtaStrip  from "../components/CtaStrip";
import { useReveal } from "../hooks/useReveal";
import portfolioData from "../data/portfolio";
import { INTAKE_URL, ATTORNEYS_NOTE } from "../constants/company";

const TABS = ["bryan", "matt"];

export default function Portfolio() {
  const [active, setActive] = useState("bryan");
  const contentRef = useReveal();
  const person = portfolioData[active];

  return (
    <>
      <PageBanner
        title="Our Professionals"
        subtitle="Court-certified experts with decades of real-world forensic experience"
      />

      {/* Tab selector */}
      <div className="tab-bar" role="tablist">
        {TABS.map((key) => (
          <button
            key={key}
            role="tab"
            aria-selected={active === key}
            className={`tab-bar__tab${active === key ? " tab-bar__tab--active" : ""}`}
            onClick={() => setActive(key)}
          >
            {portfolioData[key].name}
          </button>
        ))}
      </div>

      {/* Profile grid */}
      <div ref={contentRef} className="portfolio-grid reveal">
        {/* Sticky photo column */}
        <div className="portfolio-grid__photo">
          {person.images.map((src, i) => (
            <img key={i} src={src} alt={person.name} className="portfolio-grid__img" />
          ))}
          <div className="portfolio-actions">
            <a href={person.cv} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
              Download CV
            </a>
            {person.url && (
              <a href={person.url} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                Learn More ↗
              </a>
            )}
          </div>
        </div>

        {/* Bio column */}
        <div className="portfolio-grid__bio">
          <h2 className="portfolio-grid__name">{person.name}</h2>
          <p className="portfolio-grid__label">{person.label}</p>

          <ul className="credential-list">
            {person.credentials.map((c, i) => (
              <li key={i} className="credential-list__item">
                <BsCheck2 className="credential-list__icon" />
                <span>{c}</span>
              </li>
            ))}
          </ul>

          <div className="portfolio-grid__paragraphs">
            {person.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>

      <CtaStrip
        heading="Work with our experts."
        accentText=""
        subtext={`Complete the intake form to get started. ${ATTORNEYS_NOTE}`}
        primaryLabel="New Case Intake Form"
        primaryHref={INTAKE_URL}
      />
    </>
  );
}
