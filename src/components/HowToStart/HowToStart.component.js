import React from 'react';
import "./howtostart.style.css"
import SecondaryButton from "../Buttons/secondaryButton/secondaryButton";

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
                <form action="" className="d-flex flex-column how-to-start-form">
                    <input type="text" name="name" placeholder="Имя" required={true} />
                    <input type="tel" name="phone" placeholder="+7 (999) 999-99-99" required={true}/>
                    <SecondaryButton text={"Бесплатная консультация"}/>
                </form>
            </div>
        </div>
    );
};

export default HowToStartComponent;