import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle signup
    const handleSubmit = async (e) => {
        e.preventDefault();

        setMessage("");

        // Password check
        if (formData.password !== formData.confirmPassword) {
            setMessage("Passwords do not match");
            return;
        }

        if (formData.password.length < 6) {
            setMessage("Password must be at least 6 characters");
            return;
        }

        try {
            setLoading(true);

            const response = await fetch(
                "http://localhost:5000/api/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        password: formData.password,
                    }),
                }
            );

            const data = await response.json();

            if (data.success) {
                setMessage("Account created successfully!");

                // Clear form
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    password: "",
                    confirmPassword: "",
                });

                // Go to login after 1 second
                setTimeout(() => {
                    navigate("/login");
                }, 1000);
            } else {
                setMessage(data.message || "Registration failed");
            }
        } catch (error) {
            console.error("Signup Error:", error);
            setMessage(
                "Unable to connect to server. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

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

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">
                                    <label>Full Name</label>

                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label>Email</label>

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

                                <div className="mb-3">
                                    <label>Phone</label>

                                    <input
                                        type="tel"
                                        name="phone"
                                        className="form-control"
                                        placeholder="Enter your phone number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label>Password</label>

                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Create password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label>Confirm Password</label>

                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        className="form-control"
                                        placeholder="Confirm password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Message */}
                                {message && (
                                    <div className="text-center mb-3">
                                        {message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="btn btn-pink w-100"
                                    disabled={loading}
                                >
                                    {loading
                                        ? "Creating Account..."
                                        : "Create Account"}
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