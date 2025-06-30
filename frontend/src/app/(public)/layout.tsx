import React from "react";
import Header from "../../components/public/header";
import Footer from "../../components/public/footer";

import '../../styles/public/public-main.scss'
import Head from "next/head";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
      <body id="public-body">
        <Header />
        <main className="content">{children}</main>
        <Footer />
      </body>
  );
}