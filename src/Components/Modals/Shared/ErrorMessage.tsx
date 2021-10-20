import { ErrorOutline } from "@material-ui/icons";
import React, { useMemo } from "react";
import { Flex } from "../../Flex";
import style from "./style.module.scss";

export interface ErrorMessageProps {
    children: any;
}

const GeneralApiMessage = "This field is required.";

export const ErrorMessage = (props: ErrorMessageProps) => {
    const content = useMemo(
        () =>
            typeof props.children === "string" ? props.children : GeneralApiMessage,
        [props.children]
    );
    return (
        <Flex align="center" className={style.errorMessageWrapper}>
            <ErrorOutline
                style={{
                    marginRight: 10, width: "100%",
                    color: "#FE4602",
                    fontWeight: 500,
                    margin: "1rem 0",
                }}
            />
            {content}
        </Flex>
    );
};
