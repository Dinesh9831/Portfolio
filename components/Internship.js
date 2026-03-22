export default function Internship() {
  return (
    <section id="internship" className="internship section-padding reveal reveal-right">
      <div className="container">
        <h2 className="section-title">
          <i className="fa-solid fa-briefcase icon-cyan"></i> <span className="highlight">Internship</span>
        </h2>
        <div className="internship-content">
          {/* AI Cloud Intern (IBM) */}
          <div className="project-card glass-card p-35">
            <div className="project-badge">July 2025 – August 2025</div>
            <div className="internship-header" style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
              <div className="card-icon bg-purple-light" style={{ flexShrink: 0, width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fa-solid fa-cloud icon-purple"></i>
              </div>
              <div>
                <h3 className="highlight" style={{ fontSize: '1.8rem', marginBottom: '5px' }}>AI Cloud Intern</h3>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>AICTE IBM Virtual Internship by Edunet Foundation</h4>
              </div>
            </div>

            <ul className="facts-list" style={{ marginBottom: '25px' }}>
              <li style={{ borderBottom: 'none', alignItems: 'flex-start' }}>
                <i className="fa-solid fa-check-circle" style={{ marginTop: '5px' }}></i>
                <span>Automated the end-to-end deployment process of ML models on IBM Cloud using CI/CD pipelines, improving workflow efficiency by 30%.</span>
              </li>
              <li style={{ borderBottom: 'none', alignItems: 'flex-start' }}>
                <i className="fa-solid fa-check-circle" style={{ marginTop: '5px' }}></i>
                <span>Used AutoAI to rapidly experiment with multiple model candidates, learning to evaluate performance metrics.</span>
              </li>
              <li style={{ borderBottom: 'none', alignItems: 'flex-start' }}>
                <i className="fa-solid fa-check-circle" style={{ marginTop: '5px' }}></i>
                <span>Implemented and tested a Watsonx-based generative AI prototype, gaining hands-on experience in prompt engineering.</span>
              </li>
            </ul>

            <div className="internship-badges" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '25px' }}>
              <span className="skill-badge" style={{ background: 'rgba(14, 165, 233, 0.2)', color: '#38bdf8', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                <i className="fa-solid fa-cloud"></i> IBM Cloud
              </span>
              <span className="skill-badge" style={{ background: 'rgba(236, 72, 153, 0.2)', color: '#f472b6', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', border: '1px solid rgba(244, 114, 182, 0.3)' }}>
                <i className="fa-solid fa-brain"></i> AutoAI
              </span>
              <span className="skill-badge" style={{ background: 'rgba(139, 92, 246, 0.2)', color: '#a78bfa', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', border: '1px solid rgba(167, 139, 250, 0.3)' }}>
                <i className="fa-solid fa-rocket"></i> Watsonx
              </span>
              <span className="skill-badge" style={{ background: 'rgba(20, 184, 166, 0.2)', color: '#2dd4bf', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', border: '1px solid rgba(45, 212, 191, 0.3)' }}>
                <i className="fa-solid fa-gears"></i> CI/CD
              </span>
            </div>

            <div className="project-links" style={{ marginTop: '30px' }}>
              <a href="https://drive.google.com/file/d/166vwVVy8vgKygJI8AvmW7rgXmlfpGb8j/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-sm">
                <i className="fa-solid fa-certificate"></i> View Internship Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
