import React from 'react';

const EducationProcessItem = (props) => {
    return (
        <div className="education-process-item row">
            <div className="item-wrapper row">
                <div className="education-process-item-number">
                    <p>{props.number}</p>
                </div>
                <div className="education-process-item-text">
                    {props.text}
                </div>
            </div>

        </div>
    );
};

export default EducationProcessItem;