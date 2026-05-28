import Landing     from "../components/Landing";
import { useReveal } from "../hooks/useReveal";

export default function Home() {
  const trustRef = useReveal();

  return (
    <>
      <Landing />

      {/* Trust bar */}
      <div ref={trustRef} className="trust-bar reveal">
        <div className="trust-bar__item">
          <span className="trust-bar__number">42</span>
          <span className="trust-bar__label">Years Professional Experience</span>
        </div>
        <div className="trust-bar__item">
          <span className="trust-bar__number">1,000+</span>
          <span className="trust-bar__label">Cases as Forensic Experts</span>
        </div>
        <div className="trust-bar__item">
          <span className="trust-bar__number">2</span>
          <span className="trust-bar__label">State-of-the-Art Lab Locations</span>
        </div>
      </div>

   
    </>
  );
}
