'use client';

import { Breadcrumbs, Typography } from "@mui/material";
import { apiGET } from "@/util/api/api";
import { useEffect, useState } from "react";
import React from "react";
import { useUser } from "@/util/wrappers/userContext";
import PostCard from "@/components/platform/tsunagu/postCard";
import { Post } from "@/util/types/tsunagu";

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
            <div id="page-asobu-home"  className="page-content page-content--two-col page-content--reversed">
                <div className="page-content__left-column divider divider--vertical padding-right--lg">
                    <div id="latest">
                        <h2>Trending</h2>
                        <div className="row-gap row-gap--md">
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
                <div className="page-content__right-column">
                    <h2 className="app-font--miru border-bottom">Your Communities</h2>
                    {
                        user ?
                            'Your Communities'
                        :
                            'No Communities Found'
                    }
                </div>
            </div>
        </React.Fragment>
    )
}