import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './Process.css';

const Process = ({ process }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="process" id="process">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">02. {process.title}</h2>
          <p className="section-subtitle">How I build products from concept to revenue.</p>
        </div>
        
        <div className="process-timeline">
          {process.steps.map((step, index) => {
            const isExpanded = expandedIndex === index;
            
            return (
              <div 
                className={`process-card ${isExpanded ? 'expanded' : ''}`} 
                key={index}
                onClick={() => toggleExpand(index)}
              >
                <div className="process-card-header">
                  <div className="process-number mono">0{index + 1}</div>
                  <div className="process-content">
                    <h3 className="process-step-title">{step.title}</h3>
                    <p className="process-step-description">{step.description}</p>
                  </div>
                  <div className="process-expand-icon">
                    {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </div>
                
                {isExpanded && step.expandedContent && (
                  <div className="process-expanded-content">
                    <div className="expanded-inner">
                      <p>{step.expandedContent}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
