import React from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Torre Residencial 'El Mirador'",
      description: "Complejo residencial de lujo con 200 apartamentos, ubicado en el corazón de la ciudad. Incluye amenities de primera clase y vistas panorámicas.",
      features: [
        "200 apartamentos de 1, 2 y 3 dormitorios",
        "Piscina olímpica y gimnasio",
        "Terraza jardín en el piso 20",
        "Sistema de seguridad 24/7",
        "Estacionamiento subterráneo"
      ],
      year: "2023",
      location: "Santiago Centro",
      type: "Residencial"
    },
    {
      title: "Centro Comercial 'Plaza del Sol'",
      description: "Moderno centro comercial con 150 locales comerciales, restaurantes, cine y estacionamiento para 500 vehículos.",
      features: [
        "150 locales comerciales",
        "12 salas de cine",
        "Zona de restaurantes",
        "Estacionamiento para 500 autos",
        "Sistema de climatización central"
      ],
      year: "2022",
      location: "Las Condes",
      type: "Comercial"
    },
    {
      title: "Hospital Regional 'San José'",
      description: "Hospital de alta complejidad con 300 camas, 8 quirófanos y tecnología médica de última generación.",
      features: [
        "300 camas hospitalarias",
        "8 quirófanos equipados",
        "Unidad de cuidados intensivos",
        "Helipuerto en azotea",
        "Sistema de emergencias"
      ],
      year: "2021",
      location: "Providencia",
      type: "Salud"
    },
    {
      title: "Edificio Corporativo 'Torre Empresarial'",
      description: "Edificio de oficinas clase A con 25 pisos, diseñado para empresas multinacionales con certificación LEED.",
      features: [
        "25 pisos de oficinas",
        "Certificación LEED Gold",
        "Sistema de energía solar",
        "Terraza ejecutiva",
        "Conectividad de fibra óptica"
      ],
      year: "2020",
      location: "Vitacura",
      type: "Corporativo"
    },
    {
      title: "Complejo Educativo 'Colegio del Futuro'",
      description: "Instalaciones educativas modernas para 1,500 estudiantes, con laboratorios, biblioteca y canchas deportivas.",
      features: [
        "Capacidad para 1,500 estudiantes",
        "Laboratorios de ciencias",
        "Biblioteca digital",
        "Canchas deportivas",
        "Sistema de energía renovable"
      ],
      year: "2019",
      location: "Ñuñoa",
      type: "Educacional"
    },
    {
      title: "Resort de Lujo 'Costa Dorada'",
      description: "Complejo turístico de 5 estrellas con 200 habitaciones, spa, golf y acceso directo a la playa.",
      features: [
        "200 habitaciones de lujo",
        "Spa de 2,000 m²",
        "Campo de golf 18 hoyos",
        "Acceso directo a playa",
        "Restaurantes gourmet"
      ],
      year: "2018",
      location: "Viña del Mar",
      type: "Turístico"
    }
  ];

  return (
    <section id="proyectos" className="projects section">
      <div className="container">
        <h2 className="section-title">Nuestros Proyectos Exitosos</h2>
        <p className="section-subtitle">
          Más de 15 años construyendo proyectos que transforman ciudades y mejoran vidas
        </p>
        <div className="grid grid-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              features={project.features}
              year={project.year}
              location={project.location}
              type={project.type}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
