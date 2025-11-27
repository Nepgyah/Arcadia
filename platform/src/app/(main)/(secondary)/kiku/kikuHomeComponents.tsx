import { Button } from "@mui/material";
import Link from "next/link";
import React, { use } from "react";
import KikuCard from "./kikuCard";
import { Album, Artist, Song } from "@/types/kiku";

export function Featured({featuredPromise}:{featuredPromise: Promise<any>}) {
    const featured = use(featuredPromise);

    return (
        <React.Fragment>
            <div id="artist-spotlight" className="box-shadow bg-platform-dark border-radius-md">
                <div id="artist-text" className="p-a-sm">
                    <h2 className="clr-kiku-base txt-xl">Artist Spotlight</h2>
                    <p className="txt-lg">{featured.featuredArtist.name}</p>
                    <p className="txt-xs">{featured.featuredArtist.bio}</p>
                </div>
                <div id="artist-image">
                    <div className="mask"></div>
                    <img src={`/storage/kiku/artist/${featured.featuredArtist.id}.jpg`} alt="" />
                </div>
            </div>
            <div id="album-spotlight" className="box-shadow p-a-sm bg-platform-dark border-radius-md">
                <h2 className="txt-lg">{featured.featuredArtist.name}'s <span className="clr-kiku-base">Featured Album</span></h2>
                <div>
                    <img src={`/storage/kiku/album/${featured.featuredAlbum.id}.jpg`} alt="" />
                    <div>
                        <p className="txt-lg">{featured.featuredAlbum.title}</p>
                        <Link href={`/kiku/album/${featured.featuredAlbum.id}`}>
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

export function TopSongs({topSongsPromise}:{topSongsPromise: Promise<Song[]>}) {
    const topSongs = use(topSongsPromise);

    return (
        <React.Fragment>
            {
                topSongs?.map((song: Song, idx: number) => (
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
        </React.Fragment>
    )
}

export function TopAlbums({topAlbumsPromise}:{topAlbumsPromise: Promise<Album[]>}) {
    const topAlbums = use(topAlbumsPromise);

    return (
        <React.Fragment>
            {
                topAlbums?.map((album: Album, idx: number) => (
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
        </React.Fragment>
    )
}

export function TopArtists({topArtistsPromise}:{topArtistsPromise: Promise<Artist[]>}) {
    const topArtists = use(topArtistsPromise);
  
    return (
        <React.Fragment>
            {
                topArtists?.map((artist: Artist, idx: number) => (
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
        </React.Fragment>
    )
}