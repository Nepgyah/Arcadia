import Link from "next/link";
import { Button, Menu, MenuItem, IconButton, Drawer, Accordion, AccordionSummary, AccordionDetails, Collapse } from "@mui/material";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

import BurgerIcon from '@mui/icons-material/LunchDining';
import React from "react";
import { D2XUrls, PrimaryAppUrls, ResourceUrls, SecondaryAppUrls } from "@/lib/data/urls";
import AppIcon from "../appIcon";

const PLATFORM_URL = process.env.NEXT_PLATFORM_URL

type openDropdownType = 'primary' | 'secondary' | 'd2x' | 'resource' | 'none';

export default function MobileHeader() {

    const router = useRouter();
    
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const [openDropdown, setOpenDropdown] = useState<openDropdownType>('none')

    const handleClick = (route: string) => {
        setIsOpen(false)
        router.push(route)
        setOpenDropdown('none')
    }

    return (
        <React.Fragment>
            <Drawer id="public-mobile-header" className="mobile-nav-drawer" open={isOpen} onClose={() => setIsOpen(false)}>
                <div className='header__logo'>
                    <Link href="/">
                        <img src="/logo/logo_white.svg" alt="Alter" />
                    </Link>
                </div>
                <nav className="nav">
                    <Button onClick={() => handleClick('/')}>Home</Button>

                    {/* <Button onClick={() => setOpenDropdown('primary')} className={`${openDropdown === 'primary' && 'dropdown-open'}`}>Primary Apps</Button>
                    <Collapse in={openDropdown === 'primary'} className="apps">
                        {
                            PrimaryAppUrls.map((url) => (
                                <Button key={url.name} onClick={() => handleClick(url.path)}>
                                    <AppIcon app={url.name} size={28} /><p>{url.name}</p>
                                </Button>
                            ))   
                        }
                    </Collapse>

                    <Button onClick={() => setOpenDropdown('secondary')} className={`${openDropdown === 'secondary' && 'dropdown-open'}`}>Secondary Apps</Button>
                    <Collapse in={openDropdown === 'secondary'} className="apps">
                        {
                            SecondaryAppUrls.map((url) => (
                                <Button key={url.name} onClick={() => handleClick(url.path)}>
                                    <AppIcon app={url.name} size={28} /><p>{url.name}</p>
                                </Button>
                            ))
                        }
                    </Collapse> */}

                    <Button onClick={() => setOpenDropdown('d2x')} className={`${openDropdown === 'd2x' && 'dropdown-open'}`}>D2X</Button>
                    <Collapse in={openDropdown === 'd2x'}>
                        {
                            D2XUrls.map((url) => (
                                <Button key={url.name} onClick={() => handleClick(url.path)}>{url.name}</Button>
                            ))
                        }
                    </Collapse>

                    {/* <Button onClick={() => setOpenDropdown('resource')} className={`${openDropdown === 'resource' && 'dropdown-open'}`}>Resources</Button>
                    <Collapse in={openDropdown === 'resource'}>
                        {
                            ResourceUrls.map((url) => (
                                <Button key={url.name} onClick={() => handleClick(url.path)}>{url.name}</Button>
                            ))
                        }
                    </Collapse> */}
                </nav>
                <div className='header__cta'>
                    <a href='https://arcadia-inky.vercel.app' target="_blank">
                        <Button 
                            variant="contained" 
                            color="secondary"
                        >
                            To Apps
                        </Button>
                    </a>
                    {/* <Button variant="outlined" color="secondary">
                        Contact Us
                    </Button> */}
                </div>
            </Drawer>
            <div className="mobile">
                <div className="wrapper">
                    <div className='logo'>
                        <Link href="/">
                            <img src="/logo/logo_white.svg" alt="Arcadia Logo - White Text" />
                        </Link>
                    </div>
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