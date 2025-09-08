'use client';

import { apiGET } from "@/util/api/api";
import { Breadcrumbs, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

// Layout to display permenant circle information
export default function TsunaguCircleLayout({children} : {children: React.ReactNode}) {
    const params = useParams();
    const [community, setCommunity] = useState<any>()
    const [post, setPosts] = useState<any>([])

    useEffect(() => {
        apiGET<any>(`tsunagu/community/${params.circle_id}/`)
        .then((res) => {
            setCommunity(res)
        })
    }, [])

    return (
        <React.Fragment>
        <Breadcrumbs>
            <Typography>Tsunagu</Typography>
            <Typography>Circle</Typography>
            <Typography>{community?.title}</Typography>
        </Breadcrumbs>
        <div id="page-asobu-home"  className="page-content page-content--two-col page-content--reversed">
            <div className="page-content__left-column divider divider--vertical padding-right--lg">
                {children}
            </div>
            <div className="page-content__right-column">
                <h2 className="app-font--miru border-bottom">Community Details</h2>
                <p>{community?.title}</p>
                <p>{community?.description}</p>
            </div>
        </div>
    </React.Fragment>
    )
}