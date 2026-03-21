import './References.css';
import useReveal from '../hooks/useReveal';

const refs = [
  {
    id: 'r1',
    apa: 'Biology Online. (2023, August 25). Net primary productivity - Definition and Examples - Biology Online Dictionary. Biology Articles, Tutorials & Dictionary Online.',
    url: 'https://www.biologyonline.com/dictionary/net-primary-productivity',
  },
  {
    id: 'r2',
    apa: 'Gold, Z., Wall, A. R., Schweizer, T. M., Pentcheff, N. D., Curd, E. E., Barber, P. H., Meyer, R. S., Wayne, R., Stolzenbach, K., Prickett, K., Luedy, J., & Wetzer, R. (2022). A manager\'s guide to using eDNA metabarcoding in marine ecosystems. PeerJ, 10, e14071.',
    url: 'https://doi.org/10.7717/peerj.14071',
  },
  {
    id: 'r3',
    apa: 'Liang, X., Yang, X., Sha, N., Wang, J., Qiu, G., & Chang, M. (2025). Application of eDNA metabarcoding technology to monitor the health of aquatic ecosystems. Water, 17(8), 1109.',
    url: 'https://doi.org/10.3390/w17081109',
  },
  {
    id: 'r4',
    apa: 'Marín, D. M., Lasso, C. A., & Gaitan, S. J. C. (2024). eDNA metabarcoding: an effective tool for vertebrate diversity studies in the Colombian Amazon and Orinoco basins. Frontiers in Ecology and Evolution, 12.',
    url: 'https://doi.org/10.3389/fevo.2024.1409296',
  },
  {
    id: 'r5',
    apa: 'Ramos, D. (2023, June 19). Manila Bay: The environmental impact of land reclamation. Earth.Org.',
    url: 'https://earth.org/manila-bay/',
  },
];

export default function References() {
  const ref = useReveal();

  return (
    <section className="refs-section" ref={ref}>
      <div className="container">
        <div className="reveal">
          <span className="badge">Sources</span>
        </div>
        <h2 className="reveal delay-1 refs-title">References</h2>
        <div className="section-line reveal delay-2" />

        <ol className="refs-list">
          {refs.map((r, i) => (
            <li key={r.id} className={`ref-item reveal delay-${i + 2}`}>
              <div className="ref-body">
                <p className="ref-text">{r.apa}</p>
                <a href={r.url} target="_blank" rel="noreferrer" className="ref-link">
                  {r.url}
                </a>
              </div>
            </li>
          ))}
        </ol>

        <div className="footer-brand reveal delay-5">
          <div className="footer-line" />
          <p className="footer-copy">
            The Archipelago&apos;s Digital Blueprint &mdash; Big Data for Environmental Science
          </p>
        </div>
      </div>
    </section>
  );
}
