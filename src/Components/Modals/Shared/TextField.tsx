import React, { ChangeEvent, useState } from "react";
import TextField from '@material-ui/core/TextField';
import { Flex } from "../../Flex";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";


interface TextFieldProps {
    onChange?: any;
    onBlur?: any;
    value?: any;
    placeholder?: string;
    label?: string;
    name?: string;
    tableField?: boolean;
}
// .MuiOutlinedInput-notchedOutline 
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            width: '100%',
            backgroundColor: '#fff',
            '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#7510F7',
            },
            '& .MuiOutlinedInput-root.Mui-focused': {
                borderColor: '#7510F7',
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#7510F7',
                },
            },
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#cbd6e2',
            },
            '& > label': {
                color: '#516f90'
            },
            '& label.Mui-focused': {
                color: '#516f90',
            },
        },
    })
);

export const MultiLineTextField = (props: TextFieldProps) => {
    const {
        onChange = () => { },
        onBlur = () => { },
        value,
        placeholder,
        label,
        name,
    } = props;
    const [inputValue, setInputValue] = useState(value);

    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setInputValue(value);
        onChange(name, value);
    };
    const classes = useStyles();
    return (
        <Flex style={{ width: '100%', margin: '0.6rem 0', userSelect: 'none' }}>
            <TextField
                multiline
                variant="outlined"
                onChange={onInputChange}
                onBlur={({ target }) => onBlur(target.name, target.value)}
                name={name}
                value={value}
                className={classes.formControl}
                id="multi-textfield"
                label={label}
                placeholder={placeholder}
            />
        </Flex>
    );
};
