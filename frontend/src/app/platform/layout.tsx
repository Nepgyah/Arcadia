import React from "react";
import Topbar from "../../components/platform/topbar";
import Sidebar from "../../components/platform/sidebar";

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <Topbar />
        <Sidebar />
        <main>{children}</main>
    </>
  );
}