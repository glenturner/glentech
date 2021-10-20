import React, { useMemo } from 'react'
import { Button } from './Button';
import { TrendingFlatOutlined } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { AppState } from '../../Redux/Models';
import { WindowSizes } from "../../Redux/Models/Utility/WIndowSizes";
import { useSelector } from 'react-redux';
import { ToggleAppointmentModal } from '../../Redux/Actions';
export interface RequestAppointmentButtonProps {
  eventTag?: string;
  onClick?: (e?: any) => any;
  theme?: "callToActionBlack" | "callToActionWhite";
  style?: any
}

export const RequestAppointmentButton = (props: RequestAppointmentButtonProps) => {
  const dispatch = useDispatch();
  const appSize = useSelector((s: AppState) => s.utility.appWindowSize)
  const handleClick = (e: any) => {
    console.log("Request Appt Clicked => ", props.eventTag)
    dispatch(ToggleAppointmentModal(true));
    props.onClick && props.onClick();
  }

  const buttonStyles = useMemo(() => {
    switch (appSize) {
      case WindowSizes.mobile:
      case WindowSizes.smallMobile:
      case WindowSizes.tinyMobile: return { fontSize: 15, padding: '8px 16px' }
      default: return { fontSize: 20, padding: '10px 30px' }
    }
  }, [appSize])

  return (
    <Button
      // @ts-ignore
      IconComponent={({ style, ...props }) => <TrendingFlatOutlined {...props} style={{ ...style, fontSize: 30 }} />}
      theme={props.theme ? props.theme : "callToActionBlack"}
      onClick={handleClick}
      containerStyle={{ padding: buttonStyles.padding, zIndex: 1, borderWidth: '3px', ...props.style }}
      labelStyle={{ fontSize: buttonStyles.fontSize }}
    >
      Request an Appointment
    </Button>
  )
}
