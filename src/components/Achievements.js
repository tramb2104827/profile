import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      icon: 'fas fa-users',
      title: 'Executive Committee Member',
      description: 'Youth Union (ICT Faculty)'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Logistics & Financial Management',
      description: 'Organizational roles and responsibilities'
    },
    {
      icon: 'fas fa-robot',
      title: 'STEM & Robotics Education',
      description: 'Community education and outreach'
    }
  ];

  return (
    <section id="achievements" className="achievements">
      <h2 className="section-title">Achievements & Activities</h2>
      <div className="achievements-container">
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-item card">
              <div className="achievement-icon">
                <i className={achievement.icon}></i>
              </div>
              <h4>{achievement.title}</h4>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

