import './BaySection.css';
import useReveal from '../hooks/useReveal';

const stages = [
  {
    num: '01',
    title: 'Biological Surveillance',
    desc: 'Rather than waiting for visible deterioration, the system continuously listens to the bay at a molecular level, detecting the arrival or disappearance of pollution-sensitive species long before any water test would catch it.',
  },
  {
    num: '02',
    title: 'Spatial Recovery Map',
    desc: 'Divides the bay into zones, showing in near real-time which areas are teeming with returning life and which remain biologically hollow — turning rehabilitation from a bay-wide assumption into a precise, targeted operation.',
  },
  {
    num: '03',
    title: 'Longitudinal Validation',
    desc: 'Answers the harder question: are the species communities that define a healthy bay actually rebuilding, or are cleaner-looking waters masking an ecosystem that is still functionally collapsed?',
  },
  {
    num: '04',
    title: 'Intervention Forecasting',
    desc: 'Uses the biological fingerprints of stagnant zones to predict where recovery is likely to stall next, so that action can be taken before regression takes hold.',
  },
];

export default function BaySection() {
  const ref = useReveal();

  return (
    <section className="bay-section" ref={ref}>
      <div className="container">
        {/* Section header */}
        <div className="reveal">
          <span className="badge">Manila Bay</span>
        </div>
        <h2 className="reveal delay-1 section-title bay-title">
          Reading the Bay
        </h2>
        <p className="reveal delay-2 bay-subtitle">
          How eDNA Metabarcoding Could Monitor Manila Bay's Recovery
        </p>
        <div className="section-line reveal delay-2" style={{ marginBottom: '2.5rem' }} />

        {/* Context card */}
        <div className="glass-card bay-context-card reveal delay-3">
          <div className="bay-stat-row">
            <div className="bay-stat">
              <span className="bay-stat-num">2019</span>
              <span className="bay-stat-label">Rehabilitation began</span>
            </div>
            <div className="bay-divider" />
            <div className="bay-stat">
              <span className="bay-stat-num">99%</span>
              <span className="bay-stat-label">of mangroves already lost</span>
            </div>
            <div className="bay-divider" />
            <div className="bay-stat">
              <span className="bay-stat-num">↓</span>
              <span className="bay-stat-label">Depleted fish catches</span>
            </div>
          </div>

          <p className="bay-context-text reveal delay-4">
            Manila Bay&apos;s rehabilitation has been underway since 2019, yet{' '}
            <em>water testing alone cannot confirm whether the bay is truly recovering</em>. With fishermen reporting{' '}
            <span className="accent-phrase">depleted catches and murky waters</span>, and{' '}
            <span className="accent-phrase">99% of the bay&apos;s mangroves already lost</span>, the need for a more complete picture of ecological recovery is clear. eDNA metabarcoding offers exactly that — a more powerful and sensitive approach to tracking what&apos;s actually living in the bay and whether biodiversity is genuinely returning.
          </p>
          <p className="citation-tag reveal delay-4">— Ramos, 2023 &amp; Gold et al., 2022</p>
        </div>

        {/* Leverage section */}
        <div className="leverage-header" style={{ marginTop: '4rem' }}>
          <h3 className="reveal delay-1 leverage-title">How We Could Leverage Data</h3>
          <p className="reveal delay-2 leverage-lead">
            By using water and sediment eDNA data as a living scorecard for Manila Bay&apos;s rehabilitation, we propose a computational monitoring system designed around{' '}
            <em>four stages of ecological intelligence</em>{' '}
            — all powered by{' '}
            <span className="accent-phrase">machine learning models capable of processing millions of molecular reads</span>{' '}
            and converting them into a continuous, evidence-based narrative of whether Manila Bay is truly coming back to life.
          </p>
        </div>

        {/* Stages — timeline layout */}
        <div className="stages-list">
          {stages.map((stage, i) => (
            <div key={stage.num} className={`stage-item reveal delay-${i + 2}`}>
              <div className="stage-num-col">
                <div className="stage-num">{stage.num}</div>
                {i < stages.length - 1 && <div className="stage-connector" />}
              </div>
              <div className="glass-card stage-card">
                <h4 className="stage-title">{stage.title}</h4>
                <p className="stage-desc">{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
