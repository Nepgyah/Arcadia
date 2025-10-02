'use client';

import React, { useEffect, useState } from "react";
import { Breadcrumbs, Button, FormControl, InputLabel, MenuItem, Pagination, Select, TextField, Typography } from "@mui/material";

import { apiGET } from "@/util/api/api";
import { Anime } from "@/types/miru";
import DetailMediaCard from "@/components/platform/detailMediaCard";
import { Work } from "@/types/yomu";

export default function YomuSearch() {
    const [workList, setWorkList] = useState<Work[]>([])
    const [page, setPage] = useState()
    const [pageCount, setPageCount] = useState<number>(1)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [search, setSearch] = useState<string>('')

    // Filter states
    const [publishingStatus, setAiringStatus] = useState<number>(-1)
    const [type, setType] = useState<string>('')
    useEffect(() => {
        apiGET<any>('yomu/work/search/?page=1')
        .then((res) => {
            setWorkList(res.works)
            setPageCount(res.page_count)
        })
    }, [])

    const APICall = (page: number) => {
        apiGET<any>(`yomu/work/search/?page=${page}&status=${publishingStatus}&type=${type}&search=${search}`)
        .then((res) => {
            setWorkList(res.works)
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
        setType('')
        apiGET<any>(`yomu/work/search/?page=${page}`)
        .then((res) => {
            setWorkList(res.works)
            setPageCount(res.page_count)
        })
    }
    return (
        <React.Fragment>
            <Breadcrumbs>
                <Typography>Miru</Typography>
                <Typography>Search Anime</Typography>
            </Breadcrumbs>
            <div id="page-yomu-search"  className="page-content">
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
                                className="bg-yomu-base"
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
                    <div id="results" className="vertical-divider-left p-left-xl">
                        <Pagination onChange={goToPage} page={currentPage} count={pageCount} />
                        <div className="layout-grid-3 m-top-md">
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