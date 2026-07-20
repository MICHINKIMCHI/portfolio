import React, { useState, useEffect } from 'react';
import portfolioData from './data/portfolio.json';
import Hero from './components/Hero';
import Process from './components/Process';
import Projects from './components/Projects';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // In a real app we might fetch this, but for simplicity we import it directly
    setData(portfolioData);
  }, []);

  if (!data) return <div className="flex justify-center items-center" style={{height: '100vh'}}>Loading...</div>;

  return (
    <div className="app-container">
      <Hero profile={data.profile} />
      <Process process={data.process} />
      <Projects projects={data.projects} />
      
      <footer style={{ padding: '3rem 0', textAlign: 'center', backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)', color: 'var(--text-tertiary)' }}>
        <p>© {new Date().getFullYear()} {data.profile.name}. Built with AI.</p>
      </footer>
    </div>
  );
}

export default App;
