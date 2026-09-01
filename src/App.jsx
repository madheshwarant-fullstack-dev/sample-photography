import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Client Pages
import Home from "./pages/client/Home";
import About from "./pages/client/About";
import Services from "./pages/client/Services";
import Gallery from "./pages/client/Gallery";
import Packages from "./pages/client/Packages";
import Booking from "./pages/client/Booking";
import Contact from "./pages/client/Contact";
import Login from "./pages/client/Login";
import Signup from "./pages/client/Signup";
import Profile from "./pages/client/Profile";

// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import Users from "./pages/admin/Users";
import Bookings from "./pages/admin/Bookings";
import GalleryManagement from "./pages/admin/GalleryManagement";
import PackageManagement from "./pages/admin/PackageManagement";
import Messages from "./pages/admin/Messages";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                {/* ================= CLIENT ================= */}

                <Route
                    path="/"
                    element={
                        <>
                            <Navbar />
                            <Home />
                            <Footer />
                        </>
                    }
                />

                <Route
                    path="/about"
                    element={
                        <>
                            <Navbar />
                            <About />
                            <Footer />
                        </>
                    }
                />

                <Route
                    path="/services"
                    element={
                        <>
                            <Navbar />
                            <Services />
                            <Footer />
                        </>
                    }
                />

                <Route
                    path="/gallery"
                    element={
                        <>
                            <Navbar />
                            <Gallery />
                            <Footer />
                        </>
                    }
                />

                <Route
                    path="/packages"
                    element={
                        <>
                            <Navbar />
                            <Packages />
                            <Footer />
                        </>
                    }
                />

                <Route
                    path="/booking"
                    element={
                        <>
                            <Navbar />
                            <Booking />
                            <Footer />
                        </>
                    }
                />

                <Route
                    path="/contact"
                    element={
                        <>
                            <Navbar />
                            <Contact />
                            <Footer />
                        </>
                    }
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/signup"
                    element={<Signup />}
                />

                <Route
                    path="/profile"
                    element={
                        <>
                            <Navbar />
                            <Profile />
                            <Footer />
                        </>
                    }
                />


                {/* ================= ADMIN ================= */}

                <Route
                    path="/admin/login"
                    element={<AdminLogin />}
                />

                <Route
                    path="/admin/dashboard"
                    element={<Dashboard />}
                />

                <Route
                    path="/admin/users"
                    element={<Users />}
                />

                <Route
                    path="/admin/bookings"
                    element={<Bookings />}
                />

                <Route
                    path="/admin/gallery"
                    element={<GalleryManagement />}
                />

                <Route
                    path="/admin/packages"
                    element={<PackageManagement />}
                />

                <Route
                    path="/admin/messages"
                    element={<Messages />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;