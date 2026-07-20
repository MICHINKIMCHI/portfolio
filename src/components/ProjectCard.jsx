import React from 'react';
import { ExternalLink, Terminal } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  // Make the first project span 12 cols, others span 6 cols in the bento grid
  const gridClass = index === 0 ? 'bento-full' : 'bento-half';
  
  return (
    <div className={`project-card ${gridClass}`}>
      <div className="project-image-container">
        <img src={project.imageUrl} alt={project.name} className="project-image" />
        <div className="project-overlay"></div>
      </div>
      
      <div className="project-content">
        <div className="project-header">
          <span className="project-status mono">{project.status}</span>
          <h3 className="project-name">{project.name}</h3>
          <p className="project-tagline">{project.tagline}</p>
        </div>
        
        <p className="project-description">{project.description}</p>
        
        {project.insight && (
          <div className="project-insight-terminal">
            <div className="terminal-header">
              <div className="terminal-dots"><span></span><span></span><span></span></div>
              <span className="terminal-title mono"><Terminal size={12}/> builder_insight.sh</span>
            </div>
            <div className="terminal-body mono">
              <span className="prompt">$</span> {project.insight.replace('My thought process: ', '')}
            </div>
          </div>
        )}
        
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary project-link">
            Launch <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
