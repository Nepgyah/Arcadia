import { teamMember, leadership, appLeads, dev, design, finance, rnd, devops, leadershipSpecial, marketing, culinary } from "@/data/team";

import "@/styles/public/pages/d2x/team.scss";
import { Tooltip } from "@mui/material";

export default function Team() {

    return (
        <div id="page-d2x-team">

            <section id="hero" className="hero">
                <img className="hero__bg-image" src="/website/images/d2x/team/hero.webp" alt="Schale office" />
                <div className="hero__mask"></div>
                <div className="hero__wrapper">
                    <div className="hero__text hero__text--center hero__text--white">
                        <h1>The D2X Team</h1>
                        <p className="main-text">Meet the team making Arcadia possible</p>
                    </div>
                </div>
            </section>

            <div id="main-division">
                <section className="section" id="leadership">
                    <div className="section__wrapper">
                        <div className="section-main section-main--center section-main--white">
                            <h2>Leadership</h2>
                        </div>
                        <div className="section-content full-width">
                            {
                                leadershipSpecial.map(member => (
                                    <MemberCardLinkedIn 
                                        key={member.firstName}
                                        member={member}
                                        division='leadership'
                                        isWhite={true}
                                        linkedin={member.linkedin}
                                    />
                                ))
                            }
                            {
                                leadership.map(member => (
                                    <MemberCard 
                                        key={member.firstName} 
                                        member={member}
                                        division="leadership" 
                                        isWhite
                                    />
                                ))
                            }
                        </div>
                    </div>
                </section>

                <section className="section" id="leads">
                    <div className="section__wrapper">
                        <div className="section-main section-main--center section-main--white">
                            <h2>Product Lead</h2>
                        </div>
                        <div className="section-content full-width">
                            {
                                appLeads.map(member => (
                                    <MemberCard 
                                        key={member.firstName} 
                                        member={member}
                                        division="app-leads" 
                                        isWhite
                                    />
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>

            <div id="tech-division">
                <section className="section" id="platform">
                    <div className="section__wrapper">
                        <div className="section-main section-main--center">
                            <h2>Tech Team</h2>
                        </div>
                        <div className="section-content">
                            <h3>Platform / Dev Team</h3>
                            <div className="full-width">
                            {
                                dev.map(member => (
                                    <MemberCard 
                                        key={member.firstName} 
                                        member={member}
                                        division="platform" 
                                        isWhite={false}
                                    />
                                ))
                            }
                            </div>
                        </div>             
                        <div className="section-content" id="dev-ops">
                            <h3>Dev Ops / Cybersecurity</h3>
                            <div className="full-width">
                            {
                                devops.map(member => (
                                    <MemberCard 
                                        key={member.firstName} 
                                        member={member}
                                        division="devops" 
                                        isWhite={false}
                                    />
                                ))
                            }
                            </div>
                        </div>
                    </div>
                </section>
                <section id="design" className="section">
                    <div className="section__wrapper">
                        <div className="section-main section-main--center">
                            <h2>Design Team</h2>
                        </div>
                        <div className="section-content full-width">
                            {
                                design.map(member => (
                                    <MemberCard 
                                        key={member.firstName} 
                                        member={member}
                                        division="design" 
                                        isWhite={false}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>

            <div id="marketing-finance">
                <section className="section" id="marketing">
                    <div className="section__wrapper">
                        <div className="section-main section-main--center">
                            <h2>Marketing / PR</h2>
                        </div>
                        <div className="section-content full-width">
                            {
                                marketing.map(member => (
                                    <MemberCard 
                                        key={member.firstName} 
                                        member={member}
                                        division="marketing" 
                                        isWhite={false}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </section>
                
                <section className="section" id="finance">
                    <div className="section__wrapper">
                        <div className="section-main section-main--center">
                            <h2>Finance</h2>
                        </div>
                        <div className="section-content full-width">
                            {
                                finance.map(member => (
                                    <MemberCard 
                                        key={member.firstName} 
                                        member={member}
                                        division="finance" 
                                        isWhite={false}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>

            <div id="rnd-culinary">
                <section className="section" id="rnd">
                    <div className="section__wrapper">
                        <div className="section-main section-main--center section-main--white">
                            <h2>Research and Development</h2>
                        </div>
                        <div className="section-content full-width">
                            {
                                rnd.map(member => (
                                    <MemberCard 
                                        key={member.firstName} 
                                        member={member}
                                        division="rnd" 
                                        isWhite
                                    />
                                ))
                            }
                        </div>
                    </div>
                </section>

                <section className="section" id="finance">
                    <div className="section__wrapper">
                        <div className="section-main section-main--center section-main--white">
                            <h2>Culinary</h2>
                        </div>
                        <div className="section-content full-width">
                            {
                                culinary.map(member => (
                                    <MemberCard 
                                        key={member.lastName} 
                                        member={member}
                                        division="culinary" 
                                        isWhite
                                    />
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

function MemberCardLinkedIn({member, division, isWhite, linkedin = ''} : {member: teamMember, division: string, isWhite: boolean, linkedin: string}) {
    return (
        <Tooltip arrow placement="top" title='Check out my linkedin!'>
            <div className="card">
                <a href={linkedin} target='_blank'>
                    <img className="card__image card__image--highlight animation__hover-grow" src={`/website/images/d2x/team/${division}/${member.url}`} alt='Jon Lühmann' />
                </a>
                <div className={`card__text ${isWhite && 'card__text--white'}`}>
                    <p className="name">
                        <span className={`first-name ${!member.lastName && 'emphasis'}`}>{member.firstName}</span> {member.lastName && <span className="emphasis">{member.lastName}</span>}
                        </p>
                    <p className="position">{member.position}</p>
                </div>
            </div>
        </Tooltip>
    )
}
function MemberCard({member, division, isWhite} : {member: teamMember, division: string, isWhite: boolean}) {

    return (
        <div className="card">
            <img className="card__image" src={`/website/images/d2x/team/${division}/${member.url}`} alt={`Photo of ${member?.firstName} ${member.lastName != null ? member.lastName : ''}`} />
            <div className={`card__text ${isWhite && 'card__text--white'}`}>
                <p className="name">
                    <span className={`first-name ${!member.lastName && 'emphasis'}`}>{member.firstName}</span> {member.lastName && <span className="emphasis">{member.lastName}</span>}
                    </p>
                <p className="position">{member.position}</p>
            </div>
        </div>
    )
}