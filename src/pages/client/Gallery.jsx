import React, { useEffect, useState } from "react";

function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Get gallery from backend
  const fetchGallery = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/gallery"
      );

      const data = await response.json();

      if (data.success) {
        setPhotos(data.gallery);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Unable to load gallery");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  return (
    <div className="gallery-page">

      {/* Heading */}
      <section className="gallery-header text-center py-5">
        <p className="gallery-small-title">
          MAHA CREATIVE PHOTOGRAPHY
        </p>

        <h1>
          Our <span>Gallery</span>
        </h1>

        <p className="text-muted">
          Explore some of our beautiful photography moments.
        </p>
      </section>

      {/* Gallery */}
      <section className="container pb-5">

        {/* Loading */}
        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border"></div>

            <p className="mt-2">
              Loading gallery...
            </p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="alert alert-danger text-center">
            {error}
          </div>
        )}

        {/* Empty */}
        {!loading && !error && photos.length === 0 && (
          <div className="text-center py-5">
            <h5>No photos available</h5>

            <p className="text-muted">
              Gallery photos will appear here.
            </p>
          </div>
        )}

        {/* Gallery Cards */}
        {!loading && !error && photos.length > 0 && (
          <div className="row g-4">

            {photos.map((photo) => (
              <div
                className="col-lg-4 col-md-6"
                key={photo._id}
              >
                <div className="gallery-card">

                  <img
                    src={
                      photo.image.startsWith("http")
                        ? photo.image
                        : `http://localhost:5000${photo.image}`
                    }
                    alt={photo.title}
                    className="img-fluid w-100"
                    style={{
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="gallery-overlay">

                    <h4>{photo.title}</h4>

                    <button className="btn btn-light">
                      View Photo
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>
        )}

      </section>

    </div>
  );
}

export default Gallery;