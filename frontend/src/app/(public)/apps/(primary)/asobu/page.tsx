import '@/styles/public/pages/apps/asobu.scss';
import { Button } from '@mui/material';
import Link from 'next/link';

export default function Asobu() {

    return (
        <div id='page-apps-asobu'>

            <section id='hero' className='hero'>
                <img className='hero__bg-image' src="/website/images/apps/asobu/hero/irelia.jpg" alt="" />
                <div id='hero-arrow-1' className='hero__bg-element hero-arrow desktop-only' />
                <div id='hero-arrow-2' className='hero__bg-element hero-arrow desktop-only' />
                <div id='hero-arrow-3' className='hero__bg-element hero-arrow desktop-only' />

                <div className='hero__wrapper hero__wrapper--two-column'>
                    <div className='center-vertically'>
                        <div className='hero__text hero__text--white'>
                            <p className="japanese">アケーディアーあそぶ</p>
                            <h1>Gaming Adventures Begin Here</h1>
                            <p className="main-text">Discover hidden gems and mod up on current classics. Arcadia Asobu is the place for any gamer.</p>
                            <Link href='/platform/asobu'>
                                <Button variant="contained" color="primary">
                                    Find Your Next Classic
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div></div>
                </div>
            </section>
        </div>
    )
}