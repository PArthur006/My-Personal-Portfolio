// src/data/aboutData.js
// Conteúdo dos slides da seção About centralizados como dados

const aboutData = {
  bioTitle: 'Pedro Arthur<br /><i class="fas fa-shield-alt"></i> Segurança de Dados <i class="fas fa-shield-alt"></i><br /><br />Portfólio Pessoal',
  slides: [
    {
      title: '🏛️ Formação e Carreira',
      paragraphs: [
        'Estudante de Engenharia de Software com foco em Engenharia de Dados e Segurança. Minha trajetória é pautada pela transição do desenvolvimento técnico para a arquitetura de soluções robustas.'
      ],
      list: [
        { label: 'First Decision', text: 'Estagiário em Migração de Dados, IA e Nuvem.' },
        { label: 'SENAI', text: 'Qualificação em Desenvolvimento Full-Stack.' },
        { label: 'UnB', text: 'Estudante de Engenharia de Software (foco em engenharia de dados e segurança).' }
      ]
    },
    {
      title: '⚙️ Engenharia de Dados, Infraestrutura e Segurança',
      paragraphs: [
        'Utilizei o Desenvolvimento Web (React) para entender a interface, mas hoje meu foco está na Engenharia de Dados e na infraestrutura em nuvem, onde a governança e a observabilidade garantem operações confiáveis.',
        'Estudo práticas de arquitetura de dados (ETL, pipelines), automação de deploy e controles de segurança para integrar a proteção desde o projeto até a operação.'
      ]
    },
    {
      title: '🎓 Certificações Relevantes',
      paragraphs: [
        'Com meus estudos, venho adquirindo certificações que comprovam conhecimentos práticos em nuvem, plataformas de dados e engenharia de dados.'
      ],
      list: [
        {
          label: 'Oracle Data Platform Foundations Associate',
          text: 'Valida conhecimentos fundamentais sobre a plataforma de dados da Oracle, incluindo princípios de ingestão, armazenamento e fundamentos de processamento de dados.'
        },
        {
          label: 'Oracle Cloud Infrastructure Foundations Associate',
          text: 'Comprova entendimento dos conceitos básicos de nuvem e dos serviços essenciais da Oracle Cloud (compute, storage, networking e identidade/controle de acesso).'
        }
      ]
    }
  ]
};

export default aboutData;
