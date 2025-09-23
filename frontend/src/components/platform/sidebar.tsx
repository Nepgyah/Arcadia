'use client';

import { navInfo } from "@/app/platform/(main)/layout";
import { url } from "@/data/urls"
import "@/styles/platform/components/sideNav.scss"
import { useApi } from "@/util/api/api";
import { useUser } from "@/util/wrappers/userContext";
import { Button, Divider } from "@mui/material"
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function Sidebar({ navObj }: { navObj: navInfo }) {
    const {
        user,
        setUser
    } = useUser()

    const pathname = usePathname();
    const { apiPOST } = useApi()
    const router = useRouter();

    const handleLogout = () => {
        apiPOST<any>('account/auth/logout/', {})
        .then((res) => {
            setUser(res.user);
            router.push('/platform')
        })
    }

    const isActive = (linkPath: string) => {
        const fullPath = `/platform${linkPath}`;
        if (linkPath === `/${navObj.app}`) {
            return pathname === fullPath;
        }
        return pathname === fullPath || pathname.startsWith(fullPath + "/");
    };

    return (
        <div id="platform-sidebar">
            {
                navObj.links.map((link, index) => {
                    const active = isActive(link.path)
                    return (
                    <Button
                        color="white"
                        className={`${active ? `clr-${navObj.app}-base` : ''}`}
                        fullWidth 
                        key={index}
                        onClick={() => router.push(`/platform/${link.path}`)}
                    >
                        {link.name}
                    </Button>
                    )
                })
            }
            <Divider sx={{ backgroundColor: 'white'}} />
            {user?
                <React.Fragment>
                    <Button color="white" fullWidth onClick={() => router.push(`/platform/profile`)}>
                        Profile
                    </Button>
                    <Button color="white" fullWidth onClick={() => handleLogout()}>
                        Logout
                    </Button>
                </React.Fragment>
            :
                <Button color="white" fullWidth onClick={() => router.push('/platform/auth/login')}>
                    Login
                </Button>
            }
        </div>
    )
}