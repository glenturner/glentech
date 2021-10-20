import { WindowSize } from "./WIndowSizes";

export class UtilityState {
    toggleAppointmentModal: boolean;
    toggleContactModal: boolean;
    toggleContactSuccessAlert: boolean;
    appWindowSize: WindowSize;
    mobileNavOpen: boolean;

    constructor() {
        this.toggleAppointmentModal = false;
        this.toggleContactModal = false;
        this.toggleContactSuccessAlert = false;
        this.mobileNavOpen = false;
        this.appWindowSize = 'large-display';
    }
}