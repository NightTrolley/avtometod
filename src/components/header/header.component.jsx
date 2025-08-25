import phone_icon from "../../icons/phone_icon.svg"
import email_icon from "../../icons/email_icon.svg"
import location_icon from "../../icons/location_icon.svg"
import telegram_icon from "../../icons/telegram_icon.svg"
import vk_icon from "../../icons/vk_icon.svg"
import wa_icon from "../../icons/wa_icon.svg"
import inst_icon from "../../icons/inst_icon.svg"
import './header.component.css';
import Navbar from 'react-bootstrap/Navbar';
import NavitemComponent from "./NavItems/navitem.component";
import SocialComponent from "../Social/socialComponent";
import {NavbarBrand, NavbarCollapse, NavItem,} from "react-bootstrap";
import PrimaryButtonComponent from "../Buttons/primaryButton/primary.button.component";
import {Link, NavLink} from "react-router";
import React from "react";

const Header = () => {
    return (
        <div className="container-fluid g-0">
            <div className="container g-0">
                <Navbar expand="sm" className="mt-4 mt-md-5 mb-3 mb-md-0">
                    <NavbarBrand as={Link} to={"/"} className="col-2 me-4">
                        <img src="/icons/logo.svg" alt="" className="logo"/>
                    </NavbarBrand>

                    <button className="navbar-toggler expand-btn" data-bs-toggle="collapse"
                            data-bs-target="#collapse-menu" aria-controls="collapse-menu" aria-expanded="false">
                        <img src="/icons/expand-btn.svg" alt=""/>
                    </button>
                    <div className="collapse" id="collapse-menu">
                        <div className="collapse-menu-wrapper col-10 d-flex flex-column">
                            <button className="navbar-toggler menu-close-btn" data-bs-toggle="collapse"
                                    data-bs-target="#collapse-menu" aria-controls="collapse-menu"
                                    aria-expanded="false">
                            </button>
                            <div className="logo-wrapper col-6 mx-auto">
                                <img src="/icons/logo.svg" alt="" className="img-fluid"/>
                            </div>
                            <div className="links">
                                <div className="collapse-menu-links d-flex flex-column">
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
                            </div>
                            <span className="collapse-menu-divider"></span>
                            <div className="soc-links text-center mx-auto">
                                <p>Присоединиться</p>
                                <div className="soc-links-list d-flex">
                                    <SocialComponent link={"/aas"} icon={telegram_icon} alt={"telegram"}/>
                                    <SocialComponent link={"/aas"} icon={vk_icon} alt={"vk"}/>
                                    <SocialComponent link={"/aas"} icon={wa_icon} alt={"whatsapp"}/>
                                </div>

                            </div>
                            <div className="contacts text-center mx-auto">
                                <p>Связаться с нами</p>
                                <p className="email">
                                    info@automethod.ru
                                </p>
                                <p className="address">
                                    проспект Андропова, д.8
                                </p>
                                <p className="phone-number">
                                    +7 (999) 999-99-99
                                </p>
                            </div>
                        </div>
                    </div>
                    <NavbarCollapse>
                        <div className="contact-wrapper col row g-0">
                            <NavitemComponent class={"phone_block col-4"} firstText={"Номер телефона"}
                                              secondText={"+7 (999) 999-99-99"} icon={phone_icon}/>
                            <NavitemComponent class={"email_block col-4"} firstText={"E-mail"}
                                              secondText={"info@avtometod.ru"}
                                              icon={email_icon}/>
                            <NavitemComponent class={"location_block col-4"} firstText={""}
                                              secondText={"Киевская улица 14"} icon={location_icon}/>
                        </div>
                        <div className="social-block">
                            <SocialComponent link={"/aas"} icon={telegram_icon} alt={"telegram"}/>
                            <SocialComponent link={"/aas"} icon={vk_icon} alt={"vk"}/>
                            <SocialComponent link={"/aas"} icon={wa_icon} alt={"whatsapp"}/>
                            <SocialComponent link={"/aas"} icon={inst_icon} alt={"instagram"}/>
                        </div>
                        <div className="divider"></div>
                        <div className="button-wrapper col-2">
                            <PrimaryButtonComponent text={"Заказать звонок"}/>
                        </div>
                    </NavbarCollapse>
                </Navbar>
            </div>

            <div className="container-fluid col-12 d-none d-md-block g-0 second-floor mb-5 ">
                <div className="menu-wrapper h-100 row g-0 justify-content-center align-items-center">
                    <NavItem className="col-1">
                        <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/about">О
                            нас</NavLink>
                    </NavItem>
                    <NavItem className="col-1">
                        <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                                 to="/education">Обучение</NavLink>
                    </NavItem>
                    <NavItem className="col-1">
                        <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                                 to="/">Онлайн</NavLink>
                    </NavItem>
                    <NavItem className="col-1">
                        <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                                 to="/">Блог</NavLink>
                    </NavItem>
                    <NavItem className="col-1">
                        <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                                 to="/">Вакансии</NavLink>
                    </NavItem>
                    <NavItem className="col-1">
                        <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                                 to="/">Оплата</NavLink>
                    </NavItem>
                    <NavItem className="col-1">
                        <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                                 to="/">Контакты</NavLink>
                    </NavItem>
                </div>
            </div>
        </div>
        // <div className="header1">
        //     <Navbar expand="sm">
        //         <Navbar.Brand href="/" className="col-2 d-md-none">
        //             <img src={logo} alt="Логотип"/>
        //         </Navbar.Brand>
        //         <NavbarCollapse>
        //         <Container className="col-12">
        //             <Navbar.Brand href="/" className="col-2">
        //                 <img src={logo} alt="Логотип"/>
        //             </Navbar.Brand>
        //             <div className="info-block col-6 row g-0">
        //                 <NavitemComponent class={"phone_block col-4"} firstText={"Номер телефона"} secondText={"+7 (999) 999-99-99"} icon={phone_icon}/>
        //                 <NavitemComponent class={"email_block col-4"} firstText={"E-mail"} secondText={"info@automethod.ru"} icon={email_icon}/>
        //                 <NavitemComponent class={"location_block col-4"} firstText={""} secondText={"проспект Андропова, д.8"} icon={location_icon}/>
        //             </div>
        //             <div className="row col-4">
        //                 <div className="col-12 d-flex align-items-center">
        //                     <div className="social-block">
        //                         <SocialComponent link={"/aas"} icon={telegram_icon} alt={"telegram"}/>
        //                         <SocialComponent link={"/aas"} icon={vk_icon} alt={"vk"}/>
        //                         <SocialComponent link={"/aas"} icon={wa_icon} alt={"whatsapp"}/>
        //                         <SocialComponent link={"/aas"} icon={inst_icon} alt={"instagram"}/>
        //                     </div>
        //                     <div className="divider"></div>
        //                     <PrimaryButtonComponent text={"Заказать звонок"}/>
        //                 </div>
        //             </div>
        //         </Container>
        //         <Container fluid className="second_floor justify-content-center">
        //             <div className="menu-list row col-7">
        //                 <NavItem className="col">
        //                     <NavLink href="/">О нас</NavLink>
        //                 </NavItem>
        //                 <NavItem className="col">
        //                     <NavLink href="/">Цены</NavLink>
        //                 </NavItem>
        //                 <NavItem className="col">
        //                     <NavLink href="/">Онлайн</NavLink>
        //                 </NavItem>
        //                 <NavItem className="col">
        //                     <NavLink href="/">Блог</NavLink>
        //                 </NavItem>
        //                 <NavItem className="col">
        //                     <NavLink href="/">Вакансии</NavLink>
        //                 </NavItem>
        //                 <NavItem className="col">
        //                     <NavLink href="/">Оплата</NavLink>
        //                 </NavItem>
        //                 <NavItem className="col">
        //                     <NavLink href="/">Контакты</NavLink>
        //                 </NavItem>
        //             </div>
        //         </Container>
        //         </NavbarCollapse>
        //     </Navbar>
        // </div>
    );
}

export default Header;