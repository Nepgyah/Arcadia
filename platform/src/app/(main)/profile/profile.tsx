import { useUser } from "@/util/wrappers/userContext";
import { Avatar, Button, Divider } from '@mui/material';
import React from 'react';

// import '@/styles/platform/pages/profile/profile.scss';

export default function Profile({user} : {user: any}) {

    const now = new Date()

    return (
        <React.Fragment>
            <h1>My Profile</h1>
            <div id="page-profile" className="page-content page-content--two-col">
                <div className="page-content__left-column">
                    <div id="overview" className="card card--custom">
                        <img className="background" src="/website/images/homepage/hero/anime-world.png" alt="" />
                        <Avatar className={`profile-pic profile-pic--color-${user.color_preset}`} src={user ? `/platform/auth/profile-pics/profile_${user?.picture_preset}.webp` : ''}/>
                        <div className="card__content">
                            <h2 className="name">{user?.username}</h2>
                            <p>{user?.about}</p>
                            <Divider />
                            <div className="summary">
                                <div className="stat">
                                    <p className="stat__label">Birthday</p>
                                    <p className="stat__value">{user?.birth_date}</p>
                                </div>
                                <div className="stat">
                                    <p className="stat__label">Joined</p>
                                    <p className="stat__value">{user?.birth_date}</p>
                                </div>
                                <div className="stat">
                                    <p className="stat__label">Location</p>
                                    <p className="stat__value">Place</p>
                                </div>
                            </div>
                            <Button variant="contained">Edit Profile</Button>
                        </div>
                    </div>
                    <div className="card">
                        <p className="card__title">Friends</p>
                    </div>
                    <div className="card">
                        <p className="card__title">Achievements</p>
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