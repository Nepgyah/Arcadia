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

// export const miruNav: url[] = [
//     { name: "Miru Home", path: "/miru"},
//     { name: "List", path: "/miru/list"},
//     { name: "Search", path: "/miru/search"}
// ]

// export const asobuNav: url[] = [
//     { name: "Asobu Home", path: "/asobu"},
//     { name: "Game Shellf", path: "/asobu/list"},
//     { name: "Search", path: "/asobu/search"},
//     { name: "Mods", path: "/asobu/mods"},
//     { name: "Market", path: "/asobu/market"},
// ]