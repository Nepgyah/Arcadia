'use client';

import React from "react";
import { useEffect, useState } from "react";
import { Breadcrumbs, Link, Pagination, Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

import { Work } from "@/types/yomu";
import { apiGET, GraphQL } from "@/util/api/api";
import BreadcrumbSetter from "@/components/breadcrumb/setBreadcrumbs";

const MAX_PER_PAGE = 4;

export default function YomuAllTime() {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [pageCount, setPageCount] = useState<number>(1)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [workList, setWorkList] = useState<Work[]>([])

    useEffect(() => {
        fetchWork(1)
    }, [])

    const fetchWork = (page: number) => {
        setIsLoading(true)
        const query = `
        query {
            searchWork(filters: {status: -1, type: -1}, perPage: 10, page:${page} ){
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
        setIsLoading(false);
    }

    const changePage = (e: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page)
        fetchWork(page)
    }

    return (
        <React.Fragment>
            <BreadcrumbSetter breadcrumbs={['Yomu', 'Search']} />
            <div id="page-work-all-time" className="page-content">
                <Pagination 
                    style={{ float: "right"}}
                    className="m-bottom-s"
                    onChange={changePage} 
                    page={currentPage} 
                    count={pageCount} 
                />

                 <TableContainer className="box-shadow border-radius-sm">
                    <Table className="arc-table" stickyHeader aria-label="manga table">
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
                                workList.map((work: Work, idx: number) => (
                                    <TableRow key={idx}>
                                        <TableCell>{(((currentPage - 1) * MAX_PER_PAGE) + (idx) ) + 1}</TableCell>
                                        <TableCell className="bold image-title">
                                            <Link href={`/yomu/work/${work.id}/${work.slug}`}>
                                                <img className="image" src={`/storage/yomu/${work.id}.jpg`} alt={work.title} />
                                            </Link>
                                            <Link className="clickable" href={`/yomu/work/${work.id}/${work.slug}`}>
                                                {work.title}
                                            </Link>
                                        </TableCell>
                                        <TableCell>{work.score}</TableCell>
                                        <TableCell>{work.users}</TableCell>
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