'use client';

import { useState } from 'react';
import { useRevealAnimation } from '../../hooks/useRevealAnimation';
import { SkillCategory } from '../../types';

export default function Skills() {
  const revealRef = useRevealAnimation<HTMLElement>();
  const [activeCategory, setActiveCategory] = useState<number | null>(0);

  const categories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: 'fa-code',
      className: 'color-1',
      skills: [
        { name: 'Python', level: 'Advanced', logo: '/assets/logos/python.svg' },
        { name: 'C++', level: 'Advanced', logo: '/assets/logos/cpp.svg' },
        { name: 'C', level: 'Intermediate', logo: '/assets/logos/c.svg' },
        { name: 'Java', level: 'Intermediate', logo: '/assets/logos/java.svg' },
        { name: 'JavaScript', level: 'Intermediate', logo: '/assets/logos/javascript.svg' },
      ]
    },
    {
      title: 'Libraries & Frameworks',
      icon: 'fa-layer-group',
      className: 'color-2',
      skills: [
        { name: 'NumPy', level: 'Advanced', logo: '/assets/logos/numpy.svg' },
        { name: 'Pandas', level: 'Advanced', logo: '/assets/logos/pandas.svg' },
        { name: 'TensorFlow', level: 'Intermediate', logo: '/assets/logos/tensorflow.svg' },
        { name: 'Seaborn', level: 'Advanced', logo: '/assets/logos/seaborn.svg' },
        { name: 'Scikit-Learn', level: 'Advanced', logo: '/assets/logos/sklearn.svg' },
        { name: 'Flask', level: 'Intermediate', logo: '/assets/logos/flask.svg' },
      ]
    },
    {
      title: 'Developer Tools & Technologies',
      icon: 'fa-screwdriver-wrench',
      className: 'color-3',
      skills: [
        { name: 'Git', level: 'Advanced', logo: '/assets/logos/git.svg' },
        { name: 'GitHub', level: 'Advanced', logo: '/assets/logos/github.svg' },
        { name: 'Excel', level: 'Advanced', logo: '/assets/logos/excel.svg' },
        { name: 'Power BI', level: 'Advanced', logo: '/assets/logos/powerbi.svg' },
        { name: 'Tableau', level: 'Intermediate', logo: '/assets/logos/tableau.svg' },
        { name: 'MySQL', level: 'Advanced', logo: '/assets/logos/mysql.svg' },
        { name: 'Linux', level: 'Intermediate', logo: '/assets/logos/linux.svg' },
        { name: 'VS Code', level: 'Advanced', logo: '/assets/logos/vscode.svg' },
        { name: 'Docker', level: 'Intermediate', logo: '/assets/logos/docker.svg' },
        { name: 'Maven', level: 'Intermediate', logo: '/assets/logos/maven.svg' },
      ]
    },
    {
      title: 'Soft Skills',
      icon: 'fa-handshake',
      className: 'color-4',
      skills: [
        { name: 'Problem-solving', icon: 'fa-puzzle-piece' },
        { name: 'Project Management', icon: 'fa-list-check' },
        { name: 'Adaptability', icon: 'fa-people-arrows' },
        { name: 'Critical Thinking', icon: 'fa-brain' },
        { name: 'Continuous Learner', icon: 'fa-book-open' },
        { name: 'Team Player', icon: 'fa-people-group' },
      ]
    }
  ];

  const categoryAccents = [
    { color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.15)', border: 'rgba(56, 189, 248, 0.4)' },
    { color: '#a855f7', bg: 'rgba(168, 85, 247, 0.15)', border: 'rgba(168, 85, 247, 0.4)' },
    { color: '#ec4899', bg: 'rgba(236, 72, 153, 0.15)', border: 'rgba(236, 72, 153, 0.4)' },
    { color: '#6366f1', bg: 'rgba(99, 102, 241, 0.15)', border: 'rgba(99, 102, 241, 0.4)' }
  ];

  return (
    <section ref={revealRef} id="skills" className="skills section-padding reveal reveal-zoom">
      <div className="container">
        <h2 className="section-title title-purple">
          <i className="fa-solid fa-cubes icon-purple"></i> <span className="highlight">Skills</span>
        </h2>

        {/* Category Selection Tabs / Buttons */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          justifyContent: 'center',
          marginBottom: '35px'
        }}>
          {categories.map((cat, idx) => {
            const isActive = activeCategory === idx;
            const accent = categoryAccents[idx];
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveCategory(isActive ? null : idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 22px',
                  borderRadius: '30px',
                  border: isActive ? `2px solid ${accent.color}` : '1px solid rgba(255, 255, 255, 0.15)',
                  backgroundColor: isActive ? accent.bg : 'rgba(15, 23, 42, 0.6)',
                  color: isActive ? '#fff' : 'var(--text-secondary, #94a3b8)',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  boxShadow: isActive ? `0 6px 20px ${accent.bg}` : 'none'
                }}
              >
                <i className={`fa-solid ${cat.icon}`} style={{ color: accent.color }}></i>
                <span>{cat.title}</span>
                <span style={{
                  fontSize: '0.75rem',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  backgroundColor: isActive ? accent.color : 'rgba(255, 255, 255, 0.1)',
                  color: isActive ? '#0f172a' : '#cbd5e1',
                  fontWeight: 700
                }}>
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Collapsible Category Cards */}
        <div className="skills-wrapper skills-panel glass-card" style={{ gap: '20px', padding: '25px' }}>
          {categories.map((cat, index) => {
            const isOpen = activeCategory === index;
            const accent = categoryAccents[index];

            return (
              <div 
                key={index} 
                className={`skill-category ${cat.className}`}
                style={{
                  border: isOpen ? `1px solid ${accent.border}` : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '18px 22px',
                  backgroundColor: isOpen ? 'rgba(15, 23, 42, 0.65)' : 'rgba(15, 23, 42, 0.35)',
                  transition: 'all 0.3s ease',
                  boxShadow: isOpen ? `0 8px 30px rgba(0, 0, 0, 0.3)` : 'none'
                }}
              >
                {/* Category Header (Clickable) */}
                <div 
                  onClick={() => setActiveCategory(isOpen ? null : index)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                >
                  <h3 className="category-title" style={{ margin: 0, fontSize: '1.25rem' }}>
                    <i className={`fa-solid ${cat.icon}`} style={{ color: accent.color }}></i> {cat.title}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{
                      fontSize: '0.8rem',
                      color: isOpen ? accent.color : '#94a3b8',
                      fontWeight: 600
                    }}>
                      {cat.skills.length} tools
                    </span>
                    <i 
                      className="fa-solid fa-chevron-down"
                      style={{
                        color: isOpen ? accent.color : '#94a3b8',
                        transition: 'transform 0.3s ease',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    ></i>
                  </div>
                </div>

                {/* Skills Grid (Only comes when clicked / open) */}
                {isOpen && (
                  <div 
                    className="skills-grid"
                    style={{
                      animation: 'skillsFadeIn 0.35s ease-out',
                      marginTop: '20px',
                      paddingTop: '15px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    {cat.skills.map((skill, sIndex) => (
                      <div key={sIndex} className="skill-item">
                        <div className="skill-top">
                          {skill.logo ? (
                            <img src={skill.logo} alt={skill.name} className="skill-logo" />
                          ) : (
                            <i className={`${(skill.icon?.includes('fa-brands') || skill.icon?.includes('fa-solid')) ? skill.icon : `fa-solid ${skill.icon}`} skill-icon`}></i>
                          )}
                          <div className="skill-name-badge">
                            <span>{skill.name}</span>
                            {skill.level && (
                              <span className={`skill-level ${skill.level.toLowerCase()}`}>{skill.level}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes skillsFadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
