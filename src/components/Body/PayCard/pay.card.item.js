import React from 'react';
import "./pay.card.css"
import line from "../../../icons/Line.svg"

const PayCardItem = () => {
    return (
        <div className="pay-card-item row g-0 col-4">
            <div className="column col-10">
                <div className="pay-card-text-h1 sm-fs-1">
                    без %
                </div>
                <div className="pay-card-text-h3 sm-fs-0">
                    никаких переплат
                </div>
            </div>
            <div className="pay-card-item-devider">
                <img src={line} alt=""/>
            </div>
        </div>
    );
};

export default PayCardItem;