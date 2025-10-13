'use client';

import React, { useEffect, useState } from "react";
import { Breadcrumbs, Typography } from "@mui/material";

import { apiGET } from "@/util/api/api";
import EntryCard from "@/components/entryCard";
import WIP from "@/components/wip";
import LinkedHeader from "@/components/platform/linkedHeader";

import '@/styles/pages/miru/_home.scss';
import ArcHeader from "@/components/arcHeader";

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
            <div id="page-miru-home">
                <div className="grid grid--side-col">
                    <div className="flex-row flex-row--gap-md">
                        <div id="seasonal">
                            <ArcHeader title={`Latest Season - ${seasonName}`} link="miru/seasonal" linkText="See more" />
                            <div className="flex-col flex-col--gap-sm">
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
                            <ArcHeader title="All Time" link="miru/all-time" linkText="See more" />
                            <div className="flex-col flex-col--gap-sm">
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
                    <div className="side-col">
                        <h2 className="app-font--miru border-bottom">Friend Activity</h2>
                        <WIP />
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}