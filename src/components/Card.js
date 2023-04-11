import React from 'react';
import { Link } from 'react-router-dom';

const Card = props => {
    return (
        <article className="card">
            <Link className="card__link" to={`house/${props.data.id}`}>
                <img className="card__image" src={props.data.cover} alt={props.data.title} />
                <h2 className="card__title">{props.data.title}</h2>
                <div className="card__shadow"></div>
            </Link>
        </article>
    );
};

export default Card;
