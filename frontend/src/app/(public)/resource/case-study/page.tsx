import FadeIn from "@/components/public/fadeIn";
import "@/styles/public/pages/resources/case-study.scss";

export default function PageCaseStudy() {
    return (
        <div id="page-resource-case-study" className="bg--pink-gradient">
            
            <section id="studies" className="section">
                <div className="section__wrapper">
                    <h1>Case Studies</h1>
                    <div className="section-content section-content--two-col">
                        <div>
                            <img 
                                className="arcadia-image animation__floating"
                                src="/website/images/resource/case-study/luofu.png" 
                                alt="Shushang on the Luofu" 
                            />
                        </div>
                        <div className="section-main">
                            <p className="section-main__mini-title">Premier Case Study</p>
                            <h2 className="section-main__main-title">Restoring Luofu’s Historical Market to its Former Glory</h2>
                            <p>With Aurum Alley on the brink of collapse, the challenge was to revitalize its economy. Partnering with the Sky-Faring Commission, we provided an online platform through Arcadia Kau. By empowering merchants with digital storefronts, we helped transform a declining market into a thriving center of commerce.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="side-studies" className="section">
                <div className="section__wrapper">
                    <div className="section-main section-main--center">
                        <h2 className="section-main__main-title">Other Success Stories</h2>
                    </div>
                    <div className="section-content">
                        <FadeIn direction="up" className="study-card" delay={.1} threshold={.1}>
                            <CaseStudyCard
                                header="Promoting A Festive Opportunity at Penacony’s Top College"
                                image="/website/images/resource/case-study/penacony.png"
                                alt="Rappa at Paperfold University" 
                            />
                        </FadeIn>
                        <FadeIn direction="up" className="study-card" delay={.15} threshold={.1}>
                            <CaseStudyCard
                                header="Helping Eagle Jump Make the Leap in the Gaming Industry"
                                image="/website/images/resource/case-study/eagle-jump.png"
                                alt="D2X Games Division - Eagle Jump" 
                            />
                        </FadeIn>
                        <FadeIn direction="up" className="study-card" delay={.2} threshold={.1}>
                            <CaseStudyCard
                                header="Echoing Hope Through the Galaxy with the Feathers of Hope"
                                image="/website/images/resource/case-study/robin.png"
                                alt="Robin" 
                            />
                        </FadeIn>
                        <FadeIn direction="up" className="study-card" delay={.25} threshold={.1}>
                            <CaseStudyCard
                                header="Empowering Idols aboard the Elmo"
                                image="/website/images/resource/case-study/yoohee.jpg"
                                alt="Yoohee" 
                            />  
                        </FadeIn>
                        <FadeIn direction="up" className="study-card" delay={.3} threshold={.1}>
                            <CaseStudyCard
                                header="Collaboration to Promote the Rises of Young Mangakas"
                                image="/website/images/resource/case-study/comic-girls.png"
                                alt="Rising young mangaka" 
                            />
                        </FadeIn>
                        <FadeIn direction="up" className="study-card" delay={.35} threshold={.1}>
                            <CaseStudyCard
                                header="Lending a Hand at the Zucchero Cafe"
                                image="/website/images/resource/case-study/zucchero-cafe.webp"
                                alt="Rising young mangaka" 
                            />
                        </FadeIn>
                        <FadeIn direction="up" className="study-card" delay={.4} threshold={.1}>
                            <CaseStudyCard
                                header="Partnering with Luofu’s Most Famous Street Performer"
                                image="/website/images/resource/case-study/guinafen.png"
                                alt="Famous street performer Guinafen" 
                            />
                        </FadeIn>
                        <FadeIn direction="up" className="study-card" delay={.45} threshold={.1}>
                            <CaseStudyCard
                                header="Assisting Kivotos’ in their Most Historical Yearly Event"
                                image="/website/images/resource/case-study/kivotos.png"
                                alt="Kivotos' famous halo games" 
                            />
                        </FadeIn>
                    </div>
                </div>
            </section>
        </div>
    )
}

function CaseStudyCard({header, image, alt} : {header: string, image: string, alt: string}) {
    return (
        <>
            <img className="study-card__image" src={image} alt={alt} />
            <div className="study-card__text">
                <p>{header}</p>
            </div>
        </>
    )
}