import { useReveal } from "../hooks/useReveal";

/**
 * Wraps any content in a scroll-reveal container.
 * The ref and "reveal" class are managed here so pages
 * can never accidentally misplace them on different elements.
 *
 * Usage:
 *   <RevealSection className="home-stats__inner">
 *     ...children...
 *   </RevealSection>
 */
export default function RevealSection({ as: Tag = "div", className = "", children }) {
  const ref = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </Tag>
  );
}
