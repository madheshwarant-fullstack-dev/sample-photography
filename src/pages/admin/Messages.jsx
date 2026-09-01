import React from "react";

function Messages() {
    return (
        <div className="container py-5">

            <div className="mb-4">
                <h1 className="fw-bold">Messages</h1>
                <p className="text-muted">
                    Manage messages received from clients.
                </p>
            </div>

            <div className="card shadow-sm">

                <div className="card-body">

                    <div className="table-responsive">

                        <table className="table table-hover align-middle">

                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Message</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr>
                                    <td>1</td>

                                    <td>
                                        Sample Client
                                    </td>

                                    <td>
                                        client@example.com
                                    </td>

                                    <td>
                                        I would like to book a
                                        photography session.
                                    </td>

                                    <td>
                                        <span className="badge bg-warning">
                                            New
                                        </span>
                                    </td>
                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Messages;