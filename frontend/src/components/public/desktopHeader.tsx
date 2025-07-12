'use client';

import { Button, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function DesktopHeader() {

    const router = useRouter();

    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
    const solutionsAnchor = useRef<HTMLElement | null>(null);

    const [isD2XOpen, setIsD2XOpen] = useState(false);
    const d2xAnchor = useRef<HTMLElement | null>(null);

    useEffect(() => {
        solutionsAnchor.current = document.getElementById('solutions-btn');
        d2xAnchor.current = document.getElementById('d2x-btn');
    }, []);

    return (
        <div className='header__wrapper header__wrapper--desktop'>
            <div className='header__logo'>
                <a href="/">
                    <img src="/global/logo_white.svg" alt="Alter" />
                </a>
            </div>
            <div className='nav'>
                <div>
                    <Button className='nav__main' variant='text' onClick={() => router.push('/')}>
                        Home
                    </Button>
                </div>
                <div>
                    <Button 
                        className='nav__main' 
                        id='solutions-btn' 
                        onClick={() => setIsSolutionsOpen(true)}
                    >
                        Apps
                    </Button>
                    <Menu
                        id='solutions-dropdown'
                        anchorEl={solutionsAnchor.current}
                        open={isSolutionsOpen}
                        onClose={() => setIsSolutionsOpen(false)}
                        disableScrollLock
                    >
                        <MenuItem onClick={() => router.push('/apps/miru')}>Miru</MenuItem>
                        <MenuItem onClick={() => router.push('/apps/yomu')}>Yomu</MenuItem>
                        <MenuItem onClick={() => router.push('/apps/asobu')}>Asobu</MenuItem>
                        <MenuItem onClick={() => router.push('/apps/kau')}>Kau</MenuItem>
                        <MenuItem onClick={() => router.push('/apps/tsunagu')}>Tsunagu</MenuItem>
                    </Menu>
                </div>
                <div>
                    <Button 
                        className='nav__main' 
                        id='d2x-btn' 
                        onClick={() => setIsD2XOpen(true)}
                    >
                        D2X
                    </Button>
                    <Menu
                        id='d2x-dropdown'
                        anchorEl={d2xAnchor.current}
                        open={isD2XOpen}
                        onClose={() => setIsD2XOpen(false)}
                        disableScrollLock
                    >
                        <MenuItem onClick={() => router.push('/d2x/about-us')}>About Us</MenuItem>
                        <MenuItem onClick={() => router.push('/d2x/team')}>Team</MenuItem>
                        <MenuItem onClick={() => router.push('/d2x/careers')}>Careers</MenuItem>
                    </Menu>
                </div>
            </div>
            <div className='header__cta'>
                <Button 
                    variant="contained" 
                    color="secondary"
                    onClick={() => router.push('/platform/auth/login')}
                >
                    Login
                </Button>
                {/* <Button variant="outlined" color="secondary">
                    Contact Us
                </Button> */}
            </div>
        </div>
    );
}