import React from 'react';
import "./ourFleet.component.css"
import {fleetData} from "../../config/fleet.data";
import PrimaryButtonComponent from "../Buttons/primaryButton/primary.button.component";

const OurFleetComponent = () => {
    return (
        <div className="car_card_wrapper justify-content-center row g-0">
        {fleetData.map((item) => (
            <div className="car-card col-12 col-md-4" key={item.id}>
                <img src={item.img} className="img-fluid" alt=""/>
                <p className="car_name">{item.car_name}</p>
                <p className="gear_box">Коробка: {item.gearbox}</p>
                <p className="year">{item.year}</p>
                <PrimaryButtonComponent text={"Записаться на урок"}/>
            </div>
        ))}
    </div>);
};

export default OurFleetComponent;