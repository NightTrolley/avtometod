import React from 'react';
import {validateForm} from "../../utils/validateForm";
import useForm from "../../hooks/useForm";
import SecondaryButton from "../Buttons/secondaryButton/secondaryButton";
import PhoneInput from "./inputs/phoneInput.component";

const MainFormComponent = () => {

    const initialValues = {
        name: '',
        phone: '',
    };

    const {values, errors, isSubmitting, handleChange, handleSubmit} = useForm(
        initialValues,
        validateForm
    );

    const onSubmit = async (formData) => {
        try {
            // Имитация отправки на сервер
            console.log('Отправка данных:', formData);
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Здесь можно добавить реальный API вызов
            // const response = await fetch('/api/submit-form', {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify(formData),
            // });

            alert('Форма успешно отправлена!');
        } catch (error) {
            console.error('Ошибка при отправке формы:', error);
            alert('Произошла ошибка при отправке формы');
        }
    };

    return (
        <form className="d-flex flex-column how-to-start-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex flex-column">
                <input
                    type="text"
                    name="name"
                    placeholder="Имя"
                    value={values.name}
                    onChange={handleChange}
                />
                {errors.name}
            </div>
            <div className="d-flex flex-column">
                <PhoneInput/>
                {errors.phone}
            </div>
            <SecondaryButton text={"Бесплатная консультация"} isSubmitting={isSubmitting}
                             type={"submit"}/>
        </form>
    );
};

export default MainFormComponent;