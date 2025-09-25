import Footer from "@/components/footer/footer";
import HeaderLayout from "@/components/header/header_layout";
import type { Metadata } from "next";

import "@/styles/_main.scss";
import { CssBaseline } from "@mui/material";
import ThemeWrapper from "@/components/themeWrapper";

export const metadata: Metadata = {
  title: "Arcadia - Your Otaku Sanctuary",
  description: "Your Otaku Sanctuary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeWrapper>
        <CssBaseline>
          <body>
            <HeaderLayout />
            {children}
            <Footer />
          </body>
        </CssBaseline>
      </ThemeWrapper>
    </html>
  );
}
