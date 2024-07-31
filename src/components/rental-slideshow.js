import React, { useState } from 'react';
import '../styles/rental.scss';
import data from '../assets/data/logements.json';
import { useParams } from 'react-router-dom';

const Rentalslideshow = () => {
  const { id } = useParams();
  const rentalslideshow = data.find(item => item.id === id);
  const { pictures } = rentalslideshow;

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === pictures.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? pictures.length - 1 : current - 1);
  };


  return (
      <div className="slideshow">
        <button onClick={prevSlide} className='arrow-left'>❮</button>
        <button onClick={nextSlide}className='arrow-right'>❯</button>
        {pictures.map((picture, index) => (
          <div>
            {index === current && (
              <img key={index} src={picture} alt={`Slide ${index}`} className="image" />
            )}
          </div>
        ))}
      </div>
  );
};

export default Rentalslideshow;