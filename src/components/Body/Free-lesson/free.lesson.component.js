import React from 'react';
import "./free.lesson.css";
import stars from "../../../icons/stars.svg";
import mdStars from "../../../icons/md-stars.svg";
import AdvantageItemComponent from "./advantage.item.component";
import PrimaryButtonComponent from "../../Buttons/primaryButton/primary.button.component";

const FreeLessonComponent = () => {

    return (
        <section className="free-lesson-promo col-12">
            <h3 className="free-lesson-promo__title sm-fs-4">
                Бесплатный первый урок теории в автошколе АвтоМетод
            </h3>
            <div className="advantages-list flex-column d-flex col-8">
                <AdvantageItemComponent advantageText={"Начни свой путь к получению водительского удостоверения\n" +
                    "с бесплатного первого урока теории в нашей автошколе!"}/>
                <AdvantageItemComponent advantageText={"Начни свой путь к получению водительского удостоверения\n" +
                    "с бесплатного первого урока теории в нашей автошколе!"}/>
                <AdvantageItemComponent advantageText={"Начни свой путь к получению водительского удостоверения\n" +
                    "с бесплатного первого урока теории в нашей автошколе!"}/>
            </div>
            <div className="stars d-none d-md-block">
                <img src={stars} alt=""/>
            </div>
            <div className="stars d-block d-md-none">
                <img src={mdStars} alt=""/>
            </div>
            <div className="free-lesson-promo-form mx-auto col-12 col-md-4">
                <form action="/" className="d-flex flex-column">
                    <input type="text" className="name" placeholder="Имя"/>
                    <input type="tel" className="number" placeholder="+7 (999) 999-99-99"/>
                    <PrimaryButtonComponent text="Бесплатная консультация"/>
                </form>
            </div>
        </section>
    );
};

export default FreeLessonComponent;