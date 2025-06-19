'use client'

import { useMediaQuery, useTheme } from "@mui/material";
import { useEffect } from "react";
import MobileHeader from "./mobileHeader";
import DesktopHeader from "./desktopHeader";

export default function HeaderLayout() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {

  }, []);

  return (
    <header className="header">
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
    </header>
  );
}