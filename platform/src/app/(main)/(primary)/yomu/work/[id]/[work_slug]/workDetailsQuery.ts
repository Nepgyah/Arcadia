import { GraphQL } from "@/util/api/api"

export async function fetchWork(id: string) {
    const query = 
    `
        query {
            workById(id: ${id}) {
            id,
            slug,
            title,
            score,
            summary,
            rating,
            genres {
                id,
                name
            },
            franchise {
                id,
                name,
                socials
            },
            status,
            characters {
                character {
                    id,
                    firstName,
                    lastName
                }
            },
            totalVolumes,
            totalChapters,
            type,
            authors {
                author {
                    name
                },
                
            },
            publisher {
                name
            },
            publishingStartDate,
            publishingEndDate,
            previousWork {
                toWork {
                    id,
                    title
                },
                relationType
            },
            nextWork {
                toWork {
                    id,
                    title
                },
                relationType
                }
            }
        }
    `

    const res = await GraphQL<any>(query)
    return res.data.workById
}

export async function fetchCharacters(id: string) {
    const query = 
    `
        query {
            charactersByWork(id: ${id}) {
                id
                role,
                character {
                    id
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

    const res = await GraphQL<any>(query)
    return res.data.charactersByWork
}

export async function fetchFranchiseByWork(id: string) {
    const query = `
        query {
            franchiseByWork(id: ${id}) {
                id,
                name,
                socials
            }, 
        }
    `

    const res = await GraphQL<any>(query);
    console.log(res.data)
    return res.data.franchiseByWork
}