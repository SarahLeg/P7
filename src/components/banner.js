import React from "react";
import '../styles/banner.scss';
import bannerHome from '../assets/images/cliff.png';

const Banner = () => {
    return (
      <div className="banner">
        <img src={bannerHome} alt="Cliffs"/>
        <p>Chez vous, partout et ailleurs</p>
      </div>
    );
  };
  
  export default Banner;