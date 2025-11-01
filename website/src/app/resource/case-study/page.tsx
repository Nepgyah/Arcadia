import { Card, CardContent, CardMedia } from "@mui/material"

import '@/styles/pages/resource/_case-study.scss';
import FadeIn from "@/components/fadeIn";

export default function CaseStudy() {

    return (
        <div id="page-resource-case-study">

            <section id="feature-case" className="hero">
                <div className="hero__wrapper">
                    <div className="grid grid--2-col-uneven-reverse">
                        <div>
                            <img className="animation__floating border-radius--md box-shadow" src="/pages/resource/case-study/luofu.png" alt="" />
                        </div>
                        <div className="center-vertical">
                            <div className="hero__main-text">
                                <p className="txt-sm">Premier Case Study</p>
                                <h1 className="txt-lg">Restoring Luofu’s Historical Market to its Former Glory</h1>
                                <p className="txt-md">With Aurum Alley on the brink of collapse, the challenge was to revitalize its economy. Partnering with the Sky-Faring Commission, we provided an online platform through Arcadia Kau. By empowering merchants with digital storefronts, we helped transform a declining market into a thriving center of commerce.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="other-studies" className="section">
                <div className="section__wrapper">
                    <div className="section-main section-main--center">
                        <p className="section-main__mini-title">Other Success Stories</p>
                        <h2 className="section-main__title">Covering all Industries with Arcadia</h2>
                    </div>
                    <div id="cases-container" className="grid grid--4-col">
                        <FadeIn direction="up" delay={.2}>
                            <CaseStudyCard
                                title="Promoting A Festive Opportunity at Penacony’s Top College "
                                image="penacony.png"
                                altImage="Penacony's successful music festival"
                            />
                        </FadeIn>
                        <FadeIn direction="up" delay={.2}>
                            <CaseStudyCard
                                title="Helping Eagle Jump Make the Leap in the Gaming Industry"
                                image="eagle-jump.png"
                                altImage="Developer team at eagle jump"
                            />
                        </FadeIn>
                        <FadeIn direction="up" delay={.2}>
                            <CaseStudyCard
                                title="Echoing Hope Through the Galaxy with the Feathers of Hope"
                                image="robin.png"
                                altImage="Penacony's idol: Robin"
                            />
                        </FadeIn>
                        <FadeIn direction="up" delay={.2}>
                            <CaseStudyCard
                                title="Empowering Idols aboard the Elmo"
                                image="yoohee.jpg"
                                altImage="Elmo's partner Idol: Yoohee"
                            />
                        </FadeIn>
                        <FadeIn direction="up" delay={.2}>
                            <CaseStudyCard
                                title="Collaboration to Promote the Rises of Young Mangakas"
                                image="comic-girls.png"
                                altImage="D2X Mangaka partners"
                            />
                        </FadeIn>
                        <FadeIn direction="up" delay={.2}>
                            <CaseStudyCard
                                title="Partnering with Luofu’s Most Famous Street Performer"
                                image="guinafen.png"
                                altImage="Guinafen streaming"
                            />
                        </FadeIn>
                        <FadeIn direction="up" delay={.2}>
                            <CaseStudyCard
                                title="Assisting Kivotos’ in their Most Historical Yearly Event"
                                image="kivotos.png"
                                altImage="Kivotos' halo games"
                            />
                        </FadeIn>
                        <FadeIn direction="up" delay={.2}>
                            <CaseStudyCard
                                title="Lending a Hand at the Zucchero Cafe"
                                image="zucchero-cafe.webp"
                                altImage="The zucchero cafe branch on the Elmo"
                            />
                        </FadeIn>
                    </div>
                </div>
            </section>
        </div>
    )
}

function CaseStudyCard(
    {
        title,
        image,
        altImage
    } : {
        title: string,
        image: string,
        altImage: string
    }
) {
    return (
        <Card>
            <CardMedia 
                image={`/pages/resource/case-study/${image}`}
                title={altImage}
            />
            <CardContent className="clr-txt-light">
                <h3 className="txt-lg">{title}</h3>
            </CardContent>
        </Card>
    )
}