'use client';

import EntryCard from "@/components/platform/entryCard";
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
            <div id="page-yomu-home"  className="page-content page-content--two-col page-content--reversed">
                <div className="page-content__left-column divider divider--vertical padding-right--lg">
                    <div id="trending">
                        <h2>Trending</h2>
                        <div className="layout-grid-5">
                            {
                                trendingYomu &&
                                trendingYomu.map((work: any, key: number) => (
                                    <EntryCard 
                                        key={key} 
                                        app="yomu" 
                                        title={work.title} 
                                        clickLink={`/platform/yomu/work/${work.slug}`} 
                                        imageLink={`/storage/yomu/${work.slug}.jpg`}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="page-content__right-column">
                    <h2 className="border-bottom">Details</h2>
                    <WIP />
                </div>
            </div>
        </React.Fragment>
    )
}