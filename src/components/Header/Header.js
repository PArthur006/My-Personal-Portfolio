
import React from 'react';
import './Header.css';
import { HashLink } from 'react-router-hash-link';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

function Header() {
  return (
    <header id="navbar">
      <nav>
        <HashLink smooth to="/#">Início</HashLink>
        <HashLink smooth to="/projects#">Portfólio</HashLink>
        <HashLink smooth to="/#contact">Contato</HashLink>
        <ThemeSwitcher />
      </nav>
    </header>
  );
}

export default Header;
