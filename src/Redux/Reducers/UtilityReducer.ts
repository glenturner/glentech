import * as Actions from "../Constants";
import { UtilityState } from "../Models/Utility";

export const UtilityReducer = (state: UtilityState = new UtilityState(), action: any) => {
    switch (action.type) {
        case Actions.TOGGLE_APPOINTMENT_MODAL:
            return { ...state, toggleAppointmentModal: action.bool }
        case Actions.TOGGLE_CONTACT_MODAL:
            return { ...state, toggleContactModal: action.bool }
        case Actions.UPDATE_WINDOW_SIZE:
            return { ...state, appWindowSize: action.size }
        case Actions.TOGGLE_CONTACT_SUCCESS_ALERT:
            return { ...state, toggleContactSuccessAlert: action.bool }
        case Actions.TOGGLE_MOBILE_NAV:
            return { ...state, mobileNavOpen: action.bool }
        default:
            return state;
    }
};
