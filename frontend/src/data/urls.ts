export interface url {
    name: string,
    path: string,
    sub_link?: url
}

export const mainboard: url[] = [
    { name: "Home", path: ""},
    // { name: "Profile", path: "/profile"},
    // { name: "Settings", path: "/settings"}
]

export const miruNav: url[] = [
    { name: "Miru Home", path: "/miru"},
    { name: "Search Anime", path: "/miru/search"},
]

export const yomuNav: url[] = [
    { name: "Yomu Home", path: "/yomu"},
]

export const asobuNav: url[] = [
    { name: "Asobu Home", path: "/asobu"},
]

export const kauNav: url[] = [
    { name: "Kau Home", path: "/kau"},
]

export const tsunaguNav: url[] = [
    { name: "Tsunagu", path: "/tsunagu"},
]

export const kumitateruNav: url[] = [
    { name: "Kumi Home", path: "/kumitateru"},
]