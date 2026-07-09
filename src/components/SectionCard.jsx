export default function SectionCard({ eyebrow, title, children, className = "" }) {
  return (
    <section className={`section-card ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && <h2>{title}</h2>}
      <div className="section-body">{children}</div>
    </section>
  );
}
