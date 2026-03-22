import './LandSection.css';
import useReveal from '../hooks/useReveal';

const layers = [
  {
    num: '01',
    title: 'Early Warning',
    desc: 'Continuously analyzes shifts in soil biological communities to flag signs of NPP decline before they become visible on the surface.',
  },
  {
    num: '02',
    title: 'Risk Mapping',
    desc: 'A spatial engine that identifies land areas where biological diversity is thinning — producing a living map of ecosystem productivity risk.',
  },
  {
    num: '03',
    title: 'Recovery Validation',
    desc: 'Tracks whether restored or reforested land is genuinely rebuilding soil communities associated with healthy ecosystems.',
  },
  {
    num: '04',
    title: 'Predictive Screening',
    desc: 'Learns from biological signatures of degraded land to anticipate where NPP loss is likely to spread next.',
  },
];

export default function LandSection() {
  const ref = useReveal();

  return (
    <section className="land-section" ref={ref}>
      <div className="container">
        {/* Section header */}
        <div className="reveal">
          <span className="badge">Metabarcoding in Philippine Context</span>
        </div>
        <h2 className="reveal delay-1 section-title land-title">
          Reading the Land
        </h2>
        <p className="reveal delay-2 land-subtitle">
          Net Primary Productivity as a Signal of Environmental Degradation
        </p>
        <div className="section-line reveal delay-2" style={{ marginBottom: '2.5rem' }} />

        {/* NPP intro block */}
        <div className="glass-card npp-card reveal delay-3">
          <div className="npp-icon">🌿</div>
          <p className="npp-text">
            Net Primary Productivity — the rate at which plants convert sunlight into biomass — is one of the most <em>direct measurable indicators of ecosystem health</em>. When forests are cleared for agriculture or land is degraded, NPP declines, reducing the energy and biomass available to support other organisms and disrupting the entire biological community beneath the surface.
          </p>
          <p className="citation-tag">— Biology Online, 2023</p>
        </div>

        {/* How we leverage data */}
        <div className="leverage-header reveal delay-1" style={{ marginTop: '4rem' }}>
          <h3 className="leverage-title">How We Could Leverage Data</h3>
          <p className="leverage-lead reveal delay-2">
            By leveraging soil eDNA metabarcoding data as an <em>indirect indicator of Net Primary Productivity (NPP)</em>, we propose a computational monitoring framework composed of <em>four interconnected layers</em>. Each layer is powered by machine learning models trained on large-scale eDNA sequence datasets, allowing the system to detect subtle shifts in soil biological communities that signal changes in ecosystem productivity.
          </p>
          <p className="leverage-lead reveal delay-3" style={{ marginTop: '1rem' }}>
            Rather than relying on visible signs of degradation, the framework continuously interprets molecular-level data to identify early patterns of decline, map areas of emerging risk, and evaluate whether restoration efforts are genuinely rebuilding healthy ecological conditions. In doing so, it transforms millions of fragmented genetic reads into actionable insights—enabling faster, more precise, and more proactive environmental monitoring than traditional methods alone.
          </p>
        </div>

        {/* Four layers grid */}
        <div className="layers-grid">
          {layers.map((layer, i) => (
            <div key={layer.num} className={`glass-card layer-card reveal delay-${i + 2}`}>
              <div className="layer-num">{layer.num}</div>
              <h4 className="layer-title">{layer.title}</h4>
              <p className="layer-desc">{layer.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
