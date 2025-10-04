import FadeIn from '@/components/fadeIn';
import ArcFeature from '@/components/feature';
import ArcStat from '@/components/stat';
import '@/styles/pages/d2x/_careers.scss';

export default function Careers() {

    return (
        <div id="page-d2x-careers">

            <div className='gradient-secondary-primary'>
                <section id="hero" className="hero">
                    <div className="hero__wrapper">
                        <div className="grid grid--2-col">
                            <div className="center-vertical">
                                <div className="hero__main-text hero__main-text--shorten clr-txt-light">
                                    <h1>Forge Your Career With <span className='clr-arc-tertiary'>Team Double Dragon</span></h1>
                                    <p>Discover and learn about the company dedicated to creating the ultimate Otaku platform and what it means to work with us!</p>
                                </div>
                            </div>
                            <div id="hero-image">
                                <div className="row-1">
                                    <img src="/pages/d2x/careers/foreclosure-club.jpg" alt="Task forecloser club" />
                                    <img src="/pages/d2x/careers/gehenna.webp" alt="Gehenna prefec" />
                                </div>
                                <div className="row-2">
                                    <img src="/pages/d2x/careers/hifumi.webp" alt="Hifumi Ajitani" />
                                    <img src="/pages/d2x/careers/gourmet.jpg" alt="Gourmet society" />
                                </div>
                                <div className="row-3">
                                    <img src="/pages/d2x/careers/track.webp" alt="Halo festival" />
                                    <img src="/pages/d2x/careers/utaha.webp" alt="Utaha" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id='introduction' className='section'>
                    <div className='section__wrapper'>
                        <div className='grid grid--2-col'>
                            <FadeIn direction="right" className="image">
                                <img src="/pages/d2x/careers/d2x-selfies.png" alt="" />
                            </FadeIn>
                            <FadeIn direction="left" className="center-vertical">
                                <div className='section-main section-main--white'>
                                        <p className="section-main__mini-title">Why Join Us</p>
                                    <h2 className="section-main__title">Turn Your <span>Passion Into Purpose</span></h2>
                                    <p>Whether you’re into anime, games, music, or tech, this is your chance to channel that love into meaningful work. Join a team that supports growth and believes that passion is the strongest foundation for innovation.</p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>
            </div>

            <section id='life' className='section'>
                <div className='section__wrapper'>
                    <div className='grid grid--3-col'>
                        <FadeIn direction="right" className="center-vertical image">
                            <img src="/pages/d2x/careers/d2x-happy-times.png" alt="Happy times at d2x" />
                        </FadeIn>
                        <div>
                            <div className='section-main'>
                                <p className='section-main__mini-title'>Life At D2X</p>
                                <h2 className='section-main__title'>Trailblaze While Enjoying The Journey</h2>
                                <p>We focus on building a space where fandom, creativity and technology can come together. Flexible and chill where it counts, but serious when it comes to quality and impact. </p>
                                <p>No template or molds to fill at D2X. Come as you are. Grow how you want. Let’s make something unforgettable.</p>
                            </div>
                        </div>
                        <div id='stats'>
                            <ArcStat value={50} duration={2.5} addPlus label='Team Members' />
                            <ArcStat value={8} duration={2} delay={.3} label='Office Locations' />
                            <ArcStat value={10} duration={1.5} delay={.4} addPlus label='Ongoing Projects' />
                        </div>
                    </div>
                    <div className='grid grid--3-col'>
                        <ArcFeature 
                            icon='league'
                            header='Cross Department ARAM Tourneys'
                            description='Jumble up the variables and see who is the Faker of D2X. Once a month, we have ARAM tournaments with all our summoners to find out which depertment is supreme!'
                        />
                        <ArcFeature 
                            icon='karaoke'
                            header='Karaoke Nights'
                            description='Conjure up your best Kiryu Kazuma, sing the latest idol jam or request a city pop classic. These are the moments to unwind or let it all out.'
                        />
                        <ArcFeature 
                            icon='mario-kart'
                            header='Obligatory Mario Kart Tournament'
                            description='Everyone says they are the best at Mario Kart, but we host tournaments from time to time to truly findout who can actually stay on rainbow road.'
                        />
                    </div>
                </div>
            </section>
            
            <section id='benefits' className='section'>
                <div className='section__wrapper'>
                    <div className='section-main'>
                        <p className='section-main__mini-title'>Fueling Passion</p>
                        <h2 className='section-main__title'>Discover Your D2X Buffs</h2>
                        <p className='mobile-only'>Whether you stay with us for your whole career or take depart on a new journey after one year, our goal is the same: to make your time at D2X a meaningful chapter. A chapter that leaves a mark of skill growth, treasured memories and unforgettable connections.</p>
                    </div>

                    <div className='grid grid--2-col-uneven-reverse'>
                        <div id='benefits-left-col'>
                            <img className='desktop-only' src="/bg-assets/abstract-cloud.png" alt="Abstract Cloud" />
                            <p className='desktop-only'>Whether you stay with us for your whole career or take depart on a new journey after one year, our goal is the same: to make your time at D2X a meaningful chapter. A chapter that leaves a mark of skill growth, treasured memories and unforgettable connections.</p>
                        </div>
                        <div className='buffs'>
                            <div className='buffs__image'>
                                <img src="/pages/d2x/careers/groza.png" alt="Groza from Girls Frontline 2" />
                            </div>
                            <div className='buffs__text center-vertical flex-row flex-row--spacing-sm'>
                                <h3>Flexible Hours</h3>
                                <p>Work on what schedule fits your life outside D2X. We value your time offline when the day is done.</p>
                            </div>
                            <div className='buffs__image'>
                                <img src="/pages/d2x/careers/qingque.png" alt="qingque from Honkai Star Rail" />
                            </div>
                            <div className='buffs__text flex-row flex-row--spacing-sm'>
                                <h3>Community Connections</h3>
                                <p>Whenever D2X is invited, you are too. Whether it be anime conventions or esports events, the trip is on the house!</p>
                            </div>
                            <div className='buffs__image'>
                                <img src="/pages/d2x/careers/rumi.png" alt="Rumi from Blue Archive" />
                            </div>
                            <div className='buffs__text flex-row flex-row--spacing-sm'>
                                <h3>Personal Growth</h3>
                                <p>We invest in courses and tools to help our team level up. D2X is here to mine all the diamonds in the rough.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}