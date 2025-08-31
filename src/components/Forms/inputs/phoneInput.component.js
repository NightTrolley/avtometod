import React from 'react';
import {Field, Form} from "houseform";
import {z} from "zod";

const PhoneInputComponent = () => {
    return (
        <Field
            name="username"
            initialValue={""}
            onChangeValidate={z
                .string()
                .min(3, "Your username must have at least three characters")}
        >
            {({value, setValue, onBlur, errors}) => (
                <>
                    <input
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onBlur={onBlur}
                        placeholder="Enter username"
                    />
                    {errors.map((error) => (
                        <p key={error.message}>{error.message}</p>
                    ))}                </>
            )}
        </Field>
    );
};

export default PhoneInputComponent;