'use client';

import Sidebar from "@/components/platform/sidebar";
import Topbar from "@/components/platform/topbar";
import React from "react";

import "@/styles/platform/main.scss";
import { mainboard} from "@/data/platform/urls";
import { usePathname } from "next/navigation";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const getNav = () => {
        // if (pathname.startsWith('/platform/miru')) return miruNav;
        // if (pathname.startsWith('/platform/asobu')) return asobuNav;
        // fallback to main platform nav
        return mainboard;
    };

  const nav = getNav();
    return (
        <div id="platform-layout">
            <Topbar />
            <div id="platform-second-layout">
                <Sidebar links={nav} />
                <div id="platform-content">
                    {children}
                </div>
            </div>
        </div>
    )
}