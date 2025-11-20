import React from "react";
import { GraphQL } from "@/util/api/api";

import InfoItem from "@/components/infoItem";
import WIP from "@/components/wip";
import MediaFeatureCard from "@/components/mediaFeatureCard";
import ArcHeader from "@/components/arcHeader";
import CharacterCard from "@/components/characterCard";
import MediaFlowCard from "@/components/mediaFlowCard";
import SocialMediaCard from "@/components/socialMediaCard";

import '@/styles/layout/_media-detail.scss';
import BreadcrumbSetter from "@/components/breadcrumb/setBreadcrumbs";
import SocialsList from "@/components/socialsList";
import WorkDetailTabContent from "./tabContent";

export default async function WorkDetail(
    props: {
        params: Promise<{ id: string; anime_slug: string }>;
    }
) {
    const { id } = await props.params
    const work = await getWork(id)

    return (
        <React.Fragment>
            <BreadcrumbSetter breadcrumbs={['Yomu', `${work.title}`]} />
            <div id="page-media-detail" className="page-content">
                <div className="grid grid--feature-combo">
                    <MediaFeatureCard
                        title={work.title}
                        description={work.summary}
                        score={work.score}
                        app="yomu"
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
                        {
                            work.franchise.socials && 
                                <div id="socials">
                                    <ArcHeader title="Socials" />
                                    <SocialsList socials={work.franchise.socials} />
                                </div>
                        }
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
                    <div>
                        <WorkDetailTabContent work={work} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

async function getWork(id: string) {
    const query = 
    `
        query {
            workById(id: ${id}) {
            id,
            slug,
            title,
            score,
            summary,
            rating,
            genres {
                id,
                name
            },
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
    const res = await GraphQL<any>(query)
    return res.data.workById
}