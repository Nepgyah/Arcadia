'use client';
import React, { useEffect } from "react";

import { asobuNav, kauNav, kikuNav, kumitateruNav, mainboard, miruNav, tsunaguNav, url, yomuNav} from "@/data/urls";
import { usePathname } from "next/navigation";
import { App } from "@/types/shared";
import SideNav from "@/components/navigation/sideNav";
import { useMediaQuery, useTheme } from "@mui/material";
import DesktopTopNav from "@/components/navigation/topNav/desktopTopNav";

import "@/styles/_main.scss";
import MobileTopNav from "@/components/navigation/topNav/mobileTopNav";
import ArcBreadcrumb from "@/components/breadcrumb/arcBreadcrumbs";

export interface navInfo {
    'app': App,
    'links': url[]
}

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
    
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
            {isMobile ? <MobileTopNav navObj={nav} /> : <DesktopTopNav />}
            <div id="platform-second-layout">
                {!isMobile && <SideNav navObj={nav} />}
                <div id="platform-content">
                    <ArcBreadcrumb />
                    {children}
                </div>
            </div>
        </div>
    )
}