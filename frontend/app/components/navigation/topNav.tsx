import { Avatar, IconButton } from "@mui/material";
import React from "react";

import AppsIcon from '@mui/icons-material/Apps';

const TopNav = () => {
    return (
        <div className="top-nav">
            <IconButton >
                <Avatar />
            </IconButton>
            <IconButton >
                <AppsIcon />
            </IconButton>
        </div>
    )
}

export default TopNav;