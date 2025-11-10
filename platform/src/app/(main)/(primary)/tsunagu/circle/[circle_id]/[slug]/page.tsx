'use client';

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import PostCard from "@/app/(main)/(primary)/tsunagu/postCard";
import { apiGET } from "@/util/api/api";
import { Post } from "@/types/tsunagu";

export default function TsunaguCommunityPage() {
    const params = useParams();
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
            apiGET<Post[]>(`tsunagu/community/${params.circle_id}/posts/`)
            .then((res) => {
                setPosts(res)
            })
        }, [])

    return (
        <div id="post-list" className="row-gap-md">
            {
                posts ?
                    posts.map((post: Post, idx: number) => (
                        <PostCard
                            post={post}
                            link={`${params.slug}/${post.id}`}
                            key={idx}
                         />
                    ))
                :
                    'Loading'
            }
        </div>
    )
}