'use client';

import { navInfo } from "@/app/(main)/layout";
import { useUserStore } from "@/app/store/store";
import { url } from "@/data/urls"
import { useApi } from "@/util/api/api";
import { Button, Divider } from "@mui/material"
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function SideNav({ navObj }: { navObj: navInfo }) {
    const user = useUserStore((state) => state.user);
    const setNull = useUserStore((state) => state.setNull)
    const pathname = usePathname();
    const { apiPOST } = useApi()
    const router = useRouter();

    useEffect(() => {

    }, [user])
    const handleLogout = () => {
        apiPOST<any>('account/auth/logout/', {})
        .then((res) => {
            setNull();
        })
        .finally(() => {
            router.push('/auth/login')
        })
    }

    const isActive = (linkPath: string) => {
        const fullPath = `${linkPath}`;
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
                        onClick={() => router.push(`${link.path}`)}
                    >
                        {link.name}
                    </Button>
                    )
                })
            }
            <Divider sx={{ backgroundColor: 'white'}} />
            {user?
                <React.Fragment>
                    <Button color="white" fullWidth onClick={() => router.push(`/profile`)}>
                        Profile
                    </Button>
                    <Button color="white" fullWidth onClick={() => handleLogout()}>
                        Logout
                    </Button>
                </React.Fragment>
            :
                <Button color="white" fullWidth onClick={() => router.push('/auth/login')}>
                    Login
                </Button>
            }
        </div>
    )
}