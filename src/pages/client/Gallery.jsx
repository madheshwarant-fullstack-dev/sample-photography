import React from "react";

function Gallery() {
  const photos = [
    {
      image: "/images/gallery/Wedding2.jpeg",
      title: "Wedding Photography",
    },
    {
      image: "/images/gallery/birthday.jpeg",
      title: "Birthday Photography",
    },
    {
      image: "/images/gallery/baby.jpeg",
      title: "Baby Photography",
    },
    {
      image: "/images/gallery/prewedding.jpeg",
      title: "Pre-Wedding Photography",
    },
    {
      image: "/images/gallery/model.jpeg",
      title: "Model Photography",
    },
    {
      image: "/images/gallery/baby shower.jpeg",
      title: "Baby shower Photography",
    },
  ];

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
        <div className="row g-4">

          {photos.map((photo, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="gallery-card">

                <img
                  src={photo.image}
                  alt={photo.title}
                  className="img-fluid"
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
      </section>

    </div>
  );
}

export default Gallery;