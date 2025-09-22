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

    const track = ({data, inputType,value, selectionStart, selectionEnd}) => {
        if (inputType === 'insert' && selectionStart <= 1) {
            const _data = data.replace(/[^\d]/g, '');
            return /^[78]/.test(_data) ? `7${_data.slice(1)}` : /^[0-69]/.test(_data) ? `7${_data}` : data;
        }

        if (inputType !== 'insert' && selectionStart <= 1 && selectionEnd < value.length) {
            return selectionEnd > 2 ? '7' : selectionEnd === 2 ? false : data;
        }

        return data
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
                    mask={"+_ (___) ___-__-__"}
                    replacement={{ _: /\d/ }}
                    placeholder={"+7"}
                    className="col-12"
                    required={true}
                    name={"your-phone"}
                    minLenght={12}
                    track={track}
                />
            <SecondaryButton text={button_text} type={"submit"} isSubmitting={isSubmitting}/>
        </form>
    );
};

export default MainFormComponent;