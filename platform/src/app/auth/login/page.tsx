'use client';

import { useCSRFStore, useUserStore } from '@/app/store/store';
import { useApi } from '@/util/api/api';
import { Button, Checkbox, FormControl, FormControlLabel } from '@mui/material';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Login() {
    const { apiPOST } = useApi()
    const user = useUserStore((state) => state.user )
    const setUser = useUserStore((state) => state.setUser )
    const setToken = useCSRFStore((state) => state.setToken)

    const router = useRouter()

    useEffect(() => {
        if (user) {
            router.push('/')
        }
    }, [user])

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
            setUser(res.user)
            if (res.csrfToken) {
                setToken(res.csrfToken);
            }
        })
        
        .finally(() => {
            router.push('/');
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
                        <p className="instruction">Dont have an account? <Link href="/auth/create">Create one here</Link></p>
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
                          type='password'
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          fullWidth
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
                            size='large'
                        >
                            Login
                        </Button>
                        <p className='instruction'><Link href="/auth/forgot">Forgot your password?</Link></p>
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