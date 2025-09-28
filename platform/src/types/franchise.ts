export interface social {
    url: string,
    handle: string,
}

export interface Franchise {
    'id': number,
    'name': string,
    'slug': string,
    'socials': {
        'website': social | undefined,
        'twitter': social | undefined,
        'instagram': social | undefined,
        'youtube': social | undefined,
        'reddit': social | undefined,
    }
}