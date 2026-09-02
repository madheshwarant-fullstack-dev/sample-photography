import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ClientProtectedRoute() {
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

    // No token → Client Login
    if (!token) {
        return (
            <Navigate
                to="/login"
                replace
            />
        );
    }

    // User data missing
    if (!user) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        return (
            <Navigate
                to="/login"
                replace
            />
        );
    }

    // Admin should not use client protected route
    if (user.role === "admin") {
        return (
            <Navigate
                to="/admin/dashboard"
                replace
            />
        );
    }

    // Client authenticated → allow access
    return <Outlet />;
}

export default ClientProtectedRoute;