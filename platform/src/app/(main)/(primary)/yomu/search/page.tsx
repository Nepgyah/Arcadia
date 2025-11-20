'use client';

import React, { useEffect, useState } from "react";
import { Breadcrumbs, Button, FormControl, InputLabel, MenuItem, Pagination, Select, TextField, Typography } from "@mui/material";

import { apiGET, GraphQL } from "@/util/api/api";
import { Anime } from "@/types/miru";
import DetailMediaCard from "@/components/detailMediaCard";
import { Work } from "@/types/yomu";
import ArcHeader from "@/components/arcHeader";
import BreadcrumbSetter from "@/components/breadcrumb/setBreadcrumbs";

import '@/styles/pages/yomu/_search.scss';

export default function YomuSearch() {
    const [workList, setWorkList] = useState<Work[]>([])
    const [pageCount, setPageCount] = useState<number>(1)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [perPage, setPerPage] = useState<number>(9)
    const [search, setSearch] = useState<string>("")

    // Filter states
    const [publishingStatus, setAiringStatus] = useState<number>(-1)
    const [type, setType] = useState<number>(-1)

    useEffect(() => {
        fetchWork(1)
    }, [])

    const fetchWork = (page: number) => {
        const query = `
        query {
            searchWork(filters: {status: ${publishingStatus}, type:${type}, title: "${search}"}, perPage: ${perPage}, page:${page} ){
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
            setWorkList(res.data.searchWork.results)
            setPageCount(res.data.searchWork.pageCount)
            setCurrentPage(res.data.searchWork.currentPage)
        })
    }

     const changePage = (e: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page)
        fetchWork(page)
    }

    const resetFilters = () => {
        const query = `
        query {
            searchWork(filters: {status: -1, type: -1, title: "" }, perPage: 5, page: 1 ){
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
            setWorkList(res.data.searchWork.results)
            setPageCount(res.data.searchWork.pageCount)
            setSearch('')
            setCurrentPage(1);
            setAiringStatus(-1);
            setType(-1)
        })
    }

    return (
        <React.Fragment>
            <BreadcrumbSetter breadcrumbs={['Yomu', 'Search']} />
            <div id="page-yomu-search">
                <div className="grid grid--filter-col">
                    <div id="filters">
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
                                    value={publishingStatus}
                                    onChange={(e) => setAiringStatus(e.target.value)}
                                    label="Airing Status"
                                >
                                <MenuItem value={-1} disabled>Select status</MenuItem>
                                <MenuItem value={0}>Not Yet Publishing</MenuItem>
                                <MenuItem value={1}>Publishing</MenuItem>
                                <MenuItem value={2}>Finished Publishing</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl variant="standard">
                                <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
                                <Select
                                    id="media-type"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    label="media-type"
                                >
                                <MenuItem value={''} disabled>Select type</MenuItem>
                                <MenuItem value={'u'}>Tv</MenuItem>
                                <MenuItem value={'u'}>Movie</MenuItem>
                                <MenuItem value={'u'}>OVA</MenuItem>
                                <MenuItem value={'u'}>ONA</MenuItem>
                                <MenuItem value={'u'}>Web</MenuItem>
                                </Select>
                            </FormControl>

                            <Button 
                                variant="contained" 
                                className="bg-yomu-base clr-txt-dark"
                                onClick={() => fetchWork(1)}
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
                                workList &&
                                workList.map((work: Work, key: number) => (
                                    <DetailMediaCard 
                                        key={key}
                                        app="yomu"
                                        media={work}
                                        link={`/yomu/work/${work.id}/${work.slug}`}
                                        status={work.status}
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