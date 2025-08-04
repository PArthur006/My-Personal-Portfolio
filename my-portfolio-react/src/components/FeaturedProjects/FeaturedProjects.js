
import React from 'react';
import '../Projects/Projects.css';

const featuredProjectsData = [
  {
    category: 'Front-End',
    title: 'Decola - Brasil',
    description: 'Uma aplicação web que simula o fluxo de compra de passagens aéreas, permitindo ao usuário buscar voos, selecionar assentos em um mapa interativo e confirmar uma reserva.',
    imageUrl: '/assets/images/DECOLA-BRASIL.png',
    githubUrl: '#', // Adicionar link do GitHub aqui
    liveUrl: '#' // Adicionar link da demo aqui
  },
  {
    category: 'Back-End',
    title: 'Sistema de Gerenciamento de Livros',
    description: 'Uma aplicação que permite cadastrar, visualizar, editar e excluir livros, facilitando a organização de coleções literárias de forma eficiente.',
    imageUrl: '/assets/images/Gerenciador_de_Biblioteca.jpg',
    githubUrl: 'https://github.com/PArthur006/Sistema-de-Gerenciamento-de-Livros',
    liveUrl: '#'
  },
  {
    category: 'Game-Development',
    title: 'Sunflower-Knight',
    description: 'Um jogo 2D que mistura estratégia e ação, onde o jogador assume o papel de um cavaleiro em uma jornada desafiadora.',
    imageUrl: '/assets/images/Sunflower_Knight.jpg',
    githubUrl: 'https://github.com/PArthur006/Sunflower-Knight',
    liveUrl: '#'
  }
];

function FeaturedProjects() {
  return (
    <section id="featured-projects">
      <h2>Projetos em Destaque</h2>
      <div className="project-grid">
        {featuredProjectsData.map((project, index) => (
          <div className="project-card" key={index} data-aos="zoom-in">
            <img src={project.imageUrl} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                {project.liveUrl !== '#' && 
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Demo</a>
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;
