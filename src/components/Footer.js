import React from 'react';
import logoWhite from '../assets/logo-white.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <img src={logoWhite} alt="logo white" />
            <p>&copy; {new Date().getFullYear()} Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;
