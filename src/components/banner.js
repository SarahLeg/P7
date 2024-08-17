import React from "react";
import '../styles/banner.scss';

const Banner = ({ imageUrl, text=null }) => {

  return (
      <div className="banner">
          <img src={imageUrl} alt="Banner"/>
          {
            text && <h1>{text}</h1>
          }
      </div>
  );
};
  
export default Banner;