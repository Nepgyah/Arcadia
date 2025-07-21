'use client';

import FadeIn from "@/components/public/fadeIn";
import "@/styles/public/pages/d2x/about.scss";
import { useEffect, useRef } from "react";

export default function AboutD2X() {

    const skyContainer = useRef<HTMLDivElement>(null)
    const cloudOne = useRef<HTMLImageElement>(null);
    const cloudTwo = useRef<HTMLImageElement>(null);
    const cloudThree = useRef<HTMLImageElement>(null);
    const cloudFour = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (skyContainer.current 
            && cloudOne.current 
            && cloudTwo.current
            && cloudThree.current
            && cloudFour.current ) {
            MoveCloud(cloudOne.current, skyContainer.current)
            MoveCloud(cloudTwo.current, skyContainer.current)
            MoveCloud(cloudThree.current, skyContainer.current)
            MoveCloud(cloudFour.current, skyContainer.current)
        }
    }, [])

    const MoveCloud = (cloud: HTMLImageElement, container: HTMLDivElement) => {
         let posX = -cloud.offsetWidth;
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;

        // Initial random Y and speed
        let speed = Math.random() * 1.5 + 0.5; // 0.5 to 2
        let y = Math.random() * (containerHeight / 2);

        cloud.style.top = `${y}px`;

        const animate = () => {
            posX += speed;

            if (posX > containerWidth) {
                posX = -cloud.offsetWidth;
                speed = Math.random() * 1.5 + 0.5;
                y = Math.random() * (containerHeight / 2);
                cloud.style.top = `${y}px`;
            }

            cloud.style.transform = `translateX(${posX}px)`

            requestAnimationFrame(animate)
        }

        animate()
    }

    return (
        <div ref={skyContainer} id="page-d2x-about">
            <img id="group-left" src="/website/images/d2x/about/left-group.svg" alt="" />
            <img id="group-right" src="/website/images/d2x/about/right-tower.svg" alt="" />
            <img id="mountain" src="/website/images/d2x/about/mountain.svg" alt="" />
            <img ref={cloudOne} id="cloud-1" className="clouds" src="/website/images/d2x/about/bg/cloud-1.svg" alt="" />
            <img ref={cloudTwo} id="cloud-2" className="clouds" src="/website/images/d2x/about/bg/cloud-2.svg" alt="" />
            <img ref={cloudThree} id="cloud-3" className="clouds" src="/website/images/d2x/about/bg/cloud-3.svg" alt="" />
            <img ref={cloudFour} id="cloud-4" className="clouds" src="/website/images/d2x/about/bg/cloud-4.svg" alt="" />
            <div id="scroller">
                <section id="hero" className="hero">
                    <div className="hero__wrapper">
                        <div className="hero__text hero__text--center">
                            <h1>Creators of Arcadia,<br />Team Double Dragon</h1>
                            <p>Team Double Dragon is a squad of creators, coders, and chaos gamers building a platform for anime, manga, games, and all things otaku. Explore what makes D2X special.</p>
                        </div>
                    </div>
                </section>

                <section id="about" className="section">
                    <div className="blur-container">
                        <div className="section__wrapper">
                            <div className="section-main">
                                <p className="section-main__mini-title">Our Company</p>
                                <h2 className="section-main__main-title">This Is D2X</h2>
                            </div>
                            <div>
                                <h3>What We Do:</h3>
                                <p>At Team Double Dragon, we love what we do. Born from a shared passion for anime, gaming, and creativity, our mission is simple: to build solutions and celebrates fandoms and connects fans across the world.</p>
                            </div>
                            <div>
                                <h3>Why We Do It:</h3>
                                <p>At Team Double Dragon, we love what we do. Born from a shared passion for anime, gaming, and creativity, our mission is simple: to build solutions and celebrates fandoms and connects fans across the world.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="spirit" className="section">
                    <div className="section__wrapper">
                        <div className="section-content">
                            <div className="blur-container one">
                                <h3>Built By Fans, For Fans</h3>
                                <p>Every decision we make, every feature we build, is made with the fans of gaming, and otaku culture in mind.</p>
                            </div>
                            <img className="two" src="/website/images/d2x/about/spirit/donut-girls.jpg" alt="" />
                            <div className="blur-container three">
                                <h3>Stay True, Stay Weird</h3>
                                <p>Arcadia has <i>something</i> for <i>someone</i>. We embrace what makes us (and you) different. The fandom thrives when we celebrate the niche and the nerdy.</p>
                            </div>
                            <img className="four" src="/website/images/d2x/about/spirit/game-office.jpg" alt="" />
                            <div className="five"><h2>The Spirit of Team Double Dragon</h2></div>
                            <img className="six" src="/website/images/d2x/about/spirit/product-team.webp" alt="" />
                            <div className="blur-container seven">
                                <h3>Community Is Everything</h3>
                                <p>Fandoms thrive because of the people in them, and we believe D2X should be the same, building a space for fans to connect, create, and share what they love.</p>
                            </div>
                            <img className="eight" src="/website/images/d2x/about/spirit/marketing-team.webp" alt="" />
                            <div className="blur-container nine">
                                <h3>Play Without Limits</h3>
                                <p>We don’t believe in creative ceilings. Whether it’s building bold new features or embracing the absurd, we chase ideas with childlike curiosity and pro-level execution. Arcadia is our playground and everyone’s invited.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="quote-one" className="section">
                    <div className="section__wrapper">
                        <div className="quote quote--white">
                            <div className="text">
                                <p className="text__mini-title">Message from Leadership</p>
                                <h2 className="text__main-title">Motivated by Passion,<br />The D2X Way</h2>
                                <div className="text__main">
                                    <p>"Every great journey begins with a single step, but it’s the passion behind that step that turns it into something greater. At D2X, we’re not just building a platform—we’re paving the way for an otaku community that thrives together.</p>
                                    <p>Just as the Astral Express serves as a vessel for exploration, we’re here to be a guide for our users, offering a space for discovery, connection, and growth. We’re not just a company; we’re part of something much bigger, something that will continue to shape the future of anime and gaming culture for years to come."</p>
                                </div>
                            </div>
                            <div className="profile">
                                <img className="animation animation__floating" src="/website/images/d2x/about/quotes/himeko.webp" alt="" />
                                <div>
                                    <p className="name">Himeko Murata</p>
                                    <p className="position">Co-Founder of D2X</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="awards" className="section">
                    <div className="section__wrapper">
                        <div className="section-main section-main--center">
                            <p className="section-main__mini-title">Awards</p>
                            <h2 className="section-main__main-title">Making Strides In The Otaku Community</h2>
                        </div>
                        <div className="section-content section-content--flex">
                            <FadeIn direction="up" delay={.1}>
                                <div className="award blur-container">
                                    <img src="/website/images/d2x/about/awards/pixel-pulse.svg" alt="Pixel Pulse Award" />
                                    <p>Pixel Pulse Achievement</p>
                                    <p>Awarded for outstanding innovation in interactive entertainment and digital experiences that pulse with creativity and technical excellence.</p>
                                </div>
                            </FadeIn>
                            <FadeIn direction="up" delay={.15}>
                                <div className="award blur-container">
                                    <img src="/website/images/d2x/about/awards/kizuna.svg" alt="Kizuna Community Impact Award" />
                                    <p>Kizuna Community Impact</p>
                                    <p>Given to initiatives that strengthen bonds ("kizuna") within fan communities, fostering inclusivity, collaboration, and meaningful engagement.</p>
                                </div>
                            </FadeIn>
                            <FadeIn direction="up" delay={.2}>
                                <div className="award blur-container">
                                    <img src="/website/images/d2x/about/awards/beyond-borders.svg" alt="Beyond Borders Award" />
                                    <p>Beyond Borders Media Recognition</p>
                                    <p>Honors projects that transcend cultural and linguistic boundaries to connect global audiences through shared storytelling and visual media.</p>
                                </div>
                            </FadeIn>
                            <FadeIn direction="up" delay={.25}>
                                <div className="award blur-container">
                                    <img src="/website/images/d2x/about/awards/golden-sakura.svg" alt="Golden Sakura Innovation Award" />
                                    <p>Golden Sakura Innovation</p>
                                    <p>Celebrates forward-thinking ideas that blossom at the intersection of technology and otaku culture, honoring projects that push creative boundaries.</p>
                                </div>
                            </FadeIn>
                            <FadeIn direction="up" delay={.3}>
                                <div className="award blur-container">
                                    <img src="/website/images/d2x/about/awards/constellation.svg" alt="Constellation Rising Stars Award" />
                                    <p>Constellation Rising Stars</p>
                                    <p>Recognizes emerging teams and creators in the anime, gaming, and media space whose work shines with promise and passion.</p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                <section id="quote-two" className="section">
                    <div className="section__wrapper">
                        <div className="quote quote--white">
                            <div className="profile">
                                <img className="animation animation__floating" src="/website/images/d2x/about/quotes/guinaifen.webp" alt="" />
                                <div>
                                    <p className="name">Guinafen</p>
                                    <p className="position">Content Creator & Community Entertainer</p>
                                </div>
                            </div>
                            <div className="text">
                                <p className="text__mini-title">Message From Our CC</p>
                                <h2 className="text__main-title">Bringing the Hype, One Stream at a Time!</h2>
                                <div className="text__main">
                                    <p>"At D2X, I get to do what I love: entertain, connect, and bring the hype to the fans who live and breathe anime, games, and manga. Every time I stream or create content, I’m not just sharing my passion; I’m building something bigger. Our community is everything to us! It’s about those moments of excitement, that sense of belonging, and that spark of joy we bring to fans worldwide.</p>
                                    <p>If I can make someone’s day even 1% more fun, whether through a funny moment or an epic stream, then hey, that’s a win in my book! And knowing that we’re all part of something like D2X, where every otaku feels at home, makes it all the more worth it."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="collab" className="section">
                    <div className="section__wrapper">
                        <div className="section-content section-content--two-col">
                            <div className="collaborators">
                                <img src="/website/partners/myanimelist.svg" alt="MyAnimeList logo" />
                                <img src="/website/partners/pcpartpicker.png" alt="Pc Partpicker logo" />
                                <img src="/website/partners/gog.png" alt="GOG logo" />
                                <img src="/website/partners/mangadex.png" alt="Mangadex logo" />
                            </div>
                            <div className="center-content">
                                <div className="section-main blur-container">
                                    <p className="section-main__mini-title">Building Together</p>
                                    <h2 className="section-main__main-title">Power-Ups Through Partnerships</h2>
                                    <p>At Team Double Dragon (D2X), we believe that great things are never built alone. Arcadia exists today not just because of our vision, but because of the incredible partnerships we've forged along the way. With their help, we’ve been able to create a platform that truly serves the anime, manga, and gaming communities.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}