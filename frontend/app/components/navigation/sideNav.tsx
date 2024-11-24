'use client'

import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { sidebar } from "./sidebarConfig";
import API from "../../util/API";
import Button from '@mui/material/Button'

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

    const handleLogout = () => {
        API.post("user/logout/", {})
        .then((res) => {
            console.log(res)
        })
        .catch((res) => {
            console.log(res)
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
                        <Link className="app-nav" href={item.link} key={index}>
                            <div className="icon-container">
                                {item.icon}
                            </div>
                            {item.name}
                        </Link>
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