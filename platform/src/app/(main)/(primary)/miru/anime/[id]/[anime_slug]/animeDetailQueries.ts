import { Franchise } from "@/types/franchise";
import { Anime } from "@/types/miru";
import { Character } from "@/types/shared";
import { GraphQL } from "@/util/api/api";

interface AnimeOverviewQuery {
    data: {
        animeById: Anime
    }
}

export async function getAnime(id : string) {
    const query = 
    `
        query {
            animeById(id: ${id}) {
                id,
                title,
                genres {
                    id,
                    name
                },
                franchise {
                    id,
                    name,
                    socials
                },
                score,
                users,
                slug,
                summary,
                season,
                status,
                previousAnime {
                    relationType
                    fromAnime {
                        id,
                        slug,
                        title
                    }
                },
                nextAnime {
                    relationType
                    toAnime {
                        id,
                        slug,
                        title
                    }
                },
                type,
                studio {
                    name
                },
                rating,
                airingStartDate,
                airingEndDate,
                themes
            }
        }
    `
    const res = await GraphQL<AnimeOverviewQuery>(query);
    return res.data.animeById
}

interface CharactersByAnimeQuery {
    data: {
        charactersByAnime: Character[]
    }
}

export async function getCharactersByAnime(id: string) {
    const query = `
        query {
            charactersByAnime(id: ${id}) {
            id,
            character {
                id,
                firstName,
                lastName,
                playedBy {
                    id,
                    firstName,
                    lastName
                }
            }
            role
        }      
    }
    `

    const res = await GraphQL<CharactersByAnimeQuery>(query);
    return res.data.charactersByAnime
}

interface FranchiseByAnimeQuery {
    data: {
        franchiseByAnime: Franchise
    }
}

export async function getFranchiseByAnime(id: string) {
    const query = `
        query {
            franchiseByAnime(id: ${id}) {
            name
        }     
    }
    `

    const res = await GraphQL<FranchiseByAnimeQuery>(query);
    return res.data.franchiseByAnime
}