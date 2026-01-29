
import { getFeaturedProjects } from '../../data/projectsData';

function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();
  return (
    <section id="featured-projects">
      <h2>Projetos em Destaque</h2>
      <div className="project-grid">
        {featuredProjects.map((project, index) => (
          <div className="project-card" key={index} data-aos="zoom-in">
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

export default FeaturedProjects;
