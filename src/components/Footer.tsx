import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>JavielNombreDeLaFokinEmpresa</h3>
            <p>
              Más de 15 años construyendo el futuro. Especialistas en proyectos 
              de alta complejidad y calidad excepcional.
            </p>
          </div>
          <div className="footer-section">
            <h3>Servicios</h3>
            <p>Construcción Residencial</p>
            <p>Construcción Comercial</p>
            <p>Construcción de Salud</p>
            <p>Construcción Educacional</p>
          </div>
          <div className="footer-section">
            <h3>Contacto</h3>
            <p>📧 info@javielconstructora.com</p>
            <p>📞 +56 9 1234 5678</p>
            <p>📍 Av. Principal 123, Santiago</p>
            <p>🌐 www.javielconstructora.com</p>
          </div>
          <div className="footer-section">
            <h3>Horarios</h3>
            <p>Lunes - Viernes: 8:00 - 18:00</p>
            <p>Sábados: 9:00 - 14:00</p>
            <p>Domingos: Cerrado</p>
            <p>Emergencias: 24/7</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 JavielNombreDeLaFokinEmpresa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
