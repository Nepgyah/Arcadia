export interface teamMember {
    firstName: string,
    lastName?: string,
    position: string,
    url: string,
}

export interface realMember extends teamMember {
    linkedin: string
}
export const leadershipSpecial: realMember[] = [
    { firstName: "Miporin", position: "Co founder", url: "me.jpg", linkedin: 'https://www.linkedin.com/in/auston-pawell-9726581b1'},
    { firstName: "Tommy", position: "Co founder", url: "tom-1.jpg", linkedin: 'https://www.linkedin.com/in/thomas-beckler-02bb19221'},
    { firstName: "Darkstar",  position: "Chief Culinary Officer", url: "darkstar.jpg", linkedin: 'https://www.linkedin.com/in/matthew-mcclimans-8451462b3'},
    { firstName: "Jon", lastName: "Lühmann", position: "Chief Design Officer", url: "jon.jpg", linkedin: 'https://www.linkedin.com/in/jon-luehmann/'},
]
export const leadership: teamMember[] = [
    { firstName: "Himeko", lastName: "Murata", position: "Chief Strategy Officer", url: "himeko.jpg"},
    { firstName: "Harmless wind", position: "Chief Technology Officer", url: "tom-2.jpg"},
    { firstName: "Groza", position: "Chief Operating Officer", url: "groza.jpg"},
    { firstName: "Yukong", position: "Chief Logistics Officer", url: "yukong.jpg"},
    { firstName: "Pheonix", lastName: "Wright", position: "Chief Legal Officer", url: "pheonix-wright.jpg"},
    { firstName: "The", lastName: "Herta", position: "Chief Innovation Officer", url: "the-herta.jpg"},
    { firstName: "Jade", lastName: "", position: "Chief Financial Officer", url: "jade.jpg"},
    { firstName: "Fugue", lastName: "", position: "Chief Marketing Officer", url: "fugue.jpg"},
    { firstName: "Hazuki", lastName: "Shizuka", position: "Chief Product Officer", url: "shizuku-hazuki.jpg"},
]

export const appLeads: teamMember[] = [
    { firstName: "T7 Your Bag Sensei", position: "Miru Lead", url: "me.jpg"},
    { firstName: "Frieren", position: "Yomu Lead", url: "frieren.jpg"},
    { firstName: "Hifumi", position: "Kau Lead", url: "hifumi.jpg"},
    { firstName: "Kyubey57", position: "Asobu Lead", url: "kyubey57.jpg"},
    { firstName: "March 7th", position: "Tsunagu Lead", url: "march.jpg"},
    { firstName: "Scrandy47", position: "Kumitateru Lead", url: "scrandy47.jpg"},
    { firstName: "Welt", lastName: "Yang", position: "Shiru Lead", url: "welt.jpg"},
    { firstName: "Bucko", position: "Iku Lead", url: "bucko.jpg"},
    { firstName: "Solari", position: "Hiku Lead", url: "solaris.jpg"},
    { firstName: "Serval", position: "Kiku Lead", url: "serval.jpg"},
]

export const dev: teamMember[] = [
    { firstName: "Umiko", lastName: "Ahagon", position: "Principal Engineer", url: "umiko-ahagon.jpg"},
    { firstName: "Aiba", lastName: "Asagi", position: "Senior Engineer", url: "aiba-asagi.jpg"},
    { firstName: "Himari", lastName: "Akeboshi", position: "Senior Engineer", url: "akeboshi-himari.jpg"},
    { firstName: "Tsubame", lastName: "Narumi", position: "Mid-Level Engineer", url: "tsubame-narumi.jpg"},
    { firstName: "Nene", lastName: "Sakura", position: "Mid-Level Engineer", url: "nene-sakura.jpg"},
    { firstName: "Utaha", lastName: "Shiraishi", position: "Mid-Level Engineer", url: "shiraishi-utaha.jpg"},
    { firstName: "Nekozuka", lastName: "Hibiki", position: "Mid-Level Engineer", url: "nekozuka-hibiki.jpg"},
    { firstName: "Momoi", lastName: "Saiba", position: "Junior Engineer", url: "momoi-saiba.jpg"},
    { firstName: "Midori", lastName: "Saiba", position: "Junior Engineer", url: "midori-saiba.jpg"},
    { firstName: "Yuzu", lastName: "Hanaoka", position: "Junior Engineer", url: "yuzu-hanaoka.jpg"},
]

