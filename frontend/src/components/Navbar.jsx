export default function Navbar({ menuOpen, setMenuOpen }) {
  const close = () => setMenuOpen(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="logo" href="#home">
          Bala<span>.</span>
        </a>
        <button
          className="menu-btn"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#about" onClick={close}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={close}>
              Experience
            </a>
          </li>
          <li>
            <a href="#skills" onClick={close}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={close}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={close}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
