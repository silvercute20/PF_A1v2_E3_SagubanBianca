function Navbar () {
    return (
        <nav className = "navbar navbar-expand-lg bg-white shadow-sm sticky-top"aria-label="Main navigation">
            <div className="container">
                <a className="navbar-brand fw-semibold" href="#home">
                    SILVERBULLET <span className="text-primary">.</span>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
                <span className="navbar-toggler-icon"></span>
                 </button>

                        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            <li className="nav-item ms-lg-2">
              <a className="btn btn-primary btn-sm" href="#contact">Hire Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        
    );
}

export default Navbar;