// src/data/projectsData.js
// Dados dos projetos principais e em destaque


export const projectsData = [
  {
    category: 'Front-End',
    title: 'Decola - Brasil',
    description: 'Interface web para visualização e simulação de dados de compra de passagens aéreas, com manipulação de dados do usuário, seleção dinâmica e integração de fluxos de dados.',
    imageUrl: '/assets/images/DECOLA-BRASIL.png',
    githubUrl: 'https://github.com/PArthur006/epf-decola',
    liveUrl: '#',
    technologies: ['Python', 'Bottle', 'JavaScript', 'SQLite'],
    carouselImages: []
  },
  {
    category: 'Front-End',
    title: 'My-Linktree',
    description: 'Dashboard pessoal para centralização e visualização de links e dados relevantes, facilitando o acesso a recursos e monitoramento de presença digital.',
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
    description: 'Formulário de coleta e visualização de dados de usuários, com foco em acessibilidade, usabilidade e estruturação de dados para análise posterior.',
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
    description: 'Interface de apresentação e visualização de dados históricos e técnicos sobre o sistema Android, utilizando recursos de layout responsivo e organização de informações.',
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
    description: 'Interface web para consumo e exibição de dados provenientes da API do Google Gemini, demonstrando integração de fontes externas e visualização dinâmica de informações.',
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
    description: 'Sistema de arquitetura orientada a objetos para gestão acadêmica, desenvolvido em Java, com foco em lógica de backend, modelagem de entidades, persistência de dados e integração de módulos administrativos.',
    imageUrl: '/assets/images/SIGA-FCTE.jpg',
    githubUrl: 'https://github.com/PArthur006/Sistema-Integrado-de-Gestao-Academica',
    liveUrl: '#',
    technologies: ['Java', 'Swing'],
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



// Função utilitária para obter projetos destacados por título ou outro critério
export function getFeaturedProjects() {
  // Exemplo: destaque por título (ajuste conforme necessário)
  const featuredTitles = [
    'Decola - Brasil',
    'Sistema Integrado de Gestão Acadêmica'
  ];
  return projectsData.filter(project => featuredTitles.includes(project.title));
}
