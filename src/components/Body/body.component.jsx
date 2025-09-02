import React, {useState} from 'react';
import TagComponent from "../Tag/tag.component";
import "./body.style.css"
import "../Buttons/button.main.style.css"
import car from "../../icons/car.svg"
import AdvantageComponent from "../Advantages/advantage.component";
import PrimaryButtonComponent from "../Buttons/primaryButton/primary.button.component";
import GhostBtnComponent from "../Buttons/ghost.btn.component";
import PayCardComponent from "./PayCard/pay.card.component";
import AchivmentComponent from "./Achiwment/achivment.component";
import DrivingCourseCard from "../DrivingCourseCard/drivingCourseCard";
import {drivingCourses} from "../../config/drivingCoursesData";
import EducationProcessComponent from "../EducationProcess/education.process.component";
import ComparisonCard from "../Comparison/comparison.card";
import InstructorCardComponent from "../Instructors/instructor.card.component";
import OurFleetComponent from "../OurFleet/ourFleet.component";
import SecondaryButton from "../Buttons/secondaryButton/secondaryButton";
import ReviewCardComponent from "../Reviews/review.card.component";
import {reviewData} from "../../config/review.data";
import NewsCardComponent from "../News/news.card.component";
import {newsData} from "../../config/news.data";
import FaqItem from "../Faq/faq.item";
import {faqData} from "../../config/faq.data";
import {Accordion} from "react-bootstrap";
import FooterComponent from "../Footer/footer.component";
import FormModalComponent from "../Modals/form.modal.component";
import {useForm} from "../../hooks/useForm";
import QuizComponent from "../Quiz/quiz.component";
import {useModalContext} from "../../Context/modalContext";
import MainFormComponent from "../Forms/mainForm.component";

