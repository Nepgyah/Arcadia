export const revalidate = 3600;

import React, { Suspense, use } from "react";
import { GraphQL } from "@/util/api/api";

import InfoItem from "@/components/infoItem";
import WIP from "@/components/wip";
import MediaFeatureCard from "@/components/mediaFeatureCard";
import ArcHeader from "@/components/arcHeader";
import SocialsList from "@/components/socialsList";

import {Anime} from "@/types/miru";
import '@/styles/layout/_media-detail.scss';
import BreadcrumbSetter from "@/components/breadcrumb/setBreadcrumbs";
import AnimeTabWrapper from "./animeTabWrapper";
import { Character } from "@/types/shared";
import AnimeOverviewTab from "./animeOverviewTab";
import MediaCharacterList, { MediaCharacterListSkeleton } from "@/components/media/characterList";

import { getAnime, getCharactersByAnime, getFranchiseByAnime } from './animeDetailQueries'
import { Skeleton } from "@mui/material";

export default async function AnimeDetails(
    props: {
        params: Promise<{ id: string; anime_slug: string }>;
    }
    ) {
    const { id } = await props.params;
    const animePromise = getAnime(id);
    const characterPromise = getCharactersByAnime(id);
    const franchisePromise = getFranchiseByAnime(id);

    return (
        <React.Fragment>
            <Suspense>
                <AnimeDetailBreadcrumbs animePromise={animePromise} />
            </Suspense>
            <div id="page-media-detail" className="page-content">
                <Suspense fallback={
                    <Skeleton variant="rectangular" height={'350px'} width={'100%'}/>
                }>
                    <AnimeHero animePromise={animePromise}/>
                </Suspense>
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
                            {/* <SocialsList socials={anime.franchise.socials} /> */}
                        </div>
                        <div id="misc">
                            <ArcHeader title="Misc" />
                            {/* <div className="flex-row flex-row--gap-sm">
                                <InfoItem label="Season" value={anime.season} />
                                <InfoItem label="Type" value={anime.type} />
                                <InfoItem label="Status" value={anime.status} />
                                <InfoItem label="Start Date" value={anime.airingStartDate} />
                                <InfoItem label="End Date" value={anime.airingEndDate} />
                                <InfoItem label="Studio" value={anime.studio?.name} />
                            </div> */}
                        </div>
                    </div>
                    <div>
                        <AnimeTabWrapper>
                            <Suspense fallback={ <h2>Loading overview</h2>}>
                                <AnimeOverviewTab 
                                    animePromise={animePromise} 
                                    characterPromise={characterPromise} 
                                    franchisePromise={franchisePromise}
                                />
                            </Suspense>
                            <Suspense fallback={ <MediaCharacterListSkeleton /> }>
                                <MediaCharacterList characterPromise={characterPromise} />
                            </Suspense>
                            <div>
                                <ArcHeader title="Synopsis" />
                                {/* <p>{anime.summary}</p> */}
                            </div>
                            <div>
                                <ArcHeader title="Score Breakdown" />
                                <WIP />
                            </div>
                            <div>
                                <div className="flex-row flex-row--gap-md">
                                    <div id="top-reviews">
                                        <ArcHeader title="Top Reviews" />
                                        <WIP />
                                    </div>
                                    <div id="latest-reviews">
                                        <ArcHeader title="Latest Reviews" />
                                        <WIP />
                                    </div>
                                </div>
                            </div>
                        </AnimeTabWrapper>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

function AnimeDetailBreadcrumbs({animePromise}:{animePromise: Promise<Anime>}) {
    const anime = use(animePromise);
    return <BreadcrumbSetter breadcrumbs={['Miru', `${anime.title}`]} />
}

async function AnimeHero({animePromise}:{animePromise: Promise<Anime>}) {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const anime = await animePromise
    return (
        <div className="grid grid--feature-combo">
            <MediaFeatureCard
                title={anime.title}
                description={anime.summary}
                score={anime.score}
                app="miru"
                image={`/storage/miru/${anime.id}.jpg`}
                />
            <div id="latest-episode" className="border-radius-md bg-platform-dark box-shadow p-a-lg">
                <WIP />
            </div>
        </div>
    )
}