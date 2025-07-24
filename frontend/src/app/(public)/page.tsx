import React, { useEffect } from "react";
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import { Accordion, AccordionDetails, AccordionSummary, Slide } from "@mui/material";
import Image from "next/image";

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Script from "next/script";
import GitHubIcon from '@mui/icons-material/GitHub';

import '../../styles/public/pages/homepage.scss';
import FadeIn from "@/components/public/fadeIn";
import Link from "next/link";

declare global {
    interface Window {
        ScrollReveal: any;
    }
}

export default function Homepage() {
    return(
            <div id="page-homepage">
                <section id="hero" className="hero">
                    <p id="arcadia-text">アルケディア</p>
                    <Image 
                        className="hero__bg-image"
                        src="/website/images/homepage/hero/anime-world.png" 
                        alt="Anime fantasy world"
                        fill
                    />
                    <div className="homepage-hero-wrapper">
                        <div className="left-col">
                            <div className="hero-gradient"></div>
                            <div className="hero__text">
                                <h1><span className="container"><span id="word" className="rotating-word">Stream.</span></span><br />Your Way.</h1>
                                <p className="main-text">Arcadia is your home base for everything otaku. Where fans come together to celebrate what they love and find something new.</p>
                                <div className="hero__button-container">
                                    <Link href='/platform'>
                                        <Button variant="contained" color="primary">
                                            Enter Arcadia
                                        </Button>
                                    </Link>
                                    <Button variant="text" color="primary" href="#primary-apps">
                                        Explore the Apps
                                    </Button>
                                </div>
                            </div>
                            <div className="partners">
                                <img className="partner" src="/website/partners/pony-canyon.svg" alt="Pony Canyon" />
                                <img className="partner" src="/website/partners/pcpartpicker.png" alt="PcPartPicker" />
                                <img className="partner" src="/website/partners/myanimelist.svg" alt="MyAnimeList" />
                                <img className="partner" src="/website/partners/jc-staff.png" alt="JC Stafff" />
                                <img className="partner" src="/website/partners/funimation.svg" alt="Funimation" />
                                <img className="partner" src="/website/partners/mangadex.png" alt="Mangadex" />
                            </div>
                        </div>
                        <div className="right-col">
                            <div className="hero-gradient"></div>
                            <Image 
                                id="hero-blurb"
                                className="responsive-image" 
                                width={525} 
                                height={413} 
                                src="/website/images/homepage/hero/hero-blurb.svg" 
                                alt="Purple shapes" 
                            />
                            <Image 
                                id="furina"
                                className="responsive-image"
                                width={500} 
                                height={900} 
                                src="/website/images/homepage/hero/furina.png" 
                                alt="Furina de Fontaine"
                            />
                        </div>
                    </div>
                </section>

                <div id="gradient-one">

                    <section id="bento-overview" className="section">
                        <div className="section__wrapper">
                            <div className="group one">
                                <Tooltip title="Check out the repo!" arrow placement="top">
                                    <a className="github shadow-box" href="https://github.com/Nepgyah/Arcadia" target="_blank">
                                        <div>
                                            <GitHubIcon />
                                        </div>
                                    </a>
                                </Tooltip>
                                <div className="apps primary shadow-box">
                                    <img src="/global/app-icons/miru.svg" alt="Miru icon" />
                                    <img src="/global/app-icons/yomu.svg" alt="Yomu icon" />
                                    <img src="/global/app-icons/asobu.svg" alt="Asobu icon" />
                                    <img src="/global/app-icons/kau.svg" alt="Kau icon" />
                                    <img src="/global/app-icons/tsunagu.svg" alt="Tsunagu icon" />
                                </div>
                                <div className="girl desktop-only">
                                    <img src="/website/images/homepage/hero/anime-girl-one.png" alt="" />
                                </div>
                                <div className="users shadow-box">
                                    <p className="count">1,364</p>
                                    <p className="user">ユーザー</p>
                                </div>
                                <div className="girl desktop-only">
                                    <img src="/website/images/homepage/hero/anime-girl-two.png" alt="" />
                                </div>
                                <div className="slogan shadow-box">
                                    Your Otaku Sanctuary
                                </div>
                            </div>
                            <div className="stats desktop-only shadow-box">
                                <div>
                                    <p>2,102</p>
                                    <p>アニメ</p>
                                </div>
                                <div>
                                    <p>1,956</p>
                                    <p>漫画</p>
                                </div>
                                <div>
                                    <p>1,367</p>
                                    <p>ゲ-ム</p>
                                </div>
                                <div id="one-platform">
                                    1 Platform
                                </div>
                            </div>
                            <div className="group two">
                                <div className="anime-peace shadow-box">
                                    <img src="/website/images/homepage/hero/kongou.png" alt="Kongou from Kantai Collection" />
                                </div>
                                <div className="logo">
                                    <img src="/global/logo/logo-solo-icon.png" alt="Arcadia simple logo" />
                                </div>
                                <div className="icon">
                                    <img className="animation__rotate" src="/website/images/homepage/hero/flower.png" alt="Sakura petal" />
                                </div>
                                <div className="apps secondary shadow-box">
                                    <img src="/global/app-icons/iku.svg" alt="Iku icon" />
                                    <img src="/global/app-icons/hiku.svg" alt="Hiku icon" />
                                    <img src="/global/app-icons/kiku.svg" alt="Kiku icon" />
                                    <img src="/global/app-icons/shiru.svg" alt="Shiru icon" />
                                    <img src="/global/app-icons/kumitateru.svg" alt="Kumitateru icon" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="features" className="section">
                        <div id="feature-image" className="desktop-only">
                            <div className="offset-frame"></div>
                            <Image
                                className="responsive-image"
                                width={298} 
                                height={550} 
                                src="/website/images/homepage/features/anime-girl-on-phone.png" 
                                alt="Anime girl on her phone" 
                            />
                        </div>
                        <div className="section__wrapper">
                            <div id="features-text">
                                <div className="section-main section-main--white">
                                    <p className="section-main__mini-title">The Arcadia Difference</p>
                                    <h2 className="section-main__main-title">Introducing Arcadia:<br />The Flagship of Fandom Tools</h2>
                                </div>
                                <div className="section-content section-content--four-col">
                                    <div className="feature">
                                        <h3>All-In-One</h3>
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
                                <FadeIn direction="up" delay={.1}>
                                    <div className="partner-logo">
                                        <img src="/website/partners/crunchyroll_white.svg" alt="Crunchyroll logo" />
                                    </div>
                                </FadeIn>
                                <FadeIn direction="up" delay={.15}>
                                    <div className="partner-logo">
                                        <img src="/website/partners/nexon_white.png" alt="Nexon games" />
                                    </div>
                                </FadeIn>
                                <FadeIn direction="up" delay={.2}>
                                    <div className="partner-logo">
                                        <img src="/website/partners/square-enix_white.svg" alt="Square Enix" />
                                    </div>
                                </FadeIn>
                                <FadeIn direction="up" delay={.25}>
                                    <div className="partner-logo">
                                        <img src="/website/partners/aniplex_white.svg" alt="Aniplex" />
                                    </div>
                                </FadeIn>
                                <FadeIn direction="up" delay={.3}>
                                    <div className="partner-logo">
                                        <img src="/website/partners/ryu-ga-gotoku_white.svg" alt="Ryu Ga Gotoku" />
                                    </div>
                                </FadeIn>
                                <FadeIn direction="up" delay={.35}>
                                    <div className="partner-logo">
                                        <img src="/website/partners/yostar_white.svg" alt="Yostar" />
                                    </div>
                                </FadeIn>
                                <FadeIn direction="up" delay={.4}>
                                    <div className="partner-logo">
                                        <img src="/website/partners/hoyoverse_white.png" alt="Hoyoverse" />
                                    </div>
                                </FadeIn>
                                <FadeIn direction="up" delay={.45}>
                                    <div className="partner-logo">
                                        <img src="/website/partners/kadokawa.png" alt="Kadokawa" />
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </section>

                    <section id="primary-apps" className="section">
                        <div className="section__wrapper">
                            <div id="primary-top-half">
                                <div className="section-main section-main--white">
                                    <p className="section-main__mini-title">Arcadia's Primary Apps</p>
                                    <h2 className="section-main__main-title">Essentials for the Ultimate Otaku</h2>
                                    <p className="section-main__description">Your all-in-one toolkit for tracking, streaming, gaming, and shopping. These flagship apps form the heart of your otaku experience.</p>
                                </div>
                                <FadeIn direction="left">
                                    <a href="apps/miru">
                                        <div className="app-tile app-tile--vertical slide-right" id="miru">
                                            <div className="app-tile__image">
                                                <Image fill src="/website/images/homepage/primary-apps/miru.jpg" alt="Anime girls watching togther" />
                                            </div>
                                            <div className="app-tile__text">
                                                <p className="japanese">みる</p>
                                                <h3 className="name">Miru</h3>
                                                <p className="slogan">Explore the world of anime, one episode at a time</p>
                                            </div>
                                        </div>
                                    </a>
                                </FadeIn>
                            </div>
                            <div id="primary-bottom-half">
                                <div id="bottom-left">
                                    <FadeIn direction="right" delay={.4}>
                                        <a href="apps/yomu">
                                            <div className="app-tile app-tile--vertical" id="yomu">
                                                <div className="app-tile__image">
                                                    <Image fill src="/website/images/homepage/primary-apps/yomu.jpg" alt="Smiling anime girl with book" />
                                                </div>
                                                <div className="app-tile__text">
                                                    <p className="japanese">よむ</p>
                                                    <h3 className="name">Yomu</h3>
                                                    <p className="slogan">Where words create worlds</p>
                                                </div>
                                            </div>
                                        </a>
                                    </FadeIn>
                                    <FadeIn direction="right" delay={.5} threshold={.5}>
                                        <a href="apps/kau">
                                            <div className="app-tile" id="kau">
                                                <div className="app-tile__image">
                                                    <Image fill src="/website/images/homepage/primary-apps/kau.jpg" alt="Blue asthetic shopping" />
                                                </div>
                                                <div className="app-tile__text">
                                                    <p className="japanese">かう</p>
                                                    <h3 className="name">Kau</h3>
                                                    <p className="slogan">From wish list to reality</p>
                                                </div>
                                            </div>
                                        </a>
                                    </FadeIn>
                                </div>
                                <div id="bottom-right">
                                    <FadeIn direction="left" delay={.4}>
                                        <a href="apps/asobu">
                                            <div className="app-tile" id="asobu">
                                                <div className="app-tile__image">
                                                    <Image fill src="/website/images/homepage/primary-apps/asobu.jpg" alt="Gaming friends" />
                                                </div>
                                                <div className="app-tile__text">
                                                    <p className="japanese">あそぶ</p>
                                                    <h3 className="name">Asobu</h3>
                                                    <p className="slogan">From wish list to reality</p>
                                                </div>
                                            </div>
                                        </a>
                                    </FadeIn>
                                    <FadeIn direction="left" delay={.5} threshold={.7}>
                                        <a href="apps/tsunagu">
                                            <div className="app-tile" id="tsunagu">
                                                <div className="app-tile__text">
                                                    <p className="japanese">つなぐ</p>
                                                    <h3 className="name">Tsunagu</h3>
                                                    <p className="slogan">Join the conversation, shape the fandom</p>
                                                </div>
                                                <div className="app-tile__image">
                                                    <Image fill src="/website/images/homepage/primary-apps/tsunagu.jpg" alt="Anime guys hanging out" />
                                                </div>
                                            </div>
                                        </a>
                                    </FadeIn>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div id="root-experience">
                    <img id="root-bg" src="/website/images/homepage/roots/sakura-branch.svg" alt="Sakura branch" />
                    
                    <section id="roots" className="section">
                        <div className="section__wrapper">
                            <div className="section-main">
                                <p className="section-main__mini-title">The Heart of Arcadia</p>
                                <h2 className="section-main__main-title">Rooted In Otaku Culture</h2>
                            </div>
                            <div className="section-content section-content--two-col">
                                <div className="image">
                                    <div className="bg-box desktop-only"></div>
                                    <Image height={500} width={500} className="responsive-image" src="/website/images/homepage/roots/game_developers.jpg" alt="D2X Platform Team"/>
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
                                    <Image 
                                        className="responsive-image" 
                                        width={332} 
                                        height={332} 
                                        src="/website/images/homepage/steps/bored-anime-girls.png" 
                                        alt="Bored anime girls" 
                                    />
                                    <div className="step__text">
                                        <h3>Create</h3>
                                        <p>Create your Arcadia account! An email, password and your passion is all you need.</p>
                                    </div>
                                </div>
                                <div className="step">
                                    <Image 
                                        className="responsive-image" 
                                        width={332} 
                                        height={332} 
                                        src="/website/images/homepage/steps/thinking-anime-girl.png" 
                                        alt="Studying and refining" 
                                    />
                                    <div className="step__text">
                                        <h3>Tune</h3>
                                        <p>Your account isn’t just some data vessel, customize it to make it your own!</p>
                                    </div>
                                </div>
                                <div className="step">
                                    <Image 
                                        className="responsive-image" 
                                        width={332} 
                                        height={332} 
                                        src="/website/images/homepage/steps/exploring-anime-girls.png" 
                                        alt="Looking at a map" 
                                    />
                                    <div className="step__text">
                                        <h3>Explore</h3>
                                        <p>Find the apps that suit your fandom, and dive into Arcadia adventures.</p>
                                    </div>
                                </div>
                                <div className="step">
                                    <Image 
                                        className="responsive-image" 
                                        width={332} 
                                        height={332} 
                                        src="/website/images/homepage/steps/delivering-anime-girl.png" 
                                        alt="Transfering goods" 
                                    />
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
                    <Image className="responsive-image" width={1861} height={1669} id="sakura-lake" src="/website/images/homepage/middle-cta/sakura-lake.svg" alt="Sakura fantasy world" />
                    
                    <section id="secondary-app" className="section">
                        <div className="section__wrapper">
                            <div className="section-main section-main--center">
                                <p className="sectin-main__mini-title">Beyond the Essentials</p>
                                <h2 className="section-main__main-title">The Arcadia Side Suite</h2>
                                <p>These supplementary apps are smaller in scope, but big on impact. From planning events to diving into niche blogs and lo-fi vibes, the Arcadia side suites adds extra flavor to your fandom journey, because even side quests matter.</p>
                            </div>
                            <div className="app-container">
                                <div className="left-col">
                                    <FadeIn direction="right" delay={.1}>
                                        <div className="app-tile" id="iku">
                                            <div className="app-tile__text">
                                                <p className="japanese">いく</p>
                                                <h3 className="name">Iku</h3>
                                                <p className="slogan">Go where the community goes</p>
                                            </div>
                                            <div className="app-tile__image">
                                                <Image fill src="/website/images/homepage/secondary-apps/iku.jpg" alt="Exploring the anime universe" />
                                            </div>
                                        </div>
                                    </FadeIn>
                                    <FadeIn direction="right" delay={.2} threshold={.7}>
                                        <div className="app-tile" id="hiku">
                                            <div className="app-tile__image">
                                                <Image fill src="/website/images/homepage/secondary-apps/hiku.jpg" alt="Gamer girl" />
                                            </div>
                                            <div className="app-tile__text">
                                                <p className="japanese">ひく</p>
                                                <h3 className="name">Hiku</h3>
                                                <p className="slogan">Pull Your Way To Victory</p>
                                            </div>
                                        </div>
                                    </FadeIn>
                                </div>
                                <div className="right-col">
                                    <FadeIn direction="left" delay={.3}>
                                        <div className="app-tile" id="shiru">
                                            <div className="app-tile__image">
                                                <Image fill src="/website/images/homepage/secondary-apps/shiru.jpg" alt="Hanging out at a dinner" />
                                            </div>
                                            <div className="app-tile__text">
                                                <p className="japanese">しる</p>
                                                <h3 className="name">Shiru</h3>
                                                <p className="slogan">Explore, Learn, Share the Journey</p>
                                            </div>
                                        </div>
                                    </FadeIn>
                                    <FadeIn direction="left" delay={.4}>
                                        <div className="app-tile" id="kumitateru">
                                            <div className="app-tile__image">
                                                <Image fill src="/website/images/homepage/secondary-apps/kumitateru.jpg" alt="Building a PC" />
                                            </div>
                                            <div className="app-tile__text">
                                                <p className="japanese">くみたてる</p>
                                                <h3 className="name">Kumitateru</h3>
                                                <p className="slogan">Build Your Battle Station</p>
                                            </div>
                                        </div>
                                    </FadeIn>
                                    <FadeIn direction="left" delay={.45}>
                                        <div className="app-tile" id="kiku">
                                            <div className="app-tile__text">
                                                <p className="japanese">きく</p>
                                                <h3 className="name">Kiku</h3>
                                                <p className="slogan">Relax.<br />Focus.<br /> Create.</p>
                                            </div>
                                            <div className="app-tile__image">
                                                <Image fill src="/website/images/homepage/secondary-apps/kiku.jpg" alt="Studying and listening to lofi" />
                                            </div>
                                        </div>
                                    </FadeIn>
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
                                    <Link href="/platform/auth/create">
                                        <Button variant="contained" color="primary">
                                            Join Now
                                        </Button>
                                    </Link>
                                    {/* <Button variant="text" color="primary">
                                        Got Questions?
                                    </Button> */}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="roadmap" className="section">
                        <div className="section__wrapper">
                            <div className="section-main blur-container">
                                <p className="section-main__mini-title">The Journey Ahead</p>
                                <h2 className="section-main__main-title">What's Next For Arcadia</h2>
                                <p>We’re just getting started with Project Arcadia! Here's a glimpse at what’s coming next.</p>
                            </div>
                            <div className="goals">
                                <FadeIn direction="up" delay={0}>
                                    <div className="goal">
                                        <h3>Launching the Core Platform</h3>
                                        <p>We're starting with the essentials: Arcadia's primary apps, account setup, personalization, and easy data import from other platforms.</p>
                                    </div>
                                </FadeIn>
                                <div className="icon desktop-only">
                                    <DoubleArrowIcon />
                                </div>
                                <FadeIn direction="up" delay={.2}>
                                <div className="goal">
                                    <h3>Expanding the Ecosystem</h3>
                                    <p>Next, we’ll roll out the full website, secondary apps, and new features that bring the community and platform to life.</p>
                                </div>
                                </FadeIn>
                                <div className="icon desktop-only">
                                    <DoubleArrowIcon />
                                </div>
                                <FadeIn direction="up" delay={.4}>
                                <div className="goal">
                                    <h3>Introducing the Anime Archetypes Quiz</h3>
                                    <p>To wrap it up: A fun, personalized quiz that matches you with an anime-inspired archetype.</p>
                                </div>
                                </FadeIn>
                            </div>
                        </div>
                    </section>
                </div>

                <section id="stories" className="section">
                    <img id="branch" className="section__bg-element desktop-only" src="/website/images/homepage/stories/blooming-branches.png" alt="Blooming branches" />
                    <img id="sand-mtn" className="section__bg-element desktop-only" src="/website/images/homepage/stories/sand-mountain.png" alt="Mountain" />
                    <img id="gate-mtn" className="section__bg-element" src="/website/images/homepage/stories/mountain-with-gate.png" alt="Mountain with a gate" />

                    <div className="section__wrapper">
                        <div className="section-main section-main--center blur-container">
                            <p className="section-main__mini-title">Otaku's Agree</p>
                            <h2 className="section-main__main-title">Arcadia Is a Must For Fanatics</h2>
                        </div>
                        <div className="section-content">
                            <FadeIn id="jamal" direction="right" delay={.1}>
                                <div className="card">
                                    <img className="card__image" src="/website/images/homepage/stories/jamal-williams.jpg" alt="Jamal Williams" />
                                    <div className="card__text">
                                        <p className="name">Jamal Williams</p>
                                        <p className="job">NFL Running Back</p>
                                        <p>Look, I don’t just like anime—I live it. If I’m not on the field, I’m grinding through One Piece, rewatching Naruto, or catching up on the latest heat. And Arcadia? Man, this is like the ultimate training ground for otaku. Everything you need—tracking, merch, community—all in one place? That’s straight-up elite!"</p>
                                        <p>"Most places just don’t get it. But Arcadia is built different—built by real fans, for real fans. Whether you’re arguing over the best anime arcs, supporting indie creators, or just looking for a crew that gets your passion, this is the spot. No fillers, just pure fire. Believe it!</p>
                                    </div>
                                </div>
                            </FadeIn>
                            <div className="col">
                                <FadeIn direction="down" delay={.1}>
                                    <div className="card">
                                        <img className="card__image" src="/website/images/homepage/stories/snoop.jpg" alt="Snoop Dog" />
                                        <div className="card__text">
                                            <p className="name">Snoop Dog</p>
                                            <p className="job">Rapper</p>
                                            <p>Man, Arcadia got that real anime energy. If you ain’t on Arcadia yet, you slippin’.</p>
                                        </div>
                                    </div>
                                </FadeIn>
                                <FadeIn direction="up" delay={.1}>
                                    <div className="card">
                                        <img className="card__image" src="/website/images/homepage/stories/keanu.webp" alt="Keanu Reaves" />
                                        <div className="card__text">
                                            <p className="name">Keanu Reaves</p>
                                            <p className="job">Actor</p>
                                            <p>I’ve been a fan of anime for years, and Arcadia feels like the ultimate place for fans. Whether you’re into classics or discovering new gems, this platform has something for everyone.</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>
                            <div className="col">
                                <FadeIn direction="left" delay={.1}>
                                    <div className="card">
                                        <img className="card__image" src="/website/images/homepage/stories/ariana.jpg" alt="Ariana Grande" />
                                        <div className="card__text">
                                            <p className="name">Ariana Grande</p>
                                            <p className="job">Singer</p>
                                            <p>I’ve been obsessed with anime forever, and Arcadia is like a dream come true for fans. Whether you’re binging old favorites or finding new series to fall in love with, it’s all here. </p>
                                        </div>
                                    </div>
                                </FadeIn>
                                <FadeIn direction="left" delay={.2}>
                                    <div className="card">
                                        <img className="card__image" src="/website/images/homepage/stories/fox.png" alt="DeAaron Fox" />
                                        <div className="card__text">
                                            <p className="name">DeAaron Fox</p>
                                            <p className="job">NBA Point Guard</p>
                                            <p>Just like in basketball, it’s all about having the right squad—Arcadia is that squad for anime fans.</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="d2x" className="section">
                    <p id="double" className="section__bg-element vertical-text desktop-only">DOUBLE</p>
                    <p id="dragon" className="section__bg-element vertical-text desktop-only">DRAGON</p>
                    <div className="section__wrapper">
                        <div className="section-content section-content--two-col">
                            <div className="section-main">
                                <p className="section-main__mini-title">Who We Are</p>
                                <h2 className="section-main__main-title">Born from Fandom,<br />Forged with Passion</h2>
                                <p>Team Double Dragon was forged upon passion: passion for Esports and passion for doing things the right way and for the right things.</p>
                                <p>What started with what-ifs and no technical skill, Arcadia began with two friends, countless fandom debates, and a dream to build the otaku platform we always wished existed. </p>
                            </div>
                            <div className="center-content">
                                <FadeIn direction="left" delay={.1}>
                                    <img src="/global/d2x.svg" alt="D2X Logo" />
                                </FadeIn>
                            </div>
                        </div>

                        <div id="jobs" className="section-content section-content--two-col">
                            <div className="girls desktop-only">
                                <FadeIn id="pointing-girl-1" direction="left">
                                    <img src="/website/images/homepage/d2x/pointing-girl-1.png" alt="Anime girl pointing" />
                                </FadeIn>
                                <FadeIn id="pointing-girl-2" direction="left">
                                    <img src="/website/images/homepage/d2x/pointing-girl-2.png" alt="Anime girl pointing" />
                                </FadeIn>
                            </div>
                            <div className="section-main">
                                <p className="section-main__mini-title">We're Hiring</p>
                                <h2 className="section-main__main-title">Become Legendary,<br />Like A Dragon</h2>
                                <p>Got passion? Drive? or just a fungi? We are hiring. Discover our openings and find out if you got a dragon in you!</p>
                                <Link href="/d2x/careers">
                                    <Button variant="contained" color="secondary">
                                        Careers
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="footer-cta">
                    <div className="section__full-wrapper">
                        <div className="img">
                            <Image
                                fill
                                src="/website/images/homepage/footer-cta/anime-girls.jpg" 
                                alt="Girls having a great time" 
                                loading="lazy"
                            />
                        </div>
                        <div className="text">
                            <h2>Ready to Enter Arcadia?</h2>
                            <p>Join a platform built by fans, for fans. Watch, read, play and more.</p>
                            <Button variant="contained" color="secondary">
                                <Link href="/platform/auth/create">Create Your Free Account</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                <Script src="/website/js/homepage.js" />
            </div>
    )
}