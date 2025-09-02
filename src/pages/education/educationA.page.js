import React from 'react';
import "./education.a.page.css"
import {drivingCoursesA} from "../../config/drivingCoursesData";
import DrivingCourseCard from "../../components/DrivingCourseCard/drivingCourseCard";
import FooterComponent from "../../components/Footer/footer.component";
import {useModalContext} from "../../Context/modalContext";
import FormModalComponent from "../../components/Modals/form.modal.component";

const EducationAPage = () => {

    const {isModalOpen, handleOpenModal, handleCloseModal} = useModalContext();

    return (
        <div className="education-a-page">
            <div className="container-fluid container-md">
                <h1 className="page-title">Категория А – обучение на мотоцикл</h1>
                <div className="about-a-category-wrapper container justify-content-center d-flex col-12">
                    <div className="about-a-category row">
                        <div className="category-desc col-12 col-md-7">
                            <span>Получение</span> водительских прав категории А открывает
                            возможность управлять мотоциклом, включая модели
                            с коляской и мощные мотоциклы с объемом двигателя
                            более 125 см³.<br></br><br></br>
                            В нашей автошколе вы пройдете профессиональную
                            подготовку, которая позволит уверенно чувствовать себя
                            на дороге и сдать экзамен в ГИБДД с первого раза.
                        </div>
                        <div className="moto-img col-12 col-md-5">
                            <img src="/icons/moto.svg" alt="" className="moto-img img-fluid"/>
                        </div>
                    </div>
                </div>
                <div className="course-content-wrapper g-0 row col-12">
                    <h2 className="title text-center">
                        Что входит в обучение?
                    </h2>
                    <div className="course-content-tile col-12 col-md-6">
                        <p className="tile-title">
                            1. Теоретический курс:
                        </p>
                        <p className="tile-content">
                            – правила дорожного движения (ПДД) для
                            мотоциклистов;<br></br>
                            – особенности управления мотоциклом
                            в разных погодных условиях;<br></br>
                            – безопасность на дороге и защитная
                            экипировка;<br></br>
                            – ответственность за нарушение ПДД.
                        </p>
                    </div>
                    <div className="course-img col-12 col-md-6">
                        <img className="img-fluid" src="/icons/comp.svg" alt=""/>
                    </div>
                    <div className="course-content-tile col-12 col-md-6">
                        <p className="tile-title">
                            2. Практические занятия:
                        </p>
                        <p className="tile-content">
                            – основы управления
                            мотоциклом: старт,
                            торможение, переключение
                            передач;<br></br>
                            – маневрирование
                            на площадке: змейка,
                            восьмерка, габаритный
                            коридор;<br></br>
                            – езда в городских условиях
                            (после освоения базовых
                            навыков).
                        </p>
                    </div>
                    <div className="course-content-tile col-12 col-md-6">
                        <p className="tile-title">
                            3. Подготовка к экзамену
                            в ГИБДД:
                        </p>
                        <p className="tile-content">
                            – тренировка всех упражнений,
                            которые проверяются
                            на экзамене;<br></br>
                            – разбор типичных ошибок
                            и рекомендации по их
                            исправлению;<br></br>
                            – пробный экзамен для оценки
                            уровня подготовки.
                        </p>
                    </div>
                </div>
                <div className="spacer-80"></div>
                <div className="prices container">
                    <p className="title text-center mx-auto col-12 col-md-10">
                        Обучение вождению с комфортом и выгодой
                        – ознакомьтесь с нашими ценами!
                    </p>
                    <p className="desc text-center">
                        Вы можете выбрать курс в зависимости от ваших потребностей и уровня подготовки.
                    </p>
                    <div className="a-page-price-card-wrapper d-flex row justify-content-evenly">
                        {drivingCoursesA.map(course => (
                            <DrivingCourseCard key={course.id} course={course} handleOpenModal={handleOpenModal}/>
                        ))}
                    </div>
                </div>
                <div className="spacer-80"></div>
                <div className="requirements text-center justify-content-between row">
                    <p className="title">
                        Требования к кандидатам
                    </p>
                    <div className="requirement col-12 col-md-3">
                        <img src="/icons/18.svg" alt=""/>
                        <p>Возраст: <span>от 18 лет.</span></p>
                    </div>
                    <div className="requirement col-12 col-md-5">
                        <img src="/icons/medicine.svg" alt=""/>
                        <p>
                            <span>Медицинская справка</span><br></br>
                            (отсутствие противопоказаний
                            к управлению мотоциклом).
                        </p>
                    </div>
                    <div className="requirement col-12 col-md-3">
                        <img src="/icons/approve-exam.svg" alt=""/>
                        <p>
                            Для допуска к экзамену
                            необходимо <span>успешно
                        завершить обучение</span>
                            в автошколе.
                        </p>
                    </div>
                </div>
                <div className="spacer-80"></div>
                <div className="why-us">
                    <p className="title text-center">
                        Почему стоит выбрать автошколу "АвтоМетод"?
                    </p>
                    <div className="advantages-wrapper d-flex flex-column">
                        <div className="why-us-advantage__item row">
                            <div className="advantage-number col-1">
                                01
                            </div>
                            <div className="why-us-advantage__text col-11">Опытные инструкторы – наши преподаватели и
                                мотоинструкторы имеют многолетний
                                стаж и помогут освоить управление мотоциклом даже новичкам.
                            </div>
                        </div>
                        <div className="why-us-advantage__item row">
                            <div className="advantage-number col-1">
                                02
                            </div>
                            <div className="why-us-advantage__text col-11">Современные мотоциклы – обучение проходит на
                                технике, соответствующей
                                требованиям ГИБДД.
                            </div>
                        </div>
                        <div className="why-us-advantage__item row">
                            <div className="advantage-number col-1">
                                03
                            </div>
                            <div className="why-us-advantage__text col-11">Гибкий график – вы можете выбрать удобное
                                время
                                для занятий, включая
                                выходные дни.
                            </div>
                        </div>
                        <div className="why-us-advantage__item row">
                            <div className="advantage-number col-1">
                                04
                            </div>
                            <div className="why-us-advantage__text col-11">Сроки обучения - от 1,5 до 2 месяцев.
                            </div>
                        </div>
                        <div className="why-us-advantage__item row">
                            <div className="advantage-number col-1">
                                05
                            </div>
                            <div className="why-us-advantage__text col-11">Высокий процент сдачи – большинство наших
                                учеников сдают экзамен
                                с первого раза.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spacer-80"></div>
            </div>
            <div className="container-fluid how-subscribe-wrapper">
                <div className="how-subscribe container d-none d-md-flex">
                    <img src="/icons/single-star.svg" alt=""/>
                    <img src="/icons/single-star.svg" alt=""/>
                    <img src="/icons/single-star.svg" alt=""/>
                    <p>
                        <span>Как записаться?</span> <br></br><br></br>
                        Оставьте заявку на сайте или позвоните по номеру +7 (495) 019-95-88, и мы подберем
                        для вас удобное время начала занятий.<br></br><br></br>
                        <span>Станьте уверенным водителем мотоцикла с нашей автошколой! 🏍️</span>
                    </p>
                    <img src="/icons/single-star.svg" alt=""/>
                    <img src="/icons/single-star.svg" alt=""/>
                    <img src="/icons/single-star.svg" alt=""/>
                </div>
                <div className="how-subscribe-mobile d-flex d-md-none text-center">
                    <img src="/icons/single-star.svg" alt=""/>
                    <img src="/icons/single-star.svg" alt=""/>
                    <img src="/icons/single-star.svg" alt=""/>
                    <img src="/icons/single-star.svg" alt=""/>
                    <p>
                        <span>Как записаться?</span> <br></br><br></br>
                        Оставьте заявку на сайте или позвоните по номеру +7 (495) 019-95-88, и мы подберем
                        для вас удобное время начала занятий.<br></br><br></br>
                        <span>Станьте уверенным водителем мотоцикла с нашей автошколой! 🏍️</span>
                    </p>
                </div>
            </div>
            <div className="spacer-80"></div>
            <div className="container">
                <FooterComponent/>
            </div>
            <FormModalComponent
                show={isModalOpen}
                onHide={handleCloseModal}
            />
        </div>
    );
};

export default EducationAPage;