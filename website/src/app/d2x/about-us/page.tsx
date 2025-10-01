'use client';

import FadeIn from '@/components/fadeIn';
import Quote from '@/components/quote';
import '@/styles/pages/d2x/_about-us.scss';

import { useEffect, useRef } from "react";

export default function AboutUs() {

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

            <img id="group-left" src="/pages/d2x/about/left-group.svg" alt="" />
            <img id="group-right" src="/pages/d2x/about/right-tower.svg" alt="" />
            <img id="mountain" src="/pages/d2x/about/mountain.svg" alt="" />
            <img ref={cloudOne} id="cloud-1" className="clouds" src="/pages/d2x/about/bg/cloud-1.svg" alt="" />
            <img ref={cloudTwo} id="cloud-2" className="clouds" src="/pages/d2x/about/bg/cloud-2.svg" alt="" />
            <img ref={cloudThree} id="cloud-3" className="clouds" src="/pages/d2x/about/bg/cloud-3.svg" alt="" />
            <img ref={cloudFour} id="cloud-4" className="clouds" src="/pages/d2x/about/bg/cloud-4.svg" alt="" />

            <div id="scroller">
                <section id="hero" className="hero">
                    <div className="hero__wrapper">
                        <div className="hero__main-text hero__main-text--center">
                            <h1>Creators of Arcadia,<br />Team Double Dragon</h1>
                            <p>Team Double Dragon is a squad of creators, coders, and chaos gamers building a platform for anime, manga, games, and all things otaku. Explore what makes D2X special.</p>
                        </div>
                    </div>
                </section>

                <section id="spirit" className="section">
                    <div className="section__wrapper">
                        <div className="grid grid--3-col">
                            <div className="blur-container one center-both border-radius--sm">
                                <h3 className='clr-arc-tertiary-dark'>Built By Fans, For Fans</h3>
                                <p>Every decision we make, every feature we build, is made with the fans of gaming, and otaku culture in mind.</p>
                            </div>
                            <img className="two border-radius--md box-shadow" src="/pages/d2x/about/spirit/donut-girls.jpg" alt="" />
                            <div className="blur-container three center-both border-radius--sm">
                                <h3 className='clr-arc-tertiary-dark'>Stay True, Stay Weird</h3>
                                <p>Arcadia has <i>something</i> for <i>someone</i>. We embrace what makes us (and you) different. The fandom thrives when we celebrate the niche and the nerdy.</p>
                            </div>
                            <img className="four border-radius--md box-shadow" src="/pages/d2x/about/spirit/game-office.jpg" alt="" />
                            <div className="five center-both border-radius--sm"><h2>The Spirit of Team Double Dragon</h2></div>
                            <img className="six border-radius--md box-shadow" src="/pages/d2x/about/spirit/product-team.webp" alt="" />
                            <div className="blur-container seven center-both border-radius--sm">
                                <h3 className='clr-arc-tertiary-dark'>Community Is Everything</h3>
                                <p>Fandoms thrive because of the people in them, and we believe D2X should be the same, building a space for fans to connect, create, and share what they love.</p>
                            </div>
                            <img className="eight border-radius--md box-shadow" src="/pages/d2x/about/spirit/marketing-team.webp" alt="" />
                            <div className="blur-container nine center-both border-radius--sm">
                                <h3 className='clr-arc-tertiary-dark'>Play Without Limits</h3>
                                <p>We don’t believe in creative ceilings. Whether it’s building bold new features or embracing the absurd, we chase ideas with childlike curiosity and pro-level execution. Arcadia is our playground and everyone’s invited.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id='quote-one' className='section'>
                    <div className='section__wrapper'>
                        <Quote
                            className="border-radius--md box-shadow clr-txt-light"
                            miniTitle='Message From Leaderships'
                            header='Motivated by Passion, The D2X Way'
                            quoteOne='"Every great journey begins with a single step, but it’s the passion behind that step that turns it into something greater. At D2X, we’re not just building a platform—we’re paving the way for an otaku community that thrives together.'
                            quoteTwo='Just as the Astral Express serves as a vessel for exploration, we’re here to be a guide for our users, offering a space for discovery, connection, and growth. We’re not just a company; we’re part of something much bigger, something that will continue to shape the future of anime and gaming culture for years to come."'
                            name='Himkeo Murata'
                            role='Co-Founder'
                            imageLink='/pages/d2x/about/quotes/himeko.webp'
                            imageFirst={false}
                        />
                    </div>
                </section>

                <section id="awards" className="section">
                    <div className="section__wrapper">
                        <div className="section-main section-main--center">
                            <p className="section-main__mini-title">Awards</p>
                            <h2 className="section-main__main-title">Making Strides In The Otaku Community</h2>
                        </div>
                        <div className="section-content">
                            <div className='grid grid--5-col'>
                                <FadeIn direction="up" delay={.1}>
                                    <div className="award blur-container border-arc-primary border-radius--md box-shadow">
                                        <img src="/pages/d2x/about/awards/pixel-pulse.svg" alt="Pixel Pulse Award" />
                                        <p className='award__name'>Pixel Pulse Achievement</p>
                                        <p className='award__description'>Awarded for outstanding innovation in interactive entertainment and digital experiences that pulse with creativity and technical excellence.</p>
                                    </div>
                                </FadeIn>
                                <FadeIn direction="up" delay={.15}>
                                    <div className="award blur-container border-arc-primary border-radius--md box-shadow">
                                        <img src="/pages/d2x/about/awards/kizuna.svg" alt="Kizuna Community Impact Award" />
                                        <p className='award__name'>Kizuna Community Impact</p>
                                        <p className='award__description'>Given to initiatives that strengthen bonds ("kizuna") within fan communities, fostering inclusivity, collaboration, and meaningful engagement.</p>
                                    </div>
                                </FadeIn>
                                <FadeIn direction="up" delay={.2}>
                                    <div className="award blur-container border-arc-primary border-radius--md box-shadow">
                                        <img src="/pages/d2x/about/awards/beyond-borders.svg" alt="Beyond Borders Award" />
                                        <p className='award__name'>Beyond Borders Media Recognition</p>
                                        <p className='award__description'>Honors projects that transcend cultural and linguistic boundaries to connect global audiences through shared storytelling and visual media.</p>
                                    </div>
                                </FadeIn>
                                <FadeIn direction="up" delay={.25}>
                                    <div className="award blur-container border-arc-primary border-radius--md box-shadow">
                                        <img src="/pages/d2x/about/awards/golden-sakura.svg" alt="Golden Sakura Innovation Award" />
                                        <p className='award__name'>Golden Sakura Innovation</p>
                                        <p className='award__description'>Celebrates forward-thinking ideas that blossom at the intersection of technology and otaku culture, honoring projects that push creative boundaries.</p>
                                    </div>
                                </FadeIn>
                                <FadeIn direction="up" delay={.3}>
                                    <div className="award blur-container border-arc-primary border-radius--md box-shadow">
                                        <img src="/pages/d2x/about/awards/constellation.svg" alt="Constellation Rising Stars Award" />
                                        <p className='award__name'>Constellation Rising Stars</p>
                                        <p className='award__description'>Recognizes emerging teams and creators in the anime, gaming, and media space whose work shines with promise and passion.</p>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </section>

                <section id='quote-two' className='section'>
                    <div className='section__wrapper'>
                        <Quote
                            className="border-radius--md box-shadow clr-txt-light"
                            miniTitle='Message From Our CC'
                            header='Bringing the Hype, One Stream at a Time!'
                            quoteOne='"At D2X, I get to do what I love: entertain, connect, and bring the hype to the fans who live and breathe anime, games, and manga. Every time I stream or create content, I’m not just sharing my passion; I’m building something bigger. Our community is everything to us! It’s about those moments of excitement, that sense of belonging, and that spark of joy we bring to fans worldwide.'
                            quoteTwo='If I can make someone’s day even 1% more fun, whether through a funny moment or an epic stream, then hey, that’s a win in my book! And knowing that we’re all part of something like D2X, where every otaku feels at home, makes it all the more worth it."'
                            name='Guinafen'
                            role='Content Creator & Community Entertainer'
                            imageLink='/pages/d2x/about/quotes/guinaifen.webp'
                            imageFirst={true}
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}