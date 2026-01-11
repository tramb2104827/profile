import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        <div className="about-content card">
          <p className="about-text">
            I am a graduate in Computer Networks and Data Communications from Can Tho University. 
            I am currently working as a STEM programming instructor while pursuing advanced academic 
            training in Information Systems.
          </p>
          <div className="about-info">
            <div className="info-item">
              <i className="fas fa-flag"></i>
              <div>
                <strong>Nationality:</strong>
                <span>Vietnamese</span>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-graduation-cap"></i>
              <div>
                <strong>Field:</strong>
                <span>Information Systems & Computer Networks</span>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-chalkboard-teacher"></i>
              <div>
                <strong>Current Role:</strong>
                <span>STEM Programming Instructor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

