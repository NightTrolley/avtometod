import React from 'react';
import "./education.a.page.css"

const EducationAPage = () => {
    return (
        <div className="education-a-page container container-md">
            <h1 className="page-title">Категория А – обучение на мотоцикл</h1>
            <div className="about-a-category col-12 row">
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
                    <img src="/icons/moto.svg" alt="" className="moto-img"/>
                </div>
            </div>
            <div className="course-content-wrapper row col-12">
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
                    <img src="/icons/comp.svg" alt=""/>
                </div>
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
            </div>
        </div>
    );
};

export default EducationAPage;