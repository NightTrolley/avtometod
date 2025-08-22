import React from 'react';
import TagComponent from "../Tag/tag.component";
import "./body.style.css"
import "../Buttons/button.main.style.css"
import car from "../../icons/car.svg"
import AdvantageComponent from "../Advantages/advantage.component";
import PrimaryButtonComponent from "../Buttons/primaryButton/primary.button.component";
import GhostBtnComponent from "../Buttons/ghost.btn.component";
import PayCardComponent from "./PayCard/pay.card.component";
import AchivmentComponent from "./Achiwment/achivment.component";
import FreeLessonComponent from "./Free-lesson/free.lesson.component";
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

const BodyComponent = () => {
    return (
        <div className="container-md g-md-0 container-fluid">
            <TagComponent tagText={'#Автошкола "АвтоМетод"'}></TagComponent>
            <div className="advantage-block-wrapper mt-4 flex-column flex-md-row d-flex">
                <div className="flex-column col-12 col-md-6">
                    <h1 className="col sm-fs-5 mb-4">
                        Автошкола в Москве
                    </h1>
                    <h3 className="col sm-fs-3">
                        Учитесь водить рядом с домом, работой
                        или учёбой
                    </h3>
                    <div className="advantage-list">
                        <AdvantageComponent advantageText={"Онлайн-теория на современных платформах"}/>
                        <AdvantageComponent advantageText={"Вождение в любой точке города"}/>
                        <AdvantageComponent advantageText={"110 автодромов по всей Москве"}/>
                    </div>
                    <div className="btn-block-wrapper g-0 row col-12">
                        <div className="button-wrapper col-6">
                            <PrimaryButtonComponent text={"Начать обучение"}/>
                        </div>
                        <div className="button-wrapper g-0 col-6">
                            <GhostBtnComponent text={"Договор онлайн"}/>
                        </div>
                    </div>
                    <PayCardComponent/>
                </div>
                <div className="car-img-wrapper col-12 col-md-6">
                    <img src={car} alt="" className="img-fluid"/>
                </div>
            </div>
            <section className="achievement-section spacer">
                <AchivmentComponent/>
            </section>
            <section className="education-process spacer">
                <FreeLessonComponent/>
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
                        <DrivingCourseCard key={course.id} course={course} />
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
                <OurFleetComponent/>
                <div className="button-wrapper mx-auto mt-5 col-12 col-md-4">
                    <SecondaryButton text={"Посмотреть еще автомобили"}/>
                </div>
            </section>
            <section className="reviews d-none spacer">
                <div className="reviews-wrapper row g-0">
                    {reviewData.slice(0, 3).map(review => (
                        <ReviewCardComponent key={review.id} reviewer={review.reviewer} date={review.date} video={review.video}/>
                    ))}
                </div>
                <div className="button-wrapper mx-auto mt-5 col-12 col-md-4">
                    <SecondaryButton text={"Посмотреть все отзывы"}/>
                </div>
            </section>
            <section className="news spacer">
                <div className="news-cards-wrapper row g-0">
                    {newsData.slice(0, 3).map(news => (
                        <NewsCardComponent key={news.id} title={news.title} text={news.text} date={news.date} />
                    ))}
                </div>
                <div className="button-wrapper mx-auto mt-5 col-12 col-md-4">
                    <SecondaryButton text={"Посмотреть все статьи"}/>
                </div>
            </section>
            <section className="faq spacer">
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
        </div>
    );
};

export default BodyComponent;