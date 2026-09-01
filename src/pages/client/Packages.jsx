import React from "react";

const packages = [
    {
        name: "Basic",
        price: "₹5,000",
        features: [
            "3 Hours Photography",
            "50 Edited Photos",
            "Digital Album",
            "Online Delivery"
        ]
    },
    {
        name: "Premium",
        price: "₹15,000",
        features: [
            "6 Hours Photography",
            "150 Edited Photos",
            "Premium Album",
            "Online Delivery",
            "Professional Editing"
        ],
        popular: true
    },
    {
        name: "Wedding",
        price: "₹30,000",
        features: [
            "Full Day Photography",
            "300+ Edited Photos",
            "Wedding Album",
            "Cinematic Video",
            "Online Gallery"
        ]
    }
];

function Packages() {
    return (
        <section id="packages" className="packages-section py-5">

            <div className="container py-5">

                <div className="text-center mb-5">

                    <p className="section-title">
                        PRICING
                    </p>

                    <h2 className="display-5 fw-bold">
                        Our <span className="pink-text">Packages</span>
                    </h2>

                </div>


                <div className="row g-4 justify-content-center">

                    {packages.map((item, index) => (

                        <div
                            className="col-md-6 col-lg-4"
                            key={index}
                        >

                            <div
                                className={`package-card ${
                                    item.popular ? "popular-package" : ""
                                }`}
                            >

                                {item.popular && (
                                    <span className="popular-badge">
                                        MOST POPULAR
                                    </span>
                                )}

                                <h3>{item.name}</h3>

                                <h2 className="pink-text">
                                    {item.price}
                                </h2>

                                <hr />

                                {item.features.map((feature, i) => (

                                    <p key={i}>
                                        ✓ {feature}
                                    </p>

                                ))}

                                <a
                                    href="/booking"
                                    className="btn btn-pink w-100 mt-3"
                                >
                                    Choose Package
                                </a>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Packages;