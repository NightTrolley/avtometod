import React from 'react';
import {useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";
import SecondaryButton from "../Buttons/secondaryButton/secondaryButton";
import "./main.form.css"

const MainFormComponent = ({button_text}) => {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting}
    } = useForm({
        criteriaMode: "all",
        defaultValues: {
            phone: "+7"
        },
    });

    const onSubmit = async (data) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert("Форма отправлена!")
    }

    return (
        <form className={"how-to-start-form d-flex flex-column"}
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="">
                <input className="col-12"
                       {...register("name", {
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
                    name="name"
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
                       {...register("phone", {
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
                               value: 20,
                               message: "Поле не должно содержать больше 20 символов"
                           }
                       })}
                />
                <ErrorMessage
                    errors={errors}
                    name="phone"
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
        </form>
    );
};

export default MainFormComponent;