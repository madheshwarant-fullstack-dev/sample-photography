import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000";

function MyBookings() {
    const navigate = useNavigate();

    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchMyBookings = async () => {
        try {
            setLoading(true);
            setError("");

            const token = localStorage.getItem("token");

            if (!token) {
                navigate("/login");
                return;
            }

            const response = await fetch(
                `${API_URL}/api/bookings/my-bookings`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                if (response.status === 401) {
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    navigate("/login");
                    return;
                }

                throw new Error(
                    data.message || "Failed to fetch bookings"
                );
            }

            if (data.success) {
                setBookings(data.bookings || []);
            } else {
                setError(
                    data.message || "Unable to load bookings"
                );
            }
        } catch (error) {
            console.error(
                "My bookings fetch error:",
                error
            );

            setError("Unable to load your bookings");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMyBookings();
    }, []);

    const getStatusClass = (status) => {
        switch (status) {
            case "Confirmed":
                return "bg-success";

            case "Completed":
                return "bg-primary";

            case "Cancelled":
                return "bg-danger";

            default:
                return "bg-warning text-dark";
        }
    };

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
                        Loading your bookings...
                    </p>
                </div>
            </section>
        );
    }

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
                            onClick={fetchMyBookings}
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-5">
            <div className="container">

                {/* Heading */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold">
                        My Bookings
                    </h2>

                    <p className="text-muted">
                        View and track your photography bookings
                    </p>
                </div>

                {/* No bookings */}
                {bookings.length === 0 ? (
                    <div className="text-center py-5">
                        <div className="mb-3">
                            <span style={{ fontSize: "60px" }}>
                                📸
                            </span>
                        </div>

                        <h4>No Bookings Yet</h4>

                        <p className="text-muted">
                            You haven't made any bookings yet.
                        </p>

                        <button
                            className="btn btn-dark"
                            onClick={() =>
                                navigate("/packages")
                            }
                        >
                            Explore Packages
                        </button>
                    </div>
                ) : (
                    <div className="row g-4">

                        {bookings.map((booking) => (
                            <div
                                className="col-md-6 col-lg-4"
                                key={booking._id}
                            >
                                <div className="card h-100 shadow-sm border-0">

                                    <div className="card-body">

                                        <div className="d-flex justify-content-between align-items-start mb-3">

                                            <h5 className="card-title fw-bold mb-0">
                                                {booking.packageName ||
                                                    "Photography Booking"}
                                            </h5>

                                            <span
                                                className={`badge ${getStatusClass(
                                                    booking.status
                                                )}`}
                                            >
                                                {booking.status}
                                            </span>

                                        </div>

                                        <hr />

                                        <p className="mb-2">
                                            <strong>
                                                Event:
                                            </strong>{" "}
                                            {booking.eventType}
                                        </p>

                                        <p className="mb-2">
                                            <strong>
                                                Date:
                                            </strong>{" "}
                                            {new Date(
                                                booking.eventDate
                                            ).toLocaleDateString()}
                                        </p>

                                        <p className="mb-2">
                                            <strong>
                                                Location:
                                            </strong>{" "}
                                            {booking.location}
                                        </p>

                                        {booking.packagePrice > 0 && (
                                            <p className="mb-2">
                                                <strong>
                                                    Package Price:
                                                </strong>{" "}
                                                ₹
                                                {Number(
                                                    booking.packagePrice
                                                ).toLocaleString(
                                                    "en-IN"
                                                )}
                                            </p>
                                        )}

                                        {booking.message && (
                                            <p className="mb-0">
                                                <strong>
                                                    Message:
                                                </strong>{" "}
                                                {booking.message}
                                            </p>
                                        )}

                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>
                )}

            </div>
        </section>
    );
}

export default MyBookings;