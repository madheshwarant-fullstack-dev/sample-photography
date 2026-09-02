import React, { useEffect, useState } from "react";

const API_URL = "http://localhost:5000";

function PackageManagement() {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);

    const [form, setForm] = useState({
        packageId: "",
        name: "",
        category: "AFFORDABLE",
        delivery: "",
        price: "",
        image: "",
        description: "",
        highlights: "",
    });

    const [editingId, setEditingId] = useState(null);

    // ================= FETCH PACKAGES =================

    const fetchPackages = async () => {
        try {
            setLoading(true);

            const response = await fetch(
                `${API_URL}/api/packages`
            );

            const data = await response.json();

            if (data.success) {
                setPackages(data.packages);
            }
        } catch (error) {
            console.error(
                "Fetch packages error:",
                error
            );
        } finally {
            setLoading(false);
        }
    };

    // ================= LOAD PACKAGES =================

    useEffect(() => {
        fetchPackages();
    }, []);

    // ================= HANDLE INPUT =================

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    // ================= ADD / UPDATE PACKAGE =================

    const handleSubmit = async (e) => {
        e.preventDefault();

        const packageData = {
            packageId: form.packageId,
            name: form.name,
            category: form.category,
            delivery: form.delivery,
            price: Number(form.price),
            image: form.image,
            description: form.description,
            highlights: form.highlights
                .split("\n")
                .map((item) => item.trim())
                .filter((item) => item !== ""),
        };

        try {
            const token = localStorage.getItem("token");

            let response;

            // ================= UPDATE =================

            if (editingId) {
                response = await fetch(
                    `${API_URL}/api/packages/${editingId}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify(packageData),
                    }
                );
            }

            // ================= ADD =================

            else {
                response = await fetch(
                    `${API_URL}/api/packages`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify(packageData),
                    }
                );
            }

            const data = await response.json();

            if (!response.ok) {
                alert(
                    data.message ||
                        "Something went wrong"
                );
                return;
            }

            alert(
                editingId
                    ? "Package updated successfully!"
                    : "Package added successfully!"
            );

            resetForm();
            fetchPackages();

        } catch (error) {
            console.error(
                "Save package error:",
                error
            );

            alert("Server error");
        }
    };

    // ================= EDIT PACKAGE =================

    const handleEdit = (pkg) => {
        setEditingId(pkg._id);

        setForm({
            packageId: pkg.packageId || "",
            name: pkg.name || "",
            category: pkg.category || "AFFORDABLE",
            delivery: pkg.delivery || "",
            price: pkg.price || "",
            image: pkg.image || "",
            description: pkg.description || "",
            highlights: Array.isArray(pkg.highlights)
                ? pkg.highlights.join("\n")
                : "",
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // ================= DELETE PACKAGE =================

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this package?"
        );

        if (!confirmDelete) return;

        try {
            const token = localStorage.getItem("token");

            const response = await fetch(
                `${API_URL}/api/packages/${id}`,
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
                        "Delete failed"
                );
                return;
            }

            alert(
                "Package deleted successfully!"
            );

            fetchPackages();

        } catch (error) {
            console.error(
                "Delete package error:",
                error
            );

            alert("Server error");
        }
    };

    // ================= RESET FORM =================

    const resetForm = () => {
        setEditingId(null);

        setForm({
            packageId: "",
            name: "",
            category: "AFFORDABLE",
            delivery: "",
            price: "",
            image: "",
            description: "",
            highlights: "",
        });
    };

    // ================= IMAGE URL =================

    const getImageUrl = (image) => {
        if (!image) return "";

        if (
            image.startsWith("http://") ||
            image.startsWith("https://")
        ) {
            return image;
        }

        if (image.startsWith("/")) {
            return `${API_URL}${image}`;
        }

        return `${API_URL}/${image}`;
    };

    // ================= RENDER =================

    return (
        <div className="container py-5">

            {/* ================= HEADER ================= */}

            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>
                    <h2 className="fw-bold">
                        Package Management
                    </h2>

                    <p className="text-muted mb-0">
                        Add, edit and manage photography packages
                    </p>
                </div>

                <button
                    className="btn btn-secondary"
                    onClick={resetForm}
                >
                    Clear Form
                </button>

            </div>

            {/* ================= FORM ================= */}

            <div className="card shadow-sm mb-5">

                <div className="card-body p-4">

                    <h4 className="fw-bold mb-4">
                        {editingId
                            ? "Edit Package"
                            : "Add New Package"}
                    </h4>

                    <form onSubmit={handleSubmit}>

                        <div className="row g-3">

                            {/* Package ID */}

                            <div className="col-md-6">

                                <label className="form-label">
                                    Package ID
                                </label>

                                <input
                                    type="text"
                                    name="packageId"
                                    className="form-control"
                                    placeholder="package-mini"
                                    value={
                                        form.packageId
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    required
                                />

                            </div>

                            {/* Package Name */}

                            <div className="col-md-6">

                                <label className="form-label">
                                    Package Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Package Mini"
                                    value={form.name}
                                    onChange={
                                        handleChange
                                    }
                                    required
                                />

                            </div>

                            {/* Category */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    Category
                                </label>

                                <select
                                    name="category"
                                    className="form-select"
                                    value={
                                        form.category
                                    }
                                    onChange={
                                        handleChange
                                    }
                                >

                                    <option value="AFFORDABLE">
                                        AFFORDABLE
                                    </option>

                                    <option value="GRAND">
                                        GRAND
                                    </option>

                                </select>

                            </div>

                            {/* Delivery */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    Delivery
                                </label>

                                <input
                                    type="text"
                                    name="delivery"
                                    className="form-control"
                                    placeholder="90 Days (Album Delivery)"
                                    value={
                                        form.delivery
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    required
                                />

                            </div>

                            {/* Price */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    Price
                                </label>

                                <input
                                    type="number"
                                    name="price"
                                    className="form-control"
                                    placeholder="45000"
                                    value={form.price}
                                    onChange={
                                        handleChange
                                    }
                                    required
                                />

                            </div>

                            {/* Image URL */}

                            <div className="col-12">

                                <label className="form-label">
                                    Image URL
                                </label>

                                <input
                                    type="text"
                                    name="image"
                                    className="form-control"
                                    placeholder="/images/packages/silver.png"
                                    value={form.image}
                                    onChange={
                                        handleChange
                                    }
                                />

                            </div>

                            {/* Description */}

                            <div className="col-12">

                                <label className="form-label">
                                    Description
                                </label>

                                <textarea
                                    name="description"
                                    className="form-control"
                                    rows="3"
                                    placeholder="Capture Moments, Create Memories"
                                    value={
                                        form.description
                                    }
                                    onChange={
                                        handleChange
                                    }
                                />

                            </div>

                            {/* Highlights */}

                            <div className="col-12">

                                <label className="form-label">
                                    Highlights
                                </label>

                                <textarea
                                    name="highlights"
                                    className="form-control"
                                    rows="7"
                                    placeholder={`Unlimited Photos
Candid Photography
Traditional Videography
36x12 Album
Calendar`}
                                    value={
                                        form.highlights
                                    }
                                    onChange={
                                        handleChange
                                    }
                                />

                                <small className="text-muted">
                                    Enter one highlight per line
                                </small>

                            </div>

                        </div>

                        {/* Buttons */}

                        <div className="mt-4">

                            <button
                                type="submit"
                                className="btn btn-dark me-2"
                            >
                                {editingId
                                    ? "Update Package"
                                    : "Add Package"}
                            </button>

                            {editingId && (
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    onClick={resetForm}
                                >
                                    Cancel Edit
                                </button>
                            )}

                        </div>

                    </form>

                </div>

            </div>

            {/* ================= EXISTING PACKAGES ================= */}

            <div className="d-flex justify-content-between align-items-center mb-3">

                <h4 className="fw-bold mb-0">
                    Existing Packages
                </h4>

                <span className="badge bg-dark">
                    {packages.length} Packages
                </span>

            </div>

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
                        Loading packages...
                    </p>

                </div>

            ) : packages.length === 0 ? (

                /* ================= NO PACKAGES ================= */

                <div className="alert alert-info">
                    No packages found.
                </div>

            ) : (

                /* ================= PACKAGE CARDS ================= */

                <div className="row g-4">

                    {packages.map((pkg) => (

                        <div
                            className="col-md-6 col-lg-4"
                            key={pkg._id}
                        >

                            <div className="card h-100 shadow-sm">

                                {pkg.image && (
                                    <img
                                        src={getImageUrl(
                                            pkg.image
                                        )}
                                        className="card-img-top"
                                        alt={pkg.name}
                                        style={{
                                            height: "220px",
                                            objectFit: "cover",
                                        }}
                                    />
                                )}

                                <div className="card-body">

                                    <span className="badge bg-secondary mb-2">
                                        {pkg.category}
                                    </span>

                                    <h5 className="fw-bold">
                                        {pkg.name}
                                    </h5>

                                    <h4 className="fw-bold">
                                        ₹
                                        {Number(
                                            pkg.price
                                        ).toLocaleString(
                                            "en-IN"
                                        )}
                                    </h4>

                                    <p className="text-muted mb-2">
                                        {pkg.delivery}
                                    </p>

                                    {pkg.description && (
                                        <p className="small">
                                            {
                                                pkg.description
                                            }
                                        </p>
                                    )}

                                    <ul className="small ps-3">

                                        {pkg.highlights?.map(
                                            (
                                                item,
                                                index
                                            ) => (
                                                <li
                                                    key={
                                                        index
                                                    }
                                                >
                                                    {item}
                                                </li>
                                            )
                                        )}

                                    </ul>

                                </div>

                                <div className="card-footer bg-white border-0 d-flex gap-2">

                                    <button
                                        className="btn btn-outline-dark btn-sm"
                                        onClick={() =>
                                            handleEdit(
                                                pkg
                                            )
                                        }
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="btn btn-outline-danger btn-sm"
                                        onClick={() =>
                                            handleDelete(
                                                pkg._id
                                            )
                                        }
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
}

export default PackageManagement;