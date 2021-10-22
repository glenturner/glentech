import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { AppState } from '../../../Redux/Models';
import { ToggleContactSuccessAlert } from '../../../Redux/Actions';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';

export const SuccessAlert = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((s: AppState) => s.utility.toggleContactSuccessAlert);

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch(ToggleContactSuccessAlert(false))
    };

    return (
        <Stack sx={{ width: '35%' }} spacing={2}>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={isOpen}
                autoHideDuration={6000}
                onClose={handleClose}>
                <Alert onClose={() => { dispatch(ToggleContactSuccessAlert(false)) }} variant="filled" severity="success">
                    Message successfully sent -- I'll contact you shortly!
                </Alert>
            </Snackbar>
        </Stack>

    );
};
