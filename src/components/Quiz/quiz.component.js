import React, {useCallback} from 'react';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./quiz.form.css"

import { Pagination, Navigation } from 'swiper/modules';
import MainFormComponent from "../Forms/mainForm.component";
import {useQuiz} from "../../Context/quizContext";

const QuizComponent = () => {

    const {quizData, updateQuizData} = useQuiz();

    const handleInputChange = (name, value) => {
        updateQuizData(name, value)
    }

    const handleLastSlideEvent = useCallback((swiper) => {
        const nextButton = document.querySelector(".quiz-form .button-wrapper");
        const progress = document.querySelector(".swiper-pagination-progressbar")
        if (nextButton) {
            nextButton.classList.add("d-none");
            progress.classList.add("d-none")
        }
    })

    return (
        <div className="quiz-wrapper position-relative">
            <div className="quiz-form container row g-0 d-flex">
                <Swiper
                    pagination={{
                        type: 'progressbar',
                    }}
                    navigation={{
                        nextEl: '.next-btn',
                        prevEl: '.prev-btn'
                    }}
                    modules={[Pagination, Navigation]}
                    onReachEnd={handleLastSlideEvent}
                    noSwipingSelector="form, input, button, textarea"
                    allowTouchMove={false}
                    className="col-12 col-md-9"
                >
                    <div className="slides">
                        <SwiperSlide>
                            <div className="quiz-slide col-12">
                                <p className="question">
                                    Как вам удобно было бы проходить курс теории?
                                </p>
                                <div className="answers row">
                                    {['Онлайн', 'В классе', 'Совмещенно'].map((value, index) => (
                                        <div key={value} className="quiz-answer">
                                            <input
                                                type="radio"
                                                name="format"
                                                id={`format-${index}`}
                                                value={value}
                                                defaultChecked={quizData.format === value}
                                                onChange={(e) => handleInputChange('format', e.target.value)}
                                            />
                                            <label htmlFor={`format-${index}`}>
                                                {value}
                                            </label>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="quiz-slide">
                                <p className="question">
                                    На какой коробке передач планируете обучение?
                                </p>
                                <div className="answers row">
                                    {['Автоматическая', 'Механическая', 'Дополнительное вождение'].map((value, index) => (
                                        <div key={value} className="quiz-answer">
                                            <input
                                                type="radio"
                                                name="gearbox"
                                                id={`gearbox-${index}`}
                                                value={value}
                                                checked={quizData.gearbox === value}
                                                onChange={(e) => handleInputChange('gearbox', e.target.value)}
                                            />
                                            <label htmlFor={`format-${index}`}>
                                                {value}
                                            </label>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="quiz-slide">
                                <p className="question">
                                    Пробовали управлять автомобилем?
                                </p>
                                <div className="answers row">
                                    {['Есть опыт вождения', 'Немного', 'Нет, совсем нет опыта'].map((value, index) => (
                                        <div key={value} className="quiz-answer">
                                            <input
                                                type="radio"
                                                name="experience"
                                                id={`experience-${index}`}
                                                value={value}
                                                checked={quizData.experience === value}
                                                onChange={(e) => handleInputChange('experience', e.target.value)}
                                            />
                                            <label htmlFor={`format-${index}`}>
                                                {value}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="quiz-slide">
                                <p className="question">
                                    Какой вариант оплаты вам подходит?
                                </p>
                                <div className="answers row">
                                    {['Оплата полностью', 'Рассрочка от автошколы', 'Оплата мат.капиталом'].map((value, index) => (
                                        <div key={value} className="quiz-answer">
                                            <input
                                                type="radio"
                                                name="pay"
                                                id={`pay-${index}`}
                                                value={value}
                                                checked={quizData.pay === value}
                                                onChange={(e) => handleInputChange('pay', e.target.value)}
                                            />
                                            <label htmlFor={`format-${index}`}>
                                                {value}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="quiz-slide">
                                <p className="question">
                                    Так-так... А когда планируете обучение?
                                </p>
                                <div className="answers row">
                                    {['Как можно скорей', 'В течение недели или двух', 'В следующем месяце'].map((value, index) => (
                                        <div key={value} className="quiz-answer">
                                            <input
                                                type="radio"
                                                name="startTime"
                                                id={`startTime-${index}`}
                                                value={value}
                                                checked={quizData.startTime === value}
                                                onChange={(e) => handleInputChange('startTime', e.target.value)}
                                            />
                                            <label htmlFor={`format-${index}`}>
                                                {value}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className="last-step">
                                ОСТАЛСЯ ПОСЛЕДНИЙ ШАГ
                            </p>
                            <p className="las-step-desc">
                                После отправки формы вы сможете сразу и бесплатно забрать 2 подарка
                            </p>
                            <MainFormComponent button_text={"Забрать подарки"}/>
                        </SwiperSlide>
                    </div>
                    <div className="slide-navigation-buttons row">
                        <div className="button-wrapper col-3">
                            <button className="next-btn secondary-button col-12">Далее</button>
                        </div>
                    </div>
                </Swiper>
                <div className="quiz-info d-flex flex-column col-12 col-md-3">
                    <p>После прохождения опроса Вы получите подарки от автошколы "Автометод"</p>
                    <div className="benefit">
                        Скидка 3000 ₽ 🎁
                    </div>
                    <div className="benefit">
                        Курс теории ПДД 🚦
                    </div>
                </div>
            </div>
            <div className="quiz-success-send quiz-form my-auto text-center d-none">
                <p className="last-step">Спасибо! Ваша заявка успешно отправлена!</p>
                <p className="last-step-desc">В ближайшее время с вами свяжется наш менеджер</p>
            </div>
        </div>
    );
}
export default QuizComponent;