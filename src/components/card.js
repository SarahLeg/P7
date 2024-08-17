import React from 'react';
import '../styles/card.scss';
import { Link } from 'react-router-dom';

const Card = ({ title, cover, link}) => {
    return (
      <div className="card">
        <Link to={link}>
        <img src={cover} alt={title}/>
        <h2>{title}</h2>
        </Link>
      </div>
    );
};
  
export default Card;