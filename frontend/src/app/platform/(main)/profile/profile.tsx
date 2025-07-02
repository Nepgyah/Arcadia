import '@/styles/platform/pages/profile/profile.scss';
import { useUser } from "@/util/userContext";
import React from 'react';

export default function Profile({user} : {user: any}) {
    return (
        <React.Fragment>
            <h1>My Profile</h1>
            <div id="page-profile" className="page-content page-content--two-col">
                <div className="page-content__left-column">
                    <div id="overview" className="card card--custom">
                        <img className="background" src="/website/images/homepage/hero/anime-world.png" alt="" />
                        <div className="card__content">
                            <p className="name">{user?.username}</p>
                        </div>
                    </div>
                </div>
                <div className="page-content__right-column">
                    <div id="top-stats">
                        <div className="card">
                            <p>Anime Watched</p>
                        </div>
                        <div className="card">
                            <p>Manga Read</p>
                        </div>
                        <div className="card">
                            <p>Games Owned</p>
                        </div>
                        <div className="card">
                            <p>Events Attended</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}