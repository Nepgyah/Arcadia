'use client';

import React, { useEffect, useState } from "react";
import { Breadcrumbs, Typography } from "@mui/material";

import { apiGET } from "@/util/api/api";
import EntryCard from "@/components/platform/entryCard";
import WIP from "@/components/platform/wip";
import LinkedHeader from "@/components/platform/linkedHeader";
import KikuCard from "./components/kikuCard";

export default function MiruHome() {
    const [isLoading, setIsLoading] = useState(true);

    const [featuredArtist, setFeaturedArtist] = useState<any>()
    const [topSongs, setTopSongs] = useState<any[]>([])
    const [topAlbums, setTopAlbums] = useState<any[]>([])
    const [topArtists, setTopArtists] = useState<any[]>([])

    useEffect(() => {
        apiGET<any>('kiku/home/')
        .then((res) => {
            setFeaturedArtist(res.featured_artist)
            setTopSongs(res.top_songs)
            setTopAlbums(res.top_albums)
            setTopArtists(res.top_artists)
        })
    }, [])

    return (
        <React.Fragment>
            <Breadcrumbs>
                <Typography>Miru</Typography>
                <Typography>Home</Typography>
            </Breadcrumbs>
            <div id="page-kiku-home"  className="page-content">
                <div id="spotlight" className="grid grid--2-col-offset">
                    <div id="artist-spotlight" className="box-shadow">
                        <div id="artist-text">
                            <p>{featuredArtist?.name}</p>
                            <p>{featuredArtist?.bio}</p>
                        </div>
                        <div id="artist-image">
                            <div className="mask"></div>
                            <img src={`/storage/kiku/artist/${featuredArtist?.id}.jpg`} alt="" />
                        </div>
                    
                    </div>
                    <div id="album-spotlight">
                        
                    </div>
                </div>
                <div className="layout-grid-3">
                    <div>
                        <LinkedHeader title='Top Songs This Month' link="" linkText="See more"/>
                        <div  className="row-gap-sm row-divider">
                            {
                                topSongs?.map((song: any, idx: number) => (
                                    <KikuCard 
                                        number={idx + 1}
                                        id={song.id}
                                        title={song.title}
                                        subTitle={song.artist.name}
                                        type="song"
                                        mainLink={`/kiku/album/${song.album}`}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <LinkedHeader title='Top Albums This Month' link="" linkText="See more"/>
                        <div className="row-gap-sm row-divider">
                            {
                                topAlbums?.map((album: any, idx: number) => (
                                    <KikuCard 
                                        number={idx + 1}
                                        id={album.id}
                                        title={album.title}
                                        subTitle={album.artist.name}
                                        type="album"
                                        mainLink={`/kiku/album/${album.id}`}
                                        subLink={`/kiku/artist/${album.artist.id}`}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <LinkedHeader title='Top Artists This Month' link="" linkText="See more"/>
                        <div className="row-gap-sm row-divider">
                            {
                                topArtists?.map((artist: any, idx: number) => (
                                    <KikuCard 
                                        number={idx + 1}
                                        id={artist.id}
                                        title={artist.name}
                                        type="artist"
                                        mainLink={`/kiku/artist/${artist.id}`}
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