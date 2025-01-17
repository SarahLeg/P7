import React from 'react';
import '../styles/about.scss';
import Banner from '../components/banner';
import bannerAbout from '../assets/images/mountains.png';
import Collapse from '../components/collapse';

const About = () => {
  return (
    <div className="about">
      <Banner className="about-banner" imageUrl={bannerAbout}/>
      <div>
                <Collapse title="Fiabilité">
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, 
                       et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                </Collapse>
                <Collapse title="Respect">
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoires ou de perturbation du voisinage 
                       entraînera une exclusion de notre plateforme.</p>
                </Collapse>
                <Collapse title="Service">
                    <p>à définir, dans la maquette c'est identique à respect</p>
                </Collapse>
                <Collapse title="Sécurité">
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                    correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                    locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons 
                    également des ateliers sur la sécurité domestique pour tous nos hôtes.</p>
                </Collapse>
            </div>
    </div>
  );
};

export default About;