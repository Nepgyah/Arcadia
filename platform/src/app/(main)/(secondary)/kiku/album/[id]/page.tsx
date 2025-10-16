'use client';

import { apiGET, GraphQL } from "@/util/api/api"
import { Breadcrumbs, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useParams } from "next/navigation"
import React, { useState } from "react";
import { useEffect } from "react"

import '@/styles/pages/kiku/_album-details.scss';
import ArcHeader from "@/components/arcHeader";

export default function AlbumDetails() {

    const params = useParams()

    const [album, setAlbum] = useState<any>()

    useEffect(() => {
        const query = `
            query {
                albumById(id: "${params.id}") {
                    id,
                    title,
                    type,
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
                <Typography>Kiku</Typography>
                <Typography>Album</Typography>
                <Typography className="clr-kiku-base"><b>{album?.title}</b></Typography>
            </Breadcrumbs>
            <div id="page-kiku-album-details" className="page-content">
                <div id="header" className="grid grid--2-col-offset">
                    <div id="album-summary" className="p-a-sm">
                        <img className="border-radius-sm box-shadow" src={`/storage/kiku/album/${album?.id}.jpg`} alt="" />
                        <div className="text">
                            <p className="txt-xl"><b>{album?.title}</b></p>
                            <p>{album?.type}</p>
                        </div>
                    </div>
                    <div id="artist-desktop-summary" className="p-a-sm">
                        <img className="border-radius-sm box-shadow" src={`/storage/kiku/artist/${album?.artist.id}.jpg`} alt={album?.artist.name} />
                        <div className="text">
                            <p>{album?.artist.name}</p>
                            <Button variant="contained">Discover {album?.artist.name}</Button>
                        </div>
                    </div>
                </div>
                <div>
                    <ArcHeader title="Tracklist" />
                    <TableContainer className="box-shadow border-radius-sm">
                        <Table className="arc-table">
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
                <div id="artist-mobile-summary" className="p-a-sm">
                    <img className="border-radius-sm box-shadow" src={`/storage/kiku/artist/${album?.artist.id}.jpg`} alt={album?.artist.name} />
                    <div className="text">
                        <p><b>{album?.artist.name}</b></p>
                        <Button variant="contained">Discover {album?.artist.name}</Button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}