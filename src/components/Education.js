import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <h2 className="section-title">Education</h2>
      <div className="education-container">
        <div className="education-item card">
          <div className="education-header">
            <h3>Bachelor of Computer Networks and Data Communications</h3>
            <span className="education-period">2021 – 2025</span>
          </div>
          <p className="education-institution">Can Tho University</p>
          <div className="education-focus">
            <h4>Academic Focus:</h4>
            <ul>
              <li><i className="fas fa-check-circle"></i> Computer Networks</li>
              <li><i className="fas fa-check-circle"></i> Information Systems</li>
              <li><i className="fas fa-check-circle"></i> Web-based Applications</li>
              <li><i className="fas fa-check-circle"></i> Blockchain fundamentals</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

