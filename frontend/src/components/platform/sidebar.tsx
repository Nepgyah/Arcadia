'use client';

import { url } from "@/data/urls"
import "@/styles/platform/components/sideNav.scss"
import { useApi } from "@/util/api/api";
import { useUser } from "@/util/wrappers/userContext";
import { Button, Divider } from "@mui/material"
import { useRouter } from "next/navigation";
import React from "react";

export default function Sidebar({ links }: { links: url[] }) {
    const {
        user,
        setUser
    } = useUser()

    const { apiPOST } = useApi()
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