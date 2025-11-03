'use client';

import { useParams } from "next/navigation";

import React from "react";
import { useEffect, useState } from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import { GraphQL } from "@/util/api/api";

import InfoItem from "@/components/infoItem";
import WIP from "@/components/wip";
import MediaFeatureCard from "@/components/mediaFeatureCard";
import ArcHeader from "@/components/arcHeader";
import CharacterCard from "@/components/characterCard";
import MediaFlowCard from "@/components/mediaFlowCard";
import SocialMediaCard from "@/components/socialMediaCard";

import { Anime } from "@/types/miru";
import '@/styles/layout/_media-detail.scss';

export default function GameDetail() {
    const params = useParams();
    const [game, setGame] = useState<any>()

    useEffect(() => {
        const query = 
        `
           query {
            gameById(id: ${params.id}) {
                id,
                slug,
                summary,
                title,
                score,
                status,
                esrbRating,
                pegiRating,
                previousGame {
                    fromGame {
                        id,
                        title,
                        slug
                    }
                },
                nextGame {
                    toGame {
                        id,
                        title,
                        slug
                    }
                },
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
                    }
                },
                developers {
                    name
                },
                publishers {
                    name
                },
                hasCampaignMode,
                hasPvpMode,
                hasPveMode,
                isOnConsole,
                isOnPc,
                releaseDate,
                franchise {
                    id,
                    name,
                    socials
                }
            }
        }
        `
        GraphQL<any>(query)
        .then((res) => {
            setGame(res.data.gameById)
        })
    }, [])

    return (
        <React.Fragment>
            <Breadcrumbs>
                <Typography>Game</Typography>
                <Typography>{game?.title}</Typography>
            </Breadcrumbs>
            <div id="page-media-detail" className="page-content">
                <div className="grid grid--feature-combo">
                    <MediaFeatureCard
                        title={game ? game.title : 'Game Name'}
                        description={game ? game.summary : 'Summary'}
                        score={game ? game.score : 0.0}
                        app="asobu"
                        image={`/storage/asobu/${game?.id}.jpg`}
                     />
                    <div id="latest-episode" className="border-radius-md bg-platform-dark box-shadow p-a-lg">
                        <WIP />
                    </div>
                </div>
                <div className="grid grid--side-col-reverse">
                    <div className="flex-row flex-row--gap-md">
                        <div id="quick-access">
                            <ArcHeader title="Quick Access" />
                            <div className="flex-row flex-row--gap-sm">
                                <WIP />
                            </div>
                        </div>
                        <div id="socials">
                            <ArcHeader title="Socials" />
                            <div id="socials-container" className="flex-row flex-row--gap-sm">
                                {
                                    game?.franchise.socials?.website &&
                                    <SocialMediaCard 
                                        type="website"
                                        social={game?.franchise.socials.website}
                                    />
                                }
                                {
                                    game?.franchise.socials?.youtube &&
                                    <SocialMediaCard 
                                        type="youtube"
                                        social={game?.franchise.socials.youtube}
                                    />
                                }
                                {
                                    game?.franchise.socials?.reddit &&
                                    <SocialMediaCard 
                                        type="reddit"
                                        social={game?.franchise.socials.reddit}
                                    />
                                }
                                {
                                    game?.franchise.socials?.twitter &&
                                    <SocialMediaCard 
                                        type="twitter"
                                        social={game?.franchise.socials.twitter}
                                    />
                                }
                            </div>
                        </div>
                        <div id="misc">
                            <ArcHeader title="Misc" />
                            <div className="flex-row flex-row--gap-sm">
                                <InfoItem label="Status" value={game?.status} />
                                <InfoItem label="Release Date" value={game?.releaseDate} />
                                <InfoItem label="ESRB Rating" value={game?.esrbRating} />
                                <InfoItem label="PEGI Rating" value={game?.pegiRating} />
                                <InfoItem label="Campaign Mode" value={game?.hasCampaignMode ? 'Yes' : 'No'} />
                                <InfoItem label="PVP Mode" value={game?.hasPvpMode ? 'Yes' : 'No'} />
                                <InfoItem label="PVE Mode" value={game?.hasPveMode ? 'Yes' : 'No'} />
                            </div>
                        </div>
                    </div>
                    <div className="flex-row flex-row--gap-md">
                        <div id="characters">
                            <ArcHeader title="Characters" />
                            <div id="characters-container" className="flex-col flex-col--gap-sm">
                                {
                                    game?.characters.map((character: any, idx: number) => (
                                        <CharacterCard 
                                            key={idx}
                                            characterId={character.character.id}
                                            characterName={`${character.character.firstName} ${character.character.lastName ? character.character.lastName : ''}`}
                                            characterDescription={character.role}
                                            voiceActorId={character.character.playedBy?.id}
                                            voiceActorName={character.character.playedBy ? `${character.character.playedBy.firstName} ${character.character.playedBy.lastName ? character.character.playedBy.lastName : ''}` : 'Unknown'}
                                            voiceActorDescription='Japanese'
                                        />
                                    ))
                                }
                            </div>
                        </div>
                        <div id="game-flow">
                            <ArcHeader title="Game Flow" />
                            <div className="grid grid--2-col">
                                {
                                    game?.previousGame ?
                                        <MediaFlowCard 
                                            image={`/storage/asobu/${game?.previousGame.fromGame.id}.jpg`}
                                            relation="Prequel"
                                            mediaName={game ? game?.previousGame.fromGame.title : 'Loading'}
                                            mediaLink={`/asobu/game/${game?.previousGame.fromGame.id}/${game?.previousGame.fromGame.slug}`}              
                                        />
                                    :
                                        <p>No Previous Game</p>
                                }
                                {
                                    game?.nextGame ?
                                        <MediaFlowCard 
                                            image={`/storage/asobu/${game?.nextGame.toGame.id}.jpg`}
                                            relation="Sequel"
                                            mediaName={game ? game?.nextGame.toGame.title : 'Loading'}
                                            mediaLink={`/asobu/game/${game?.nextGame.toGame.id}/${game?.nextGame.toGame.slug}`}              
                                        />
                                    :
                                        <p>No Previous Game</p>
                                }
                            </div>
                        </div>
                        <div id="themes">
                            <div className="grid grid--2-col">
                                <div>
                                    <ArcHeader title="Openings" />
                                    <WIP />
                                </div>
                                <div>
                                    <ArcHeader title="Endings" />
                                    <WIP />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}