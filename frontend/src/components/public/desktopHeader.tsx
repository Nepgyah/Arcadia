'use client';

import { Button, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function DesktopHeader() {

    const router = useRouter();

    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
    const solutionsAnchor = useRef<HTMLElement | null>(null);

    const [isResourcesOpen, setIsResourcesOpen] = useState(false);
    const resourceAnchor = useRef<HTMLElement | null>(null);

    useEffect(() => {
        solutionsAnchor.current = document.getElementById('solutions-btn');
        resourceAnchor.current = document.getElementById('resources-btn');
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
                    <Button className='nav__main' variant='text'>
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
            </div>
            <div className='header__cta'>
                <Button variant="contained" color="secondary">
                    Login
                </Button>
                <Button variant="outlined" color="secondary">
                    Contact Us
                </Button>
            </div>
        </div>
    );
}