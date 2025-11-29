'use client';

import { useCSRFStore, useUserStore } from '@/app/store/store';
import { useApi } from '@/util/api/api';
import { Button, Checkbox, FormControl, FormControlLabel } from '@mui/material';
import TextField from '@mui/material/TextField';
import { url } from 'inspector';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CreateAccount() {
    const { apiPOST } = useApi()
    const router = useRouter()
    const setUser = useUserStore((state) => state.setUser )
    const setToken = useCSRFStore((state) => state.setToken)

    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('');
    const [confirmPasword, setConfirmPassword] = useState<string>('');
    const [arcKey, setArcKey] = useState<string>('')

    const handleCreate = () => {
        apiPOST<any>(
            'account/auth/create/', 
            {
                'form': {
                    'username': username,
                    'email': email,
                    'password': password,
                    'confirm_password': confirmPasword,
                    'arc_key': arcKey
                }
            }
        )
        .then((res) => {
            setUser(res.user)
            if (res.csrfToken) {
                setToken(res.csrfToken);
            }
            router.push('/');
        })
    }
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
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          fullWidth
                        />
                        <TextField
                          id="email"
                          label="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          fullWidth
                        />
                        <TextField
                          id="password"
                          label="Password"
                          value={password}
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
                        <TextField
                          id="arc-key"
                          label="Arcadia Key"
                          value={arcKey}
                          onChange={(e) => setArcKey(e.target.value)}
                          fullWidth
                        />
                        <Button 
                            className='submit'
                            variant='contained'
                            size='large'
                            onClick={() => handleCreate()}
                        >
                            Create
                        </Button>
                        <p className='instruction'><Link href="/auth/login">Already have an account?</Link></p>
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