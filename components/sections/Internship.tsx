'use client';

import { useRevealAnimation } from '../../hooks/useRevealAnimation';

export default function Internship() {
  const revealRef = useRevealAnimation<HTMLElement>();

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

            <div className="project-links" style={{ marginTop: '30px' }}>
              <a href="https://drive.google.com/file/d/1kRqIBbq2Cs3Biso_ZOcqFkpc3Wb2x_KT/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-sm">
                <i className="fa-solid fa-certificate"></i> View Internship Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
