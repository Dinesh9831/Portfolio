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
                <h4 style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>Computer Science & Engineering Student | Data Scientist</h4>
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
                <h3 className="r-section-title"><i className="fa-solid fa-briefcase icon-cyan"></i> Internship</h3>
                
                <div className="r-item">
                  <div className="r-item-head">
                    <h4>AI Cloud Intern</h4>
                    <span className="r-date">July 2025 – August 2025</span>
                  </div>
                  <div className="r-item-sub">AICTE IBM Virtual Internship by Edunet Foundation | <a href="https://drive.google.com/file/d/166vwVVy8vgKygJI8AvmW7rgXmlfpGb8j/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="highlight">View Certificate</a></div>
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
                    <li>Engineered a Flask-based interactive web application with dynamic input handling and confidence scoring.</li>
                  </ul>
                </div>

                <div className="r-item">
                  <div className="r-item-head">
                    <h4>Power BI Dashboard for U.S. School District Data</h4>
                    <span className="r-date">November 2025 – December 2025</span>
                  </div>
                  <div className="r-item-sub">Project | <a href="https://github.com/Dinesh9831/School-District-Characteristics-Dashboard" target="_blank" rel="noopener noreferrer" className="highlight">GitHub</a></div>
                  <ul className="r-details">
                    <li>Analyzed and structured 43M+ student records and 168K+ teacher data points to examine district distribution, regional disparities, and student-teacher ratio patterns across the U.S.</li>
                    <li>Constructed interactive drill-down dashboards using Power BI, incorporating DAX measures, dynamic charts, KPIs, slicers, and decomposition tree visuals to enable multi-level data exploration.</li>
                    <li>Generated actionable visual insights highlighting education resource allocation trends, district-level variations, and nationwide student distribution patterns.</li>
                  </ul>
                </div>

                <div className="r-item">
                  <div className="r-item-head">
                    <h4>Chatbot – Meal Plan Generator</h4>
                    <span className="r-date">April 2025 – May 2025</span>
                  </div>
                  <div className="r-item-sub">Project | <a href="https://github.com/Dinesh9831/helios-nutrition-ai" target="_blank" rel="noopener noreferrer" className="highlight">GitHub</a></div>
                  <ul className="r-details">
                    <li>Architected an AI-powered web application that generates personalized meal plans based on user-defined calories, macronutrients, meal type, and cuisine using Flask and external AI API integration.</li>
                    <li>Created an interactive and responsive user interface using HTML, CSS, and JavaScript with real-time input controls and dynamic rendering of generated meal plans.</li>
                    <li>Focused on delivering a practical nutrition planning solution by integrating frontend and backend seamlessly and ensuring secure API key management using environment variables.</li>
                  </ul>
                </div>
              </div>



              {/* CERTIFICATIONS */}
              <div className="resume-section">
                <h3 className="r-section-title"><i className="fa-solid fa-award icon-indigo"></i> Certifications</h3>



                <div className="r-item">
                  <div className="r-item-head">
                    <h4>Privacy and Security in Social Media</h4>
                    <span className="r-date">November 2025</span>
                  </div>
                  <div className="r-item-sub">Issuer: NPTEL | <a href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS117S145870213510654978" target="_blank" rel="noopener noreferrer" className="highlight">View Certificate</a></div>
                  <ul className="r-details">
                    <li>Course on the Privacy and Security in online Social Media from NPTEL.</li>
                  </ul>
                </div>

                <div className="r-item">
                  <div className="r-item-head">
                    <h4>OCI 2025 Data Science Professional</h4>
                    <span className="r-date">October 2025</span>
                  </div>
                  <div className="r-item-sub">Issuer: Oracle | <a href="https://drive.google.com/file/d/110sLCbiyi6rCH7mPh1peu2d4VQTgfVq9/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="highlight">View Certificate</a></div>
                  <ul className="r-details">
                    <li>Oracle Cloud Infrastructure 2025 Certified Data Science Professional.</li>
                  </ul>
                </div>

                <div className="r-item">
                  <div className="r-item-head">
                    <h4>ML with Data Science Guide</h4>
                    <span className="r-date">July 2025</span>
                  </div>
                  <div className="r-item-sub">Issuer: CipherSchools | <a href="https://www.cipherschools.com/certificate/preview?id=687e3fd47efd6d5090703dc8" target="_blank" rel="noopener noreferrer" className="highlight">View Certificate</a></div>
                  <ul className="r-details">
                    <li>A Guide to Machine Learning with Data Science by CipherSchools.</li>
                  </ul>
                </div>

                <div className="r-item">
                  <div className="r-item-head">
                    <h4>Python for ML and AI</h4>
                    <span className="r-date">March 2024</span>
                  </div>
                  <div className="r-item-sub">Issuer: CSE Pathshala | <a href="https://drive.google.com/file/d/1xIodMJlu57OS6_p6byt35d6IjQEFuVUD/view" target="_blank" rel="noopener noreferrer" className="highlight">View Certificate</a></div>
                  <ul className="r-details">
                    <li>Python for Machine Learning and Artificial Intelligence by CSE Pathshala.</li>
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
                    <span className="r-date">Since August 2023</span>
                  </div>
                  <div className="r-item-sub">Bachelor of Technology - Computer Science and Engineering | CGPA: 7.55</div>
                  <div className="r-item-sub" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Phagwara, Punjab</div>
                </div>

                <div className="r-item">
                  <div className="r-item-head">
                    <h4>Aditya Junior College</h4>
                    <span className="r-date">April 2021 – March 2023</span>
                  </div>
                  <div className="r-item-sub">Intermediate | Percentage: 87.8%</div>
                  <div className="r-item-sub" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Kakinada, Andhra Pradesh</div>
                </div>

                <div className="r-item">
                  <div className="r-item-head">
                    <h4>Narayana E.M. School</h4>
                    <span className="r-date">April 2020 – March 2021</span>
                  </div>
                  <div className="r-item-sub">Matriculation | Percentage: 96.7%</div>
                  <div className="r-item-sub" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Kakinada, Andhra Pradesh</div>
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
