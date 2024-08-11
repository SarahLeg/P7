import React, { useState } from "react";
//useState est un hook qui permet de gérer l'état local du composant
import '../styles/collapse.scss';

const Collapse = ({ title, children }) => {
    
    const [isOpen, setIsOpen] = useState(false);
    //useState qui sera tjrs écrit [variable, setVariable]
    //false par défaut = les collapses seront fermés par défaut

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };
    //fonction qui inverse la valeur de isOpen à chaque clic

    return (
        <div className="collapse">
            <button onClick={toggleCollapse}>
                {title}
                <i className={`fa-solid fa-angle-up collapse__icon ${isOpen ? 'open' : 'closed'}`}></i>    
                {/*Icône qui change en fonction de l'état isOpen->Si isOpen true open sinon closed. Les classes .open et .closed sont rajoutés/enlevées*/}   
                {/*et dans le scss, elles me servent à appliquer des transtions*/}   
            </button>
            {isOpen && 
                <div className={`collapse__content ${isOpen ? 'open' : 'closed'}`}>
                {children}
                </div>
            }
        </div>
    );
};

export default Collapse;