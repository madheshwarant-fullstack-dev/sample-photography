import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Packages.css";
import packages from "../../data/packages";

function Packages() {
    const [selectedCategory, setSelectedCategory] = useState("ALL");

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

    return (
        <div className="packages-page">

            {/* ================= HERO ================= */}

            <section className="packages-hero">
                <div className="packages-hero-content">
                    <h1>Our Photography Packages</h1>

                    <p>
                        Choose the perfect photography package for your
                        special moments. From intimate sessions to grand
                        celebrations, we create memories that last forever.
                    </p>
                </div>
            </section>


            {/* ================= PACKAGES ================= */}

            <section className="packages-section">

                <div className="packages-section-header">
                    <h2>Choose Your Package</h2>

                    <p>
                        Explore our carefully designed photography packages
                        and find the one that suits your occasion.
                    </p>
                </div>


                {/* ================= FILTER ================= */}

                <div className="package-filters">

                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`package-filter-btn ${
                                selectedCategory === category
                                    ? "active"
                                    : ""
                            }`}
                            onClick={() =>
                                setSelectedCategory(category)
                            }
                        >
                            {category}
                        </button>
                    ))}

                </div>


                {/* ================= PACKAGE GRID ================= */}

                {filteredPackages.length > 0 ? (

                    <div className="packages-grid">

                        {filteredPackages.map((pkg, index) => (

                            <div
                                className={`package-card ${
                                    index === 1 ? "featured" : ""
                                }`}
                                key={pkg.id}
                            >

                                {/* Image */}

                                <div className="package-image">

                                    <img
                                        src={pkg.image}
                                        alt={pkg.name}
                                    />

                                </div>


                                {/* Content */}

                                <div className="package-content">

                                    <span className="package-category">
                                        {pkg.category}
                                    </span>

                                    <h3>
                                        {pkg.name}
                                    </h3>


                                    {pkg.description && (
                                        <p className="package-description">
                                            {pkg.description}
                                        </p>
                                    )}


                                    {/* Price */}

                                    <div className="package-price">

                                        <span className="package-price-label">
                                            Starting from
                                        </span>

                                        <span className="package-price-value">
                                            {pkg.price}
                                        </span>

                                    </div>


                                    {/* Highlights */}

                                    {pkg.highlights &&
                                        pkg.highlights.length > 0 && (

                                            <ul className="package-highlights">

                                                {pkg.highlights.map(
                                                    (highlight, i) => (
                                                        <li key={i}>
                                                            {highlight}
                                                        </li>
                                                    )
                                                )}

                                            </ul>

                                        )}


                                    {/* Buttons */}

                                    <div className="package-buttons">

                                        <Link
                                            to={`/package/${pkg.id}`}
                                            className="package-btn package-btn-secondary"
                                        >
                                            View Details
                                        </Link>

                                        <Link
                                            to={`/booking?package=${pkg.id}`}
                                            className="package-btn package-btn-primary"
                                        >
                                            Book Now
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                ) : (

                    <div className="no-packages">

                        <h3>
                            No Packages Found
                        </h3>

                        <p>
                            Please try another category.
                        </p>

                    </div>

                )}

            </section>

        </div>
    );
}

export default Packages;