import React from 'react';
import logo from '../logo.png';

function Header() {
    return (
        <header className="disp-flex flex-just--sb flex-align--cen">
            <img src={logo} className="App-logo" alt="logo" />
            <nav className="disp-flex flex-align--cen">
                <div className="nav-item">
                    <a href="./">Our Mission</a>
                </div>
                <div className="nav-item">
                    <a href="./">Contact Us</a>
                </div>
                <button className="btn-primary nav-item">Join us</button>

            </nav>
        </header>
    );
}

export default Header;
