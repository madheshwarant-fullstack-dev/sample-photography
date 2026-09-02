import React, { useEffect, useState } from "react";

const API_URL = "http://localhost:5000";

function Messages() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // ================= FETCH MESSAGES =================

    const fetchMessages = async () => {
        try {
            setLoading(true);
            setError("");

            const token = localStorage.getItem("token");

            const response = await fetch(
                `${API_URL}/api/messages`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to fetch messages"
                );
            }

            if (data.success) {
                setMessages(data.messages);
            } else {
                setError(
                    data.message || "Unable to load messages"
                );
            }
        } catch (error) {
            console.error(
                "Fetch messages error:",
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

    // ================= LOAD MESSAGES =================

    useEffect(() => {
        fetchMessages();
    }, []);

    // ================= UPDATE STATUS =================

    const updateStatus = async (id, status) => {
        try {
            const token = localStorage.getItem("token");

            const response = await fetch(
                `${API_URL}/api/messages/${id}/status`,
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
                        "Failed to update message"
                );
                return;
            }

            alert("Message status updated successfully!");

            fetchMessages();
        } catch (error) {
            console.error(
                "Update message error:",
                error
            );

            alert("Unable to connect to server");
        }
    };

    // ================= DELETE MESSAGE =================

    const deleteMessage = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this message?"
        );

        if (!confirmDelete) return;

        try {
            const token = localStorage.getItem("token");

            const response = await fetch(
                `${API_URL}/api/messages/${id}`,
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
                        "Failed to delete message"
                );
                return;
            }

            alert("Message deleted successfully!");

            fetchMessages();
        } catch (error) {
            console.error(
                "Delete message error:",
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

    // ================= RENDER =================

    return (
        <div className="container py-5">

            {/* ================= HEADER ================= */}

            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>
                    <h1 className="fw-bold">
                        Messages
                    </h1>

                    <p className="text-muted mb-0">
                        Manage messages received from clients.
                    </p>
                </div>

                <button
                    className="btn btn-dark"
                    onClick={fetchMessages}
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

            {/* ================= MESSAGE COUNT ================= */}

            {!loading && !error && (
                <div className="mb-3">

                    <span className="badge bg-dark me-2">
                        {messages.length} Messages
                    </span>

                    <span className="badge bg-warning text-dark">
                        {
                            messages.filter(
                                (item) =>
                                    item.status === "New"
                            ).length
                        }{" "}
                        New
                    </span>

                </div>
            )}

            {/* ================= CARD ================= */}

            <div className="card shadow-sm">

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
                                Loading messages...
                            </p>

                        </div>

                    ) : messages.length === 0 ? (

                        /* ================= NO MESSAGES ================= */

                        <div className="alert alert-info text-center mb-0">
                            No messages found.
                        </div>

                    ) : (

                        /* ================= TABLE ================= */

                        <div className="table-responsive">

                            <table className="table table-hover align-middle">

                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Subject</th>
                                        <th>Message</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {messages.map(
                                        (item, index) => (

                                            <tr
                                                key={item._id}
                                            >

                                                {/* Number */}

                                                <td>
                                                    {index + 1}
                                                </td>

                                                {/* Name */}

                                                <td>
                                                    <strong>
                                                        {item.name}
                                                    </strong>
                                                </td>

                                                {/* Email */}

                                                <td>
                                                    {item.email}
                                                </td>

                                                {/* Phone */}

                                                <td>
                                                    {item.phone || "-"}
                                                </td>

                                                {/* Subject */}

                                                <td>
                                                    {item.subject || "-"}
                                                </td>

                                                {/* Message */}

                                                <td
                                                    style={{
                                                        minWidth: "250px",
                                                        maxWidth: "350px",
                                                    }}
                                                >
                                                    {item.message}
                                                </td>

                                                {/* Date */}

                                                <td>
                                                    {formatDate(
                                                        item.createdAt
                                                    )}
                                                </td>

                                                {/* Status */}

                                                <td>

                                                    <span
                                                        className={`badge ${
                                                            item.status ===
                                                            "New"
                                                                ? "bg-warning text-dark"
                                                                : "bg-success"
                                                        }`}
                                                    >
                                                        {item.status}
                                                    </span>

                                                </td>

                                                {/* Action */}

                                                <td>

                                                    <div
                                                        className="d-flex flex-column gap-2"
                                                        style={{
                                                            minWidth: "120px",
                                                        }}
                                                    >

                                                        <select
                                                            className="form-select form-select-sm"
                                                            value={
                                                                item.status
                                                            }
                                                            onChange={(e) =>
                                                                updateStatus(
                                                                    item._id,
                                                                    e.target.value
                                                                )
                                                            }
                                                        >
                                                            <option value="New">
                                                                New
                                                            </option>

                                                            <option value="Read">
                                                                Read
                                                            </option>
                                                        </select>

                                                        <button
                                                            className="btn btn-outline-danger btn-sm"
                                                            onClick={() =>
                                                                deleteMessage(
                                                                    item._id
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

export default Messages;