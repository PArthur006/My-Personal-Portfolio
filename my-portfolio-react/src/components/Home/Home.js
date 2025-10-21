import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects';
import BackgroundParticles from '../Background/BackgroundParticles';
import { useTheme } from '../../contexts/ThemeContext';

function Home() {
  const { theme } = useTheme();

  return (
    <>
      <section id="welcome-section">
        <BackgroundParticles theme={theme} />
        <div className="welcome-content">
          <img src="/assets/images/Pedro_Foto_Profissional.jpeg" alt="Foto de Pedro Arthur" className="profile-picture" />
          <h1>Pedro Arthur<br />
            <i className="fas fa-code"></i> Engenheiro de Software <i className="fas fa-code"></i><br /><br />Portfólio Pessoal
          </h1>
        </div>
      </section>
      <About />
      <FeaturedProjects />
      <Contact />
    </>
  );
}

export default Home;