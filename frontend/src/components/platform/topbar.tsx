'use client';

import Link from "next/link";

import AppsIcon from '@mui/icons-material/Apps';

import "@/styles/platform/components/topNav.scss";
import { Avatar, IconButton } from "@mui/material";
import { useUser } from "@/util/userContext";

export default function Topbar() {
    const {
        user
    } = useUser()

    const test = () => {
        console.log(user)
    }
    return (
        <div id="platform-header">
            <div className="logo">
                <Link href="/platform">
                    <img src="/global/logo_white.svg" alt="Alter" />
                </Link>
            </div>
            <div className="links">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <Avatar src={user ? `/auth/profile-pics/profile_${user?.picture_preset}.webp` : ''} onClick={() => test()} />
            </div>
        </div>
    )
}