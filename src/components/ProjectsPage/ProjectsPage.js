import React, { useState, useEffect } from 'react';
import { projectsData } from '../../data/projectsData';
import coursesData from '../../data/coursesData';
import Courses from '../Courses/Courses';
import Projects from '../Projects/Projects';
import ProjectModal from '../ProjectModal/ProjectModal';
import AOS from 'aos';
import './ProjectsPage.css';
import Certifications from '../Certifications/Certifications';

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('Data & Infrastructure');
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
  const categoryBlock = coursesData.find(c => c.category === activeCategory);
  const filteredCourses = (categoryBlock && categoryBlock.companies)
    ? categoryBlock.companies.map(comp => ({ institution: comp.name, items: comp.items }))
    : [];

  return (
    <div className="portfolio-page">
      <div className="category-tabs" data-aos="fade-down">
        <button onClick={() => handleCategoryChange('Data & Infrastructure')} className={activeCategory === 'Data & Infrastructure' ? 'active' : ''}>Data & Infrastructure</button>
        <button onClick={() => handleCategoryChange('Software Engineering')} className={activeCategory === 'Software Engineering' ? 'active' : ''}>Software Engineering</button>
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
