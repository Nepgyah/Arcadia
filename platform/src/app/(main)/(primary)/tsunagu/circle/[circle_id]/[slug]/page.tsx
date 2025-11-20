import React from "react";
import { GraphQL } from "@/util/api/api";
import PostCard from "../../../postCard";

export default async function TsunaguCommunityPage(
    props: {
        params: Promise<{ circle_id: string, slug: string }>;
    }
    ) {
    const { circle_id, slug } = await props.params;
    const { tsunaguPosts } = await getCommunityPosts(circle_id)

    return (
        <div id="post-list" className="row-gap-md">
            {
                tsunaguPosts.map((post: any, idx: number) => (
                    <PostCard 
                        post={post} 
                        link={`/tsunagu/circle/${circle_id}/${slug}/${post.id}`}
                        imageLink=""
                        details={`u/${post.user.username}`}
                        key={idx} 
                    />
                ))
            }
        </div>
    )
}

async function getCommunityPosts(id: string) {
    const query =
    `
    query {
        tsunaguPosts(sort:null, count: 5, community: ${id}) {
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