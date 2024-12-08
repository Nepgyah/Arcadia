import { Avatar, IconButton } from "@mui/material";
import React from "react";

import AppsIcon from '@mui/icons-material/Apps';
import Link from "next/link";

const TopNav = () => {
    return (
        <div className="top-bar">
            <div className="logo">
                <Link href="/">
                    <img src="../../static/images/logo_white.svg" />
                </Link>
            </div>
            <div className="navigation">
                <IconButton >
                    <AppsIcon />
                </IconButton>
                <IconButton >
                    <Avatar />
                </IconButton>
            </div>
        </div>
    )
}

export default TopNav;