import React from "react";
import { Modal, Slide, Backdrop } from "@material-ui/core";

export const AnimatedModal = (props: {
    onClose?: (e: any) => any;
    timeout?: number;
    open?: boolean;
    children: any;
}) => {
    const { onClose = () => { }, timeout = 500, open = false, children } = props;
    return (
        <Modal
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout }}
            open={open}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            onClose={onClose}
        >
            <Slide direction="up" in={open} style={{ outline: "none" }}>
                <div>{children}</div>
            </Slide>
        </Modal>
    );
};
