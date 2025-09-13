'use client';

import React, { useEffect, useState } from "react";
import { Breadcrumbs, Pagination, Typography } from "@mui/material";

import { apiGET } from "@/util/api/api";
import EntryCard from "@/components/platform/entryCard";
import WIP from "@/components/platform/wip";
import { Anime } from "@/types/miru";

export default function MiruHome() {
    const [animeList, setAnimeList] = useState<Anime[]>([])
    const [page, setPage] = useState()
    const [paginator, setPaginator] = useState<any>();

    useEffect(() => {
        apiGET<any>('miru/anime/search/?page_size=1')
        .then((res) => {
            setAnimeList(res.results)
            setPaginator(res)
        })
    }, [])

    const getAnime = (e: React.ChangeEvent<unknown>, value: number) => {
        apiGET<any>(`miru/anime/search/?page_size=${value}`)
        .then((res) => {
            setAnimeList(res.results)
        })
    }

    return (
        <React.Fragment>
            <Breadcrumbs>
                <Typography>Miru</Typography>
                <Typography>Search</Typography>
            </Breadcrumbs>
            <div id="page-miru-all-time"  className="page-content">
                <div className="filtering">
                    <Pagination onChange={getAnime} count={paginator && paginator.count / 2 } />
                </div>
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