'use client';

import React, { useEffect, useState } from "react";
import { Breadcrumbs, Typography } from "@mui/material";

import { apiGET } from "@/util/api/api";
import EntryCard from "@/components/platform/entryCard";
import WIP from "@/components/platform/wip";
import LinkedHeader from "@/components/platform/linkedHeader";

export default function MiruHome() {
    const [isLoading, setIsLoading] = useState(true);
    const [trendingSongs, setTrendingSongs] = useState<any[]>([])
    const [trendingAlbums, setTrendingAlbums] = useState<any[]>([])
    const [popularSongs, setPopularSongs] = useState<any[]>([])

    useEffect(() => {
        apiGET<any>('kiku/home/')
        .then((res) => {

        })
    }, [])

    return (
        <React.Fragment>
            <Breadcrumbs>
                <Typography>Miru</Typography>
                <Typography>Home</Typography>
            </Breadcrumbs>
            <div id="page-kiku-home"  className="page-content">
                <div className="two-col-section two-col-section--uneven-reverse">
                    <div className="row-gap-md">
                        <div id="seasonal">
                            <LinkedHeader title='Trending Music' link="" linkText="See more"/>
                            <div className="layout-grid-5">
                                {
                                }
                            </div>
                        </div>
                        <div id="all-time">
                            
                        </div>
                    </div>
                    <div className="vertical-divider-left p-left-xl">
                        <h2 className="app-font--miru border-bottom">Friend Activity</h2>
                        <WIP />
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}