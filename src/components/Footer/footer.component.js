import React from 'react';
import {Link} from "react-router";
import {NavbarBrand} from "react-bootstrap";
import SocialComponent from "../Social/socialComponent";
import telegram_icon from "../../icons/telegram_icon.svg";
import vk_icon from "../../icons/vk_icon.svg";
import wa_icon from "../../icons/wa_icon.svg";
import inst_icon from "../../icons/inst_icon.svg";
import NavitemComponent from "../header/NavItems/navitem.component";
import "./footer.style.css"

const FooterComponent = () => {
    return (
        <footer className="row g-0 justify-content-between">
            <NavbarBrand as={Link} to={"/"} className="col-3">
                <img src="/icons/logo.svg" alt="" className="logo"/>
            </NavbarBrand>
            <div className="page-links col-md-2 d-flex flex-column">
                <div>
                    <Link to="/">Обучение</Link>
                </div>
                <div>
                    <Link to="/">О нас</Link>
                </div>
                <div>
                    <Link to="/">онлайн</Link>
                </div>
                <div>
                    <Link to="/">Контакты</Link>
                </div>
                <div>
                    <Link to="/">Блог</Link>
                </div>
                <div>
                    <Link to="/">Вакансии</Link>
                </div>
            </div>
            <div className="soc-links col-md-2">
                <div className="social-block">
                    <SocialComponent link={"/aas"} icon={telegram_icon} alt={"telegram"}/>
                    <SocialComponent link={"/aas"} icon={vk_icon} alt={"vk"}/>
                    <SocialComponent link={"/aas"} icon={wa_icon} alt={"whatsapp"}/>
                    <SocialComponent link={"/aas"} icon={inst_icon} alt={"instagram"}/>
                </div>
            </div>
            <div className="contact-block col-md-3">
                <div className="footer-contact-wrapper d-flex flex-column g-0">
                    <NavitemComponent class={"phone_block"} firstText={"Номер телефона"}
                                      secondText={"+7 (999) 999-99-99"}/>
                    <NavitemComponent class={"email_block"} firstText={"E-mail"}
                                      secondText={"info@automethod.ru"}/>
                    <NavitemComponent class={"location_block"} firstText={"Адрес"}
                                      secondText={"проспект Андропова, д.8"}/>
                </div>
            </div>
            <p className="copyright">
                © АвтоМетод, 2025
            </p>
        </footer>
    );
};

export default FooterComponent;