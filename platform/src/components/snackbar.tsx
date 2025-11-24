'use client';

import { useSnackbarStore } from "@/app/store/store";
import { Alert, Snackbar } from "@mui/material";

export default function ArcSnackbar() {
    const open = useSnackbarStore((state) => state.open)
    const severity = useSnackbarStore((state) => state.severity)
    const message = useSnackbarStore((state) => state.message)
    const closeSnackbar = useSnackbarStore((state => state.closeSnackbar))
    
    return (
        <Snackbar  open={open} autoHideDuration={3000} onClose={closeSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}>
            <Alert onClose={closeSnackbar} severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    )
}