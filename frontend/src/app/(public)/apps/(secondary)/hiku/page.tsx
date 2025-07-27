'use client';

import { Button } from '@mui/material';
import RankIcon from '@mui/icons-material/WorkspacePremium';
import GuideIcon from '@mui/icons-material/ImportContacts';
import LeaderboardIcon from '@mui/icons-material/EmojiEvents';
import '@/styles/public/pages/apps/hiku.scss';
import { useEffect, useRef, useState } from 'react';

export default function Hiku() {

    const gachas = ['hsr', 'genshin', 'gfl', 'uma', 'ba']
    const [gacha, setGacha] = useState<string>('hsr')
    const gachaImage = useRef<HTMLDivElement>(null)
    useEffect(() => {
        // if (gachaImage.current) {
        //     heroAnimation(gachaImage.current)
        // }
    }, [])

    const heroAnimation = (gachaImage: HTMLDivElement) => {
        let index = 0;

        setInterval(() => {
            gachaImage.classList.remove('fade-in')
            gachaImage.classList.add('fade-out')
            setTimeout(() => {
                gachaImage.classList.remove('fade-out')
                gachaImage.classList.add('fade-in')
                index = (index + 1) % gachas.length;
                setGacha(gachas[index])
            }, 600)
        }, 10000)
    }
    return (
        <div id="page-apps-hiku">
            
            <section id='hero' className='hero'>
                <img id='gold-arrows' className='hero__bg-element' src="/website/images/apps/hiku/hero/gold-arrows.png" alt="" />
                <div className='hero__wrapper'>
                    <div className='hero__text hero__text--white'>
                        <p className='japanese'>アケーディアーひく</p>
                        <h1>Guide.<br />Gather.<br />Game.<br /></h1>
                        <p className='main-text'>The ultimate companion for every summon, spin, and pull. Hiku is here to help you reap your gatcha rewards.</p>
                        <Button variant='contained'>Master The Meta Today</Button>
                    </div>
                    <div id='gacha-slideshow' ref={gachaImage}>
                        <div id='gacha-image'>
                            <img id='image-part-1' src={`/website/images/apps/hiku/hero/${gacha}-1.png`} alt="" />
                            <img id='image-part-2' src={`/website/images/apps/hiku/hero/${gacha}-2.png`} alt="" />
                            <img id='image-part-3' src={`/website/images/apps/hiku/hero/${gacha}-3.png`} alt="" />
                        </div>
                    </div>
                    <div id='features'>
                        <div className='feature'>
                            <div>
                                <RankIcon/>
                                <p className='feature__header'>Tier Lists</p>
                            </div>
                            <p className='feature__text'>Stay on top of the meta with regularly updated tierlists for every major gacha game.</p>
                        </div>
                        <div className='feature'>
                            <div>
                                <GuideIcon />
                                <p className='feature__header'>Guides</p>
                            </div>
                            <p className='feature__text'>Optimize your team with curated builds and strategies from top players.</p>
                        </div>
                        <div className='feature'>
                            <div>
                                <LeaderboardIcon />
                                <p className='feature__header'>Leaderboards</p>
                            </div>
                            <p className='feature__text'>See how you stack up in each gacha’s late game scenario.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}