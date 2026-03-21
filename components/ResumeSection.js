export default function ResumeSection() {
  return (
    <section id="resume" className="resume section-padding">
      <div className="container">
        <h2 className="section-title">My <span className="highlight">Resume</span></h2>
        <div className="resume-cta glass-card p-35 text-center" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <div className="cta-icon highlight" style={{ fontSize: '3rem', marginBottom: '20px' }}>
            <i className="fa-solid fa-file-lines"></i>
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Full Professional Resume</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
            Explore my full professional background, detailed project involvement, and academic record on my dedicated resume page.
          </p>
          <div className="cta-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
            <a href="/resume" className="btn btn-primary">View Interactive Resume</a>
            <a href="/DineshCV.pdf" download className="btn btn-secondary">
              <i className="fa-solid fa-download"></i> Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
