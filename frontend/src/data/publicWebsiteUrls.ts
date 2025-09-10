interface Url {
    name: string,
    path: string,
}

export const PrimaryAppUrls: Url[] = [
    { name: 'miru', path: '/apps/miru'},
    { name: 'yomu', path: '/apps/yomu'},
    { name: 'asobu', path: '/apps/asobu'},
    { name: 'kau', path: '/apps/kau'},
    { name: 'tsunagu', path: '/apps/tsunagu'},
]

export const SecondaryAppUrls: Url[] = [
    { name: 'kiku', path: '/apps/kiku'},
    { name: 'todokeru', path: '/apps/todokeru'},
    { name: 'hiku', path: '/apps/hiku'},
    { name: 'sagasu', path: '/apps/sagasu'},

    { name: 'kumitateru', path: '/apps/kumitateru'},
    { name: 'iku', path: '/apps/iku'},

    { name: 'shiru', path: '/apps/shiru'},
    { name: 'manabu', path: '/apps/manabu'},
]

export const D2XUrls: Url[] = [
    { name: 'About Us', path: '/d2x/about-us'},
    { name: 'Team', path: '/d2x/team'},
    { name: 'Careers', path: '/d2x/careers'},
    { name: 'Esports', path: '/d2x/esports'},
]

export const ResourceUrls: Url[] = [
    { name: 'Case Studies', path: '/resource/case-study'},
    { name: 'FAQ', path: '/resource/faq'},
    { name: 'legal', path: '/resource/legal'},
]