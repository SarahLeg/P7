import React, { useState } from "react";
import '../styles/collapse.scss';

const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleCollapse}>
                {title}
            </button>
            {isOpen && <div className="collapse__content">{children}</div>}
        </div>
    );
};

export default Collapse;