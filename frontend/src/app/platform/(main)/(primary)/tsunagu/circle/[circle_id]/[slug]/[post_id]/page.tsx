'use client';

import PostCard from "@/components/platform/tsunagu/postCard";
import { apiGET } from "@/util/api/api";
import { Breadcrumbs, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function TsunaguPostPage() {
    const params = useParams();
    const [post, setPost] = useState<any>([])

    useEffect(() => {
            apiGET<any>(`tsunagu/community/${params.circle_id}/post/${params.post_id}`)
            .then((res) => {
                setPost(res)
            })
        }, [])

    return (
        <div id="post-detail" className="row-gap row-gap--md">
            <p className="post-title">{post?.title}</p>
            <p className="post-content">{post?.content}</p>

            <div id="comments">
                <h2>Ripples</h2>
            </div>
        </div>
    )
}