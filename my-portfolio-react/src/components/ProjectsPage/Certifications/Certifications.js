import React, { useState } from 'react';
import Slider from 'react-slick';
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import './Certifications.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certificationsData = [
  {
    image: '/assets/images/certifications/FB_Fund-Design-Grafico.png',
    title: 'Fundamentos do Design Gráfico',
    issuer: 'Fundação Bradesco'
  },
  {
    image: '/assets/images/certifications/IFRS_POO.png',
    title: 'Linguagens de Programação Orientada a Objetos',
    issuer: 'Instituto Federal Sul-rio-grandense'
  },
  {
    image: '/assets/images/certifications/NLWAgents.png',
    title: 'NLW Agents',
    issuer: 'Rocketseat'
  },
  {
    image: '/assets/images/certifications/FB_HTML-Basico.png',
    title: 'HTML Básico',
    issuer: 'Fundação Bradesco'
  },
  {
    image: '/assets/images/certifications/SOA_Google-IA.png',
    title: 'Google: Inteligência Artificial e Produtividade',
    issuer: 'Santander Open Academy'
  },
  {
    image: '/assets/images/certifications/OSJC_WebDesigner.png',
    title: 'WebDesigner (HTML, CSS & JavaScript)',
    issuer: 'Microsoft'
  },
  {
    image: '/assets/images/certifications/Alura_Imersao_Dados_Python.png',
    title: 'Imersão de Dados com Python',
    issuer: 'Alura'
  },
  {
    image: '/assets/images/certifications/DIO_Intro-ao-React.png',
    title: 'Introdução ao React.png',
    issuer: 'Digital Inovation One'
  }
];

function Certifications() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const toggleLightbox = (idx) => {
    setIndex(idx);
    setOpen(true);
  };

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section id="certifications" data-aos="fade-up">
      <h2>Meus Certificados</h2>
      <div className="cert-carousel-container">
        <Slider {...settings}>
          {certificationsData.map((cert, idx) => (
            <div key={idx} className="cert-item">
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="cert-image" 
                onClick={() => toggleLightbox(idx)}
              />
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
            </div>
          ))}
        </Slider>
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={certificationsData.map(cert => ({ src: cert.image, title: cert.title }))}
          index={index}
          plugins={[Captions]}
        />
      )}
    </section>
  );
}

export default Certifications;