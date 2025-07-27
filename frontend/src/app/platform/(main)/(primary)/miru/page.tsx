'use client';
import { apiGET } from "@/util/api/api";
import React from "react";
import { useEffect, useState } from "react";

import '@/styles/platform/pages/miru/home.scss';
import EntryCard from "@/components/platform/entryCard";
import { Breadcrumbs, Typography } from "@mui/material";
import WIP from "@/components/platform/wip";

export default function MiruHome() {
    const [isLoading, setIsLoading] = useState(true);
    const [seasonalAnime, setSeasonalAnime] = useState([])
    const [topAnime, setTopAnime] = useState([])

    useEffect(() => {
        apiGET<any>('miru/home/')
        .then((res) => {
            setSeasonalAnime(res.seasonal)
            setTopAnime(res.top)
        })
    }, [])

    return (
        <React.Fragment>
            <Breadcrumbs>
                <Typography>Home</Typography>
            </Breadcrumbs>
            <div id="page-miru-home"  className="page-content page-content--two-col page-content--reversed">
                <div className="page-content__left-column divider divider--vertical padding-right--lg">
                    <div id="seasonal">
                        <h2 className="app-font--miru border-bottom">Current Season</h2>
                        <div className="flex-grid flex-grid--5">
                            {
                                seasonalAnime &&
                                seasonalAnime.map((anime: any, key: number) => (
                                    <EntryCard 
                                        key={key} 
                                        app="miru" 
                                        title={anime.title} 
                                        clickLink={`/platform/miru/anime/${anime.slug}`} 
                                        imageLink={`/storage/miru/${anime.slug}.jpg`}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div id="all-time">
                        <h2 className="app-font--miru border-bottom">All Time</h2>
                        <div className="flex-grid flex-grid--5">
                            {
                                topAnime &&
                                topAnime.map((anime: any, key: number) => (
                                    <EntryCard 
                                        key={key} 
                                        app="miru" 
                                        title={anime.title} 
                                        clickLink={`/platform/miru/anime/${anime.slug}`} 
                                        imageLink={`/storage/miru/${anime.slug}.jpg`}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="page-content__right-column">
                    <h2 className="app-font--miru border-bottom">Details</h2>
                    <WIP />
                </div>
            </div>
        </React.Fragment>
    )
}