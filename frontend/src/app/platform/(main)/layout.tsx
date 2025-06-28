import Sidebar from "@/components/platform/sidebar";
import Topbar from "@/components/platform/topbar";
import React from "react";

export default async function PlatformLayout({ children }: { children: React.ReactNode }) {

    return (
        <React.Fragment>
            <Topbar />
            <Sidebar />
            <div id="platform-content">
                {children}
            </div>
        </React.Fragment>
    )
}