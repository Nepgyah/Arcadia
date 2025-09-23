export interface Character {
    id: number,
    first_name: string,
    last_name?: string,
    slug: string,   
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

export type App = 'miru' | 'yomu' | 'asobu' | 'kau' | 'tsunagu' | 'iku' | 'shiru' | 'hiku' | 'kumitateru' | 'kiku' | 'dashboard'