'use client';

import Link from "next/link";

import AppsIcon from '@mui/icons-material/Apps';

import { Avatar, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { useUser } from "@/util/wrappers/userContext";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useApi } from "@/util/api/api";
import { useUserStore } from "@/app/store";

type openStatus = 'app' | 'profile' | 'none';

export default function DesktopTopNav() {
    const user = useUserStore((state) => state.user);
    const setNull = useUserStore((state) => state.setNull);
    const { apiPOST } = useApi();
    const router = useRouter();

    const appAnchor = useRef<HTMLElement | null>(null);
    const profileAnchor = useRef<HTMLElement | null>(null);
    const [open, setOpen] = useState<openStatus>('none')

    const handleOpen = (status: openStatus) => {
        setOpen(status)
    }

    const routeTo = (route: string) => {
        router.push(route)
        setOpen('none')
    }

    useEffect(() => {
        profileAnchor.current = document.getElementById('profile');
        appAnchor.current = document.getElementById('app');
    }, [])

    const handleLogout = () => {
        apiPOST<any>('account/auth/logout/', {})
        .then((res) => {
            setNull();
            router.push('/')
        })
    }
    return (
        <div id="platform-header" className="desktop-header">
            <div className="logo">
                <Link href="/">
                    <img src="/global/logo_white.svg" alt="Alter" />
                </Link>
            </div>
            <div className="links">
                <Tooltip title="App Menu">
                    <IconButton
                        id="app"
                        onClick={() => handleOpen('app')}
                    >
                        <AppsIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Account Settings">
                    <IconButton
                        id="profile"
                        onClick={() => handleOpen('profile')}
                    >
                        <Avatar src={user ? `/storage/preset-profile/${user?.picture_preset}.webp` : ''}/>
                    </IconButton>
                </Tooltip>
                {!user ?
                    <Menu 
                        id="profile-menu"
                        anchorEl={profileAnchor.current} 
                        open={open === 'profile'}
                        onClose={() => setOpen('none')}
                    >
                        <MenuItem onClick={() => routeTo('/auth/login')}>
                            Login
                        </MenuItem>
                    </Menu>
                :
                    <Menu 
                        id="profile-menu"
                        anchorEl={profileAnchor.current} 
                        open={open === 'profile'}
                        onClose={() => setOpen('none')}
                    >
                        <MenuItem onClick={() => routeTo('/platform/profile')}>
                            My Profile
                        </MenuItem>
                        <MenuItem onClick={() => handleLogout()}>
                            Logout
                        </MenuItem>
                    </Menu>
                }
                <Menu 
                    id="app-menu"
                    anchorEl={appAnchor.current} 
                    open={open === 'app'}
                    onClose={() => setOpen('none')}
                >
                    <MenuItem onClick={() => routeTo('/platform/miru')}>
                        Miru
                    </MenuItem>
                    <MenuItem onClick={() => routeTo('/platform/yomu')}>
                        Yomu
                    </MenuItem>
                    <MenuItem onClick={() => routeTo('/platform/asobu')}>
                        Asobu
                    </MenuItem>
                    <MenuItem onClick={() => routeTo('/platform/kau')}>
                        Kau
                    </MenuItem>
                    <MenuItem onClick={() => routeTo('/platform/tsunagu')}>
                        Tsunagu
                    </MenuItem>
                </Menu>
            </div>
        </div>
    )
}

function apiPOST<T>(arg0: string, arg1: {}) {
    throw new Error("Function not implemented.");
}
