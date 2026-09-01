import React from "react";

function PackageManagement() {
    return (
        <div className="container py-5">

            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1 className="fw-bold">Package Management</h1>

                    <p className="text-muted">
                        Manage photography packages and pricing.
                    </p>
                </div>

                <button className="btn btn-pink">
                    + Add Package
                </button>
            </div>

            <div className="row g-4">

                <div className="col-md-4">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">

                            <h4>Basic Package</h4>

                            <h3 className="fw-bold mt-3">
                                ₹5,000
                            </h3>

                            <p className="text-muted">
                                Portrait and basic photography session.
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
                    <div className="card shadow-sm h-100">
                        <div className="card-body">

                            <h4>Premium Package</h4>

                            <h3 className="fw-bold mt-3">
                                ₹15,000
                            </h3>

                            <p className="text-muted">
                                Premium event and portrait photography.
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
                    <div className="card shadow-sm h-100">
                        <div className="card-body">

                            <h4>Wedding Package</h4>

                            <h3 className="fw-bold mt-3">
                                ₹30,000
                            </h3>

                            <p className="text-muted">
                                Complete wedding photography package.
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

export default PackageManagement;