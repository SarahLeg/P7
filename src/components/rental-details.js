import React from 'react';
import '../styles/rental.scss';
import data from '../assets/data/logements.json';
import { useParams } from 'react-router-dom';

const Rentaldetails = () => {

  const { id } = useParams();
  const rentaldetails = data.find(item => item.id === id)
  const { title, location, tags, host, rating } = rentaldetails;

  const generateStars = (rating) => {
     //boucle for qui s'éxécute jusqu'à ce que i=5 (donc 5 fois)
     //si au début de la boucle, i (qui est égal à 1) est inférieur à rating, star-full est générée -> return stars, i++ ajoute 1 à i
     //pareil à chaque boucle jusqu'à ce que i>rating et là star-empty est générée (return stars) jusqu'à la boucle 5 (i=5)
    const stars = [];
    for (let i = 1; i <= 5; i++)
      {
      if (i <= rating)
      {
        stars.push(<span key={i} className="star-full">★</span>);
      } 
      else
      {
        stars.push(<span key={i} className="star-empty">☆</span>);
      }
      }
    return stars;
  };

  return (
    <div className='details'>
      <div>
        <h1>{title}</h1>
        <p className='location'>{location}</p>
        <div className='tags'>
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
      <div>
        <div className="host">
          <img src={host.picture} alt={host.name} />
          <p>{host.name}</p>
        </div>
        <div className="rating">
          {generateStars(rating)}
        </div>
      </div>
    </div>
  );
};
  
export default Rentaldetails;