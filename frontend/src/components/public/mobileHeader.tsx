'use client';

import { Button, Menu, MenuItem, IconButton, Drawer, Accordion, AccordionSummary, AccordionDetails, Collapse } from "@mui/material";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

import BurgerIcon from '@mui/icons-material/LunchDining';
import React from "react";
import Link from "next/link";

export default function MobileHeader() {

    const router = useRouter();
    
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const [isAppsOpen, setIsAppsOpen] = useState(false);
    const [isD2XOpen, setIsD2XOpen] = useState(false);

    const handleClick = (route: string) => {
        setIsOpen(false)
        router.push(route)
    }

    return (
        <React.Fragment>
            <Drawer className="mobile-nav-drawer" open={isOpen} onClose={() => setIsOpen(false)}>
                <div className='header__logo'>
                    <Link href="/">
                        <img src="/global/logo_white.svg" alt="Alter" />
                    </Link>
                </div>
                <nav className="nav">
                    <Button onClick={() => handleClick('/')}>Home</Button>
                    <Button onClick={() => setIsAppsOpen(!isAppsOpen)}>Apps</Button>
                    <Collapse in={isAppsOpen}>
                        <Button onClick={() => handleClick('/apps/miru')}>Miru</Button>
                        <Button onClick={() => handleClick('/apps/yomu')}>Yomu</Button>
                        <Button onClick={() => handleClick('/apps/asobu')}>Asobu</Button>
                        <Button onClick={() => handleClick('/apps/kau')}>Kau</Button>
                        <Button onClick={() => handleClick('/apps/tsunagu')}>Tsunagu</Button>
                    </Collapse>
                    <Button onClick={() => setIsD2XOpen(!isD2XOpen)}>D2X</Button>
                    <Collapse in={isD2XOpen}>
                        <Button onClick={() => handleClick('/d2x/team')}>Team</Button>
                    </Collapse>
                </nav>
                <div className='header__cta'>
                    <Button 
                        variant="contained" 
                        color="secondary"
                        onClick={() => handleClick('/auth/login')}
                    >
                        Login
                    </Button>
                    <Button variant="outlined" color="secondary">
                        Contact Us
                    </Button>
                </div>
            </Drawer>
            <div className='header__wrapper header__wrapper--mobile'>
                <div className='header__logo'>
                    <a href="/">
                        <img src="/global/logo_white.svg" alt="Alter" />
                    </a>
                </div>
                <div className="burger">
                    <IconButton 
                        aria-label="burger-icon" 
                        onClick={() => setIsOpen(true)}
                        size="large"
                    >
                        <BurgerIcon />
                    </IconButton>
                </div>
            </div>
        </React.Fragment>
    )
}