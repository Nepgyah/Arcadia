'use client';

import CommentCard from "@/components/platform/tsunagu/commentTree";
import PostCard from "@/components/platform/tsunagu/postCard";
import { apiGET } from "@/util/api/api";
import { Comment, Post } from "@/types/tsunagu";
import { Breadcrumbs, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function TsunaguPostPage() {
    const params = useParams();
    const [post, setPost] = useState<Post>()

    useEffect(() => {
            apiGET<Post>(`tsunagu/community/${params.circle_id}/post/${params.post_id}`)
            .then((res) => {
                setPost(res)
            })
        }, [])

    return (
        <div id="post-detail" className="row-gap row-gap--md">
            <p className="post-title txt-l bold">{post?.title}</p>
            <p className="post-content">{post?.content}</p>

            <div id="comments">
                <h2>Ripples</h2>
                <div id="comment-container" className="row-gap row-gap--md">
                    {
                        post ? 
                            post.comments.map((comment: Comment) => (
                            <CommentCard key={comment.id} depth={0} comment={comment} />
                        ))
                        :
                            ""
                    }
                    
                </div>
            </div>
        </div>
    )
}