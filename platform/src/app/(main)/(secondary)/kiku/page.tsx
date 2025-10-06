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
                <div id="kiku-spotlight"></div>
                <div className="layout-grid-3">
                    <div>
                        <LinkedHeader title='Top Songs This Month' link="" linkText="See more"/>
                        <div  className="row-gap-md">
                            {
                            }
                        </div>
                    </div>
                    <div>
                        <LinkedHeader title='Top Albums This Month' link="" linkText="See more"/>
                        <div  className="row-gap-md">
                            {
                            }
                        </div>
                    </div>
                    <div>
                        <LinkedHeader title='Top Artists This Month' link="" linkText="See more"/>
                        <div  className="row-gap-md">
                            {
                            }
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}