import React, { useState } from 'react';
import Slider from 'react-slick';
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import './Certifications.css'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import certificationsData from '../../data/certificationsData';

function Certifications() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const toggleLightbox = (idx) => {
    setIndex(idx);
    setOpen(true);
  };

  const itemCount = certificationsData.length;
  const defaultSlidesToShow = 3;
  const slidesToShow = Math.min(defaultSlidesToShow, Math.max(1, itemCount));
  const isInfinite = itemCount > slidesToShow;

  const settings = {
    dots: false, // Desativa os indicadores de página
    arrows: false, // Desativa os botões de navegação
    infinite: isInfinite,
    speed: isInfinite ? 5000 : 600,
    autoplay: itemCount > 1,
    autoplaySpeed: isInfinite ? 1000 : 3000,
    slidesToShow,
    slidesToScroll: 1,
    cssEase: isInfinite ? 'linear' : 'ease',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, slidesToShow),
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
      <h2>Minhas Certificações</h2>
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