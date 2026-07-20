import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import './Hero.css';

const Hero = ({ profile }) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="animate-fade-in">
            <span className="hero-badge">{profile.title}</span>
            <h1 className="hero-title">
              Hi, I'm {profile.name}.
            </h1>
            <h2 className="hero-tagline">
              "{profile.tagline}"
            </h2>
          </div>
          
          <p className="hero-bio animate-fade-in delay-100">
            {profile.bio}
          </p>
          
          <div className="hero-actions animate-fade-in delay-200">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <div className="hero-socials">
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href={profile.links.email} className="social-link" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
