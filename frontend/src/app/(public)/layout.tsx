import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";

import '../../styles/public/_main.scss'

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}