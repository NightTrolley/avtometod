import React from 'react';
import "./pay.card.css"
import PayCardItem from "./pay.card.item";

const PayCardComponent = () => {
    return (
        <div className="pay-card-block col-12">
            <div className="pay-card-item-wrapper col-12 row g-0">
                <PayCardItem/>
                <PayCardItem/>
                <PayCardItem/>
            </div>
        </div>
    );
};

export default PayCardComponent;