import React, { useEffect, useState } from "react";

const API_URL = "http://localhost:5000";

function Bookings() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // ================= FETCH BOOKINGS =================

    const fetchBookings = async () => {
        try {
            setLoading(true);
            setError("");

            const token = localStorage.getItem("token");

            const response = await fetch(
                `${API_URL}/api/bookings`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to fetch bookings"
                );
            }

            if (data.success) {
                setBookings(data.bookings);
            } else {
                setError(
                    data.message || "Unable to load bookings"
                );
            }
        } catch (error) {
            console.error(
                "Fetch bookings error:",
                error
            );

            setError(
                error.message === "Admin access required."
                    ? "Admin access required."
                    : error.message === "Invalid or expired token."
                    ? "Session expired. Please login again."
                    : "Unable to connect to server"
            );
        } finally {
            setLoading(false);
        }
    };

    // ================= LOAD BOOKINGS =================

    useEffect(() => {
        fetchBookings();
    }, []);

    // ================= UPDATE STATUS =================

    const updateStatus = async (id, status) => {
        try {
            const token = localStorage.getItem("token");

            const response = await fetch(
                `${API_URL}/api/bookings/${id}/status`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        status,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                alert(
                    data.message ||
                        "Failed to update booking status"
                );
                return;
            }

            alert("Booking status updated successfully!");

            fetchBookings();
        } catch (error) {
            console.error(
                "Update booking error:",
                error
            );

            alert("Unable to connect to server");
        }
    };

    // ================= DELETE BOOKING =================

    const deleteBooking = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this booking?"
        );

        if (!confirmDelete) return;

        try {
            const token = localStorage.getItem("token");

            const response = await fetch(
                `${API_URL}/api/bookings/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                alert(
                    data.message ||
                        "Failed to delete booking"
                );
                return;
            }

            alert("Booking deleted successfully!");

            fetchBookings();
        } catch (error) {
            console.error(
                "Delete booking error:",
                error
            );

            alert("Unable to connect to server");
        }
    };

    // ================= FORMAT DATE =================

    const formatDate = (date) => {
        if (!date) return "-";

        return new Date(date).toLocaleDateString(
            "en-IN",
            {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
            }
        );
    };

    // ================= STATUS BADGE =================

    const getStatusBadge = (status) => {
        switch (status) {
            case "Pending":
                return "bg-warning text-dark";

            case "Confirmed":
                return "bg-primary";

            case "Completed":
                return "bg-success";

            case "Cancelled":
                return "bg-danger";

            default:
                return "bg-secondary";
        }
    };

    // ================= RENDER =================

    return (
        <div className="container py-5">

            {/* ================= HEADER ================= */}

            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>
                    <h1 className="fw-bold">
                        Bookings
                    </h1>

                    <p className="text-muted mb-0">
                        View and manage client photography bookings.
                    </p>
                </div>

                <button
                    className="btn btn-dark"
                    onClick={fetchBookings}
                >
                    Refresh
                </button>

            </div>

            {/* ================= ERROR ================= */}

            {error && (
                <div className="alert alert-danger">
                    {error}
                </div>
            )}

            {/* ================= BOOKING COUNTS ================= */}

            {!loading && !error && (
                <div className="mb-3">

                    <span className="badge bg-dark me-2">
                        {bookings.length} Bookings
                    </span>

                    <span className="badge bg-warning text-dark me-2">
                        {
                            bookings.filter(
                                (item) =>
                                    item.status === "Pending"
                            ).length
                        }{" "}
                        Pending
                    </span>

                    <span className="badge bg-primary me-2">
                        {
                            bookings.filter(
                                (item) =>
                                    item.status === "Confirmed"
                            ).length
                        }{" "}
                        Confirmed
                    </span>

                    <span className="badge bg-success me-2">
                        {
                            bookings.filter(
                                (item) =>
                                    item.status === "Completed"
                            ).length
                        }{" "}
                        Completed
                    </span>

                    <span className="badge bg-danger">
                        {
                            bookings.filter(
                                (item) =>
                                    item.status === "Cancelled"
                            ).length
                        }{" "}
                        Cancelled
                    </span>

                </div>
            )}

            {/* ================= CARD ================= */}

            <div className="card shadow-sm border-0">

                <div className="card-body">

                    {loading ? (

                        /* ================= LOADING ================= */

                        <div className="text-center py-5">

                            <div
                                className="spinner-border"
                                role="status"
                            >
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </div>

                            <p className="mt-3 text-muted">
                                Loading bookings...
                            </p>

                        </div>

                    ) : bookings.length === 0 ? (

                        /* ================= NO BOOKINGS ================= */

                        <div className="alert alert-info text-center mb-0">
                            No bookings found.
                        </div>

                    ) : (

                        /* ================= TABLE ================= */

                        <div className="table-responsive">

                            <table className="table table-hover align-middle">

                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Client</th>
                                        <th>Contact</th>
                                        <th>Event</th>
                                        <th>Package</th>
                                        <th>Date</th>
                                        <th>Location</th>
                                        <th>Message</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {bookings.map(
                                        (booking, index) => (

                                            <tr
                                                key={
                                                    booking._id
                                                }
                                            >

                                                {/* Number */}

                                                <td>
                                                    {index + 1}
                                                </td>

                                                {/* Client */}

                                                <td>
                                                    <strong>
                                                        {
                                                            booking.name
                                                        }
                                                    </strong>

                                                    <br />

                                                    <small className="text-muted">
                                                        {
                                                            booking.email
                                                        }
                                                    </small>
                                                </td>

                                                {/* Contact */}

                                                <td>
                                                    {
                                                        booking.phone
                                                    }
                                                </td>

                                                {/* Event */}

                                                <td>
                                                    <strong>
                                                        {
                                                            booking.eventType
                                                        }
                                                    </strong>
                                                </td>

                                                {/* Package */}

                                                <td>
                                                    {booking.packageName ? (
                                                        <>
                                                            <strong>
                                                                {
                                                                    booking.packageName
                                                                }
                                                            </strong>

                                                            {booking.packagePrice >
                                                                0 && (
                                                                <>
                                                                    <br />

                                                                    <small className="text-muted">
                                                                        ₹
                                                                        {Number(
                                                                            booking.packagePrice
                                                                        ).toLocaleString(
                                                                            "en-IN"
                                                                        )}
                                                                    </small>
                                                                </>
                                                            )}
                                                        </>
                                                    ) : (
                                                        <span className="text-muted">
                                                            No Package
                                                        </span>
                                                    )}
                                                </td>

                                                {/* Date */}

                                                <td>
                                                    {formatDate(
                                                        booking.eventDate
                                                    )}
                                                </td>

                                                {/* Location */}

                                                <td>
                                                    {
                                                        booking.location
                                                    }
                                                </td>

                                                {/* Message */}

                                                <td
                                                    style={{
                                                        minWidth:
                                                            "220px",
                                                        maxWidth:
                                                            "300px",
                                                    }}
                                                >
                                                    {booking.message ? (
                                                        booking.message
                                                    ) : (
                                                        <span className="text-muted">
                                                            -
                                                        </span>
                                                    )}
                                                </td>

                                                {/* Status */}

                                                <td>

                                                    <span
                                                        className={`badge ${getStatusBadge(
                                                            booking.status
                                                        )}`}
                                                    >
                                                        {
                                                            booking.status
                                                        }
                                                    </span>

                                                </td>

                                                {/* Action */}

                                                <td>

                                                    <div
                                                        className="d-flex flex-column gap-2"
                                                        style={{
                                                            minWidth:
                                                                "130px",
                                                        }}
                                                    >

                                                        <select
                                                            className="form-select form-select-sm"
                                                            value={
                                                                booking.status
                                                            }
                                                            onChange={(
                                                                e
                                                            ) =>
                                                                updateStatus(
                                                                    booking._id,
                                                                    e
                                                                        .target
                                                                        .value
                                                                )
                                                            }
                                                        >

                                                            <option value="Pending">
                                                                Pending
                                                            </option>

                                                            <option value="Confirmed">
                                                                Confirmed
                                                            </option>

                                                            <option value="Completed">
                                                                Completed
                                                            </option>

                                                            <option value="Cancelled">
                                                                Cancelled
                                                            </option>

                                                        </select>

                                                        <button
                                                            className="btn btn-outline-danger btn-sm"
                                                            onClick={() =>
                                                                deleteBooking(
                                                                    booking._id
                                                                )
                                                            }
                                                        >
                                                            Delete
                                                        </button>

                                                    </div>

                                                </td>

                                            </tr>

                                        )
                                    )}

                                </tbody>

                            </table>

                        </div>

                    )}

                </div>

            </div>

        </div>
    );
}

export default Bookings;