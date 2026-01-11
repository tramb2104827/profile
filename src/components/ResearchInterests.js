import React from 'react';
import './ResearchInterests.css';

const ResearchInterests = () => {
  const interests = [
    'Information Systems Architecture',
    'Digital Transformation',
    'Secure Web Applications',
    'Blockchain in Public Services',
    'Artificial Intelligence (AI) and Big Data Analysis',
    'Information Security and Data Protection in Digital Systems'
  ];

  return (
    <section id="research" className="research">
      <h2 className="section-title">Research Interests</h2>
      <div className="research-container">
        <div className="research-grid">
          {interests.map((interest, index) => (
            <div key={index} className="research-item card">
              <i className="fas fa-lightbulb"></i>
              <h4>{interest}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchInterests;

