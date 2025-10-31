'use client';

import { Box, Button, Tab } from "@mui/material";
import '@/styles/pages/_homepage.scss'
import Script from "next/script";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useEffect, useState } from "react";
import FadeIn from "@/components/fadeIn";
import ArcFeature from "@/components/feature";
import HomepageCaseStudy from "@/components/homepage/caseStudy";

const platformURL = process.env.NEXT_PLATFORM_URL;

export default function Home() {

  useEffect(() => {
    setCurrentCC(Math.floor(Math.random() * 3))
  }, [])

  const [currentCC, setCurrentCC] = useState<number>(0)
  const [secondaryAppValue, setSecondaryAppValue] = useState<string>('1');

  return (
    <div id="page-homepage">

      <section id="hero" className="hero">
        <img className="hero__bg-image" src="/pages/homepage/anime-world.png" alt="Anime world" />
        <div className="hero-gradient"></div>
        <div className="hero__wrapper">
          <div className="hero__layout hero__layout--two-col">
            <div>
              <div className="hero__main-text">
                <h1 className="xl"><span className="container bg-arc-accent"><span id="word" className="rotating-word clr-txt-light">Stream.</span></span><br />Your Way.</h1>
                <p>Arcadia is your home base for everything otaku. Where fans come together to celebrate what they love and find something new.</p>
                <div className="hero__cta-container">
                    <Button variant="contained" color="primary">
                        Enter Arcadia
                    </Button>
                    <Button variant="text" color="primary" href="#primary-apps">
                        Explore the Apps
                    </Button>
                </div>
                <div id="hero-feats" className="border-radius--md box-shadow bg-arc-secondary-dark p">
                  <ArcFeature 
                    icon="diamond"
                    header="All-In-One Solution"
                    description="Arcadia combines anime, manga, games and more."
                    color="arc-tertiary"
                  />
                  <ArcFeature 
                    icon="heart"
                    header="Passion Project"
                    description="Built for fans, by fans."
                    color="arc-tertiary"
                  />
                </div>
              </div>
            </div>
            <div id="featured-cc">
              {
                currentCC == 0 ?
                  <img src="/pages/homepage/furina.png" alt="" />
                : currentCC == 1 ?
                  <img src="/pages/homepage/robin.png" alt="" />
                :
                  <img src="/pages/homepage/kitasan-black.png" alt="" />
              }
            </div>
          </div>
        </div>
      </section>

      <section id="tagline" className="section bg-arc-secondary">
        <div className="section__wrapper">
          <div className="grid grid--2-col-uneven">
            <FadeIn direction="right">
              <img src="/pages/homepage/gacha-games-1.png" alt="Honkai Star Rail and CyGames" />
            </FadeIn>
            <div className="center-both clr-txt-light"><h2>Your Otaku</h2></div>
          </div>
          <div className="grid grid--2-col">
            <div className="center-both clr-txt-dark-emp"><h2>Sanctuary</h2></div>
            <FadeIn direction="left">
              <img src="/pages/homepage/blue-archive.png" alt="Abydos students from Blue Archive" />
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="features" className="section bg-arc-secondary">
        <img id="sakura-tree" className="desktop-only section__bg-element" src="/pages/homepage/sakura-tree.png" alt="Sakura Tree" />
        <img id="features-broken-circle" className="desktop-only section__bg-element" src="/bg-assets/broken-circle.svg" alt="Broken circle" />
        <div className="section__wrapper">
          <div className="section-main section-main--white">
            <p className="section-main__mini-title">Introducing Arcadia</p>
            <h2 className="section-main__title">Project Arcadia: <br />The Flagship <span className="clr-txt-dark-emp">Otaku Platform</span></h2>
          </div>
          <div className="grid grid--3-col clr-txt-light">
            <div className="flex-row flex-row--spacing-md">
              <ArcFeature 
                icon="star"
                header="Seamless Universe"
                description="Arcadia unites every corner of your fandom under a single login."
                color="arc-tertiary"
              />

              <ArcFeature 
                icon="people"
                header="Community Driven"
                description="Listening to the most important voice: yours."
                color="arc-tertiary"
              />      
            </div>

            <div className="flex-row flex-row--spacing-lg">
              <ArcFeature 
                icon="lock"
                header="Direct Connections"
                description="Unlock authentic experiences with official partnerships"
                color="arc-tertiary"
              />          
              <div className="center-horizontal">
                <img src="/logo/logo-image-only.png" alt="Arcadia Icon" />
              </div>
              <ArcFeature 
                icon="diamond"
                header="Modern Technologies"
                description="Built with modern frameworks to adapt to whatever comes next."
                color="arc-tertiary"
              />
            </div>

            <div className="flex-row flex-row--spacing-md flex-row--end">
              <ArcFeature 
                icon="growth"
                header="Always Improving"
                description="New features, QOL improvements and bug fixes with every patch."
                color="arc-tertiary"
              />
              <ArcFeature 
                icon="flag"
                header="Cross-Platform Freedom"
                description="Enjoy Arcadia anywhere. Your fandom doesn’t stop when you switch screens."
                color="arc-tertiary"
              />
            </div>

          </div>
        </div>
      </section>

      <div className="gradient-secondary-primary">
        <section id="collab" className="section">
          <div className="section__wrapper">
            <div className="grid grid--2-col">
              <div id="collab-container">
                <div className="company">
                  <img src="/partners/crunchyroll-white.svg" alt="Crunchyroll Logo" />
                </div>
                <div className="company">
                  <img src="/partners/nexon-white.png" alt="Nexon Games Logo" />
                </div>
                <div className="company">
                  <img src="/partners/from-soft.png" alt="From Software Logo" />
                </div>

                <div className="company">
                  <img src="/partners/square-enix-white.svg" alt="Square Enix Logo" />
                </div>
                <div className="company">
                  <img src="/partners/hoyoverse-white.png" alt="Hoyoverse Logo" />
                </div>
                <div className="company">
                  <img src="/partners/yostar-white.svg" alt="Yostar Logo" />
                </div>

                <div id="content-label">
                  <p className="clr-txt-light">Content Contributors</p>
                  <img src="/icons/pixel-arrow.png" alt="Pixelated Arrow" />
                </div>
                <div></div>
                <div id="platform-label">
                  <img src="/icons/pixel-arrow.png" alt="Pixelated Arrow" />
                  <p className="clr-txt-light">Platform Contributors</p>
                </div>

                <div className="company">
                  <img src="/partners/pony-canyon.svg" alt="Pony Canyon Logo" />
                </div>
                <div className="company">
                  <img src="/partners/jc-staff.png" alt="JC Staff Logo" />
                </div>
                <div className="company">
                  <img src="/partners/myanimelist.svg" alt="MyAnimeList Logo" />
                </div>

                <div className="company">
                  <img src="/partners/aniplex-white.svg" alt="Aniplex Logo" />
                </div>
                <div className="company">
                  <img src="/partners/ryu-ga-gotoku_white.svg" alt="Ryu Ga Gotoku Studio Logo" />
                </div>
                <div className="company">
                  <img src="/partners/a1-pictures.png" alt="A1 Logo" />
                </div>
              </div>
              <div className="center-both">
                <div className="section-main section-main--white">
                  <p className="section-main__mini-title">Partners of Arcadia</p>
                  <h2 className="section-main__title">Industry Leaders <span className="clr-txt-dark-emp">Collab</span> With Arcadia</h2>
                  <p>Anime Studios, Game Developers, and more collaborate with Arcadia to build something special</p>
                  <p><b>Names used here are purely for Arcadia/D2X world building. These companies do not sponsor or endorse Arcadia.</b></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="primary-apps" className="section">
          <div className="section__wrapper">
            <div id="main-miru">
              <div className="section-main">
                <div className="section-main section-main--white">
                    <p className="section-main__mini-title">Primary Apps</p>
                    <h2 className="section-main__title">Essentials for the <br /><span className="clr-txt-dark-emp">Ultimate</span> Otaku</h2>
                    <p>Your all-in-one toolkit for tracking, streaming, gaming, and shopping. These flagship apps form the heart of your ultimate otaku experience.</p>
                    <a href="https://arcadia-inky.vercel.app" target="_blank">
                      <Button variant="contained">Try Out Now</Button>
                    </a>
                  </div>
              </div>
              <FadeIn direction="left">
                <div id="miru-tile" className="app-tile bg-miru-base animation__hover-grow">
                  <h3 className="app-tile__name">Miru - みる [見る]</h3>
                  <p className="app-tile__slogan">Explore the world of anime, One episode at a time</p>

                  <div className="app-tile__bg-circle bg-miru-dark"></div>
                  <img className="app-tile__mascots" src="/pages/homepage/miru-app-mascots.png" alt="" />
                </div>  
              </FadeIn>
            </div>

            <div id="other-primary">
              <div>
                <FadeIn direction="right" delay={.4}>
                  <div id="yomu-tile" className="app-tile bg-yomu-base animation__hover-grow">
                    <h3 className="app-tile__name">Yomu - よる [読む]</h3>
                    <p className="app-tile__slogan">Read, Track and Discover One Page At a Time</p>

                    <div className="app-tile__bg-circle bg-yomu-dark"></div>
                    <img className="app-tile__mascots" src="/pages/homepage/yomu-mascots.png" alt="" />
                  </div>
                </FadeIn>
                <FadeIn direction="right" delay={.5} threshold={.5}>
                  <div id="kau-tile" className="app-tile bg-kau-base clr-txt-light animation__hover-grow">
                    <h3 className="app-tile__name">Kau - かう [買う]</h3>
                    <p className="app-tile__slogan">Cosplay, Streetwear, and Otaku Goods</p>

                    <div className="app-tile__bg-circle bg-kau-dark"></div>
                    <img className="app-tile__mascots" src="/pages/homepage/kau-mascots.png" alt="" />
                  </div>
                </FadeIn>
              </div>

              <div>
                <FadeIn direction="left" delay={.4}>
                  <div id="asobu-tile" className="app-tile bg-asobu-base clr-txt-light animation__hover-grow">
                    <h3 className="app-tile__name">Asobu - あそぶ [遊ぶ]</h3>
                    <p className="app-tile__slogan">Gaming Adventures Begin Here</p>

                    <div className="app-tile__bg-circle bg-asobu-dark"></div>
                    <img className="app-tile__mascots" src="/pages/homepage/asobu-mascots.png" alt="" />
                  </div>
                </FadeIn>
                <FadeIn direction="left" delay={.5} threshold={.7}>
                  <div id="tsunagu-tile" className="app-tile bg-tsunagu-base animation__hover-grow">
                    <h3 className="app-tile__name">Tsunagu - つなぐ [繋ぐ]</h3>
                    <p className="app-tile__slogan">Arcadia’s Social Network</p>

                    <div className="app-tile__bg-circle bg-tsunagu-dark"></div>
                    <img className="app-tile__mascots" src="/pages/homepage/tsunagu-mascots.png" alt="" />
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

      </div>

      <section id="celebs" className="section">
        <div className="section__wrapper">
          <div className="section-main section-main--center">
            <p className="section-main__mini-title">Fans Agree</p>
            <h2>Arcadia Is A Must For Fanatics</h2>
          </div>

          <div id="review-container" className="grid grid--3-col">
            <FadeIn direction="right">
              <ReviewCard 
                image="/pages/homepage/testimony/aoba.jpg"
                statement="Arcadia allowed me to find my dream games from my favorite company. When I heard they were partnering up, I couldnt let the opporitunity slip. Thank you Team Arcadia!"
                name="Aoba"
                role="Desinger"
              />
            </FadeIn>
            <FadeIn direction="down">
              <ReviewCard 
                image="/pages/homepage/testimony/lebron.jpg"
                statement="LeArcadia is signature, just like my taco tuesdays. I’ve used Tsunagu and Shiru to finally understand what Bronny meant by “Diamond on Siege”."
                name="LeBron"
                role="LeGoat"
              />
            </FadeIn>
            <FadeIn direction="left">
              <ReviewCard 
                image="/pages/homepage/testimony/keanu.png"
                statement="I’ve been a fan of anime for years, and Arcadia feels like the ultimate place for fans. Their app Asobu makes modding games a breeze."
                name="Keanu"
                role="Actor"
              />
            </FadeIn>
            <FadeIn direction="right">
              <ReviewCard 
                image="/pages/homepage/testimony/ariana.png"
                statement="I’ve been obsessed with anime forever, and Arcadia is like a dream come true. I can watch my favorites and connect with passionate fans."
                name="Ariana"
                role="Actor"
              />
            </FadeIn>
            <FadeIn direction="up">
              <ReviewCard 
                image="/pages/homepage/testimony/dearron.png"
                statement="Just like in basketball, it’s all about having the right squad and Arcadia is that squad for anime fans and more."
                name="DeAaron"
                role="NBA Player"
              />
            </FadeIn>
            <FadeIn direction="left">
              <ReviewCard 
                image="/pages/homepage/testimony/jamal.png"
                statement="This is like the ultimate training ground for otakus. Everything you need: tracking, merch, community. All in one place."
                name="Jamal"
                role="NFL Player"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="gradient-secondary-primary">
        <section id="secondary" className="section">
          <div className="section__wrapper">
            <div className="section-main section-main--shorten section-main--white">
              <p className="section-main__mini-title">Beyond The Essentials</p>
              <h2 className="section-main__title">Arcadia's Secondary App</h2>
              <p>These supplementary apps are smaller in scope, but big on impact. From planning events to diving into niche blogs and lo-fi vibes, the Arcadia side suites adds extra flavor to your fandom journey.</p>
            </div>

            <div>
              <TabContext value={secondaryAppValue}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={(e, value) => setSecondaryAppValue(value)} aria-label="Secondary Apps Tab">
                    <Tab label="Entertainment" value="1" className="clr-txt-light"/>
                    <Tab label="Utility" value="2" className="clr-txt-light"/>
                    <Tab label="Knowledge" value="3" className="clr-txt-light"/>
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <div className="grid grid--2-col">
                    <div id="kiku-tile" className="app-tile bg-kiku-base animation__hover-grow">
                      <h3 className="app-tile__name">Kiku - きく [聞く]</h3>
                      <p className="app-tile__slogan">A Soundtrack For Every Fan</p>

                      <div className="app-tile__bg-circle bg-kiku-dark"></div>
                      <img className="app-tile__mascots" src="/pages/homepage/kiku-mascots.png" alt="" />
                    </div>

                    <div id="todokeru-tile" className="app-tile bg-todokeru-base clr-txt-light animation__hover-grow">
                      <h3 className="app-tile__name">Todokeru - とどける [届ける]</h3>
                      <p className="app-tile__slogan">From Pixels, To People</p>

                      <div className="app-tile__bg-circle bg-todokeru-dark"></div>
                      <img className="app-tile__mascots" src="/pages/homepage/todokeru-mascots.png" alt="" />
                    </div>

                    <div id="hiku-tile" className="app-tile bg-hiku-base animation__hover-grow">
                      <h3 className="app-tile__name">Hiku - ひく [引く]</h3>
                      <p className="app-tile__slogan">Guide. Gather. Game</p>

                      <div className="app-tile__bg-circle bg-hiku-dark"></div>
                      <img className="app-tile__mascots" src="/pages/homepage/hiku-mascots.png" alt="" />
                    </div>
                    
                    <div id="sagasu-tile" className="app-tile bg-sagasu-base clr-txt-light animation__hover-grow">
                      <h3 className="app-tile__name">Sagasu - さがす [探す]</h3>
                      <p className="app-tile__slogan">Test Your Fandom Knowledge</p>

                      <div className="app-tile__bg-circle bg-sagasu-dark"></div>
                      <img className="app-tile__mascots" src="/pages/homepage/sagasu-mascots.png" alt="" />
                    </div>
                  </div>
                </TabPanel>

                <TabPanel value="2">
                  <div className="grid grid--2-col">
                    <div id="kumitateru-tile" className="app-tile bg-kumitateru-base clr-txt-light animation__hover-grow">
                      <h3 className="app-tile__name">Kumitateru - <br />くみたてる [組み立てる]</h3>
                      <p className="app-tile__slogan">Build Your Battle Station</p>

                      <div className="app-tile__bg-circle bg-kumitateru-dark"></div>
                      <img className="app-tile__mascots" src="/pages/homepage/kumitateru-mascots.png" alt="" />
                    </div>

                    <div id="iku-tile" className="app-tile bg-iku-base clr-txt-light animation__hover-grow">
                      <h3 className="app-tile__name">Iku - いく [行く]</h3>
                      <p className="app-tile__slogan">Make Every Meetup A Adventure</p>

                      <div className="app-tile__bg-circle bg-iku-dark"></div>
                      <img className="app-tile__mascots" src="/pages/homepage/iku-mascots.png" alt="" />
                    </div>
                  </div>
                </TabPanel>

                <TabPanel value="3">
                  <div className="grid grid--2-col">
                    <div id="manabu-tile" className="app-tile bg-manabu-base clr-txt-light animation__hover-grow">
                      <h3 className="app-tile__name">Manabu - <br />まなぶ [学ぶ]</h3>
                      <p className="app-tile__slogan">Fluency Through Fandom</p>

                      <div className="app-tile__bg-circle bg-manabu-dark"></div>
                      <img className="app-tile__mascots" src="/pages/homepage/manabu-mascots.png" alt="" />
                    </div>

                    <div id="shiru-tile" className="app-tile bg-shiru-base animation__hover-grow">
                      <h3 className="app-tile__name">Shiru - しる [知る]</h3>
                      <p className="app-tile__slogan">Stories from the Otaku-verse</p>

                      <div className="app-tile__bg-circle bg-shiru-dark"></div>
                      <img className="app-tile__mascots" src="/pages/homepage/shiru-mascots.png" alt="" />
                    </div>
                  </div>
                </TabPanel>
              </TabContext>
            </div>
          </div>

        </section>

        <section id="content-creator" className="section">
          <div className="section__wrapper">
            <div className="grid grid--2-col">
              <div>
                <FadeIn direction="right">
                  <img src="/pages/homepage/robin-splash.png" alt="" />
                </FadeIn>
              </div>
              <div className="center-both">
                <FadeIn direction="left">
                  <div className="section-main section-main--white">
                    <p className="section-main__mini-title">Featured Content Creator</p>
                    <h2 className="section-main__title">The Virtuoso of Penacony Steps onto the <span className="clr-txt-dark-emp">Arcadian Stage</span></h2>
                    <p>Known for her breathtaking performances that inspire harmony across worlds, Robin now streams exclusive concerts and creative sessions on Todokeru, connecting with fans through the universal language of music.</p>
                    <p>Her arrival marks a new chapter in Arcadia’s creator ecosystem: where passion, art, and fandom intertwine to build something extraordinary.</p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        <section id="case-study" className="section">
          <div className="section__wrapper">
            <div className="section-main section-main--white">
              <p className="section-main__mini-title">Case Studies</p>
              <h2 className="section-main__title">Across Worlds, Arcadia Always <br /><span className="clr-txt-dark-emp">Makes An Impact</span></h2>
              <p>Arcadia’s rich app ecosystem allows it to contribute to different industries in different ways, big or small. See below or click to find out the details on how Arcadia left a mark on these clients.</p>
            </div>
            <HomepageCaseStudy />
          </div>
        </section>
      </div>

      <section id="middle-cta" className="section gradient-tertiary">
        <img id="anime-lines" className="section__bg-element" src="/pages/homepage/lines.png" alt="Action anime lines" />
        <FadeIn id="pointing-girl-1" className="desktop-only section__bg-element" direction="right">
          <img src="/pages/homepage/pointing-girl-1.png" alt="Pointing anime girl" />
        </FadeIn>
        <FadeIn id="pointing-girl-2" className="desktop-only section__bg-element" direction="right" delay={.4}>
          <img src="/pages/homepage/pointing-girl-2.png" alt="Pointing anime girl" />
        </FadeIn>
        <div className="section__wrapper">
          <div className="grid grid--2-col">
            <div></div>
            <div className="center-both">
              <div className="section-main section-main--shorten">
                <p className="section-main__mini-title">Join Arcadia</p>
                <h2 className="section-main__title">Your Otaku World Awaits</h2>
                <p>Stop Browsing. Start Belonging. Step into your otaku sanctuary today.</p>
                <Button variant="contained">
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tech" className="section">
        <img id="tech-pink-lines-1" className="desktop-only section__bg-element" src="/bg-assets/pink-lines-1.svg" alt="" />
        <img id="tech-pink-lines-2" className="desktop-only section__bg-element" src="/bg-assets/pink-lines-2.svg" alt="" />
        <img id="tech-pink-ribbon" className="desktop-only section__bg-element" src="/bg-assets/pink-ribbon.png" alt="" />
        <div className="section__wrapper">
          <div className="grid grid--2-col">
            <div className="section-main">
              <p className="section-main__mini-title">App Ecosystem</p>
              <h2 className="section-main__title">Modern Technologies Define Arcadia</h2>
              <p>Arcadia is being built with the most famous and trusted technologies on the market. The result: a robust, scalable and modern platform that hosts the best Otaku ecosystem there is.</p>
              <a href="https://github.com/Nepgyah/Arcadia" target="_blank">
                <Button variant="contained">Explore The Repo</Button>
              </a>
            </div>
            <div id="stack">
              <div className="stack-icon center-both">
                <img src="/pages/homepage/stack/next.png" alt="Next Js" />
              </div>
              <div className="stack-icon center-both">
                <img src="/pages/homepage/stack/mui.png" alt="MUI" />
              </div>
              <div className="stack-icon center-both">
                <img src="/pages/homepage/stack/redux.png" alt="Redux" />
              </div>
              <div className="stack-icon center-both">
                <img src="/pages/homepage/stack/python.png" alt="Python" />
              </div>
              <div className="stack-icon center-both">
                <img src="/pages/homepage/stack/django.png" alt="Django" />
              </div>
              <div className="stack-icon center-both">
                <img src="/pages/homepage/stack/postgres.png" alt="Postgres" />
              </div>
            </div>
          </div>

          <div id="tech-features">
            <div className="grid grid--4-col">
              <div className="desktop-only"></div>
              <FadeIn direction="down">
                <ArcFeature 
                  icon="curve"
                  header="Distinct Division"
                  description="Arcadia is split into major subfolders, making debugging, and deployment straightforward with isolation."
                  color="arc-tertiary"
                />
              </FadeIn>
              <div className="desktop-only"></div>
              <FadeIn direction="down" delay={.3}>
                <ArcFeature 
                  icon="code"
                  header="API-First Architecture"
                  description="A Django Rest Framework allows ease of API development and opens the pathway for both mobile and desktop development."
                  color="arc-tertiary"
                />
              </FadeIn>
            </div>

            <div className="grid grid--4-col">
              <FadeIn direction="up">
                <ArcFeature 
                  icon="share"
                  header="Seamless Deployment"
                  description="Use of vercel and Koyeb creates a scalable and simple deployment of all Arcadia branches."
                  color="arc-tertiary"
                />
              </FadeIn>
              <div className="desktop-only"></div>
              <FadeIn direction="up" delay={.4}>
                <ArcFeature 
                  icon="shine"
                  header="Unified Stylings"
                  description="With MUI and best SCSS practices, Arcadia’s design is consistent and visually functional."
                  color="arc-tertiary"
                />
              </FadeIn>
              <div ></div>
            </div>
          </div>

          <div id="roadmap">
            <div id="roadmap-main" className="grid grid--2-col">
              <div>
                <FadeIn direction="right" delay={.5}>
                  <img src="/pages/homepage/umalandsaga.png" alt="" />
                </FadeIn>
              </div>
              <div id="roadmap-text">
                  <div className="section-main">
                  <p className="section-main__mini-title">The Journey Ahead</p>
                  <h2 className="section-main__title">Arcadia's Next Steps</h2>
                  <p>We’re just getting started. From new features to fan-powered expansions, Arcadia’s evolving. Here's a glimpse at what’s coming next.</p>
                </div>
              </div>
            </div>
            <div id="goals">
              <div className="box-shadow border-radius--md">
                <h3>Full Website</h3>
                <p>Once completed, the Arcadia website will hold all you need to know about the ultimate otaku platform and what we(d2x) are all about.</p>
              </div>
              <div className="box-shadow border-radius--md">
                <h3>Primary Apps</h3>
                <p>We plan to finalize the primary apps first. They serve as the foundation of why Arcadia was created.</p>
              </div>
              <div className="box-shadow border-radius--md">
                <h3>Application Bound</h3>
                <p>Arcadia won't just be a web platform. We plan to bring you the power of it as a desktop and mobile app.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="d2x" className="section gradient-d2x">
        <div className="section__wrapper">
          <div className="grid grid--2-col">
            <div className="section-main">
              <p className="section-main__mini-title">Who We Are</p>
              <h2 className="section-main__title">Born From Fandom, Forged With Passion</h2>
              <p>Team Double Dragon was forged upon passion: passion for Esports and passion for doing things the right way and for the right things. </p>
              <p>What started with what-ifs and no technical skill, Arcadia began with two friends, countless fandom debates, and a dream to build the otaku platform we always wished existed. </p>
            </div>
            <div className="center-both">
              <FadeIn direction="left">
                <div id="d2x-logo">
                  <img src="/logo/d2x.svg" alt="Team Double Dragon" />
                </div>
              </FadeIn>
            </div>
          </div>
          
          <div className="grid grid--2-col">
            <div id="d2x-stats" className="grid grid--2-col">
              <div className="bg-arc-secondary clr-txt-light">
                <h3>50+</h3>
                <p>Team Members</p>
              </div>
              <div className="bg-arc-secondary clr-txt-light">
                <h3>2016</h3>
                <p>Founded</p>
              </div>
            </div>
            <div id="d2x-leaders" className="grid grid--3-col">
              <FadeIn direction="up">
              <img src="/pages/homepage/d2x/himeko.png" alt="Himeko Murata" />
              </FadeIn>
              <FadeIn direction="up" delay={.3}>
                <img src="/pages/homepage/d2x/anime-me.png" alt="Anime me" />
              </FadeIn>
              <FadeIn direction="up" delay={.4}> 
                <img src="/pages/homepage/d2x/anime-tommy.png" alt="Anime tommy" />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      <Script src="/js/homepage.js" />
    </div>
  );
}

function ReviewCard(
  { image, statement, name, role } :
  {
    image: string,
    statement: string,
    name: string,
    role: string
  }
) {
  return (
    <div className="review-card">
      <img className="review-card__image" src={image} alt={name} />
      <div>
        <div className="review-card__statement">
          <p>{statement}</p>
        </div>
        <div className="review-card__person">
          <p>{name}</p>
          <p>{role}</p>
        </div>
      </div>
    </div>
  )
}