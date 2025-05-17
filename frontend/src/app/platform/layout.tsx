import React from "react";
import Topbar from "./components/topbar";
import Sidebar from "./components/sidebar";

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <Topbar />
        <Sidebar />
        <main>{children}</main>
    </>
  );
}