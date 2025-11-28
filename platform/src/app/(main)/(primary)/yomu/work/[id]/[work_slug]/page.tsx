import React, { Suspense, use } from "react";

import InfoItem from "@/components/infoItem";
import WIP from "@/components/wip";
import MediaFeatureCard from "@/components/mediaFeatureCard";
import ArcHeader from "@/components/arcHeader";

import '@/styles/layout/_media-detail.scss';
import BreadcrumbSetter from "@/components/breadcrumb/setBreadcrumbs";
import { fetchCharacters, fetchFranchiseByWork, fetchWork } from "./workDetailsQuery";
import { Work } from "@/types/yomu";
import { Skeleton } from "@mui/material";
import FranchiseSocials from "@/components/media/franchiseSocials";
import WorkTabWrapper from "./workTabWrapper";
import MediaCharacterList, { MediaCharacterListSkeleton } from "@/components/media/characterList";
import WorkOverviewTab from "./workOverviewTab";

export default async function WorkDetail(
    props: {
        params: Promise<{ id: string; anime_slug: string }>;
    }
) {
    const { id } = await props.params
    const workPromise = fetchWork(id);
    const characterPromise = fetchCharacters(id);
    const franchisePromise = fetchFranchiseByWork(id)

    return (
        <React.Fragment>
            <Suspense>
                <WorkDetailBreadcrumbs workPromise={workPromise} />
            </Suspense>
            <div id="page-media-detail" className="page-content">
                <Suspense fallback={
                    <Skeleton variant="rectangular" height={'350px'} width={'100%'}/>
                }>
                    <WorkHero workPromise={workPromise}/>
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
                            <FranchiseSocials franchisePromise={franchisePromise} />
                        </div>
                        <div id="misc">
                            <ArcHeader title="Misc" />
                            <div className="flex-row flex-row--gap-sm">
                                <Suspense fallback={
                                    Array.from({ length: 5}).map((_, i) => (
                                        <Skeleton animation={'wave'} key={i} variant="rectangular" height={'46px'} width={'100%'} />
                                    ))
                                }>
                                    <WorkMisc workPromise={workPromise} />
                                </Suspense>
                            </div>
                        </div>
                    </div>
                    <div>
                        <WorkTabWrapper>
                            <Suspense fallback={ <h2>Loading overview</h2>}>
                                <WorkOverviewTab 
                                    workPromise={workPromise} 
                                    characterPromise={characterPromise} 
                                    franchisePromise={franchisePromise}
                                />
                            </Suspense>
                            <Suspense fallback={ <MediaCharacterListSkeleton /> }>
                                <MediaCharacterList characterPromise={characterPromise} />
                            </Suspense>
                            <div>
                                <ArcHeader title="Synopsis" />
                                <Summary workPromise={workPromise} />
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
                        </WorkTabWrapper>
                    </div>
                    {/* <div>
                        <WorkDetailTabContent work={work} />
                    </div> */}
                </div>
            </div>
        </React.Fragment>
    )
}

function WorkDetailBreadcrumbs({workPromise}:{workPromise: Promise<Work>}) {
    const work = use(workPromise);
    return <BreadcrumbSetter breadcrumbs={['Yomu', `${work.title}`]} />
}

function WorkHero({workPromise}:{workPromise: Promise<Work>}) {
    const work = use(workPromise);

    return (
        <div className="grid grid--feature-combo">
            <MediaFeatureCard
                title={work.title}
                description={work.summary}
                score={work.score}
                app="yomu"
                image={`/storage/yomu/${work.id}.jpg`}
                />
            <div id="latest-episode" className="border-radius-md bg-platform-dark box-shadow p-a-lg">
                <WIP />
            </div>
        </div>
    )
}

function Summary({workPromise}:{workPromise: Promise<Work>}) {
    const work = use(workPromise);

    return (
        <p>{work.summary}</p>
    )
}

function WorkMisc({workPromise}:{workPromise: Promise<Work>}) {
    const work = use(workPromise);

    return (
        <React.Fragment>
            <InfoItem label="Type" value={work.type} />
            <InfoItem label="Status" value={work.status} />
            <InfoItem label="Start Date" value={work.publishingStartDate} />
            <InfoItem label="End Date" value={work.publishingEndDate} />
            <InfoItem label="Studio" value={work.studio?.name} />
        </React.Fragment>
    )
}