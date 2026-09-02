import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function AdminProtectedRoute() {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    let user = null;

    try {
        user = userData
            ? JSON.parse(userData)
            : null;
    } catch (error) {
        console.error(
            "Invalid user data:",
            error
        );
    }

    // No token → Admin Login
    if (!token) {
        return <Navigate to="/admin/login" replace />;
    }

    // Token exists but user is not admin
    if (!user || user.role !== "admin") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        return (
            <Navigate
                to="/admin/login"
                replace
            />
        );
    }

    // Admin authenticated → allow access
    return <Outlet />;
}

export default AdminProtectedRoute;