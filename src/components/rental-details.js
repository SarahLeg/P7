import React from 'react';
import '../styles/rental.scss';
import data from '../assets/data/logements.json';
import { useParams } from 'react-router-dom';

const Rentaldetails = () => {

  const { id } = useParams();
  const rentaldetails = data.find(item => item.id === id)
  const { title, location, tags, host, rating } = rentaldetails;

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
          {rating}
        </div>
      </div>
    </div>
  );
};
  
export default Rentaldetails;