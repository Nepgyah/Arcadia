import { social } from "./franchise"

export interface Character {
    id: number,
    first_name: string,
    last_name?: string,
    slug: string,
    isPlayable?: boolean,
    role?: string   
}

export interface Genre {
    id: string,
    name: string
}

export interface Media {
    id: number,
    title: string,
    score: number,
    users: number,
    slug: string,
    summary: string,
    created_at: string,
    updated_at: string
}

export interface Talent {
    id: string,
    slug: string,
    bio: string,
    socials: {
        website: social | undefined,
        twitter: social | undefined,
        instagram: social | undefined,
        youtube: social | undefined,
        reddit: social | undefined,
    }
}

export type App = 'miru' | 'yomu' | 'asobu' | 'kau' | 'tsunagu' | 'iku' | 'shiru' | 'hiku' | 'kumitateru' | 'kiku' | 'dashboard'
