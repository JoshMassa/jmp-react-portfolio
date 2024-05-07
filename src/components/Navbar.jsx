import React, { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
        <a id='name' href="/">Joshua Massa Pelletier</a>
        <button className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </button>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a className='links' href="/about">About Me</a>
        <a className='links' href="/portfolio">Portfolio</a>
        <a className='links' href="/contact">Contact</a>
        <a className='links' href="/resume">Resume</a>
        </div>
    </nav>
  );
}

export default Navbar;