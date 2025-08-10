'use client';

import { Box, Tab } from '@mui/material';
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import { useState } from 'react';

import "@/styles/public/pages/resources/legal.scss";

export default function Legal() {

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

    return (
        <div id='page-resource-legal'>
            <section id='hero' className='hero'>
                <img className='hero__bg-image' src="/website/images/resource/legal-hero.jpg" alt="" />
                <div className='hero__mask'></div>
                <div className='hero__wrapper'>
                    <h1 className='clr-txt-light'>Legal</h1>
                </div>
            </section>

            <section className='section'>
                <div className='section__wrapper'>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="">
                            <Tab label="Privacy" value={0} />
                            <Tab label="Terms of Use" value={1} />
                            <Tab label="Community Guidlines" value={2} />
                            <Tab label="Misc & Credits" value={3}/>
                        </Tabs>
                    </Box>
                    <Privacy isHidden={value !== 0} />
                    <Terms isHidden={value !== 1} />
                    <Community isHidden={value !== 2} />
                    <Misc isHidden={value !== 3} />
                </div>
            </section>
        </div>
    )
}

function Privacy({isHidden} : {isHidden: boolean}) {
    return (
        <div className='legal-content' hidden={isHidden} >
            <h2>Privacy & Cookie Policy</h2>
            <div>
                <p><i>Last updated: August 7th, 2025</i></p>
                <p>
                    Welcome to Arcadia, a fan made project by a fan made company: Team Double Dragon. We are building this platform out of love for anime, games are more.
                    As so, most of the content here is more for filling content but if we ever take off there is a baseline already set.
                </p>
            </div>
            <div>
                <h3>What we (might) collect</h3>
                <ul>
                    <li><b>Basic account information</b> - Such as email and display name.</li>
                    <li><b>Cookies</b> - Some data stored on your device, currently we are only using cookies to help you stay logged in and protect calls to our Arcadia API.</li>
                    <li><b>Survey data</b> - If you ever fill out any survey or feedback forms, we may hold data for our own records.</li>
                </ul>
            </div>
            <div>
                <h3>What we don't do</h3>
                <ul>
                    <li>We won't sell your data.</li>
                    <li>We won't stalk you around the internet.</li>
                    <li>We won't pester you with ads.</li>
                </ul>
            </div>
            <div>
                <h3>Third party services</h3>
                <p>We use several third party integrations related to Google and other APIs. They policies are quite in effect as our own during the use of the platform</p>
            </div>
        </div>
    )
}

function Terms({isHidden} : {isHidden: boolean}) {
    return (
        <div className='legal-content' hidden={isHidden} >
            <h2>Terms</h2>
        </div>
    )
}

function Community({isHidden} : {isHidden: boolean}) {
    return (
        <div className='legal-content' hidden={isHidden} >
            <h2>Community</h2>
        </div>
    )
}

function Misc({isHidden} : {isHidden: boolean}) {
    return (
        <div className='legal-content' hidden={isHidden} >
            <h2>Misc</h2>
        </div>
    )
}