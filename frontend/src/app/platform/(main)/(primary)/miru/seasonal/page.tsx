'use client';

import DetailMediaCard from "@/components/platform/detailMediaCard";
import { Anime } from "@/types/miru";
import { apiGET } from "@/util/api/api";
import { Box, Breadcrumbs, Pagination, Paper, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const SEASON_NAMES = ['Winter', 'Spring', 'Summer', 'Fall']

type SeasonCode = -1 | 0 | 1 | 2 | 3

interface Season {
    season_code: SeasonCode | null,
    year: number
}
export default function MiruSeason() {

    const [seasonCode, setSeasonCode] = useState<SeasonCode>(0);
    const [seasonYear, setSeasonYear] = useState<number>()
    const [animeList, setAnimeList] = useState<Anime[]>([])

    useEffect(() => {
       apiGET<any>(`miru/anime/season/?season=-1&year=-1`)
        .then((res) => {
            setAnimeList(res.animes)
            setSeasonCode(res.season_code)
            setSeasonYear(res.year)
        })
    }, [])

    const handleSeasonChange = (event: React.SyntheticEvent, newValue: SeasonCode) => {
        setSeasonCode(newValue)
        apiGET<any>(`miru/anime/season/?season=${newValue}&year=${seasonYear}`)
        .then((res) => {
            setAnimeList(res.animes)
        })
    }
    return (
        <React.Fragment>
            <Breadcrumbs>
                <Typography>Miru</Typography>
                <Typography>{seasonYear} Anime</Typography>
            </Breadcrumbs>
            <div id="page-miru-all-time" className="page-content">
                <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={seasonCode} onChange={handleSeasonChange}>
                        <Tab value={0} label={`Winter ${seasonYear}`} />
                        <Tab value={1} label={`Spring ${seasonYear}`} />
                        <Tab value={2} label={`Summer ${seasonYear}`} />
                        <Tab value={3} label={`Fall ${seasonYear}`} />
                    </Tabs>
                </Box>
                <div className="layout-grid-5 m-top-md">
                    {
                        animeList ?
                        animeList.map((anime: Anime, key: number) => (
                            <DetailMediaCard 
                                key={key}
                                app="miru"
                                media={anime}
                                link={`/platform/miru/anime/${anime.id}/${anime.slug}`}
                                status={anime.status}
                            />
                        ))
                        : 
                        <p>No anime data for this season... yet</p>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}