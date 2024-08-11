import React from 'react';
import '../styles/card.scss';
import { Link } from 'react-router-dom';
//Link (composant react) n'étant pas link (props de card)

const Card = ({ title, cover, link}) => {
//le composant accepte 3 props
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