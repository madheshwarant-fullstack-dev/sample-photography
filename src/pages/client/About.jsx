import React from "react";

function About() {
    return (
        <section className="about-section py-5">

            <div className="container py-5">

                <div className="row align-items-center g-5">

                    <div className="col-lg-6">

                        <img
                            src="/images/Camera.png"
                            alt="Maha Creative Photography"
                            className="img-fluid about-image"
                        />

                    </div>


                    <div className="col-lg-6">

                        <p className="section-title">
                            ABOUT US
                        </p>

                        <h2 className="display-5 fw-bold mb-4">
                            We Don't Just Take Photos,
                            <span className="pink-text">
                                {" "}We Capture Stories.
                            </span>
                        </h2>

                        <p className="text-muted">
                            At Maha Creative Photography, we believe every
                            moment has a story. Our goal is to capture those
                            precious moments naturally and creatively.
                        </p>

                        <p className="text-muted">
                            From weddings and celebrations to portraits and
                            professional product photography, we provide
                            high-quality photography services tailored to
                            your needs.
                        </p>

                        <div className="row mt-4">

                            <div className="col-6">
                                <h3 className="pink-text fw-bold">
                                    500+
                                </h3>
                                <p>Happy Clients</p>
                            </div>

                            <div className="col-6">
                                <h3 className="pink-text fw-bold">
                                    1000+
                                </h3>
                                <p>Events Captured</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;