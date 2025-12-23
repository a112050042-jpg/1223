
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CallForEntries from './components/CallForEntries';
import Schedule from './components/Schedule';
import Venue from './components/Venue';
import Footer from './components/Footer';
import GoTopButton from './components/GoTopButton';
import { CONFIG } from './constants';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-white selection:text-black">
      <Header />
      
      <main>
        <section id="hero">
          <Hero data={CONFIG.hero} />
        </section>
        
        <section id="about">
          <About data={CONFIG.intro} />
        </section>
        
        <section id="selection">
          <CallForEntries data={CONFIG.selection} />
        </section>
        
        <section id="schedule">
          <Schedule />
        </section>
        
        <section id="venue">
          <Venue />
        </section>
      </main>

      <Footer />
      <GoTopButton visible={isScrolled} />
    </div>
  );
};

export default App;
