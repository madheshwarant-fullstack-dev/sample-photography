import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5000";

function Packages() {
    const [packages, setPackages] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("ALL");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(`${API_URL}/api/packages`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch packages");
                }

                return response.json();
            })
            .then((data) => {
                if (data.success) {
                    setPackages(data.packages);
                } else {
                    setError(data.message || "Unable to load packages");
                }

                setLoading(false);
            })
            .catch((error) => {
                console.error("Package fetch error:", error);
                setError("Unable to connect to server");
                setLoading(false);
            });
    }, []);

    const categories = [
        "ALL",
        ...new Set(packages.map((pkg) => pkg.category)),
    ];

    const filteredPackages =
        selectedCategory === "ALL"
            ? packages
            : packages.filter(
                  (pkg) => pkg.category === selectedCategory
              );

    const getImageUrl = (image) => {
        if (!image) {
            return null;
        }

        if (image.startsWith("http://") || image.startsWith("https://")) {
            return image;
        }

        if (image.startsWith("/")) {
            return `${API_URL}${image}`;
        }

        return `${API_URL}/${image}`;
    };

    if (loading) {
        return (
            <div className="container py-5 text-center">
                <h4>Loading Packages...</h4>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container py-5 text-center">
                <div className="alert alert-danger">
                    {error}
                </div>
            </div>
        );
    }

    return (
        <section className="packages-section py-5">
            <div className="container">

                {/* Heading */}
                <div className="text-center mb-4">
                    <h1 className="fw-bold">
                        Choose Your Package
                    </h1>

                    <p className="text-muted">
                        Explore our carefully designed photography
                        packages. Choose the one that suits your
                        special moments.
                    </p>
                </div>

                {/* Category Buttons */}
                <div className="text-center mb-5">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            className={`btn btn-sm me-2 mb-2 ${
                                selectedCategory === category
                                    ? "btn-dark"
                                    : "btn-outline-dark"
                            }`}
                            onClick={() =>
                                setSelectedCategory(category)
                            }
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Packages */}
                {filteredPackages.length === 0 ? (
                    <div className="alert alert-info text-center">
                        No packages found.
                    </div>
                ) : (
                    <div className="row g-4">

                        {filteredPackages.map((pkg) => {
                            const imageUrl = getImageUrl(pkg.image);

                            return (
                                <div
                                    className="col-lg-4 col-md-6"
                                    key={pkg._id}
                                >
                                    <div
                                        className="card h-100 border-0 shadow-sm"
                                        style={{
                                            borderRadius: "8px",
                                            overflow: "hidden",
                                        }}
                                    >

                                        {/* Package Image */}
                                        <div
                                            style={{
                                                height: "320px",
                                                backgroundColor: "#f5f5f5",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            {imageUrl ? (
                                                <img
                                                    src={imageUrl}
                                                    alt={pkg.name}
                                                    className="img-fluid w-100 h-100"
                                                    style={{
                                                        objectFit: "cover",
                                                    }}
                                                    onError={(e) => {
                                                        e.currentTarget.style.display =
                                                            "none";

                                                        e.currentTarget.parentElement.innerHTML =
                                                            '<span class="text-muted">No Image</span>';
                                                    }}
                                                />
                                            ) : (
                                                <span className="text-muted">
                                                    No Image
                                                </span>
                                            )}
                                        </div>

                                        {/* Package Details */}
                                        <div className="card-body">

                                            <span className="badge bg-dark mb-2">
                                                {pkg.category}
                                            </span>

                                            <h3 className="card-title fw-bold">
                                                {pkg.name}
                                            </h3>

                                            <p className="mb-2">
                                                <strong>
                                                    Delivery:
                                                </strong>{" "}
                                                {pkg.delivery}
                                            </p>

                                            <h4 className="fw-bold mb-3">
                                                ₹
                                                {Number(
                                                    pkg.price
                                                ).toLocaleString(
                                                    "en-IN"
                                                )}
                                            </h4>

                                            {pkg.description && (
                                                <p className="text-muted">
                                                    {pkg.description}
                                                </p>
                                            )}

                                            <h6 className="fw-bold">
                                                Highlights
                                            </h6>

                                            <ul className="small">
                                                {pkg.highlights?.map(
                                                    (
                                                        highlight,
                                                        index
                                                    ) => (
                                                        <li
                                                            key={
                                                                index
                                                            }
                                                        >
                                                            {
                                                                highlight
                                                            }
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>

                                        {/* Buttons */}
                                        <div className="card-footer bg-white border-0 p-3">
                                            <div className="d-flex gap-2">

                                                <Link
                                                    to={`/package/${pkg.packageId}`}
                                                    className="btn btn-outline-dark w-50"
                                                >
                                                    View Details
                                                </Link>

                                                <Link
                                                    to={`/booking?package=${pkg.packageId}`}
                                                    className="btn btn-dark w-50"
                                                >
                                                    Book Now
                                                </Link>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            );
                        })}

                    </div>
                )}

            </div>
        </section>
    );
}

export default Packages;