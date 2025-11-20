import BreadcrumbSetter from "@/components/breadcrumb/setBreadcrumbs";
import React from 'react';

import '@/styles/pages/profile/_profile.scss';
import { Divider } from "@mui/material";
import ArcHeader from "@/components/arcHeader";
import WIP from "@/components/wip";

export default function Profile({user} : {user: any}) {
    console.log(user)
    const joinDate = new Date(user.created_at)
    return (
        <React.Fragment>
            <BreadcrumbSetter breadcrumbs={['Profile']} />
            <div id="page-profile" className="grid grid--side-col-reverse">
                <div id="left-col" className="flex-row flex-row--gap-md">
                    <div id="overview" className="profile-card">
                        <img id="profile-bg" src="/platform/main-dashboard/afternoon.jpg" alt="" />
                        <div className="flex-row flex-row--gap-sm">
                            <img id="profile-picture" src={`/storage/preset-profile/${user.picture_preset}.webp`} alt="" />
                            <p className="txt-lg txt-bold">{user.username}</p>
                            <p className="txt-sm">{user.about}</p>
                            <Divider />
                            <div id="profile-details" className="flex-row flex-row--gap-sm">
                                <div>
                                    <p>Joined:</p> 
                                    <p>{joinDate.toLocaleString('default', { month: 'short'})} {joinDate.getFullYear()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="friends" className="profile-card">
                        <h3>Friends</h3>
                    </div>
                </div>
                <div className="flex-row flex-row--gap-md">
                    <div id="stat-overview">
                        <ArcHeader title="At A Glance" />
                        <div>
                            <div className="profile-card">
                                <img src="/global/app-icons/miru.svg" alt="" />
                                <div>
                                    <p>N/A</p>
                                    <p>Anime Watch</p>
                                </div>
                            </div>
                            <div className="profile-card">
                                <img src="/global/app-icons/yomu.svg" alt="" />
                                <div>
                                    <p>N/A</p>
                                    <p>Works Read</p>
                                </div>
                            </div>
                            <div className="profile-card">
                                <img src="/global/app-icons/asobu.svg" alt="" />
                                <div>
                                    <p>N/A</p>
                                    <p>Games Owned</p>
                                </div>
                            </div>
                            <div className="profile-card">
                                <img src="/global/app-icons/tsunagu.svg" alt="" />
                                <div>
                                    <p>N/A</p>
                                    <p>Posts Made</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ArcHeader title="Showcase" />
                        <WIP />
                    </div>
                    <div>
                        <ArcHeader title="Statistics" />
                        <WIP />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}