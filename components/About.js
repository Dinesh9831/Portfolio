'use client';

import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('about-journey');

  const tabs = [
    { id: 'about-journey', label: 'My Journey', icon: 'fa-route icon-cyan' },
    { id: 'about-approach', label: 'My Approach', icon: 'fa-lightbulb icon-pink' },
    { id: 'about-facts', label: 'Quick Facts', icon: 'fa-bolt icon-amber' },
  ];

  return (
    <section id="about" className="about section-padding reveal reveal-left">
      <div className="container">
        <h2 className="section-title title-pink">
          <i className="fa-solid fa-user icon-pink"></i> About <span className="highlight">Me</span>
        </h2>

        <div className="about-dashboard">
          {/* Sidebar Navigation */}
          <div className="about-sidebar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`about-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <i className={`fa-solid ${tab.icon}`}></i>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="about-content-wrapper glass-card">
            {/* Journey Content */}
            {activeTab === 'about-journey' && (
              <div className="about-tab-content active" id="about-journey">
                <h3 className="dash-title"><i className="fa-solid fa-map-location-dot icon-cyan"></i> The Path Traveled</h3>
                <div className="journey-content">
                  <div className="journey-item">
                    <div className="journey-icon"><i className="fa-solid fa-compass icon-cyan"></i></div>
                    <div className="journey-paragraph">
                      <p>My journey into the world of technology began with a deep-seated curiosity about the inner workings of software systems. This drive led me to focus on Computer Science, where I built a robust foundation in software design and core engineering principles, passionate about understanding how complex systems are architected.</p>
                    </div>
                  </div>
                  <div className="journey-item">
                    <div className="journey-icon"><i className="fa-solid fa-database icon-pink"></i></div>
                    <div className="journey-paragraph">
                      <p>As I progressed, my interests naturally gravitated toward the power of data. I immersed myself in Data Science, focusing on analytics and derived intelligence. I found immense satisfaction in transforming raw data into actionable insights and solving real-world challenges through analytical rigor.</p>
                    </div>
                  </div>
                  <div className="journey-item">
                    <div className="journey-icon"><i className="fa-solid fa-brain icon-amber"></i></div>
                    <div className="journey-paragraph">
                      <p>Currently, I am specializing in Artificial Intelligence and Cloud Computing. Working alongside frameworks supported by AICTE and IBM, I am dedicated to scaling intelligent models and architecting cloud-based solutions that are both scalable and impactful.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Approach Content */}
            {activeTab === 'about-approach' && (
              <div className="about-tab-content active" id="about-approach">
                <h3 className="dash-title">My Methodology</h3>
                <div className="approach-grid">
                  <div className="approach-item glass-card card-glow">
                    <div className="item-header">
                      <div className="item-icon"><i className="fa-solid fa-brain icon-indigo"></i></div>
                      <h4>Analytical Mindset</h4>
                    </div>
                    <p>Deconstructing complex issues into manageable components using rigorous data-backed logic.</p>
                  </div>
                  <div className="approach-item glass-card card-glow">
                    <div className="item-header">
                      <div className="item-icon"><i className="fa-solid fa-code icon-emerald"></i></div>
                      <h4>Robust Code</h4>
                    </div>
                    <p>Ensuring solutions are resilient, scalable, and built for edge cases with high maintainability.</p>
                  </div>
                  <div className="approach-item glass-card card-glow">
                    <div className="item-header">
                      <div className="item-icon"><i className="fa-solid fa-bolt icon-amber"></i></div>
                      <h4>Agile Learning</h4>
                    </div>
                    <p>Swift adoption of emerging technologies and quick adjusting based on metrics and feedback.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Facts Content */}
            {activeTab === 'about-facts' && (
              <div className="about-tab-content active" id="about-facts">
                <h3 className="dash-title">Behind the Screens</h3>
                <div className="facts-dashboard">
                  <ul className="facts-list">
                    <li><i className="fa-solid fa-graduation-cap icon-purple"></i> <span>Computer Science Student</span></li>
                    <li><i className="fa-solid fa-brain icon-pink"></i> <span>Passionate about ML & AI</span></li>
                    <li><i className="fa-solid fa-laptop-code icon-cyan"></i> <span>Data Structures & Algorithms</span></li>
                    <li><i className="fa-solid fa-hammer icon-amber"></i> <span>Building Technical Projects</span></li>
                  </ul>
                  <div className="fact-pills">
                    <span className="pill-badge bg-cyan-light"><i className="fa-solid fa-compass icon-cyan"></i> Open Minded</span>
                    <span className="pill-badge bg-pink-light"><i className="fa-solid fa-book-open icon-pink"></i> Continuous Learner</span>
                    <span className="pill-badge bg-amber-light"><i className="fa-solid fa-people-group icon-amber"></i> Team Player</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
