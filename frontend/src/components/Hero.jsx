export default function Hero() {
  return (
    <section id="home" className="container hero">
      <div>
        <p className="eyebrow">Laravel full-stack developer</p>
        <h1>
          Hi, I&apos;m <em>Balachandran.S</em>
        </h1>
        <div className="hero-copy">
          <p className="lead">
            Results-driven Web Application Developer specializing in PHP and Laravel, with hands-on experience building scalable, secure, and user-focused web applications. Skilled in Laravel, Livewire, Filament, MySQL, REST APIs, JavaScript, and Bootstrap, with strong experience in backend development, database design, API integration, authentication, and business logic implementation.
          </p>
          <p className="lead">
            Currently working at Eywa Media, Bangalore, contributing to real-world Laravel applications and developing reliable solutions for complex business requirements. Passionate about writing clean, maintainable code and continuously improving application performance and user experience.
          </p>
          <p className="lead">
            Currently expanding my expertise in the MERN stack (MongoDB, Express.js, React, and Node.js) to strengthen my full-stack development capabilities and build modern, end-to-end web applications.
          </p>
        </div>
        <div className="actions">
          <a className="btn btn-primary" href="#experience">
            Experience
          </a>
          <a className="btn btn-ghost" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
      <aside className="hero-card">
        <p className="eyebrow">Currently</p>
        <h3>Web Application Developer</h3>
        <p>
          Eywa Media · Bangalore. Building and maintaining web applications with
          PHP and Laravel, while working with MySQL, REST APIs
          and JavaScript. Currently expanding my full-stack skills by learning
          MongoDB, Express.js, React, and Node.js.
        </p>
        <div className="stat-row">
          <div className="stat">
            <strong>1.8+</strong>
            <span>Years Experience</span>
          </div>
          <div className="stat">
            <strong>PHP</strong>
            <span>Core Language</span>
          </div>
          <div className="stat">
            <strong>Laravel</strong>
            <span>Primary Framework</span>
          </div>
        </div>
      </aside>
    </section>
  );
}
