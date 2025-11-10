'use client';

import React from "react"
import Image from 'next/image'

import '@/styles/pages/_main-dashboard.scss';
import { useRouter } from "next/navigation";
import { Breadcrumbs, Typography } from "@mui/material";

export default function HomeDashboard() {

    return (
        <React.Fragment>
            <Breadcrumbs>
                <Typography>Home</Typography>
            </Breadcrumbs>
            <div id="page-main-dashboard" className="page-content">
                <div id="layout">
                    <div id="navigation">
                        <div className="app-navigation p-a-md m-b-lg bg-platform-dark border-radius-md box-shadow">
                            <h3>Primary Apps</h3>
                            <div className="container">
                                <AppIcon app='miru' />
                                <AppIcon app='yomu' />
                                <AppIcon app='asobu' />
                                {/* <AppIcon app='kau' /> */}
                                <AppIcon app='tsunagu' />
                            </div>
                        </div>
                        <div className="app-navigation  p-a-md bg-platform-dark border-radius-md box-shadow">
                            <h3>Secondary Apps</h3>
                            <div className="container">
                                {/* <AppIcon app='iku' />
                                <AppIcon app='hiku' /> */}
                                <AppIcon app='kumitateru' />
                                {/* <AppIcon app='shiru' /> */}
                                <AppIcon app='kiku' />
                                {/* <AppIcon app='todokeru' />
                                <AppIcon app='manabu' />
                                <AppIcon app='sagasu' /> */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <GreetingImage />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

function GreetingImage() {
    const time = new Date().getHours();

    if (time >= 0 && time < 12) {
        return (
            <div className="greeting-image border-radius-md box-shadow">
                <div className="bg-mask"></div>
                <p className="txt-l">今日もいい天気ですね</p>
                <Image
                    className="greeting-image box-shadow"
                    src='/platform/main-dashboard/daytime.jpg'
                    alt="Time dependent greeting image"
                    height={350}
                    width={900}
                />
            </div>
        )
    } else {
        return (
            <div className="greeting-image border-radius-md box-shadow">
                <div className="bg-mask"></div>
                <p className="txt-lg">お疲れ様でした!</p>
                <Image
                    className="greeting-image box-shadow"
                    src='/platform/main-dashboard/afternoon.jpg'
                    alt="Time dependent greeting image"
                    height={350}
                    width={900}
                />
            </div>
        )
    }
}
type app = 
    'miru' | 
    'yomu' | 
    'asobu' | 
    'kau' | 
    'tsunagu' | 
    'iku' | 
    'hiku' | 
    'kiku' |
    'kumitateru' |
    'shiru' |
    'manabu' |
    'todokeru' |
    'sagasu'

function AppIcon({ app } : { app: app}) {
    const router = useRouter();

    return (
        <div className='app-icon-button clickable'>
            <div className={`icon bg-${app}-base animation__hover-grow`} onClick={() => router.push(`${app}`)}>
                <Image
                    src={`/global/app-icons/${app}.svg`}
                    alt={`${app} icon`}
                    height={36}
                    width={36}
                />
            </div>
            <p className="txt-s bold">{app}</p>
        </div>
    )
}