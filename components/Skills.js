export default function Skills() {
  const categories = [
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
        { name: 'Git & GitHub', level: 'Advanced', logo: '/assets/logos/git.svg' },
        { name: 'Excel', level: 'Advanced', logo: '/assets/logos/excel.svg' },
        { name: 'Power BI', level: 'Advanced', logo: '/assets/logos/powerbi.svg' },
        { name: 'Tableau', level: 'Intermediate', icon: 'fa-chart-pie' },
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
  return (
    <section id="skills" className="skills section-padding reveal reveal-zoom">
      <div className="container">
        <h2 className="section-title title-purple">
          <i className="fa-solid fa-cubes icon-purple"></i> My <span className="highlight">Skills</span>
        </h2>

        <div className="skills-wrapper glass-card">
          {categories.map((cat, index) => (
            <div key={index} className={`skill-category ${cat.className}`}>
              <h3 className="category-title">
                <i className={`fa-solid ${cat.icon}`}></i> {cat.title}
              </h3>
              <div className="skills-grid">
                {cat.skills.map((skill, sIndex) => (
                  <div key={sIndex} className="skill-item">
                    <div className="skill-top">
                      {skill.logo ? (
                        <img src={skill.logo} alt={skill.name} className="skill-logo" />
                      ) : (
                        <i className={`fa-solid ${skill.icon} skill-icon`}></i>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
