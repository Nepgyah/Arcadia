export const revalidate = 3600;

import React from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import { GraphQL } from "@/util/api/api";

import InfoItem from "@/components/infoItem";
import WIP from "@/components/wip";
import MediaFeatureCard from "@/components/mediaFeatureCard";
import ArcHeader from "@/components/arcHeader";
import AnimeDetailTabContent from "./tabContent";
import SocialsList from "@/components/socialsList";

import {Anime} from "@/types/miru";
import '@/styles/layout/_media-detail.scss';

interface GraphResponse {
    data: {
        animeById: Anime
    }
}

export default async function AnimeDetails(
    props: {
        params: Promise<{ id: string; anime_slug: string }>;
    }
    ) {
    const { id } = await props.params;
    const query = 
    `
        query {
            animeById(id: ${id}) {
                id,
                title,
                genres {
                    id,
                    name
                },
                franchise {
                    id,
                    name,
                    socials
                },
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
                        id,
                        slug,
                        title
                    }
                },
                nextAnime {
                    relationType
                    toAnime {
                        id,
                        slug,
                        title
                    }
                },
                type,
                studio {
                    name
                },
                rating,
                airingStartDate,
                airingEndDate,
                themes
            }
        }
    `
    const res = await GraphQL<GraphResponse>(query);
    const anime = res.data.animeById

    return (
        <React.Fragment>
            <Breadcrumbs>
                <Typography>Anime</Typography>
                <Typography>{anime.title}</Typography>
            </Breadcrumbs>
            <div id="page-media-detail" className="page-content">
                <div className="grid grid--feature-combo">
                    <MediaFeatureCard
                        title={anime ? anime.title : 'Anime Name'}
                        description={anime ? anime.summary : 'Summary'}
                        score={anime ? anime.score : 0.0}
                        app="miru"
                        image={`/storage/miru/${anime.id}.jpg`}
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
                            <SocialsList socials={anime.franchise.socials} />
                        </div>
                        <div id="misc">
                            <ArcHeader title="Misc" />
                            <div className="flex-row flex-row--gap-sm">
                                <InfoItem label="Season" value={anime.season} />
                                <InfoItem label="Type" value={anime.type} />
                                <InfoItem label="Status" value={anime.status} />
                                <InfoItem label="Start Date" value={anime.airingStartDate} />
                                <InfoItem label="End Date" value={anime.airingEndDate} />
                                <InfoItem label="Studio" value={anime.studio.name} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <AnimeDetailTabContent anime={anime}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}