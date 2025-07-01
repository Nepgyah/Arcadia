'use client';

import { url } from "@/data/platform/urls"
import "@/styles/platform/components/sideNav.scss"
import { apiPOST } from "@/util/api";
import { useUser } from "@/util/userContext";
import { Button } from "@mui/material"
import { useRouter } from "next/navigation";

export default function Sidebar({ links }: { links: url[] }) {
    const {
        setUser
    } = useUser()

    const router = useRouter();

    const handleLogout = () => {
        apiPOST('account/auth/logout/', {})
        .then(() => {
            setUser(null)
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
            <Button fullWidth onClick={() => handleLogout()}>
                Logout
            </Button>
        </div>
    )
}