import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-switcher">
      <button onClick={toggleTheme}>
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
