import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Construyendo el Futuro</h1>
          <p>
            Más de 15 años de experiencia en construcción de alta calidad. 
            Transformamos ideas en realidades arquitectónicas excepcionales.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#proyectos" className="btn">
              Ver Nuestros Proyectos
            </a>
            <a href="#contacto" className="btn btn-outline">
              Contactar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
