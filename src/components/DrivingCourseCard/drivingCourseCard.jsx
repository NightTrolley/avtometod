import React, {useRef, useState} from 'react';
import "./driving.courses.style.css";

const DrivingCourseCard = ({course, handleOpenModal}) => {

    const inputRef = useRef(null);

    const [currentPrice, setCurrentPrice] = useState(course.price)
    const [activeBtn, setActiveBtn] = useState('full')

    const handleOptionClick = (price, active) => {
        setCurrentPrice(price)
        setActiveBtn(active)
    }

    return (
        <div className="course-card d-flex flex-column col-12 col-md-3"
             style={{border: `2px solid ${course.color}`, color: course.color}}
        >
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>

            <div className="payment-options">
                {/*{course.paymentOptions.map((option, index) => (*/}
                {/*    <span key={index} className="payment-option"*/}
                {/*          style={{color: index === 0 ? course.color : "#000000"}}>{option}</span>*/}
                {/*))}*/}
                <button
                    type="button"
                    className="btn payment-option"
                    style={{color: activeBtn === "full" ? course.color : "#000"}}
                    onClick={() => handleOptionClick(course.price, "full")}
                >
                    Оплата сразу
                </button>
                <button type="button"
                        className="btn payment-option"
                        style={{color: activeBtn === "installment" ? course.color : "#000"}}
                        onClick={() => handleOptionClick("От 10000 в месяц", "installment")}
                >
                    Оплата в рассрочку
                </button>
            </div>

            <div className="course-price"
                 style={{fontSize: activeBtn === "installment" ? "30px" : "39px"}}
            >
                {currentPrice}
            </div>

            <button className="apply-button align-items-center d-flex justify-content-center"
                    style={{backgroundColor: course.color}} onClick={() => {
                const r = inputRef.current?.value;
                        handleOpenModal()
            }}>
                Оставить заявку
            </button>

            <ul className="course-features">
                {course.features.map((feature, index) => (
                    <li key={index} className="feature">
                        <span style={{color: course.color}}>{feature.charAt(0)}</span>
                        {feature.slice(1)}
                    </li>
                ))}
            </ul>

            <div className="driving-hours-btn-wrapper d-flex justify-content-center align-items-center">
                <button className="btn driving-hour-btn" style={{backgroundColor: course.color, opacity: 0.1}}></button>
                <span>{course.drivingHours}</span>
                &nbsp;часов вождения
            </div>
            <input type="text" hidden={true} value={course.title} ref={inputRef} readOnly={true}/>
        </div>
    );
};

export default DrivingCourseCard;