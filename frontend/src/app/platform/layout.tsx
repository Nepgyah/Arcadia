'use client';

import React from "react";
import { UserProvider } from "@/util/wrappers/userContext";
import { SnackbarProvider } from "@/util/wrappers/snackbarProvider";

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