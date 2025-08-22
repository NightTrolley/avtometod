import React from 'react';
import promoStar from "../../../icons/promo-star.svg"

const AdvantageItemComponent = (props) => {
    return (
        <div className="advantages-list-item col-12 row g-0">
            <div className="advantages-list-item-img">
                <img src={promoStar} alt="" className="img-fluid"/>
            </div>
            <div className="advantages-list-item-text sm-fs-1 col">
                {props.advantageText}
            </div>
        </div>
    );
};

export default AdvantageItemComponent;