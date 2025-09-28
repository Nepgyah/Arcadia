'use client';

import React, { useEffect, useState } from "react";
import { Breadcrumbs, Button, FormControl, InputLabel, MenuItem, Pagination, Select, TextField, Typography } from "@mui/material";

import { apiGET } from "@/util/api/api";
import { Anime } from "@/types/miru";
import DetailMediaCard from "@/components/platform/detailMediaCard";

export default function MiruHome() {
    const [animeList, setAnimeList] = useState<Anime[]>([])
    const [page, setPage] = useState()
    const [pageCount, setPageCount] = useState<number>(1)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [search, setSearch] = useState<string>('')

    // Filter states
    const [airingStatus, setAiringStatus] = useState<number>(-1)
    const [animeType, setAnimeType] = useState<number>(-1)
    useEffect(() => {
        apiGET<any>('miru/anime/search/?page=1')
        .then((res) => {
            setAnimeList(res.animes)
            setPageCount(res.page_count)
        })
    }, [])

    const APICall = (page: number) => {
        apiGET<any>(`miru/anime/search/?page=${page}&status=${airingStatus}&type=${animeType}&search=${search}`)
        .then((res) => {
            setAnimeList(res.animes)
            setPageCount(res.page_count)
            setCurrentPage(page)
        })
    }

    const goToPage = (e: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page)
        APICall(page)
    }

    const resetFilters = () => {
        setCurrentPage(1)
        setAiringStatus(-1)
        setAnimeType(-1)
        apiGET<any>(`miru/anime/search/?page=${page}`)
        .then((res) => {
            setAnimeList(res.animes)
            setPageCount(res.page_count)
        })
    }
    return (
        <React.Fragment>
            <Breadcrumbs>
                <Typography>Miru</Typography>
                <Typography>Search Anime</Typography>
            </Breadcrumbs>
            <div id="page-miru-search"  className="page-content">
                <div className="two-col-section two-col-section--uneven">
                    <div id="filters">
                        <h2>Search Settings</h2>
                        <div className="row-gap-md">
                            <TextField 
                                id="search-title" 
                                label="Search Title" 
                                variant="standard"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <FormControl variant="standard">
                                <InputLabel id="demo-simple-select-standard-label">Airing Status</InputLabel>
                                <Select
                                    id="airing-status"
                                    value={airingStatus}
                                    onChange={(e) => setAiringStatus(e.target.value)}
                                    label="Airing Status"
                                >
                                <MenuItem value={-1} disabled>Select status</MenuItem>
                                <MenuItem value={0}>Not Yet Aired</MenuItem>
                                <MenuItem value={1}>Airing</MenuItem>
                                <MenuItem value={2}>Finished Airing</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl variant="standard">
                                <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
                                <Select
                                    id="media-type"
                                    value={animeType}
                                    onChange={(e) => setAnimeType(e.target.value)}
                                    label="media-type"
                                >
                                <MenuItem value={-1} disabled>Select type</MenuItem>
                                <MenuItem value={0}>Tv</MenuItem>
                                <MenuItem value={1}>Movie</MenuItem>
                                <MenuItem value={2}>OVA</MenuItem>
                                <MenuItem value={3}>ONA</MenuItem>
                                <MenuItem value={4}>Web</MenuItem>
                                </Select>
                            </FormControl>

                            <Button 
                                variant="contained" 
                                className="bg-miru-base clr-txt-dark"
                                onClick={() => APICall(1)}
                            >
                                Filter
                            </Button>
                            <Button
                                variant="text"
                                color="white"
                                onClick={() => resetFilters()}
                            >
                                Reset
                            </Button>
                        </div>
                    </div>
                    <div id="seasonal" className="vertical-divider-left p-left-xl">
                        <Pagination onChange={goToPage} page={currentPage} count={pageCount} />
                        <div className="layout-grid-3 m-top-md">
                            {
                                animeList &&
                                animeList.map((anime: Anime, key: number) => (
                                    <DetailMediaCard 
                                        key={key}
                                        app="miru"
                                        media={anime}
                                        link={`/platform/miru/anime/${anime.id}/${anime.slug}`}
                                        status={anime.status}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}