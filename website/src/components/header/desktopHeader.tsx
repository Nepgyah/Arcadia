import { D2XUrls, PrimaryAppUrls, SecondaryAppUrls } from "@/lib/data/urls";
import { Button, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react";
import AppIcon from "../appIcon";

const PLATFORM_URL = process.env.NEXT_PLATFORM_URL
type dropdownCategory = 'primary' | 'secondary' | 'd2x' | 'resource' | 'none';

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
        <div className="desktop">
            <div className="misc">
                <div className="wrapper">
                    <p>We are slowly migrating previous created pages. Thank you for your understanding.</p>
                    {/* <Link href='/'>FAQ</Link>
                    <Link href='/'>Contact Us</Link>
                    <Link href='/'>Legal</Link> */}
                </div>
            </div>
            <div className="main-content">
                <div className='logo'>
                    <Link href="/">
                        <img src="/logo/logo_white.svg" alt="Arcadia Logo - White Text" />
                    </Link>
                </div>
                <nav className="nav">
                    <div>
                        <Button variant="text" color="white" onClick={() => router.push('/')}>Home</Button>
                    </div>
                    {/* <div>
                        <Button 
                            variant="text" 
                            color="white"
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
                            {
                                PrimaryAppUrls.map((url) => (
                                    <MenuItem key={url.name} onClick={() => handleClick(url.path, setIsSolutionsOpen)}>
                                        <AppIcon app={url.name} />
                                        <p>{url.name}</p>
                                    </MenuItem>
                                ))
                            }
                        </div>
                        <div className="secondary">
                            {
                                SecondaryAppUrls.map((url) => (
                                    <MenuItem key={url.name} onClick={() => handleClick(url.path, setIsSolutionsOpen)}>
                                        <AppIcon app={url.name} />
                                        <p>{url.name}</p>
                                    </MenuItem>
                                ))
                            }
                        </div>
                    </Menu>
                    </div> */}
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
                            {
                                D2XUrls.map((url) => (
                                    <MenuItem key={url.name} onClick={() => handleClick(url.path, setIsD2XOpen)}>{url.name}</MenuItem>
                                ))
                            }
                        </Menu>
                    </div>
                    {/* <div>
                        <Button variant="text" color="white">Resources</Button>
                    </div> */}
                </nav>
                <div className="cta-buttons">
                    <a href={PLATFORM_URL} target="_blank">
                    <Button variant="contained" color="secondary">To Apps</Button>
                    </a>
                    {/* <Button variant="text" color="white">Create Account</Button> */}
                </div>
            </div>
        </div>
    )
}