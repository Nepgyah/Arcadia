'use client';

import { useParams } from "next/navigation";

import React from "react";
import { useEffect, useState } from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import { GraphQL } from "@/util/api/api";
import InfoItem from "@/components/infoItem";
import WIP from "@/components/platform/wip";
import MediaFeatureCard from "@/components/mediaFeatureCard";
import ArcHeader from "@/components/arcHeader";
import CharacterCard from "@/components/characterCard";

import '@/styles/layout/_media-detail.scss';
import MediaFlowCard from "@/components/mediaFlowCard";
import SocialMediaCard from "@/components/socialMediaCard";

export default function WorkDetail() {
    const params = useParams();
    const [work, setWork] = useState<any>()

    useEffect(() => {
        const query = 
        `
            query {
                workById(id: ${params.id}) {
                id,
                slug,
                title,
                score,
                summary,
                rating,
                franchise {
                    id,
                    name,
                    socials
                },
                status,
                characters {
                    character {
                        id,
                        firstName,
                        lastName
                    }
                },
                totalVolumes,
                totalChapters,
                type,
                authors {
                    author {
                        name
                    },
                    
                },
                publisher {
                    name
                },
                publishingStartDate,
                publishingEndDate,
                previousWork {
                    toWork {
                        id,
                        title
                    },
                    relationType
                },
                nextWork {
                    toWork {
                        id,
                        title
                    },
                    relationType
                    }
                }
            }
        `
        GraphQL<any>(query)
        .then((res) => {
            setWork(res.data.workById)
        })
    }, [])

    return (
        <React.Fragment>
            <Breadcrumbs>
                <Typography>Anime</Typography>
                <Typography>{work?.title}</Typography>
            </Breadcrumbs>
            <div id="page-media-detail" className="page-content">
                <div className="grid grid--feature-combo">
                    <MediaFeatureCard
                        title={work ? work.title : 'work Name'}
                        description={work ? work.summary : 'Summary'}
                        score={work ? work.score : 0.0}
                        app="miru"
                        image={`/storage/yomu/${work?.id}.jpg`}
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
                                    work?.franchise.socials?.website &&
                                    <SocialMediaCard 
                                        type="website"
                                        social={work?.franchise.socials.website}
                                    />
                                }
                                {
                                    work?.franchise.socials?.youtube &&
                                    <SocialMediaCard 
                                        type="youtube"
                                        social={work?.franchise.socials.youtube}
                                    />
                                }
                                {
                                    work?.franchise.socials?.reddit &&
                                    <SocialMediaCard 
                                        type="reddit"
                                        social={work?.franchise.socials.reddit}
                                    />
                                }
                                {
                                    work?.franchise.socials?.twitter &&
                                    <SocialMediaCard 
                                        type="twitter"
                                        social={work?.franchise.socials.twitter}
                                    />
                                }
                                {
                                    work?.franchise.socials?.instagram &&
                                    <SocialMediaCard 
                                        type="instagram"
                                        social={work?.franchise.socials.instagram}
                                    />
                                }
                            </div>
                        </div>
                        <div id="misc">
                            <ArcHeader title="Misc" />
                            <div className="flex-row flex-row--gap-sm">
                                <InfoItem label="Type" value={work?.type} />
                                <InfoItem label="Status" value={work?.status} />
                                <InfoItem label="Start Date" value={work?.publishingStartDate} />
                                <InfoItem label="End Date" value={work?.publishingEndDate} />
                                <InfoItem label="Studio" value={work?.studio?.name} />

                            </div>
                        </div>
                    </div>
                    <div className="flex-row flex-row--gap-md">
                        <div id="characters">
                            <ArcHeader title="Characters" />
                            <div id="characters-container" className="flex-col flex-col--gap-sm">
                                {
                                    work?.characters.map((character: any, idx: number) => (
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
                        <div id="work-flow">
                            <ArcHeader title="Work Flow" />
                            <div className="grid grid--2-col">
                                {
                                    work?.previousWork ?
                                        <MediaFlowCard 
                                            image={`/storage/miru/${work?.previousWork.fromwork.id}.jpg`}
                                            relation="Prequel"
                                            mediaName={work ? work?.previousWork.fromwork.title : 'Loading'}
                                            mediaLink={`/miru/work/${work?.previousWork.fromwork.id}/${work?.previouswork.fromwork.slug}`}              
                                        />
                                    :
                                        <p>No Previous work</p>
                                }
                                {
                                    work?.nextWork ?
                                        <MediaFlowCard 
                                            image={`/storage/miru/${work?.nextWork.towork.id}.jpg`}
                                            relation="Prequel"
                                            mediaName={work ? work?.nextWork.towork.title : 'Loading'}
                                            mediaLink={`/miru/work/${work?.nextWork.towork.id}/${work?.nextWork.towork.slug}`}              
                                        />
                                    :
                                        <p>No Previous work</p>
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