export const design: teamMember[] = [
    { firstName: "Rin", lastName: "Tooyama", position: "Principal Designer", url: "tooyama-rin.jpg"},
    { firstName: "Kou", lastName: "Yagami", position: "Senior Designer", url: "kou-yagami.jpg"},
    { firstName: "Yun", lastName: "Iijima", position: "Senior Designer", url: "yun-iijima.jpg"},
    { firstName: "Hifumi", lastName: "Takimoto", position: "Senior Designer", url: "hifumi-takimoto.jpg"},
    { firstName: "Aoba", lastName: "Suzukaze", position: "Junior Designer", url: "aoba-suzukaze.jpg"},
    { firstName: "Momiji", lastName: "Mochizuki", position: "Junior Designer", url: "momiji-mochizuki.jpg"},
]

export const finance: teamMember[] = [
    { firstName: "Topaz", position: "Finance Director", url: "topaz.jpg"},
    { firstName: "Aventurine", position: "Asset Manager", url: "aventurine.jpg"},
    { firstName: "Oki", lastName: "Aoi", position: "Accounting Manager", url: "oki-aoi.jpg"},
    { firstName: "Yuuka", lastName: "Hayase", position: "Treasurer", url: "yuuka.jpg"},
    { firstName: "Ayane", lastName: "Okusora", position: "Investment Analyst", url: "ayane-okusora.jpg"},
]

export const marketing: teamMember[] = [
    { firstName: "Fuyutsuki", position: "Marketing Director", url: "fuyutsuki.jpg"},
    { firstName: "Himuro", position: "Prodcut Marketing Manager", url: "himuro.jpg"},
    { firstName: "Saejima", position: "Outreach & Promotions", url: "saejima.jpg"},
    { firstName: "Komori", position: "Social Media Manager", url: "komori.jpg"},
    { firstName: "Otonashi", position: "Brand Strategist", url: "otonashi.jpg"},
    { firstName: "Katori", position: "Event Manager", url: "katori.jpg"},
]

export const rnd: teamMember[] = [
    { firstName: "Asta", position: "R&D Engineer", url: "asta.jpg"},
    { firstName: "Raun", lastName: "Mei", position: "R&D Engineer", url: "raun-mei.jpg"},
    { firstName: "Screwllum", position: "AI Reseacher", url: "screwllum.jpg"},
    { firstName: "Veritas", lastName: "Ratio", position: "Algorithms Expert", url: "dr-ratio.jpg"},
    { firstName: "Herta 1", position: "R&D Assistant", url: "herta-1.jpg"},
    { firstName: "Herta 2", position: "R&D Assistant", url: "herta-2.jpg"},
    { firstName: "Herta 3", position: "R&D Assistant", url: "herta-3.jpg"},
]

export const devops: teamMember[] = [
    { firstName: "Silverwolf", position: "Principal DevOps Engineer", url: "silver-wolf.jpg"},
    { firstName: "Kagami", lastName: "Chihiro", position: "Senior DevOps Engineer", url: "kagami-chihiro.jpg"},
    { firstName: "Otose", lastName: "Kotama", position: "Security Analyst", url: "otose-kotama.jpg"},
    { firstName: "Omagari", lastName: "Hare", position: "SOC Engineer", url: "omagari-hare.jpg"},
    { firstName: "Konuri", lastName: "Maki", position: "Network Security", url: "konuri-maki.jpg"},
]

export const culinary: teamMember[] = [
    { firstName: "Yukihira", lastName: 'Soma', position: "Sous Chef", url: "yukihira-soma.jpg"},
    { firstName: "Nakiri", lastName: 'Erina', position: "Soucier", url: "erina-nakiri.jpg"},
    { firstName: "Nakiri", lastName: 'Alice', position: "Poissonnier", url: "alice-nakiri.png"},
    { firstName: "Hisako", lastName: 'Arato', position: "Boulanger", url: "hisako-arato.jpg"},
    { firstName: "Tadakoro", lastName: 'Megumi', position: "Friturier", url: "megumi-tadakoro.jpg"},
    { firstName: "Miko", lastName: 'Ikumi', position: "Grillardin", url: "mito-ikumi.jpg"},
]

