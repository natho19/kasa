import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <Header />
            <main className="main">
                <section className="error">
                    <h1 className="error__title">404</h1>
                    <p className="error__description">
                        Oups! La page que vous demandez n'existe pas.
                    </p>
                    <Link className="error__link" to="/">
                        Retourner sur la page d'accueil
                    </Link>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default NotFound;
