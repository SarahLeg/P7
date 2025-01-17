import React, { useState } from "react";
import '../styles/collapse.scss';

const Collapse = ({ title, children }) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <button onClick={toggleCollapse}>
                {title}
                <i className={`fa-solid fa-angle-up collapse__icon ${isOpen ? 'open' : 'closed'}`}></i>
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