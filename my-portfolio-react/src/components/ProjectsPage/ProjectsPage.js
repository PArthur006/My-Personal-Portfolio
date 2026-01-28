import React, { useState, useEffect } from 'react';
import { projectsData } from '../../data/projectsData';
import coursesData from '../../data/coursesData';
import Courses from '../Courses/Courses';
import Projects from '../Projects/Projects';
import Certifications from './Certifications/Certifications';
import ProjectModal from '../ProjectModal/ProjectModal';
import AOS from 'aos';
import './ProjectsPage.css';


function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('Front-End');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.refresh();
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const filteredProjects = projectsData.filter(project => project.category === activeCategory);
  const filteredCourses = coursesData[activeCategory] || [];

  return (
    <div className="portfolio-page">
      <div className="category-tabs" data-aos="fade-down">
        <button onClick={() => handleCategoryChange('Front-End')} className={activeCategory === 'Front-End' ? 'active' : ''}>Front-End</button>
        <button onClick={() => handleCategoryChange('Back-End')} className={activeCategory === 'Back-End' ? 'active' : ''}>Back-End</button>
        {/* Botão Game Dev removido */}
      </div>
      <div key={activeCategory} data-aos="fade-up">
        <Courses courses={filteredCourses} />
        <Projects 
          projects={filteredProjects} 
          onProjectClick={handleProjectClick} 
        />
        <Certifications />
      </div>
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </div>
  );
}

export default ProjectsPage;
