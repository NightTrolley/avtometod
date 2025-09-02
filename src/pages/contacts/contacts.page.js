import React from 'react';
import FooterComponent from "../../components/Footer/footer.component";
import "./contacts.page.css"
import SecondaryButton from "../../components/Buttons/secondaryButton/secondaryButton";

const ContactsPage = () => {
    return (
        <div>
            <div className="container text-center spacer-40">
                <h1 style={{fontWeight: 700, fontSize: "40px"}}>Автошкола "Автометод"</h1>
            </div>
            <div className="map">
                <div className="contacts-block">
                    <p className="title">Контакты</p>
                    <p className="address">
                        <span>
                            Адрес
                        </span><br></br>
                        Головной офис: <br></br> г. Москва, ул. Киевская, 14
                    </p>
                    <p className="phone">
                        <span>Телефон: </span><br></br>
                        +7 (495) 019-95-88
                    </p>
                    <p className="email">
                        <span>email:</span><br></br>
                        info@avtometod.ru
                    </p>
                    <div className="button-wrapper">
                        <SecondaryButton text={"Заказать звонок"}/>
                    </div>
                </div>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A71092a92ef834b07abcf1e930075d00caee3b56b24e84b8b9ab6c91bbda912c4&amp;source=constructor"
                    width="100%" height="550" frameBorder="0" className="spacer-40"></iframe>
            </div>

            <div className="container">
                <FooterComponent/>
            </div>

        </div>


    );
};

export default ContactsPage;