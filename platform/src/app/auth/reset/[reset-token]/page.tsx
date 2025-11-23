'use client';

import { Button, Checkbox, FormControl, FormControlLabel } from '@mui/material';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import { useState } from 'react';

export default function ResetPassword() {

    const [pasword, setPassword] = useState<string>('');
    const [confirmPasword, setConfirmPassword] = useState<string>('');

    return (
        <div className="auth-wrapper" id="page-auth-reset">
            <div className="image">
                <div className='citation'>
                    <p>Source: Genshin Impact</p>
                    <p>Credit: Hoyoverse</p>
                </div>
                <img src="/platform/auth/xilonen.jpg" alt="Xilonen" />
            </div>
            <div className="form">
                <div></div>
                <div className="text">
                    <h1>Reset Password</h1>
                    <p className='note'><b>NOTE:</b> Currently the platform is in development, so account login/creation is disabled. This page does nothing... yet.</p>
                    <div className="form-content">
                        <TextField
                          id="password"
                          label="Password"
                          value={pasword}
                          onChange={(e) => setPassword(e.target.value)}
                          fullWidth
                        />
                        <TextField
                          id="confirm-password"
                          label="Confirm Password"
                          value={confirmPasword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          fullWidth
                        />
                        <Button 
                            className='submit'
                            variant='contained'
                        >
                            Reset
                        </Button>
                    </div>
                </div>
                <div className="logo">
                    <img src="/global/logo/logo-dark.svg" alt="Arcadia logo dark version" />
                </div>
            </div>
        </div>
    )
}