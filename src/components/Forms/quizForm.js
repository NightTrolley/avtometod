import React from 'react';
import {useForm} from "react-hook-form";
import {sendFormData} from "../../hooks/formSendHook";
import {ErrorMessage} from "@hookform/error-message";
import SecondaryButton from "../Buttons/secondaryButton/secondaryButton";
import {useQuiz} from "../../Context/quizContext";

const QuizForm = ({button_text}) => {

    const {quizData} = useQuiz();

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting}
    } = useForm({
        criteriaMode: "all",
        defaultValues: {
            "your-tel": "+7"
        },
    });


    const onSubmit = async (data) => {
        const allData = {
            ...quizData,
            ...data
        }
        await sendFormData(allData)
        const successBlock = document.querySelector(".quiz-success-send")
        document.querySelector(".quiz-form")?.classList?.add("d-none")
        successBlock?.classList?.remove("d-none")
        successBlock?.classList?.add("d-block")
    }

    return (
        <form className={"how-to-start-form d-flex flex-column"}
              onSubmit={handleSubmit(onSubmit)}
        >
            <div className="">
                <input className="col-12"
                       {...register("your-name", {
                           required: "Это обязательное поле",
                           pattern: {
                               value: /^[А-ЯЁа-яё]+$/,
                               message: "Поле может содержать только кириллицу"
                           },
                           minLength: {
                               value: 2,
                               message: "Поле должно содержать не менее 2 символов"
                           },
                           maxLength: {
                               value: 20,
                               message: "Поле не должно содержать больше 20 символов"
                           }
                       })}
                       placeholder={"Имя"}
                />
                <ErrorMessage
                    errors={errors}
                    name="your-name"
                    render={({messages}) => {
                        return messages
                            ? Object.entries(messages).map(([type, message]) => (
                                <p key={type} className="input-error">{message}</p>
                            ))
                            : null;
                    }}
                />
            </div>
            <div className="">
                <input className="col-12"
                       maxLength={12}
                       {...register("your-tel", {
                           required: "Это обязательное поле",
                           pattern: {
                               value: /^\+[1-9]\d{0,3}[\s-]?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,9}$/,
                               message: "Поле может содержать только цифры"
                           },
                           minLength: {
                               value: 12,
                               message: "Поле должно содержать не менее 12 символов"
                           },
                           maxLength: {
                               value: 12,
                               message: "Поле не должно содержать больше 20 символов"
                           }
                       })}
                />
                <ErrorMessage
                    errors={errors}
                    name="your-tel"
                    render={({messages}) => {
                        return messages
                            ? Object.entries(messages).map(([type, message]) => (
                                <p key={type} className={"input-error"}>{message}</p>
                            ))
                            : null;
                    }}
                />

            </div>
            <SecondaryButton text={button_text} type={"submit"} isSubmitting={isSubmitting}/>
            <input type="text" hidden={true} value={"quiz"} {...register("form-name")}/>
        </form>
    );
};

export default QuizForm;