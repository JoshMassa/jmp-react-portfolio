import React from 'react';
import Navigation from './Navigation';
import '../styles/Header.css';

function Header({ onEasterEggClick }) {
    return (
        <header className='header'>
            <Navigation onEasterEggClick={onEasterEggClick} />
        </header>
    );
}

export default Header;