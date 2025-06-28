import React from "react";
import Topbar from "../../components/platform/topbar";
import Sidebar from "../../components/platform/sidebar";
import { getPossibleUser } from "@/util/session";
import { UserProvider } from "@/util/userContext";

export default async function PlatformShell({ children }: { children: React.ReactNode }) {
  const user = await getPossibleUser();

  return (
    <UserProvider user={user}>
        <main>{children}</main>
    </UserProvider>
  );
}