'use client';

import { useEffect } from 'react';
import BackgroundEffects from '../../components/BackgroundEffects';
import Cursor from '../../components/Cursor';

export default function Resume() {
  useEffect(() => {
    // Theme Loader
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') document.body.classList.add('light-theme');

    // Scroll effect
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main>
      <BackgroundEffects />
      <Cursor />

      {/* ================= NAVBAR ================= */}
      <header className="glass-nav scrolled">
        <nav className="navbar">
          <h2 className="logo">MSD<span>.</span></h2>
          <ul className="nav-links">
            <li><a href="/" className="nav-link">Home</a></li>
            <li><a href="/#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* ================= RESUME CONTENT ================= */}
      <section className="resume-page section-padding">
        <div className="container">
          <div className="resume-wrapper glass-card p-35" style={{ maxWidth: '1000px', margin: '0 auto' }}>

            {/* HEADER (NAME & CONTACT) */}
            <div className="resume-header">
              <div className="r-head-info">
                <h1 style={{ fontSize: '3rem', marginBottom: '5px' }}>Moturi Sai <span className="highlight">Dinesh</span></h1>
                <h4 style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>Computer Science & Engineering Student | Data Science Enthusiast</h4>
              </div>
              <div className="r-head-contact" style={{ textAlign: 'right' }}>
                <p><i className="fa-solid fa-phone icon-cyan"></i> +91-9390107209</p>
                <p><i className="fa-solid fa-envelope icon-pink"></i> moturisaidinesh@gmail.com</p>
                <p>
                  <a href="https://www.linkedin.com/in/moturi-sai-dinesh-68572a291/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin icon-cyan"></i> LinkedIn
                  </a>
                </p>
                <p>
                  <a href="https://github.com/Dinesh9831" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github icon-purple"></i> GitHub
                  </a>
                </p>
              </div>
            </div>

            <hr className="resume-divider" style={{ margin: '30px 0', border: 'none', borderTop: '1px solid var(--card-border)' }} />

            <div className="resume-body">
              {/* TECHNICAL PROFICIENCY */}
              <div className="resume-section">
                <h3 className="r-section-title"><i className="fa-solid fa-laptop-code icon-pink"></i> Skills</h3>
                <div className="r-item">
                  <ul className="r-details no-bullet">
                    <li><strong>Languages:</strong> C++, C, Python, Java, JavaScript</li>
                    <li><strong>Libraries:</strong> NumPy, Pandas, TensorFlow, Seaborn, Scikit-learn</li>
                    <li><strong>Tools & Platforms:</strong> Git, GitHub, Excel, Power BI, Tableau</li>
                    <li><strong>Databases:</strong> MySQL</li>
                    <li><strong>Soft Skills:</strong> Problem-solving, Project Management, Adaptability, Critical Thinking</li>
                  </ul>
                </div>
              </div>

              {/* EXPERIENCE (INTERNSHIP) */}
              <div className="resume-section">
                <h3 className="r-section-title"><i className="fa-solid fa-briefcase icon-cyan"></i> Internships</h3>
                
                <div className="r-item">
                  <div className="r-item-head">
                    <h4>Data Visualization Virtual Intern</h4>
                    <span className="r-date">February 2026 – Present</span>
                  </div>
                  <div className="r-item-sub">Infosys Springboard Internship Program</div>
                  <ul className="r-details">
                    <li>Analyzing complex datasets using Power BI, Microsoft Excel, and SQL to transform raw data into actionable business insights.</li>
                    <li>Developing interactive dashboards and visual analytics with Python (Matplotlib, Seaborn) to support data-driven decision making.</li>
                  </ul>
                </div>

                <div className="r-item">
                  <div className="r-item-head">
                    <h4>AI Cloud Intern</h4>
                    <span className="r-date">July 2025 – August 2025</span>
                  </div>
                  <div className="r-item-sub">AICTE IBM Virtual Internship by Edunet Foundation</div>
                  <ul className="r-details">
                    <li>Automated the end-to-end deployment process of ML models on IBM Cloud using CI/CD pipelines, improving workflow efficiency by 30%.</li>
                    <li>Used AutoAI to rapidly experiment with multiple model candidates, evaluating performance metrics and production readiness.</li>
                    <li>Implemented and tested a Watsonx-based generative AI prototype, gaining experience in prompt engineering.</li>
                  </ul>
                </div>
              </div>

              {/* PROJECTS */}
              <div className="resume-section">
                <h3 className="r-section-title"><i className="fa-solid fa-code icon-emerald"></i> Projects</h3>

                <div className="r-item">
                  <div className="r-item-head">
                    <h4>Fake News Classification Using Machine Learning</h4>
                    <span className="r-date">December 2025 – January 2026</span>
                  </div>
                  <div className="r-item-sub">Project | <a href="https://github.com/Dinesh9831/Misinfo-Dectector" target="_blank" rel="noopener noreferrer" className="highlight">GitHub</a></div>
                  <ul className="r-details">
                    <li>Processed and cleaned large-scale news datasets, combining 40K+ articles for high-quality training item preparations.</li>
                    <li>Designed and trained a machine learning pipeline using TF-IDF and LinearSVC, achieving high accuracy and robust performance.</li>
                    <li>Developed Flask-based interactive web application with dynamic input handling and confidence scoring.</li>
                  </ul>
                </div>

                <div className="r-item">
                  <div className="r-item-head">
                    <h4>Chatbot – Meal Plan Generator</h4>
                    <span className="r-date">April 2025 – May 2025</span>
                  </div>
                  <div className="r-item-sub">Project | <a href="https://github.com/Dinesh9831/helios-nutrition-ai" target="_blank" rel="noopener noreferrer" className="highlight">GitHub</a></div>
                  <ul className="r-details">
                    <li>Created an AI-powered web application that generates personalized meal plans based on calories and macronutrients setup using Flask and AI integration.</li>
                    <li>Implemented interactive and responsive UI with real-time input controls directly tied to view render modules.</li>
                  </ul>
                </div>
              </div>

              {/* EXTRA-CURRICULAR ACTIVITIES */}
              <div className="resume-section">
                <h3 className="r-section-title"><i className="fa-solid fa-users-rays icon-amber"></i> Extra-Curricular Activities</h3>
                <div className="r-item">
                  <div className="r-item-head">
                    <h4>Participant, "Code-A-Haunt" 24-Hour Hackathon</h4>
                    <span className="r-date">Feb 2024</span>
                  </div>
                  <div className="r-item-sub">Coding Blocks LPU | Phagwara, Punjab</div>
                  <ul className="r-details">
                    <li>Collaborated in an intensive sprint to build a live project, enhancing skills in rapid prototyping and teamwork execution.</li>
                  </ul>
                </div>
              </div>

              {/* ACHIEVEMENTS */}
              <div className="resume-section">
                <h3 className="r-section-title"><i className="fa-solid fa-trophy icon-gold"></i> Achievements</h3>
                <div className="r-item">
                  <ul className="r-details no-bullet">
                    <li><strong>LeetCode:</strong> Solved 150+ coding problems, focusing on data structures and algorithms.</li>
                    <li><strong>HackerRank Python:</strong> Achieved a 4-Star rating in Python programming proficiency.</li>
                    <li><strong>HackerRank C++:</strong> Achieved a 3-Star rating in C++ programming proficiency.</li>
                  </ul>
                </div>
              </div>

              {/* EDUCATION */}
              <div className="resume-section" style={{ marginBottom: 0 }}>
                <h3 className="r-section-title"><i className="fa-solid fa-graduation-cap icon-purple"></i> Education</h3>
                <div className="r-item">
                  <div className="r-item-head">
                    <h4>Lovely Professional University</h4>
                    <span className="r-date">Aug 2023 - Present</span>
                  </div>
                  <div className="r-item-sub">Bachelor of Technology - CSE | CGPA: 7.55</div>
                </div>

                <div className="r-item">
                  <div className="r-item-head">
                    <h4>Aditya Junior College</h4>
                    <span className="r-date">Apr 2021 - Mar 2023</span>
                  </div>
                  <div className="r-item-sub">Intermediate | Percentage: 87.8%</div>
                </div>
              </div>
            </div>

            <div className="resume-footer" style={{ marginTop: '50px', textAlign: 'center' }}>
              <a href="/DineshCV.pdf" download className="btn btn-primary">
                <i className="fa-solid fa-download"></i> Download PDF Version
              </a>
              <a href="/" className="btn btn-secondary" style={{ marginLeft: '10px' }}>Back to Portfolio</a>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="container footer-content">
          <p>&copy; {new Date().getFullYear()} MSD. All rights reserved.</p>
          <div className="social-links">
            <a href="https://github.com/Dinesh9831" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/moturi-sai-dinesh-68572a291/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <a href="/" className="scroll-top"><i className="fa-solid fa-chevron-up"></i></a>
        </div>
      </footer>
    </main>
  );
}
