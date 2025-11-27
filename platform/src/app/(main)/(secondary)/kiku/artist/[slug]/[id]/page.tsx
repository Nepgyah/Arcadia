import React, { Suspense, use } from "react";
import { GraphQL } from "@/util/api/api"

import { Button, Link, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import ArcHeader from "@/components/arcHeader";
import BreadcrumbSetter from "@/components/breadcrumb/setBreadcrumbs";
import FranchiseSocials from "@/components/media/franchiseSocials";

import { Album, Artist, Song } from "@/types/kiku";

import '@/styles/pages/kiku/_artist-details.scss';

export default async function ArtistDetails(
    props: {
        params: Promise<{slug: string, id: string}>
    }
) {
    const { id } = await props.params
    const artistPromise = fetchArtistDetails(id)
    const topSongsPromise = fetchArtistTopSongs(id);

    return (
        <React.Fragment>
            <Suspense>
                <Breadcrumb artistPromise={artistPromise} />
            </Suspense>
            <div id="page-kiku-artist-details" className="page-content">
                <div id="spotlight" className="grid">
                    <Suspense fallback={
                        <Skeleton variant="rectangular" height={'350px'} width={'100%'}/>
                    }>
                        <Hero artistPromise={artistPromise} />
                    </Suspense>
                </div>
                <div id="artist-content">
                    <div id="detail" className="flex-row flex-row--gap-md">
                        <div id="message">
                            <Suspense>
                                <Message artistPromise={artistPromise}/>
                            </Suspense>
                        </div>
                        <div id="socials">
                            <ArcHeader title='Socials' />
                            <Suspense fallback={ <Skeleton animation={`wave`} height={'200px'} width={'100%'}/>}>
                                <FranchiseSocials franchisePromise={artistPromise} />
                            </Suspense>
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
                                    <Suspense>
                                        <TopSongs topSongsPromise={topSongsPromise}/>
                                    </Suspense>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

function Breadcrumb({artistPromise}:{artistPromise: Promise<Artist>}) {
    const artist = use(artistPromise)

    return (
        <BreadcrumbSetter breadcrumbs={['Kiku', 'Artist', `${artist.name}`]} />
    )
}

interface KikuHero extends Artist {
    latestAlbum: Album
}
function Hero({artistPromise}:{artistPromise: Promise<KikuHero>}) {
    const artist = use(artistPromise);

    return (
        <React.Fragment>
            <div id="artist-spotlight" className="box-shadow bg-platform-dark border-radius-md">
                <div id="artist-text" className="p-a-sm">
                    <h2 className="clr-kiku-base txt-xl">Artist Spotlight</h2>
                    <p className="txt-lg">{artist.name}</p>
                    <p className="txt-xs">{artist.bio}</p>
                </div>
                <div id="artist-image">
                    <div className="mask"></div>
                    <img src={`/storage/kiku/artist/${artist.id}.jpg`} alt="" />
                </div>
            </div>
            <div id="album-spotlight" className="box-shadow p-a-sm bg-platform-dark border-radius-md">
                <h2 className="txt-lg">{artist.name}'s <span className="clr-kiku-base">Latest Album</span></h2>
                <div>
                    <img src={`/storage/kiku/album/${artist.latestAlbum.id}.jpg`} alt="" />
                    <div>
                        <p className="txt-lg">{artist.latestAlbum.title}</p>
                        <Link href={`/kiku/album/${artist.latestAlbum.id}`}>
                            <Button variant="contained" color="primary">
                                Stream Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
function Message({artistPromise}:{artistPromise: Promise<Artist>}) {
    const artist = use(artistPromise)

    return (
        <React.Fragment>
            <ArcHeader title={`Message from ${artist?.name}`} />
            <p>{artist.specialMessage ? artist.specialMessage : `A message from ${artist.name} hasn't been written... yet!`}</p>
        </React.Fragment>
    )
}

function TopSongs({topSongsPromise}:{topSongsPromise: Promise<Song[]>}) {
    const topSongs = use(topSongsPromise)

    return (
        <React.Fragment>
            {
                topSongs?.map((song: any, idx: number) => (
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

async function fetchArtistDetails(id: string) {
    const query = `
        query {
            artistById(id: ${id}) {
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
        }
    `

    const res = await GraphQL<any>(query)
    return res.data.artistById
}

async function fetchArtistTopSongs(id: string) {
    const query = `
        query {
            topSongs(count: 5, artistId: ${id}) {
                id,
                title,
                plays
            }
        }
    `

    const res = await GraphQL<any>(query)
    return res.data.topSongs
}