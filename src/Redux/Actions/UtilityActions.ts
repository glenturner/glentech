import * as Actions from '../Constants';

export const ToggleAppointmentModal = (bool: boolean) => ({ type: Actions.TOGGLE_APPOINTMENT_MODAL, bool })
export const ToggleContactModal = (bool: boolean) => ({ type: Actions.TOGGLE_CONTACT_MODAL, bool })
export const ToggleContactSuccessAlert = (bool: boolean) => ({ type: Actions.TOGGLE_CONTACT_SUCCESS_ALERT, bool })

export const ToggleMobileNavigation = (bool: boolean) => ({ type: Actions.TOGGLE_MOBILE_NAV, bool })