import React from 'react';
import './Process.css';

const Process = ({ process }) => {
  return (
    <section id="process" className="process-section">
      <div className="container">
        <div className="section-header text-center animate-fade-in">
          <h2 className="section-title">{process.title}</h2>
          <p className="section-subtitle mx-auto">
            How I take ideas from a frustrating problem to a live, revenue-generating product.
          </p>
        </div>
        
        <div className="process-grid grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.steps.map((step, index) => (
            <div key={index} className={`process-card animate-fade-in delay-${(index + 1) * 100}`}>
              <div className="process-number">0{index + 1}</div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
