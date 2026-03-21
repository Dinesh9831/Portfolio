export default function Projects() {
  const projects = [
    {
      title: 'Fake News Classification',
      date: 'December 2025 – January 2026',
      image: '/assets/fake_news.jpg',
      tags: ['Machine Learning', 'Flask'],
      desc: 'A robust machine learning system designed to detect and classify fake news using TF-IDF and LinearSVC, integrated with a dynamic Flask web application.',
      link: 'https://github.com/Dinesh9831/Misinfo-Dectector'
    },
    {
      title: 'Meal Plan Generator',
      date: 'April 2025 – May 2025',
      image: '/assets/meal_plan.jpg',
      tags: ['AI Integration', 'JavaScript'],
      desc: 'An AI-powered web application that generates personalized nutrition plans based on user-defined macronutrients and calories using generative AI.',
      link: 'https://github.com/Dinesh9831/helios-nutrition-ai'
    },
    {
      title: 'Mental Health Care in United States',
      date: 'March 2025 – April 2025',
      image: '/assets/mental_health.png',
      tags: ['Excel', 'Data Viz'],
      desc: 'Comprehensive analysis of mental health trends across 2,000+ records, visualizing accessibility and regional disparities using Excel dashboards.',
      link: 'https://github.com/Dinesh9831/Mental-Health-Care-in-United-States-Dashboard',
      fitContain: true
    },
    {
      title: 'United States School District Analysis',
      date: 'October 2024 – November 2024',
      image: '/assets/school_data.png',
      tags: ['Power BI', 'Data Analysis'],
      desc: 'An interactive Power BI dashboard analyzing 43M+ records to examine student-teacher distribution and resource allocation across United States school districts.',
      link: 'https://github.com/Dinesh9831/School-District-Characteristics-Dashboard',
      fitContain: true
    },
    {
      title: 'Advanced Disk Schedulers',
      date: 'August 2024',
      image: '/assets/disk_scheduler.png',
      tags: ['Algorithms', 'OS'],
      desc: 'A technical simulation and visualization of advanced disk scheduling algorithms to optimize I/O performance and demonstrate OS behaviors.',
      link: 'https://github.com/Dinesh9831/os-disk-optimization'
    }
  ];

  const tagColors = {
    'Machine Learning': '',
    'Flask': 'bg-purple',
    'AI Integration': 'bg-pink',
    'JavaScript': 'bg-purple',
    'Excel': 'bg-indigo',
    'Data Viz': 'bg-cyan',
    'Power BI': 'bg-purple',
    'Data Analysis': 'bg-indigo',
    'Algorithms': 'bg-pink',
    'OS': 'bg-indigo'
  };

  return (
    <section id="projects" className="projects section-padding reveal reveal-up">
      <div className="container">
        <h2 className="section-title title-emerald">
          <i className="fa-solid fa-code icon-emerald"></i> Featured <span className="highlight">Projects</span>
        </h2>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-card">
              <div className="project-badge">{project.date}</div>
              <div className={`project-img ${project.fitContain ? 'fit-contain' : ''}`}>
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className={`tag ${tagColors[tag] || ''}`}>{tag}</span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-sm">
                    <i className="fa-brands fa-github"></i> Source Code
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
