import React from 'react';
import './Hero.css';
import { ArrowRight, Terminal } from 'lucide-react';

const Hero = ({ profile }) => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-badge mono">
          <Terminal size={14} /> SYSTEM_ONLINE
        </div>
        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">{profile.name}</span>.<br />
          {profile.title}
        </h1>
        <p className="hero-bio">{profile.bio}</p>
        
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View My Work <ArrowRight size={18} />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Connect on LinkedIn
          </a>
        </div>
      </div>
      
      <div className="hero-background">
        <div className="glow-sphere"></div>
      </div>
    </section>
  );
};

export default Hero;
