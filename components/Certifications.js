export default function Certifications() {
  const certifications = [

    {
      title: 'Privacy and Security in Social Media',
      date: 'November 2025',
      image: '/assets/NPTEL.png',
      tags: ['Security', 'NPTEL'],
      desc: 'Course on the Privacy and Security in online Social Media from NPTEL.',
      link: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS117S145870213510654978'
    },
    {
      title: 'OCI 2025 Data Science Professional',
      date: 'October 2025',
      image: '/assets/Oracle.png',
      tags: ['DS Professional', 'Oracle'],
      desc: 'Oracle Cloud Infrastructure 2025 Certified Data Science Professional.',
      link: 'https://drive.google.com/file/d/110sLCbiyi6rCH7mPh1peu2d4VQTgfVq9/view?usp=sharing'
    },
    {
      title: 'ML with Data Science Guide',
      date: 'July 2025',
      image: '/assets/ds-ml.png',
      tags: ['ML Guide', 'CipherSchools'],
      desc: 'A Guide to Machine Learning with Data Science by CipherSchools.',
      link: 'https://www.cipherschools.com/certificate/preview?id=687e3fd47efd6d5090703dc8'
    },
    {
      title: 'Python for ML and AI',
      date: 'March 2024',
      isPoster: true,
      tags: ['Python AI', 'CSE Pathshala'],
      desc: 'Python for Machine Learning and Artificial Intelligence by CSE Pathshala.',
      link: 'https://drive.google.com/file/d/1xIodMJlu57OS6_p6byt35d6IjQEFuVUD/view'
    }
  ];

  const tagColors = {
    'Security': 'bg-purple',
    'NPTEL': 'bg-cyan',
    'DS Professional': 'bg-pink',
    'Oracle': 'bg-indigo',
    'ML Guide': 'bg-purple',
    'CipherSchools': 'bg-cyan',
    'Python AI': 'bg-pink',
    'CSE Pathshala': 'bg-indigo',
    'AI': 'bg-pink',
    'Cloud': 'bg-purple',
    'IBM': 'bg-indigo'
  };

  return (
    <section id="certifications" className="certifications section-padding reveal reveal-up">
      <div className="container">
        <h2 className="section-title">
          <i className="fa-solid fa-award icon-indigo"></i> Professional <span className="highlight">Certifications</span>
        </h2>
        <div className="project-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="project-card glass-card">
              <div className="project-badge">{cert.date}</div>
              <div className="project-img">
                {cert.isPoster ? (
                  <div className={`cert-poster ${cert.title.toLowerCase().includes('ibm') ? 'poster-ibm' : 'poster-python-ai'}`}>
                    <div className="poster-overlay"></div>
                    <div className="poster-content">
                      <i className={cert.title.toLowerCase().includes('ibm') ? 'fa-brands fa-ibm' : 'fa-brands fa-python'}></i>
                      <h3 className="poster-title">{cert.title.toLowerCase().includes('ibm') ? 'IBM AI & Cloud' : 'Python AI/ML'}</h3>
                      <span className="poster-subtitle">{cert.title.toLowerCase().includes('ibm') ? 'Emerging Tech' : 'Data Science Mastery'}</span>
                    </div>
                  </div>
                ) : (
                  <img src={cert.image} alt={cert.title} className="cert-img" />
                )}
              </div>
              <div className="project-content">
                <div className="project-tags">
                  {cert.tags.map((tag, tIndex) => (
                    <span key={tIndex} className={`tag ${tagColors[tag] || ''}`}>{tag}</span>
                  ))}
                </div>
                <h3 className="project-title">{cert.title}</h3>
                <p className="project-desc">{cert.desc}</p>
                <div className="project-links">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn-sm">
                    <i className="fa-solid fa-certificate"></i> View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
