function Projects() {
  return (
    <section id="projects">
      <div className="container">

        <h2 className="text-center accent-underline">Projects</h2>

        <p className="text-center text-secondary mt-3 mb-5">
          Selected work showcasing UI and component design.
        </p>

        <div className="row g-4">

          {/* Project Card 1 */}
          <div className="col-md-6 col-lg-4">
            <article className="card h-100 shadow-sm">

              <img
                src="https://picsum.photos/600/400?random=1"
                className="card-img-top"
                alt="Project 1 preview"
              />

              <div className="card-body">
                <h3 className="h5 card-title">Dashboard UI</h3>

                <p className="card-text text-secondary">
                  A responsive analytics dashboard built with Bootstrap and chart widgets.
                </p>

                <div className="d-flex gap-2">
                  <span className="badge text-bg-light border">Bootstrap</span>
                  <span className="badge text-bg-light border">Charts</span>
                </div>
              </div>

              <div className="card-footer bg-white">
                <a href="#" className="link-primary">
                  View Details
                  <i className="bi bi-arrow-right ms-1"></i>
                </a>
              </div>

            </article>
          </div>

          {/* Project Card 2 */}
          <div className="col-md-6 col-lg-4">
            <article className="card h-100 shadow-sm">

              <img
                src="https://picsum.photos/600/400?random=2"
                className="card-img-top"
                alt="Project 2 preview"
              />

              <div className="card-body">
                <h3 className="h5 card-title">Portfolio Theme</h3>

                <p className="card-text text-secondary">
                  A minimal personal site emphasizing typography and motion.
                </p>

                <div className="d-flex gap-2">
                  <span className="badge text-bg-light border">Bootstrap</span>
                  <span className="badge text-bg-light border">Animation</span>
                </div>
              </div>

              <div className="card-footer bg-white">
                <a href="#" className="link-primary">
                  View Details
                  <i className="bi bi-arrow-right ms-1"></i>
                </a>
              </div>

            </article>
          </div>

          {/* Project Card 3 */}
          <div className="col-md-6 col-lg-4">
            <article className="card h-100 shadow-sm">

              <img
                src="https://picsum.photos/600/400?random=3"
                className="card-img-top"
                alt="Project 3 preview"
              />

              <div className="card-body">
                <h3 className="h5 card-title">E-commerce Mock</h3>

                <p className="card-text text-secondary">
                  A product grid and details page with reusable components.
                </p>

                <div className="d-flex gap-2">
                  <span className="badge text-bg-light border">UI</span>
                  <span className="badge text-bg-light border">Components</span>
                </div>
              </div>

              <div className="card-footer bg-white">
                <a href="#" className="link-primary">
                  View Details
                  <i className="bi bi-arrow-right ms-1"></i>
                </a>
              </div>

            </article>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;