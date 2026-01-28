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
            <h3>Bem-vindo ao Meu Perfil!</h3>
            <p>
              Olá! Sou o <strong>Pedro Arthur</strong>, estudante de <strong>Engenharia de Software na UnB</strong> e um construtor de soluções por natureza. Atualmente, atuo como estagiário na <strong>First Decision</strong>, com foco em <strong>Dados, IA e Infraestrutura em Nuvem</strong>, aplicando minha formação de engenheiro para desenhar e implementar sistemas inteligentes, escaláveis e eficientes. 
            </p>
          </div>
          <div className="slide-content">
            <h3>Minha Visão: O Engenheiro Versátil</h3>
            <p>
              Eu acredito na visão sistêmica. Minha formação em Engenharia de Software me dá uma base ampla que vai do <strong>Desenvolvimento Front-End (React, JS)</strong> ao <strong>Back-End (Java, Python)</strong>. Hoje, estou aprofundando meus conhecimentos em <strong>Engenharia de Dados (SQL)</strong> e <strong>Infraestrutura em Nuvem</strong>, o que me permite entender o ciclo de vida completo de uma solução, desde a interface do usuário até a arquitetura dos dados. 
            </p>
          </div>
          <div className="slide-content">
            <h3>Minha Curiosidade Não Para</h3>
            <p>
              Para mim, tecnologia é um campo unificado. Além da minha atuação em dados, sou um entusiasta de <strong>Cibersegurança</strong>, estudando ativamente (Google, Cisco, Linux) para entender como proteger os sistemas que ajudo a construir. Estou sempre em busca de desafios que me permitam conectar essas áreas: desenvolvimento, dados e segurança. <strong>Explore meus projetos</strong> e vamos conversar sobre como podemos inovar juntos.
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