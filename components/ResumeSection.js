import { useState, useRef } from 'react';

export default function ResumeSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const iframeRef = useRef(null);

  return (
    <section id="resume" className="resume section-padding">
      <div className="container">
        <h2 className="section-title"><span className="highlight">Resume</span></h2>
        <div className="resume-cta glass-card p-35 text-center" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <div className="cta-icon highlight" style={{ fontSize: '3rem', marginBottom: '20px' }}>
            <i className="fa-solid fa-file-lines"></i>
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Full Professional Resume</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
            Explore my full professional background, detailed project involvement, and academic record on my dedicated resume page.
          </p>
          <div className="cta-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
            <button onClick={() => setIsModalOpen(true)} className="btn btn-primary" style={{ cursor: 'pointer' }}>
              View Interactive Resume
            </button>
            <a href="/DineshCV.pdf" download className="btn btn-secondary">
              <i className="fa-solid fa-download"></i> Download PDF
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Resume Modal */}
      {isModalOpen && (
        <div style={{
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
        }}>
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
              <button 
                onClick={() => {
                  if (iframeRef.current) {
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
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div >
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
