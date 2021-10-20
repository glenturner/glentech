import React, { useState, ChangeEvent } from "react";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

interface ModalCheckBoxProps {
    name: string;
    label?: string;
    checked?: boolean;
    value?: any;
    onChange?: any;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            userSelect: 'none',
            "& > *": {
                margin: theme.spacing(0.3),
            },
            "& .MuiFormControlLabel-root ": {
                color: '#516f90',
                fontWeight: 'bold',
            },
            "& .MuiCheckbox-colorPrimary.Mui-checked": {
                color: '#516f90',
            },
        },
    })
);


export const ModalCheckbox = (props: ModalCheckBoxProps) => {
    const { label, name, checked, value, onChange } = props;
    const classes = useStyles();
    const [isChecked, setIsChecked] = useState({
        name: checked,
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsChecked({ ...isChecked, [event.target.name]: event.target.checked });
        onChange(event.target.name, event.target.checked);
    };

    return (
        <FormGroup className={classes.root}>
            <FormControlLabel
                control={
                    <Checkbox
                        color="primary"
                        disableRipple={true}
                        checked={isChecked.name}
                        onChange={handleChange}
                        name={name}
                        value={value}
                    />}
                label={label}
            />
        </FormGroup>
    );
}