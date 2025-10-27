'use client';

import { GraphQL } from "@/util/api/api"
import { Breadcrumbs, Button, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useParams } from "next/navigation"
import React, { useState } from "react";
import { useEffect } from "react"

import '@/styles/pages/kiku/_artist-details.scss';
import ArcHeader from "@/components/arcHeader";
import WIP from "@/components/wip";

export default function ArtistDetails() {

    const params = useParams()

    const [artist, setArtist] = useState<any>()

    useEffect(() => {
        const query = `
            query {
                artistById(id: ${params.id}) {
                    id,
                    name,
                    slug,
                    bio
                    latestAlbum {
                        id,
                        title
                    }
                },
                topSongs(count: 5, artistId: ${params.id}) {
                    id,
                    title
                }
            }
        `
        GraphQL<any>(query)
        .then((res) => {
            setArtist(res.data.artistById)
        })
    }, [])
        
    return (
        <React.Fragment>
            <Breadcrumbs>
                <Typography>Kiku</Typography>
                <Typography>Artist</Typography>
                <Typography className="clr-kiku-base"><b>{artist?.name}</b></Typography>
            </Breadcrumbs>
            <div id="page-kiku-artist-details" className="page-content">
                <div id="spotlight" className="grid">
                    <div id="artist-spotlight" className="box-shadow bg-platform-dark border-radius-md">
                        <div id="artist-text" className="p-a-sm">
                            <h2 className="clr-kiku-base txt-xl">Artist Spotlight</h2>
                            <p className="txt-lg">{artist?.name}</p>
                            <p className="txt-xs">{artist?.bio}</p>
                        </div>
                        <div id="artist-image">
                            <div className="mask"></div>
                            <img src={`/storage/kiku/artist/${artist?.id}.jpg`} alt="" />
                            {/* <Button variant="contained" color="primary">
                                Discover {featuredArtist?.name}
                            </Button> */}
                        </div>
                    
                    </div>
                    <div id="album-spotlight" className="box-shadow p-a-sm bg-platform-dark border-radius-md">
                        <h2 className="txt-lg">{artist?.name}'s <span className="clr-kiku-base">Featured Album</span></h2>
                        <WIP />
                    </div>
                </div>
                <div id="artist-content">
                    <div id="detail" className="flex-row flex-row--gap-md">
                        <div id="message">
                            <ArcHeader title={`Message from ${artist?.name}`} />
                        </div>
                        <div id="socials">
                            <ArcHeader title='Socials' />
                        </div>
                    </div>
                    <div id="songs">
                        content
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}