import "@/styles/public/pages/d2x/careers.scss";
import { Button, Fade } from "@mui/material";
import Location from '@mui/icons-material/LocationPin';
import FadeIn from "@/components/public/fadeIn";

export default function D2XCareers() {

    return (
        <div id="page-d2x-careers">
            <div id="gradient-one">

                <section id="hero" className="hero">
                    <div className="hero__wrapper hero__wrapper--two-column">
                        <div className="center-vertically">
                            <div className="hero__text hero__text--white">
                                <h1>Level Up With D2X Opporitunities</h1>
                                <p className="main-text">Discover and learn about the company dedicated to creating the ultimate Otaku platform and what it means to work with us!</p>
                                <div className="hero__button-container">
                                    <Button variant="contained">See Positions</Button>
                                </div>
                            </div>
                        </div>

                        <div className="hero-images">
                            <div className="row-1">
                                <img src="/website/images/d2x/careers/hero/foreclosure-club.jpg" alt="Task forecloser club" />
                                <img src="/website/images/d2x/careers/hero/gehenna.webp" alt="Gehenna prefec" />
                            </div>
                            <div className="row-2">
                                <img src="/website/images/d2x/careers/hero/hifumi.webp" alt="Hifumi Ajitani" />
                                <img src="/website/images/d2x/careers/hero/gourmet.jpg" alt="Gourmet society" />
                            </div>
                            <div className="row-3">
                                <img src="/website/images/d2x/careers/hero/track.webp" alt="Halo festival" />
                                <img src="/website/images/d2x/careers/hero/utaha.webp" alt="Utaha" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="why" className="section">
                    <div className="section__wrapper">
                        <div className="section-content section-content--two-col">
                            <FadeIn direction="right" className="image">
                                <img src="/website/images/d2x/careers/d2x-selfies.png" alt="" />
                            </FadeIn>
                            <FadeIn direction="left" className="section-main section-main--white">
                                <p className="section-main__mini-title">Why Join Us</p>
                                <h2 className="section-main__main-title">Turn Your Passion Into Purpose</h2>
                                <p>Whether you’re into anime, games, music, or tech, this is your chance to channel that love into meaningful work. Join a team that supports growth and believes that passion is the strongest foundation for innovation.</p>
                            </FadeIn>
                        </div>
                    </div>
                </section>
            </div>

            <div id="ribbon-one">
                <img id="ribbon-one-image" src="/website/images/d2x/careers/pink-ribbon-one.png" alt="" />
                <section id="life" className="section">
                    <div className="section__wrapper">
                        <div className="section-content section-content--two-col">
                            <FadeIn direction="down">
                                <div className="section-main">
                                    <p className="section-main__mini-title">Life At D2X</p>
                                    <h2 className="section-main__main-title">Turn Your Passion Into Purpose</h2>
                                    <p>We focus on building a space where fandom, creativity and technology can come together. Flexible and chill where it counts, but serious when it comes to quality and impact. No template or molds to fill at D2X.
                                        <br /><br />Come as you are. Grow how you want. Let’s make something <b>unforgettable</b>.
                                    </p>
                                </div>
                                <div className="stats">
                                    <div>
                                        <p className="value">100+</p>
                                        <p className="label"><span className="underline">Employees</span></p>
                                    </div>
                                    <div>
                                        <p className="value">10</p>
                                        <p className="label"><span className="underline">Major Location</span></p>
                                    </div>
                                </div>
                            </FadeIn>
                            <FadeIn direction="down" className="image center-vertically">
                                <img src="/website/images/d2x/careers/d2x-happy-times.png" alt="" />
                            </FadeIn>
                        </div>
                    </div>
                </section>

                <section id="benefits" className="section">
                    <div className="section__wrapper">
                        <div className="section-main section-main--center">
                            <p className="section-main__mini-title">Because Passion Needs Fuel</p>
                            <h2 className="section-main__main-title">Discover Your D2X Buffs</h2>
                        </div>
                        <div className="section-content section-content--three-col">
                            <div className="buff">
                                <img src="/website/images/d2x/careers/groza.png" alt="" />
                                <div>
                                    <h3>Flexible Hours</h3>
                                    <p>Work on what schedule fits your life outside D2X. We care about quality over quantity and your time offline when the day is done.</p>
                                </div>
                            </div>
                            <div className="buff">
                                <img src="/website/images/d2x/careers/rumi.png" alt="" />
                                <div>
                                    <h3>Personal Growth Support</h3>
                                    <p>We invest in your learning, courses and tool to help you level up. There are diamonds in the rough everywhere, and D2X is here to mine them out.</p>
                                </div>
                            </div>
                            <div className="buff">
                                <img src="/website/images/d2x/careers/qingque.png" alt="" />
                                <div>
                                    <h3>Community Events</h3>
                                    <p>ARAM sessions to chaotic Mario Kart tournaments. Once a month, compete against your coworkers and prove your department is the best in D2X. Of course, we take a working day off to find out!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section id="locations" className="section section--no-padding">
                <div className="section__full-wrapper section__full-wrapper--four-square">
                    <div className="section-main section-main--white section-main--center">
                        <p className="section-main__mini-title">Global Reach</p>
                        <h2 className="section-main__main-title">The D2X Experience, All Across the Galaxy</h2>
                        <p>Whether your working at our main office in Kivotos, studying near the seaside at the Azur Lane port, or applying your knowledge at the Herta Space Station, there is always an opportunity for you at D2X.</p>
                    </div>
                    <div className="mask"></div>
                    <img src="/website/images/d2x/careers/locations/belebog.png" alt="Belebog" />
                    <img src="/website/images/d2x/careers/locations/luofu.png" alt="Luofu" />
                    <img src="/website/images/d2x/careers/locations/space-station.png" alt="Herta Space Station" />
                    <img src="/website/images/d2x/careers/locations/penacony.png" alt="Penacony" />
                </div>
            </section>
            
            <section id="positions" className="section">
                <img id="pink-ribbon-two" className="section__bg-element" src="/website/images/d2x/careers/pink-ribbon-two.png" alt="" />
                <div className="section__wrapper">
                    <div className="section-main section-main--half">
                        <p className="section-main__mini-title">Opporitunities</p>
                        <h2 className="section-main__main-title">Choose Your D2X Path</h2>
                        <p>Working at D2X means being part of a mission-driven team that’s dedicated to building amazing experiences for fans. Whether you’re a developer, designer, writer, or community manager, your skills and ideas will help shape the future of our platform.</p>
                    </div>
                    <div className="section-content section-content--two-col">
                        <FadeIn direction="right" className="position animation__hover-grow">
                            <div className="position__header">
                                <p>Lawyer </p>
                                <div>
                                    <p>Fontaine</p>
                                    <Location />
                                </div>
                            </div>
                            <p className="position__posted">5 days ago</p>
                            <p className="position__description">Support d2x’s expansion in Fontaine by handling contracts, intellectual property, and trade negotiations within the city’s high-tech legal landscape. You’ll ensure our innovations and partnerships stay compliant and protected, navigating both traditional statutes and cutting-edge tech regulations. Sharp legal skills and a strategic mind required to keep D2X ahead in the game.</p>
                        </FadeIn>
                        <FadeIn direction="left" className="position animation__hover-grow">
                            <div className="position__header">
                                <p>UI/UX Designer</p>
                                <div>
                                    <p>Eagle Jump</p>
                                    <Location />
                                </div>
                            </div>
                            <p className="position__posted">2 weeks ago</p>
                            <p className="position__description">Design menus, HUDs, and interfaces that feel as good as they look. Work closely with artists and devs to craft playful, intuitive user experiences that bring our anime-inspired games to life. Channel your inner Yagami and make screens that pop.</p>
                        </FadeIn>
                        <FadeIn direction="right" className="position animation__hover-grow">
                            <div className="position__header">
                                <p>Data Analyst</p>
                                <div>
                                    <p>Herta Space Station</p>
                                    <Location />
                                </div>
                            </div>
                            <p className="position__posted">2 ember eras ago</p>
                            <p className="position__description">Join the sharpest minds in the galaxy and help decode anomalies across the stars. You'll sift through massive datasets from expeditions, simulations, and Simulated Universe trials to uncover patterns, optimize research, and maybe impress Herta (unlikely, but dream big). Curiosity required. Sleep optional.</p>
                        </FadeIn>
                        <FadeIn direction="left" className="position animation__hover-grow">
                            <div className="position__header">
                                <p>Talent Manager</p>
                                <div>
                                    <p>Penacony</p>
                                    <Location />
                                </div>
                            </div>
                            <p className="position__posted">1 month ago</p>
                            <p className="position__description">Keep the show on track and the Stellaron Hunters off her schedule. As Robin’s manager, you’ll juggle concerts, press tours, fashion consults, and the occasional galactic emergency, all while making sure her mic is on and her tea is the right temperature. Grace under pressure required. Dramatic fans expected.</p>
                        </FadeIn>
                        <FadeIn direction="right" className="position animation__hover-grow">
                            <div className="position__header">
                                <p>Café Assistant</p>
                                <div>
                                    <p>Elmo</p>
                                    <Location />
                                </div>
                            </div>
                            <p className="position__posted">1 day ago</p>
                            <p className="position__description">Help Springfield keep the coffee flowing and Makiatto from rewiring the espresso machine (again). As our official liaison between d2x and the café, you'll juggle drink orders, light logistics, and the occasional firefight drill. Must love caffeine, chaos, and charming android coworkers.</p>
                        </FadeIn>
                        <FadeIn direction="left" className="position animation__hover-grow">
                            <div className="position__header">
                                <p>Café Assistant</p>
                                <div>
                                    <p>Kivotos</p>
                                    <Location />
                                </div>
                            </div>
                            <p className="position__posted">3 weeks ago</p>
                            <p className="position__description">Coordinate projects across academies, manage timelines that somehow involve literal rocket science, and keep your team focused even during surprise Neru raids. You'll be the glue holding it all together — assuming the room doesn't blow up first. Experience with teens, tech, and tactical ops preferred.</p>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </div>
    )
}