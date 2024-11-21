'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { sidebar } from "./sidebarConfig";

const SideNav = () => {

    const pathname = usePathname();
    const [sidebarLinks, setSidebarLinks] = useState(sidebar.default)

    useEffect(() => {
        if (pathname.startsWith('/miru')) {
            setSidebarLinks(sidebar.miru)
        } else {
            setSidebarLinks(sidebar.default)
        }
    }, [pathname])

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
                        <Link className="app-nav" href={item.link} key={index}>
                            <div className="icon-container">
                                {item.icon}
                            </div>
                            {item.name}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default SideNav;