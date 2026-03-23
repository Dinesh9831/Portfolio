'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const roles = ["Data Analyst", "Data Scientist", "Machine Learning Engineer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setText(currentRole.substring(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setText(currentRole.substring(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex(prev => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="home section-padding reveal reveal-up active">
      <div className="container home-container">
        <div className="home-text">
          <span className="greeting">Welcome to my portfolio</span>
          <h1 className="hero-title">Hello, I'm <br /><span className="highlight interactive-name">Moturi Sai Dinesh</span></h1>
          <h3 className="hero-subtitle"><span className="typing">{text}</span></h3>
          <p className="hero-desc">
            Passionate about building intelligent systems using machine learning, data analysis, and software
            engineering principles to solve real-world problems.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Work</a>
            <button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/DineshCV.pdf';
                link.download = 'DineshCV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="btn btn-secondary"
              style={{ cursor: 'pointer' }}
            >
              Download CV
            </button>
          </div>
          <div className="social-links">
            <a href="https://github.com/Dinesh9831" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/moturi-sai-dinesh-68572a291/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="mailto:moturisaidinesh@gmail.com" className="social-icon">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="home-image">
          <div className="img-box glass-card">
            <img src="/assets/profile.jpg" alt="Dinesh Profile Image" id="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
