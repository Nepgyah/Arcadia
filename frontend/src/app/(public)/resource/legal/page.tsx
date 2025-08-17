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
                <p>We use several third party integrations related to Google and other APIs. They're policies are quite in effect as our own during the use of the platform.</p>
            </div>
        </div>
    )
}

function Terms({isHidden} : {isHidden: boolean}) {
    return (
        <div className='legal-content' hidden={isHidden} >
            <h2>Terms of Use</h2>
            <div>
                <p><i>Last updated: August 7th, 2025</i></p>
            </div>
            <div>
                <h3>You may not:</h3>
                <ul>
                    <li>Intentionally try to break the site, spam the API, etc.</li>
                    <li>Upload illegal or offensive content</li>
                    <li>Pretend to be someone else, unless its a cosplay profile.</li>
                    <li>Use Arcadia to hurt or harass others.</li>
                </ul>
            </div>
            <div>
                <h3>You acknowledge that:</h3>
                <ul>
                    <li>Arcadia is a work in progress and thus bugs may be a common occurance.</li>
                    <li>Things might be broken, unfinised or plainly actiing wierd.</li>
                    <li>D2X can remove content or restict accounts at our discretion.</li>
                    <li>This is a hobby project: use at your own risk.</li>
                </ul>
            </div>
        </div>
    )
}

function Community({isHidden} : {isHidden: boolean}) {
    return (
        <div className='legal-content' hidden={isHidden} >
            <h2>Community Guidelines</h2>
            <div>
                <p><i>Last updated: August 7th, 2025</i></p>
                <p>Arcadia is a home for otaku of all kinds — anime lovers, manga readers, game collectors, figure hoarders, meme lords, and lore nerds alike. To keep this place chill, fun, and safe, we ask that everyone follow the following.</p>
            </div>
            <div>
                <h3>Respect each other</h3>
                <ul>
                    <li>Respect all users, regardless of their fandoms. If they are violating any rules, use the report feature on the platform.</li>
                    <li>No harassment, hate speech, or flaming.</li>
                    <li>Friendly debates are welcome. Toxicity isn't.</li>
                </ul>
            </div>
            <div>
                <h3>Keep it clean...ish</h3>
                <ul>
                    <li>No NSFW or explicit content outside of clearly marked spaces.</li>
                    <li>Don't post illegal, pirated, or otherwise shady stuff.</li>
                </ul>
            </div>
            <div>
                <h3>Share Creatively (But Responsibly)</h3>
                <ul>
                    <li>You're welcome to post reviews, builds, playlists, fanlists, and more.</li>
                    <li>Don’t claim other people’s work as your own. Credit artists, creators, and sources.</li>
                </ul>
            </div>
        </div>
    )
}

function Misc({isHidden} : {isHidden: boolean}) {
    return (
        <div className='legal-content' hidden={isHidden} >
            <h2>Miscellaneous</h2>
            <div>
                <p><i>Last updated: August 7th, 2025</i></p>
            </div>
            <div>
                <h3>Legal Notices</h3>
                <p>Arcadia is a fan-built project by d2x, created for fun, learning, and community. We’re not affiliated with or endorsed by any official anime, game, publisher, or production company.</p>
            </div>
            <div>
                <h3>Copyright Disclaimer</h3>
                <p>All trademarks, logos, and media referenced on Arcadia belong to their respective owners. If your studio, brand, or legal department finds something concerning, please reach out.</p>
            </div>
            <div>
                <h3>DMCA & Takedown Requests</h3>
                <p>We don’t host pirated content and we’ll gladly remove anything reported in good faith.</p>
            </div>
            <div>
                <h3>Thanks for Keeping Arcadia Awesome</h3>
                <p>The Arcadia world only works because we build it together. Whether you're ranking waifus, reviewing RPGs, or teaching people how to build a custom PC, thank you for keeping it fun, respectful, and full of love.</p>
            </div>
        </div>
    )
}