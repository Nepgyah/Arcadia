export const revalidate = 3600;

import React from "react";
import { Breadcrumbs, Typography } from "@mui/material";

import EntryCard from "@/components/entryCard";
import WIP from "@/components/wip";
import ArcHeader from "@/components/arcHeader";

import { GraphQL } from "@/util/api/api";
import { Anime } from "@/types/miru";

import '@/styles/pages/miru/_home.scss';
import BreadcrumbSetter from "@/components/breadcrumb/setBreadcrumbs";

export default async function MiruHome() {
    const { topScore, topUsers } = await getAnime()

    return (
        <React.Fragment>
            <BreadcrumbSetter breadcrumbs={['Miru', 'Home']} />
            <div id="page-miru-home">
                <div className="grid grid--side-col">
                    <div className="flex-row flex-row--gap-md">
                        <div id="all-time">
                            <ArcHeader title="All Time" link="miru/all-time" linkText="See more" />
                            <div className="flex-col flex-col--gap-sm">
                                {
                                    topScore.map((anime: any, key: number) => (
                                        <EntryCard 
                                            key={key} 
                                            app="miru" 
                                            title={anime.title} 
                                            clickLink={`/miru/anime/${anime.id}/${anime.slug}`} 
                                            imageLink={`/storage/miru/${anime.id}.jpg`}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                        <div id="most-popular">
                            <ArcHeader title="Most Popular" link="miru/popular" linkText="See more" />
                            <div className="flex-col flex-col--gap-sm">
                                {
                                    topUsers.map((anime: any, key: number) => (
                                        <EntryCard 
                                            key={key} 
                                            app="miru" 
                                            title={anime.title} 
                                            clickLink={`/miru/anime/${anime.id}/${anime.slug}`} 
                                            imageLink={`/storage/miru/${anime.id}.jpg`}
                                        />
                                    ))
                                }
                            </div>
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
async function getAnime() {
    const query = 
    `
        query {
            topScore: topAnimeByCategory(category: "score", count: 5) {
                id,	
                title,
                slug
            },
            topUsers: topAnimeByCategory(category: "users", count: 5) {
                id,	
                title,
                slug
            }
        }
    `

    const res = await GraphQL<GraphResponse>(query);
    return res.data
}