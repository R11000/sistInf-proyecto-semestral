import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: '🏗️',
      title: 'Construcción Residencial',
      description: 'Edificios de apartamentos, casas unifamiliares y complejos residenciales con los más altos estándares de calidad.'
    },
    {
      icon: '🏢',
      title: 'Construcción Comercial',
      description: 'Centros comerciales, oficinas corporativas y espacios comerciales diseñados para maximizar la funcionalidad.'
    },
    {
      icon: '🏥',
      title: 'Construcción de Salud',
      description: 'Hospitales, clínicas y centros médicos con tecnología de punta y cumplimiento de normativas sanitarias.'
    },
    {
      icon: '🎓',
      title: 'Construcción Educacional',
      description: 'Colegios, universidades y centros de formación con espacios innovadores para el aprendizaje.'
    },
    {
      icon: '🏨',
      title: 'Construcción Hotelera',
      description: 'Hoteles, resorts y complejos turísticos que combinan lujo, funcionalidad y sostenibilidad.'
    },
    {
      icon: '🏭',
      title: 'Construcción Industrial',
      description: 'Plantas industriales, bodegas y complejos manufactureros con tecnología de última generación.'
    }
  ];

  return (
    <section id="servicios" className="services section">
      <div className="container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <p className="section-subtitle">
          Soluciones integrales en construcción para todos los sectores
        </p>
        <div className="grid grid-3">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
