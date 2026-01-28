import React from "react";
import Slider from "react-slick";
import "./About.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Importando ícones da react-icons
import skillsData from '../../data/skillsData';
import aboutData from '../../data/aboutData';

function About() {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 20000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };

  return (
    <section id="about" data-aos="fade-up">
      <h2>Sobre Mim</h2>
      <div className="carousel-container">
        <Slider {...settings}>
          {aboutData.slides.map((slide, idx) => (
            <div className="slide-content" key={idx}>
              <h3>{slide.title}</h3>
              {slide.paragraphs && slide.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
              {slide.list && (
                <ul>
                  {slide.list.map((item, iIdx) => (
                    <li key={iIdx}><strong>{item.label}:</strong> {item.text}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </Slider>
      </div>

      <div className="skills-section" data-aos="fade-up">
        <h3>Minhas Habilidades Técnicas</h3>
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          arrows={false}
          autoplay={true}
          autoplaySpeed={10000}
          className="skills-categories-carousel"
        >
          {skillsData.map((category, idx) => {
            const skillPairs = [];
            for (let i = 0; i < category.skills.length; i += 2) {
              skillPairs.push(category.skills.slice(i, i + 2));
            }
            return (
              <div className="skills-category-slide" key={idx}>
                <h4>{category.category}</h4>
                <div className="skills-list-pairs">
                  {skillPairs.map((pair, pairIdx) => (
                    <div className="skills-row" key={pairIdx} style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                      {pair.map((skill, index) => (
                        <div className="skill-item" key={index} style={{ flex: 1, minWidth: 0, margin: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          {skill.IconComponent ? (
                            <skill.IconComponent size={40} />
                          ) : (
                            <span className="skill-text-icon">{skill.textIcon}</span>
                          )}
                          <span className="skill-name">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

export default About;