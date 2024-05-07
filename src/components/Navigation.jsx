import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const getNavLinkClass = ({ isActive }) => isActive ? "links active-link" : "links";

  return (
      <nav className="navbar">
          <NavLink to="/" className={`${getNavLinkClass} name`}>Joshua Massa Pelletier</NavLink>
          <button className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(! isOpen)}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
          </button>
          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
              <NavLink to="/about" className={getNavLinkClass}>About Me</NavLink>
              <NavLink to="/portfolio" className={getNavLinkClass}>Portfolio</NavLink>
              <NavLink to="/contact" className={getNavLinkClass}>Contact</NavLink>
              <NavLink to="/resume" className={getNavLinkClass}>Resume</NavLink>
          </div>
      </nav>
  );
}

export default Navigation;