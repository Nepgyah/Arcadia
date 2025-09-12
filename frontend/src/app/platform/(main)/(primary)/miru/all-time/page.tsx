'use client';

import React, { useEffect, useState } from "react";
import { Breadcrumbs, Typography } from "@mui/material";

import { apiGET } from "@/util/api/api";
import EntryCard from "@/components/platform/entryCard";
import WIP from "@/components/platform/wip";
import { Anime } from "@/types/miru";

export default function MiruHome() {
    const [animeList, setAnimeList] = useState<Anime[]>([])

    useEffect(() => {
        apiGET<any>('miru/anime/search/')
        .then((res) => {
            setAnimeList(res.results)
        })
    }, [])

    return (
        <React.Fragment>
            <Breadcrumbs>
                <Typography>Miru</Typography>
                <Typography>Search</Typography>
            </Breadcrumbs>
            <div id="page-miru-all-time"  className="page-content">
                <div id="seasonal">
                    <h2>Results</h2>
                    <div className="layout-grid-5">
                        {
                            animeList &&
                            animeList.map((anime: Anime, key: number) => (
                                <EntryCard 
                                    key={key} 
                                    app="miru" 
                                    title={anime.title} 
                                    clickLink={`/platform/miru/anime/${anime.id}/${anime.slug}`} 
                                    imageLink={`/storage/miru/${anime.id}.jpg`}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}