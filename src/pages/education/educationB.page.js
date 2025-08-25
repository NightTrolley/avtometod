import React from 'react';
import "./education.b.page.css"
import DrivingCourseCard from "../../components/DrivingCourseCard/drivingCourseCard";
import {drivingCourses} from "../../config/drivingCoursesData";
import {aboutAdvantages} from "../../config/aboutAdvantages";
import AdvantageItem from "../about/advantage-item";
import HowToStartComponent from "../../components/HowToStart/HowToStart.component";
import FooterComponent from "../../components/Footer/footer.component";

const EducationBPage = () => {
    return (
        <div>
            <div className="education-b-page container-fluid container-md">
                <h1 className="page-title">Категория Б – обучение на автомобиль</h1>
                <h2 className="practice-with-instructor col-12 col-md-9">Практические занятия с опытным
                    инструктором</h2>
                <p className="description col-12">
                    Автошкола "АвтоМетод" с более чем 10-летним опытом предлагает профессиональное обучение вождению
                    для будущих водителей.
                </p>
                <div className="program-features col-12">
                    <p className="feature-block-title">
                        Наша программа включает:
                    </p>
                    <div className="feature-list row justify-content-between">
                        <div className="feature-item col-8 col-md-3 text-center">
                            <img src="/icons/autodrom.svg" alt="" className="feature-icon img-fluid"/>
                            <p className="feature-item-text">
                                Отработку навыков<br></br>
                                <span>на автодроме</span> (площадке).
                            </p>
                        </div>
                        <div className="feature-item col-8 col-md-4 text-center">
                            <img src="/icons/city.svg" alt="" className="feature-icon img-fluid"/>
                            <p className="feature-item-text">
                                Вождение <span>в городских условиях </span>
                                с постепенным усложнением
                                маршрутов.
                            </p>
                        </div>
                        <div className="feature-item col-8 col-md-3 text-center">
                            <img src="/icons/individual.svg" alt="" className="feature-icon img-fluid"/>
                            <p className="feature-item-text">
                                <span>Индивидуальный график</span>
                                <br></br>занятий (утро/день/вечер,
                                будни/выходные).
                            </p>
                        </div>
                    </div>
                    <div className="spacer-80"></div>
                    <div className="course-steps">
                        <p className="title text-center">Этапы обучения</p>
                        <div className="steps-wrapper row g-0 justify-content-between">
                            <div className="step col-12 col-md-5">
                            <span>1. Автодром – освоение базовых
                                упражнений:</span> <br></br>
                                – «змейка», разворот в ограниченном
                                пространстве;<br></br>
                                – параллельная и перпендикулярная парковка;<br></br>
                                – подъем на эстакаде, остановка и трогание.
                            </div>
                            <div className="step col-12 col-md-5">
                                <p>
                                    <span> 2. Город – </span> вождение по реальным
                                    маршрутам Москвы под контролем
                                    инструктора.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="spacer-80"></div>
                    <div className="prices">
                        <p className="title text-center">
                            Обучение вождению с комфортом и выгодой
                            – ознакомьтесь с нашими ценами!
                        </p>
                        <p className="subtitle text-center">
                            Вы можете выбрать курс в зависимости от ваших потребностей и уровня подготовки.
                        </p>
                        <div className="course-wrapper row justify-content-between g-0">
                            {drivingCourses.map(course => (
                                <DrivingCourseCard key={course.id} course={course}/>
                            ))}
                        </div>
                    </div>
                    <div className="spacer-80"></div>
                    <div className="our-advantages d-flex flex-column">
                        <p className="section-title">Преимущества</p>
                        <div className="spacer-40"></div>
                        <div className="advantage-list d-flex flex-column col-md-12 col-12">
                            {aboutAdvantages.map(advantage => (
                                <AdvantageItem key={advantage.number} number={advantage.number} text={advantage.text}/>
                            ))}
                            <div className="home-img col-md-3 d-none d-md-flex">
                                <img className="img-fluid" src="/icons/home.svg" alt=""/>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="spacer-80"></div>
            </div>
            <div className="container-fluid text-center start-title">
                <p>Старт занятий – сразу после прохождения медкомиссии!</p>
            </div>
            <div className="spacer-80"></div>
            <div className="container-fluid container-md">
                <div className="learning-block-wrapper">
                    <p className="section-title">
                        Обучение вождению в "АвтоМетод"
                    </p>
                    <div className="program-list-wrapper">
                        <p className="program-list-title">Программы обучения</p>
                        <p><span>«Минимальный» (16 часов вождения) –</span> идеально подходит для тех, кто уже имеет
                            базовые навыки
                            вождения и хочет освежить знания или подготовиться к экзамену.
                        </p>
                        <p><span>«Средний» (30 часов вождения) –</span> оптимальный вариант для тех, кто неуверенно
                            чувствует себя
                            за рулем, хочет улучшить навыки, разобрать сложные моменты и повысить уровень подготовки
                            перед экзаменом.
                        </p>
                        <p>
                            <span>«Максимальный» (56 часов вождения) – </span> полный курс для новичков. Включает
                            отработку всех
                            элементов вождения, городские маршруты и экзаменационные трассы. Гарантирует уверенное
                            управление автомобилем в любых условиях.
                        </p>
                    </div>
                </div>
                <div className="peculiarities-block">
                    <div className="section-title">
                        Особенности:
                    </div>
                    <div className="peculiarities-list row g-0">
                        <div className="peculiarities-item col-12 col-md-3">
                            <span>Обучение на МКПП
                            и АКПП</span> – после сдачи
                            на «механике» вы
                            получите права
                            без ограничений.
                        </div>
                        <div className="peculiarities-item col-12 col-md-3">
                            <span>Современный
                                автопарк</span> – иномарки
                            с кондиционерами.
                        </div>
                        <div className="peculiarities-item col-12 col-md-3">
                            <span>Дополнительные
                                уроки </span>– если
                            требуется усиленная
                            подготовка.
                        </div>
                        <div className="peculiarities-item col-12 col-md-3">
                            <img src="/icons/logo.svg" alt="" className="img-fluid h-100"/>
                        </div>
                    </div>
                </div>
                <div className="spacer-80"></div>
                <div className="how-to-start-block">
                    <HowToStartComponent/>
                </div>
                <div className="after-learning">
                    <div className="section-title">
                        После обучения вы:
                    </div>
                    <div className="skills-wrapper row g-0 justify-content-between">
                        <div className="skill col-12 col-md-3 text-center">
                            <img src="/icons/after1.svg" alt="" className="img-fluid"/>
                            <p>
                            Сдадите экзамен
                            в ГИБДД <span>с первого раза.</span>
                        </p>
                        </div>
                        <div className="skill col-12 col-md-3 text-center">
                            <img src="/icons/after2.svg" alt="" className="img-fluid"/>
                            <p>
                                Будете <span>уверенно чувствовать
                                себя</span> в городском потоке.
                        </p>
                        </div>
                        <div className="skill col-12 col-md-3 text-center">
                            <img src="/icons/after3.svg" alt="" className="img-fluid"/>
                            <p>
                                Получите
                                консультационную <span>поддержку </span>
                                от инструкторов.
                        </p>
                        </div>
                    </div>
                </div>
                <div className="spacer-80"></div>
                <div className="slogan-section">
                    <div className="slogan-wrapper row">
                        <p className="slogan col-12 col-md-4">
                            "АвтоМетод" – учим
                            водить, а не просто
                            сдавать экзамены!
                        </p>
                        <p className="addresses col-12 col-md-6">
                            📍 Адреса автодромов: по всей Москве
                            – подберем удобный вариант.<br></br><br></br>
                            📞 Звоните! Поможем выбрать программу
                            под ваш уровень и бюджет.
                        </p>
                    </div>
                </div>
                <div className="spacer-80"></div>
                <FooterComponent/>
            </div>
        </div>
    );
};

export default EducationBPage;