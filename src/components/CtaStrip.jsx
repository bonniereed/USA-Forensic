export default function CtaStrip({
  heading,
  accentText,
  subtext,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}) {
  return (
    <section className="cta-strip">
      <div className="cta-strip__inner">
        <div className="cta-strip__text">
          <h2 className="cta-strip__heading">
            {heading} <span className="cta-strip__accent">{accentText}</span>
          </h2>
          {subtext && <p className="cta-strip__sub">{subtext}</p>}
        </div>
        <div className="cta-strip__actions">
          {primaryHref && (
            <a
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              {primaryLabel}
            </a>
          )}
          {secondaryHref && (
            <a href={secondaryHref} className="btn btn--outline">
              {secondaryLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
