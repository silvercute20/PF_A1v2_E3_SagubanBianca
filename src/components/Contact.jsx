function Contact() {
    return(
        <section id="contact" className="bg-light">
            <div className="container">

                <h2 className="text-center accent-underline">Contact</h2>

                <p className="text-center text-secondary mt-3 mb-5">
                    Have a question or want to work with me? Let's talk.
                </p>

                <div className="row justify-content-center">
                    <div className="col-lg-8">

                        <form className="card shadow-sm border-0">
                            <div className="card-body p-4">

                                <div className="row g-3">

                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="name" placeholder="Silver Bullet" required />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="email" className="form-label">Email</label>
                                     <input type="email" className="form-control" id="nemail" placeholder="silverbullet@gmail.com" required />
                                </div>

                                  <div className="col-12">
                                    <label htmlFor="message" className="form-label">Message</label>
                                     <textarea id="message" className="form-control" rows="5"  placeholder="How can I help?" required></textarea>
                                </div>
                            

                                </div>

                                <div className="d-flex justify-content-end mt-3">
                                    <button type="submit" className="btn btn-primary">
                                        <i className="bi bi-send me-2"></i>
                                        Send Message
                                    </button>
                                </div>

                            </div>
                        </form>

                        <p className="text-center text-secondary mt-3">
                            Or email me at <a href="mailto:silverbullet@example.com">silverbullet@example.com</a>
                       </p>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;