import React from 'react';
import Navigation from './Navigation';
import headerLogo from '../assets/header-logo.png';

const Header = () => {
    return (
        <header className="header">
            <img className="header--logo" src={headerLogo} alt="Header Logo" />
            <Navigation />
        </header>
    );
};

export default Header;
