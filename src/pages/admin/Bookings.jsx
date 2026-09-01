import React from "react";

function Bookings() {
    return (
        <div className="container py-5">

            <h1 className="fw-bold">
                Bookings
            </h1>

            <p className="text-muted">
                Manage photography bookings here.
            </p>

            <div className="table-responsive mt-4">

                <table className="table table-bordered">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Client</th>
                            <th>Event</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td>1</td>
                            <td>Sample Client</td>
                            <td>Wedding</td>
                            <td>01/09/2026</td>
                            <td>
                                <span className="badge bg-warning">
                                    Pending
                                </span>
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default Bookings;