import React from "react";

function Login() {
    return (
        <section className="auth-section py-5">

            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-md-6 col-lg-5">

                        <div className="auth-card">

                            <div className="text-center mb-4">

                                <img
                                    src="/images/Logo.png"
                                    alt="Maha Creative Photography"
                                    className="auth-logo"
                                />

                                <h2>Client Login</h2>

                                <p className="text-muted">
                                    Login to your account
                                </p>

                            </div>

                            <form>

                                <div className="mb-3">
                                    <label>Email</label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label>Password</label>

                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter your password"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-pink w-100"
                                >
                                    Login
                                </button>

                            </form>

                            <p className="text-center mt-4">
                                Don't have an account?{" "}
                                <a href="/signup">
                                    Sign Up
                                </a>
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Login;