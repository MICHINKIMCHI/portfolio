import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = ({ projects }) => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">01. Selected Works</h2>
          <p className="section-subtitle">Real-world businesses and applications built to solve market gaps.</p>
        </div>
        
        <div className="bento-grid">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
