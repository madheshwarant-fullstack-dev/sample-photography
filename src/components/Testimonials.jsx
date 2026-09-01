import React from "react";

const reviews = [
    {
        name: "Priya & Arun",
        review:
            "Maha Creative captured our wedding beautifully. Every photo feels so natural and emotional."
    },
    {
        name: "Karthik",
        review:
            "Amazing photography and professional service. The final album was absolutely beautiful."
    },
    {
        name: "Divya",
        review:
            "The portrait session was comfortable and creative. Highly recommended!"
    }
];

function Testimonials() {
    return (
        <section className="testimonials-section py-5">

            <div className="container py-5">

                <div className="text-center mb-5">

                    <p className="section-title">
                        TESTIMONIALS
                    </p>

                    <h2 className="display-5 fw-bold">
                        What Our <span className="pink-text">Clients Say</span>
                    </h2>

                </div>


                <div className="row g-4">

                    {reviews.map((review, index) => (

                        <div className="col-md-4" key={index}>

                            <div className="review-card">

                                <div className="stars">
                                    ★★★★★
                                </div>

                                <p>
                                    "{review.review}"
                                </p>

                                <h5>
                                    {review.name}
                                </h5>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Testimonials;