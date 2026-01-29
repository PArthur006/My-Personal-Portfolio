import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './ProjectModal.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ProjectModal({ project, onClose }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (project) {
      // Atraso mínimo para garantir que o DOM seja renderizado antes da transição
      const timer = setTimeout(() => setIsOpen(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsOpen(false);
    }
  }, [project]);

  if (!project) {
    return null;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{project.title}</h2>
        <div className="carousel-container">
          <Slider {...settings}>
            {project.carouselImages && project.carouselImages.length > 0 ? (
              project.carouselImages.map((img, index) => (
                <div key={index} className="carousel-image-wrapper">
                  <img src={img} alt={`${project.title} screenshot ${index + 1}`} className="carousel-image" />
                </div>
              ))
            ) : (
              <div className="carousel-image-wrapper">
                <img src={project.imageUrl} alt={project.title} className="carousel-image" />
                <p>Mais imagens serão adicionadas em breve.</p>
              </div>
            )}
          </Slider>
        </div>
        <div className="technologies modal-technologies">
            {project.technologies && project.technologies.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
            ))}
        </div>
        <p>{project.description}</p>
        <div className="project-links">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
            {project.liveUrl !== '#' && 
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Demo</a>
            }
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;