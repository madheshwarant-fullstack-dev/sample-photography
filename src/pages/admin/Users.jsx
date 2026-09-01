import React from "react";

function Users() {
    return (
        <div className="container py-5">

            <div className="mb-4">
                <h1 className="fw-bold">Users</h1>

                <p className="text-muted">
                    Manage registered Maha Creative Photography clients.
                </p>
            </div>

            <div className="card shadow-sm border-0">

                <div className="card-body">

                    <div className="table-responsive">

                        <table className="table table-hover align-middle">

                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Role</th>
                                    <th>Action</th>
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
                                        9876543210
                                    </td>

                                    <td>
                                        <span className="badge bg-primary">
                                            Client
                                        </span>
                                    </td>

                                    <td>
                                        <button className="btn btn-sm btn-outline-danger">
                                            Delete
                                        </button>
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

export default Users;