'use client';

import { useState, useEffect } from 'react';
import { useRevealAnimation } from '../../hooks/useRevealAnimation';

export default function Internship() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  return (
    <section ref={revealRef} id="internship" className="internship section-padding reveal reveal-right">
      <div className="container">
        <h2 className="section-title">
          <i className="fa-solid fa-briefcase icon-cyan"></i> <span className="highlight">Internship</span>
        </h2>
        <div className="internship-content">
          {/* Infosys Springboard Virtual Internship */}
          <div className="project-card glass-card p-35">
            <div className="project-badge">Feb 2026 – Apr 2026</div>
            <div className="internship-header" style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
              <div className="card-icon bg-cyan-light" style={{ flexShrink: 0, width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fa-solid fa-chart-pie icon-cyan"></i>
              </div>
              <div>
                <h3 className="highlight" style={{ fontSize: '1.8rem', marginBottom: '5px' }}>Data Analytics & Visualization Intern</h3>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>Infosys Springboard Virtual Internship</h4>
              </div>
            </div>

            <ul className="facts-list" style={{ marginBottom: '25px' }}>
              <li style={{ borderBottom: 'none', alignItems: 'flex-start' }}>
                <i className="fa-solid fa-check-circle" style={{ marginTop: '5px' }}></i>
                <span>Applied Python (Pandas, NumPy) and SQL to clean, preprocess, and analyze structured datasets, improving data quality.</span>
              </li>
              <li style={{ borderBottom: 'none', alignItems: 'flex-start' }}>
                <i className="fa-solid fa-check-circle" style={{ marginTop: '5px' }}></i>
                <span>Performed data analysis in Excel using filtering, sorting, and transformations to derive insights.</span>
              </li>
              <li style={{ borderBottom: 'none', alignItems: 'flex-start' }}>
                <i className="fa-solid fa-check-circle" style={{ marginTop: '5px' }}></i>
                <span>Built a Power BI election dashboard using DAX measures, KPIs, and slicers to visualize voter turnout, party performance, and constituency trends.</span>
              </li>
            </ul>

            <div className="internship-badges" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '25px' }}>
              <span className="skill-badge" style={{ background: 'rgba(14, 165, 233, 0.2)', color: '#38bdf8', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                <i className="fa-brands fa-python"></i> Python (Pandas, NumPy)
              </span>
              <span className="skill-badge" style={{ background: 'rgba(236, 72, 153, 0.2)', color: '#f472b6', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', border: '1px solid rgba(244, 114, 182, 0.3)' }}>
                <i className="fa-solid fa-database"></i> SQL
              </span>
              <span className="skill-badge" style={{ background: 'rgba(139, 92, 246, 0.2)', color: '#a78bfa', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', border: '1px solid rgba(167, 139, 250, 0.3)' }}>
                <i className="fa-solid fa-file-excel"></i> Excel
              </span>
              <span className="skill-badge" style={{ background: 'rgba(234, 179, 8, 0.2)', color: '#eab308', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', border: '1px solid rgba(234, 179, 8, 0.3)' }}>
                <i className="fa-solid fa-chart-column"></i> Power BI & DAX
              </span>
            </div>

            {/* ONLY ONE BUTTON: View Internship Certificate */}
            <div className="project-links" style={{ marginTop: '25px' }}>
              <button 
                type="button" 
                onClick={() => setIsModalOpen(true)} 
                className="btn-sm" 
                style={{ 
                  cursor: 'pointer', 
                  border: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'linear-gradient(135deg, #0ea5e9, #38bdf8)',
                  color: '#fff',
                  fontWeight: 600,
                  padding: '10px 22px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 14px rgba(14, 165, 233, 0.35)'
                }}
              >
                <i className="fa-solid fa-certificate"></i> View Internship Certificate
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
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
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(8px)',
            zIndex: 99999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px'
          }}
        >
          <div style={{
            width: '95%',
            maxWidth: '1000px',
            maxHeight: '90vh',
            backgroundColor: '#111827',
            borderRadius: '16px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
            animation: 'modalFadeIn 0.3s ease-out'
          }}>
            {/* Modal Header */}
            <div style={{
              padding: '16px 24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: '#1f2937'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-certificate" style={{ color: '#38bdf8', fontSize: '1.2rem' }}></i>
                <div>
                  <h4 style={{ margin: 0, color: '#f9fafb', fontSize: '1.05rem', fontWeight: 600 }}>
                    Infosys Springboard Certificate
                  </h4>
                  <p style={{ margin: 0, color: '#9ca3af', fontSize: '0.8rem' }}>
                    ElectViz: Election Data Visualization for Media (Feb – Apr 2026)
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: '#9ca3af',
                  padding: '4px 8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'color 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                onMouseOut={(e) => e.currentTarget.style.color = '#9ca3af'}
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            {/* Modal Body */}
            <div style={{
              flex: 1,
              padding: '20px',
              overflowY: 'auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#0b0f19'
            }}>
              <img 
                src="/assets/Infosys_Internship_Certificate.png" 
                alt="Infosys Springboard Internship Certificate - Moturi Sai Dinesh"
                style={{
                  maxWidth: '100%',
                  maxHeight: '75vh',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)'
                }}
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes modalFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
