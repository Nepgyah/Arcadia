'use client';

import { GraphQL } from "@/util/api/api"
import { Breadcrumbs, Button, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useParams } from "next/navigation"
import React, { useState } from "react";
import { useEffect } from "react"

import '@/styles/pages/kiku/_artist-details.scss';
import ArcHeader from "@/components/arcHeader";
import WIP from "@/components/wip";
import SocialMediaCard from "@/components/socialMediaCard";

export default function ArtistDetails() {

    const params = useParams()

    const [artist, setArtist] = useState<any>()
    const [topSongs, setTopSongs] = useState<any>()

    useEffect(() => {
        const query = `
            query {
                artistById(id: ${params.id}) {
                    id,
                    name,
                    slug,
                    bio,
                    socials,
                    specialMessage
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
            setTopSongs(res.data.topSongs)
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
                        
                    </div>
                </div>
                <div id="artist-content">
                    <div id="detail" className="flex-row flex-row--gap-md">
                        <div id="message">
                            <ArcHeader title={`Message from ${artist?.name}`} />
                            <p>{artist?.specialMessage ? artist.specialMessage : `A message from ${artist?.name} hasn't been written... yet!`}</p>
                        </div>
                        <div id="socials">
                            <ArcHeader title='Socials' />
                            <div id="socials-container" className="flex-row flex-row--gap-sm">
                                {
                                    artist?.socials?.website &&
                                    <SocialMediaCard 
                                        type="website"
                                        social={artist?.socials.website }
                                    />
                                }
                                {
                                    artist?.socials?.youtube &&
                                    <SocialMediaCard 
                                        type="youtube"
                                        social={artist?.socials.youtube }
                                    />
                                }
                                {
                                    artist?.socials?.twitter &&
                                    <SocialMediaCard 
                                        type="twitter"
                                        social={artist?.socials.twitter }
                                    />
                                }
                                {
                                    artist?.socials?.reddit &&
                                    <SocialMediaCard 
                                        type="reddit"
                                        social={artist?.socials.reddit }
                                    />
                                }
                            </div>
                        </div>
                    </div>
                    <div id="songs">
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
                                            topSongs?.map((song: any, idx: number) => (
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
            </div>
        </React.Fragment>
    )
}