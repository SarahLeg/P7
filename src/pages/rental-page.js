import React from 'react';
import '../styles/rental-page.scss';
import { Link } from 'react-router-dom';

const Rental = () => {
  return (
    <div className="rental">
        <Link to="/home" className='error__link'>Retourner sur la page d'acceuil</Link>
    </div>
  );
};

export default Rental;