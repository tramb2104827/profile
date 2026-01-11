import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ResearchInterests from './components/ResearchInterests';
import Achievements from './components/Achievements';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'experience', 'projects', 'research', 'achievements', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navigation activeSection={activeSection} />
      <main>
        <Home />
        <About />
        <Education />
        <Experience />
        <Projects />
        <ResearchInterests />
        <Achievements />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;

