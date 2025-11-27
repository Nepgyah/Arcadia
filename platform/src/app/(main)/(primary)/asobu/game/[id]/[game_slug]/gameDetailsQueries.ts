import { Game } from "@/types/asobu"
import { Franchise } from "@/types/franchise"
import { Character } from "@/types/shared"
import { GraphQL } from "@/util/api/api"

type GameDetailsPromise = {
    data: {
        gameById: Game
    }
}

export async function fetchGameDetails(id: string) {
    const query = `
        query {
            gameById(id: ${id}) {
                id,
                slug,
                summary,
                title,
                score,
                status,
                esrbRating,
                pegiRating,
                genres {
                    id,
                    name
                },
                previousGame {
                    fromGame {
                        id,
                        title,
                        slug
                    }
                },
                nextGame {
                    toGame {
                        id,
                        title,
                        slug
                    }
                },
                characters {
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
                },
                developers {
                    name
                },
                publishers {
                    name
                },
                hasCampaignMode,
                hasPvpMode,
                hasPveMode,
                isOnConsole,
                isOnPc,
                releaseDate,
                franchise {
                    id,
                    name,
                    socials
                }
            }
        }
    `

    const res = await GraphQL<GameDetailsPromise>(query)
    return res.data.gameById
}

type GameCharactersPromise = {
    data: {
        charactersByGame: Character[]
    }
}

export async function fetchGameCharacters(id: string) {
    const query = `
    query {
        charactersByGame(id: ${id}) {
            id
            role,
            isPlayable
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
        }
    }
    `

    const res = await GraphQL<GameCharactersPromise>(query)
    return res.data.charactersByGame
}

interface FranchiseByGamePromise {
    data: {
        franchiseByGame: Franchise
    }
}


export async function fetchFranchiseByGame(id: string) {
    const query = `
        query {
            franchiseByGame(id: ${id}) {
                id,
                name,
                socials
            } 
        }
    `

    const res = await GraphQL<FranchiseByGamePromise>(query);
    return res.data.franchiseByGame
}