import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importe o CSS do AOS
import { ThemeProvider } from './contexts/ThemeContext';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação em milissegundos
      once: true, // Animar apenas uma vez
    });
  }, []);

  return (
    <Router>
      <ThemeProvider>
        <div className="App">
          <Header />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </main>

          <footer>
            <p>Todos os direitos reservados ao desenvolvedor 
              <a href="https://github.com/PArthur006"> Pedro Arthur Rodrigues</a>
            </p>
          </footer>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
