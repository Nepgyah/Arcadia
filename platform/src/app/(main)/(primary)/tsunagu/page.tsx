export const revalidate = 0;

import React from "react";
import { Avatar, Breadcrumbs, Typography } from "@mui/material";

import { GraphQL } from "@/util/api/api";
import PostCard from "@/app/(main)/(primary)/tsunagu/postCard";
import ArcHeader from "@/components/arcHeader";
import WIP from "@/components/wip";

import '@/styles/pages/tsunagu/_home.scss';
import Link from "next/link";

export default async function TsunaguHome() {
    const { tsunaguPosts } = await getTsuanguHome()

    return (
        <React.Fragment>
            <div id="page-tsunagu-home" className="page-content">
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
        </React.Fragment>
    )
}

async function getTsuanguHome() {
    const query = 
    `
        query {
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
            },
        }
    `

    const res = await GraphQL<any>(query)
    return res.data
}