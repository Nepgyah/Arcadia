'use client';

import { url } from "@/data/platform/urls"
import "@/styles/platform/components/sideNav.scss"
import { Button } from "@mui/material"
import { useRouter } from "next/navigation";

export default function Sidebar({ links }: { links: url[] }) {
    const router = useRouter();

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
        </div>
    )
}