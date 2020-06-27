import React from 'react';
import logo from '../logo.png';
import {
    Link
} from "react-router-dom";
function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img src={logo} className="logo" alt="logo" />
            </Link>
            <nav>
                <ul className="disp-flex flex-align--cen">
                    <li className="nav-item">
                        <Link to="/about">Our Mission</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="nav-item"><button className="btn-primary">Join us</button></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
