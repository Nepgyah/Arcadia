'use client';

import { useMediaQuery, useTheme } from "@mui/material";
import { useEffect } from "react";
import DesktopHeader from "./desktopHeader";
import MobileHeader from "./mobileHeader";

export default function HeaderLayout() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {

  }, []);

  return (
    <header id="arcadia-header">
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
    </header>
  );
}