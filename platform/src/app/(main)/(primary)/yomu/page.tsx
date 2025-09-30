'use client';

import EntryCard from "@/components/platform/entryCard";
import LinkedHeader from "@/components/platform/linkedHeader";
import WIP from "@/components/platform/wip";
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
            <div id="page-yomu-home" className="page-content">
                <div className="two-col-section two-col-section--uneven-reverse">
                    <div className="">
                        <div id="trending">
                            <LinkedHeader title="All-Time" link="yomu/all-time" linkText="See more"/>
                            <div className="layout-grid-5">
                                {
                                    trendingYomu &&
                                    trendingYomu.map((work: any, key: number) => (
                                        <EntryCard 
                                            key={key} 
                                            app="yomu" 
                                            title={work.title} 
                                            clickLink={`/platform/yomu/work/${work.id}/${work.slug}`} 
                                            imageLink={`/storage/yomu/${work.id}.jpg`}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="vertical-divider-left p-left-xl">
                        <h2 className="border-bottom">Friend Activity</h2>
                        <WIP />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}