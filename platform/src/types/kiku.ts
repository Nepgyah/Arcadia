import { Genre, Talent } from "./shared";

export interface Artist extends Talent{
    name: string,
    specialMessage: string
}

export interface Song {
    id: string,
    title: string,
    artist: Artist,
    featuredArtists: Artist[],
    genre: Genre[],
    plays: number,
    album: Album
}

export interface Album {
    id: string,
    title: string,
    type: string,
    artist: Artist,
    producer: any,
    releaseDate: string,
    plays: number,
    songs: Song[]
}