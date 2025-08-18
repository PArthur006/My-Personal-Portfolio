# Portfólio Pessoal em React

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)

Este é o repositório do meu portfólio pessoal, uma Single-Page Application (SPA) desenvolvida para exibir meus projetos, certificações e habilidades de forma moderna, limpa e com uma experiência de usuário intuitiva.

**➡️ [Acesse a versão ao vivo aqui!](https://my-portfolio-react-iota-one.vercel.app/)**

<div align='center'>
 <img width="350" height="311" alt="Image" src="https://github.com/user-attachments/assets/f85f3e08-6b5e-493e-b782-faa3b7ae7dd2" />
</div> 

---

## ✨ Funcionalidades Principais

* **Troca Dinâmica de Tema:** Alterna entre temas claro (Light) e escuro (Dark) com um clique, utilizando a Context API do React e variáveis CSS para uma transição suave.
* **Fundo Interativo:** A seção de boas-vindas possui um fundo de partículas dinâmico e interativo que reage ao movimento do mouse e adapta suas cores de acordo com o tema selecionado.
* **Exibição de Projetos:** Galeria de projetos com cards que exibem imagem, título, tecnologias utilizadas (em formato de badges) e links para a demo e o repositório. Um modal com carrossel é acionado para exibir mais detalhes.
* **Exibição de Certificações:** Seção dedicada para certificações, apresentadas em um carrossel com rolagem automática.
* **Design Totalmente Responsivo:** A interface é otimizada para uma visualização perfeita em qualquer dispositivo, de desktops a celulares.
* **Navegação Suave:** Utiliza `react-router-hash-link` para uma rolagem suave e precisa entre as diferentes seções da página.
* **Formulário de Contato Funcional:** Um formulário de contato integrado com **EmailJS** que permite o envio de mensagens diretamente para minha caixa de entrada.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando um ecossistema moderno de desenvolvimento front-end:

* **Core:** [React.js](https://reactjs.org/) (com Hooks e Componentes Funcionais)
* **Boilerplate:** [Create React App](https://create-react-app.dev/)
* **Estilização:** [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS) (com Variáveis CSS para Theming)
* **Roteamento:** [React Router DOM](https://reactrouter.com/)
* **Animações:**
    * [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
    * [Particles.js](https://particles.js.org/) (via `@tsparticles/react` e `@tsparticles/slim`)
* **Ícones:** [React Icons](https://react-icons.github.io/react-icons/) e [Font Awesome](https://fontawesome.com/)
* **Carrossel:** [React Slick](https://react-slick.neostack.com/)
* **Formulários:** [EmailJS](https://www.emailjs.com/)

## 📂 Estrutura de Pastas

O projeto segue uma estrutura de pastas modular e organizada para facilitar a manutenção e escalabilidade.

```text
My-Personal-Portfolio/
├── my-portfolio-react/             # A aplicação React principal
│   ├── public/                     # Ativos estáticos (imagens, index.html, favicon)
│   ├── src/                        # Código fonte React
│   │   ├── App.js                  # Componente principal, configura o roteamento
│   │   ├── index.css               # Variáveis CSS globais para temas
│   │   ├── components/             # Componentes de UI reutilizáveis
│   │   │   ├── Header/             # Barra de navegação e seletor de tema
│   │   │   ├── Home/               # Página inicial (integra as seções)
│   │   │   ├── Background/         # Fundo de partículas
│   │   │   ├── Projects/           # Listagem de projetos e cards
│   │   │   ├── ProjectModal/       # Modal com detalhes dos projetos
│   │   │   └── ...                 # Demais componentes por seção
│   │   └── contexts/               # React Context API
│   │       └── ThemeContext.js     # Provedor do estado de tema (Light/Dark)
│   ├── package.json                # Dependências e scripts
│   └── ...
├── .gitignore
├── LICENSE
└── README.md                       # Este arquivo