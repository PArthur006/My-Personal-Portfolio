import React from "react";
import Slider from "react-slick";
import "./About.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Importando ícones da react-icons
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaLinux, FaFigma, FaDatabase, FaDocker } from 'react-icons/fa';
import { SiGodotengine, SiJson } from 'react-icons/si'; 
import { DiJavascript1 } from 'react-icons/di'; 

const skillsData = [
  { name: 'HTML5', IconComponent: FaHtml5 },
  { name: 'CSS3', IconComponent: FaCss3Alt },
  { name: 'JavaScript', IconComponent: DiJavascript1 },
  { name: 'React', IconComponent: FaReact },
  { name: 'JSON', IconComponent: SiJson },
  { name: 'Node.js', IconComponent: FaNodeJs },
  { name: 'Python', IconComponent: FaPython },
  { name: 'Java', IconComponent: FaJava },
  { name: 'C', textIcon: 'C' }, // Fallback para texto
  { name: 'C++', textIcon: 'C++' }, // Fallback para texto
  { name: 'C#', textIcon: 'C#' },
  { name: '.NET', textIcon: '.NET' },
  { name: 'Linux', IconComponent: FaLinux },
  { name: 'Godot Engine', IconComponent: SiGodotengine },
  { name: 'Git', IconComponent: FaGitAlt },
  { name: 'Docker', IconComponent: FaDocker },
  { name: 'SQL', IconComponent: FaDatabase },
  { name: 'Figma', IconComponent: FaFigma },
];

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
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-item" key={index}>
              {skill.IconComponent ? (
                <skill.IconComponent size={48} />
              ) : (
                <span className="skill-text-icon">{skill.textIcon}</span>
              )}
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;