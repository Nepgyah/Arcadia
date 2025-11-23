
import type { Metadata } from 'next';
import ThemeWrapper from '../util/wrappers/themeWrapper';
import { CssBaseline } from '@mui/material';

import AccountFetcher from '@/components/account/accountFetch';
import TokenFetcher from '@/components/account/tokenFetch';
import ArcSnackbar from '@/components/snackbar';

export const metadata: Metadata = {
  title: 'Arcadia Platform',
  description: 'Welcome to Arcadia.',
  icons: {
    icon: '/icon1.png'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
    <ThemeWrapper>
      <TokenFetcher />
      <AccountFetcher />
      <CssBaseline>
        <html lang="en">
          <body>
            <ArcSnackbar />
              {children}
          </body>
        </html>
      </CssBaseline>
    </ThemeWrapper>
    </>
  );
}
