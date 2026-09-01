import React from "react";

function Profile() {
    return (
        <section className="py-5">

            <div className="container py-5">

                <div className="text-center mb-5">
                    <p className="text-uppercase fw-bold">
                        My Account
                    </p>

                    <h1 className="fw-bold">
                        My Profile
                    </h1>

                    <p className="text-muted">
                        Manage your Maha Creative Photography account.
                    </p>
                </div>

                <div className="row justify-content-center">

                    <div className="col-lg-7">

                        <div className="card shadow-sm border-0">

                            <div className="card-body p-4 p-md-5">

                                <h4 className="fw-bold mb-4">
                                    Personal Information
                                </h4>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Your email"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Phone Number
                                    </label>

                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Your phone number"
                                    />
                                </div>

                                <button
                                    type="button"
                                    className="btn btn-pink w-100 mt-3"
                                >
                                    Update Profile
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Profile;