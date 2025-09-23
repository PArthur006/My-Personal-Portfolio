import React, { useState, useEffect } from 'react';
import Courses from '../Courses/Courses';
import Projects from '../Projects/Projects';
import ProjectModal from '../ProjectModal/ProjectModal';
import Certifications from './Certifications/Certifications';
import './ProjectsPage.css';
import AOS from 'aos';

const projectsData = [
  {
    category: 'Front-End',
    title: 'Decola - Brasil',
    description: 'Uma aplicação web que simula o fluxo de compra de passagens aéreas, permitindo ao usuário buscar voos, selecionar assentos em um mapa interativo e confirmar uma reserva.',
    imageUrl: '/assets/images/DECOLA-BRASIL.png',
    githubUrl: 'https://github.com/PArthur006/epf-decola',
    liveUrl: '#',
    technologies: ['Python', 'Bottle', 'JavaScript', 'SQLite'],
    carouselImages: []
  },
  {
    category: 'Front-End',
    title: 'My-Linktree',
    description: 'Uma página personalizada que centraliza links importantes em um único lugar, proporcionando fácil acesso a redes sociais, projetos e contatos.',
    imageUrl: '/assets/images/My_Linktree.jpg',
    githubUrl: 'https://github.com/PArthur006/My-Linktree',
    liveUrl: 'https://parthur006.github.io/My-Linktree',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    carouselImages: [
      '/assets/images/carousel/My-Linktree/My_Linktree.jpg',
      '/assets/images/carousel/My-Linktree/Linktree_telaInicial_pc.PNG',
      '/assets/images/carousel/My-Linktree/Linktree_telaInicial_mobile.jpg',
      '/assets/images/carousel/My-Linktree/Linktree_codigoHTML.PNG',
      '/assets/images/carousel/My-Linktree/Linktree_codigoCSS1.PNG',
      '/assets/images/carousel/My-Linktree/Linktree_codigoCSS2.PNG',
      '/assets/images/carousel/My-Linktree/Linktree_codigoHTML-CSS_Atualizado.PNG'
    ]
  },
  {
    category: 'Front-End',
    title: 'Formulário de Pesquisa da FreeCodeCamp',
    description: 'Um formulário interativo desenvolvido para coletar feedback dos usuários, seguindo boas práticas de acessibilidade e usabilidade.',
    imageUrl: '/assets/images/form_pesq-homepage.PNG',
    githubUrl: 'https://github.com/PArthur006/Estudos-FrontEnd/tree/main/WEB-DESING-RESPONSIVO/4.%20Formul%C3%A1rio%20de%20Registro',
    liveUrl: '#',
    technologies: ['HTML', 'CSS'],
    carouselImages: [
      '/assets/images/carousel/Formulario-FreeCodeCamp/form_pesq-homepage.PNG',
      '/assets/images/carousel/Formulario-FreeCodeCamp/form_pesq-codigo-HTML.PNG',
      '/assets/images/carousel/Formulario-FreeCodeCamp/form_pesq-codigo-CSS.PNG'
    ]
  },
  {
    category: 'Front-End',
    title: 'Site Android',
    description: 'Uma página informativa sobre o sistema operacional Android, destacando sua evolução, recursos e curiosidades, com um design moderno e responsivo.',
    imageUrl: '/assets/images/site_android_homepage.PNG',
    githubUrl: 'https://github.com/PArthur006/Site-Android',
    liveUrl: 'https://parthur006.github.io/Site-Android/',
    technologies: ['HTML', 'CSS'],
    carouselImages: [
      '/assets/images/carousel/Site-Android/site_android_homepage.PNG',
      '/assets/images/carousel/Site-Android/site_android_homepage_responsivo.PNG',
      '/assets/images/carousel/Site-Android/site_android_lista.PNG',
      '/assets/images/carousel/Site-Android/site_android_codigo.PNG'
    ]
  },
  {
    category: 'Front-End',
    title: 'Assistente de Meta',
    description: 'Uma aplicação web desenvolvida durante a Trilha Iniciante da NLW Agents, que se integra diretamente com a API do Google Gemini para fornecer dicas e estratégias para jogos.',
    imageUrl: '/assets/images/AssistenteMeta.png',
    githubUrl: 'https://github.com/PArthur006/NLW-Agents-Iniciante',
    liveUrl: '#',
    technologies: ['HTML', 'CSS', 'JavaScript', 'API', 'Gemini'],
    carouselImages: []
  },
  {
    category: 'Back-End',
    title: 'Sistema de Gerenciamento de Livros',
    description: 'Uma aplicação que permite cadastrar, visualizar, editar e excluir livros, facilitando a organização de coleções literárias de forma eficiente.',
    imageUrl: '/assets/images/Gerenciador_de_Biblioteca.jpg',
    githubUrl: 'https://github.com/PArthur006/Sistema-de-Gerenciamento-de-Livros',
    liveUrl: '#',
    technologies: ['C'],
    carouselImages: []
  },
  {
    category: 'Back-End',
    title: 'Sistema Integrado de Gestão Acadêmica',
    description: 'O SIGA-FCTE é um sistema de desktop para gerenciamento acadêmico, desenvolvido em Java com a biblioteca Swing para a interface gráfica. O sistema permite o controle de alunos, disciplinas, turmas e avaliações.',
    imageUrl: '/assets/images/SIGA-FCTE.jpg',
    githubUrl: 'https://github.com/PArthur006/Sistema-Integrado-de-Gestao-Academica',
    liveUrl: '#',
    technologies: ['Java', 'Swing'],
    carouselImages: []
  },
  {
    category: 'Game-Development',
    title: 'Sunflower-Knight',
    description: 'Um jogo 2D que mistura estratégia e ação, onde o jogador assume o papel de um cavaleiro em uma jornada desafiadora.',
    imageUrl: '/assets/images/Sunflower_Knight.jpg',
    githubUrl: 'https://github.com/PArthur006/Sunflower-Knight',
    liveUrl: '#',
    technologies: ['GDScript', 'Godot Engine'],
    carouselImages: []
  },
  {
    category: 'Game-Development',
    title: 'Adventure Dash',
    description: 'Jogo 2D criado com a engine Godot para aprendizado da linguagem GDScript e da interface. O jogo é uma aventura 2D com uma fase, inimigos e um chefão, com um sistema de vidas e coleta de moedas.',
    imageUrl: '/assets/images/Adventure_Dash.png',
    githubUrl: 'https://github.com/PArthur006/Adventure-Dash',
    liveUrl: '#',
    technologies: ['GDScript', 'Godot Engine'],
    carouselImages: []
  },
  {
    category: 'Back-End',
    title: 'Dashboard de Análise de Dados',
    description: 'O dashboard oferece uma ferramenta visual para explorar tendências salariais na área de dados. Usuários podem filtrar por ano, experiência, contrato e tamanho da empresa.',
    imageUrl: '/assets/images/Dashboard_Python_Dados.png',
    githubUrl: 'https://github.com/PArthur006/Dashboard-de-Analise-de-Dados-com-Python',
    liveUrl: '#',
    technologies: ['Python', 'Pandas', 'Streamlit', 'Plotly'],
    carouselImages: ['/assets/images/carousel/Dashboard-Python-Dados/Dashboard_Python_Dados.png']
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
      items: ['Algoritmo', 'Python 3 - Mundos 1, 2 e 3', 'Java: Básico e POO', 'Segurança da Informação - Introdução a Segurança da Informação', 'Git e GitHub']
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
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.refresh();
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
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
        <Projects 
          projects={filteredProjects} 
          onProjectClick={handleProjectClick} 
        />
        <Certifications />
      </div>
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </div>
  );
}

export default ProjectsPage;
