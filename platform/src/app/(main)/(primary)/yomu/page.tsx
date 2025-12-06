import React, { Suspense } from "react";
import { GraphQL } from "@/util/api/api";
import { Skeleton } from "@mui/material";

import ArcHeader from "@/components/arcHeader";
import BreadcrumbSetter from "@/components/breadcrumb/setBreadcrumbs";
import WIP from "@/components/wip";
import TopWorkCards from "./topWork";

import { Work } from "@/types/yomu";

export default function YomuHome() {
    const topWorkPromise: Promise<Work[]> = fetchTopWork()
    const popularWorkPromise: Promise<Work[]> = fetchPopularWork()

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
                            <Suspense fallback={ <WorkSkeleton /> }>
                                <TopWorkCards workPromise={topWorkPromise} />
                            </Suspense>
                        </div>
                        <div id="most-popular">
                            <ArcHeader title="Most Popular" link="miru/popular" linkText="See more" />
                            <Suspense fallback={ <WorkSkeleton /> }>
                                <TopWorkCards workPromise={popularWorkPromise} />
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

async function fetchTopWork() {
    const query = `
        query {
            worksByCategory(category: "score", direction:"asc") {
                id,
                slug,
                title,
                score
            }
        }
    `

    const res = await GraphQL<any>(query)
    return res.data.worksByCategory
}

async function fetchPopularWork() {
    const query = `
        query {
            worksByCategory(category: "users", direction:"asc") {
                id,
                slug,
                title,
                score
            }
        }
    `

    const res = await GraphQL<any>(query)
    return res.data.worksByCategory
}

function WorkSkeleton() {
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