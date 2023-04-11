import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Card from '../components/Card';
import Banner from '../components/Banner';
import datas from '../datas.json';

const Home = () => {
    const datasCard = datas.map(data => {
        return <Card key={data.id} data={data} />;
    });

    return (
        <>
            <Header />
            <main className="main">
                <Banner />
                <section className="cards">{datasCard}</section>
            </main>
            <Footer />
        </>
    );
};

export default Home;
