'use client';

import { apiGET, GraphQL } from "@/util/api/api"
import { Breadcrumbs, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useParams } from "next/navigation"
import React, { useState } from "react";
import { useEffect } from "react"

export default function AlbumDetails() {

    const params = useParams()

    const [album, setAlbum] = useState<any>()

    useEffect(() => {
        const query = `
            query {
                albumById(id: "${params.id}") {
                    id,
                    title,
                    songs {
                    title,
                    plays
                    },
                    artist {
                    id,
                    name
                    }
                }
            }
        `
        GraphQL<any>(query)
        .then((res) => {
            setAlbum(res.data.albumById)
        })
    }, [])
        
    return (
        <React.Fragment>
            <Breadcrumbs>
                <Typography>Miru</Typography>
                <Typography>Album</Typography>
                <Typography>{album?.title}</Typography>
            </Breadcrumbs>
            <div id="album-details" className="page-content">
                <div className="grid grid--2-col-offset">
                    <div className="main-card">
                        <div className="main-card__text center-vertical">
                            <p>{album?.title}</p>
                            <p>{album?.type}</p>
                        </div>
                        <div className="main-card__image">
                            <div className="mask"></div>
                            <img src={`/storage/kiku/album/${album?.id}.jpg`} alt="" />
                        </div>
                    </div>
                    <div className="sub-card">
                        <p className="sub-card__title">{album?.artist.name}</p>
                        <div className="sub-card__details">
                            <img className="box-shadow" src={`/storage/kiku/artist/${album?.artist.id}.jpg`} alt={album?.artist.name} />
                            <div>
                                <Button variant="contained">See Details</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Tracklist</h2>
                    <TableContainer component={Paper}>
                        <Table className="arcadia-table">
                            <TableHead>
                                <TableRow>
                                    <TableCell width={"5%"}>#</TableCell>
                                    <TableCell>Title</TableCell>
                                    <TableCell width={"10%"}>Plays</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    album?.songs.map((song: any, idx: number) => (
                                        <TableRow>
                                            <TableCell>{idx + 1}</TableCell>
                                            <TableCell>{song.title}</TableCell>
                                            <TableCell>{song.plays}</TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </React.Fragment>
    )
}