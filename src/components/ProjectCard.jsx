import React from 'react';
import { ExternalLink } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`project-card ${!isEven ? 'project-card-reverse' : ''} animate-fade-in delay-100`}>
      <div className="project-image-container">
        <img src={project.imageUrl} alt={project.name} className="project-image" />
        <div className="project-status-badge">{project.status}</div>
      </div>
      
      <div className="project-content">
        <h3 className="project-name">{project.name}</h3>
        <h4 className="project-tagline">{project.tagline}</h4>
        
        <p className="project-description">
          {project.description}
        </p>
        
        <div className="project-details">
          <h5 className="details-title">Key Highlights:</h5>
          <ul>
            {project.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
        
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline project-link">
            Visit Project <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
