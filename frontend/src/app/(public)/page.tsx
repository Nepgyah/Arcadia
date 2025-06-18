import React from "react";
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import { Accordion, AccordionDetails, AccordionSummary, Slide } from "@mui/material";
import Image from "next/image";

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Script from "next/script";
import Link from "next/link";

import '../../styles/public/homepage.scss';

export default function Homepage() {
    return(
        <div id="page-homepage">
            <section id="hero" className="hero">
                <p id="arcadia-text">アルケディア</p>
                <img 
                    className="hero__bg-image"
                    src="/website/homepage/hero/anime-world.png" 
                    alt="" 
                />
                <div className="homepage-hero-wrapper">
                    <div className="left-col">
                        <div className="hero-gradient"></div>
                        <div className="hero__text">
                            <h1><span className="container"><span id="word" className="rotating-word">Stream.</span></span><br />Your Way.</h1>
                            <p className="main-text">Arcadia is your home base for everything otaku. Where fans come together to celebrate what they love and find something new.</p>
                            <div className="hero__button-container">
                                <Button variant="contained" color="primary">
                                    Enter Arcadia
                                </Button>
                                <Button variant="text" color="primary" href="#primary-apps">
                                    Explore the Apps
                                </Button>
                            </div>
                        </div>
                        <div className="partners">
                            <img className="partner" src="/website/partners/pony-canyon.svg" alt="" />
                            <img className="partner" src="/website/partners/pcpartpicker.png" alt="" />
                            <img className="partner" src="/website/partners/myanimelist.svg" alt="" />
                            <img className="partner" src="/website/partners/funimation.svg" alt="" />
                            <img className="partner" src="/website/partners/jc-staff.png" alt="" />
                        </div>
                    </div>
                    <div className="right-col">
                        <div className="hero-gradient"></div>
                        <img id="hero-blurb" src="/website/homepage/hero/hero-blurb.svg" alt="" />
                        <img id="furina" src="/website/homepage/hero/furina.png" alt="" />
                    </div>
                </div>
            </section>
            <div id="gradient-one">
                <section id="features" className="section">
                    <div id="feature-image" className="desktop-only">
                        <div className="offset-frame"></div>
                        <img src="/website/homepage/features/anime-girl-on-phone.png" alt="" />
                    </div>
                    <div className="section__wrapper">
                        <div id="features-text">
                            <div className="section-main section-main--white">
                                <p className="section-main__mini-title">Arcadia Difference</p>
                                <h2 className="section-main__main-title">Arcadia<br />The Flagship of Fandom Tools</h2>
                            </div>
                            <div className="section-content section-content--four-col">
                                <div className="feature">
                                    <h3>All-In-On</h3>
                                    <p>Arcadia combines anime tracking, manga reading, gaming, merch shopping and more.</p>
                                </div>
                                <div className="feature">
                                    <h3>Direct Industry Connections</h3>
                                    <p>Get closer to the anime, manga, and gaming industries with exclusive content straight from studios, publishers, and developers.</p>
                                </div>
                                <div className="feature">
                                    <h3>For Fans, Not for Profit</h3>
                                    <p>No exploitative ads, no paywalls blocking basic features. Arcadia always aims to put fans first.</p>
                                </div>
                                <div className="feature">
                                    <h3>Community-Driven</h3>
                                    <p>Arcadia grows with you! Whether it’s new features, events, or content, its the community that brings Arcadia alive.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="partners" className="section">
                    <div className="section__wrapper">
                        <div className="section-main section-main--white">
                            <p className="section-main__mini-title">Partnership</p>
                            <h2 className="section-main__main-title">Industry Leader Trust Arcadia</h2>
                            <p className="section-main__description">Anime Studios, Game Developers, and more collaborate with Arcadia to build something special.</p>
                        </div>
                        <div className="section-content section-content--flex">
                            <div className="partner-logo">
                                <img src="/website/partners/crunchyroll_white.svg" alt="" />
                            </div>
                            <div className="partner-logo">
                                <img src="/website/partners/nexon_white.png" alt="" />
                            </div>
                            <div className="partner-logo">
                                <img src="/website/partners/square-enix_white.svg" alt="" />
                            </div>
                            <div className="partner-logo">
                                <img src="/website/partners/aniplex_white.svg" alt="" />
                            </div>
                            <div className="partner-logo">
                                <img src="/website/partners/hoyoverse_white.png" alt="" />
                            </div>
                            <div className="partner-logo">
                                <img src="/website/partners/ryu-ga-gotoku_white.svg" alt="" />
                            </div>
                            <div className="partner-logo">
                                <img src="/website/partners/yostar_white.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="primary-apps" className="section">
                    <div className="section__wrapper">
                        <div id="primary-top-half">
                            <div className="section-main section-main--white">
                                <p className="section-main__mini-title">Introducing Arcadia</p>
                                <h2 className="section-main__main-title">Essentials for the Ultimate Otaku</h2>
                                <p className="section-main__description">Your all-in-one toolkit for tracking, streaming, gaming, and shopping. These flagship apps form the heart of your ultimate otaku experience.</p>
                                <Button variant="contained" color="secondary">
                                Sign Up Today
                                </Button>
                            </div>
                            <a href="apps/miru">
                                <div className="app-tile app-tile--vertical" id="miru">
                                    <div className="app-tile__image">
                                        <img src="/website/homepage/primary-apps/miru.jpg" alt="" />
                                    </div>
                                    <div className="app-tile__text">
                                        <p className="japanese">みる</p>
                                        <h3 className="name">Miru</h3>
                                        <p className="slogan">Explore the world of anime, one episode at a time</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div id="primary-bottom-half">
                            <div id="bottom-left">
                                <a href="apps/yomu">
                                    <div className="app-tile app-tile--vertical" id="yomu">
                                        <div className="app-tile__image">
                                            <img src="/website/homepage/primary-apps/yomu.jpg" alt="" />
                                        </div>
                                        <div className="app-tile__text">
                                            <p className="japanese">よむ</p>
                                            <h3 className="name">Yomu</h3>
                                            <p className="slogan">Where words create worlds</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="apps/kau">
                                    <div className="app-tile" id="kau">
                                        <div className="app-tile__image">
                                            <img src="/website/homepage/primary-apps/kau.jpg" alt="" />
                                        </div>
                                        <div className="app-tile__text">
                                            <p className="japanese">かう</p>
                                            <h3 className="name">Kau</h3>
                                            <p className="slogan">From wish list to reality</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div id="bottom-right">
                                <a href="apps/asobu">
                                    <div className="app-tile" id="asobu">
                                        <div className="app-tile__image">
                                            <img src="/website/homepage/primary-apps/asobu.jpg" alt="" />
                                        </div>
                                        <div className="app-tile__text">
                                            <p className="japanese">あそぶ</p>
                                            <h3 className="name">Asobu</h3>
                                            <p className="slogan">From wish list to reality</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="apps/tsunagu">
                                    <div className="app-tile" id="tsunagu">
                                        <div className="app-tile__text">
                                            <p className="japanese">つなぐ</p>
                                            <h3 className="name">Tsunagu</h3>
                                            <p className="slogan">Join the conversation, shape the fandom</p>
                                        </div>
                                        <div className="app-tile__image">
                                            <img src="/website/homepage/primary-apps/tsunagu.jpg" alt="" />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div id="root-experience">
                <img id="root-bg" src="/website/homepage/roots/sakura-branch.svg" alt="" />
                <section id="roots" className="section">
                    <div className="section__wrapper">
                        <div className="section-main">
                            <p className="section-main__mini-title">The Heart of Arcadia</p>
                            <h2 className="section-main__main-title">Rooted In Otaku Culture</h2>
                        </div>
                        <div className="section-content section-content--two-col">
                            <div className="image">
                                <div className="bg-box"></div>
                                <Image height={500} width={500} src="/website/homepage/roots/game_developers.jpg" alt=""/>
                            </div>
                            <div className="accordion">
                                <Accordion>
                                    <AccordionSummary>一 Anime Studios</AccordionSummary>
                                    <AccordionDetails>The visionaries behind every frame, crafting stories and world. Arcadia connects you directly to their creations, celebrating their art and impact.</AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary>二 Mangakas</AccordionSummary>
                                    <AccordionDetails>The masters of manga storytelling and artistry, whose work sparks imagination and emotion. Their craft by making their stories easier to discover and enjoy.</AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary>三 Game Developer</AccordionSummary>
                                    <AccordionDetails>Innovators who build immersive experiences and bring your favorite universes to life.</AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary>四 Voice Actors</AccordionSummary>
                                    <AccordionDetails>Arcadia honors the seiyuu who give our favorite stories their soul.</AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary>五 Anisong Artists</AccordionSummary>
                                    <AccordionDetails>The soundtracks to our obsessions, anisong artists help wrap up unforgettable stories with emotion filled beats. </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section id="steps" className="section">
                    <div className="section__wrapper">
                        <div className="section-main section-main--center">
                            <p className="section-main__mini-title">Easy Steps</p>
                            <h2 className="section-main__main-title">Set up your Arcadia experience</h2>
                        </div>
                        <div className="section-content section-content--four-col">
                            <div className="step">
                                <img src="/website/homepage/steps/bored-anime-girls.png" alt="" />
                                <div className="step__text">
                                    <h3>Create</h3>
                                    <p>Create your Arcadia account! An email, password and your passion is all you need.</p>
                                </div>
                            </div>
                            <div className="step">
                                <img src="/website/homepage/steps/thinking-anime-girl.png" alt="" />
                                <div className="step__text">
                                    <h3>Tune</h3>
                                    <p>Your account isn’t just some data vessel, customize it to make it your own!</p>
                                </div>
                            </div>
                            <div className="step">
                                <img src="/website/homepage/steps/exploring-anime-girls.png" alt="" />
                                <div className="step__text">
                                    <h3>Explore</h3>
                                    <p>Find the apps that suit your fandom, and dive into Arcadia adventures.</p>
                                </div>
                            </div>
                            <div className="step">
                                <img src="/website/homepage/steps/delivering-anime-girl.png" alt="" />
                                <div className="step__text">
                                    <h3>Transfer</h3>
                                    <p>Coming from MAL, PC Partpicker or somewhere else? Bring them along here!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div id="sakura-world">
                <img id="sakura-lake" src="/website/homepage/middle-cta/sakura-lake.svg" alt="" />
                <section id="secondary-app" className="section">
                    <div className="section__wrapper">
                        <div className="section-main section-main--center">
                            <p className="sectin-main__mini-title">Beyond the Essentials</p>
                            <h2 className="section-main__main-title">The Arcadia Side Suite</h2>
                            <p>These supplementary apps are smaller in scope, but big on impact. From planning events to diving into niche blogs and lo-fi vibes, the Side Suite adds extra flavor to your fandom journey, because even side quests matter.</p>
                        </div>
                        <div className="app-container">
                            <div className="left-col">
                                <div className="app-tile" id="iku">
                                    <div className="app-tile__text">
                                        <p className="japanese">いく</p>
                                        <h3 className="name">Iku</h3>
                                        <p className="slogan">Go where the community goes</p>
                                    </div>
                                    <div className="app-tile__image">
                                        <img src="/website/homepage/secondary-apps/iku.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="app-tile" id="hiku">
                                    <div className="app-tile__image">
                                        <img src="/website/homepage/secondary-apps/hiku.jpg" alt="" />
                                    </div>
                                    <div className="app-tile__text">
                                        <p className="japanese">ひく</p>
                                        <h3 className="name">Hiku</h3>
                                        <p className="slogan">Pull Your Way To Victory</p>
                                    </div>
                                </div>
                            </div>
                            <div className="right-col">
                                <div className="app-tile" id="shiru">
                                    <div className="app-tile__image">
                                        <img src="/website/homepage/secondary-apps/shiru.jpg" alt="" />
                                    </div>
                                    <div className="app-tile__text">
                                        <p className="japanese">しる</p>
                                        <h3 className="name">Shiru</h3>
                                        <p className="slogan">Explore, Learn, Share the Journey</p>
                                    </div>
                                </div>
                                <div className="app-tile" id="kumitateru">
                                    <div className="app-tile__image">
                                        <img src="/website/homepage/secondary-apps/kumitateru.jpg" alt="" />
                                    </div>
                                    <div className="app-tile__text">
                                        <p className="japanese">くみたてる</p>
                                        <h3 className="name">Kumitateru</h3>
                                        <p className="slogan">Build Your Battle Station</p>
                                    </div>
                                </div>
                                <div className="app-tile" id="kiku">
                                    <div className="app-tile__text">
                                        <p className="japanese">きく</p>
                                        <h3 className="name">Kiku</h3>
                                        <p className="slogan">Relax.<br />Focus.<br /> Create.</p>
                                    </div>
                                    <div className="app-tile__image">
                                        <img src="/website/homepage/secondary-apps/kiku.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="middle-cta" className="section">
                    <div className="section__wrapper">
                        <div className="section-main">
                            <h2 className="section-main__main-title">Your Otaku World is Waiting</h2>
                            <p>Stop browsing. Start belonging. Step into your otaku world today.</p>
                            <div className="button-container button-container--center">
                                <Button variant="contained" color="primary">
                                    Join Now
                                </Button>
                                <Button variant="text" color="primary">
                                    Got Questions?
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="roadmap" className="section">
                    <div className="section__wrapper">
                        <div className="section-main">
                            <p className="section-main__mini-title">The Journey Ahead</p>
                            <h2 className="section-main__main-title">What's Next For Arcadia</h2>
                            <p>We’re just getting started. From new features to fan-powered expansions, Arcadia’s evolving. Here's a glimpse at what’s coming next </p>
                        </div>
                        <div className="goals">
                            <div className="goal">
                                <h3>Launching the Core Platform</h3>
                                <p>We're starting with the essentials: Arcadia's primary apps, account setup, personalization, and easy data import from other platforms.</p>
                            </div>
                            <div className="icon desktop-only">
                                <DoubleArrowIcon />
                            </div>
                            <div className="goal">
                                <h3>Expanding the Ecosystem</h3>
                                <p>Next, we’ll roll out the full website, secondary apps, and new features that bring the community and platform to life.</p>
                            </div>
                            <div className="icon desktop-only">
                                <DoubleArrowIcon />
                            </div>
                            <div className="goal">
                                <h3>Introducing the Anime Persona Quiz</h3>
                                <p>A fun, personalized quiz that matches you with an anime-inspired archetype.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section id="footer-cta">
                <div className="section__full-wrapper">
                    <div className="img">
                        <img src="/website/homepage/footer-cta/anime-girls.jpg" alt="" />
                    </div>
                    <div className="text">
                        <h2>Ready to Enter Arcadia?</h2>
                        <p>Join a platform built by fans, for fans. Watch, read, play and more.</p>
                        <Button variant="contained" color="secondary">
                            Create Your Free Account
                        </Button>
                    </div>
                </div>
            </section>

            <Script src="/js/homepage.js" />
        </div>
    )
}