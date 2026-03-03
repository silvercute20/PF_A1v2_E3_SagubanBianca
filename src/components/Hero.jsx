function Hero(){
    return(
        <header id="home" className="hero">
            <div className="container text-center">

                <img 
                    className="avatar mb-3"
                    src="https://picsum.photos/200?grayscale"
                    alt="Profile photo"
                />

                <h1 className="display-5 fw-bold">
                    Hi, I'm <span className="text-primary">SILVERBULLET</span>
                </h1>

                <p className="lead text-secondary mb-4">
                    Front-End Developer ♥ React Enthusiast ♥ Lifelong Learner 
                </p>

                <div className="d-flex gap-2 justify-content-center">
                    <a href="#projects" className="btn btn-primary btn-lg">
                        <i className="bi bi-rocket-takeoff me-2"></i>
                        View Projects
                    </a>

                    <a href="#contact" className="btn btn-outline-primary btn-lg">
                        <i className="bi bi-envelope me-2"></i>
                        Contact
                    </a>
                </div>

                <div className="mt-4 d-flex gap-3 justify-content-center">
                    <a className="text-muted fs-4" href="#">
                        <i className="bi bi-github"></i>
                    </a>

                    <a className="text-muted fs-4" href="#">
                        <i className="bi bi-linkedin"></i>
                    </a>

                    <a className="text-muted fs-4" href="#">
                        <i className="bi bi-twitter-x"></i>
                    </a>
                </div>

            </div>
        </header>
    );
}

export default Hero;