import React, { useState, useEffect } from 'react';
import Courses from '../Courses/Courses';
import Projects from '../Projects/Projects';
import './ProjectsPage.css';
import AOS from 'aos';

const projectsData = [
  {
    category: 'Front-End',
    title: 'Decola - Brasil',
    description: 'Uma aplicação web que simula o fluxo de compra de passagens aéreas, permitindo ao usuário buscar voos, selecionar assentos em um mapa interativo e confirmar uma reserva.',
    imageUrl: '/assets/images/DECOLA-BRASIL.png',
    githubUrl: 'https://github.com/PArthur006/epf-decola',
    liveUrl: '#' 
  },
  {
    category: 'Front-End',
    title: 'My-Linktree',
    description: 'Uma página personalizada que centraliza links importantes em um único lugar, proporcionando fácil acesso a redes sociais, projetos e contatos.',
    imageUrl: '/assets/images/My_Linktree.jpg',
    githubUrl: 'https://github.com/PArthur006/My-Linktree',
    liveUrl: 'https://parthur006.github.io/My-Linktree'
  },
  {
    category: 'Front-End',
    title: 'Formulário de Pesquisa da FreeCodeCamp',
    description: 'Um formulário interativo desenvolvido para coletar feedback dos usuários, seguindo boas práticas de acessibilidade e usabilidade.',
    imageUrl: '/assets/images/form_pesq-homepage.PNG',
    githubUrl: 'https://github.com/PArthur006/Estudos-FrontEnd/tree/main/WEB-DESING-RESPONSIVO/4.%20Formul%C3%A1rio%20de%20Registro',
    liveUrl: '#'
  },
  {
    category: 'Front-End',
    title: 'Site Android',
    description: 'Uma página informativa sobre o sistema operacional Android, destacando sua evolução, recursos e curiosidades, com um design moderno e responsivo.',
    imageUrl: '/assets/images/site_android_homepage.PNG',
    githubUrl: 'https://github.com/PArthur006/Site-Android',
    liveUrl: 'https://parthur006.github.io/Site-Android/'
  },
  {
    category: 'Front-End',
    title: 'Assistente de Meta',
    description: 'Uma aplicação web desenvolvida durante a Trilha Iniciante da NLW Agents, que se integra diretamente com a API do Google Gemini para fornecer dicas e estratégias para jogos.',
    imageUrl: '/assets/images/AssistenteMeta.png',
    githubUrl: 'https://github.com/PArthur006/NLW-Agents-Iniciante',
    liveUrl: '#'
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
    category: 'Back-End',
    title: 'Sistema Integrado de Gestão Acadêmica',
    description: 'O SIGA-FCTE é um sistema de desktop para gerenciamento acadêmico, desenvolvido em Java com a biblioteca Swing para a interface gráfica. O sistema permite o controle de alunos, disciplinas, turmas e avaliações.',
    imageUrl: '/assets/images/SIGA-FCTE.jpg',
    githubUrl: 'https://github.com/PArthur006/Sistema-Integrado-de-Gestao-Academica',
    liveUrl: '#'
  },
  {
    category: 'Game-Development',
    title: 'Sunflower-Knight',
    description: 'Um jogo 2D que mistura estratégia e ação, onde o jogador assume o papel de um cavaleiro em uma jornada desafiadora.',
    imageUrl: '/assets/images/Sunflower_Knight.jpg',
    githubUrl: 'https://github.com/PArthur006/Sunflower-Knight',
    liveUrl: '#'
  },
  {
    category: 'Game-Development',
    title: 'Adventure Dash',
    description: 'Jogo 2D criado com a engine Godot para aprendizado da linguagem GDScript e da interface. O jogo é uma aventura 2D com uma fase, inimigos e um chefão, com um sistema de vidas e coleta de moedas.',
    imageUrl: '/assets/images/Adventure_Dash.png',
    githubUrl: 'https://github.com/PArthur006/Adventure-Dash',
    liveUrl: '#'
  }
];

const coursesData = {
  'Front-End': [
    {
      institution: 'Curso em Vídeo',
      items: ['HTML5 e CSS3: Módulos 1, 2 e 3', 'Javascript', 'Git e GitHub', 'Curso prático de SEO: Módulo 1']
    },
    {
      institution: 'Udemy',
      items: ['Curso Web Moderno Completo']
    },
    {
      institution: 'Fundação Bradesco',
      items: ['Fundamentos do Design Gráfico', 'HTML - Básico', 'Crie um site simples usando HTML, CSS e Javascript']
    },
    {
      institution: 'FreeCodeCamp',
      items: ['Design responsivo para a Web']
    }
  ],
  'Back-End': [
    {
      institution: 'Curso em Vídeo',
      items: ['Algoritmo', 'Python 3 - Mundos 1, 2 e 3', 'Java: Básico e POO', 'Git e GitHub']
    },
    {
      institution: 'Udemy',
      items: ['Python para Iniciantes', 'Linguagem C, C++ e Orientação a Objetos']
    },
    {
      institution: 'Google',
      items: ['Inteligência Artificial e Produtividade']
    },
    {
      institution: 'Santander Open Academy',
      items: ['Linguagem Python']
    },
    {
      institution: 'Fundação Bradesco',
      items: ['Fundamentos de TI: Hardware e Software', 'Sistemas Operacionais - Conceitos Básicos', 'Linguagem de Programação Python - Básico']
    }
  ],
  'Game-Development': [
    {
      institution: 'Udemy',
      items: ['Criação de Jogos 2D e 3D na Godot']
    }
  ]
};

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('Front-End');

  useEffect(() => {
    AOS.refresh();
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const filteredProjects = projectsData.filter(project => project.category === activeCategory);
  const filteredCourses = coursesData[activeCategory] || [];

  return (
    <div className="portfolio-page">
      <div className="category-tabs" data-aos="fade-down">
        <button onClick={() => handleCategoryChange('Front-End')} className={activeCategory === 'Front-End' ? 'active' : ''}>Front-End</button>
        <button onClick={() => handleCategoryChange('Back-End')} className={activeCategory === 'Back-End' ? 'active' : ''}>Back-End</button>
        <button onClick={() => handleCategoryChange('Game-Development')} className={activeCategory === 'Game-Development' ? 'active' : ''}>Game Dev & Outros</button>
      </div>
      <div key={activeCategory} data-aos="fade-up">
        <Courses courses={filteredCourses} />
        <Projects projects={filteredProjects} />
      </div>
    </div>
  );
}

export default ProjectsPage;
