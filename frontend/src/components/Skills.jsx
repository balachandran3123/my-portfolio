const groups = [
  {
    name: "Backend",
    items: ["PHP", "Laravel", "MySQL", "SQL", "REST APIs"],
  },
  {
    name: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "Alpine.js", "jQuery", "Ajax"],
  },
  {
    name: "Laravel ecosystem",
    items: ["Laravel Livewire", "Filament", "Git"],
  },
  {
    name: "Currently learning",
    items: ["MongoDB", "Express", "React", "Node.js"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="eyebrow">Skills</p>
        <h2>Strong in PHP and Laravel. Learning MERN.</h2>
        <div className="skills-grid">
          {groups.map((group) => (
            <article className="card" key={group.name}>
              <h3>{group.name}</h3>
              <div className="tags">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}

          <article className="card skill-highlight">
            <div className="skill-level">
              <div>
                <p className="eyebrow">Usage skill</p>
                <h3>AI Prompt Engineering</h3>
              </div>
              <div className="skill-percent">
                <strong>75%</strong>
                <span>Intermediate–Advanced</span>
              </div>
            </div>
            <div
              className="skill-bar"
              role="meter"
              aria-label="AI Prompt Engineering proficiency"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={75}
            >
              <span style={{ width: "75%" }} />
            </div>
            <p className="skill-note">
              Daily workflows: coding, debugging, and product analysis. Not a
              job title — a working skill I use alongside Laravel and PHP.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
