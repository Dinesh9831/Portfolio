export default function Achievements() {
  const achievements = [
    {
      title: 'LeetCode Milestone',
      icon: 'fa-code',
      color: '#FFA116',
      desc: 'Solved <strong>150+ coding problems</strong>, focusing on data structures and algorithms.'
    },
    {
      title: 'HackerRank Python',
      icon: 'fa-terminal',
      color: '#2EC866',
      desc: 'Achieved a <strong>4-Star rating</strong> in Python programming proficiency.'
    },
    {
      title: 'HackerRank C++',
      icon: 'fa-microchip',
      color: '#004482',
      desc: 'Achieved a <strong>3-Star rating</strong> in C++ programming proficiency.'
    }
  ];

  return (
    <section id="achievements" className="achievements section-padding reveal reveal-up">
      <div className="container">
        <h2 className="section-title title-gold">
          <i className="fa-solid fa-trophy icon-gold"></i> Professional <span className="highlight">Achievements</span>
        </h2>
        <div className="achievement-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {achievements.map((item, index) => (
            <div key={index} className="project-card glass-card p-35" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div className="a-icon" style={{ fontSize: '2.5rem', color: item.color }}>
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '5px' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }} dangerouslySetInnerHTML={{ __html: item.desc }}></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
