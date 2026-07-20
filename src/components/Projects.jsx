import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="bg-secondary">
      <div className="container">
        <div className="section-header animate-fade-in">
          <h2 className="section-title">Selected Works</h2>
          <p className="section-subtitle">
            A showcase of businesses and applications I've built to solve real market needs.
          </p>
        </div>
        
        <div className="projects-grid grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
