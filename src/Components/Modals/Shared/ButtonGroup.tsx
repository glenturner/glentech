import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Flex } from "../../Flex";

interface ButtonGroupProps {
    size?: "small" | "medium" | "large";
    disableFocusRipple?: boolean;
    disableRipple?: boolean;
    exclusive?: boolean;
    default?: any;
    name?: string;
    noMinWidth?: boolean;
    onClick?: (value: any) => void;
    items: { label: string; value?: any }[];
    label?: any;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            "& > *": {
                margin: theme.spacing(1),
            },
            "& .MuiToggleButton-root": {
                border: "1px solid #cbd6e2",
                fontSize: "11px",
                color: '#516f90',
                fontWeight: 600,
            },
            "& .MuiToggleButton-root.Mui-selected": {
                background: "#d3dde6",
                color: '#012244',
            },
        },
    })
);

export const ButtonGroup = (props: ButtonGroupProps) => {
    const classes = useStyles();
    //   const [alignment, setAlignment] = useState("left");
    const [selected, setSelected] = useState(props.default);

    const handleSelection = (e: any, newValue: string | null) => {
        if (newValue !== null) {
            if (props.onClick) props.onClick(newValue);
            setSelected(newValue);
        }
    };

    return (
        <Flex
            column
            align="flex-start"
            className={classes.root}
            style={{ minWidth: props.noMinWidth ? 0 : 400 }}
        >
            {props.label && (
                <span
                    style={{ margin: "20px 0 20px 0" }}
                >
                    {props.label}
                </span>
            )}
            <ToggleButtonGroup
                value={selected}
                exclusive
                style={{ marginLeft: 0, marginRight: 0 }}
                onChange={handleSelection}
                size={props.size ? props.size : "small"}
            >
                {props.items?.map((i: any) => (
                    <ToggleButton
                        name={props.name}
                        disableRipple={true}
                        value={i.value}
                    >
                        {i.label}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </Flex>
    );
};
