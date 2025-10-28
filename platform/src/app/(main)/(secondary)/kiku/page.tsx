import React, { useEffect, useState } from "react";
import { Breadcrumbs, Typography, Button } from "@mui/material";

import {  GraphQL } from "@/util/api/api";
import KikuCard from "./components/kikuCard";
import ArcHeader from "@/components/arcHeader";

import '@/styles/pages/kiku/_home.scss';
import WIP from "@/components/wip";
import Link from "next/link";

const query = `
    query {
        topSongs(count: 5){
            id,
            title,
            artist {
                id,
                slug,
                name
            }
            album {
            id
            }
        },
        topAlbums(count: 5) {
            id,
            title,
            artist {
                id,
                name,
                slug
            }
        },
        featuredArtist {
            id,
            name,
            bio
        },
        topArtists(count: 5) {
            id,
            name,
            slug
        },
        featuredAlbum {
            id,
            title
        }
    }
`;

export default async function MiruHome() {
    const res = await GraphQL<any>(query, { limit: 5});
    const { featuredArtist, featuredAlbum, topSongs, topAlbums, topArtists } = res.data;

    return (
        <React.Fragment>
            <Breadcrumbs>
                <Typography>Kiku</Typography>
                <Typography>Home</Typography>
            </Breadcrumbs>
            <div id="page-kiku-home"  className="page-content">
                <div id="spotlight" className="grid">
                    <div id="artist-spotlight" className="box-shadow bg-platform-dark border-radius-md">
                        <div id="artist-text" className="p-a-sm">
                            <h2 className="clr-kiku-base txt-xl">Artist Spotlight</h2>
                            <p className="txt-lg">{featuredArtist?.name}</p>
                            <p className="txt-xs">{featuredArtist?.bio}</p>
                        </div>
                        <div id="artist-image">
                            <div className="mask"></div>
                            <img src={`/storage/kiku/artist/${featuredArtist?.id}.jpg`} alt="" />
                            {/* <Button variant="contained" color="primary">
                                Discover {featuredArtist?.name}
                            </Button> */}
                        </div>
                    
                    </div>
                    <div id="album-spotlight" className="box-shadow p-a-sm bg-platform-dark border-radius-md">
                        <h2 className="txt-lg">{featuredArtist.name}'s <span className="clr-kiku-base">Featured Album</span></h2>
                        <div>
                            <img src={`/storage/kiku/album/${featuredAlbum?.id}.jpg`} alt="" />
                            <div>
                                <p className="txt-lg">{featuredAlbum.title}</p>
                                <Link href={`/kiku/album/${featuredAlbum.id}`}>
                                    <Button variant="contained" color="primary">
                                        Stream Now
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="top-kiku" className="grid grid--3-col">
                    <div>
                        <ArcHeader title='Top Songs This Month' />
                        <div  className="flex-row flex-row--gap-sm row-divider">
                            {
                                topSongs?.map((song: any, idx: number) => (
                                    <KikuCard 
                                        key={idx}
                                        number={idx + 1}
                                        id={song.album.id}
                                        title={song.title}
                                        subTitle={song.artist.name}
                                        type="album"
                                        mainLink={`/kiku/album/${song.album.id}`}
                                        subLink={`/kiku/artist/${song.artist.slug}/${song.artist.id}`}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <ArcHeader title='Top Albums This Month' />
                        <div className="flex-row flex-row--gap-sm row-divider">
                            {
                                topAlbums?.map((album: any, idx: number) => (
                                    <KikuCard 
                                        key={idx}
                                        number={idx + 1}
                                        id={album.id}
                                        title={album.title}
                                        subTitle={album.artist.name}
                                        type="album"
                                        mainLink={`/kiku/album/${album.id}`}
                                        subLink={`/kiku/artist/${album.artist.slug}/${album.artist.id}`}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <ArcHeader title='Top Artists This Month' />
                        <div className="flex-row flex-row--gap-sm row-divider">
                            {
                                topArtists?.map((artist: any, idx: number) => (
                                    <KikuCard 
                                        key={idx}
                                        number={idx + 1}
                                        id={artist.id}
                                        title={artist.name}
                                        type="artist"
                                        mainLink={`/kiku/artist/${artist.slug}/${artist.id}`}
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