
import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects';

function Home() {
  return (
    <>
      <section id="welcome-section">
        <h1>Pedro Arthur<br />
          <i className="fas fa-code"></i> Desenvolvedor Front-End <i className="fas fa-code"></i><br /><br />Portfólio Pessoal
        </h1>
      </section>
      <About />
      <FeaturedProjects />
      <Contact />
    </>
  );
}

export default Home;
