import React, { useState } from 'react';
import '../styles/rental.scss';

const Rentalslideshow = ({pictures}) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === pictures.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? pictures.length - 1 : current - 1);
  };

  // const displaySlideshowBtns = () => {
  //   if (pictures.length > 1) {
  //     return (
  //       <>
  //         <button onClick={prevSlide} className='arrow-left'><i className="fa-solid fa-chevron-left" /></button>
  //         <button onClick={nextSlide} className='arrow-right'><i className="fa-solid fa-chevron-right" /></button>
  //         <span>{current + 1}/{pictures.length}</span>
  //       </>
  //     );
  //   }
  //   return null;
  // };

  return (
      <div className="slideshow">
        {/* {displaySlideshowBtns()} */}
        {pictures.length > 1 && (
          <>
          <button onClick={prevSlide} className='arrow-left'><i className="fa-solid fa-chevron-left"/></button>
          <button onClick={nextSlide}className='arrow-right'><i className="fa-solid fa-chevron-right"/></button>
          <span>{current + 1}/{pictures.length}</span>
          </>
        )}
        <img src={pictures[current]} alt={`Slide ${current}`}/>
      </div>
  );
};

export default Rentalslideshow;