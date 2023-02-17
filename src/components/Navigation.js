import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/about">A propos</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
