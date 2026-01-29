// src/data/projectsData.js
// Dados dos projetos principais e em destaque


export const projectsData = [
  {
    category: 'Data & Infrastructure',
    title: 'Decola - Brasil',
    description: 'Interface web para visualização e simulação de dados de compra de passagens aéreas, com manipulação de dados do usuário, seleção dinâmica e integração de fluxos de dados.',
    imageUrl: '/assets/images/carousel/Decola-Brasil/DECOLA-BRASIL.png',
    githubUrl: 'https://github.com/PArthur006/epf-decola',
    liveUrl: '#',
    technologies: ['Python', 'Bottle', 'JavaScript', 'SQLite'],
    carouselImages: []
  },
  {
    category: 'Software Engineering',
    title: 'My-Linktree',
    description: 'Dashboard pessoal para centralização e visualização de links e dados relevantes, facilitando o acesso a recursos e monitoramento de presença digital.',
    imageUrl: '/assets/images/carousel/My-Linktree/My_Linktree.jpg',
    githubUrl: 'https://github.com/PArthur006/My-Linktree',
    liveUrl: 'https://parthur006.github.io/My-Linktree',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    carouselImages: [
      '/assets/images/carousel/My-Linktree/My_Linktree.jpg',
      '/assets/images/carousel/My-Linktree/Linktree_telaInicial_mobile.jpg',
      '/assets/images/carousel/My-Linktree/Linktree_codigoHTML.PNG',
      '/assets/images/carousel/My-Linktree/Linktree_codigoCSS1.PNG',
      '/assets/images/carousel/My-Linktree/Linktree_codigoCSS2.PNG',
      '/assets/images/carousel/My-Linktree/Linktree_codigoHTML-CSS_Atualizado.PNG'
    ]
  },
  {
    category: 'Software Engineering',
    title: 'Sistema Integrado de Gestão Acadêmica',
    description: 'Sistema de arquitetura orientada a objetos para gestão acadêmica, desenvolvido em Java, com foco em lógica de backend, modelagem de entidades, persistência de dados e integração de módulos administrativos.',
    imageUrl: '/assets/images/carousel/Siga-FCTE/SIGA-FCTE.jpg',
    githubUrl: 'https://github.com/PArthur006/Sistema-Integrado-de-Gestao-Academica',
    liveUrl: '#',
    technologies: ['Java', 'Swing'],
    carouselImages: []
  },
  {
    category: 'Data & Infrastructure',
    title: 'Dashboard de Análise de Dados',
    description: 'O dashboard oferece uma ferramenta visual para explorar tendências salariais na área de dados. Usuários podem filtrar por ano, experiência, contrato e tamanho da empresa.',
    imageUrl: '/assets/images/carousel/Dashboard-Python-Dados/Dashboard_Python_Dados.png',
    githubUrl: 'https://github.com/PArthur006/Projeto-Dashboard-Python',
    liveUrl: '#',
    technologies: ['Python', 'Pandas', 'Streamlit', 'Plotly'],
    carouselImages: ['/assets/images/carousel/Dashboard-Python-Dados/Dashboard_Python_Dados.png']
  }
];



// Função utilitária para obter projetos destacados por título ou outro critério
export function getFeaturedProjects() {
  // Exemplo: destaque por título (ajuste conforme necessário)
  const featuredTitles = [
    'Decola - Brasil',
    'Dashboard de Análise de Dados'
  ];
  return projectsData.filter(project => featuredTitles.includes(project.title));
}
