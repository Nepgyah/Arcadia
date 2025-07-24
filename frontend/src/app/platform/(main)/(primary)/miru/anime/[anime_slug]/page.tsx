'use client';

import { apiGET } from "@/util/api/api";
import { Breadcrumbs, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";

import '@/styles/platform/pages/miru/anime-detail.scss';
import { Anime } from "@/util/types/miru";

export default function AnimeDetails() {
    const params = useParams();
    const [anime, setAnime] = useState<Anime>()

    useEffect(() => {
        apiGET<Anime>(`miru/anime/${params.anime_slug}/`)
        .then((res) => {
            setAnime(res)
        })
    }, [])

    return (
        <React.Fragment>
            <Breadcrumbs>
                <Typography>Anime</Typography>
                <Typography>{anime?.title}</Typography>
            </Breadcrumbs>
            <div id="page-miru-anime-detail" className="page-content page-content--two-col">
                <div className="page-content__left-column">
                    <img id="image" src="/global/404-resource.jpg" alt="" />
                    <h2 className="app-font--miru border-bottom">Quick Access</h2>
                    <h2 className="app-font--miru border-bottom">Socials</h2>
                </div>
                <div className="page-content__right-column">
                    <div id="primary">
                        <div id="primary-left" className="divider divider--vertical padding-right--md row-gap">
                            <div id="overview">
                                <div id="quick-stats" className="row-gap">
                                    <div className="gray-container flex flex--small-gap">
                                        <p className="text-label"><span className="label">Season:</span><span className="value"> {anime?.season.season}</span></p>
                                        <p className="text-label"><span className="label">Type:</span><span className="value"> {anime?.type}</span></p>
                                        <p className="text-label"><span className="label">Episodes:</span><span className="value"> {anime?.type}</span></p>
                                    </div>
                                    <div id="score-tags">
                                        <div className="gray-container flex flex--small-gap">
                                            <p>{anime?.score}</p>
                                            <p>{anime?.users} users</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="promo-video">
                                    <h2 className="app-font--miru border-bottom">Promo Video</h2>
                                </div>
                            </div>
                            <div id="summary">
                                <h2 className="app-font--miru border-bottom">Summary</h2>
                                <p>{anime?.summary}</p>
                            </div>
                        </div>
                        <div id="primary-right" className="padding-left--md row-gap">
                            <div>
                                <h2 className="app-font--miru border-bottom">Details</h2>
                                <p className="text-label"><span className="label">Status:</span><span className="value"> {anime?.status}</span></p>
                                <p className="text-label"><span className="label">Start Date:</span><span className="value"> {anime?.airing_start_date}</span></p>
                                <p className="text-label"><span className="label">End Date:</span><span className="value"> {anime?.airing_end_date}</span></p>
                                <p className="text-label"><span className="label">Rating:</span><span className="value"> {anime?.rating}</span></p>
                            </div>
                            <div>
                                <h2 className="app-font--miru border-bottom">Production</h2>
                                <p className="text-label"><span className="label">Studio:</span><span className="value"> {anime?.studio}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}