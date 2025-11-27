export const revalidate = 3600;

import React, { Suspense, use } from "react";
import Link from "next/link";
import { Button, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { GraphQL } from "@/util/api/api"

import ArcHeader from "@/components/arcHeader";
import BreadcrumbSetter from "@/components/breadcrumb/setBreadcrumbs";

import { Album } from "@/types/kiku";

import '@/styles/pages/kiku/_album-details.scss';

export default async function AlbumDetails(
    props: {
        params: Promise<{ id: string}>
    }
) {
    const { id } = await props.params
    const albumPromise = fetchAlbum(id);

    return (
        <React.Fragment>
            <Suspense>
                <Breadcrumb albumPromise={albumPromise} />
            </Suspense>
            <div id="page-kiku-album-details" className="page-content">
                <div id="header" className="grid grid--2-col-offset">
                    <Suspense fallback={
                        <>
                            <Skeleton variant="rectangular" height={350} width={'100%'} animation='wave' />
                            <Skeleton variant="rectangular" height={350} width={'100%'} animation='wave' />
                        </>
                    }>
                        <Hero albumPromise={albumPromise} />
                    </Suspense>
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
                                <Suspense>
                                    <Songs albumPromise={albumPromise} />
                                </Suspense>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <Suspense>
                    <MobileArtist albumPromise={albumPromise} />
                </Suspense>
            </div>
        </React.Fragment>
    )
}

function Breadcrumb({albumPromise}:{albumPromise: Promise<Album>}) {
    const album = use(albumPromise);

    return <BreadcrumbSetter breadcrumbs={['Kiku', 'Album', `${album.title}`]} />
}

function Hero({albumPromise}:{albumPromise: Promise<Album>}) {
    const album = use(albumPromise);

    return (
        <React.Fragment>
            <div id="album-summary" className="p-a-sm">
            <img className="border-radius-sm box-shadow" src={`/storage/kiku/album/${album.id}.jpg`} alt="" />
            <div className="text">
                <p className="txt-xl"><b>{album.title}</b></p>
                <p>{album.type}</p>
            </div>
        </div>
        <div id="artist-desktop-summary" className="p-a-sm">
            <img className="border-radius-sm box-shadow" src={`/storage/kiku/artist/${album.artist.id}.jpg`} alt={album.artist.name} />
            <div className="text">
                <p className="txt-xl">{album.artist.name}</p>
                <Link href={`/kiku/artist/${album.artist.slug}/${album.artist.id}`}>
                    <Button variant="contained">Discover {album.artist.name}</Button>
                </Link>
            </div>
        </div>
        </React.Fragment>
    )
}

function Songs({albumPromise}:{albumPromise: Promise<Album>}) {
    const album = use(albumPromise);

    return (
        <React.Fragment>
            {
                album.songs.map((song: any, idx: number) => (
                    <TableRow key={song.title}>
                        <TableCell>{idx + 1}</TableCell>
                        <TableCell>{song.title}</TableCell>
                        <TableCell>{song.plays}</TableCell>
                    </TableRow>
                ))
            }
        </React.Fragment>
    )
}

function MobileArtist({albumPromise}:{albumPromise: Promise<Album>}) {
    const album = use(albumPromise)

    return (
        <div id="artist-mobile-summary" className="p-a-sm">
            <img className="border-radius-sm box-shadow" src={`/storage/kiku/artist/${album?.artist.id}.jpg`} alt={album?.artist.name} />
            <div className="text">
                <p><b>{album.artist.name}</b></p>
                <Button variant="contained">Discover {album.artist.name}</Button>
            </div>
        </div>
    )
}
async function fetchAlbum(id: string) {
    const query = `
        query {
            albumById(id: "${id}") {
                id,
                title,
                type,
                songs {
                    title,
                    plays
                },
                artist {
                    id,
                    name,
                    slug
                }
            }
        }
    `

    const res = await GraphQL<any>(query);
    return res.data.albumById
}