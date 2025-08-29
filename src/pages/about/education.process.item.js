import React from 'react';

const EducationProcessItem = (props) => {
    return (
        <div className="education-process-item g-0 row">
            <div className="item-wrapper col-12 col-md-12 g-0 row">
                <div className="education-process-item-number col-1">
                    <p>{props.number}</p>
                </div>
                <div className="education-process-item-text col">
                    {props.text}
                </div>
            </div>
        </div>
    );
};

export default EducationProcessItem;