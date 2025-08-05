import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" data-aos="fade-up">
      <h2>Sobre Mim</h2>
      <div className="about-content">
        <h3>Bem-vindo ao Meu Mundo Digital!</h3>
        <p>
          Olá! Sou o <strong>Pedro Arthur</strong>, estudante de Engenharia de Software na UnB e um entusiasta apaixonado por construir a ponte entre a lógica dos sistemas e a experiência humana. Meu foco é o <strong>desenvolvimento Front-End com React e JavaScript</strong>, onde eu aplico o raciocínio analítico da engenharia para criar interfaces que não são apenas bonitas, mas também intuitivas, eficientes e robustas.
        </p>
        <h3>Como eu penso</h3>
        <p>
          Eu trabalho com a mentalidade de um <strong>profissional "T"</strong>: profundo em uma especialidade, com uma ampla base de conhecimento. Minha profundidade está no <strong>Front-End</strong>, mas minha base em <strong>Back-End com Java e Python</strong> me permite entender o ciclo de vida completo de uma aplicação. Essa visão sistêmica me capacita a construir interfaces que se integram perfeitamente com as regras de negócio e a infraestrutura, resultando em produtos mais coesos e escaláveis.
        </p>
        <h3>O que eu construo</h3>
        <p>
          Para mim, a teoria só ganha vida quando se transforma em um projeto real. Seja desenvolvendo um sistema de gestão em Java ou um portal de reservas em Python, meu objetivo é sempre o mesmo: aplicar a tecnologia para resolver problemas de forma criativa e entregar valor. Estou sempre em busca de novos desafios e colaborações. <strong>Explore meus projetos</strong> e vamos conversar sobre como podemos construir algo incrível juntos.
        </p>
      </div>
    </section>
  );
}

export default About;