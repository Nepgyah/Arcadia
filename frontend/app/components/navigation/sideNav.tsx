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
            {
                sidebarLinks.map((item, index) => (
                    <Link href={item.link} key={index}>
                        {item.name}
                    </Link>
                ))
            }
        </div>
    )
}

export default SideNav;