import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects';
import BackgroundParticles from '../Background/BackgroundParticles';
import { useTheme } from '../../contexts/ThemeContext';
import aboutData from '../../data/aboutData';

function Home() {
  const { theme } = useTheme();

  return (
    <>
      <section id="welcome-section">
        <BackgroundParticles theme={theme} />
        <div className="welcome-content">
          <img src="/assets/images/Pedro_Foto_Profissional.jpeg" alt="Foto de Pedro Arthur" className="profile-picture" />
          {aboutData && aboutData.bioTitle ? (
            <h1 dangerouslySetInnerHTML={{ __html: aboutData.bioTitle }} />
          ) : (
            <h1>Pedro Arthur<br />
              <i className="fas fa-shield-alt"></i> Segurança de Dados <i className="fas fa-shield-alt"></i><br /><br />Portfólio Pessoal
            </h1>
          )}
        </div>
      </section>
      <About />
      <FeaturedProjects />
      <Contact />
    </>
  );
}

export default Home;