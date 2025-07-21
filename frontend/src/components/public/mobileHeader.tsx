'use client';

import { Button, Menu, MenuItem, IconButton, Drawer, Accordion, AccordionSummary, AccordionDetails, Collapse } from "@mui/material";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

import BurgerIcon from '@mui/icons-material/LunchDining';
import React from "react";
import Link from "next/link";
import AppIcon from "../appIcon";

type openDropdownType = 'primary' | 'secondary' | 'd2x' | 'none';

export default function MobileHeader() {

    const router = useRouter();
    
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const [openDropdown, setOpenDropdown] = useState<openDropdownType>('none')
    const [isPrimaryOpen, setIsPrimaryOpen] = useState(false);
    const [isSecondaryOpen, setIsSecondaryOpen] = useState(false);
    const [isD2XOpen, setIsD2XOpen] = useState(false);

    const handleClick = (route: string) => {
        setIsOpen(false)
        router.push(route)
    }

    return (
        <React.Fragment>
            <Drawer id="public-mobile-header" className="mobile-nav-drawer" open={isOpen} onClose={() => setIsOpen(false)}>
                <div className='header__logo'>
                    <Link href="/">
                        <img src="/global/logo_white.svg" alt="Alter" />
                    </Link>
                </div>
                <nav className="nav">
                    <Button onClick={() => handleClick('/')}>Home</Button>

                    <Button onClick={() => setOpenDropdown('primary')} className={`${openDropdown === 'primary' && 'dropdown-open'}`}>Primary Apps</Button>
                    <Collapse in={openDropdown === 'primary'} className="apps">
                        <Button onClick={() => handleClick('/apps/miru')}>
                            <AppIcon app="miru" size={28} /><p>Miru</p>
                        </Button>
                        <Button onClick={() => handleClick('/apps/yomu')}>
                            <AppIcon app="yomu" size={28} /><p>Yomu</p>
                        </Button>
                        <Button onClick={() => handleClick('/apps/asobu')}>
                            <AppIcon app="asobu" size={28} /><p>Asobu</p>
                        </Button>
                        <Button onClick={() => handleClick('/apps/kau')}>
                            <AppIcon app="kau" size={28} /><p>Kau</p>
                        </Button>
                        <Button onClick={() => handleClick('/apps/tsunagu')}>
                            <AppIcon app="tsunagu" size={28} /><p>Tsunagu</p>
                        </Button>
                    </Collapse>

                    <Button onClick={() => setOpenDropdown('secondary')} className={`${openDropdown === 'secondary' && 'dropdown-open'}`}>Secondary Apps</Button>
                    <Collapse in={openDropdown === 'secondary'} className="apps">
                        <Button onClick={() => handleClick('/apps/iku')}>
                            <AppIcon app="iku" size={28} /><p>Iku</p>
                        </Button>
                        <Button onClick={() => handleClick('/apps/hiku')}>
                            <AppIcon app="hiku" size={28} /><p>Hiku</p>
                        </Button>
                        <Button onClick={() => handleClick('/apps/shiru')}>
                            <AppIcon app="shiru" size={28} /><p>Shiru</p>
                        </Button>
                        <Button onClick={() => handleClick('/apps/kumitateru')}>
                            <AppIcon app="kumitateru" size={28} /><p>Kumitateru</p>
                        </Button>
                        <Button onClick={() => handleClick('/apps/kiku')}>
                            <AppIcon app="kiku" size={28} /><p>Kiku</p>
                        </Button>
                    </Collapse>

                    <Button onClick={() => setOpenDropdown('d2x')} className={`${openDropdown === 'd2x' && 'dropdown-open'}`}>D2X</Button>
                    <Collapse in={openDropdown === 'd2x'}>
                        <Button onClick={() => handleClick('/d2x/about-us')}>About Us</Button>
                        <Button onClick={() => handleClick('/d2x/team')}>Team</Button>
                        <Button onClick={() => handleClick('/d2x/careers')}>Careers</Button>
                    </Collapse>
                </nav>
                <div className='header__cta'>
                    <Button 
                        variant="contained" 
                        color="secondary"
                        onClick={() => handleClick('platform')}
                    >
                        Platforms
                    </Button>
                    {/* <Button variant="outlined" color="secondary">
                        Contact Us
                    </Button> */}
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