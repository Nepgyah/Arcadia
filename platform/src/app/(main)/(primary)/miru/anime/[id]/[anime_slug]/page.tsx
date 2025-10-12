'use client';

import { useParams } from "next/navigation";

import React from "react";
import { useEffect, useState } from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import { apiGET, GraphQL } from "@/util/api/api";

import CharacterAvatar from "@/components/platform/characterAvatar";
import InfoItem from "@/components/infoItem";
import RelationCard from "@/components/platform/relationCard";
import TagChip from "@/components/platform/chip";
import WIP from "@/components/platform/wip";

import { Anime } from "@/types/miru";
import { Character } from "@/types/shared";
import SocialMediaLink from "@/components/platform/socialMediaLink";
import MediaFeatureCard from "@/components/mediaFeatureCard";
import ArcHeader from "@/components/arcHeader";
import CharacterCard from "@/components/characterCard";

import '@/styles/pages/miru/_detail.scss';

export default function AnimeDetails() {
    const params = useParams();
    const [anime, setAnime] = useState<Anime>()

    useEffect(() => {
        const query = 
        `
            query {
                animeById(id: ${params.id}) {
                    id,
                    title,
                    score,
                    users,
                    slug,
                    summary,
                    season,
                    status,
                    characters {
                    character {
                        id,
                        firstName,
                        lastName,
                        playedBy {
                            id,
                            firstName,
                            lastName
                        }
                    },
                    role
                    },
                    previousAnime {
                        relationType
                        fromAnime {
                            title
                        }
                    },
                    nextAnime {
                    relationType
                    fromAnime {
                        title
                    }
                    },
                    type,
                    studio {
                    name
                    },
                    rating,
                    airingStartDate,
                    airingEndDate
                }
            }
        `
        GraphQL<any>(query)
        .then((res) => {
            setAnime(res.data.animeById)
        })
    }, [])

    return (
        <React.Fragment>
            <Breadcrumbs>
                <Typography>Anime</Typography>
                <Typography>{anime?.title}</Typography>
            </Breadcrumbs>
            <div id="page-miru-detail" className="page-content">
                <div className="grid grid--feature-combo">
                    <MediaFeatureCard
                        title={anime ? anime.title : 'Anime Name'}
                        description={anime ? anime.summary : 'Summary'}
                        score={anime ? anime.score : 0.0}
                        app="miru"
                        image={`/storage/miru/${anime?.id}.jpg`}
                     />
                    <div>right</div>
                </div>
                <div className="grid grid--side-col-reverse">
                    <div className="flex-row flex-row--gap-md">
                        <div id="quick-access">
                            <ArcHeader title="Quick Access" />
                            <div className="flex-row flex-row--gap-sm">
                                <p>status</p>
                                <p>episode</p>
                                <p>rating</p>
                            </div>
                        </div>
                        <div id="socials">
                            <ArcHeader title="Socials" />
                            <div className="flex-row flex-row--gap-sm">
                                <p>status</p>
                                <p>episode</p>
                                <p>rating</p>
                            </div>
                        </div>
                        <div id="misc">
                            <ArcHeader title="Misc" />
                            <div className="flex-row flex-row--gap-sm">
                                <InfoItem label="Status" value={anime?.status} />
                                <InfoItem label="Start Date" value={anime?.airingStartDate} />
                                <InfoItem label="End Date" value={anime?.airingEndDate} />
                                <InfoItem label="Studio" value={anime?.studio.name} />
                            </div>
                        </div>
                    </div>
                    <div className="flex-row flex-row--gap-md">
                        <div id="characters">
                            <ArcHeader title="Characters" />
                            <div id="characters-container" className="flex-col flex-col--gap-sm">
                                {
                                    anime?.characters.map((character: any, idx: number) => (
                                        <CharacterCard 
                                            key={idx}
                                            characterId={character.character.id}
                                            characterName={`${character.character.firstName} ${character.character.lastName ? character.character.lastName : ''}`}
                                            characterDescription={character.role}
                                            voiceActorId={character.character.playedBy?.id}
                                            voiceActorName={character.character.playedBy?.firstName}
                                            voiceActorDescription='Japanese'
                                        />
                                    ))
                                }
                            </div>
                        </div>
                        <div id="anime-flow">
                            <ArcHeader title="Anime Flow" />
                            <div className="flex-row flex-row--gap-sm">
                                <p>status</p>
                                <p>episode</p>
                                <p>rating</p>
                            </div>
                        </div>
                        <div id="themes">
                            <div className="grid grid--2-col">
                                <div>
                                    <ArcHeader title="Openings" />
                                    <div className="flex-row flex-row--gap-sm">
                                        <p>status</p>
                                        <p>episode</p>
                                        <p>rating</p>
                                    </div>
                                </div>
                                <div>
                                    <ArcHeader title="Endings" />
                                    <div className="flex-row flex-row--gap-sm">
                                        <p>status</p>
                                        <p>episode</p>
                                        <p>rating</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}