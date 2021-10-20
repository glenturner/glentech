import React, { ChangeEvent, useState } from "react";
import Select from 'react-select';
import style from './style.module.scss';

const customStyles = {
    valueContainer: (provided: any, state: any) => ({
        ...provided,
        // backgroundColor: '#f5f8fa',
        backgroundColor: '#fff',
        borderColor: '#cbd6e2',
        borderRadius: '3px',
        boxSizing: 'border-box',
    }),
    control: (provided: any, state: any) => ({
        ...provided,
        // backgroundColor: '#f5f8fa',
        borderColor: '#cbd6e2',
        borderRadius: '3px',
        minHeight: '50px',
        marginTop: '0.5rem',
    }),
    indicatorsContainer: (provided: any, state: any) => ({
        ...provided,
        // backgroundColor: '#f5f8fa',
    }),
    indicatorSeparator: (provided: any, state: any) => ({
        ...provided,
        display: 'none'
    }),
    dropdownIndicator: (provided: any, state: any) => ({
        ...provided,
        color: '#00d0e4',
    }),
    placeholder: (provided: any, state: any) => ({
        ...provided,
        color: '#516f90',
        fontSize: '16px',
        fontWeight: '500',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
    })
}

interface DropdownProps {
    name?: string;
    label?: string;
    margin?: number;
    padding?: number;
    placeholder?: string;
    value?: any;
    options?: any;
    onChange?: any;
    type?: string;
}

/**
 * @interface DropdownProps
 * @props name, label, options, placeholder, value, padding, margin, tooltipPlacement, tooltipContent, onChange
 */
export const Dropdown = (props: DropdownProps) => {
    const {
        name,
        label,
        options,
        placeholder,
        value,
        onChange,
        type,
    } = props;

    return (
        <div className={style.inputWrapper}>
            <span className={style.label}>{label}</span>
            <Select
                styles={customStyles}
                className={style.dropDownWrapper}
                value={value}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                options={options}
                // type={type}
                theme={theme => ({
                    ...theme,
                    colors: {
                        ...theme.colors,
                        primary25: '#a0dee8',
                        primary: '#00d0e4',
                        primary75: '#a0dee8',
                        primary50: '#00d0e4',
                    },
                })}
            />
        </div>
    );
};
