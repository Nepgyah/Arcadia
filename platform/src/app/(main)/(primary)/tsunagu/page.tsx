'use client';

import React from "react";
import { useEffect, useState } from "react";

import { Breadcrumbs, Typography } from "@mui/material";

import { apiGET } from "@/util/api/api";
import { useUser } from "@/util/wrappers/userContext";

import { Post } from "@/types/tsunagu";
import PostCard from "@/components/apps/tsunagu/postCard";

export default function TsunaguHome() {
    const { user } = useUser()
    
    const [latestPosts, setLatestPosts] = useState<Post[]>([])
    const [userCommunities, setUserCommunities] = useState([])

    useEffect(() => {
        apiGET<any>('tsunagu/home/')
        .then((res) => {
            setLatestPosts(res.latest_posts);
        })
    }, [])
    
    return (
        <React.Fragment>
            <Breadcrumbs>
                <Typography>Tsunagu</Typography>
                <Typography>Home</Typography>
            </Breadcrumbs>
            <div id="page-asobu-home"  className="page-content">
                <div className="two-col-section two-col-section--uneven-reverse">
                    <div className="vertical-divider-right p-right-xl">
                        <div id="latest">
                            <h2>Trending</h2>
                            <div className="row-gap-md">
                                {
                                    latestPosts ?
                                        latestPosts.map((post: any, idx: number) => (
                                            <PostCard 
                                                post={post} 
                                                link={`tsunagu/circle/${post.community.id}/${post.community.slug}/${post.id}`}
                                                key={idx} 
                                            />
                                        ))
                                    :
                                        'Loading'
                                }
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="app-font--miru border-bottom">Your Communities</h2>
                        {
                            user ?
                                'Your Communities'
                            :
                                'No Communities Found'
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}