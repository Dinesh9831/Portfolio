export default function Education() {
  const educationData = [
    {
      institution: 'Lovely Professional University',
      degree: 'Bachelor of Technology - Computer Science and Engineering',
      duration: 'Since August 2023',
      location: 'Phagwara, Punjab',
      gpa: '7.55',
      gpaType: 'CGPA',
      icon: 'fa-graduation-cap',
      color: '#a855f7',
      bgGrad: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(224, 231, 255, 0.02) 100%)'
    },
    {
      institution: 'Aditya Junior College',
      degree: 'Intermediate',
      duration: 'April 2021 – March 2023',
      location: 'Kakinada, Andhra Pradesh',
      gpa: '87.8%',
      gpaType: 'Score',
      icon: 'fa-school',
      color: '#ec4899',
      bgGrad: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(224, 231, 255, 0.02) 100%)'
    },
    {
      institution: 'Narayana E.M. School',
      degree: 'Matriculation',
      duration: 'April 2020 – March 2021',
      location: 'Kakinada, Andhra Pradesh',
      gpa: '96.7%',
      gpaType: 'Score',
      icon: 'fa-school-flag',
      color: '#10b981',
      bgGrad: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(224, 231, 255, 0.02) 100%)'
    }
  ];

  return (
    <section id="education" className="education section-padding reveal reveal-up">
      <div className="container">
        <h2 className="section-title">
          <i className="fa-solid fa-graduation-cap icon-purple"></i> <span className="highlight">Education</span>
        </h2>
        
        <div className="timeline-container">
          <div className="timeline-line"></div>

          {educationData.map((edu, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-dot" style={{ backgroundColor: edu.color, boxShadow: `0 0 15px ${edu.color}80` }}></div>
              
              <div className="timeline-card glass-card" style={{ borderTop: `4px solid ${edu.color}` }}>
                <div className="card-header-bg" style={{ background: edu.bgGrad }}></div>
                <div className="card-content">
                  <div className="icon-box" style={{ backgroundColor: `${edu.color}15`, color: edu.color, border: `1px solid ${edu.color}30` }}>
                    <i className={`fa-solid ${edu.icon}`}></i>
                  </div>
                  
                  <div className="text-content">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
                      <div style={{ flex: '1', minWidth: '200px' }}>
                        <h3 className="institution" style={{ marginBottom: '4px' }}>{edu.institution}</h3>
                        <h4 className="degree" style={{ color: edu.color, marginBottom: '0' }}>{edu.degree}</h4>
                      </div>
                      <span className="duration-badge">{edu.duration}</span>
                    </div>
                    
                    <div className="footer-details">
                      <span className="location"><i className="fa-solid fa-location-dot"></i> {edu.location}</span>
                    </div>
                  </div>
                </div>

                <div className="score-capsule" style={{ backgroundColor: `${edu.color}20`, color: edu.color, border: `1px solid ${edu.color}40` }}>
                  <span className="score-type">{edu.gpaType}:</span> {edu.gpa}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .timeline-container {
          position: relative;
          max-width: 1100px;
          margin: 50px auto 0;
          display: flex;
          flex-direction: column;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, var(--card-border) 0%, var(--accent-purple) 50%, var(--card-border) 100%);
          transform: translateX(-50%);
        }

        .timeline-item {
          display: flex;
          width: 50%;
          position: relative;
          margin-bottom: 60px;
          padding-right: 40px;
          align-self: flex-start;
          justify-content: flex-end;
        }

        .timeline-item.right {
          align-self: flex-end;
          padding-right: 0;
          padding-left: 40px;
          justify-content: flex-start;
        }

        .timeline-dot {
          position: absolute;
          right: -8px;
          top: 30px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 3px solid #fff;
          z-index: 10;
          animation: pulse 2s infinite;
        }

        .timeline-item.right .timeline-dot {
          left: -8px;
          right: auto;
        }

        .timeline-card {
          width: 100%;
          border-radius: 16px;
          padding: 25px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
        }

        .timeline-card:hover {
          transform: translateY(-8px) scale(1.02);
        }

        .card-header-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100px;
          opacity: 0.5;
          z-index: 0;
          filter: blur(40px);
        }

        .duration-badge {
          font-size: 0.8rem;
          background: rgba(15, 23, 42, 0.05);
          padding: 4px 12px;
          border-radius: 20px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: var(--text-secondary);
          z-index: 1;
          align-self: flex-start;
          white-space: nowrap;
        }

        .card-content {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          position: relative;
          z-index: 1;
        }

        .icon-box {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          flex-shrink: 0;
        }

        .text-content {
          flex: 1;
        }

        .institution {
          font-size: 1.35rem;
          margin-bottom: 5px;
          color: var(--text-primary);
        }

        .degree {
          font-size: 1rem;
          font-weight: 500;
          margin-bottom: 15px;
        }

        .footer-details {
          display: flex;
          gap: 15px;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .score-capsule {
          position: absolute;
          bottom: 20px;
          right: 20px;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 5px;
          z-index: 1;
        }

        .score-type {
          font-weight: 400;
          font-size: 0.8rem;
          opacity: 0.8;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 20px;
            transform: none;
          }
          
          .timeline-item {
            width: 100% !important;
            padding-left: 50px !important;
            padding-right: 0 !important;
            align-self: flex-start !important;
            justify-content: flex-start !important;
          }

          .timeline-item.right .timeline-dot {
            left: 12px !important;
            right: auto !important;
          }

          .timeline-dot {
            left: 12px !important;
            right: auto !important;
            top: 25px;
          }

          .score-capsule {
            position: relative;
            bottom: auto;
            right: auto;
            margin-top: 15px;
            display: inline-flex;
          }
        }
      `}</style>
    </section>
  );
}
