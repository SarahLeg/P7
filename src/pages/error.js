import React from 'react';
import '../styles/error.scss';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error">
        <div className=''>
            <p className='error__404'>404</p>
            <p className='error__text'>Oups! La page que vous demandez n'existe pas</p>
        </div>
        <Link to="/home" className='error__link'>Retourner sur la page d'acceuil</Link>
    </div>
  );
};

export default Error;