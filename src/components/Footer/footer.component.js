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
                    <Link to="/education">Обучение</Link>
                </div>
                <div>
                    <Link to="/about">О нас</Link>
                </div>
                <div>
                    <Link to="/online">Онлайн</Link>
                </div>
                <div>
                    <Link to="/contacts">Контакты</Link>
                </div>
                <div>
                    <Link to="/policy">Политика в отношении обработки персональных данных</Link>
                </div>
            </div>
            <div className="soc-links col-md-2">
                <div className="social-block">
                    <SocialComponent link={"https://t.me/AvtoMetodmsk"} icon={telegram_icon} alt={"telegram"}/>
                    <SocialComponent link={"https://vk.com/avtometod"} icon={vk_icon} alt={"vk"}/>
                    <SocialComponent link={"/"} icon={wa_icon} alt={"whatsapp"}/>
                </div>
            </div>
            <div className="contact-block col-md-3">
                <div className="footer-contact-wrapper d-flex flex-column g-0">
                    <NavitemComponent class={"phone_block"} firstText={"Номер телефона"}
                                      secondText={<a href="tel:+7 (495) 019-95-88">+7 (495) 019-95-88</a>}/>
                    <NavitemComponent class={"email_block"} firstText={"E-mail"}
                                      secondText={<a href="mailto:info@avtometod.ru">info@avtometod.ru</a>}/>
                    <NavitemComponent class={"location_block"} firstText={"Адрес"}
                                      secondText={"г. Москва, Киевская улица, 14"}/>
                </div>
            </div>
            <p className="copyright">
                © АвтоМетод, 2025
            </p>
        </footer>
    );
};

export default FooterComponent;