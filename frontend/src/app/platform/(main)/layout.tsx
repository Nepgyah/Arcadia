'use client';

import Sidebar from "@/components/platform/sidebar";
import Topbar from "@/components/platform/topbar";
import React from "react";

import "@/styles/platform/platform-main.scss";
import { asobuNav, kauNav, kumitateruNav, mainboard, miruNav, tsunaguNav, url, yomuNav} from "@/data/urls";
import { usePathname } from "next/navigation";
import { App } from "@/types/shared";

export interface navInfo {
    'app': App,
    'links': url[]
}
export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const getNav = (): navInfo => {
        if (pathname.startsWith('/platform/miru')) return { 'app': 'miru', 'links': miruNav};
        if (pathname.startsWith('/platform/yomu')) return { 'app': 'yomu', 'links': yomuNav};
        if (pathname.startsWith('/platform/asobu')) return { 'app': 'asobu', 'links': asobuNav};
        if (pathname.startsWith('/platform/kau')) return { 'app': 'kau', 'links': kauNav};
        if (pathname.startsWith('/platform/tsunagu')) return { 'app': 'tsunagu', 'links': tsunaguNav};
        if (pathname.startsWith('/platform/kumitateru')) return { 'app': 'kumitateru', 'links': kumitateruNav};
        // fallback to main platform nav
        return { 'app': 'dashboard', 'links': mainboard};
    };

  const nav = getNav();
    return (
        <div id="platform-layout">
            <Topbar />
            <div id="platform-second-layout">
                <Sidebar navObj={nav} />
                <div id="platform-content">
                    {children}
                </div>
            </div>
        </div>
    )
}