'use client';

import ArcHeader from "@/components/arcHeader";
import EntryCard from "@/components/entryCard";
import LinkedHeader from "@/components/platform/linkedHeader";
import WIP from "@/components/wip";
import { apiGET } from "@/util/api/api";
import { Breadcrumbs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function YomuHome() {

    const [trendingYomu, setTrendingYomu] = useState([]);

    useEffect(() => {
        apiGET<any>('yomu/home/')
        .then((res) => {
            setTrendingYomu(res.trending)
        })
    }, [])

    return (
        <React.Fragment>
            <Breadcrumbs>
                <Typography>Yomu</Typography>
                <Typography>Home</Typography>
            </Breadcrumbs>
            <div id="page-yomu-home">
                <div className="grid grid--side-col">
                    <div className="flex-row flex-row--gap-md">
                        <div id="trending">
                            <ArcHeader title="Trending" />
                            <div className="flex-col flex-col--gap-sm">
                                {
                                    trendingYomu &&
                                    trendingYomu.map((work: any, key: number) => (
                                        <EntryCard 
                                            key={key} 
                                            app="miru" 
                                            title={work.title} 
                                            clickLink={`/yomu/work/${work.id}/${work.slug}`} 
                                            imageLink={`/storage/yomu/${work.id}.jpg`}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="side-col">
                        <h2 className="app-font--yomu border-bottom">Friend Activity</h2>
                        <WIP />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}