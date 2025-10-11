'use client';
import React from "react";

import "@/styles/_main.scss";
import { asobuNav, kauNav, kikuNav, kumitateruNav, mainboard, miruNav, tsunaguNav, url, yomuNav} from "@/data/urls";
import { usePathname } from "next/navigation";
import { App } from "@/types/shared";
import TopNav from "@/components/navigation/topNav";
import SideNav from "@/components/navigation/sideNav";

export interface navInfo {
    'app': App,
    'links': url[]
}
export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const getNav = (): navInfo => {
        if (pathname.startsWith('/miru')) return { 'app': 'miru', 'links': miruNav};
        if (pathname.startsWith('/yomu')) return { 'app': 'yomu', 'links': yomuNav};
        if (pathname.startsWith('/asobu')) return { 'app': 'asobu', 'links': asobuNav};
        if (pathname.startsWith('/kiku')) return { 'app': 'kiku', 'links': kikuNav};
        if (pathname.startsWith('/kau')) return { 'app': 'kau', 'links': kauNav};
        if (pathname.startsWith('/tsunagu')) return { 'app': 'tsunagu', 'links': tsunaguNav};
        if (pathname.startsWith('/kumitateru')) return { 'app': 'kumitateru', 'links': kumitateruNav};
        // fallback to main platform nav
        return { 'app': 'dashboard', 'links': mainboard};
    };

  const nav = getNav();
    return (
        <div id="platform-layout">
            <TopNav />
            <div id="platform-second-layout">
                <SideNav navObj={nav} />
                <div id="platform-content">
                    {children}
                </div>
            </div>
        </div>
    )
}