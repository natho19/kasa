import React from 'react';
import footerLogo from '../assets/footer-logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <img className="footer__logo" src={footerLogo} alt="Footer Logo" />
            <small className="footer__copyright">
                &copy; {new Date().getFullYear()} Kasa. All rights reserved
            </small>
        </footer>
    );
};

export default Footer;
