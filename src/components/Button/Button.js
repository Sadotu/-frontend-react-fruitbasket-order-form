import React from 'react';
import "./Button.css"

const Button = ({ children, handleClick, buttonType = "button", className }) => {

    return (
        <button
            className={className}
            type={ buttonType }
            onClick={handleClick}
        >
            { children }
        </button>
    );
};

export default Button;