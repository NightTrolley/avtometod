import React from 'react';
import {aboutAdvantages} from "../../config/aboutAdvantages";
import AdvantageItem from "./advantage-item";
import {educationPractice, educationTheory} from "../../config/education.process.data";
import EducationProcessItem from "./education.process.item";
import {whyChooseCards} from "../../config/whyChooseCards.data";
import Card from "./card";
import {Accordion} from "react-bootstrap";
import {faqData} from "../../config/faq.data";
import FaqItem from "../../components/Faq/faq.item";
import FooterComponent from "../../components/Footer/footer.component";

export default function About() {
    return (
        <div className="container-fluid container-md">
            <div className="page-title">О нас</div>
            <div className="spacer-40"></div>
            <div className="about">
                <div className="text-wrapper col-12 col-md-8">
                    <p className="about-title">
                        Автошкола "АвтоМетод" — надёжный лидер в обучении
                        водителей с 2013 года.
                    </p>
                    <div className="spacer-40"></div>
                    <p className="about-text">
                        Мы ежегодно входим в топ автошкол Москвы по версии ГИБДД: наши ученики
                        сдают экзамены с первого раза чаще, чем в большинстве других школ.<br></br><br></br>
                        Этот результат – доказательство того, что наши методики работают эффективнее
                        многих традиционных подходов.
                    </p>
                </div>
                <div className="stars col-md-4 d-none d-md-block">
                    <img src="/icons/about-stars.svg" alt="" className="img-fluid"/>
                </div>
            </div>
            <div className="spacer-90"></div>
            <section>
                <div className="our-advantages">
                    <p className="section-title">Наши преимущества</p>
                    <div className="spacer-40"></div>
                    <div className="advantage-list d-flex flex-column col-md-12 col-12">
                        {aboutAdvantages.map(advantage => (
                            <AdvantageItem key={advantage.number} number={advantage.number} text={advantage.text}/>
                        ))}

                    </div>
                    <div className="home-img col-md-3 d-none d-md-flex">
                        <img className="img-fluid" src="/icons/home.svg" alt=""/>
                    </div>
                </div>
            </section>
            <div className="spacer-90"></div>
            <div className="education-process">
                <p className="section-title">
                Процесс обучения
                </p>
                <div className="spacer-40"></div>
                <p className="education-time">
                    Обучение длится 2,5-3,5 месяца и включает:
                </p>
                <div className="process-wrapper row g-0 justify-content-between">
                    <div className="theory col-12 col-md-6">
                        <p className="title">
                            Теоретический курс (134 часа):
                        </p>
                        <div className="process d-flex-flex-column">
                            {educationTheory.map(item => (
                                <EducationProcessItem key={item.number} number={item.number} text={item.text}/>
                            ))}
                        </div>
                    </div>
                    <div className="practice col-12 col-md-6">
                        <div className="title">
                            Практический курс (56 часов):
                        </div>
                        <div className="process d-flex-flex-column">
                            {educationPractice.map(item => (
                                <EducationProcessItem key={item.number} number={item.number} text={item.text}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="spacer-90"></div>
            <div className="why-choose-us">
                <div className="section-title">
                    Почему выбирают "АвтоМетод"?
                </div>
                <div className="spacer-40"></div>
                <div className="cards-list row">
                    {whyChooseCards.map(item => (
                        <Card key={item.id} title={item.title} text={item.text}/>
                    ))}
                </div>
            </div>
            <div className="spacer-90"></div>
            <div className="how-start-wrapper row justify-content-between">
                <div className="section-title">
                    Как начать обучение?
                </div>
                <div className="spacer-40"></div>
                <div className="how-start row justify-content-between">
                    <div className="img-wrapper d-none d-md-block col-4">
                        <img className="img-fluid" src="/icons/comp.svg" alt=""/>
                    </div>
                    <div className="steps-wrapper col-12 col-md-8 d-flex flex-column">
                        <div className="steps-title text-end">
                            4 простых шага к получению водительских прав:
                        </div>
                        <div className="steps d-flex flex-column text-end">
                            <p>1. Определитесь с графиком – утренние, дневные или вечерние группы</p>
                            <p>2. Заключите договор – онлайн или в нашем офисе</p>
                            <p>3. Оплатите обучение – первый взнос от (указать сумму в рублях) рублей</p>
                            <p>4. Приступайте к занятиям – теория и практика</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="spacer-90"></div>
            <div className="bonus-features">
                <div className="features-wrapper mx-auto justify-content-between text-center col-7 col-md-12 row">
                    <div className="section-title">
                        Дополнительные возможности
                    </div>
                    <div className="spacer-40"></div>
                    <div className="feature g-0 col-12 col-md-2">
                        <div className="feature-img-wrapper">
                            <img src="/icons/online-portal.svg" alt="" className="img-fluid"/>
                        </div>
                        <div className="feature-text text-center">
                            <span className="highlighting">
                                Онлайн-портал <br></br>
                            </span>
                            для изучения
                            теории
                        </div>
                    </div>
                    <div className="feature g-0 col-12 col-md-2">
                        <div className="feature-img-wrapper">
                            <img src="/icons/gibdd.svg" alt="" className="img-fluid"/>
                        </div>
                        <div className="feature-text text-center">
                            <span className="highlighting">
                                Сопровождение <br></br>
                            </span>
                            на экзамене
                            <span className="highlighting">
                                <br></br>в ГИБДД
                            </span>
                        </div>
                    </div>
                    <div className="feature g-0 col-12 col-md-2">
                        <div className="feature-img-wrapper">
                            <img src="/icons/instructor.svg" alt="" className="img-fluid"/>
                        </div>
                        <div className="feature-text text-center">
                            <span className="highlighting">
                                Дополнительные занятия <br></br>
                            </span>
                            с инструктором
                        </div>
                    </div>
                    <div className="feature g-0 col-12 col-md-3">
                        <div className="feature-img-wrapper">
                            <img src="/icons/gifts.svg" alt="" className="img-fluid"/>
                        </div>
                        <div className="feature-text text-center">
                            <span className="highlighting">
                                Подарки и бонусы<br></br>
                            </span>
                            для наших <br></br> учеников
                        </div>
                    </div>
                </div>

            </div>
            <div className="spacer-90"></div>
            <div className="contacts">
                <div className="section-title">
                    Контакты
                </div>
                <div className="spacer-40"></div>
                <div className="contacts-wrapper row">
                    <div className="contact-item col-md">
                        <p>📍 <span>Адреса филиалов:</span> по всей Москве</p>
                    </div>
                    <div className="contact-item col-md">
                        <p>📞 <span>Телефон:</span> +7 (999) 999-99-99</p>
                    </div>
                    <div className="contact-item col-md">
                        <p>🌐 <span>Сайт:</span> [указать адрес]</p>
                    </div>
                    <p className="text-center fs-4 fw-bolder">Приходите в "АвтоМетод" – и получите права легко и быстро!</p>
                </div>
            </div>
            <div className="spacer-90"></div>
            <section className="faq spacer-90">
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
            <p className="fw-bold fs-1 text-center">🚗 Ваша уверенность на дороге начинается с нас! 🚗</p>
            <div className="spacer-40"></div>
            <FooterComponent/>
        </div>
    )
}