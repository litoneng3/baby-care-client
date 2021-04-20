import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link ms-2 active" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-2" to="#">About Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-2" to="/dashboard">Dashboard</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-2" to="addReview">Review</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-2" to="#">Admin</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-2" to="/login">Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-2" to="#">Contact Us</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;