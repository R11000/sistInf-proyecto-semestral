import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  features: string[];
  year: string;
  location: string;
  type: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  features, 
  year, 
  location, 
  type 
}) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🏗️</div>
          <div>{type}</div>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <ul className="project-features">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          fontSize: '0.9rem',
          color: 'var(--text-light)',
          borderTop: '1px solid var(--light-gray)',
          paddingTop: '1rem'
        }}>
          <span>📍 {location}</span>
          <span>📅 {year}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
