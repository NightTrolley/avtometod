import React from 'react';
import "./pay.page.css"
import FooterComponent from "../../components/Footer/footer.component";

const PayPage = () => {
    return (
        <div className="pay-page container">
            <p className="page-title">
                Оплата
            </p>
            <div className="pay-methods col-10 col-md-12">
                <p className="pay-methods-title">
                    Оплатить обучение в автошколе «АвтоМетод» вы можете несколькими способами:
                </p>
                <div className="pay-methods__wrapper d-flex flex-column">
                    <div className="why-us-advantage__item row g-0">
                        <div className="advantage-number col-1">
                            01
                        </div>
                        <div className="why-us-advantage__text col-11">Перейти по безопасной ссылке и указать
                            необходимую сумму для оплаты по выбраному вами тарифу. Необходимо указать Ваши ФИО и номер
                            телефона
                        </div>
                    </div>
                    <div className="why-us-advantage__item row g-0">
                        <div className="advantage-number col-1">
                            02
                        </div>
                        <div className="why-us-advantage__text col-11">Произвести оплату Вы можете в любом банке Москвы
                            по нашим реквизитам
                        </div>
                    </div>
                    <div className="why-us-advantage__item row g-0">
                        <div className="advantage-number col-1">
                            03
                        </div>
                        <div className="why-us-advantage__text col-11">Также можно оплатить обучение в любом из наших
                            офисов, адреса которых указаны на странице «Контакты»
                        </div>
                    </div>
                </div>
            </div>
            <div className="for-you-wrapper row g-0 col-12">
                <p className="for-you-title">
                    Для вашего удобства, нами предусмотрено несколько способов оплаты:
                </p>
                <div className="for-you d-flex flex-column col-12 col-md-6">
                    <div className="for-you-item col-12">
                        1. Оплата в рассрочку, Вы можете частями платить за обучение.
                        Переходите по ссылке для оплаты и вносите сумму, которая
                        соответствует Вашему тарифу на обучение
                    </div>
                    <div className="for-you-item col-12">
                        2. Оплата в кредит
                    </div>
                    <div className="for-you-item col-12">
                        3. Раздельный платеж. Вы можете составить индивидуальный
                        график платежей. Для этого необходимо связаться с менеджером
                        и оплачивать обучение можно также по ссылке
                    </div>
                    <div className="for-you-item col-12">
                        4. Отложенный платеж – первый урок в нашей автошколе для вас
                        абсолютно бесплатный. Не понравилось – не платите!
                    </div>
                    <div className="for-you-item col-12">
                        5. Полная оплата пакета в день заключения договора. Если Вы
                        оплачиваете обучение полностью в день обращения, то для
                        вас будет доступна скидка
                    </div>
                </div>
                <div className="for-you-img col-12 col-md-6">
                    <img src="/icons/for-you.svg" alt="" className="img-fluid"/>
                </div>
                <p className="packets">
                    На нашем сайте представлено несколько пакетов услуг (минимальный, средний, максимальный) по очень
                    выгодным ценам, в каждый пакет входит все необходимое для полного прохождения как теоретической, так
                    и практической части занятий, а так же оформление документов в ГИБДД. Выбирайте пакет услуг исходя
                    из личных предпочтений.
                </p>
            </div>
            <div className="agreement-link text-center">
                <p className="">
                    Вы можете скачать и ознакомиться с примером договора нашей автошколы с учениками:
                </p>
                <a href="/agreement/Договор_оферта_ООО_Автометод+правки.pdf" className="">Договор оферты</a>
            </div>
            <FooterComponent/>
        </div>
    );
};

export default PayPage;