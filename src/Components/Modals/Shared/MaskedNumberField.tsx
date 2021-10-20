import React, { ChangeEvent, useState } from "react";
import NumberFormat from "react-number-format";
import style from './style.module.scss';


export const MaskedNumberField = (props: any) => {
    const { label, dense, onChange, name, extraStyles, value, phone, ...restProps } = props;

    const disabledStyle = {
        background: 'transparent'
    }

    const activeStyle = {
        background: 'white',
        // border: '1px solid rgba(100,100,100,0.2)',
    }

    const [inputValue, setInputValue] = useState(value);

    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setInputValue(value);
        onChange(name, value);
    };


    return (
        <div className={style.inputWrapper} style={{ ...(extraStyles ? extraStyles : {}) }}>
            <span className={style.label}>{label}</span>
            <NumberFormat
                onChange={onInputChange}
                name={name}
                value={value}
                className={style.inputBox}
                format="(###) ###-####" mask="_"
                style={{ ...(props.disabled ? disabledStyle : activeStyle) }}
                {...restProps}
            />
        </div>
    )
}
