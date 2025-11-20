
import type { Metadata } from 'next';
import ThemeWrapper from '../util/wrappers/themeWrapper';
import { CssBaseline } from '@mui/material';

import ArcProvider from './providers';

export const metadata: Metadata = {
  title: 'Arcadia Platform',
  description: 'Welcome to Arcadia.',
  icons: {
    icon: '/icon1.png'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Wraps the entire project, include things that are absolutely

  return (
    <ThemeWrapper>
      <CssBaseline>
        <html lang="en">
          <body>
            <ArcProvider>
              {children}
            </ArcProvider>
          </body>
        </html>
      </CssBaseline>
    </ThemeWrapper>
  );
}
