import type { Metadata } from 'next';
import ThemeWrapper from '../components/themeWrapper';
import { CssBaseline } from '@mui/material';

import "@/styles/_master.scss";

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
            {/* <CSRFLoader /> */}
            {children}
        </html>
      </CssBaseline>
    </ThemeWrapper>
  );
}
