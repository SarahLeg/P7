// import React from 'react';
// import '../styles/home.scss';
// import data from '../assets/data/logements.json';
// import Collapse from '../components/collapse';
// import { useParams } from 'react-router-dom';

// const Rental = () => {
//   const { id } = useParams();
//   const listing = data.find(item => item.id === id);

//   return (
//     <div className="rental-detail">
//       <img src={listing.cover} alt={listing.title} className="rental-detail__image" />
//       <h1 className="rental-detail__title">{listing.title}</h1>
//       <p className="rental-detail__location">{listing.location}</p>
//       <p className="rental-detail__rating">Rating: {listing.rating}</p>
//       <div className="rental-detail__host">
//         <img src={listing.host.picture} alt={listing.host.name} className="rental-detail__host-image" />
//         <p>{listing.host.name}</p>
//       </div>
//       <Collapse title="Description">
//         <p>{listing.description}</p>
//       </Collapse>
//       <Collapse title="Équipements">
//         <ul>
//           {listing.equipments.map((equipment, index) => (
//             <li key={index}>{equipment}</li>
//           ))}
//         </ul>
//       </Collapse>
//       <Collapse title="Tags">
//         <ul>
//           {listing.tags.map((tag, index) => (
//             <li key={index}>{tag}</li>
//           ))}
//         </ul>
//       </Collapse>
//     </div>
//   );
// };

// export default Rental;