import React from 'react';
import "./howtostart.style.css"
import SecondaryButton from "../Buttons/secondaryButton/secondaryButton";
import MainFormComponent from "../Forms/mainForm.component";

const HowToStartComponent = () => {
    return (
        <div className="how-to-start-container row g-0">
            <p className="title">
                Как начать?
            </p>
            <div className="start-steps d-flex flex-column col-12 col-md-7">

                <p className="steps">
                    1. Оставьте заявку на сайте или по телефону.<br></br>
                    2. Заключите договор и оплатите курс.<br></br>
                    3. Приступайте к вождению – инструктор свяжется с вами
                    в течение 1–2 дней.
                </p>
            </div>
            <div className="form-wrapper col-12 col-md-5">
                <MainFormComponent button_text={"Бесплатная консультация"}/>
            </div>
        </div>
    );
};

export default HowToStartComponent;