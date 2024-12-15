'use client'
import { Avatar, IconButton, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import AppsIcon from '@mui/icons-material/Apps';
import Link from "next/link";
import axios from "axios";

import AboutIcon from '@mui/icons-material/Badge';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { redirect } from "next/navigation";

interface User {
    username: string,
    email: string,
}

const TopNav = () => {

    const [showPopup, setShowPopup] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<User>();

    useEffect(() => {

        axios.get("http://127.0.0.1:8000/api/user/verify/", {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json", // Ensure content-type is set
            },
        })
        .then((res) => {
            console.log(res)
            setIsLoggedIn(true)
            setUser(res.data)
        })
        .catch((error) => {
            console.log("NOT LOGGED IN")
            console.log(error)
        })
    }, [])

    const handleLogout = () => {
        console.log('Logging OUT');
        axios.post("http://127.0.0.1:8000/api/user/logout/", {}, {
            withCredentials: true,  // Ensure cookies are sent with the request
        })
        .then((res) => {
            setIsLoggedIn(false);
        })
        .catch((error) => {
            console.log("Error: ", error);
        })
    }

    return (
        <div className="top-nav">
            <div className="bar">
                <div className="logo">
                    <Link href="/">
                        <img src="../../static/images/logo_white.svg" />
                    </Link>
                </div>
                <div className="navigation">
                    <IconButton >
                        <AppsIcon />
                    </IconButton>
                    <IconButton onClick={() => setShowPopup(!showPopup)} >
                        <Avatar />
                    </IconButton>
                </div>
            </div>
            <div className={`profile-popup ${showPopup ? "" : "hidden"}`}>
                <Avatar className="avatar-pic" src="../../static/images/stelle.jpg" />
                {
                    isLoggedIn ?
                        <React.Fragment>
                            <p className="username">{user?.username}</p>
                            <p className="email">{user?.email}</p>
                            <div className="profile-links">
                                <Link href="/profile/8/">
                                    <AboutIcon />
                                    <p>My Profile</p>
                                </Link>
                                <Link href="/profile/8/">
                                    <SettingsIcon />
                                    <p>Settings</p>
                                </Link>
                                <Button variant="contained" color="primary" onClick={() => handleLogout()}>
                                    <LogoutIcon />
                                    <p>Logout</p>
                                </Button>
                            </div>
                        </React.Fragment>
                    :
                        <React.Fragment>
                            <Button variant="contained" color="primary" onClick={() => redirect('/profile/login/')}>
                                <LogoutIcon />
                                <p>Login</p>
                            </Button>
                        </React.Fragment>
                }
            </div>
        </div>
    )
}

export default TopNav;

