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
    previousAnime: any[],
    nextAnime: any[],
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
    franchise: Franchise
}