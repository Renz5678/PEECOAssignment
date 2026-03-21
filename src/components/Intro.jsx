import './Intro.css';
import useReveal from '../hooks/useReveal';

export default function Intro() {
  const ref = useReveal();

  return (
    <section className="intro-section" ref={ref}>
      <div className="container">
        <div className="intro-grid">
          {/* Left: visual accent column */}
          <div className="intro-visual reveal-left">
            <div className="dna-icon-wrap">
              <svg viewBox="0 0 80 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="dna-svg">
                {/* DNA double helix simplified paths */}
                <path d="M20 5 Q60 25 20 45 Q60 65 20 85 Q60 105 20 125 Q60 145 20 165"
                  stroke="url(#green-grad)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M60 5 Q20 25 60 45 Q20 65 60 85 Q20 105 60 125 Q20 145 60 165"
                  stroke="url(#tan-grad)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                {/* Cross-links */}
                {[20, 45, 70, 95, 120, 145].map((y, i) => (
                  <line key={i} x1="20" y1={y} x2="60" y2={y}
                    stroke="rgba(143,179,74,0.4)" strokeWidth="1.5" strokeDasharray="4 2"/>
                ))}
                <defs>
                  <linearGradient id="green-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8fb34a"/>
                    <stop offset="100%" stopColor="#4e6b1f"/>
                  </linearGradient>
                  <linearGradient id="tan-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#c9a87a"/>
                    <stop offset="100%" stopColor="#7a5c2e"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="stat-bubble delay-2 reveal">
              <span className="stat-num">1×</span>
              <span className="stat-label">sample</span>
              <span className="stat-desc">identifies entire communities</span>
            </div>
          </div>

          {/* Right: text content */}
          <div className="intro-text">
            <div className="reveal delay-1">
              <span className="badge">How It Works</span>
            </div>
            <h2 className="reveal delay-2 section-title">
              A Single Sample,<br /> Countless Voices
            </h2>
            <div className="section-line reveal delay-2" />

            <p className="reveal delay-3">
              Every organism leaves behind traces — shed skin, mucus, and waste — which remain in water and soil. eDNA metabarcoding uses these genetic traces by sequencing them from a single environmental sample to identify many species at once.
            </p>

            <p className="reveal delay-4">
              In Colombia, this method detected a wider range of vertebrate species in aquatic environments than traditional surveys, including rare and hard-to-detect species that are often missed. This shows that eDNA metabarcoding is a faster, more cost-effective, and more sensitive way to monitor biodiversity and ecosystem health.
            </p>

            <p className="reveal delay-5">
              Since each sample can produce millions of molecular reads, the real strength of this technology depends on how effectively that data is analyzed and used.
            </p>

            <p className="reveal delay-5 citation-tag">— Marín et al., 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
}
