import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <a href="#home" className="logo">
            JavielNombreDeLaFokinEmpresa
          </a>
          <ul className="nav-links">
            <li><a href="#home">Inicio</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
