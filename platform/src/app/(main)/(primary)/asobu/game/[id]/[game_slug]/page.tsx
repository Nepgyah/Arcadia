export const revalidate = 3600;

import React, { Suspense, use } from "react";
import InfoItem from "@/components/infoItem";
import WIP from "@/components/wip";
import MediaFeatureCard from "@/components/mediaFeatureCard";
import ArcHeader from "@/components/arcHeader";

import '@/styles/layout/_media-detail.scss';
import { fetchFranchiseByGame, fetchGameCharacters, fetchGameDetails } from "./gameDetailsQueries";
import { Game } from "@/types/asobu";
import BreadcrumbSetter from "@/components/breadcrumb/setBreadcrumbs";
import { Skeleton } from "@mui/material";
import FranchiseSocials from "@/components/media/franchiseSocials";
import MediaCharacterList, { MediaCharacterListSkeleton } from "@/components/media/characterList";
import GameTabWrapper from "./gameTabWrapper";
import { GameOverviewTab } from "./gameOverviewTab";

export default async function GameDetail(
    props: {
        params: Promise<{ id: string, game_slug: string}>
    }
) {
    const { id } = await props.params
    const gamePromise = fetchGameDetails(id);
    const characterPromise = fetchGameCharacters(id);
    const franchisePromise = fetchFranchiseByGame(id);

    return (
        <React.Fragment>
            <Suspense>
                <GameDetailBreadcrumbs gamePromise={gamePromise} />
            </Suspense>
            <div id="page-media-detail" className="page-content">
                <Suspense fallback={
                    <Skeleton variant="rectangular" height={'350px'} width={'100%'}/>
                }>
                    <GameHero gamePromise={gamePromise}/>
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
                            <Suspense fallback={ <Skeleton animation={`wave`} height={'200px'} width={'100%'}/>}>
                                <FranchiseSocials franchisePromise={franchisePromise} />
                            </Suspense>
                        </div>
                        <div id="misc">
                            <ArcHeader title="Misc" />
                            <Suspense fallback={
                                Array.from({ length: 5}).map((_, i) => (
                                    <Skeleton animation={'wave'} key={i} variant="rectangular" height={'46px'} width={'100%'} />
                                ))
                            }>
                                <GameMisc gamePromise={gamePromise} />
                            </Suspense>
                        </div>
                    </div>
                    <div className="flex-row flex-row--gap-md">
                        <GameTabWrapper>
                            <Suspense>
                                <GameOverviewTab gamePromise={gamePromise} characterPromise={characterPromise} franchisePromise={franchisePromise}/>
                            </Suspense>
                            <Suspense fallback={ <MediaCharacterListSkeleton /> }>
                                <MediaCharacterList characterPromise={characterPromise} />
                            </Suspense>
                            <div>
                                <ArcHeader title="Synopsis" />
                                <GameSummary gamePromise={gamePromise} />
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
                        </GameTabWrapper>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

function GameHero({gamePromise}:{gamePromise: Promise<Game>}) {
    const game = use(gamePromise)

    return (
        <div className="grid grid--feature-combo">
            <MediaFeatureCard
                title={game.title}
                description={game.summary}
                score={game.score}
                app="asobu"
                image={`/storage/asobu/${game.id}.jpg`}
                />
            <div id="latest-episode" className="border-radius-md bg-platform-dark box-shadow p-a-lg">
                <WIP />
            </div>
        </div>
    )
}

function GameDetailBreadcrumbs({gamePromise}:{gamePromise: Promise<Game>}) {
    const game = use(gamePromise);
    return <BreadcrumbSetter breadcrumbs={['Asobu', `${game.title}`]} />
}

function GameSummary({gamePromise}:{gamePromise: Promise<Game>}) {
    const game = use(gamePromise);

    return (
        <p>{game.summary}</p>
    )
}

function GameMisc({gamePromise}:{gamePromise: Promise<any>}) {
    const game = use(gamePromise);

    return (
        <div className="flex-row flex-row--gap-sm">
            <InfoItem label="Status" value={game.status} />
            <InfoItem label="Release Date" value={game.releaseDate} />
            <InfoItem label="ESRB Rating" value={game.esrbRating} />
            <InfoItem label="PEGI Rating" value={game.pegiRating} />
            <InfoItem label="Campaign Mode" value={game.hasCampaignMode ? 'Yes' : 'No'} />
            <InfoItem label="PVP Mode" value={game.hasPvpMode ? 'Yes' : 'No'} />
            <InfoItem label="PVE Mode" value={game.hasPveMode ? 'Yes' : 'No'} />
        </div>
    )
}