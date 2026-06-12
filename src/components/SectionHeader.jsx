/**
 * Renders the eyebrow label + section heading pair used throughout the site.
 * Replaces all page-scoped *__eyebrow / *__heading duplicates.
 *
 * Usage:
 *   <SectionHeader eyebrow="What We Do" heading="Forensic Services" />
 *   <SectionHeader eyebrow="Our Approach" heading="Evidence First" align="center" />
 */
export default function SectionHeader({ eyebrow, heading, align = "left" }) {
  return (
    <div className="section-header" style={{ textAlign: align }}>
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      {heading && <h2 className="section-heading">{heading}</h2>}
    </div>
  );
}
