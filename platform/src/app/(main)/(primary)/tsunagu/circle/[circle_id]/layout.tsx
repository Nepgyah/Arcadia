export const dynamic = "force-static";
export const revalidate = 3600; 

import React from "react";
import { Avatar } from "@mui/material";
import { GraphQL } from "@/util/api/api";
import BreadcrumbSetter from "@/components/breadcrumb/setBreadcrumbs";
import ArcHeader from "@/components/arcHeader";

import '@/styles/pages/tsunagu/_circle.scss';

// Layout to display permenant circle information
export default async function TsunaguCircleLayout(
    {
        children,
        params
    } : {
        children: React.ReactNode,
        params: {
           circle_id: string
        }
    }) {

    const { circle_id } = await Promise.resolve(params);
    const { tsunaguCommunity } = await getCommunity(circle_id);

    return (
        <React.Fragment>
        <BreadcrumbSetter breadcrumbs={['Tsunagu', 'Circle', `${tsunaguCommunity.title}`]} />
        <div id="page-tsunagu-circle"  className="page-content">
            <div className="grid grid--side-col">
                <div>
                    {children}
                </div>
                <div id="community-details">
                    <ArcHeader title="Circle Details" />
                    <div className="flex-row flex-row--gap-md">
                        <div id="community-overview" className="row-gap row-gap--xs bg-platform-dark p-a-sm border-radius-md">
                            <div id="icon-name" className="flex-col flex-col--gap-sm">
                                <Avatar src={`/storage/tsunagu/${tsunaguCommunity.id}.jpg`} />
                                <p id="community-name" className="txt-m">c/{tsunaguCommunity.title}</p>
                            </div>
                            <p>{tsunaguCommunity.description}</p>
                        </div>
                        <div id="community-stats" className=" bg-platform-dark p-a-sm border-radius-md">
                            <h3>Statistics</h3>
                            <div>
                                <p>Members: <span>N/A</span></p>
                                <p>Posts: <span>{tsunaguCommunity.posts}</span></p>
                                <p>Created: <span>{new Date(tsunaguCommunity.createdAt).toDateString()}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
    )
}

async function getCommunity(id: string) {
    const query =
    `
    query {
        tsunaguCommunity(id: ${id}) {
            id,
            title,
            slug,
            description,
            createdAt
        }
    }
    `
    
    const res = await GraphQL<any>(query)
    return res.data
}