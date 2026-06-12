import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";

/**
 * Alternating image + text panel used on Home and Labs pages.
 * Consolidates home-feature (Home.jsx) and lab-feature (Labs.jsx).
 *
 * Usage:
 *   <FeaturePanel
 *     eyebrow="Court-Certified Expertise"
 *     heading="Testimony That Holds Up"
 *     body="..."
 *     bgImage={LAB_IMG}
 *     cta={{ label: "Meet Our Experts", to: "/portfolio" }}
 *     flip={false}
 *   />
 */
export default function FeaturePanel({ eyebrow, heading, body, bgImage, cta, flip = false }) {
  return (
    <section className={`feature-panel${flip ? " feature-panel--flip" : ""}`}>
      <div
        className="feature-panel__img"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="feature-panel__text">
        <SectionHeader eyebrow={eyebrow} heading={heading} />
        <p className="feature-panel__body">{body}</p>
        {cta && (
          <Link to={cta.to} className="btn btn--outline feature-panel__btn">
            {cta.label} →
          </Link>
        )}
      </div>
    </section>
  );
}
