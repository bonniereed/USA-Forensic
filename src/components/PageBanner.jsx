export default function PageBanner({ title, subtitle }) {
  return (
    <section className="page-banner">
      <div className="page-banner__content">
        <h1 className="page-banner__title">{title}</h1>
        {subtitle && <p className="page-banner__subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
