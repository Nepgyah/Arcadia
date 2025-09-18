'use client';

import { Anime } from "@/types/miru";
import { apiGET } from "@/util/api/api";
import { Breadcrumbs, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MAX_PER_PAGE = 4;

export default function MiruAllTime() {

    const [page, setPage] = useState()
    const [pageCount, setPageCount] = useState<number>(1)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [animeList, setAnimeList] = useState<Anime[]>([])

    useEffect(() => {
        apiGET<any>(`miru/anime/all-time/`)
        .then((res) => {
            setAnimeList(res.animes)
            setPageCount(res.page_count)
        })
    }, [])

    const goToPage = (e: React.ChangeEvent<unknown>, page: number) => {
        if (page !== currentPage) {
            setCurrentPage(page)
            APICall(page)
        }
    }

    const APICall = (page: number) => {
        apiGET<any>(`miru/anime/all-time/?page=${page}`)
        .then((res) => {
            setAnimeList(res.animes)
            setPageCount(res.page_count)
        })
    }
    return (
        <React.Fragment>
            <Breadcrumbs>
                <Typography>Miru</Typography>
                <Typography>All-Time</Typography>
            </Breadcrumbs>
            <div id="page-miru-all-time" className="page-content">
                <Pagination 
                    style={{ float: "right"}}
                    className="m-bottom-s"
                    onChange={goToPage} 
                    page={currentPage} 
                    count={pageCount} 
                />

                <TableContainer component={Paper}>
                    <Table stickyHeader aria-label="anime table">
                        <TableHead>
                            <TableRow>
                                <TableCell width={"10%"}>Ranking</TableCell>
                                <TableCell >Title</TableCell>
                                <TableCell width={"10%"}>Rating</TableCell>
                                <TableCell width={"10%"}>Users</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                animeList.map((anime: any, idx: number) => (
                                    <TableRow key={idx}>
                                        <TableCell>{(((currentPage - 1) * MAX_PER_PAGE) + (idx) ) + 1}</TableCell>
                                        <TableCell className="bold">
                                            <Link className="clickable" href={`/platform/miru/anime/${anime.id}/${anime.slug}`}>
                                                {anime.title}
                                            </Link>
                                        </TableCell>
                                        <TableCell>{anime.score}</TableCell>
                                        <TableCell>{anime.users}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </React.Fragment>
    )
}