import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-black navbar-dark static-top">

            <div className="container">

                {/* Logo */}

                <Link className="navbar-brand" to="/">
                    <img
                        src="/images/Logo.png"
                        alt="Maha Creative Photography"
                        className="logo"
                    />
                </Link>


                {/* Mobile Menu Button */}

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>


                {/* Navigation Links */}

                <div
                    className="collapse navbar-collapse"
                    id="mainNavbar"
                >

                    <ul className="navbar-nav ms-auto align-items-lg-center">

                        {/* Home */}

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>


                        {/* About */}

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/about"
                            >
                                About
                            </Link>
                        </li>


                        {/* Services */}

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/services"
                            >
                                Services
                            </Link>
                        </li>


                        {/* Gallery */}

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/gallery"
                            >
                                Gallery
                            </Link>
                        </li>


                        {/* Packages */}

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/packages"
                            >
                                Packages
                            </Link>
                        </li>


                        {/* Contact */}

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/contact"
                            >
                                Contact
                            </Link>
                        </li>


                        {/* Login */}

                        <li className="nav-item ms-lg-3 mt-2 mt-lg-0">

                            <Link
                                className="btn btn-pink"
                                to="/login"
                            >
                                Login
                            </Link>

                        </li>

                    </ul>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;