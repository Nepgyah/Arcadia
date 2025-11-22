"use client";

import { CssBaseline } from '@mui/material';
import ThemeWrapper from '@/util/wrappers/themeWrapper';
import { SnackbarProvider } from '@/util/wrappers/snackbarProvider';

export default function ArcProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeWrapper>
        <CssBaseline />
          <SnackbarProvider>
              {children}
          </SnackbarProvider>
    </ThemeWrapper>
  );
}