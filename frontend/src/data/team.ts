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
    { firstName: "Komi", lastName: "Shouko", position: "Sagasu Lead", url: "komi-san.jpg"},
    { firstName: "Ruby", lastName: "Hoshino", position: "Todokeru", url: "ruby.jpg"},
    { firstName: "El Condor", lastName: "Pasa", position: "Manabu Lead", url: "el-condor-pasa.jpg"},
]

export const dev: teamMember[] = [
    { firstName: "Umiko", lastName: "Ahagon", position: "Principal Engineer", url: "umiko-ahagon.jpg"},
    { firstName: "Himari", lastName: "Akeboshi", position: "Principal Engineer", url: "akeboshi-himari.jpg"},
    { firstName: "Aiba", lastName: "Asagi", position: "Senior Full-Stack Engineer", url: "aiba-asagi.jpg"},
    { firstName: "Kobayashi", position: "Senior Full-Stack Engineer", url: "kobayashi.jpg"},
    { firstName: "Hibiki", lastName: "Nekozuka", position: "Senior Frontend Engineer", url: "nekozuka-hibiki.jpg"},
    { firstName: "Utaha", lastName: "Shiraishi", position: "Senior Backend Engineer", url: "shiraishi-utaha.jpg"},
    { firstName: "Tsubame", lastName: "Narumi", position: "Mid-Level Frontend Engineer", url: "tsubame-narumi.jpg"},
    { firstName: "Mai", lastName: "Nekota", position: "Mid-Level Frontend Engineer", url: "mai-nekota.jpg"},
    { firstName: "Taki", lastName: "Momose", position: "Mid-Level Backend Engineer", url: "taki-momose.jpg"},
    { firstName: "Aoi", lastName: "Hiyoshi", position: "Mid-Level Backend Engineer", url: "aoi-hiyoshi.jpg"},
    { firstName: "Nene", lastName: "Sakura", position: "Mid-Level Backend Engineer", url: "nene-sakura.jpg"},
    { firstName: "Yuzu", lastName: "Hanaoka", position: "Junior Full-Stack Engineer", url: "yuzu-hanaoka.jpg"},
    { firstName: "Momoi", lastName: "Saiba", position: "Junior Frontend Engineer", url: "momoi-saiba.jpg"},
    { firstName: "Midori", lastName: "Saiba", position: "Junior Backend Engineer", url: "midori-saiba.jpg"},
]

export const design: teamMember[] = [
    { firstName: "Rin", lastName: "Tooyama", position: "Principal Designer", url: "tooyama-rin.jpg"},
    { firstName: "Kou", lastName: "Yagami", position: "Senior Designer", url: "kou-yagami.jpg"},
    { firstName: "Yun", lastName: "Iijima", position: "Senior Designer", url: "yun-iijima.jpg"},
    { firstName: "Hifumi", lastName: "Takimoto", position: "Senior Designer", url: "hifumi-takimoto.jpg"},
    { firstName: "Hotaru", lastName: "Hoshikawa", position: "Junior Designer", url: "hotaru-hoshikawa.jpg"},
    { firstName: "Aoba", lastName: "Suzukaze", position: "Junior Designer", url: "aoba-suzukaze.jpg"},
    { firstName: "Momiji", lastName: "Mochizuki", position: "Junior Designer", url: "momiji-mochizuki.jpg"},
    { firstName: "Sagiri", lastName: "Izumi", position: "Junior Designer", url: "sagiri-izumi.jpg"},
]

export const finance: teamMember[] = [
    { firstName: "Ningguang", position: "Finance Director", url: "ningguang.jpg"},
    { firstName: "Topaz", position: "Treasurer", url: "topaz.jpg"},
    { firstName: "Aventurine", position: "Asset Manager", url: "aventurine.jpg"},
    { firstName: "Oki", lastName: "Aoi", position: "Accounting Manager", url: "oki-aoi.jpg"}
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
    { firstName: "Yukihira", lastName: 'Soma', position: "Chef de Cuisine", url: "yukihira-soma.jpg"},
    { firstName: "Escoffier", position: "Sous Chef", url: "escoffier.jpg"},
    { firstName: "Nakiri", lastName: 'Erina', position: "Saucier Chef", url: "erina-nakiri.jpg"},
    { firstName: "Nakiri", lastName: 'Alice', position: "Patissier", url: "alice-nakiri.png"},
    { firstName: "Xiangling", position: "Grillardin Chef", url: "xiangling.jpg"},
    { firstName: "Hisako", lastName: 'Arato', position: "Poissonier Chef", url: "hisako-arato.jpg"},
    { firstName: "Tadakoro", lastName: 'Megumi', position: "Entremetier", url: "megumi-tadakoro.jpg"},
    { firstName: "Miko", lastName: 'Ikumi', position: "Boucher Chef", url: "mito-ikumi.jpg"},
    { firstName: "Fuuka", lastName: 'Aikiyo', position: "Commis Chef", url: "fuuka-aikiyo.webp"},
    { firstName: "Juri", lastName: 'Ushimaki', position: "Commis Chef", url: "juri-ushimaki.jpg"},
    { firstName: "Haruna", lastName: 'Kurodate', position: "Commis Chef", url: "haruna-kurodate.webp"},
    { firstName: "Junko", lastName: 'Akashi', position: "Commis Chef", url: "junko-akashi.webp"},
    { firstName: "Izumi", lastName: 'Shishidou', position: "Commis Chef", url: "izumi-shishidou.webp"},
    { firstName: "Akari", lastName: 'Wanibuchi', position: "Commis Chef", url: "akari-wanibuchi.webp"},
]

export const hr: teamMember[] = [
    { firstName: "HuoHuo", position: "Recruiter", url: "huohuo.jpg"},
    { firstName: "Qingque", position: "Recruiter", url: "qingque.jpg"}
]

export const contentCreators: teamMember[] = [
    { firstName: "Robin", position: "Artist", url: "robin.jpg"},
    { firstName: "Guinafen", position: "Streamer", url: "guinafen.jpg"},
    { firstName: "Hyacine", position: "Idol", url: "hyacine.jpg"},
    { firstName: "Barbara", position: "Idol", url: "barbara.jpg"},
    { firstName: "March 7th", position: "Photographer", url: "march.jpg"},
    { firstName: "Marin", lastName: "Kitagawa", position: "Model", url: "marin-kitagawa.jpg"},
]

export const administration: teamMember[] = [
    { firstName: "Yuuka", lastName: "Hayase", position: "Executive Assistant", url: "yuuka.jpg"},
    { firstName: "Noa", lastName: "Ushio", position: "Executive Assistant", url: "noa-ushio.jpg"},
    { firstName: "Ayane", lastName: "Okusora", position: "Administrative Assistant", url: "ayane-okusora.jpg"},
    { firstName: "Kayoko", lastName: "Onikata", position: "Administrative Assistant", url: "kayoko-onikata.jpg"},
]