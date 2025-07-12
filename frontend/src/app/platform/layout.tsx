'use client';

import React from "react";
import Topbar from "../../components/platform/topbar";
import Sidebar from "../../components/platform/sidebar";
import { getPossibleUser } from "@/util/session";
import { UserProvider } from "@/util/userContext";
import { SnackbarProvider } from "@/components/snackbarProvider";

export default function PlatformShell({ children }: { children: React.ReactNode }) {

  return (
    <body>
      <SnackbarProvider>
        <UserProvider>
            {children}
        </UserProvider>
      </SnackbarProvider>
    </body>
  );
}