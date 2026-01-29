// src/data/coursesData.js
// Dados reorganizados: apenas as duas categorias exibidas na aba de Skills

const coursesData = [
  {
    category: 'Data & Infrastructure',
    companies: [
      {
        name: 'Databricks',
        items: [
          'Build Data Pipelines with Lakeflow - Spark Declarative Pipelines',
          'Data Ingestion with Lakeflow Connect',
          'Deploy Workloads with Lakeflow Jobs',
          'DevOps Essentials for Data Engineering'
        ]
      },
      {
        name: 'Cisco',
        items: [
          'Gerenciamento de Ameaças Cibernéticas'
        ]
      },
      {
        name: 'Oracle',
        items: [
          'Oracle Certified Cloud Infrastructure 2025 - Certified Foundations Associate',
          'Oracle Certified Data Foundations Associate'
        ]
      }
    ]
  },
  {
    category: 'Software Engineering',
    companies: [
      {
        name: 'DSA',
        items: [
          'Fund Python - DataScience e ML',
          'Fund Python e IA'
        ]
      },
      {
        name: 'Akad',
        items: [
          'Fullstack Developer'
        ]
      }
    ]
  }
];

export default coursesData;
