import { useState } from "react";
import PageBanner from "../components/PageBanner";
import CtaStrip  from "../components/CtaStrip";
import { useReveal } from "../hooks/useReveal";
import services from "../data/services";
import { INTAKE_URL, PHONE_HREF, PHONE_DISPLAY, ATTORNEYS_NOTE } from "../constants/company";

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const contentRef = useReveal();

  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="Court-certified forensic analysis — video, audio, computer, mobile & more"
      />

      {/* Desktop tab bar */}
      <div className="tab-bar" role="tablist">
        {services.map((svc, i) => {
          const Icon = svc.icon;
          return (
            <button
              key={i}
              role="tab"
              aria-selected={activeTab === i}
              className={`tab-bar__tab${activeTab === i ? " tab-bar__tab--active" : ""}`}
              onClick={() => setActiveTab(i)}
            >
              {Icon && <span className="tab-bar__icon"><Icon /></span>}
              <span>{svc.title}</span>
            </button>
          );
        })}
      </div>

      {/* Mobile select */}
      <div className="tab-select-wrap">
        <select
          className="tab-select"
          value={activeTab}
          onChange={(e) => setActiveTab(Number(e.target.value))}
        >
          {services.map((svc, i) => (
            <option key={i} value={i}>{svc.title}</option>
          ))}
        </select>
      </div>

      {/* Active service detail */}
      <div ref={contentRef} className="service-detail reveal">
        {services.map((svc, i) => {
          const Icon = svc.icon;
          if (i !== activeTab) return null;
          return (
            <div key={i} className="service-detail__panel">
              <div className="service-detail__header">
                {Icon && <span className="service-detail__icon"><Icon /></span>}
                <div>
                  <h2 className="service-detail__title">{svc.title}</h2>
                  <p className="service-detail__short">{svc.shortDesc}</p>
                </div>
              </div>

              <div className="service-detail__body">
                {svc.description.map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>

              {svc.relatedDocs && (
                <p className="service-detail__related">
                  Related forms: <a href="/resources" className="link-accent">{svc.relatedDocs} →</a>
                </p>
              )}
            </div>
          );
        })}
      </div>

      <CtaStrip
        heading="Ready to start a case?"
        accentText=""
        subtext={`Call us 7 days a week or complete the online intake form. ${ATTORNEYS_NOTE}`}
        primaryLabel="New Case Intake Form"
        primaryHref={INTAKE_URL}
        secondaryLabel={`Call ${PHONE_DISPLAY}`}
        secondaryHref={PHONE_HREF}
      />
    </>
  );
}
