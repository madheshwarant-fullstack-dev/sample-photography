import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import packages from "../data/packages";

function PackageDetail() {
  const { packageId } = useParams();
  const navigate = useNavigate();

  const selectedPackage = packages.find(
    (pkg) => pkg.id === packageId
  );

  if (!selectedPackage) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h2>Package Not Found</h2>

        <button onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="package-detail">

      {/* Top Header */}
      <div className="package-header">
        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          ←
        </button>

        <h2>{selectedPackage.name}</h2>

        <button className="share-btn">
          ⤴
        </button>
      </div>

      {/* Package Image */}
      <div className="package-image">
        <img
          src={`/images/packages/${selectedPackage.id}.jpg`}
          alt={selectedPackage.name}
        />
      </div>

      {/* Package Content */}
      <div className="package-content">

        <p className="package-category">
          {selectedPackage.category}
        </p>

        <h1>{selectedPackage.name}</h1>

        {/* Delivery + Price */}
        <div className="package-info">

          <div className="info-box delivery">
            <span>◷</span>
            <strong>{selectedPackage.delivery}</strong>
          </div>

          <div className="info-box price">
            <span>▣</span>
            <strong>{selectedPackage.price}</strong>
          </div>

        </div>

        {/* About */}
        <section className="about-section">

          <h2>About this Service</h2>

          <p>
            Capture Moments, Create Memories
          </p>

        </section>

        {/* Highlights */}
        <section className="highlights-section">

          <h2>Highlights</h2>

          <ul>
            {selectedPackage.highlights.map(
              (highlight, index) => (
                <li key={index}>
                  <span className="check">✓</span>
                  {highlight}
                </li>
              )
            )}
          </ul>

        </section>

      </div>

      {/* Bottom Enquire Button */}
      <div className="enquire-container">

        <button
          className="enquire-btn"
          onClick={() => {
            window.open(
              "https://wa.me/919790102798",
              "_blank"
            );
          }}
        >
          <span>◉</span>
          Enquire Now
        </button>

      </div>

    </div>
  );
}

export default PackageDetail;