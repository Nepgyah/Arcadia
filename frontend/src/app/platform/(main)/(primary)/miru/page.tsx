'use client';
import { apiGET } from "@/util/api/api";
import React from "react";
import { useEffect, useState } from "react";

import '@/styles/platform/pages/miru/home.scss';
import EntryCard from "@/components/platform/entryCard";
import { Breadcrumbs, Typography } from "@mui/material";

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
                <div className="page-content__left-column">
                    <div id="seasonal">
                        <h2 className="app-font--miru">This Season</h2>
                        <div className="flex-grid flex-grid--5">
                            {
                                seasonalAnime &&
                                seasonalAnime.map((anime: any, key: number) => (
                                    <EntryCard key={key} app="miru" title={anime.title} />
                                ))
                            }
                        </div>
                    </div>
                    <div id="all-time">
                        <h2 className="app-font--miru">All Time</h2>
                        <div className="flex-grid flex-grid--5">
                            {
                                topAnime &&
                                topAnime.map((anime: any, key: number) => (
                                    <EntryCard key={key} app="miru" title={anime.title} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="page-content__right-column"></div>
            </div>
        </React.Fragment>
    )
}