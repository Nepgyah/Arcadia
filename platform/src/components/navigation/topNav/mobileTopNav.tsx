import { useState } from "react";
import BurgerIcon from '@mui/icons-material/LunchDining';
import ProfileIcon from '@mui/icons-material/AccountCircle';

import Link from "next/link";
import React from "react";
import { Button, Divider, Drawer, IconButton } from "@mui/material";
import { navInfo } from "@/app/(main)/layout";
import { usePathname, useRouter } from "next/navigation";
import { useApi } from "@/util/api/api";

export default function MobileTopNav(
    {
        navObj
    } : {
        navObj: navInfo
    }
) {
    const pathname = usePathname();
    const { apiPOST } = useApi()
    const router = useRouter();

    const [isNavOpen, setIsNavOpen] = useState(false)
    const [isProfileOpen, setIsProfileOpen] = useState(false)

    const isActive = (linkPath: string) => {
        const fullPath = `${linkPath}`;
        if (linkPath === `/${navObj.app}`) {
            return pathname === fullPath;
        }
        return pathname === fullPath || pathname.startsWith(fullPath + "/");
    };
    return (
        <React.Fragment>
            <Drawer className="mobile-nav-drawer" id="left-mobile-drawer" open={isNavOpen} onClose={() => setIsNavOpen(false)}>
                <div className="flex-row flex-row--gap-sm">
                {
                    navObj.links.map((link, index) => {
                        const active = isActive(link.path)
                        return (
                        <Button
                            color="white"
                            className={`${active ? `clr-${navObj.app}-base` : ''}`}
                            fullWidth 
                            key={index}
                            onClick={() => router.push(`${link.path}`)}
                        >
                            {link.name}
                        </Button>
                        )
                    })
                }
                </div>
                <div id="secondary-nav">
                    <Divider sx={{ backgroundColor: 'white'}} />
                    <p className="m-t-md clr-txt-light">Copyright Arcadia 2025</p>
                </div>
            </Drawer>
            <Drawer className="mobile-nav-drawer" id="right-mobile-drawer" anchor="right" open={isProfileOpen} onClose={() => setIsProfileOpen(false)}>
                <p className="clr-txt-light">The profile feature is under construction, stay tuned for unpdates!</p>
            </Drawer>
            <div id="platform-header" className="mobile-header">
                <div id="burger" className="center-vertical">
                    <IconButton onClick={() => setIsNavOpen(!isNavOpen)}>
                        <BurgerIcon  />
                    </IconButton>
                </div>
                <Link href="/" className="logo">
                    <img src="/global/logo_white.svg" alt="Alter" />
                </Link>
                <div id="profile" className="center-vertical">
                    <IconButton onClick={() => setIsProfileOpen(!isProfileOpen)}>
                        <ProfileIcon  />
                    </IconButton>
                </div>
            </div>
        </React.Fragment>
    )
}