export const revalidate = 3600;
export const dynamic = "force-dynamic";

import React, { Suspense } from "react";
import {Skeleton} from "@mui/material";
import { GraphQL } from "@/util/api/api";

import WIP from "@/components/wip";
import ArcHeader from "@/components/arcHeader";
import BreadcrumbSetter from "@/components/breadcrumb/setBreadcrumbs";
import TopAnimeCards from "./topAnime";

import { Anime } from "@/types/miru";

import '@/styles/pages/miru/_home.scss';

export default async function MiruHome() {
    const topAnime: Promise<Anime[]> = getTopAnime()
    const popularAnime: Promise<Anime[]> = getPopularAnime();

    return (
        <React.Fragment>
            <Suspense fallback={null}>
                <BreadcrumbSetter breadcrumbs={['Miru', 'Home']} />
            </Suspense>
            <div id="page-miru-home">
                <div className="grid grid--side-col">
                    <div className="flex-row flex-row--gap-md">
                        <div id="all-time">
                            <ArcHeader title="All Time" link="miru/all-time" linkText="See more" />
                            <Suspense fallback={ <AnimeSkeleton /> }>
                                <TopAnimeCards animePromise={topAnime} />
                            </Suspense>
                        </div>
                        <div id="most-popular">
                            <ArcHeader title="Most Popular" link="miru/popular" linkText="See more" />
                            <Suspense fallback={ <AnimeSkeleton /> }>
                                <TopAnimeCards animePromise={popularAnime} />
                            </Suspense>
                        </div>
                    </div>
                    <div className="side-col">
                        <h2 className="app-font--miru border-bottom">Friend Activity</h2>
                        <WIP />
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

interface GraphResponse {
    data: {
        topScore: Anime[],
        topUsers: Anime[]
    }
}

async function getTopAnime() {
    const query = 
    `
        query {
            topScore: topAnimeByCategory(category: "score", count: 5) {
                id,	
                title,
                slug
            },
        }
    `

    const res = await GraphQL<GraphResponse>(query);
    return res.data.topScore
}

async function getPopularAnime() {
    const query = 
    `
        query {
            topUsers: topAnimeByCategory(category: "users", count: 5) {
                id,	
                title,
                slug
            }
        }
    `

    const res = await GraphQL<GraphResponse>(query);
    return res.data.topUsers
}

function AnimeSkeleton() {
    return (
        <div className="flex-col flex-col--gap-sm">
            <Skeleton variant="rectangular" height={300} width={200} />
            <Skeleton variant="rectangular" height={300} width={200} />
            <Skeleton variant="rectangular" height={300} width={200} />
            <Skeleton variant="rectangular" height={300} width={200} />
            <Skeleton variant="rectangular" height={300} width={200} />
        </div>
    )
}