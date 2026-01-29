// src/data/skillsData.js
// Dados centralizados das skills técnicas, organizados por categoria

import { FaReact, FaPython, FaJava, FaGitAlt, FaLinux, FaFigma, FaDatabase } from 'react-icons/fa';
import { SiJson } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';

const skillsData = [
  {
    category: 'Data & Infrastructure',
    skills: [
      { name: 'SQL', IconComponent: FaDatabase },
      { name: 'ETL', textIcon: 'ETL' },
      { name: 'Cloud', textIcon: '☁️' },
      { name: 'Linux', IconComponent: FaLinux },
    ]
  },
  {
    category: 'Software Engineering',
    skills: [
      { name: 'Java', IconComponent: FaJava },
      { name: 'Python', IconComponent: FaPython },
      { name: 'Git', IconComponent: FaGitAlt },
      { name: 'JSON', IconComponent: SiJson },
    ]
  },
  {
    category: 'Web Technologies',
    skills: [
      { name: 'React', IconComponent: FaReact },
      { name: 'JavaScript', IconComponent: DiJavascript1 },
      { name: 'Figma', IconComponent: FaFigma },
    ]
  }
];

export default skillsData;
