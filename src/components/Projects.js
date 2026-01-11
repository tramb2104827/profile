import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Blockchain-based Online Voting System',
      technologies: ['Blockchain', 'Web API'],
      focus: 'Security, transparency',
      description: 'A secure voting system leveraging blockchain technology to ensure transparency and prevent fraud in electoral processes.'
    },
    {
      title: 'E-commerce Website',
      technologies: ['Client-Server Model', 'API Integration'],
      focus: 'Full-stack development',
      description: 'A comprehensive e-commerce platform with client-server architecture and integrated payment systems.'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card card">
            <h3>{project.title}</h3>
            <div className="project-tech">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
            <p className="project-focus">
              <strong>Focus:</strong> {project.focus}
            </p>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

