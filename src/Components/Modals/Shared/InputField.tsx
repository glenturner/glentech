import React, { ChangeEvent, useState } from "react";
import style from "./style.module.scss";
import { ErrorMessage } from "./ErrorMessage";

interface InputFieldProps {
    onChange?: any;
    onBlur?: any;
    value?: any;
    placeholder?: string;
    padding?: string;
    margin?: string;
    subLabel?: string;
    label?: string;
    defaultValue?: any;
    name?: string;
    required?: boolean;
    type?: string;
    errorMessage?: string;
}

export const InputField = (props: InputFieldProps) => {
    const {
        onChange = () => { },
        onBlur = () => { },
        value,
        placeholder,
        padding,
        margin,
        label,
        defaultValue,
        name,
        required,
        type,
        errorMessage,
    } = props;
    let inputRef = null;
    const [inputValue, setInputValue] = useState(defaultValue || value);

    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setInputValue(value);
        onChange(name, value);
    };

    return (
        <div
            // style={{
            //     padding: padding && `${padding}rem`,
            //     margin: margin && `${margin}rem`,
            // }}
            className={style.inputWrapper}
        >
            <span className={style.label}>{label}</span>
            <input
                type={type}
                className={style.inputBox}
                ref={(r) => (inputRef = r)}
                required={required}
                name={name}
                defaultValue={defaultValue}
                placeholder={placeholder}
                value={value}
                onBlur={({ target }) => onBlur(target.name, target.value)}
                onChange={onInputChange}
            />
            {!!errorMessage && <ErrorMessage>This field is required.</ErrorMessage>}
        </div>
    );
};

