/**
 * Full-bleed parallax hero section.
 * Consolidates home-hero (Home.jsx) and lab-hero (Labs.jsx) into one component.
 *
 * Usage:
 *   <ParallaxHero bgImage={LAB_IMG} eyebrow="USA FORENSIC Lab" showScrollHint>
 *     <h1 className="parallax-hero__heading">Where Evidence Becomes Truth</h1>
 *     <p className="parallax-hero__sub">...</p>
 *   </ParallaxHero>
 */
export default function ParallaxHero({ bgImage, eyebrow, showScrollHint = false, children }) {
  return (
    <section
      className="parallax-hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="parallax-hero__overlay" />
      <div className="parallax-hero__content">
        {eyebrow && <p className="section-eyebrow parallax-hero__eyebrow">{eyebrow}</p>}
        {children}
      </div>
      {showScrollHint && (
        <div className="parallax-hero__scroll-hint" aria-hidden="true">↓</div>
      )}
    </section>
  );
}
