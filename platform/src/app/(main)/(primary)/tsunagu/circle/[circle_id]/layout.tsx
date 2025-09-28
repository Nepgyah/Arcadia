'use client';

import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Avatar, Breadcrumbs, Typography } from "@mui/material";
import { apiGET } from "@/util/api/api";
import { Community } from "@/types/tsunagu";

// Layout to display permenant circle information
export default function TsunaguCircleLayout({children} : {children: React.ReactNode}) {
    const params = useParams();
    const [community, setCommunity] = useState<Community>()

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
            <Typography><Link href={`/platform/tsunagu/circle/${community?.id}/${community?.slug}/`}>{community?.title}</Link></Typography>
        </Breadcrumbs>
        <div id="page-asobu-home"  className="page-content">
            <div className="two-col-section two-col-section--uneven-reverse">
                <div className="vertical-divider-right p-right-xl">
                    {children}
                </div>
                <div id="community-details">
                    <h2 className="app-font--miru border-bottom">Community Details</h2>
                    <div className="row-gap row-gap--md">
                        <div id="community-overview" className="row-gap row-gap--xs">
                            <Avatar src={`/storage/tsunagu/${community?.id}.jpg`} />
                            <p id="community-name" className="txt-m">{community?.title}</p>
                            <p>{community?.description}</p>
                        </div>
                        <div id="community-stats">
                            <h3>Statistics</h3>
                            <div>
                                <p>Members: <span>N/A</span></p>
                                <p>Posts: <span>{community?.posts}</span></p>
                                <p>Created: <span>{new Date(community?.created_at).toDateString()}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
    )
}