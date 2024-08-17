import React from 'react';
import '../styles/rental.scss';

const Rentaldetails = ({rentaldetails}) => {

  const { title, location, tags, host, rating } = rentaldetails;

  const generateStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++)
      {
      if (i <= rating)
      {
        stars.push(<span key={i} className="star-full"><i className="fa-solid fa-star"></i></span>);
      } 
      else
      {
        stars.push(<span key={i} className="star-empty"><i className="fa-solid fa-star"></i></span>);
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
      <div className='host-rating'>
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