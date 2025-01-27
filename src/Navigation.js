import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return(
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Skills">Skills</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;