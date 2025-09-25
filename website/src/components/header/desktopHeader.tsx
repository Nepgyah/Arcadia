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
                    <a href="/">
                        <img src="/logo/logo_white.svg" alt="Alter" />
                    </a>
                </div>
            </div>
        </div>
    )
}