import React from 'react';
import Rentalslideshow from '../components/rental-slideshow';
import Rentaldetails from '../components/rental-details';
import Collapse from '../components/collapse';
import { useParams, Navigate } from 'react-router-dom';
import data from '../assets/data/logements.json';
import '../styles/rental.scss';


const Rental = () => {
  const { id } = useParams();
  const rental = data.find(item => item.id === id)
  
  if (!rental) {
    return <Navigate to="*"/>;
  }

  const { description, equipments } = rental;

  return (
    <div className="rental">
    <Rentalslideshow/>
    <Rentaldetails/>
    <div className='collapses'>
      <Collapse title="Description">
        {description} 
      </Collapse>
      <Collapse title="Equipements">
        <ul>
          {equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </Collapse>
    </div>
    </div>
  );
};

export default Rental;