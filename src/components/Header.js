import React from 'react';
import Navigation from './Navigation';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <Navigation />
        </header>
    );
};

export default Header;
