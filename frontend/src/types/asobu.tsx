import { Character } from "./shared"

export interface Company {
    id: number,
    name: string
}

export interface GameRelation {
    id: number,
    name: string,
    slug: string,
    relation: string
}
export interface Game {
    id: number,
    slug: string,
    title: string,
    score: number,
    users: number,
    genres: any,
    summary: string,
    status: string,
    esrb_rating: string,
    pegi_rating: string,
    character: any,
    previous_games: GameRelation[],
    next_games: GameRelation[],
    developers: Company[],
    publishers: Company[],
    has_campaign_mode: boolean,
    has_pvp_mode: boolean,
    has_pve_mode: boolean,
    is_on_console: boolean,
    is_on_pc: boolean,
    release_date: any,
    franchise: any,
    characters: Character[]
}