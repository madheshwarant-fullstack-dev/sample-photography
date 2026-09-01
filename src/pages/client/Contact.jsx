import React from "react";

function Contact() {
    return (
        <section id="contact" className="contact-section py-5">

            <div className="container py-5">

                <div className="text-center mb-5">

                    <p className="section-title">
                        GET IN TOUCH
                    </p>

                    <h2 className="display-5 fw-bold">
                        Let's Capture Your
                        <span className="pink-text">
                            {" "}Story
                        </span>
                    </h2>

                </div>


                <div className="row g-5">

                    <div className="col-lg-5">

                        <h3>
                            Contact Information
                        </h3>

                        <p className="text-muted">
                            Have a photography requirement?
                            We'd love to hear from you.
                        </p>

                        <div className="contact-item">
                            📞
                            <div>
                                <strong>Phone</strong>
                                <p>+91 97901 02798</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            📧
                            <div>
                                <strong>Email</strong>
                                <p>mahacreative@gmail.com</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            📍
                            <div>
                                <strong>Location</strong>
                                <p>Aundipatty,Theni,Tamil Nadu</p>
                            </div>
                        </div>

                    </div>


                    <div className="col-lg-7">

                        <form className="contact-form">

                            <div className="row g-3">

                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div className="col-md-6">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Your Email"
                                    />
                                </div>

                                <div className="col-12">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Phone Number"
                                    />
                                </div>

                                <div className="col-12">
                                    <textarea
                                        className="form-control"
                                        rows="5"
                                        placeholder="Your Message"
                                    ></textarea>
                                </div>

                                <div className="col-12">
                                    <button
                                        type="submit"
                                        className="btn btn-pink"
                                    >
                                        Send Enquiry
                                    </button>
                                </div>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Contact;