export interface url {
    name: string,
    path: string,
    sub_link?: url
}

export const mainboard: url[] = [
    { name: "Home", path: ""},
]

export const miruNav: url[] = [
    { name: "Miru Home", path: "/miru"},
    { name: "Search", path: "/miru/search"},
    { name: "All Time", path: "/miru/all-time"},
    { name: "Seasonal", path: "/miru/seasonal"},
]

export const yomuNav: url[] = [
    { name: "Yomu Home", path: "/yomu"},
    { name: "All Time", path: "/yomu/all-time"},
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