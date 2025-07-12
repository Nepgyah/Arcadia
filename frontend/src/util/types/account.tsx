export type User = {
    id: number,
    username: string,
    tag: number,
    email: string,
    real_name: string,
    about: string,
    birth_date: string | null,
    updated_at: string,
    created_at: string,
    picture_preset: number,
    color_preset: number
}