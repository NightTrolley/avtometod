import React from 'react';
import "./about.page.styles.css"

const AdvantageItem = (props) => {
    return (
        <div className="advantage-item col-12 row">
            <div className="advantage-number col-1">
                {props.number}
            </div>
            <div className="advantage-text col-11">
                {props.text}
            </div>
        </div>
    );
};

export default AdvantageItem;