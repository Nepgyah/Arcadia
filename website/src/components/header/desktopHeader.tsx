import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react";

type dropdownCategory = 'primary' | 'secondary' | 'd2x' | 'resource' | 'none';

export default function DesktopHeader() {

    const router = useRouter();

    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
    const solutionsAnchor = useRef<HTMLElement | null>(null);

    const [isD2XOpen, setIsD2XOpen] = useState(false);
    const d2xAnchor = useRef<HTMLElement | null>(null);

    const [isResourceOpen, setsIsResourceOpen] = useState(false);
    const resourceAnchor = useRef<HTMLElement | null>(null);

    const handleClick = (link: string, handleFunc: (bool: boolean) => void) => {
        router.push(link)
        handleFunc(false)
    }

    return (
        <div className="desktop">
            <div className="misc">
                <div className="wrapper">
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
                <nav className="navigation">
                    <div>
                        <Button variant="text" color="white" onClick={() => router.push('/')}>Home</Button>
                    </div>
                    {/* <div>
                        <Button variant="text" color="white">Apps</Button>
                    </div>
                    <div>
                        <Button variant="text" color="white">D2X</Button>
                    </div>
                    <div>
                        <Button variant="text" color="white">Resources</Button>
                    </div> */}
                </nav>
                <div className="cta-buttons">
                    <Button variant="contained" color="secondary">Platform</Button>
                    <Button variant="text" color="white">Create Account</Button>
                </div>
            </div>
        </div>
    )
}