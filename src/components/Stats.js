import React from 'react';
import './Stats.css';
import AnimatedCounter from './AnimatedCounter';
import ScrollAnimation from './ScrollAnimation';

const Stats = () => {
  const stats = [
    { number: 4, suffix: '+', label: 'Years of Study' },
    { number: 2, suffix: '+', label: 'Years Experience' },
    { number: 6, suffix: '', label: 'Research Interests' },
    { number: 2, suffix: '', label: 'Major Projects' }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <ScrollAnimation key={index} animation="fadeInUp" delay={index * 100}>
              <div className="stat-item">
                <div className="stat-number">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

