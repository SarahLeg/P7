import React from 'react';
import '../styles/card.scss';

const Card = ({ title, cover }) => {
    return (
      <div className="card">
        <img src={cover} alt={title} className="card__image" />
        <h2>{title}</h2>
      </div>
    );
};
  
export default Card;