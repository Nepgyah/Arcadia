import Image, { StaticImageData } from "next/image";
import { useState } from "react"
import HaloGames from '../../../public/pages/homepage/case-study/halo-games.png';
import AstralExpress from '../../../public/pages/homepage/case-study/astral-express.webp';
import EagleJump from '../../../public/pages/homepage/case-study/eagle-jump.jpg';
import BTR from '../../../public/pages/homepage/case-study/btr.jpeg';

import SchaleLogo from '../../../public/pages/homepage/case-study/schale-logo.png';
import AstralLogo from '../../../public/pages/homepage/case-study/astral-logo.png';
import EagleJumpLogo from '../../../public/pages/homepage/case-study/eagle-jump-logo.png';
import KessokuBandLogo from '../../../public/pages/homepage/case-study/kessoku-band-logo.png';

import ArcFeature from "../feature";

export default function HomepageCaseStudy(){
    const [currentStudy, setCurrentStudy] = useState<string>('halo-games')

    const handleStudyChange = (id : string) => {
        if (id === currentStudy) return;

        var currentCard = document.getElementById(currentStudy)
        var targetCard = document.getElementById(id)
        if (currentCard) {
            currentCard.style.opacity = '0%'
            currentCard.style.transform = 'translateY(10px)'
        }

        setTimeout(() => {
            setCurrentStudy(id)
            var targetCard = document.getElementById(id);
        }, 250)
        setTimeout(() => {

            if (targetCard) {
                targetCard.style.opacity = '100%'
                targetCard.style.transform = 'translateY(0px)'
            }
        }, 500)

    }
    return (
        <div id="case-study-content">
            <div id="case-study-cards">
                <CaseStudyCard 
                    currentCase={currentStudy}
                    id="halo-games"
                    title="Making a Halo Games to Never Forget"
                    imageLink={HaloGames}
                    statOneValue="57%"
                    statOneText="Increase in social media participation during the games"
                    statTwoValue="20,000"
                    statTwoText="New visitors during the Halo game weekend"
                    quote="The 2024 Kivoto’s Halo Games was the most successful in all of Kivotos’ History. Our students were given a platform to share happiness and friendship with the whole city and incoming vistors."
                    source="Hayase Yuuka, Event Coordinator"
                />
                <CaseStudyCard 
                    currentCase={currentStudy}
                    id="astral-express"
                    title="A Ninja Finds Her Stage Among the Stars"
                    imageLink={AstralExpress}
                    statOneValue="1.2 Million"
                    statOneText="Peak live concurrent viewers during Ninjastar Live"
                    statTwoValue="1st Place"
                    statTwoText="Placement in the Paperfold concert clash"
                    quote="Arcadia gave me the stage of a lifetime! One moment I was rehearsing in the cargo bay, the next I was performing for an entire galaxy! Guess you could say... this ninja finally hit her target audience!"
                    source="Rappa, Give Her a New Rerun plz"
                />
                <CaseStudyCard 
                    currentCase={currentStudy}
                    id="eagle-jump"
                    title="Making the Leap in the Game Industry"
                    imageLink={EagleJump}
                    statOneValue="96%"
                    statOneText="Positive game review"
                    statTwoValue="320k"
                    statTwoText="Average daily player count"
                    quote="Releasing through Arcadia felt like inviting the players right into our office. Seeing live feedback, fan art, and reactions from day one reminded us why we make games in the first place."
                    source="Kou Yagami, Lead Designer (Eagle Jump x D2X)"
                />
                <CaseStudyCard 
                    currentCase={currentStudy}
                    id="starry"
                    title="Putting the Stars on Stage"
                    imageLink={BTR}
                    statOneValue="230%"
                    statOneText="Increase in monthly listeners"
                    statTwoValue="335,641"
                    statTwoText="Increase in Bocchi's YT sub count"
                    quote="It’s wild! We started getting messages from fans overseas, people covering our songs, even remixing them. It’s like Arcadia turned our little Shimo-Kita scene into a global stage."
                    source="Kita Iku, Vocals for Kessoku Bando"
                />
            </div>
            <div id="case-study-nav">
                <div onClick={() => handleStudyChange('halo-games')} className={`${currentStudy === 'halo-games' && 'selected'}`}>
                    <Image src={SchaleLogo} alt="" />
                </div>
                <div onClick={() => handleStudyChange('astral-express')} className={`${currentStudy === 'astral-express' && 'selected'}`}>
                    <Image src={AstralLogo} alt="" />
                </div>
                <div onClick={() => handleStudyChange('eagle-jump')} className={`${currentStudy === 'eagle-jump' && 'selected'}`}>
                    <Image src={EagleJumpLogo} alt="" />
                </div>
                <div onClick={() => handleStudyChange('starry')} className={`${currentStudy === 'starry' && 'selected'}`}>
                    <Image src={KessokuBandLogo} alt="" />
                </div>
            </div>
        </div>
    )
}

function CaseStudyCard(
    {
        currentCase, id, title, imageLink, statOneValue, statOneText, statTwoValue, statTwoText, quote, source
    } : {
        currentCase: string,
        id: string,
        title: string,
        imageLink: StaticImageData,
        statOneValue: string,
        statOneText: string,
        statTwoValue: string,
        statTwoText: string,
        quote: string,
        source: string,
    }
) {
    return (
        <div id={id} className={`cs-card ${currentCase === id ? 'show' : 'hide'}`}>
            <h3 className="cs-card__title">{title}</h3>
            <div>
                <div className="cs-card__image border-radius--md box-shadow">
                    <Image src={imageLink} alt=""/>
                </div>
                <div className="cs-card__text">
                    <div className="cs-card__features">
                        <ArcFeature 
                            icon="people"
                            header={statOneValue}
                            description={statOneText}
                        />
                        <ArcFeature 
                            icon="people"
                            header={statTwoValue}
                            description={statTwoText}
                        />
                    </div>
                    <p className="cs-card__quote">"{quote}"</p>
                    <p className="cs-card__source">- {source}</p>
                </div>
            </div>
        </div>
    )
}