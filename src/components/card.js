import React from 'react';
import '../styles/card.scss';
import { Link } from 'react-router-dom';
import data from '../assets/data/logements.json';

const Card = ({ id, title, cover, link }) => {
    return (
      <div className="card">
        <Link to="{`/rental/${id}`}">
        <img src={cover} alt={title} className="card__image" />
        <h2>{title}</h2>
        </Link>
      </div>
    );
};
  
export default Card;