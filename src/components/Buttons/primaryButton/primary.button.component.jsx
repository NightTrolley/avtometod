import React from 'react';
import "./primary.button.css"

const PrimaryButtonComponent = (props) => {
    return (
        <button type={"button"} className={"btn btn-primary col-12 sm-fs-1"} onClick={props.onClick}>
            {props.text}
        </button>
    );
};

export default PrimaryButtonComponent;