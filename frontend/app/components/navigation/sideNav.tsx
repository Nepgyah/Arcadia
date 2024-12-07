'use client'

import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import API from "../../util/API";
import Button from '@mui/material/Button'
import { miruNavigation, asobuNavigation, defaultNavigation } from "./sidebarConfig";

interface SideNavItem {
    name: string;
    path: string;
    icon?: React.ReactNode;
    submenu?: boolean;
    subMenuItems?: SideNavItem[]
}

const SideNav = () => {

    const pathname = usePathname();
    const [sidebarLinks, setSidebarLinks] = useState(defaultNavigation)

    useEffect(() => {
        if (pathname.startsWith('/miru')) {
            setSidebarLinks(miruNavigation);
        } else if(pathname.startsWith('/asobu')) {
            setSidebarLinks(asobuNavigation);
        } else {
            setSidebarLinks(defaultNavigation);
        }
    }, [pathname])

    const handleLogout = () => {
        API.post("user/logout/", {})
        .then((res) => {
            console.log(res);
        })
        .catch((res) => {
            console.log(res);
        })
        .finally(() => {
            redirect("http://127.0.0.1:8000/")
        })
    }

    return (
        <div className="side-nav">
            <div className="global-home">
                <Link href="/">
                    Home
                </Link>
            </div>
            <div className="app-nav-container">
                {
                    sidebarLinks.map((item, index) => (
                        <MenuItem item={item} key={index}/>
                    ))
                }
            </div>
            <Button variant="text" color="primary" onClick={handleLogout}>
               logout
            </Button>
        </div>
    )
}

export default SideNav;

function MenuItem({item} : { item : SideNavItem}) {
    const pathname = usePathname();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    
    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    }

    return (
        <Link className="app-nav" href={item.path}>
            <div className="icon-container">
                {item.icon}
            </div>
            {item.name}
        </Link>
)
}