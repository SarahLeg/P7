import React from "react";
import '../styles/banner.scss';

const Banner = ({ imageUrl, text }) => {
  return (
      <div className="banner">
          <img src={imageUrl} alt="Banner"/>
          <p>{text}</p>
      </div>
  );
};
  
export default Banner;