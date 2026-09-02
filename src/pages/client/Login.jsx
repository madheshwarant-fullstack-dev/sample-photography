import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // Input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Login submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        setMessage("");
        setError("");
        setLoading(true);

        try {
            const response = await fetch(
                "http://localhost:5000/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: formData.email,
                        password: formData.password,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Login failed");
            }

            // Save JWT token
            if (data.token) {
                localStorage.setItem("token", data.token);
            }

            // Save user details
            if (data.user) {
                localStorage.setItem(
                    "user",
                    JSON.stringify(data.user)
                );
            }

            setMessage("Login successful!");

            // Go to profile
            setTimeout(() => {
                navigate("/profile");
            }, 1000);

        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="auth-section py-5">

            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-md-6 col-lg-5">

                        <div className="auth-card">

                            {/* Logo */}
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

                            {/* Success Message */}
                            {message && (
                                <div className="alert alert-success">
                                    {message}
                                </div>
                            )}

                            {/* Error Message */}
                            {error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            )}

                            {/* Login Form */}
                            <form onSubmit={handleSubmit}>

                                {/* Email */}
                                <div className="mb-3">

                                    <label className="form-label">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                {/* Password */}
                                <div className="mb-3">

                                    <label className="form-label">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                {/* Login Button */}
                                <button
                                    type="submit"
                                    className="btn btn-pink w-100"
                                    disabled={loading}
                                >
                                    {loading ? "Logging in..." : "Login"}
                                </button>

                            </form>

                            {/* Signup */}
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