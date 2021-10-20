import React, { useMemo } from 'react'
import { Flex } from '../Flex';
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../Redux/Models';
import { WindowSizes } from '../../Redux/Models/Utility/WIndowSizes';
import { Schedule } from '@material-ui/icons';
import { ToggleAppointmentModal } from '../../Redux/Actions';

const MobileAppointmentButtonRounded = () => {
    const dispatch = useDispatch();
    return (
        <Flex onClick={() => dispatch(ToggleAppointmentModal(true))} center style={{ cursor: 'pointer', zIndex: 99, boxShadow: '0px 0px 50px -5px rgba(0,0,0,0.5)', borderRadius: 50, padding: '20px', position: 'fixed', bottom: '10px', right: '15px', background: '#201E50' }}>
            <Schedule style={{ color: 'white' }} />
        </Flex>
    )
}

const LargeAppointmentButton = () => {
    const dispatch = useDispatch();
    return (
        <Flex onClick={() => dispatch(ToggleAppointmentModal(true))} center style={{ cursor: 'pointer', zIndex: 99, boxShadow: '0px 0px 50px -5px rgba(0,0,0,0.5)', borderRadius: 15, padding: '15px 20px', position: 'fixed', bottom: '10px', right: '15px', background: '#201E50' }}>
            <h4 style={{ color: 'white', marginRight: 10 }}>Request an appointment</h4>
            <Schedule style={{ color: 'white' }} />
        </Flex>
    );
};


export const StaticAppointmentButton = () => {
    const appSize = useSelector((s: AppState) => s.utility.appWindowSize)
    const buttonStyles = useMemo(() => {
        switch (appSize) {
            case WindowSizes.large: return <LargeAppointmentButton />
            case WindowSizes.regular: return <LargeAppointmentButton />
            case WindowSizes.small: return <LargeAppointmentButton />
            case WindowSizes.tablet: return <MobileAppointmentButtonRounded />
            case WindowSizes.smallTablet: return <MobileAppointmentButtonRounded />
            case WindowSizes.mobile: return <MobileAppointmentButtonRounded />
            case WindowSizes.smallMobile: return <MobileAppointmentButtonRounded />
            case WindowSizes.tinyMobile: return <MobileAppointmentButtonRounded />
            default: return <LargeAppointmentButton />
        }
    }, [appSize])

    return (
        <>{buttonStyles}</>
    );
};
