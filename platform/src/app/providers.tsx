"use client";

import { CssBaseline } from '@mui/material';
import ThemeWrapper from '@/util/wrappers/themeWrapper';
import { CSRFProvider } from '@/util/api/csrfLoader';
import { UserProvider } from '@/util/wrappers/userContext';
import { SnackbarProvider } from '@/util/wrappers/snackbarProvider';
import { Provider } from 'react-redux';
import { store } from './store';

export default function ArcProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeWrapper>
      <Provider store={store}>
        <CssBaseline />
        <CSRFProvider>
          <SnackbarProvider>
            <UserProvider>
              {children}
            </UserProvider>
          </SnackbarProvider>
        </CSRFProvider>
      </Provider>
    </ThemeWrapper>
  );
}