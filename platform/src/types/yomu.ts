import { Franchise } from "./franchise"
import { Character, Media } from "./shared";

export interface Work extends Media {
    title_alternatives: string[],
    status: string,
    characters: Character[],
    genres: string[],
    related: any,
    total_volumes: number,
    total_chapters: number,
    type: string,
    publisher: any,
    publishingStartDate: string,
    publishingEndDate: string,
    franchise: Franchise,
    studio: any,
    authors: [
        {
            name: string,
            role: string
        }
    ],
    previousWork: {
        toWork: Work
    },
    nextWork: {
        toWork: Work
    }
}