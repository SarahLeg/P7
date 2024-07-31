import React from 'react';
import Rentalslideshow from '../components/rental-slideshow';
import Rentaldetails from '../components/rental-details';
import Collapse from '../components/collapse';
import { useParams } from 'react-router-dom';
import data from '../assets/data/logements.json';
import '../styles/rental.scss';

const Rental = () => {

  const { id } = useParams();
  const rental = data.find(item => item.id === id)
  const { description, equipments, } = rental;

  return (
    <div className="rental">
    <Rentalslideshow/>
    <Rentaldetails/>
    <Collapse title="Description" content={description} />
    <Collapse title="Equipements" content={equipments.join(', ')} />
    </div>
  );
};

export default Rental;