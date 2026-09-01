import React from "react";

function Dashboard() {
    return (
        <div className="container py-5">

            <div className="text-center mb-5">
                <h1 className="fw-bold">
                    Admin Dashboard
                </h1>

                <p className="text-muted">
                    Welcome to Maha Creative Photography
                </p>
            </div>

            <div className="row g-4">

                <div className="col-md-3">
                    <div className="card shadow-sm p-4 text-center">
                        <h2>0</h2>
                        <p className="text-muted mb-0">
                            Total Users
                        </p>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow-sm p-4 text-center">
                        <h2>0</h2>
                        <p className="text-muted mb-0">
                            Bookings
                        </p>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow-sm p-4 text-center">
                        <h2>0</h2>
                        <p className="text-muted mb-0">
                            Gallery Photos
                        </p>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow-sm p-4 text-center">
                        <h2>0</h2>
                        <p className="text-muted mb-0">
                            Messages
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Dashboard;