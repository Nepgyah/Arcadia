'use client';
import Button from '@mui/material/Button'
import '@static/css/pages/profile/login/login.css';
import TextField from '@mui/material/TextField'
import { useState } from 'react';

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              'email': 'admin@d2x.com',
              'password': 'arcadia',
            }),
            credentials: 'include',
        });

        if (response.ok) {
            window.location.href = "/"
        }
    }
    
    return (
        <div id='login'>
            <div className='image centered'>
                <img  src='\static\images\homepage_hero.svg'/>
            </div>
            <div className='form centered'>
            <img  src='\static\images\logo_dark.svg'/>
                <TextField
                    id="email"
                    label="Email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    fullWidth
                />
                <TextField
                    id="password"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                />
                <Button variant="contained" color="primary" onClick={() => handleLogin()}>
                    Login
                </Button>
            </div>
        </div>
    )
}