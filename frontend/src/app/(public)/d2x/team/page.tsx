import { teamMember, leadership, appLeads, dev, design, finance, rnd, devops } from "@/data/team";

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
                            <h2>Platform</h2>
                        </div>
                        <div className="section-content two-col">
                            <div className="left-col">
                                <h3>Dev</h3>
                                <div className="col-container">
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
                            <div className="right-col">
                                <h3>UX / UI</h3>
                                <div className="col-container">
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
                        </div>             
                        <div className="section-content" id="dev-ops">
                            <h3>Dev Ops</h3>
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
            </div>

            <div id="finance-rnd">
                <section className="section" id="finance">
                    <div className="section__wrapper">
                        <div className="section-main section-main--center section-main--white">
                            <h2>Finance</h2>
                        </div>
                        <div className="section-content full-width">
                            {
                                finance.map(member => (
                                    <MemberCard 
                                        key={member.firstName} 
                                        member={member}
                                        division="finance" 
                                        isWhite
                                    />
                                ))
                            }
                        </div>
                    </div>
                </section>

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
            </div>
        </div>
    )
}

function MemberCard({member, division, isWhite} : {member: teamMember, division: string, isWhite: boolean}) {

    if (member.lastName == 'Lühmann') {
        return (
            <Tooltip arrow placement="top" title='Check out my linkedin!'>
                <div className="card">
                    <a href="https://www.linkedin.com/in/jon-luehmann/" target='_blank'>
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
    } else {
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
}