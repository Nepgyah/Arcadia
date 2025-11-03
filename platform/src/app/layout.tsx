
import type { Metadata } from 'next';
import ThemeWrapper from '../util/wrappers/themeWrapper';
import { CssBaseline } from '@mui/material';

import { CSRFProvider } from '@/util/api/csrfLoader';
import { UserProvider } from '@/util/wrappers/userContext';
import { SnackbarProvider } from '@/util/wrappers/snackbarProvider';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'Arcadia Platform',
  description: 'Welcome to Arcadia.',
  icons: {
    icon: '/icon1.png'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Wraps the entire project, include things that are absolutely
  // Essential to both sides of the project

  return (
    <ThemeWrapper>
      <CssBaseline>
        <html lang="en">
          <body>
            <Providers>
              {children}
            </Providers>
          </body>
        </html>
      </CssBaseline>
    </ThemeWrapper>
  );
}
