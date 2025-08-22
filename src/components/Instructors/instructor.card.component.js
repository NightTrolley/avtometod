import React from 'react';
import "./instructor.card.style.css"
import instructorAvatar from '../../icons/instructor-avatar.jpg'
const InstructorCardComponent = () => {
    return (
        <div className="instructor-card col-12 col-md-4 d-flex flex-column">
            <div className="row g-0">
                <img src={instructorAvatar} alt="" className="instructor-avatar"/>
                <div className="instructor-fio">
                    Иванов<br></br>
                    Петр<br></br>
                    Сергеевич
                </div>
            </div>
            <div className="instructor-info d-flex flex-column">
                <span className="post">Инструктор</span>
                <div className="experience-block d-flex flex-column">
                    <span className="title">
                        Стаж
                    </span>
                    <span className="age">
                        15 лет
                    </span>
                </div>
                <div className="station-block d-flex flex-column">
                    <span className="title">Станция метро</span>
                    <span className="station-name">Название станции</span>
                </div>
                <div className="car-block d-flex flex-column">
                    <div className="title">Автомобиль</div>
                    <div className="car-name">Skoda Octavia A7</div>
                </div>
            </div>
            <div className="rating-block d-flex">
                <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.70653 1.63397C9.44015 0.147483 11.5598 0.147479 12.2935 1.63397L13.7083 4.50076C13.9996 5.09105 14.5628 5.50019 15.2142 5.59484L18.3779 6.05455C20.0183 6.29292 20.6733 8.30887 19.4863 9.46594L17.197 11.6974C16.7257 12.1569 16.5106 12.8189 16.6218 13.4677L17.1623 16.6186C17.4425 18.2524 15.7276 19.4983 14.2604 18.7269L11.4307 17.2393C10.848 16.933 10.152 16.933 9.56932 17.2393L6.73963 18.7269C5.27238 19.4983 3.55751 18.2524 3.83773 16.6186L4.37815 13.4677C4.48943 12.8189 4.27433 12.1569 3.80296 11.6974L1.51369 9.46594C0.326661 8.30887 0.981678 6.29292 2.62212 6.05455L5.78581 5.59484C6.43723 5.50019 7.00036 5.09105 7.29168 4.50076L8.70653 1.63397Z"
                        fill="white"/>
                </svg>
                <span className="rating">5.0</span>
            </div>
        </div>);
};

export default InstructorCardComponent;