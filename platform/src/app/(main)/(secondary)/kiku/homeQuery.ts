import { GraphQL } from "@/util/api/api"

type TopSongsPromise = {
    data: {
        topSongs: any[]
    }
}

export async function fetchTopSongs() {
    const query = `
    query {
        topSongs(count: 5){
            id,
            title,
            artist {
                id,
                slug,
                name
            }
            album {
            id
            }
        }
    }
    `

    const res = await GraphQL<TopSongsPromise>(query)
    return res.data.topSongs
}

export type TopAlbumsPromise = {
    data: {
        topAlbums: any[]
    }
}

export async function fetchTopAlbums() {
    const query = `
    query {
        topAlbums(count: 5) {
            id,
            title,
            artist {
                id,
                name,
                slug
            }
        }
    }
    `

    const res = await GraphQL<TopAlbumsPromise>(query)
    return res.data.topAlbums
}

export type TopArtistsPromise = {
    data: {
        topArtists: any[]
    }
}

export async function fetchTopArtists() {
    const query = `
    query {
        topArtists(count: 5) {
            id,
            name,
            slug
        }
    }
    `

    const res = await GraphQL<TopArtistsPromise>(query)
    return res.data.topArtists
}

export type FeaturedArtistPromise = {
    data: {
        featureArtist: any,
        featuredAlbum: any
    }
}

export async function fetchKikuFeatured() {
    const query = `
    query {
        featuredArtist {
            id,
            name,
            bio
        },
        featuredAlbum {
            id,
            title
        }
    }
    `

    const res = await GraphQL<FeaturedArtistPromise>(query)
    return res.data
}