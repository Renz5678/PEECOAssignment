import { useState, useEffect } from 'react';
import './Navbar.css';
import iconUrl from '../assets/icon.png';

const navLinks = [
  { href: '#intro', label: 'About' },
  { href: '#land', label: 'Land & NPP' },
  { href: '#bay', label: 'Manila Bay' },
  { href: '#refs', label: 'References' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="nav-brand" onClick={(e) => handleNav(e, 'body')}>
          <img src={iconUrl} alt="Logo" className="nav-brand-icon" />
          <span className="nav-brand-text">Archipelago's Blueprint</span>
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => handleNav(e, l.href)} className="nav-link">
                {l.label}
              </a>
            </li>
          ))}
          <li className="nav-submitter">
            Submitted by: Lawrenz Matthew P. Garcia
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} className="mobile-link" onClick={(e) => handleNav(e, l.href)}>
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
