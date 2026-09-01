import React from "react";

function Booking() {
    return (
        <section className="py-5">

            <div className="container py-5">

                <div className="text-center mb-5">
                    <p className="section-title">
                        BOOK A SESSION
                    </p>

                    <h1 className="fw-bold">
                        Book Your{" "}
                        <span className="pink-text">
                            Photography Session
                        </span>
                    </h1>

                    <p className="text-muted">
                        Fill in the details below and we will
                        get back to you soon.
                    </p>
                </div>


                <div className="row justify-content-center">

                    <div className="col-lg-8">

                        <div className="auth-card">

                            <form>

                                <div className="row g-3">

                                    <div className="col-md-6">
                                        <label className="form-label">
                                            Full Name
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter your name"
                                        />
                                    </div>


                                    <div className="col-md-6">
                                        <label className="form-label">
                                            Phone Number
                                        </label>

                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="Enter your phone number"
                                        />
                                    </div>


                                    <div className="col-md-6">
                                        <label className="form-label">
                                            Email
                                        </label>

                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter your email"
                                        />
                                    </div>


                                    <div className="col-md-6">
                                        <label className="form-label">
                                            Event Type
                                        </label>

                                        <select className="form-select">

                                            <option value="">
                                                Select Event
                                            </option>

                                            <option>
                                                Wedding
                                            </option>

                                            <option>
                                                Pre-Wedding
                                            </option>

                                            <option>
                                                Birthday
                                            </option>

                                            <option>
                                                Portrait
                                            </option>

                                            <option>
                                                Product Photography
                                            </option>

                                            <option>
                                                Other
                                            </option>

                                        </select>
                                    </div>


                                    <div className="col-md-6">
                                        <label className="form-label">
                                            Event Date
                                        </label>

                                        <input
                                            type="date"
                                            className="form-control"
                                        />
                                    </div>


                                    <div className="col-md-6">
                                        <label className="form-label">
                                            Package
                                        </label>

                                        <select className="form-select">

                                            <option value="">
                                                Select Package
                                            </option>

                                            <option>
                                                Basic - ₹5,000
                                            </option>

                                            <option>
                                                Premium - ₹15,000
                                            </option>

                                            <option>
                                                Wedding - ₹30,000
                                            </option>

                                        </select>
                                    </div>


                                    <div className="col-12">
                                        <label className="form-label">
                                            Message
                                        </label>

                                        <textarea
                                            className="form-control"
                                            rows="5"
                                            placeholder="Tell us about your event..."
                                        ></textarea>
                                    </div>


                                    <div className="col-12">

                                        <button
                                            type="submit"
                                            className="btn btn-pink w-100"
                                        >
                                            Submit Booking
                                        </button>

                                    </div>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Booking;