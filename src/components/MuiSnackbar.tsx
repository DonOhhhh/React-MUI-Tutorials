import { Alert, AlertProps, Button, Snackbar } from "@mui/material";
import React, { forwardRef, useState } from "react";

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
    function SnackbarAlert(props, ref) {
        return <Alert elevation={6} ref={ref} {...props} />;
    }
);

export const MuiSnackbar = () => {
    const [open, setOpen] = useState(false);
    const handleClose = (
        _event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") return;
        setOpen(false);
    };
    return (
        <>
            <Button onClick={() => setOpen(true)}>Submit</Button>
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <SnackbarAlert onClose={handleClose} severity="success">
                    Form submitted successfully!
                </SnackbarAlert>
            </Snackbar>
        </>
    );
};
