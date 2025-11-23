'use client';

import { Button, Checkbox, FormControl, FormControlLabel } from '@mui/material';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import { useState } from 'react';

export default function ForgotPassword() {

    const [email, setEmail] = useState<string>('')

    return (
        <div className="auth-wrapper" id="page-auth-forgot">
            <div className="image">
                <div className='citation'>
                    <p>Source: Honkai Star Rail</p>
                    <p>Credit: Hoyoverse</p>
                </div>
                <img src="/platform/auth/castorice.jpg" alt="Castorice" />
            </div>
            <div className="form">
                <div></div>
                <div className="text">
                    <h1>Forgot Your Password</h1>
                    <p className='note'><b>NOTE:</b> Currently the platform is in development, so account login/creation is disabled. This page does nothing... yet.</p>
                    <div className="form-content">
                        <p className='instruction'>Enter you email address and we will send you a link to reset your password</p>
                        <TextField
                          id="email"
                          label="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          fullWidth
                        />
                        <Button 
                            className='submit'
                            variant='contained'
                            size='large'
                        >
                            Send
                        </Button>
                        <p className='instruction'><Link href="/auth/login">Remember Your Password?</Link></p>
                    </div>
                </div>
                <div className="logo">
                    <Link href="/">
                        <img src="/global/logo/logo-dark.svg" alt="Arcadia logo dark version" />    
                    </Link>
                </div>
            </div>
        </div>
    )
}