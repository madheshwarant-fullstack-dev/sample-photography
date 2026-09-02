import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "http://localhost:5000";

function PackageDetail() {
    const { packageId } = useParams();
    const navigate = useNavigate();

    const [pkg, setPkg] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(`${API_URL}/api/packages/${packageId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Package not found");
                }

                return response.json();
            })
            .then((data) => {
                if (data.success) {
                    setPkg(data.package);
                } else {
                    setError(data.message);
                }

                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setError("Unable to load package");
                setLoading(false);
            });
    }, [packageId]);

    const getImageUrl = (image) => {
        if (!image) {
            return null;
        }

        if (
            image.startsWith("http://") ||
            image.startsWith("https://")
        ) {
            return image;
        }

        return `${API_URL}${image.startsWith("/") ? "" : "/"}${image}`;
    };

    if (loading) {
        return (
            <div className="container py-5 text-center">
                <h4>Loading Package...</h4>
            </div>
        );
    }

    if (error || !pkg) {
        return (
            <div className="container py-5">
                <div className="alert alert-danger">
                    {error || "Package not found"}
                </div>

                <button
                    className="btn btn-dark"
                    onClick={() => navigate("/packages")}
                >
                    Back to Packages
                </button>
            </div>
        );
    }

    const imageUrl = getImageUrl(pkg.image);

    return (
        <section className="py-5">
            <div className="container">

                <button
                    className="btn btn-outline-dark mb-4"
                    onClick={() => navigate("/packages")}
                >
                    ← Back to Packages
                </button>

                <div className="row g-5">

                    {/* Image */}
                    <div className="col-lg-6">
                        <div
                            style={{
                                height: "500px",
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
                                />
                            ) : (
                                <span className="text-muted">
                                    No Image Available
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Details */}
                    <div className="col-lg-6">

                        <span className="badge bg-dark mb-3">
                            {pkg.category}
                        </span>

                        <h1 className="fw-bold">
                            {pkg.name}
                        </h1>

                        <p className="text-muted">
                            {pkg.description}
                        </p>

                        <h2 className="fw-bold">
                            ₹
                            {Number(pkg.price).toLocaleString(
                                "en-IN"
                            )}
                        </h2>

                        <p>
                            <strong>Delivery:</strong>{" "}
                            {pkg.delivery}
                        </p>

                        <hr />

                        <h4 className="fw-bold mb-3">
                            Package Highlights
                        </h4>

                        <ul>
                            {pkg.highlights?.map(
                                (highlight, index) => (
                                    <li
                                        key={index}
                                        className="mb-2"
                                    >
                                        {highlight}
                                    </li>
                                )
                            )}
                        </ul>

                        <button
                            className="btn btn-dark btn-lg mt-3"
                            onClick={() =>
                                navigate(
                                    `/booking?package=${pkg.packageId}`
                                )
                            }
                        >
                            Enquire Now
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default PackageDetail;