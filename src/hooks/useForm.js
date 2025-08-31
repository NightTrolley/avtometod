import {useState} from "react";

const useForm = (initialValues, validate) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleSubmit = (callback) => async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const validationErrors = validate ? validate(values) : {};
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            await callback(values);
        }

        setIsSubmitting(false);
    };

    return {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit
    };
};

export default useForm
