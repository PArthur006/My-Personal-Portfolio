import React from 'react';
import './Projects.css';

function Projects({ projects }) {
  return (
    <section id="projects">
      <h2>Meus Projetos</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index} data-aos="fade-up">
            <img src={project.imageUrl} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                {project.liveUrl !== '#' && 
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Demo</a>
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;