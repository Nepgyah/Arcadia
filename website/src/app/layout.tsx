import Footer from "@/components/footer/footer";
import HeaderLayout from "@/components/header/header_layout";
import type { Metadata } from "next";

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
      <body>
        <HeaderLayout />
        {children}
        <Footer />
      </body>
    </html>
  );
}
