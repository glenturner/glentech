import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Flex } from "../../Flex";
import { ModalWrapper } from "../ModalWrapper";
import { ReusableStaticImage } from "../../ReusableStaticImage";
import { AppLogo, Avatar } from "../../../Assets";
import { ToggleContactModal, ToggleContactSuccessAlert } from '../../../Redux/Actions';
import { InputField, MaskedNumberField, MultiLineTextField } from '../Shared';
import { AppState } from '../../../Redux/Models';
import { Button } from "../../Button";
import { SendOutlined } from "@material-ui/icons";
import style from './style.module.scss';
// import { SendContactEmailAction } from "../../../Redux/Actions/EmailActions";

export interface ContactModalProps {
    data: any;
}

export const ContactModal = (props: ContactModalProps) => {
    const dispatch = useDispatch();
    const isOpen = useSelector((s: AppState) => s.utility.toggleContactModal);
    const defaultValues = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
    };
    const [values, setValues] = useState<{ [key: string]: any }>(
        defaultValues
    );
    const [canSubmit, setCanSubmit] = useState(false);
    const requiredValues = ["firstName", "lastName", "email", "phoneNumber", "message"];
    const checkIfCanSubmit = () => requiredValues.every((v: string) => values[v]);

    const updateValues = (name: string, value: any) =>
        setValues({ ...values, [name]: value });


    const onSubmit = async (e: any) => {
        e.preventDefault();
        setCanSubmit(false)
        // await dispatch(SendContactEmailAction(values.firstName, values.lastName, values.email, values.phoneNumber, values.message))
        setCanSubmit(true)
        dispatch(ToggleContactModal(false))
        dispatch(ToggleContactSuccessAlert(true))
    };

    useEffect(() => {
        setCanSubmit(checkIfCanSubmit());
    }, [values]);

    return (
        <ModalWrapper
            width="350px"
            isOpen={isOpen}
            label={<Flex className={style.header}><ReusableStaticImage image={AppLogo} width={3} /></Flex>}
            toggleModal={() => dispatch(ToggleContactModal(false))}
        >
            <Flex
                column
                center
                style={{ padding: '20px' }}
            >
                <InputField
                    onChange={updateValues}
                    type="text"
                    name="firstName"
                    label="First Name"
                />
                <InputField
                    onChange={updateValues}
                    type="text"
                    name="lastName"
                    label="Last Name"
                />
                <InputField
                    onChange={updateValues}
                    type="email"
                    name="email"
                    label="Email"
                />
                <MaskedNumberField
                    onChange={updateValues}
                    name="phoneNumber"
                    label="Phone Number"
                />
                <MultiLineTextField
                    onChange={updateValues}
                    name="message"
                    label="Message"
                />
                <Flex style={{ flex: 1, width: '100%' }} justify="flex-end">
                    <Button
                        className={style.button_submit}
                        IconComponent={SendOutlined}
                        onClick={onSubmit}
                        disabled={!canSubmit}
                    >
                        <strong>Send</strong>
                    </Button>
                </Flex>
            </Flex>
        </ModalWrapper>
    );
};
