import React from 'react';
import learning from '../../../icons/2013.svg';
import ment from "../../../icons/ment.svg";
import conus from "../../../icons/conus.svg";
import driver from "../../../icons/driver.svg";
import "./achivment.css"

const AchivmentComponent = () => {
    return (<section className="achievement-section">
            <div className="achievements-grid d-flex flex-column flex-md-row g-0 col-12">
                <div className="achievement-card col-12 col-md-3">
                    <div
                        className="achievement-card-content d-flex flex-column align-items-center text-center justify-content-center">
                        <div className="achievement-card-img-wrapper">
                            <img src={learning} alt="" className="img-fluid"/>
                        </div>
                        <div className="achievement-card-text-wrapper">
                            Обучаем<br/> с <span className="orange-accent">2013</span> года
                        </div>
                    </div>
                </div>
                <div className="achievement-card col-12 col-md-3">
                    <div
                        className="achievement-card-content d-flex flex-column align-items-center text-center justify-content-center">
                        <div className="achievement-card-img-wrapper">
                            <img src={ment} alt="" className="img-fluid"/>
                        </div>
                        <div className="achievement-card-text-wrapper">
                            Более <span className="blue-accent">35000</span><br/> водителей
                        </div>
                    </div>
                </div>
                <div className="achievement-card col-12 col-md-3">
                    <div
                        className="achievement-card-content d-flex flex-column align-items-center text-center justify-content-center">
                        <div className="achievement-card-img-wrapper">
                            <img src={conus} alt="" className="img-fluid"/>
                        </div>
                        <div className="achievement-card-text-wrapper">
                            Более <span className="orange-accent">30</span><br/> автодромов
                        </div>
                    </div>
                </div>
                <div className="achievement-card col-12 col-md-3">
                    <div
                        className="achievement-card-content d-flex flex-column align-items-center text-center justify-content-center">
                        <div className="achievement-card-img-wrapper">
                            <img src={driver} alt="" className="img-fluid"/>
                        </div>
                        <div className="achievement-card-text-wrapper">
                            <span className="blue-accent">70+</span> автомобилей <br/> на выбор
                        </div>
                    </div>
                </div>
            </div>
        </section>);
};

export default AchivmentComponent;