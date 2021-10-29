import React from "react";
import { Button, Typography } from "@material-ui/core";
import { CloseRounded } from "@material-ui/icons";
import { Flex } from "../../Flex";
import { AnimatedModal } from "../AnimatedModal";
import style from './style.module.scss';

interface ModalWrapperProps {
    isOpen: boolean;
    toggleModal?: (nextOpenState: boolean) => void; // Optional: it should be the caller's perogative on when the modal closes
    children: any;
    label?: any;
    height?: string | number;
    width?: string | number;
    closerStyle?: "done-button" | "button" | "x-icon" | "none";
    closerLabel?: string;
    manageScroll?: boolean;
}

export const ModalWrapper = (props: ModalWrapperProps) => {
    const {
        isOpen,
        toggleModal = () => { },
        children,
        label,
        height = "auto",
        width = "750px",
        closerStyle = "x-icon",
        closerLabel = null,
        manageScroll = true,
    } = props;

    return (
        <AnimatedModal open={isOpen} onClose={() => toggleModal(false)}>
            <div
                className={style.wrapper}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    background: "#fcfffc",
                    height,
                    width,
                    borderRadius: "1px",
                    padding: "15px",
                    overflow: "hidden",
                    maxHeight: "calc(100vh - 100px)",
                    boxShadow: '0 0 3rem 1rem rgb(95 95 95 / 25%)',
                }}
            >
                <Flex
                    justify="space-between"
                    align="center"
                    style={{
                        padding: '10px',
                    }}
                >
                    <Typography variant="h5" style={{ color: "#516f90" }}>
                        {label || ""}
                    </Typography>
                    {closerStyle === "x-icon" ? (
                        <div onClick={() => toggleModal(false)}>
                            <CloseRounded style={{ color: "#000000", cursor: 'pointer' }} />
                        </div>
                    ) : null}
                </Flex>
                <div
                    className={style.children}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        flex: 1,
                        overflowY: manageScroll ? "scroll" : "hidden",
                        marginTop: 10,
                    }}
                >
                    {children}
                </div>
                {closerStyle === "done-button" || closerStyle === "button" ? (
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => toggleModal(false)}
                    >
                        {closerLabel || "Done"}
                    </Button>
                ) : null}
            </div>
        </AnimatedModal>
    );
};
