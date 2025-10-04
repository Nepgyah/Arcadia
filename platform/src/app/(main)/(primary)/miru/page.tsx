'use client';

import React, { useEffect, useState } from "react";
import { Breadcrumbs, Typography } from "@mui/material";

import { apiGET } from "@/util/api/api";
import EntryCard from "@/components/platform/entryCard";
import WIP from "@/components/platform/wip";
import LinkedHeader from "@/components/platform/linkedHeader";

export default function MiruHome() {
    const [isLoading, setIsLoading] = useState(true);
    const [seasonalAnime, setSeasonalAnime] = useState([]);
    const [topAnime, setTopAnime] = useState([]);
    const [seasonName, setSeasonName] = useState<string>('N/A');

    useEffect(() => {
        apiGET<any>('miru/home/')
        .then((res) => {
            setSeasonalAnime(res.seasonal)
            setTopAnime(res.top)
            setSeasonName(res.season_name)
        })
    }, [])

    return (
        <React.Fragment>
            <Breadcrumbs>
                <Typography>Miru</Typography>
                <Typography>Home</Typography>
            </Breadcrumbs>
            <div id="page-miru-home"  className="page-content">
                <div className="two-col-section two-col-section--uneven-reverse">
                    <div className="row-gap-md">
                        <div id="seasonal">
                            <LinkedHeader title={`Latest Season - ${seasonName}`} link="miru/seasonal" linkText="See more"/>
                            <div className="layout-grid-5">
                                {
                                    seasonalAnime &&
                                    seasonalAnime.map((anime: any, key: number) => (
                                        <EntryCard 
                                            key={key} 
                                            app="miru" 
                                            title={anime.title} 
                                            clickLink={`/miru/anime/${anime.id}/${anime.slug}`} 
                                            imageLink={`/storage/miru/${anime.id}.jpg`}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                        <div id="all-time">
                            <LinkedHeader title="All Time" link="miru/all-time" linkText="See more"/>
                            <div className="layout-grid-5">
                                {
                                    topAnime &&
                                    topAnime.map((anime: any, key: number) => (
                                        <EntryCard 
                                            key={key} 
                                            app="miru" 
                                            title={anime.title} 
                                            clickLink={`/miru/anime/${anime.id}/${anime.slug}`} 
                                            imageLink={`/storage/miru/${anime.id}.jpg`}
                                        />
                                    ))
                                }
                            </div>
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