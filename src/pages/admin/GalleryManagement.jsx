import React from "react";

function GalleryManagement() {
    return (
        <div className="container py-5">

            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1 className="fw-bold">Gallery Management</h1>
                    <p className="text-muted">
                        Add, edit and manage photography gallery images.
                    </p>
                </div>

                <button className="btn btn-pink">
                    + Add Photo
                </button>
            </div>

            <div className="row g-4">

                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5>Wedding Photography</h5>
                            <p className="text-muted">
                                Sample gallery image
                            </p>

                            <button className="btn btn-sm btn-outline-dark me-2">
                                Edit
                            </button>

                            <button className="btn btn-sm btn-outline-danger">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5>Portrait Photography</h5>
                            <p className="text-muted">
                                Sample gallery image
                            </p>

                            <button className="btn btn-sm btn-outline-dark me-2">
                                Edit
                            </button>

                            <button className="btn btn-sm btn-outline-danger">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default GalleryManagement;