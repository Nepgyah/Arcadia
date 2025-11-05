import { Franchise } from "./franchise"

export interface Anime {
    id: number,
    slug: string,
    title: string,
    summary: string,
    season: {
        id: number,
        season: string,
        year: number
    },
    genres: string[],
    characters: any[],
    previousAnime: {
        relationType: string,
        fromAnime: {
            id: number,
            title: string,
            slug: string
        },
    },
    nextAnime: {
        relationType: string,
        toAnime: {
            id: number,
            title: string,
            slug: string
        }
    },
    status: string,
    type: string,
    studio: {
        name: string
    },
    score: number,
    users: number,
    rating: string,
    airingStartDate: string,
    airingEndDate: string,
    franchise: Franchise,
    themes: {
        opening: [AnimeTheme],
        ending: [AnimeTheme]
    }
}

export interface AnimeTheme {
    id: string,
    title: string,
    artist:string,
    startingEpisode: number,
    endingEpisode: number
}