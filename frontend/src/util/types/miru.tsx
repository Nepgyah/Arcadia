export interface Anime {
    id: number,
    slug: string,
    title: string,
    title_ja: string,
    title_romaji: string,
    title_alternatives: string[],
    summary: string,
    season: {
        id: number,
        season: string,
        year: number
    },
    characters: any[],
    previous_anime: any[],
    next_anime: any[],
    status: string,
    type: string,
    studio: string,
    score: number,
    users: number,
    rating: string,
    airing_start_date: string,
    airing_end_date: string
}