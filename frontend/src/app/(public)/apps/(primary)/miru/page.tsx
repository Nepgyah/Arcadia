import Button from '@mui/material/Button';

import "@/styles/public/pages/apps/miru.scss";
import Link from 'next/link';

export default function Miru() {

    return (
        <div id="page-apps-miru">

            <section id="hero" className="hero">
                
                <img className='hero__bg-image' src="/website/images/apps/miru/hero/anime-world.jpg" alt="" />
                <div id='hero-divider' className='hero__bg-element desktop-only'></div>
                <img 
                    id='anime-characters'
                    className='hero__bg-element desktop-only' 
                    src="/website/images/apps/miru/hero/anime-characters.png" 
                    alt="" 
                />
                <img 
                    id='wind-el-1'
                    className='hero__bg-element desktop-only' 
                    src="/website/images/apps/miru/hero/wind-el-1.png" 
                    alt="" 
                />
                <img 
                    id='wind-el-2'
                    className='hero__bg-element desktop-only' 
                    src="/website/images/apps/miru/hero/wind-el-2.png" 
                    alt="" 
                />
                <img 
                    id='wind-el-3'
                    className='hero__bg-element desktop-only' 
                    src="/website/images/apps/miru/hero/wind-el-3.png" 
                    alt="" 
                />
                <div className="hero__wrapper hero__wrapper--two-column">
                    <div></div>
                    <div className="content">
                        <div className="hero__text hero__text--white">
                            <p className="japanese">アケーディアーみる</p>
                            <h1>Your Ultimate Anime Companion</h1>
                            <p className='main-text'>Watch, Track and Rate all your favorite (or trash) on a single platform with Arcadia Miru.</p>
                            <Link href="/platform/miru">
                                <Button variant="contained" color="primary">
                                    Dive Into Anime Today  
                                </Button>
                            </Link>
                        </div>

                        <div className="boxes">
                            <div className='box'>
                                <img src="/website/partners/a1-pictures.png" alt="" />
                            </div>
                            <div className='box'>
                                <img src="/website/partners/jc-staff.png" alt="" />
                            </div>
                            <div className='box'>
                                <img src="/website/partners/pony-canyon.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}