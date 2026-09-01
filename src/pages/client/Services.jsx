import React from "react";

const services = [
    {
        icon: "💍",
        title: "Wedding Photography",
        description: "Beautifully capture every emotional moment of your wedding."
    },
    {
        icon: "💕",
        title: "Pre-Wedding",
        description: "Creative and romantic pre-wedding photography sessions."
    },
    {
        icon: "🎉",
        title: "Event Photography",
        description: "Professional coverage for birthdays and special events."
    },
    {
        icon: "👤",
        title: "Portrait Photography",
        description: "Professional portraits that showcase your personality."
    },
    {
        icon: "👤",
        title: "Model Photography",
        description: "High-quality product images for your business."
    },
    {
        icon: "👶",
        title: "Baby Photography",
        description: "Preserve your baby's precious memories forever."
    }
];

function Services() {
    return (
        <section id="services" className="services-section py-5">

            <div className="container py-5">

                <div className="text-center mb-5">

                    <p className="section-title">
                        WHAT WE OFFER
                    </p>

                    <h2 className="display-5 fw-bold">
                        Our <span className="pink-text">Services</span>
                    </h2>

                    <p className="text-muted">
                        Professional photography for every beautiful occasion.
                    </p>

                </div>


                <div className="row g-4">

                    {services.map((service, index) => (

                        <div
                            className="col-md-6 col-lg-4"
                            key={index}
                        >

                            <div className="service-card h-100">

                                <div className="service-icon">
                                    {service.icon}
                                </div>

                                <h4>
                                    {service.title}
                                </h4>

                                <p>
                                    {service.description}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Services;