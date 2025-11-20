'use client';

import React, { useEffect, useState } from "react";
import { Breadcrumbs, Button, FormControl, InputLabel, MenuItem, Pagination, Select, TextField, Typography } from "@mui/material";

import DetailMediaCard from "@/components/detailMediaCard";
import ArcHeader from "@/components/arcHeader";

import { GraphQL } from "@/util/api/api";
import { Anime } from "@/types/miru";

import '@/styles/pages/miru/_search.scss';
import BreadcrumbSetter from "@/components/breadcrumb/setBreadcrumbs";

export default function MiruHome() {
    const [animes, setAnimes] = useState<Anime[]>()
    const [pageCount, setPageCount] = useState<number>(1)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [perPage, setPerPage] = useState<number>(9)
    const [search, setSearch] = useState<string>('')

    // Filter states
    const [airingStatus, setAiringStatus] = useState<number>(-1)
    const [animeType, setAnimeType] = useState<number>(-1)

    useEffect(() => {
        fetchAnime(1)
    }, [])
    
    const fetchAnime = (page: number) => {
        const query = `
        query {
            searchAnime(filters: {status: ${airingStatus}, type:${animeType}}, perPage: ${perPage}, page:${page} ){
                results {
                    id,
                    title,
                    score,
                    users,
                    status,
                    summary,
                    slug,
                    franchise {
                        name
                    }
                },
                pageCount,
                currentPage
            }
        }
        `

        GraphQL<any>(query)
        .then((res) => {
            setAnimes(res.data.searchAnime.results)
            setPageCount(res.data.searchAnime.pageCount)
            setCurrentPage(res.data.searchAnime.currentPage)
        })
    }

    const changePage = (e: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page)
        fetchAnime(page)
    }

    const resetFilters = () => {
        const query = `
        query {
            searchAnime(filters: {status: -1, type: -1}, perPage: 9, page: 1 ){
                results {
                    id,
                    title,
                    score,
                    users,
                    status,
                    summary,
                    slug,
                    franchise {
                        name
                    }
                },
                pageCount,
                currentPage
            }
        }
        `

        GraphQL<any>(query)
        .then((res) => {
            setAnimes(res.data.searchAnime.results)
            setPageCount(res.data.searchAnime.pageCount)
            setCurrentPage(1);
            setAiringStatus(-1);
            setAnimeType(-1)
        })
    }

    return (
        <React.Fragment>
            <BreadcrumbSetter breadcrumbs={['Miru', 'Search']} />
            <div id="page-miru-search">
                <div className="grid grid--filter-col">
                    <div>
                        <ArcHeader title="Search / Filter" />
                        <div className="flex-row flex-row--gap-md">
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
                                <MenuItem value={-1}>All</MenuItem>
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
                                <MenuItem value={-1}>All</MenuItem>
                                <MenuItem value={0}>Tv</MenuItem>
                                <MenuItem value={1}>Movie</MenuItem>
                                <MenuItem value={2}>OVA</MenuItem>
                                <MenuItem value={3}>ONA</MenuItem>
                                <MenuItem value={4}>Web</MenuItem>
                                </Select>
                            </FormControl>
                            
                            <FormControl variant="standard">
                                <InputLabel id="demo-simple-select-standard-label">Per Page</InputLabel>
                                <Select
                                    id="per-page"
                                    value={perPage}
                                    onChange={(e) => setPerPage(e.target.value)}
                                    label="per-page"
                                >
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={12}>12</MenuItem>
                                <MenuItem value={15}>15</MenuItem>
                                </Select>
                            </FormControl>

                            <Button 
                                variant="contained" 
                                className="bg-miru-base clr-txt-dark"
                                onClick={() => fetchAnime(1)}
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
                    <div className="vertical-divider-left p-left-xl">
                        <Pagination onChange={changePage} page={currentPage} count={pageCount} />
                        <div id="results" className="flex-col flex-col--gap-sm">
                            {
                                animes ?
                                animes.map((anime: Anime, key: number) => (
                                    <DetailMediaCard 
                                        key={key}
                                        app="miru"
                                        media={anime}
                                        link={`/miru/anime/${anime.id}/${anime.slug}`}
                                        status={anime.status}
                                    />
                                ))
                                :
                                    <p>ANime</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
