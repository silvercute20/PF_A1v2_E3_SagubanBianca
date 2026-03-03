function About() {
    return(
        <section id="about">
        <div className= "container">
            <div className="row align-items-center g-4">

                <div className="col-lg-6">
                    <img
                    className= "img-fluid rounded-4 shadow-sm"
                    src="https://picsum.photos/800/500"
              alt="Coding desk setup"
            />
                </div>

                <div className="col-lg-6">
                    <h2 className="accent-underline"> About Me</h2>

                    <p className="mt-3 text-secondary">
                        I'm Silver Bullet, an aspiring web developer who's passionate about building clean and modern user interfaces.
                        I love learning React, Bootstrap, and modern front-end technologies.
                    </p>

                    <ul className= "list-unstyled text-secondary">
                        <li className= "mb-2">
                            <i className= "bi bi-check-circle text-primary me-2"></i>
                            3+ years building front-end apps
                        </li>

                        <li className="mb-2">
                            <i className="bi bi-check-circle text-primary me-2"></i>
                Strong in React, Bootstrap, and UI design
                        </li>

                        <li className="mb-2">
                            <i className="bi bi-check-circle text-primary me-2"></i>
                            Passionate about learning and development 
                        </li>
                    </ul>

                    <a href="#projects" className="btn btn-outline-primary">
                        <i className="bi bi-grid-3x3-gap me-2"></i>
                        See My Work
                    </a>
                </div>

            </div>
        </div>
        </section>
        
    );
}

export default About;