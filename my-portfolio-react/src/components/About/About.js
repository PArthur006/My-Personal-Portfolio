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
  { name: 'Node.js', IconComponent: FaNodeJs },
  { name: 'Python', IconComponent: FaPython },
  { name: 'Java', IconComponent: FaJava },
  { name: 'Git', IconComponent: FaGitAlt },
  { name: 'C', textIcon: 'C' }, // Fallback para texto
  { name: 'C++', textIcon: 'C++' }, // Fallback para texto
  { name: 'Godot Engine', IconComponent: SiGodotengine },
  { name: 'Linux', IconComponent: FaLinux },
  { name: 'Figma', IconComponent: FaFigma },
  { name: 'SQL', IconComponent: FaDatabase },
  { name: 'Docker', IconComponent: FaDocker },
  { name: 'JSON', IconComponent: SiJson },
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
            <h3>Bem-vindo ao Meu Mundo Digital!</h3>
            <p>
              Olá! Sou o <strong>Pedro Arthur</strong>, estudante de <strong>Engenharia de Software na UnB</strong> e um entusiasta apaixonado por construir a ponte entre a lógica dos sistemas e a experiência humana. Meu foco é o <strong>desenvolvimento Front-End com React e JavaScript</strong>, onde eu aplico o raciocínio analítico da engenharia para criar interfaces que não são apenas bonitas, mas também intuitivas, eficientes e robustas.
            </p>
          </div>
          <div className="slide-content">
            <h3>Como eu penso</h3>
            <p>
              Eu trabalho com a mentalidade de um <strong>profissional "T"</strong>: profundo em uma especialidade, com uma ampla base de conhecimento. Minha profundidade está no <strong>Front-End</strong>, mas minha base em <strong>Back-End com Java e Python</strong> me permite entender o ciclo de vida completo de uma aplicação. Essa visão sistêmica me capacita a construir interfaces que se integram perfeitamente com as regras de negócio e a infraestrutura, resultando em produtos mais coesos e escaláveis.
            </p>
          </div>
          <div className="slide-content">
            <h3>O que eu construo</h3>
            <p>
              Para mim, a teoria só ganha vida quando se transforma em um projeto real. Seja desenvolvendo um sistema de gestão em Java ou um portal de reservas em Python, meu objetivo é sempre o mesmo: aplicar a tecnologia para resolver problemas de forma criativa e entregar valor. Estou sempre em busca de novos desafios e colaborações. <strong>Explore meus projetos</strong> e vamos conversar sobre como podemos construir algo incrível juntos.
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