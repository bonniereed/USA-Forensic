/**
 * Bottom-of-page call-to-action block.
 *
 * Flat mode (default):
 *   <CtaStrip heading="Ready to start?" primaryLabel="Intake Form" primaryHref={INTAKE_URL} />
 *
 * Parallax mode (pass bgImage):
 *   <CtaStrip bgImage={LAB_IMG} heading="Verified Data is Data" ... />
 */
export default function CtaStrip({
  heading,
  accentText,
  subtext,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  bgImage,
}) {
  const actions = (
    <div className="cta-strip__actions">
      {primaryHref && (
        <a href={primaryHref} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
          {primaryLabel}
        </a>
      )}
      {secondaryHref && (
        <a href={secondaryHref} className="btn btn--outline">
          {secondaryLabel}
        </a>
      )}
    </div>
  );

  if (bgImage) {
    return (
      <section className="cta-band" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="cta-band__overlay" />
        <div className="cta-band__inner">
          <h2 className="cta-band__heading">
            {heading}{accentText && <> <span className="cta-strip__accent">{accentText}</span></>}
          </h2>
          {subtext && <p className="cta-band__sub">{subtext}</p>}
          {actions}
        </div>
      </section>
    );
  }

  return (
    <section className="cta-strip">
      <div className="cta-strip__inner">
        <div className="cta-strip__text">
          <h2 className="cta-strip__heading">
            {heading} <span className="cta-strip__accent">{accentText}</span>
          </h2>
          {subtext && <p className="cta-strip__sub">{subtext}</p>}
        </div>
        {actions}
      </div>
    </section>
  );
}
