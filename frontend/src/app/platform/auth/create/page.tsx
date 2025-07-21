'use client';

import { Button, Checkbox, FormControl, FormControlLabel } from '@mui/material';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import { useState } from 'react';

export default function CreateAccount() {

    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('')
    const [pasword, setPassword] = useState<string>('');
    const [confirmPasword, setConfirmPassword] = useState<string>('');

    return (
        <div className="auth-wrapper" id="page-auth-create">
            <div className="form">
                <div></div>
                <div className="text">
                    <h1>Signup</h1>
                    <p className='note'><b>NOTE:</b> Currently the platform is in development, so account login/creation is disabled. This page does nothing... yet.</p>
                    <div className="form-content">
                        <TextField
                          id="username"
                          label="Username"
                          value={email}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                          id="email"
                          label="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                          id="password"
                          label="Password"
                          value={pasword}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <TextField
                          id="confirm-password"
                          label="Confirm Password"
                          value={confirmPasword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <Button 
                            className='submit'
                            variant='contained'
                        >
                            Create
                        </Button>
                        <p className='instruction'><Link href="/platform/auth/login">Already have an account?</Link></p>
                    </div>
                </div>
                <div className="logo">
                    <Link href="/">
                        <img src="/global/logo/logo-dark.svg" alt="Arcadia logo dark version" />
                    </Link>
                </div>
            </div>
            <div className="image">
                <div className='citation'>
                    <p>Source: Uma Musume Pretty Derby</p>
                    <p>Credit: Cygames Games</p>
                </div>
                <img src="/platform/auth/uma-musume.jpg" alt="Uma Musume" />
            </div>
        </div>
    )
}