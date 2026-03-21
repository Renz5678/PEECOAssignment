import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import LandSection from './components/LandSection';
import BaySection from './components/BaySection';
import References from './components/References';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="intro">
          <Intro />
        </section>
        <section id="land">
          <LandSection />
        </section>
        <section id="bay">
          <BaySection />
        </section>
        <section id="refs">
          <References />
        </section>
      </main>
    </>
  );
}

export default App;
