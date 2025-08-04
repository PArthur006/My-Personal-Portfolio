import React from 'react';
import './Courses.css';

function Courses({ courses }) {
  return (
    <section id="courses">
      <h2>Cursos e Certificados</h2>
      <div className="courses-container">
        <div className="cert-list">
          {courses.map((course, index) => (
            <div className="cert-card" key={index} data-aos="fade-up">
              <h4><i className="fas fa-graduation-cap"></i> {course.institution}</h4>
              <ul>
                {course.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;