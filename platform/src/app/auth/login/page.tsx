'use client';

import { useCSRFStore, useUserStore } from '@/app/store';
import { useApi } from '@/util/api/api';
import { Button, Checkbox, FormControl, FormControlLabel } from '@mui/material';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
    const { apiPOST } = useApi()
    const setUser = useUserStore((state) => state.setUser )
    const setToken = useCSRFStore((state) => state.setToken)

    const router = useRouter()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('');
    const [remember, setRemember] = useState<boolean>(false);

    const handleRemember = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRemember(event.target.checked)
    }

    const login = () => {
        
        apiPOST<any>('account/auth/login/', {
            email: email,
            password: password
        })
        .then((res) => {
            setUser(res)
            router.push('/');
            if (res.csrfToken) {
                setToken(res.csrfToken);
            }
        })
    }
    
    return (
        <div className="auth-wrapper" id="page-auth-login">
            <div className="form">
                <div></div>
                <div className="text">
                    <h1>Login</h1>
                    <p className='note'><b>NOTE:</b> Currently the platform is in development, so account login/creation is disabled. This page does nothing... yet.</p>
                    <div className="form-content">
                        <p className="instruction">Dont have an account? <Link href="/platform/auth/create">Create one here</Link></p>
                        <TextField
                          id="email"
                          label="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                          id="password"
                          label="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <FormControlLabel
                            control={<Checkbox onChange={(e) => setRemember(e.target.checked)} />}
                            checked={remember}
                            label="Remember me"
                            labelPlacement="end"
                        />
                        <Button 
                            className='submit'
                            variant='contained'
                            onClick={() => login()}
                        >
                            Login
                        </Button>
                        <p className='instruction'><Link href="/platform/auth/forgot">Forgot your password?</Link></p>
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
                    <p>Source: Blue Archive</p>
                    <p>Credit: Nexon Games</p>
                </div>
                <img src="/platform/auth/sunaookami-shiroko.jpg" alt="Sunaookami Shiroko" />            
            </div>
        </div>
    )
}