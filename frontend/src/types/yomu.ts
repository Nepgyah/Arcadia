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
    publishing_start_date: string,
    publishing_end_date: string,
    franchise: Franchise
}