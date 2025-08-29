import React from 'react';
import "./pay.card.css"
import line from "../../../icons/Line.svg";

const PayCardComponent = () => {
    return (
        <div className="pay-card-block col-12">
            <div className="pay-card-item-wrapper col-12 row g-0">
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
                <div className="pay-card-item row g-0 col-4">
                    <div className="column col-10">
                        <div className="pay-card-text-h1 sm-fs-1">
                            2 месяца
                        </div>
                        <div className="pay-card-text-h3 sm-fs-0">
                            онлайн-обучение
                        </div>
                    </div>
                    <div className="pay-card-item-devider">
                        <img src={line} alt=""/>
                    </div>
                </div>
                <div className="pay-card-item row g-0 col-4">
                    <div className="column col-12">
                        <div className="pay-card-text-h1 sm-fs-1">
                            оплата
                        </div>
                        <div className="pay-card-text-h3 sm-fs-0">
                            рассрочка платежа
                        </div>
                    </div>
                    <div className="pay-card-item-devider">
                        <img src={line} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PayCardComponent;