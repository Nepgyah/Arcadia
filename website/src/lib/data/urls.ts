interface Url {
    name: string,
    path: string,
}

export const PrimaryAppUrls: Url[] = [
    { name: 'miru', path: '/miru'},
    { name: 'yomu', path: '/yomu'},
    { name: 'asobu', path: '/asobu'},
    { name: 'kau', path: '/kau'},
    { name: 'tsunagu', path: '/tsunagu'},
]

export const SecondaryAppUrls: Url[] = [
    { name: 'kiku', path: '/kiku'},
    { name: 'todokeru', path: '/todokeru'},
    { name: 'hiku', path: '/hiku'},
    { name: 'sagasu', path: '/sagasu'},

    { name: 'kumitateru', path: '/kumitateru'},
    { name: 'iku', path: '/iku'},

    { name: 'shiru', path: '/shiru'},
    { name: 'manabu', path: '/manabu'},
]

export const D2XUrls: Url[] = [
    { name: 'About Us', path: '/d2x/about-us'},
    { name: 'Team', path: '/d2x/team'},
    { name: 'Careers', path: '/d2x/careers'},
    // { name: 'Esports', path: '/d2x/esports'},
]

export const ResourceUrls: Url[] = [
    { name: 'Case Studies', path: '/resource/case-study'},
    { name: 'FAQ', path: '/resource/faq'},
    { name: 'legal', path: '/resource/legal'},
]