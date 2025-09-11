import React, {useState} from 'react';
import {set, useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";
import SecondaryButton from "../Buttons/secondaryButton/secondaryButton";
import "./main.form.css"
import {useQuiz} from "../../Context/quizContext";
import axios from "axios";
import {formSendHook, sendFormData} from "../../hooks/formSendHook";
import {InputMask} from "@react-input/mask";

const MainFormComponent = ({button_text}) => {

    const [isSubmitting, setIsSubmitting]  = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        setIsSubmitting(true)
        if (await sendFormData(data)) {
            setIsSubmitting(false)
        }

    }

    return (
        <form className={"how-to-start-form d-flex flex-column"}
              onSubmit={onSubmit}
        >
                <input
                    className="col-12"
                    required={true}
                    placeholder={"Имя"}
                    type={'text'}
                    name={"your-name"}
                />
                <InputMask
                    mask={"+7 (___) ___-__-__"}
                    replacement={{ _: /\d/ }}
                    placeholder={"+7"}
                    className="col-12"
                    required={true}
                    name={"your-phone"}
                    minLenght={12}
                />
            <SecondaryButton text={button_text} type={"submit"} isSubmitting={isSubmitting}/>
        </form>
    );
};

export default MainFormComponent;