import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      type: 'Teaching',
      title: 'STEM Programming Instructor',
      organization: 'Milestones International Education System',
      period: '2025 – Present',
      icon: 'fas fa-chalkboard-teacher',
      items: [
        'Teaching programming & robotics',
        'Coaching Robothon 2025 teams'
      ]
    },
    {
      type: 'Academic & Professional',
      title: 'Tele-admission Assistant',
      organization: 'Can Tho University Software Center',
      period: '2022 – 2023',
      icon: 'fas fa-user-tie',
      items: [
        'Academic consulting',
        'Educational communication support'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item card">
            <div className="experience-header">
              <div className="experience-icon">
                <i className={exp.icon}></i>
              </div>
              <div className="experience-info">
                <span className="experience-type">{exp.type} Experience</span>
                <h3>{exp.title}</h3>
                <p className="experience-organization">{exp.organization}</p>
                <span className="experience-period">{exp.period}</span>
              </div>
            </div>
            <ul className="experience-items">
              {exp.items.map((item, idx) => (
                <li key={idx}>
                  <i className="fas fa-arrow-right"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

