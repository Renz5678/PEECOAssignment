import './Hero.css';
import useReveal from '../hooks/useReveal';

export default function Hero() {
  const ref = useReveal();

  return (
    <section className="hero" ref={ref}>
      {/* Animated background particles */}
      <div className="hero-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="grid-overlay" />
      </div>

      <div className="container hero-content">
        {/* Top label */}
        <div className="reveal delay-1">
          <span className="badge">Big Data × Environmental Science</span>
        </div>

        {/* Main title */}
        <h1 className="reveal delay-2 hero-title">
          The Sequence of
          <br />
          <span className="hero-title-accent">Life and Beyond</span>
        </h1>

        {/* Subline */}
        <p className="reveal delay-3 hero-lead">
          eDNA metabarcoding is a high-speed genetic &ldquo;health check&rdquo; for the planet. By sequencing the DNA traces that organisms naturally leave behind in water or soil, this technology identifies entire biological communities from a single sample—offering a faster, cheaper, and more accurate way to monitor biodiversity and pollution than traditional field surveys.
        </p>
        <p className="reveal delay-4 hero-citation">
          — Liang et al., 2025
        </p>

        {/* Scroll cue */}
        <div className="reveal delay-5 scroll-cue">
          <div className="scroll-line" />
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
