import React from 'react';
import "./education.page.style.css"
import FooterComponent from "../../components/Footer/footer.component";
import {Link} from "react-router";

const EducationPage = () => {
    return (
        <div className="education-page container-fluid container-md">
            <h1 className="page-title">Программы обучения</h1>
            <section className="categories-wrapper row">
                <div className="education education-b col-12 col-md-6">
                    <div className="image-wrapper">
                        <img src="/icons/education-b.svg" alt="" className="img-fluid"/>
                        <Link to="/education-b">Узнать больше</Link>
                    </div>
                </div>
                <div className="education education-a col-12 col-md-6">
                    <div className="image-wrapper">
                        <img src="/icons/education-a.svg" alt="" className="img-fluid"/>
                        <Link to="/education-b">Узнать больше</Link>
                    </div>
                </div>
            </section>
            <div className="spacer-80"></div>
            <FooterComponent/>
        </div>
    );
};

export default EducationPage;