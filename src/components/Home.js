import React from 'react';
import './Home.css';

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="home-content fade-in">
          <h1 className="home-name">Duong Thi Bich Tram</h1>
          <p className="home-title">Master's Applicant in Information Systems</p>
          <p className="home-bio">
            A graduate in Computer Networks and Data Communications from Can Tho University. 
            Currently working as a STEM programming instructor while pursuing advanced academic 
            training in Information Systems.
          </p>
          <div className="home-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('portfolio')}
            >
              <i className="fas fa-folder-open"></i> View Portfolio
            </button>
            <a 
              href="#portfolio" 
              className="btn btn-outline"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('portfolio');
              }}
            >
              <i className="fas fa-download"></i> Download CV
            </a>
          </div>
        </div>
        <div className="home-scroll">
          <a href="#about" onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}>
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

