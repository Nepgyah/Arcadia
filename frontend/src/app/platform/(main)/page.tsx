'use client';

import { useSnackbar } from "@/util/wrappers/snackbarProvider"
import React from "react"
import Image from 'next/image'

import '@/styles/platform/pages/main-dashboard.scss';
import { useRouter } from "next/navigation";

export default function HomeDashboard() {

    return (
        <React.Fragment>
            <h1>Home</h1>
            <div id="page-main-dashboard" className="page-content page-content--two-col">
                <div className="page-content__left-column">
                    <div className="app-navigation card">
                        <h3>Primary Apps</h3>
                        <div className="container">
                            <AppIcon app='miru' />
                            <AppIcon app='yomu' />
                            <AppIcon app='asobu' />
                            <AppIcon app='kau' />
                            <AppIcon app='tsunagu' />
                        </div>
                    </div>
                    <div className="app-navigation card">
                        <h3>Secondary Apps</h3>
                        <div className="container">
                            <AppIcon app='iku' />
                            <AppIcon app='hiku' />
                            <AppIcon app='kumitateru' />
                            <AppIcon app='shiru' />
                            <AppIcon app='kiku' />
                        </div>
                    </div>
                </div>
                <div className="page-content__right-column">
                    <GreetingImage />

                </div>
            </div>
        </React.Fragment>
    )
}

function GreetingImage() {
    const time = new Date().getHours();

    if (time >= 0 && time < 12) {
        return (
            <div className="greeting-image border-radius box-shadow">
                <div className="bg-mask"></div>
                <p className="txt-l">今日もいい天気ですね</p>
                <Image
                    className="greeting-image border-radius box-shadow"
                    src='/platform/main-dashboard/daytime.jpg'
                    alt="Time dependent greeting image"
                    height={350}
                    width={900}
                />
            </div>
        )
    } else {
        return (
            <div className="greeting-image border-radius box-shadow">
                <div className="bg-mask"></div>
                <p className="txt-l">お疲れ様でした</p>
                <Image
                    className="greeting-image border-radius box-shadow"
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
    'shiru'

function AppIcon({ app } : { app: app}) {
    const router = useRouter();

    return (
        <div className='app-icon-button'>
            <div className={`icon bg-${app}-base animation__hover-grow`} onClick={() => router.push(`platform/${app}`)}>
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