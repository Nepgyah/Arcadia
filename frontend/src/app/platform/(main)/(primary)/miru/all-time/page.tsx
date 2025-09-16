'use client';

import { Anime } from "@/types/miru";
import { apiGET } from "@/util/api/api";
import { Breadcrumbs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function MiruAllTime() {
    const [animeList, setAnimeList] = useState<Anime[]>([])

    useEffect(() => {
        apiGET<any>(`miru/anime/all-time/`)
        .then((res) => {
            setAnimeList(res.results)
        })
    }, [])
    return (
        <React.Fragment>
            <Breadcrumbs>
                <Typography>Miru</Typography>
                <Typography>All-Time</Typography>
            </Breadcrumbs>
            <div id="page-miru-all-time" className="page-content">
    
            </div>
        </React.Fragment>
    )
}