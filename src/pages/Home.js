import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Card from '../components/Card';

const Home = () => {
    return (
        <>
            <Header />
            <main className="main">
                <section className="banner">
                    <h1>Chez vous, partout et ailleurs</h1>
                </section>
                <section className="cards">
                    <Card />
                    <Card />
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Home;
