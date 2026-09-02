import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import packages from "../../data/packages";
import "../../assets/css/Booking.css";

function Booking() {
  const [searchParams] = useSearchParams();

  const selectedPackageId = searchParams.get("package");

  const selectedPackage = packages.find(
    (pkg) => pkg.id === selectedPackageId
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Booking Details:", {
      ...formData,
      package: selectedPackage?.name || "",
    });

    alert("Booking request submitted successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      location: "",
      message: "",
    });
  };

  return (
    <div className="booking-page">

      {/* Page Header */}
      <section className="booking-header">
        <p>BOOK YOUR SESSION</p>
        <h1>Let's Capture Your Moments</h1>
        <span>
          Fill in your details and our team will get back to you.
        </span>
      </section>

      <section className="booking-container">

        {/* Selected Package */}
        <div className="booking-summary">

          <h2>Booking Details</h2>

          {selectedPackage ? (
            <div className="selected-package">

              <p className="summary-label">
                SELECTED PACKAGE
              </p>

              <h3>{selectedPackage.name}</h3>

              <div className="summary-info">
                <span>
                  Delivery
                </span>
                <strong>
                  {selectedPackage.delivery}
                </strong>
              </div>

              <div className="summary-info">
                <span>
                  Price
                </span>
                <strong>
                  {selectedPackage.price}
                </strong>
              </div>

            </div>
          ) : (
            <div className="no-package">
              <p>No package selected.</p>
              <p>
                You can still submit an enquiry and choose
                your package later.
              </p>
            </div>
          )}

        </div>

        {/* Booking Form */}
        <div className="booking-form-box">

          <h2>Tell Us About Your Event</h2>

          <form onSubmit={handleSubmit}>

            {/* Name */}
            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <label>Phone Number</label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Event Type */}
            <div className="form-group">
              <label>Event Type</label>

              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select Event Type
                </option>

                <option value="Wedding">
                  Wedding
                </option>

                <option value="Birthday">
                  Birthday
                </option>

                <option value="Baby Shoot">
                  Baby Shoot
                </option>

                <option value="Pre Wedding">
                  Pre Wedding
                </option>

                <option value="Engagement">
                  Engagement
                </option>

                <option value="Maternity">
                  Maternity
                </option>

                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            {/* Event Date */}
            <div className="form-group">
              <label>Event Date</label>

              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
              />
            </div>

            {/* Location */}
            <div className="form-group">
              <label>Event Location</label>

              <input
                type="text"
                name="location"
                placeholder="Enter event location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>

            {/* Message */}
            <div className="form-group">
              <label>Additional Message</label>

              <textarea
                name="message"
                rows="5"
                placeholder="Tell us about your requirements..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="booking-submit"
            >
              Submit Booking Request
            </button>

          </form>

        </div>

      </section>

    </div>
  );
}

export default Booking;