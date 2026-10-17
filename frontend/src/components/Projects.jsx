import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load");
        return res.json();
      })
      .then(setProjects)
      .catch(() => setError("Could not load projects from the API."));
  }, []);

  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="eyebrow">Projects</p>
        <h2>Laravel and PHP applications I have built.</h2>
        {error && <p className="status err">{error}</p>}
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="card" key={project._id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {(project.tags || []).map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="actions">
                {project.githubUrl && (
                  <a className="btn btn-ghost" href={project.githubUrl} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a className="btn btn-primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
