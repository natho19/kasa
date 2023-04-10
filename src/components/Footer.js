import React from 'react';
import footerLogo from '../assets/footer-logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <img className="footer--logo" src={footerLogo} alt="Footer Logo" />
            <small className="footer--copyright">
                &copy; {new Date().getFullYear()} Kasa. All rights reserved
            </small>
        </footer>
    );
};

export default Footer;
