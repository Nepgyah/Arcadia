'use client';

import { Breadcrumbs, Typography } from "@mui/material";
import { apiGET } from "@/util/api/api";
import { useEffect, useState } from "react";
import React from "react";
import { useUser } from "@/util/wrappers/userContext";

export default function TsunaguHome() {
    const { user } = useUser()
    
    const [trendingPosts, setTrendingPosts] = useState([])
    const [userCommunities, setUserCommunities] = useState([])

    useEffect(() => {
        apiGET<any>('tsunagu/home/')
        .then((res) => {
            setTrendingPosts(res.trending_posts);
        })
    }, [])
    
    return (
        <React.Fragment>
            <Breadcrumbs>
                <Typography>Asobu</Typography>
                <Typography>Home</Typography>
            </Breadcrumbs>
            <div id="page-asobu-home"  className="page-content page-content--two-col page-content--reversed">
                <div className="page-content__left-column divider divider--vertical padding-right--lg">
                    <div id="latest">
                        <h2>Trending</h2>
                        <div className="layout-grid-1">
                            Posts
                        </div>
                    </div>
                </div>
                <div className="page-content__right-column">
                    <h2 className="app-font--miru border-bottom">Your Communities</h2>
                    {
                        user ?
                            'Your Communities'
                        :
                            'Login to view your communities'
                    }
                </div>
            </div>
        </React.Fragment>
    )
}