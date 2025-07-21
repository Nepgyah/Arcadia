import type { Metadata } from 'next';
import ThemeWrapper from '../util/wrappers/themeWrapper';
import { CssBaseline } from '@mui/material';

import "@/styles/_master.scss";
import { CSRFProvider } from '@/util/api/csrfLoader';

export const metadata: Metadata = {
  title: 'Arcadia - Otaku Santuary',
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
            <CSRFProvider>
              {children}
            </CSRFProvider>
        </html>
      </CssBaseline>
    </ThemeWrapper>
  );
}
