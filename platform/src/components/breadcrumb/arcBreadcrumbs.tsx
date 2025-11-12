'use client';

import type { RootState } from "@/app/store";
import { Breadcrumbs, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function ArcBreadcrumb() {
    const breadcrumbs = useSelector((state: RootState) => state.breadcrumb.breadcrumbs)

    return (
        <Breadcrumbs>
        {
            breadcrumbs.map((breadcrumb: string, idx: number) => (
                <Typography key={idx}>{breadcrumb}</Typography>
            ))
        }
        </Breadcrumbs>
    )
}