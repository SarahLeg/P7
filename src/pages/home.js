import React from 'react';
import '../styles/home.scss';
import data from '../assets/data/logements.json';
import Banner from '../components/banner';
import Card from '../components/card';

const Home = () => {
  return (
    <div className="home">
      <Banner/>
        <div className='cards-container'>
          {data.map(listing => (
            <Card
              key={listing.id} //clé unique pour chaque élément (évite les warnings)
              title={listing.title}
              cover={listing.cover}
            />
          ))}
        </div>
    </div>
  );
};

export default Home;