import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
    return (
        <>
            <Header />
            <main className="main">
                <section className="banner">
                    <h1>Chez vous, partout et ailleurs</h1>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Home;
