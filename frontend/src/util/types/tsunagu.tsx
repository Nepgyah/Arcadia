export interface Post {
    id: number,
    user: {
        id: number,
        username: number,
        picture_preset: number
    },
    title: string,
    content: string,
    comment_count: number,
    community: Community,
    comments: Comment[]
}

export interface Community {
    id: number,
    title: string,
    slug: string,
    description?: string,
    posts: number,
    created_at: any
}

export interface Comment {
    id: number,
    user: {
        id: number,
        username: string
    },
    content: string,
    created_at: any,
    replies: Comment[]
}

