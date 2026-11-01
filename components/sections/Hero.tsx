'use client';

import { useState, useEffect, useRef } from 'react';
import { useRevealAnimation } from '../../hooks/useRevealAnimation';

export default function Hero() {
  const [text, setText] = useState('');
  const roles = ["Data Analyst", "Data Scientist", "Machine Learning Engineer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  const revealRef = useRevealAnimation<HTMLElement>();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    if (!currentRole) return;
    
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
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <section ref={revealRef} id="home" className="home section-padding reveal reveal-up active">
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
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="btn btn-secondary"
            >
              View Interactive Resume
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

      {/* Interactive Resume Modal */}
      {isModalOpen && (
        <div 
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px'
          }}
        >
          <div style={{
            width: '90%',
            maxWidth: '1000px',
            height: '85vh',
            backgroundColor: '#fff',
            borderRadius: '16px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            animation: 'modalFadeIn 0.3s ease-out'
          }}>
            {/* Modal Header */}
            <div style={{
              padding: '15px 25px',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: '15px',
              borderBottom: '1px solid #eee',
              backgroundColor: '#fff'
            }}>
              <a
                href="/DineshCV.pdf"
                download="DineshCV.pdf"
                style={{
                  backgroundColor: 'transparent',
                  color: '#4f46e5',
                  border: '1px solid #4f46e5',
                  padding: '8px 18px',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(79, 70, 229, 0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <i className="fa-solid fa-download"></i> Download PDF
              </a>
              <button 
                onClick={() => {
                  if (iframeRef.current && iframeRef.current.contentWindow) {
                    iframeRef.current.contentWindow.print();
                  } else {
                    window.open('/DineshCV.pdf', '_blank');
                  }
                }}
                style={{
                  backgroundColor: '#f6758f',
                  color: '#fff',
                  border: 'none',
                  padding: '10px 22px',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 12px rgba(246, 117, 143, 0.3)',
                  transition: 'all 0.3s ease',
                  fontSize: '0.95rem'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(246, 117, 143, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(246, 117, 143, 0.3)';
                }}
              >
                <i className="fa-solid fa-print"></i> Print / Save PDF
              </button>
              <button 
                onClick={() => setIsModalOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.6rem',
                  cursor: 'pointer',
                  color: '#666',
                  padding: '5px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'color 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#333'}
                onMouseOut={(e) => e.currentTarget.style.color = '#666'}
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            {/* Modal Body (PDF display) */}
            <div style={{ flex: 1, backgroundColor: '#525659' }}>
              <iframe 
                ref={iframeRef}
                src="/DineshCV.pdf" 
                style={{ width: '100%', height: '100%', border: 'none' }}
                title="Resume PDF"
              />
            </div>
          </div>
        </div>
      )}

      {/* Add keyframe style for FadeIn */}
      <style jsx>{`
        @keyframes modalFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
