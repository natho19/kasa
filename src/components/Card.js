import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <article className="card">
            <Link className="card__link">
                <img className="card__image" src="./house.jpg" alt="house" />
                <h2 className="card__title">Titre de la location</h2>
            </Link>
        </article>
    );
};

export default Card;
