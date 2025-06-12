import { ThemeProvider } from '@mui/material/styles';
import type { Metadata } from 'next';
import ThemeWrapper from '../components/themeWrapper';
import { CssBaseline } from '@mui/material';

export const metadata: Metadata = {
  title: 'Arcadia',
  description: 'Welcome to Arcadia.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeWrapper>
      <CssBaseline>
        {children}
      </CssBaseline>
    </ThemeWrapper>
  );
}
