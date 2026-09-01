import React from "react";
import "../../assets/css/Packages.css";

function Packages() {
  const packages = [
    {
      name: "Package Mini",
      type: "AFFORDABLE",
      price: "₹15,000",
      image: "/images/packages/mini.png",
    },
    {
      name: "Package Smart",
      type: "AFFORDABLE",
      price: "₹20,000",
      image: "/images/packages/smart.png",
    },
    {
      name: "Package Smart Plus",
      type: "AFFORDABLE",
      price: "₹25,000",
      image: "/images/packages/smart-plus.png",
    },
    {
      name: "Package Photo Golden",
      type: "AFFORDABLE",
      price: "₹30,000",
      image: "/images/packages/photo-golden.png",
    },
    {
      name: "Silver Package",
      type: "GRAND",
      price: "₹45,000",
      image: "/images/packages/silver.png",
    },
    {
      name: "Silver Plus Package",
      type: "GRAND",
      price: "₹50,000",
      image: "/images/packages/silver-plus.png",
    },
    {
      name: "Golden Package",
      type: "GRAND",
      price: "₹65,000",
      image: "/images/packages/golden.png",
    },
    {
      name: "Diamond Package",
      type: "GRAND",
      price: "₹85,000",
      image: "/images/packages/diamond.png",
    },
    {
      name: "Premium Package",
      type: "GRAND",
      price: "₹1,00,000",
      image: "/images/packages/premium.png",
    },
  ];

  return (
    <div className="packages-page">

      <section className="packages-header text-center">
        <p>MAHA CREATIVE PHOTOGRAPHY</p>

        <h1>
          Our <span>Packages</span>
        </h1>

        <p className="subtitle">
          Choose the perfect photography package for your special moments.
        </p>
      </section>

      <section className="container py-5">

        <div className="row g-4">

          {packages.map((pkg, index) => (
            <div className="col-lg-4 col-md-6" key={index}>

              <div className="package-card">

                <div className="package-image">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                  />
                </div>

                <div className="package-content">

                  <span className="package-type">
                    {pkg.type}
                  </span>

                  <h3>{pkg.name}</h3>

                  <p>
                    Capture Moments, Create Memories
                  </p>

                  <div className="package-bottom">

                    <h4>{pkg.price}</h4>

                    <button
                      className="package-btn"
                      onClick={() =>
                        alert(`Selected: ${pkg.name}`)
                      }
                    >
                      Book Now
                    </button>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default Packages;