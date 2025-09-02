import "@/styles/public/pages/d2x/esports.scss";
export default function PageEsports() {
    return (
        <div id="page-d2x-esports">

            <section id="hero" className="hero">
                <div id="hero-bg-left" className="hero__bg-element"></div>
                <div id="hero-bg-right" className="hero__bg-element desktop-only">
                    <div id="hero-vert" className="image-mask"></div>
                    <div id="hero-hor" className="image-mask"></div>
                    <img src="/website/images/d2x/esports/esports-moments.png" alt="D2X Best Moments" />
                </div>
                <div className="hero__wrapper hero__wrapper--two-column">
                    <div className="center-vertically">
                        <div className="hero__text hero__text--white">
                            <h1>Built To Burn Bright</h1>
                            <p className="main-text">D2X Esports is where competition meets passion. We strive to push the limits of gaming and stay true to what we love.</p>
                        </div>
                    </div>
                    <div></div>
                </div>
            </section>

            <section id="achievements" className="section">
                <div className="section__wrapper">
                    <div className="section-content section-content--two-col">
                        <div className="align-content alight-content--center-vertical">
                            <div className="section-main section-main--white">
                                <p className="section-main__mini-title">Trophies</p>
                                <h2 className="section-main__main-title">A Dragon's Greatest Achievement</h2>
                                <p>As one of the up and coming esports franchises, D2X has already made its mark in the gaming world. Numerous championships across numerous games, team Double Dragon continues to rise amongst the gaming giants to achieve our goal: Esports immortality.</p>
                            </div>
                        </div>
                        <div id="tournaments">
                            <Banner 
                                game="Dota 2"
                                tournament="The International"
                                years="2011, 2012, 2016, 2024"
                                trophyImageLink="/website/images/d2x/esports/aegis-of-champions.png"
                            />
                            <Banner 
                                game="League Of Legends"
                                tournament="Worlds Championship"
                                years="2014, 2018, 2025"
                                trophyImageLink="/website/images/d2x/esports/lol-worlds.png"
                            />
                            <Banner 
                                game="Dota 2"
                                tournament="Esports World Cup"
                                years="2025"
                                trophyImageLink="/website/images/d2x/esports/esports-world-cup.png"
                            />
                            <Banner 
                                game="CSGO / CS2"
                                tournament="Intel Extreme Masters"
                                years="2013, 2014, 2015, 2017, 2018, 2019"
                                trophyImageLink="/website/images/d2x/esports/iem.png"
                            />
                            <Banner 
                                game="Rocket League"
                                tournament="RLCS"
                                years="2016, 2017, 2021"
                                trophyImageLink="/website/images/d2x/esports/rocket-league.png"
                            />
                            <Banner 
                                game="Hearthstone"
                                tournament="HS World Championships"
                                years="2016, 2017, 2019"
                                trophyImageLink="/website/images/d2x/esports/hearthstone.png"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

function Banner(
    {
        game,
        tournament,
        years,
        trophyImageLink,
    } : {
        game: string,
        tournament: string,
        years: string,
        trophyImageLink: string
    }
) {
    return (
        <div className="banner-container">
            <div className="banner">
                <div className="trophy">
                    <img src={trophyImageLink} alt={`${tournament}`} />
                </div>
                <div className="text-container">
                    <div>
                        <p className="game">{game}</p>
                        <p className="tournament">{tournament}</p>
                    </div>
                    <p className="years">{years}</p>
                </div>
            </div>
        </div>
    )
}