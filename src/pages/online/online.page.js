import React from 'react';
import SecondaryButton from "../../components/Buttons/secondaryButton/secondaryButton";
import "./online.page.styles.css"
import FooterComponent from "../../components/Footer/footer.component";

const OnlinePage = () => {
    return (
        <div className="online-page">
            <div className="container">
                <p className="page-title spacer-40">Онлайн</p>
                <h1>Начните обучение в удобном формате!</h1>
                <h2 className="spacer-40">
                    Автошкола "АвтоМетод" с <span>более чем 10-летним опытом</span> предлагает дистанционное обучение для будущих
                    водителей.<br></br><br></br>
                    Пройдите теоретический курс онлайн <span>без привязки к месту и времени,</span> используя
                    нашу сертифицированную платформу.
                </h2>
                <div className="how-to-start-container spacer-80 row g-0">
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
                            <input type="text" name="name" placeholder="Имя" required={true}/>
                            <input type="tel" name="phone" placeholder="+7 (999) 999-99-99" required={true}/>
                            <SecondaryButton text={"Бесплатная консультация"}/>
                        </form>
                    </div>
                </div>
                <div className="online-advantages spacer-80">
                    <p className="title text-center">
                        Преимущества онлайн-обучения
                    </p>
                    <div className="online-advantages-items row justify-content-center">
                        <div className="online-advantage-item col-10 col-md-4 d-flex flex-column text-center">
                            <img src="/icons/calendar.svg" alt="" className="img-fluid mx-auto"/>
                            <p className="online-advantage-item__text">
                                <span>Гибкий график</span> – учитесь
                                утром, вечером или ночью.
                            </p>
                        </div>
                        <div className="online-advantage-item col-10 col-md-4 d-flex flex-column text-center">
                            <img src="/icons/mobile.svg" alt="" className="img-fluid mx-auto"/>
                            <p className="online-advantage-item__text">
                                Доступ <span>с любого устройства </span>
                                – компьютер, смартфон или планшет.
                            </p>
                        </div>
                        <div className="online-advantage-item col-10 col-md-4 d-flex flex-column text-center">
                            <img src="/icons/economy.svg" alt="" className="img-fluid mx-auto"/>
                            <p className="online-advantage-item__text">
                                <span>Экономия</span> времени и денег –
                                не тратьте ресурсы на дорогу.
                            </p>
                        </div>
                        <div className="online-advantage-item col-10 col-md-4 d-flex flex-column text-center">
                            <img src="/icons/actual.svg" alt="" className="img-fluid mx-auto"/>
                            <p className="online-advantage-item__text">
                                <span>Актуальные материалы</span> – всегда
                                обновляемые ПДД без устаревших книг.
                            </p>
                        </div>
                        <div className="online-advantage-item col-10 col-md-4 d-flex flex-column text-center">
                            <img src="/icons/tickets.svg" alt="" className="img-fluid mx-auto"/>
                            <p className="online-advantage-item__text">
                                <span>Практика</span> экзаменационных <span>билетов </span>
                                – подготовка к сдаче с первого раза.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid g-0 spacer-80">
                <div className="promo-block">
                    <div className="online-start container d-none d-md-flex text-center">
                        <img src="/icons/single-star.svg" alt=""/>
                        <img src="/icons/single-star.svg" alt=""/>
                        <img src="/icons/single-star.svg" alt=""/>
                        <p>
                            <span>Хотите начать сейчас? Ваш преподаватель уже ждет!</span> <br></br><br></br>
                            Живые лекции + онлайн = максимум пользы<br></br><br></br>
                            <span>Вы можете бесплатно посещать очные занятия в любом филиале, совмещая форматы. Наша методика
доказала эффективность: большинство учеников сдают теорию в ГИБДД с первого раза!</span>
                        </p>
                        <img src="/icons/single-star.svg" alt=""/>
                        <img src="/icons/single-star.svg" alt=""/>
                        <img src="/icons/single-star.svg" alt=""/>
                    </div>
                    <div className="online-start-mobile d-flex d-md-none text-center">
                        <img src="/icons/single-star.svg" alt=""/>
                        <img src="/icons/single-star.svg" alt=""/>
                        <p>
                            <span>Хотите начать сейчас? Ваш преподаватель уже ждет!</span> <br></br><br></br>
                            Живые лекции + онлайн = максимум пользы<br></br><br></br>
                            <span>Вы можете бесплатно посещать очные занятия в любом филиале, совмещая форматы. Наша методика
доказала эффективность: большинство учеников сдают теорию в ГИБДД с первого раза!</span>
                        </p>
                        <img src="/icons/single-star.svg" alt=""/>
                        <img src="/icons/single-star.svg" alt=""/>
                    </div>
                </div>
            </div>
            <div className="container spacer-80">
                <div className="how-is-teaching-wrapper spacer-80">
                    <div className="row">
                        <p className="how-is-teaching-text col">
                            1. <span>Вебинары и записи лекций</span> – изучайте темы в реальном
                            времени или позже.<br></br>
                            2. <span>Обратная связь</span> – задавайте вопросы преподавателю в чате.<br></br>
                            3. <span>Тесты после каждой темы</span> – закрепляйте знания.<br></br>
                            4. <span>Доступ к материалам 24/7</span> – повторяйте сложные
                            моменты.<br></br>
                        </p>
                        <img src="/icons/comp.svg" alt="" className="img-fluid col"/>
                    </div>
                    <p className="how-is-teaching-text col">
                        <span>Практика без ограничений:</span><br></br>
                        1. Вождение по удобному графику – выбирайте время, район и тип КПП.<br></br>
                        2. Топливный сбор включен в стоимость.
                    </p>
                </div>
                <div className="address row mx-auto justify-content-center">
                    <p className="col-md-4">Запишитесь сегодня
                        и получите права
                        уже через 3,5 месяца!
                    </p>
                    <p className="col-md-6">
                        📍 Наши филиалы по всей Москве
                        – выбирайте ближайший.
                        📞 Звоните или оставляйте заявку
                        – поможем подобрать оптимальный вариант!
                    </p>
                </div>
            </div>
            <div className="container-fluid online-page-slogan text-center spacer-80">
                <p>"АвтоМетод" – учитесь с комфортом!</p>
            </div>
            <div className="container">
                <FooterComponent/>
            </div>
        </div>
    );
};

export default OnlinePage;