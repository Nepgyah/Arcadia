'use client';

import { Work } from "@/types/yomu";
import { apiGET } from "@/util/api/api";
import { Breadcrumbs, Link, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";

const MAX_PER_PAGE = 4;

export default function YomuAllTime() {

    const [page, setPage] = useState();
    const [pageCount, setPageCount] = useState<number>(1);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [workList, setWorkList] = useState<Work[]>([]);

    useEffect(() => {
        apiGET<any>(`yomu/work/all-time/`)
        .then((res) => {
            setWorkList(res.works)
            setPageCount(res.page_count)
        })
    }, [])

    const goToPage = (e: React.ChangeEvent<unknown>, page: number) => {
        if (page !== currentPage) {
            apiGET<any>(`yomu/work/all-time/`)
            .then((res) => {
                setWorkList(res.works)
                setPageCount(res.page_count)
            })
        }
    }

    return (
        <React.Fragment>
            <Breadcrumbs>
                <Typography>Work</Typography>
                <Typography>All-Time</Typography>
            </Breadcrumbs>
            <div id="page-work-all-time" className="page-content">
                <Pagination 
                    style={{ float: "right"}}
                    className="m-bottom-s"
                    onChange={goToPage} 
                    page={currentPage} 
                    count={pageCount} 
                />

                <TableContainer component={Paper}>
                    <Table className="arcadia-table" stickyHeader aria-label="anime table">
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
                                workList.map((work: Work, idx: number) => (
                                    <TableRow key={idx}>
                                        <TableCell>{(((currentPage - 1) * MAX_PER_PAGE) + (idx) ) + 1}</TableCell>
                                        <TableCell className="bold image-title">
                                            <Link href={`/platform/yomu/work/${work.id}/${work.slug}`}>
                                                <img className="image" src={`/storage/yomu/${work.id}.jpg`} alt={work.title} />
                                            </Link>
                                            <Link className="clickable" href={`/platform/yomu/work/${work.id}/${work.slug}`}>
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