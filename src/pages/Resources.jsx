import { useState } from "react";
import { BsPhoneVibrate, BsPen, BsEnvelopeAt } from "react-icons/bs";
import PageBanner    from "../components/PageBanner";
import RevealSection from "../components/RevealSection";
import sections from "../data/resources";
import { LAB_IMG } from "../constants/assets";

import {
  PHONE_HREF, PHONE_DISPLAY,
  EMAIL_HREF, EMAIL_DISPLAY,
  INTAKE_URL
} from "../constants/company";

export default function Resources() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <>
      <PageBanner
        title="Resources"
        subtitle="Forms, protocols, CVs & subpoena templates for legal professionals"
      />

      <RevealSection className="resources-layout">
        {/* Sticky left column */}
        <aside className="resources-layout__aside">
          <img src={LAB_IMG} alt="USAForensic Lab" className="resources-layout__lab-img" />

          <blockquote className="resources-layout__quote">
            &ldquo;When other Forensic Labs can't do it, please give us a call!&rdquo;
          </blockquote>

          {/* Contact icon row */}
          <div className="contact-icons">
            <a href={PHONE_HREF} className="contact-icon-link contact-icon-link--lg" title={PHONE_DISPLAY}>
              <BsPhoneVibrate />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <a href={INTAKE_URL} target="_blank" rel="noopener noreferrer" className="contact-icon-link contact-icon-link--lg" title="Start a Case">
              <BsPen />
              <span>New Case Intake Form</span>
            </a>
            <a href={EMAIL_HREF} className="contact-icon-link contact-icon-link--lg" title={EMAIL_DISPLAY}>
              <BsEnvelopeAt />
              <span>{EMAIL_DISPLAY}</span>
            </a>
          </div>
        </aside>

        {/* Right: accordion */}
        <div className="resources-layout__main">
          <div className="accordion">
            {sections.map((sec, i) => (
              <div key={i} className={`accordion__item${open === i ? " accordion__item--open" : ""}`}>
                <button
                  className="accordion__trigger"
                  onClick={() => toggle(i)}
                  aria-expanded={open === i}
                >
                  <span>{sec.title}</span>
                  <span className="accordion__arrow">{open === i ? "▲" : "▼"}</span>
                </button>
                <div className="accordion__body">
                  <p className="accordion__desc">{sec.desc}</p>
                  <ul className="doc-list">
                    {sec.docs.map((doc, j) => (
                      <li key={j} className="doc-list__item">
                        <a
                          href={doc.file}
                          target={doc.external ? "_blank" : "_blank"}
                          rel="noopener noreferrer"
                          className="doc-list__link"
                        >
                          {doc.name} ↗
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
    </>
  );
}
