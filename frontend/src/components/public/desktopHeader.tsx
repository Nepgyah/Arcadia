'use client';

import { Button, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import AppIcon from "../appIcon";

type openDropdownType = 'primary' | 'secondary' | 'd2x' | 'resource' | 'none';

export default function DesktopHeader() {

    const router = useRouter();

    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
    const solutionsAnchor = useRef<HTMLElement | null>(null);

    const [isD2XOpen, setIsD2XOpen] = useState(false);
    const d2xAnchor = useRef<HTMLElement | null>(null);

    const [isResourceOpen, setsIsResourceOpen] = useState(false);
    const resourceAnchor = useRef<HTMLElement | null>(null);

    useEffect(() => {
        solutionsAnchor.current = document.getElementById('solutions-btn');
        d2xAnchor.current = document.getElementById('d2x-btn');
        resourceAnchor.current = document.getElementById('resource-btn')
    }, []);

    const handleClick = (link: string, handleFunc: (bool: boolean) => void) => {
        router.push(link)
        handleFunc(false)
    }
    return (
        <div className='header__wrapper header__wrapper--desktop'>
            <div className='header__logo'>
                <a href="/">
                    <img src="/global/logo_white.svg" alt="Alter" />
                </a>
            </div>
            <div className='nav'>
                <div>
                    <Button className='nav__main' variant='text' color="white" onClick={() => router.push('/')}>
                        Home
                    </Button>
                </div>
                <div>
                    <Button 
                        variant='text' color="white"
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
                        <div className="primary">
                            <MenuItem onClick={() => handleClick('/apps/miru', setIsSolutionsOpen)}><AppIcon app="miru" /><p>Miru</p></MenuItem>
                            <MenuItem onClick={() => handleClick('/apps/yomu', setIsSolutionsOpen)}><AppIcon app="yomu" /><p>Yomu</p></MenuItem>
                            <MenuItem onClick={() => handleClick('/apps/asobu', setIsSolutionsOpen)}><AppIcon app="asobu" /><p>Asobu</p></MenuItem>
                            <MenuItem onClick={() => handleClick('/apps/kau', setIsSolutionsOpen)}><AppIcon app="kau" /><p>Kau</p></MenuItem>
                            <MenuItem onClick={() => handleClick('/apps/tsunagu', setIsSolutionsOpen)}><AppIcon app="tsunagu" /><p>Tsunagu</p></MenuItem>
                        </div>
                        <div className="secondary">
                            <MenuItem onClick={() => handleClick('/apps/iku', setIsSolutionsOpen)}><AppIcon app="iku" /><p>Iku</p></MenuItem>
                            <MenuItem onClick={() => handleClick('/apps/hiku', setIsSolutionsOpen)}><AppIcon app="hiku" /><p>Hiku</p></MenuItem>
                            <MenuItem onClick={() => handleClick('/apps/shiru', setIsSolutionsOpen)}><AppIcon app="shiru" /><p>Shiru</p></MenuItem>
                            <MenuItem onClick={() => handleClick('/apps/kumitateru', setIsSolutionsOpen)}><AppIcon app="kumitateru" /><p>Kumitateru</p></MenuItem>
                            <MenuItem onClick={() => handleClick('/apps/kiku', setIsSolutionsOpen)}><AppIcon app="kiku" /><p>Kiku</p></MenuItem>
                        </div>
                    </Menu>
                </div>
                <div>
                    <Button 
                        variant='text' color="white"
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
                        <MenuItem onClick={() => handleClick('/d2x/about-us', setIsD2XOpen)}>About Us</MenuItem>
                        <MenuItem onClick={() => handleClick('/d2x/team', setIsD2XOpen)}>Team</MenuItem>
                        <MenuItem onClick={() => handleClick('/d2x/careers', setIsD2XOpen)}>Careers</MenuItem>
                    </Menu>
                </div>
                <div>
                    <Button 
                        variant='text' color="white"
                        className='nav__main' 
                        id='resource-btn' 
                        onClick={() => setsIsResourceOpen(true)}
                    >
                        Resource
                    </Button>
                    <Menu
                        id='resource-dropdown'
                        anchorEl={resourceAnchor.current}
                        open={isResourceOpen}
                        onClose={() => setsIsResourceOpen(false)}
                        disableScrollLock
                    >
                        <MenuItem onClick={() => handleClick('/resource/case-study', setsIsResourceOpen)}>Case Study</MenuItem>
                    </Menu>
                </div>
            </div>
            <div className='header__cta'>
                <Button 
                    variant="contained" 
                    color="secondary"
                    onClick={() => router.push('/platform')}
                >
                    Platform
                </Button>
                {/* <Button variant="outlined" color="secondary">
                    Contact Us
                </Button> */}
            </div>
        </div>
    );
}