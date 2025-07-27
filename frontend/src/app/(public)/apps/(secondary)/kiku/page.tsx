import '@/styles/public/pages/apps/kiku.scss';
import { Button } from '@mui/material';
import Link from 'next/link';

export default function Kiku() {
    return (
        <div id="page-apps-kiku">
            
            <section id="hero" className="hero">
                <img id='ribbon' className='hero__bg-element' src="/website/images/apps/kiku/hero/ribbon.png" alt="" />
                <img id='sound-wave' className='hero__bg-element' src="/website/images/apps/kiku/hero/sound-wave.png" alt="" />
                <img id='record' className='hero__bg-element' src="/website/images/apps/kiku/hero/record.png" alt="" />
                <div className='hero__wrapper hero__wrapper--two-column'>
                    <div className='center-content'>
                        <div className='hero__text hero__text--white'>
                            <p className='japanese'>アケーディアーきく</p>
                            <h1>A Soundtrack For Every Fan</h1>
                            <p className='main-text'>Immerse yourself in endless lo-fi beats, anime soundtracks, and curated playlists. Arcadia Kiku sets the mood for every moment.</p>
                            <Link href='/platform/kiku'>
                                <Button variant='contained'>Find Banger Beats</Button>
                            </Link>
                        </div>
                    </div>
                    <div className='image'>
                        <img id='robin' className='animation__floating' src="/website/images/apps/kiku/hero/robin-player.png" alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}