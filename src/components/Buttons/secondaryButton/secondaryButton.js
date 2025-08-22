import React from 'react';
import "./secondaryButton.css"

const SecondaryButton = (props) => {
    return (
        <button className="secondary-button col-12" type="button">
            {props.text}
        </button>
    );
};

export default SecondaryButton;