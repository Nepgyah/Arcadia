'use client';

import { Anime } from "@/types/miru";
import { apiGET, GraphQL } from "@/util/api/api";
import { Breadcrumbs, Pagination, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MAX_PER_PAGE = 10;

export default function MiruAllTime() {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [pageCount, setPageCount] = useState<number>(1)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [animeList, setAnimeList] = useState<Anime[]>([])

    useEffect(() => {
        fetchAnime(1)
    }, [])

    const fetchAnime = (page: number) => {
        setIsLoading(true)
        const query = `
        query {
            searchAnime(filters: {status: -1, type: -1}, perPage: 10, page:${page} ){
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
            setAnimeList(res.data.searchAnime.results)
            setPageCount(res.data.searchAnime.pageCount)
            setCurrentPage(res.data.searchAnime.currentPage)
        })
        setIsLoading(false);
    }

    const changePage = (e: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page)
        fetchAnime(page)
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
                    onChange={changePage} 
                    page={currentPage} 
                    count={pageCount} 
                />

                <TableContainer className="box-shadow border-radius-sm">
                    <Table className="arc-table" stickyHeader aria-label="anime table">
                        <TableHead>
                            <TableRow>
                                <TableCell width={"5%"}>Rank</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell width={"10%"}>Rating</TableCell>
                                <TableCell width={"10%"}>Users</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                isLoading ?
                                    [...Array(10)].map((idx: number) => (
                                        <TableRow key={idx}>
                                        <TableCell><Skeleton variant="rectangular" width={"100%"} height={'24px'} /></TableCell>
                                        <TableCell className="bold image-title">
                                            <Skeleton variant="rectangular" width={"75px"} height={"100px"} />
                                            <Skeleton variant="text" width={"50%"} height={'24px'}  />
                                        </TableCell>
                                        <TableCell><Skeleton variant="rectangular" width={"100%"} height={'24px'} /></TableCell>
                                        <TableCell><Skeleton variant="rectangular" width={"100%"} height={'24px'}  /></TableCell>
                                    </TableRow>
                                    ))
                                :
                                animeList.map((anime: Anime, idx: number) => (
                                    <TableRow key={idx}>
                                        <TableCell>{(((currentPage - 1) * MAX_PER_PAGE) + (idx) ) + 1}</TableCell>
                                        <TableCell className="bold image-title">
                                            <Link href={`/miru/anime/${anime.id}/${anime.slug}`}>
                                                <img className="image" src={`/storage/miru/${anime.id}.jpg`} alt={anime.title} />
                                            </Link>
                                            <Link className="clickable" href={`/miru/anime/${anime.id}/${anime.slug}`}>
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