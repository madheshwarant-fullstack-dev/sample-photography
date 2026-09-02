import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000";

function Dashboard() {
    const navigate = useNavigate();

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    const [stats, setStats] = useState({
        packages: 0,
        gallery: 0,
        bookings: 0,
        pending: 0,
        confirmed: 0,
        completed: 0,
        cancelled: 0,
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // ================= FETCH DASHBOARD DATA =================

    const fetchDashboardData = async () => {
        try {
            setLoading(true);
            setError("");

            const token = localStorage.getItem("token");

            // Packages and Gallery are public
            // Bookings require Admin JWT

            const [
                packagesResponse,
                galleryResponse,
                bookingsResponse,
            ] = await Promise.all([
                fetch(`${API_URL}/api/packages`),

                fetch(`${API_URL}/api/gallery`),

                fetch(`${API_URL}/api/bookings`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }),
            ]);

            const packagesData =
                await packagesResponse.json();

            const galleryData =
                await galleryResponse.json();

            const bookingsData =
                await bookingsResponse.json();

            // ================= CHECK BOOKING AUTH =================

            if (!bookingsResponse.ok) {
                throw new Error(
                    bookingsData.message ||
                        "Failed to fetch bookings"
                );
            }

            const packages = packagesData.success
                ? packagesData.packages
                : [];

            const gallery = galleryData.success
                ? galleryData.gallery
                : [];

            const bookings = bookingsData.success
                ? bookingsData.bookings
                : [];

            // ================= SET STATISTICS =================

            setStats({
                packages: packages.length,

                gallery: gallery.length,

                bookings: bookings.length,

                pending: bookings.filter(
                    (booking) =>
                        booking.status === "Pending"
                ).length,

                confirmed: bookings.filter(
                    (booking) =>
                        booking.status === "Confirmed"
                ).length,

                completed: bookings.filter(
                    (booking) =>
                        booking.status === "Completed"
                ).length,

                cancelled: bookings.filter(
                    (booking) =>
                        booking.status === "Cancelled"
                ).length,
            });

        } catch (error) {
            console.error(
                "Dashboard data fetch error:",
                error
            );

            setError(
                error.message ===
                    "Admin access required."
                    ? "Admin access required."
                    : error.message ===
                      "Invalid or expired token."
                    ? "Session expired. Please login again."
                    : "Unable to load dashboard data"
            );
        } finally {
            setLoading(false);
        }
    };

    // ================= LOAD DASHBOARD =================

    useEffect(() => {
        fetchDashboardData();
    }, []);

    // ================= LOGOUT =================

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/admin/login");
    };

    // ================= RENDER =================

    return (
        <div className="container py-5">

            {/* ================= HEADER ================= */}

            <div className="d-flex justify-content-between align-items-center mb-5">

                <div>
                    <h1 className="fw-bold">
                        Admin Dashboard
                    </h1>

                    <p className="text-muted mb-0">
                        Welcome back,{" "}
                        {user?.name || "Admin"}
                    </p>
                </div>

                <button
                    className="btn btn-outline-danger"
                    onClick={handleLogout}
                >
                    Logout
                </button>

            </div>

            {/* ================= ERROR ================= */}

            {error && (
                <div className="alert alert-danger">
                    {error}
                </div>
            )}

            {/* ================= STATISTICS ================= */}

            <div className="row g-4 mb-5">

                {/* Total Bookings */}

                <div className="col-md-6 col-lg-3">

                    <div className="card shadow-sm border-0 h-100">

                        <div className="card-body p-4">

                            <div className="d-flex justify-content-between">

                                <div>

                                    <p className="text-muted mb-1">
                                        Total Bookings
                                    </p>

                                    <h2 className="fw-bold mb-0">
                                        {loading
                                            ? "..."
                                            : stats.bookings}
                                    </h2>

                                </div>

                                <span
                                    style={{
                                        fontSize: "32px",
                                    }}
                                >
                                    📅
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Pending */}

                <div className="col-md-6 col-lg-3">

                    <div className="card shadow-sm border-0 h-100">

                        <div className="card-body p-4">

                            <div className="d-flex justify-content-between">

                                <div>

                                    <p className="text-muted mb-1">
                                        Pending
                                    </p>

                                    <h2 className="fw-bold mb-0">
                                        {loading
                                            ? "..."
                                            : stats.pending}
                                    </h2>

                                </div>

                                <span
                                    style={{
                                        fontSize: "32px",
                                    }}
                                >
                                    ⏳
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Confirmed */}

                <div className="col-md-6 col-lg-3">

                    <div className="card shadow-sm border-0 h-100">

                        <div className="card-body p-4">

                            <div className="d-flex justify-content-between">

                                <div>

                                    <p className="text-muted mb-1">
                                        Confirmed
                                    </p>

                                    <h2 className="fw-bold mb-0">
                                        {loading
                                            ? "..."
                                            : stats.confirmed}
                                    </h2>

                                </div>

                                <span
                                    style={{
                                        fontSize: "32px",
                                    }}
                                >
                                    ✅
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Completed */}

                <div className="col-md-6 col-lg-3">

                    <div className="card shadow-sm border-0 h-100">

                        <div className="card-body p-4">

                            <div className="d-flex justify-content-between">

                                <div>

                                    <p className="text-muted mb-1">
                                        Completed
                                    </p>

                                    <h2 className="fw-bold mb-0">
                                        {loading
                                            ? "..."
                                            : stats.completed}
                                    </h2>

                                </div>

                                <span
                                    style={{
                                        fontSize: "32px",
                                    }}
                                >
                                    🎉
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* ================= MANAGEMENT CARDS ================= */}

            <div className="row g-4">

                {/* Users */}

                <div className="col-md-4">

                    <div className="card shadow-sm border-0 h-100">

                        <div className="card-body p-4">

                            <h5 className="fw-bold">
                                👥 Users
                            </h5>

                            <p className="text-muted">
                                Manage registered users.
                            </p>

                            <Link
                                to="/admin/users"
                                className="btn btn-dark"
                            >
                                Manage Users
                            </Link>

                        </div>

                    </div>

                </div>

                {/* Bookings */}

                <div className="col-md-4">

                    <div className="card shadow-sm border-0 h-100">

                        <div className="card-body p-4">

                            <h5 className="fw-bold">
                                📅 Bookings
                            </h5>

                            <p className="text-muted">
                                View and manage client bookings.
                            </p>

                            <div className="mb-3">

                                <span className="badge bg-warning text-dark me-2">
                                    Pending:{" "}
                                    {stats.pending}
                                </span>

                                <span className="badge bg-primary">
                                    Confirmed:{" "}
                                    {stats.confirmed}
                                </span>

                            </div>

                            <Link
                                to="/admin/bookings"
                                className="btn btn-dark"
                            >
                                Manage Bookings
                            </Link>

                        </div>

                    </div>

                </div>

                {/* Gallery */}

                <div className="col-md-4">

                    <div className="card shadow-sm border-0 h-100">

                        <div className="card-body p-4">

                            <h5 className="fw-bold">
                                🖼️ Gallery
                            </h5>

                            <p className="text-muted">
                                Add and manage gallery photos.
                            </p>

                            <h4 className="fw-bold mb-3">
                                {loading
                                    ? "..."
                                    : stats.gallery}{" "}
                                Photos
                            </h4>

                            <Link
                                to="/admin/gallery"
                                className="btn btn-dark"
                            >
                                Manage Gallery
                            </Link>

                        </div>

                    </div>

                </div>

                {/* Packages */}

                <div className="col-md-4">

                    <div className="card shadow-sm border-0 h-100">

                        <div className="card-body p-4">

                            <h5 className="fw-bold">
                                📦 Packages
                            </h5>

                            <p className="text-muted">
                                Manage photography packages.
                            </p>

                            <h4 className="fw-bold mb-3">
                                {loading
                                    ? "..."
                                    : stats.packages}{" "}
                                Packages
                            </h4>

                            <Link
                                to="/admin/packages"
                                className="btn btn-dark"
                            >
                                Manage Packages
                            </Link>

                        </div>

                    </div>

                </div>

                {/* Messages */}

                <div className="col-md-4">

                    <div className="card shadow-sm border-0 h-100">

                        <div className="card-body p-4">

                            <h5 className="fw-bold">
                                💬 Messages
                            </h5>

                            <p className="text-muted">
                                View client messages and enquiries.
                            </p>

                            <Link
                                to="/admin/messages"
                                className="btn btn-dark"
                            >
                                View Messages
                            </Link>

                        </div>

                    </div>

                </div>

                {/* Cancelled Bookings */}

                <div className="col-md-4">

                    <div className="card shadow-sm border-0 h-100">

                        <div className="card-body p-4">

                            <h5 className="fw-bold">
                                ❌ Cancelled Bookings
                            </h5>

                            <p className="text-muted">
                                Bookings cancelled by clients or admin.
                            </p>

                            <h4 className="fw-bold mb-3">
                                {loading
                                    ? "..."
                                    : stats.cancelled}
                            </h4>

                            <Link
                                to="/admin/bookings"
                                className="btn btn-outline-danger"
                            >
                                View Bookings
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;