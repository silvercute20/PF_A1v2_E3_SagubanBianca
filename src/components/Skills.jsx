function Skills() {
    return(
<section id="skills" className="bg-light">
    <div className="container">

        <h2 className="text-center accent-underline">Skills</h2>
        <p className="text-center text-secondary mt-3 mb-5">
            A snapshot of my current toolkit.
        </p>

        <div className="row g-4">

          <div className="col-md-6">

            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <span className="fw-semibold">HTML & CSS</span>
                <span className="text-secondary">90%</span>
              </div>

              <div className="progress">
                <div className="progress-bar bg-primary" style={{ width: "90%" }}></div>
        </div>
    </div>

    <div className="mb-3">
        <div className="d-flex justify-content-between">
            <span className="fw-semibold"> Javascript(ES6+)</span>
            <span className="text-secondary"> 80%</span>
        </div>

        <div className="progress">
            <div className="progress-bar bg-primary" style={{ width: "80%" }}></div>    
        </div>
    </div>

    <div className= "mb-3">
        <div className="d-flex justify-content-between">
            <span className="fw-semibold"> React </span>
             <span className="text-secondary">75%</span>
        </div>

        <div className="progress">
            <div className="progress-bar bg-primary" style={{ width: "75%" }}></div>
        </div>
    </div>

    </div>

      <div className="col-md-6">

            <ul className="list-group shadow-sm">

              <li className="list-group-item d-flex align-items-center">
                <i className="bi bi-bootstrap-fill text-primary fs-4 me-3"></i>
                Bootstrap 5
              </li>

              <li className="list-group-item d-flex align-items-center">
                <i className="bi bi-git text-danger fs-4 me-3"></i>
                Git & GitHub
              </li>

              <li className="list-group-item d-flex align-items-center">
                <i className="bi bi-cloud-arrow-down-fill text-info fs-4 me-3"></i>
                REST / Fetch
              </li>

              <li className="list-group-item d-flex align-items-center">
                <i className="bi bi-universal-access-circle fs-4 me-3 text-success"></i>
                Accessibility
              </li>

            </ul>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;