'use client';

import { Breadcrumbs, Typography } from "@mui/material";
import { useBreadcrumbStore } from "@/app/store/store";

export default function ArcBreadcrumb() {
    const breadcrumbs = useBreadcrumbStore((state) => state.crumbs)
    
    return (
        <Breadcrumbs>
            {
                breadcrumbs.map((value: string, idx: number) => (
                    <Typography key={idx}>{value}</Typography>
                ))
            }
        </Breadcrumbs>
    )
}