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

function SideNav({ appNavigation } : { appNavigation : SideNavItem[]}){

    const pathname = usePathname();
    const [sidebarLinks, setSidebarLinks] = useState(appNavigation)

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
            {/* <div className="global-home">
                <Link href="/">
                    Home
                </Link>
            </div> */}
            <div className="app-nav-container">
                {
                    sidebarLinks.map((item, index) => (
                        <MenuItem item={item} key={index}/>
                    ))
                }
            </div>
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
        <div className="nav-section">
            {
                item.subMenuItems ? (
                    <React.Fragment>
                        <div className="primary-nav has-sub-nav" onClick={() => toggleSubMenu()}>
                            <div className="item-container hoverable">
                                    {item.icon}
                                <p className="nav-name">
                                {item.name}
                                </p>
                            </div>
                        </div>

                        <div className={`secondary-nav ${subMenuOpen ? "show" : "hide"}`}>
                        {
                            item.subMenuItems.map((subItem, index) => (
                                <div className="item-container hoverable" key={index}>
                                    <Link href={subItem.path}>
                                        <div className="nav-name">
                                            {subItem.name}
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                        </div>
                    </React.Fragment>
                ) : (
                    <div className="hoverable">
                        <Link href={item.path}>
                            <div className="primary-nav">
                                <div className="item-container">
                                    <div className="nav-icon">
                                        {item.icon}
                                    </div>
                                    <div className="nav-name">
                                        {item.name}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            }
        </div>

)
}