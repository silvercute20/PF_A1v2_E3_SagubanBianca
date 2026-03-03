function Footer() {
  return (
    <footer className="py-4 border-top">
      <div className="container d-flex flex-wrap justify-content-between align-items-center">

        <p className="mb-0 text-secondary">
          © <span>{new Date().getFullYear()}</span> SILVERBULLET. All rights reserved.
        </p>

        <div className="d-flex gap-3">
          <a href="#" className="text-secondary">
            <i className="bi bi-github"></i>
          </a>

          <a href="#" className="text-secondary">
            <i className="bi bi-linkedin"></i>
          </a>

          <a href="#" className="text-secondary">
            <i className="bi bi-envelope"></i>
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;