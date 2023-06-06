import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Banner from '../components/Banner';

const About = () => {
    return (
        <>
            <Header />
            <main className="main">
                <Banner className="about-banner" />
            </main>
            <Footer />
        </>
    );
};

export default About;