const BodyComponent = () => {

    const {isModalOpen, handleOpenModal, handleCloseModal} = useModalContext();

    return (
        <div className="container-md g-md-0 container-fluid">
            <TagComponent tagText={'#Автошкола "АвтоМетод"'}></TagComponent>
            <div className="advantage-block-wrapper mt-4 flex-column flex-md-row d-flex">
                <div className="flex-column col-12 col-md-6">
                    <h1 className="col sm-fs-5 mb-4">
                        Получите права в Москве всего за 26 900 ₽
                    </h1>
                    <h3 className="col sm-fs-3">
                        Учитесь водить рядом с домом, работой
                        или учёбой
                    </h3>
                    <div className="advantage-list col-10">
                        <AdvantageComponent advantageText={"Онлайн-теория на современных платформах"}/>
                        <AdvantageComponent advantageText={"Вождение в любой точке города"}/>
                        <AdvantageComponent advantageText={"110 автодромов по всей Москве"}/>
                    </div>
                    <div className="btn-block-wrapper d-none d-md-flex g-0 row col-12">
                        <div className="button-wrapper col-6">
                            <PrimaryButtonComponent text={"Начать обучение"} onClick={handleOpenModal}/>
                        </div>
                        <div className="button-wrapper g-0 col-6">
                            <GhostBtnComponent text={"Договор онлайн"}/>
                        </div>
                    </div>
                    <div className="pay-card-wrapper d-none d-md-block">
                        <PayCardComponent/>
                    </div>
                </div>
                <div className="car-img-wrapper col-12 col-md-6">
                    <img src={car} alt="" className="img-fluid"/>
                </div>
                <div className="pay-card-wrapper d-block d-md-none">
                    <PayCardComponent/>
                </div>
                <div className="btn-block-wrapper d-flex d-md-none g-0 row col-12">
                    <div className="button-wrapper col-6">
                        <PrimaryButtonComponent text={"Начать обучение"} onClick={handleOpenModal}/>
                    </div>
                    <div className="button-wrapper g-0 col-6">
                        <GhostBtnComponent text={"Договор онлайн"}/>
                    </div>
                </div>
            </div>
            <section className="achievement-section spacer">
                <AchivmentComponent/>
            </section>
            <section className="quiz-block spacer">
                <h2 className="quiz-title">
                    Пройдите опрос и получите
                    2 подарка от автошколы!
                </h2>
                <QuizComponent/>
            </section>
            <section className="driving-courses_section spacer">
                <div className="title container text-center">
                    <div className="h3">
                    Обучение вождению с комфортом и выгодой
                        – ознакомьтесь с нашими ценами!
                    </div>
                    <div className="h6">
                        Вы можете выбрать курс в зависимости от ваших потребностей и уровня подготовки.
                    </div>
                </div>
                <div className="container justify-content-between row g-0 gap-5">
                    {drivingCourses.map(course => (
                        <DrivingCourseCard key={course.id} course={course} handleOpenModal={handleOpenModal} />
                    ))}
                </div>
            </section>
            <section className="education-process-wrapper d-none d-md-flex spacer">
                    <div className="title">

                    </div>
                    <EducationProcessComponent/>
            </section>
            <section className="comparison-section d-none d-md-block spacer">
                <div className="h1">
                    Никаких переплат в ходе обучения
                </div>
                <div className="h6">
                    Виды скрытых платежей
                </div>
                <div className="comparison-wrapper">
                    <ComparisonCard/>
                </div>
            </section>
            <section className="instructors-section d-none spacer">
                <div className="title">Найдите своего инструктора</div>
                <div className="h6">Мы поможем подобрать вам инструктора, либо Вы можете выбрать сами.</div>
                <div className="instructors-list">
                    <InstructorCardComponent/>
                </div>
            </section>
            <section className="our_fleet-section text-center spacer">
                <div className="our-fleet-form-wrapper spacer-80">
                    <div className="container">
                        <p className="title">
                            Наш автопарк
                        </p>
                        <p className="desc">Начните учиться вождению на любом понравившемся автомобиле.</p>
                        <div className="form row">
                            <div className="slogan col-md-7 col-12">
                                <p className="col-md-9 col-10">
                                    Учитесь на механике
                                    или автомате
                                    — стоимость одинаковая
                                </p>
                                <p className="slogan-desc col-9 col-md-12">
                                    Все автомобили соответствуют требованиям ГИБДД.
                                </p>
                            </div>
                            <div className="inputs col-md-5 col-12">
                            <MainFormComponent button_text={"Бесплатная консультация"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <OurFleetComponent handleOpenModal={handleOpenModal}/>
                <div className="button-wrapper d-none mx-auto mt-5 col-12 col-md-4">
                    <SecondaryButton text={"Посмотреть еще автомобили"}/>
                </div>
            </section>
            <section className="reviews d-none spacer">
                <div className="reviews-wrapper row g-0">
                    {reviewData.slice(0, 3).map(review => (
                        <ReviewCardComponent key={review.id} reviewer={review.reviewer} date={review.date}
                                             video={review.video}/>
                    ))}
                </div>
                <div className="button-wrapper mx-auto mt-5 col-12 col-md-4">
                    <SecondaryButton text={"Посмотреть все отзывы"}/>
                </div>
            </section>
            <section className="news d-none spacer">
                <div className="news-cards-wrapper row g-0">
                    {newsData.slice(0, 3).map(news => (
                        <NewsCardComponent key={news.id} title={news.title} text={news.text} date={news.date}/>
                    ))}
                </div>
                <div className="button-wrapper mx-auto mt-5 col-12 col-md-4">
                    <SecondaryButton text={"Посмотреть все статьи"}/>
                </div>
            </section>
            <section className="faq spacer d-none">
                <img src="/icons/znak-u.png" alt="" className="img-fluid sign top"/>
                <img src="/icons/znak-u.png" alt="" className="img-fluid sign center"/>
                <img src="/icons/znak-u.png" alt="" className="img-fluid sign bottom"/>
                <div className="faq-wrapper">
                    <p className="faq-title fw-bolder fs-4 fs-md-1">
                        Часто задаваемые вопросы (FAQ)
                    </p>
                    <Accordion flush>
                        {faqData.map(faq => (
                            <FaqItem id={faq.id} question={faq.question} answer={faq.answer}/>
                        ))}
                    </Accordion>
                </div>
            </section>
            <FooterComponent/>
            <FormModalComponent
                show={isModalOpen}
                onHide={handleCloseModal}
            />
        </div>
    );
};

export default BodyComponent;