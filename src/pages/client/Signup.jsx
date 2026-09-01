import React from "react";

function Signup() {
    return (
        <section className="auth-section py-5">

            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-md-7 col-lg-6">

                        <div className="auth-card">

                            <div className="text-center mb-4">

                                <img
                                    src="/images/Logo.png"
                                    alt="Maha Creative Photography"
                                    className="auth-logo"
                                />

                                <h2>Create Account</h2>

                                <p className="text-muted">
                                    Join Maha Creative Photography
                                </p>

                            </div>

                            <form>

                                <div className="mb-3">
                                    <label>Full Name</label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label>Email</label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label>Phone</label>

                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Enter your phone number"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label>Password</label>

                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Create password"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label>Confirm Password</label>

                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Confirm password"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-pink w-100"
                                >
                                    Create Account
                                </button>

                            </form>

                            <p className="text-center mt-4">
                                Already have an account?{" "}
                                <a href="/login">
                                    Login
                                </a>
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Signup;