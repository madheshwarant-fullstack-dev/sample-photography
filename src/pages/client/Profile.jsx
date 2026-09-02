import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000";

function Profile() {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // ================= FETCH PROFILE =================

    const fetchProfile = async () => {
        try {
            setLoading(true);
            setError("");

            const token =
                localStorage.getItem("token");

            if (!token) {
                navigate("/login");
                return;
            }

            const response = await fetch(
                `${API_URL}/api/auth/profile`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data =
                await response.json();

            if (!response.ok) {
                if (
                    response.status === 401
                ) {
                    localStorage.removeItem(
                        "token"
                    );
                    localStorage.removeItem(
                        "user"
                    );

                    navigate("/login");
                    return;
                }

                throw new Error(
                    data.message ||
                        "Failed to fetch profile"
                );
            }

            if (data.success) {
                setUser(data.user);

                // Keep localStorage updated
                localStorage.setItem(
                    "user",
                    JSON.stringify(data.user)
                );
            } else {
                setError(
                    data.message ||
                        "Unable to load profile"
                );
            }
        } catch (error) {
            console.error(
                "Profile fetch error:",
                error
            );

            setError(
                "Unable to load profile"
            );
        } finally {
            setLoading(false);
        }
    };

    // ================= LOAD PROFILE =================

    useEffect(() => {
        fetchProfile();
    }, []);

    // ================= LOGOUT =================

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login");
    };

    // ================= LOADING =================

    if (loading) {
        return (
            <section className="py-5">
                <div className="container text-center">

                    <div
                        className="spinner-border"
                        role="status"
                    >
                        <span className="visually-hidden">
                            Loading...
                        </span>
                    </div>

                    <p className="text-muted mt-3">
                        Loading your profile...
                    </p>

                </div>
            </section>
        );
    }

    // ================= ERROR =================

    if (error) {
        return (
            <section className="py-5">
                <div className="container">

                    <div className="alert alert-danger text-center">
                        {error}
                    </div>

                    <div className="text-center">
                        <button
                            className="btn btn-dark"
                            onClick={fetchProfile}
                        >
                            Try Again
                        </button>
                    </div>

                </div>
            </section>
        );
    }

    // ================= NO USER =================

    if (!user) {
        return (
            <section className="py-5">
                <div className="container text-center">

                    <h2>
                        Please Login
                    </h2>

                    <p className="text-muted">
                        You need to login to view
                        your profile.
                    </p>

                    <button
                        className="btn btn-pink"
                        onClick={() =>
                            navigate("/login")
                        }
                    >
                        Go to Login
                    </button>

                </div>
            </section>
        );
    }

    // ================= PROFILE UI =================

    return (
        <section className="profile-section py-5">

            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-md-8 col-lg-6">

                        <div className="auth-card">

                            {/* Profile Header */}

                            <div className="text-center mb-4">

                                <img
                                    src="/images/Logo.png"
                                    alt="Maha Creative Photography"
                                    className="auth-logo"
                                />

                                <h2>
                                    My Profile
                                </h2>

                                <p className="text-muted">
                                    Welcome to Maha Creative Photography
                                </p>

                            </div>


                            {/* User Details */}

                            <div className="profile-details">

                                {/* Name */}

                                <div className="mb-3">

                                    <label className="form-label">
                                        Full Name
                                    </label>

                                    <div className="form-control">
                                        {user.name}
                                    </div>

                                </div>


                                {/* Email */}

                                <div className="mb-3">

                                    <label className="form-label">
                                        Email
                                    </label>

                                    <div className="form-control">
                                        {user.email}
                                    </div>

                                </div>


                                {/* Phone */}

                                <div className="mb-3">

                                    <label className="form-label">
                                        Phone
                                    </label>

                                    <div className="form-control">
                                        {user.phone ||
                                            "Not provided"}
                                    </div>

                                </div>


                                {/* Account Type */}

                                <div className="mb-4">

                                    <label className="form-label">
                                        Account Type
                                    </label>

                                    <div className="form-control text-capitalize">
                                        {user.role ||
                                            "user"}
                                    </div>

                                </div>

                            </div>


                            {/* Logout */}

                            <button
                                className="btn btn-pink w-100"
                                onClick={
                                    handleLogout
                                }
                            >
                                Logout
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Profile;