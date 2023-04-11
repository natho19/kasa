import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Card from '../components/Card';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <>
            <Header />
            <main className="main">
                <Banner />
                <section className="cards">
                    <Card />
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Home;
