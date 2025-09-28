"use client";

import { CssBaseline } from '@mui/material';
import ThemeWrapper from '@/util/wrappers/themeWrapper';
import { CSRFProvider } from '@/util/api/csrfLoader';
import { UserProvider } from '@/util/wrappers/userContext';
import { SnackbarProvider } from '@/util/wrappers/snackbarProvider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeWrapper>
      <CssBaseline />
      <CSRFProvider>
        <SnackbarProvider>
          <UserProvider>
            {children}
          </UserProvider>
        </SnackbarProvider>
      </CSRFProvider>
    </ThemeWrapper>
  );
}