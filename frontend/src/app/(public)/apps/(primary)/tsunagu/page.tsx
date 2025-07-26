import '@/styles/public/pages/apps/tsunagu.scss';
import { Button } from '@mui/material';
import Link from 'next/link';

export default function Tsunagu() {

    return (
        <div id='page-apps-tsunagu'>

            <section id='hero' className='hero'>
                <img
                    className='hero__bg-element' 
                    src="/website/images/apps/tsunagu/hero/globe.svg" 
                    alt="" 
                />

                <div className='hero__wrapper hero__wrapper--two-column'>
                    <div className='text-container'>
                        <div className="hero__text hero__text--white">
                            <p className="japanese">アケーディアーつなぐ</p>
                            <h1>Arcadia’s Social Network</h1>
                            <p className="main-text">Post what you love. React how you feel with Arcadia Tsunagu. Your Otaku timeline starts here!</p>
                            <Link href='/platform/tsunagu' >
                                <Button variant="contained" color="primary">
                                    Join The Conversation
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className='support-image'>
                        <div className='column'>
                            <img src="/website/images/apps/tsunagu/hero/jjk.jpg" alt="" />
                            <p className='headline'>Your <br /><span>Feed</span></p>
                            <img src="/website/images/apps/tsunagu/hero/ba.jpg" alt="" />
                        </div>
                        <div className='column'>
                            <p className='headline'>Your <br /><span>World</span></p>
                            <img src="/website/images/apps/tsunagu/hero/selfie.png" alt="" />
                            <p className='headline'>Your <br /><span>Fandom</span></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}