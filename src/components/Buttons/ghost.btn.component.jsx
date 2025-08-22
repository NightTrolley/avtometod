import React from 'react';
import "./ghost.btn.css"

const GhostBtnComponent = (props) => {
    return (
        <button type="button" className="ghost-btn col-12">
            {props.text}
        </button>
    );
};

export default GhostBtnComponent;