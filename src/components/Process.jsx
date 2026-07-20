import React from 'react';
import './Process.css';

const Process = ({ process }) => {
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">02. {process.title}</h2>
          <p className="section-subtitle">How I build products from concept to revenue.</p>
        </div>
        
        <div className="process-timeline">
          {process.steps.map((step, index) => (
            <div className="process-card" key={index}>
              <div className="process-number mono">0{index + 1}</div>
              <div className="process-content">
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
