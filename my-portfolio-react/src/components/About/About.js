import React from "react";
import Slider from "react-slick";
import "./About.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Importando ícones da react-icons
import skillsData from '../../data/skillsData';

function About() {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 20000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };

  return (
    <section id="about" data-aos="fade-up">
      <h2>Sobre Mim</h2>
      <div className="carousel-container">
        <Slider {...settings}>
          <div className="slide-content">
            <h3>🏛️ Formação e Carreira</h3>
            <p>
              <strong>Focado em Engenharia de Dados e Segurança</strong>.<br/>Minha trajetória é pautada pela transição do desenvolvimento técnico para a arquitetura de soluções robustas.
            </p>
            <ul>
              <li><strong>UnB:</strong> Estudante de Engenharia de Software.</li>
              <li><strong>First Decision:</strong> Estagiário em Migração de Dados, IA e Nuvem.</li>
              <li><strong>SENAI:</strong> Qualificação Profissional em Desenvolvimento Full-Stack.</li>
            </ul>
          </div>

          <div className="slide-content">
            <h3>⚙️ Engenharia de Dados e Infraestrutura</h3>
            <p>
              Utilizei o <strong>Desenvolvimento Web (React)</strong> para entender a interface, mas hoje meu foco está onde o valor real reside: na <strong>Engenharia de Dados e Nuvem</strong>.
            </p>
            <p>
              Especializo-me em <strong>SQL, ETL e Cloud Computing</strong> para garantir que a informação seja processada de forma escalável e eficiente, sustentando decisões inteligentes de negócio.
            </p>
          </div>

          <div className="slide-content">
            <h3>🛡️ Foco: Segurança de Dados</h3>
            <p>
              O dado só tem valor se estiver protegido. Estudo ativamente <strong>Cibersegurança</strong> (Cisco, Google, Linux) para integrar a segurança desde a concepção do código até o armazenamento final.
            </p>
            <p>
              Meu objetivo é a <strong>Segurança de Dados</strong>, unindo a visão do software com a proteção de infraestruturas críticas (SAP e Cloud). <strong>Explore meus projetos técnicos abaixo.</strong>
            </p>
          </div>
        </Slider>
      </div>

      <div className="skills-section" data-aos="fade-up">
        <h3>Minhas Habilidades Técnicas</h3>
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          arrows={false}
          autoplay={true}
          autoplaySpeed={10000}
          className="skills-categories-carousel"
        >
          {skillsData.map((category, idx) => {
            const skillPairs = [];
            for (let i = 0; i < category.skills.length; i += 2) {
              skillPairs.push(category.skills.slice(i, i + 2));
            }
            return (
              <div className="skills-category-slide" key={idx}>
                <h4>{category.category}</h4>
                <div className="skills-list-pairs">
                  {skillPairs.map((pair, pairIdx) => (
                    <div className="skills-row" key={pairIdx} style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                      {pair.map((skill, index) => (
                        <div className="skill-item" key={index} style={{ flex: 1, minWidth: 0, margin: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          {skill.IconComponent ? (
                            <skill.IconComponent size={40} />
                          ) : (
                            <span className="skill-text-icon">{skill.textIcon}</span>
                          )}
                          <span className="skill-name">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

export default About;