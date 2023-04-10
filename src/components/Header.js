import React from 'react';
import Navigation from './Navigation';
import logo from '../assets/logo.svg';

const Header = () => {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="logo" />
            <Navigation />
        </header>
    );
};

export default Header;
