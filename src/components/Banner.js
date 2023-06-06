import React from 'react';

const Banner = props => {
    return (
        <section className={`banner ${props.className}`}>
            {props.title && <h1 className="banner__title">{props.title}</h1>}
        </section>
    );
};

export default Banner;
