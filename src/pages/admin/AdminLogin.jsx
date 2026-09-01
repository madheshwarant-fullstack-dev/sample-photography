import React from "react";

function AdminLogin() {
    return (
        <section className="auth-section admin-auth py-5">

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

                                <h2>Admin Login</h2>

                                <p className="text-muted">
                                    Maha Creative Photography
                                    Administration
                                </p>

                            </div>

                            <form>

                                <div className="mb-3">
                                    <label>Admin Email</label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter admin email"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label>Password</label>

                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter admin password"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-dark w-100"
                                >
                                    Admin Login
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default AdminLogin;