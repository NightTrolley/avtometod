import React from 'react';

const Card = (props) => {
    return (
        <div className="why-choose-card col-10 col-md-3">
            <div className="card-title">
                {props.title}
            </div>
            <div className="card-text">
                {props.text}
            </div>
        </div>
    );
};

export default Card;