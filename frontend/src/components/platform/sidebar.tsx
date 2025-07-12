'use client';

import { url } from "@/data/platform/urls"
import "@/styles/platform/components/sideNav.scss"
import { apiPOST } from "@/util/api";
import { useUser } from "@/util/userContext";
import { Button, Divider } from "@mui/material"
import { useRouter } from "next/navigation";
import React from "react";

export default function Sidebar({ links }: { links: url[] }) {
    const {
        user,
        setUser
    } = useUser()

    const router = useRouter();

    const handleLogout = () => {
        apiPOST<any>('account/auth/logout/', {})
        .then((res) => {
            setUser(res.user);
            router.push('/platform')
        })
    }
    return (
        <div id="platform-sidebar">
            {
                links.map((link, index) => (
                    <Button 
                        fullWidth 
                        key={index}
                        onClick={() => router.push(`/platform/${link.path}`)}
                    >
                        {link.name}
                    </Button>
                ))
            }
            <Divider sx={{ backgroundColor: 'white'}} />
            {user?
                <React.Fragment>
                    <Button fullWidth onClick={() => router.push(`/platform/profile`)}>
                        Profile
                    </Button>
                    <Button fullWidth onClick={() => handleLogout()}>
                        Logout
                    </Button>
                </React.Fragment>
            :
                <Button fullWidth onClick={() => router.push('/platform/auth/login')}>
                    Login
                </Button>
            }
        </div>
    )
}