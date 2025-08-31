import React from 'react';
import "./secondaryButton.css"

const SecondaryButton = ({text, isSubmitting, onClick, type = 'button'}) => {
    console.log(isSubmitting)
    return (
        <button
            className="secondary-button col-12"
            type={type}
            onClick={onClick}
            disabled={isSubmitting}
        >
            {isSubmitting ? "Отправка..." : text}
        </button>
    );
};

export default SecondaryButton;