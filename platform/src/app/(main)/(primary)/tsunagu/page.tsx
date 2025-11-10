export const revalidate = 0;

import React from "react";
import { useEffect, useState } from "react";

import { Breadcrumbs, Typography } from "@mui/material";

import { apiGET, GraphQL } from "@/util/api/api";
import { useUser } from "@/util/wrappers/userContext";

import { Post } from "@/types/tsunagu";
import PostCard from "@/app/(main)/(primary)/tsunagu/postCard";
import ArcHeader from "@/components/arcHeader";
import WIP from "@/components/wip";

export default async function TsunaguHome() {
    const { tsunaguCommunities, tsunaguPosts } = await getTsuanguHome()

    return (
        <React.Fragment>
            <Breadcrumbs>
                <Typography>Tsunagu</Typography>
                <Typography>Home</Typography>
            </Breadcrumbs>
            <div id="page-tsunagu-home"  className="page-content">
                <div className="grid grid--side-col-reverse">
                    <div className="flex-row flex-row--gap-md">
                        <div>
                            <ArcHeader title="Your Profile" />
                            <WIP />
                        </div>
                        <div>
                            <ArcHeader title="Your Communities" />
                            <WIP />
                        </div>
                    </div>
                    <div className="vertical-divider-right p-right-xl">
                        <div id="latest">
                            <ArcHeader title="Trending" />
                            <div className="row-gap-md">
                                {
                                    tsunaguPosts.map((post: any, idx: number) => (
                                        <PostCard 
                                            post={post} 
                                            link={`tsunagu/circle/${post.community.id}/${post.community.slug}/${post.id}`}
                                            key={idx} 
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

async function getTsuanguHome() {
    const query = 
    `
        query {
            tsunaguCommunities(count: 5) {
                id,
                title,
                slug
            },
            tsunaguPosts(count: 5, sort: null, community: null) {
                id,
                user {
                    username
                },
                title,
                content,
                community {
                    id,
                    title,
                    slug
                },
                commentCount,
                voteScore,
                createdAt
            }
        }
    `

    const res = await GraphQL<any>(query)
    return res.data
}