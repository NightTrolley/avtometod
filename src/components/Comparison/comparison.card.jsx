import React from 'react';
import "./comparison.style.css"
import {ComparisonData} from "../../config/comparison.data"

const ComparisonCard = () => {
    return (
        <div className="comparison-card row g-0">
            <div className="title-wrapper flex-column col-5">
                {ComparisonData.map(comparison => (
                    <div className="title col-12">
                        {comparison.title}
                    </div>
                ))}
            </div>

            <div className="price-card-wrapper row g-0 col-7">
                <div className="other-school-price flex-column d-flex col-5">
                    {ComparisonData.map(comparison => (
                        <span>
                            {comparison.otherSchoolPrice}
                        </span>
                    ))}
                </div>
                <div className="our-school-price col-5 flex-column d-flex">
                    {ComparisonData.map(comparison => (
                        <span>
                            {comparison.ourSchoolPrice}
                        </span>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ComparisonCard;