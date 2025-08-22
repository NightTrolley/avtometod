import React from 'react';
import check from "../../icons/check.svg"

const AdvantageComponent = (props) => {
    return (
        <div className="advantage-item sm-fs-2 sm-fst-italic row">
            <div className="check-img-wrapper">
                <img src={check} alt="Галочка" className="check img-fluid"/>
            </div>
            <p className="advantage-text">{props.advantageText}</p>
        </div>
    );
};

export default AdvantageComponent;