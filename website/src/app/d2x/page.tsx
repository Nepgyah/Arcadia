import { administration, appLeads, contentCreators, culinary, design, dev, devops, finance, hr, leadership, leadershipSpecial, marketing, rnd, teamMember } from '@/lib/data/team';
import '@/styles/pages/d2x/_team.scss';
import { Tooltip } from "@mui/material";

export default function D2XTeam() {

    return (
        <div id="page-d2x-team">

            <section id="hero" className="hero hero--mini">
                <img className="hero__bg-image" src="/pages/d2x/team/hero.webp" alt="Schale office" />
                <div className="hero__mask"></div>
                <div className="hero__wrapper">
                    <div className="hero__main-text hero__main-text--center clr-txt-light">
                        <h1>The D2X Team</h1>
                        <p className="main-text">Meet the team making Arcadia possible</p>
                    </div>
                </div>
            </section>

            <div className='gradient-secondary-primary clr-txt-light'>

                <section id='leadership' className='section'>
                    <div className='section__wrapper'>
                        <div className='section-main section-main--center'>
                            <h2>Leadership</h2>
                        </div>
                        <div className='grid grid--5-col'>
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
                
                <section id='leads' className='section'>
                    <div className='section__wrapper'>
                        <div className='section-main section-main--center'>
                            <h2>App Leads</h2>
                        </div>
                        <div className='grid grid--5-col'>
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

                <section id="admin" className="section">
                    <div className="section__wrapper">
                        <div className="section-main section-main--center">
                            <h2>Administration</h2>
                        </div>
                        <div className='grid grid--5-col'>
                            {
                                administration.map(member => (
                                    <MemberCard 
                                        key={member.firstName} 
                                        member={member}
                                        division="admin" 
                                        isWhite
                                    />
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>
            
            <div className='gradient-tertiary'>
                <section className="section">
                    <div className="section__wrapper">
                        <div className="section-main section-main--center">
                            <h2>Tech Team</h2>
                        </div>
                        <div className="section-main section-main--center">
                            <h3>Platform</h3>
                        </div>
                        <div className='grid grid--5-col'>
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
                </section>

                <section className="section">
                    <div className="section__wrapper">
                        <div className="section-main section-main--center">
                            <h3>Dev Ops / Cybersecurity</h3>
                        </div>
                        <div className='grid grid--5-col'>
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
                </section>

                <section className="section">
                    <div className="section__wrapper">
                        <div className="section-main section-main--center">
                            <h3>Design Team</h3>
                        </div>
                        <div className='grid grid--5-col'>
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

            <section className="section">
                <div className="section__wrapper">
                    <div className="section-main section-main--center">
                        <h2>Marketing / PR Team</h2>
                    </div>
                    <div className='grid grid--5-col'>
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

            <section className="section">
                <div className="section__wrapper">
                    <div className="section-main section-main--center">
                        <h2>Finance Team</h2>
                    </div>
                    <div className='grid grid--5-col'>
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

            <div className='gradient-secondary-primary clr-txt-light'>
                <section className="section">
                    <div className="section__wrapper">
                        <div className="section-main section-main--center">
                            <h2>Content Creation Team</h2>
                        </div>
                        <div className='grid grid--5-col'>
                            {
                                contentCreators.map(member => (
                                    <MemberCard 
                                        key={member.firstName} 
                                        member={member}
                                        division="cc" 
                                        isWhite
                                    />
                                ))
                            }
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="section__wrapper">
                        <div className="section-main section-main--center">
                            <h2>Reserach & Development Team</h2>
                        </div>
                        <div className='grid grid--5-col'>
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

            <section className="section">
                <div className="section__wrapper">
                    <div className="section-main section-main--center">
                        <h2>Culinary Team</h2>
                    </div>
                    <div className='grid grid--5-col'>
                        {
                            culinary.map(member => (
                                <MemberCard 
                                    key={member.lastName ? member.lastName : member.firstName} 
                                    member={member}
                                    division="culinary" 
                                    isWhite={false}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="section__wrapper">
                    <div className="section-main section-main--center">
                        <h2>Human Relations Team</h2>
                    </div>
                    <div className='grid grid--5-col'>
                        {
                            hr.map(member => (
                                <MemberCard 
                                    key={member.firstName} 
                                    member={member}
                                    division="hr" 
                                    isWhite={false}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>

        </div>
    )
}

function MemberCardLinkedIn({member, division, isWhite, linkedin = ''} : {member: teamMember, division: string, isWhite: boolean, linkedin: string}) {
    return (
        <Tooltip arrow placement="top" title='Check out my linkedin!'>
            <div className="card">
                <a href={linkedin} target='_blank'>
                    <img className="card__image card__image--highlight animation__hover-grow" src={`/pages/d2x/team/${division}/${member.url}`} alt={member.firstName} />
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
            <img className="card__image" src={`/pages/d2x/team/${division}/${member.url}`} alt={`Photo of ${member?.firstName} ${member.lastName != null ? member.lastName : ''}`} />
            <div className={`card__text ${isWhite && 'card__text--white'}`}>
                <p className="name">
                    <span className={`first-name ${!member.lastName && 'emphasis'}`}>{member.firstName}</span> {member.lastName && <span className="emphasis">{member.lastName}</span>}
                    </p>
                <p className="position">{member.position}</p>
            </div>
        </div>
    )
}