const roles = [
  {
    title: "Web Application Developer",
    company: "Eywa Media",
    place: "Bangalore",
    dates: "2025 – Present",
    points: [
      "Currently working as a web application developer, building and maintaining production web apps with PHP and Laravel.",
      "Collaborate with the team to ship features, improve existing modules, and keep applications reliable.",
      "Use REST APIs, MySQL, and Git as part of day-to-day full-stack work.",
    ],
  },
  {
    title: "Web Developer",
    company: "SaaS Forest Infotech",
    place: "",
    dates: "June 2023 – July 2024",
    points: [
      "Developed and maintained dynamic web applications using Laravel, Laravel Livewire, Filament, Alpine.js, and MySQL.",
      "Built and integrated REST APIs for applications.",
      "Maintained Git repositories for version control.",
      "Designed database structures to store data securely and efficiently.",
      "Collaborated with teammates to complete projects on time.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <p className="eyebrow">Experience</p>
        <h2>Where I work and what I have shipped in Laravel.</h2>
        <div className="timeline">
          {roles.map((role) => (
            <article className="card timeline-card" key={`${role.company}-${role.dates}`}>
              <div className="timeline-head">
                <div>
                  <h3>{role.title}</h3>
                  <p className="role-meta">
                    {role.company}
                    {role.place ? ` · ${role.place}` : ""}
                  </p>
                </div>
                <span className="tag">{role.dates}</span>
              </div>
              <ul className="role-points">
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
