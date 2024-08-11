import React from "react";
//importé pour permettre la création de composants react
import '../styles/banner.scss';

const Banner = ({ imageUrl, text=null }) => {
//2 props : imageUrl et text(si text pas défini=null)

  return (
      <div className="banner">
          <img src={imageUrl} alt="Banner"/>
          {
            text && <h1>{text}</h1>
//la condition && vérifie si text a une valeur (ce qui n'est pas le cas dans about)
          }
      </div>
  );
};
  
export default Banner;