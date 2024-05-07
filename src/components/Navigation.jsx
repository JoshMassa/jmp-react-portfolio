import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const currentPath = window.location.pathname;

  return (
    <nav className="navbar">
        <NavLink id='name' className="links" to="/" activeClassName="active-link">Joshua Massa Pelletier</NavLink>
        <button className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </button>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            <NavLink className="links" to="/about" activeClassName="active-link">About Me</NavLink>
            <NavLink className="links" to="/portfolio" activeClassName="active-link">Portfolio</NavLink>
            <NavLink className="links" to="/contact" activeClassName="active-link">Contact</NavLink>
            <NavLink className="links" to="/resume" activeClassName="active-link">Resume</NavLink>
        </div>
    </nav>
  );
}

export default Navigation;